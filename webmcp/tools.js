import { defineTool } from "@nekuda/webmcp-sdk";

const RESULT_SCHEMA_URL = "https://hayalows.com/webmcp/results.schema.json";
const RESULT_SCHEMA_VERSION = "1.0.0";
const PENDING_ENQUIRY_KEY = "hayalows.webmcp.pending_enquiry.v1";

const CONTENT = [
  {
    id: "overview",
    title: "What Hayalows does",
    text: "Hayalows is a Ghanaian business that helps small and medium-sized businesses become easier to choose, trust and grow. The work combines business clarity, brand communication, customer experience, operations, follow-up systems, websites and practical digital tools.",
    tags: ["hayalows", "ghana", "ghanaian", "sme", "small business", "growth", "customer experience", "service"],
    url: "https://hayalows.com/",
  },
  {
    id: "fit",
    title: "Who Hayalows helps",
    text: "Hayalows helps businesses with unclear offers, inconsistent customer touchpoints, weak trust, or enquiries and follow-up that get lost in chats or memory. Small and early-stage businesses can start with a clear, practical scope.",
    tags: ["fit", "customer", "enquiries", "early stage", "startup", "small business"],
    url: "https://hayalows.com/#what-we-do",
  },
  {
    id: "business-systems",
    title: "Business clarity and systems",
    text: "Clarify what the business sells, how customers buy, and how enquiries, orders, records and follow-up should move. Example work includes offer and process clarity, customer and order flows, basic records, trackers and practical working systems.",
    tags: ["offer", "operations", "process", "records", "tracker", "follow up", "systems", "service"],
    url: "https://hayalows.com/#what-we-do",
  },
  {
    id: "brand-communication",
    title: "Brand and communication",
    text: "Align words and presentation across flyers, WhatsApp, social pages and customer messages so the business feels consistent. Example work includes brand direction, service descriptions, customer messages, content and visual structure.",
    tags: ["brand", "branding", "communication", "flyer", "whatsapp", "content", "visual", "service"],
    url: "https://hayalows.com/#what-we-do",
  },
  {
    id: "websites-tools",
    title: "Websites and digital tools",
    text: "Build clear pages and simple tools that help customers understand, enquire, order and receive a useful next step. Example work includes business websites, landing and enquiry pages, dashboards and simple internal tools.",
    tags: ["website", "web design", "landing page", "dashboard", "digital tool", "technology", "service"],
    url: "https://hayalows.com/#what-we-do",
  },
  {
    id: "approach",
    title: "How Hayalows works",
    text: "First understand where the customer or business process is breaking down. Then build the smallest practical response that can improve it, learn from real use, and improve with evidence. A new logo, website or app is not automatically the answer.",
    tags: ["approach", "process", "evidence", "scope", "how it works"],
    url: "https://hayalows.com/#how-we-work",
  },
  {
    id: "contact",
    title: "Starting an enquiry",
    text: "A visitor can start with the guided enquiry, WhatsApp or email without preparing a perfect brief. Explain what is happening, what should improve, and how customers currently find or contact the business. The guided form prepares a message for review and does not send anything automatically.",
    tags: ["contact", "enquiry", "quote", "consultation", "whatsapp", "email", "start"],
    url: "https://hayalows.com/#contact-form",
  },
  {
    id: "payments",
    title: "Payments and refunds",
    text: "Payments are completed on verified Paystack pages or through the public USSD options shown on the payment page. Hayalows.com does not collect card details or claim payment success. The payments and refunds policy explains cancellations, refunds and support.",
    tags: ["payment", "paystack", "ussd", "refund", "cancellation", "card"],
    url: "https://hayalows.com/payments-and-refunds/",
  },
  {
    id: "privacy-terms",
    title: "Privacy and terms",
    text: "Hayalows publishes privacy, payment and terms pages explaining how contact, service, order and payment-related information is handled and the conditions that apply when using the website or working with Hayalows Ventures.",
    tags: ["privacy", "terms", "policy", "data"],
    url: "https://hayalows.com/privacy/",
  },
];

