import { defineTool } from "@nekuda/webmcp-sdk";

const CONTENT = [
  {
    id: "overview",
    title: "What Hayalows does",
    text: "Hayalows is a Ghanaian business that helps small and medium-sized businesses become easier to choose, trust and grow. The work combines business clarity, brand communication, customer experience, operations, follow-up systems, websites and practical digital tools.",
    tags: ["hayalows", "ghana", "ghanaian", "sme", "small business", "growth", "customer experience"],
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
    tags: ["offer", "operations", "process", "records", "tracker", "follow up", "systems"],
    url: "https://hayalows.com/#what-we-do",
  },
  {
    id: "brand-communication",
    title: "Brand and communication",
    text: "Align words and presentation across flyers, WhatsApp, social pages and customer messages so the business feels consistent. Example work includes brand direction, service descriptions, customer messages, content and visual structure.",
    tags: ["brand", "branding", "communication", "flyer", "whatsapp", "content", "visual"],
    url: "https://hayalows.com/#what-we-do",
  },
  {
    id: "websites-tools",
    title: "Websites and digital tools",
    text: "Build clear pages and simple tools that help customers understand, enquire, order and receive a useful next step. Example work includes business websites, landing and enquiry pages, dashboards and simple internal tools.",
    tags: ["website", "web design", "landing page", "dashboard", "digital tool", "technology"],
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

function tokens(value) {
  return String(value)
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((token) => token.length > 1 && !STOP_WORDS.has(token));
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
  description: "Find authoritative Hayalows information when a visitor asks about services, business fit, approach, enquiries, payments, refunds, privacy or terms. Returns relevant published sections and canonical source URLs for the agent to answer from; it does not generate an answer or change the page.",
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
    const matches = searchHayalowsContent(cleanQuery);
    return {
      query: cleanQuery,
      matches,
      note: matches.length
        ? "Use these published sections to answer the visitor and cite the supplied source URLs."
        : "The site has no directly matching published section. Do not infer an answer; invite the visitor to start a general enquiry.",
      contact: matches.length ? undefined : { url: "https://hayalows.com/#contact-form", email: "info@hayalows.com" },
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
  description: "Show Hayalows service areas when a visitor wants to understand the available work or identify a likely fit. Returns all three offerings, highlights the selected area on the visible page and opens its examples; it does not submit an enquiry.",
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
  annotations: { readOnlyHint: true },
  source: "merchant_authored",
  intent: "answer",
  execute({ service = "all" }) {
    const section = document.querySelector("#what-we-do");
    if (!section) throw new Error("The Hayalows services section is unavailable on this page.");

    const selected = OFFERINGS.find((offering) => offering.key === service);
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
      offerings: OFFERINGS.map(({ selector, ...offering }) => offering),
      selected: selected?.key || "all",
      sourceUrl: "https://hayalows.com/#what-we-do",
      pageEffect: selected ? `Opened ${selected.name} examples.` : "Moved the page to all Hayalows service areas.",
    };
  },
});

const HELP_TYPES = {
  business_clarity: "Business clarity or systems",
  brand_communication: "Brand and communication",
  website_tool: "Website or digital tool",
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

export const prepareHayalowsEnquiry = defineTool({
  stableKey: "hayalows.prepare_enquiry",
  name: "prepare_hayalows_enquiry",
  title: "Prepare a Hayalows enquiry",
  description: "Prepare the visible Hayalows guided-enquiry form when a visitor is ready to discuss a business problem. Fills a reversible draft, scrolls to it and leaves review plus WhatsApp or email submission entirely to the visitor; nothing is sent automatically.",
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
  execute({ help_type, message, name, business, email, phone }) {
    const form = document.querySelector("#contact-form");
    if (!form) throw new Error("The Hayalows guided-enquiry form is unavailable on this page.");
    const cleanMessage = String(message || "").trim();
    if (cleanMessage.length < 10) throw new Error("The enquiry message must contain at least ten characters.");
    const helpType = HELP_TYPES[help_type];
    if (!helpType) throw new Error("Choose a supported Hayalows enquiry category.");

    setFormValue(form, "helpType", helpType);
    setFormValue(form, "message", cleanMessage);
    setFormValue(form, "name", String(name || "").trim());
    setFormValue(form, "business", String(business || "").trim());
    setFormValue(form, "email", String(email || "").trim());
    setFormValue(form, "phone", String(phone || "").trim());

    const hasContactDetails = [name, business, email, phone].some((value) => String(value || "").trim());
    const contactDetails = form.querySelector(".form-contact-details");
    if (hasContactDetails && contactDetails) contactDetails.open = true;
    const status = form.querySelector("[data-form-status]");
    if (status) {
      status.textContent = "Your draft is ready. Review it, then choose WhatsApp, email or copy the message yourself.";
      status.dataset.state = "success";
    }
    form.scrollIntoView({ behavior: "smooth", block: "start" });
    form.elements.namedItem("message")?.focus({ preventScroll: true });

    return {
      status: "draft_ready",
      helpType,
      message: cleanMessage,
      contactDetailsIncluded: hasContactDetails,
      sent: false,
      nextStep: "The visitor must review the visible draft and choose WhatsApp, email or copy message.",
      sourceUrl: "https://hayalows.com/#contact-form",
    };
  },
});
