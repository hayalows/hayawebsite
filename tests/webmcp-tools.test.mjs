import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

import {
  askHayalows,
  browseHayalowsServices,
  prepareHayalowsEnquiry,
  searchHayalowsContent,
} from "../webmcp/tools.js";
import { askPapaKojo, searchProfileContent } from "../cv/webmcp/tools.js";

test("Hayalows retrieval returns focused published sources", () => {
  const matches = searchHayalowsContent("Can you help with a website and customer follow-up?");
  assert.ok(matches.length >= 2);
  assert.equal(matches[0].id, "websites-tools");
  assert.ok(matches.some((match) => match.id === "business-systems"));
  assert.ok(matches.every((match) => match.url.startsWith("https://hayalows.com/")));

  const response = askHayalows.execute({ query: "How do refunds and Paystack payments work?" });
  assert.equal(response.matches[0].id, "payments");
  assert.equal(response.matches.length, 1);
  assert.match(response.matches[0].text, /does not collect card details/i);
});

test("Hayalows retrieval fails closed when nothing is published", () => {
  const response = askHayalows.execute({ query: "quantum submarine leasing" });
  assert.deepEqual(response.matches, []);
  assert.match(response.note, /no directly matching published section/i);
  assert.equal(response.contact.url, "https://hayalows.com/#contact-form");
});

test("CV retrieval returns only public profile material", () => {
  const matches = searchProfileContent("banking Excel treasury bill experience");
  assert.equal(matches[0].title, "Banking and customer service experience");
  assert.ok(matches.every((match) => match.url.startsWith("https://pkm.hayalows.com/")));

  const response = askPapaKojo.execute({ query: "What degree did Papa Kojo earn?" });
  assert.equal(response.matches[0].title, "Education");
  assert.equal(response.matches.length, 1);
  assert.match(response.matches[0].text, /Actuarial Science/);
});

test("service browsing visibly opens the selected offering", () => {
  const detail = { open: false };
  let focused = false;
  let scrolled = false;
  const card = {
    querySelector(selector) {
      if (selector === "details") return detail;
      if (selector === "summary") return { focus() { focused = true; } };
      return null;
    },
    scrollIntoView() { scrolled = true; },
  };
  const section = { scrollIntoView() {} };
  globalThis.document = {
    querySelector(selector) {
      if (selector === "#what-we-do") return section;
      if (selector.endsWith(":nth-of-type(2)")) return card;
      return null;
    },
  };

  const response = browseHayalowsServices.execute({ service: "brand_communication" });
  assert.equal(detail.open, true);
  assert.equal(focused, true);
  assert.equal(scrolled, true);
  assert.equal(response.selected, "brand_communication");
});

test("enquiry preparation fills a reversible draft and never sends", () => {
  const events = [];
  const fields = Object.fromEntries(
    ["helpType", "message", "name", "business", "email", "phone"].map((name) => [
      name,
      {
        tagName: name === "helpType" ? "SELECT" : "INPUT",
        value: "",
        dispatchEvent(event) { events.push([name, event.type]); },
        focus() {},
      },
    ]),
  );
  const details = { open: false };
  const status = { textContent: "", dataset: {} };
  let scrolled = false;
  const form = {
    elements: { namedItem(name) { return fields[name] || null; } },
    querySelector(selector) {
      if (selector === ".form-contact-details") return details;
      if (selector === "[data-form-status]") return status;
      return null;
    },
    scrollIntoView() { scrolled = true; },
  };
  globalThis.document = { querySelector: (selector) => (selector === "#contact-form" ? form : null) };

  const response = prepareHayalowsEnquiry.execute({
    help_type: "business_clarity",
    message: "Customers ask for prices but often do not reply.",
    name: "Ama",
    business: "Example Studio",
  });

  assert.equal(fields.helpType.value, "Business clarity or systems");
  assert.equal(fields.message.value, "Customers ask for prices but often do not reply.");
  assert.equal(details.open, true);
  assert.equal(scrolled, true);
  assert.equal(response.sent, false);
  assert.equal(response.status, "draft_ready");
  assert.match(status.textContent, /review/i);
  assert.ok(events.some(([name, type]) => name === "helpType" && type === "change"));
});

test("homepage registration exposes three tools with telemetry disabled", async () => {
  const registered = [];
  let fetches = 0;
  globalThis.fetch = async () => { fetches += 1; return { ok: true }; };
  globalThis.location = { pathname: "/" };
  globalThis.document = {
    modelContext: {
      async registerTool(tool) {
        registered.push(tool);
      },
    },
  };
  globalThis.addEventListener = () => {};

  await import("../webmcp/entry.js?test=homepage");
  await new Promise((resolve) => setTimeout(resolve, 10));

  assert.deepEqual(
    registered.map((tool) => tool.name),
    ["ask_hayalows", "browse_hayalows_services", "prepare_hayalows_enquiry"],
  );
  assert.equal(fetches, 0);
  assert.equal(registered[0].annotations.readOnlyHint, true);
  assert.equal(registered[2].annotations.readOnlyHint, false);
});

test("HTML entry points declare the pinned local SDK and agent-readable alternates", async () => {
  const files = [
    "../index.html",
    "../pay/index.html",
    "../payments-and-refunds/index.html",
    "../privacy/index.html",
    "../terms/index.html",
    "../404.html",
    "../cv/index.html",
    "../cv/resume/index.html",
  ];
  for (const file of files) {
    const html = await readFile(new URL(file, import.meta.url), "utf8");
    const importMapSource = html.match(/<script type="importmap">([\s\S]*?)<\/script>/)?.[1];
    assert.ok(importMapSource, `missing import map in ${file}`);
    const importMap = JSON.parse(importMapSource);
    assert.equal(importMap.imports["@nekuda/webmcp-sdk"], "/vendor/webmcp-sdk-0.5.0.js");
    assert.match(html, /rel="alternate" type="text\/plain"/);
    assert.match(html, /<script type="module" src="\/webmcp\/entry\.js"><\/script>/);

    for (const source of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
      assert.doesNotThrow(() => JSON.parse(source[1]), `invalid JSON-LD in ${file}`);
    }
  }
});
