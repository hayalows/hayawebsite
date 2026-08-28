import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const html = await readFile(new URL("../cv/index.html", import.meta.url), "utf8");
const jsonLdMatch = html.match(
  /<script\s+type="application\/ld\+json">\s*([\s\S]*?)\s*<\/script>/i,
);

assert.ok(jsonLdMatch, "cv/index.html must include JSON-LD structured data");
const profilePage = JSON.parse(jsonLdMatch[1]);

test("ProfilePage dates use timezone-qualified ISO 8601 datetimes", () => {
  assert.equal(profilePage["@type"], "ProfilePage");

  for (const property of ["dateCreated", "dateModified"]) {
    assert.match(
      profilePage[property],
      /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:Z|[+-]\d{2}:\d{2})$/,
      `${property} must be a complete ISO 8601 datetime with timezone`,
    );
    assert.equal(Number.isNaN(Date.parse(profilePage[property])), false);
  }
});