const STOP_WORDS = new Set(["a", "an", "and", "are", "can", "do", "for", "hayalows", "help", "how", "i", "in", "is", "it", "me", "my", "of", "on", "or", "the", "to", "we", "what", "with", "work", "you"]);
const TOKEN_ALIASES = {
  enquiries: "enquiry",
  payments: "payment",
  refunds: "refund",
  services: "service",
  websites: "website",
};

function tokens(value) {
  return String(value)
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((token) => token.length > 1 && !STOP_WORDS.has(token))
    .map((token) => TOKEN_ALIASES[token] || token);
}

export function searchHayalowsContent(query, limit = 4) {
  const queryTokens = [...new Set(tokens(query))];
  if (!queryTokens.length) return [];

  return CONTENT.map((section, index) => {
    const title = section.title.toLowerCase();
    const tags = section.tags.join(" ").toLowerCase();
    const text = section.text.toLowerCase();
    const score = queryTokens.reduce((total, token) => (
      total
      + (title.includes(token) ? 5 : 0)
      + (tags.includes(token) ? 3 : 0)
      + (text.includes(token) ? 1 : 0)
    ), 0);
    return { section, score, index };
  })
    .filter(({ score }) => score >= 3)
    .sort((a, b) => b.score - a.score || a.index - b.index)
    .slice(0, limit)
    .map(({ section }) => section);
}

export const askHayalows = defineTool({
  stableKey: "hayalows.ask_site",
  name: "ask_hayalows",
  title: "Ask Hayalows",
  description: "Find authoritative Hayalows information when a visitor asks about services, business fit, approach, enquiries, payments, refunds, privacy or terms. Read-only. Returns a stable JSON object with schemaVersion, schemaUrl, query, matches (each with id, title, text, tags and url), note, and contact (an object or null). The machine-readable AskHayalowsResult contract is published at https://hayalows.com/webmcp/results.schema.json.",
  inputSchema: {
    type: "object",
    properties: {
      query: {
        type: "string",
        minLength: 2,
        maxLength: 300,
        description: "The visitor's question or the Hayalows topic to find.",
      },
    },
    required: ["query"],
    additionalProperties: false,
  },
  annotations: { readOnlyHint: true },
  source: "merchant_authored",
  intent: "answer",
  execute({ query }) {
    const cleanQuery = String(query || "").trim();
    if (cleanQuery.length < 2) throw new Error("Ask Hayalows requires a question of at least two characters.");
    if (cleanQuery.length > 300) throw new Error("Ask Hayalows accepts questions up to 300 characters.");
    const matches = searchHayalowsContent(cleanQuery);
    return {
      schemaVersion: RESULT_SCHEMA_VERSION,
      schemaUrl: RESULT_SCHEMA_URL,
      query: cleanQuery,
      matches,
      note: matches.length
        ? "Use these published sections to answer the visitor and cite the supplied source URLs."
        : "The site has no directly matching published section. Do not infer an answer; invite the visitor to start a general enquiry.",
      contact: matches.length ? null : { url: "https://hayalows.com/#contact-form", email: "info@hayalows.com" },
    };
  },
});

const OFFERINGS = [
  {
    key: "business_clarity",
    name: "Business clarity and systems",
    bestFor: "Unclear offers, customer steps, records, orders or follow-up.",
    selector: ".capability-list .capability:nth-of-type(1)",
  },
  {
    key: "brand_communication",
    name: "Brand and communication",
    bestFor: "Inconsistent words, presentation, service descriptions or customer messages.",
    selector: ".capability-list .capability:nth-of-type(2)",
  },
  {
    key: "websites_tools",
    name: "Websites and digital tools",
    bestFor: "A clearer online path, enquiry page, dashboard or simple internal tool.",
    selector: ".capability-list .capability:nth-of-type(3)",
  },
];

export const browseHayalowsServices = defineTool({
  stableKey: "hayalows.browse_services",
  name: "browse_hayalows_services",
  title: "Browse Hayalows services",
  description: "Browse Hayalows service areas when a visitor wants to compare the available work or identify a likely fit. Reversible page action; never submits an enquiry. Returns a stable JSON object with schemaVersion, schemaUrl, offerings (key, name and bestFor), selected, sourceUrl, pageEffect and navigationStarted. The machine-readable BrowseHayalowsServicesResult contract is published at https://hayalows.com/webmcp/results.schema.json.",
  inputSchema: {
    type: "object",
    properties: {
      service: {
        type: "string",
        enum: ["all", "business_clarity", "brand_communication", "websites_tools"],
        default: "all",
        description: "The service area to highlight, or all to show the complete offering.",
      },
    },
    additionalProperties: false,
  },
  annotations: { readOnlyHint: false },
  source: "merchant_authored",
  intent: "act",
  execute({ service = "all" }) {
    if (!["all", ...OFFERINGS.map((offering) => offering.key)].includes(service)) {
      throw new Error("Choose all or a supported Hayalows service area.");
    }
    const selected = OFFERINGS.find((offering) => offering.key === service);
    const section = document.querySelector("#what-we-do");
    if (!section) {
      setTimeout(() => location.assign("/#what-we-do"), 0);
      return {
        schemaVersion: RESULT_SCHEMA_VERSION,
        schemaUrl: RESULT_SCHEMA_URL,
        offerings: OFFERINGS.map(({ selector, ...offering }) => offering),
        selected: selected?.key || "all",
        sourceUrl: "https://hayalows.com/#what-we-do",
        pageEffect: selected
          ? `Opening the services page for ${selected.name}.`
          : "Opening the complete Hayalows services section.",
        navigationStarted: true,
      };
    }

    if (selected) {
      const card = document.querySelector(selected.selector);
      if (!card) throw new Error(`The ${selected.name} service card is unavailable.`);
      const details = card.querySelector("details");
      if (details) details.open = true;
      card.scrollIntoView({ behavior: "smooth", block: "center" });
      card.querySelector("summary")?.focus({ preventScroll: true });
    } else {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    return {
      schemaVersion: RESULT_SCHEMA_VERSION,
      schemaUrl: RESULT_SCHEMA_URL,
      offerings: OFFERINGS.map(({ selector, ...offering }) => offering),
      selected: selected?.key || "all",
      sourceUrl: "https://hayalows.com/#what-we-do",
      pageEffect: selected ? `Opened ${selected.name} examples.` : "Moved the page to all Hayalows service areas.",
      navigationStarted: false,
    };
  },
});

const HELP_TYPES = {
  business_clarity: "Business clarity or systems",
  brand_communication: "Brand and communication",
  websites_tools: "Website or digital tool",
  product_venture: "Product or venture discussion",
  partnership: "Partnership",
  general: "General enquiry",
};

function setFormValue(form, name, value) {
  if (!value) return;
  const field = form.elements.namedItem(name);
  if (!field) throw new Error(`The enquiry field ${name} is unavailable.`);
  field.value = value;
  field.dispatchEvent(new Event(field.tagName === "SELECT" ? "change" : "input", { bubbles: true }));
}

function normaliseEnquiryDraft({ help_type, message, name, business, email, phone }) {
  const cleanMessage = String(message || "").trim();
  if (cleanMessage.length < 10) throw new Error("The enquiry message must contain at least ten characters.");
  if (cleanMessage.length > 2000) throw new Error("The enquiry message must not exceed 2,000 characters.");
  const helpType = HELP_TYPES[help_type];
  if (!helpType) throw new Error("Choose a supported Hayalows enquiry category.");
  const cleanName = String(name || "").trim();
  const cleanBusiness = String(business || "").trim();
  const cleanEmail = String(email || "").trim();
  const cleanPhone = String(phone || "").trim();
  if (cleanName.length > 120) throw new Error("The visitor name must not exceed 120 characters.");
  if (cleanBusiness.length > 160) throw new Error("The business name must not exceed 160 characters.");
  if (cleanEmail.length > 254) throw new Error("The email address must not exceed 254 characters.");
  if (cleanEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) throw new Error("Enter a valid email address.");
  if (cleanPhone.length > 40) throw new Error("The phone number must not exceed 40 characters.");
  return {
    help_type,
    helpType,
    message: cleanMessage,
    name: cleanName,
    business: cleanBusiness,
    email: cleanEmail,
    phone: cleanPhone,
  };
}

function enquiryResult(draft, navigationStarted) {
  const contactDetailsIncluded = [draft.name, draft.business, draft.email, draft.phone].some(Boolean);
  return {
    schemaVersion: RESULT_SCHEMA_VERSION,
    schemaUrl: RESULT_SCHEMA_URL,
    status: navigationStarted ? "draft_saved" : "draft_ready",
    helpType: draft.helpType,
    message: draft.message,
    contactDetailsIncluded,
    sent: false,
    navigationStarted,
    nextStep: navigationStarted
      ? "The homepage is opening with the draft. The visitor must review it and choose WhatsApp, email or copy message."
      : "The visitor must review the visible draft and choose WhatsApp, email or copy message.",
    sourceUrl: "https://hayalows.com/#contact-form",
  };
}

function fillEnquiryForm(form, draft) {
  setFormValue(form, "helpType", draft.helpType);
  setFormValue(form, "message", draft.message);
  setFormValue(form, "name", draft.name);
  setFormValue(form, "business", draft.business);
  setFormValue(form, "email", draft.email);
  setFormValue(form, "phone", draft.phone);

  const hasContactDetails = [draft.name, draft.business, draft.email, draft.phone].some(Boolean);
  const contactDetails = form.querySelector(".form-contact-details");
  if (hasContactDetails && contactDetails) contactDetails.open = true;
  const status = form.querySelector("[data-form-status]");
  if (status) {
    status.textContent = "Your draft is ready. Review it, then choose WhatsApp, email or copy the message yourself.";
    status.dataset.state = "success";
  }
  form.scrollIntoView({ behavior: "smooth", block: "start" });
  form.elements.namedItem("message")?.focus({ preventScroll: true });
}

export function restorePendingEnquiryDraft() {
  const form = document.querySelector("#contact-form");
  if (!form) return false;
  let stored;
  try {
    stored = sessionStorage.getItem(PENDING_ENQUIRY_KEY);
  } catch {
    return false;
  }
  if (!stored) return false;
  try {
    const draft = normaliseEnquiryDraft(JSON.parse(stored));
    fillEnquiryForm(form, draft);
    sessionStorage.removeItem(PENDING_ENQUIRY_KEY);
    return true;
  } catch {
    sessionStorage.removeItem(PENDING_ENQUIRY_KEY);
    return false;
  }
}

export const prepareHayalowsEnquiry = defineTool({
  stableKey: "hayalows.prepare_enquiry",
  name: "prepare_hayalows_enquiry",
  title: "Prepare a Hayalows enquiry",
  description: "Prepare the Hayalows guided-enquiry form when a visitor is ready to discuss a business problem. Reversible draft-only action: it fills the visible form or opens the homepage with the draft, but never sends, submits or opens a payment. Returns a stable JSON object with schemaVersion, schemaUrl, status, helpType, message, contactDetailsIncluded, sent (always false), navigationStarted, nextStep and sourceUrl. The machine-readable PrepareHayalowsEnquiryResult contract is published at https://hayalows.com/webmcp/results.schema.json.",
  inputSchema: {
    type: "object",
    properties: {
      help_type: {
        type: "string",
        enum: Object.keys(HELP_TYPES),
        description: "The closest Hayalows enquiry category.",
      },
      message: {
        type: "string",
        minLength: 10,
        maxLength: 2000,
        description: "What is happening now and what the visitor wants to improve.",
      },
      name: { type: "string", maxLength: 120, description: "Optional visitor name." },
      business: { type: "string", maxLength: 160, description: "Optional business name." },
      email: { type: "string", format: "email", maxLength: 254, description: "Optional email address." },
      phone: { type: "string", maxLength: 40, description: "Optional phone or WhatsApp number." },
    },
    required: ["help_type", "message"],
    additionalProperties: false,
  },
  annotations: { readOnlyHint: false },
  source: "merchant_authored",
  intent: "act",
  execute(input) {
    const draft = normaliseEnquiryDraft(input);
    const form = document.querySelector("#contact-form");
    if (!form) {
      try {
        sessionStorage.setItem(PENDING_ENQUIRY_KEY, JSON.stringify(draft));
      } catch {
        throw new Error("The enquiry draft cannot be carried to the homepage in this browser session.");
      }
      setTimeout(() => location.assign("/#contact-form"), 0);
      return enquiryResult(draft, true);
    }
    fillEnquiryForm(form, draft);
    return enquiryResult(draft, false);
  },
});
