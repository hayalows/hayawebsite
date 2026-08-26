import { defineTool } from "@nekuda/webmcp-sdk";

const RESULT_SCHEMA_URL = "https://pkm.hayalows.com/webmcp/results.schema.json";
const RESULT_SCHEMA_VERSION = "1.0.0";

const CONTENT = [
  {
    title: "Professional profile",
    text: "Papa Kojo Mensah is an operations and customer experience professional based in Ghana and open to thoughtful work globally. He makes complex work easier to understand and use through accurate records, clear communication, practical tools and thoughtful customer experiences.",
    tags: ["about", "profile", "operations", "customer experience", "ghana", "professional"],
    url: "https://pkm.hayalows.com/#about",
  },
  {
    title: "Where Papa Kojo adds value",
    text: "His work centres on information people can trust, service that feels clear, and tools that earn their place. Supporting strengths include data quality, Excel, Google Sheets, process documentation, project coordination, brand identity and graphic design.",
    tags: ["skills", "strengths", "data", "excel", "google sheets", "process", "design"],
    url: "https://pkm.hayalows.com/#skills",
  },
  {
    title: "Current experience",
    text: "Papa Kojo is a Data Entry Specialist at Springboard, remote, from April 2026. He checks historical records against original sources, corrects incomplete or mismatched information, protects sensitive data, and records work and revisions clearly for review.",
    tags: ["experience", "springboard", "data entry", "records", "quality", "current role"],
    url: "https://pkm.hayalows.com/#experience",
  },
  {
    title: "Banking and customer service experience",
    text: "At Absa Bank Ghana, Papa Kojo worked in customer service and sales support from November 2024 to October 2025. He processed customer and account requests, built an Excel treasury-bill quotation tool, and supported youth-account and wholesale-investment work through careful tracking and follow-up.",
    tags: ["absa", "banking", "customer service", "treasury bill", "sales", "excel"],
    url: "https://pkm.hayalows.com/#experience",
  },
  {
    title: "Independent design work",
    text: "Through Iconka Designs, Papa Kojo has worked as a freelance graphic designer since 2022, creating brand identities and visual communication alongside his operations work.",
    tags: ["iconka", "graphic design", "brand", "freelance", "creative"],
    url: "https://pkm.hayalows.com/#experience",
  },
  {
    title: "Selected projects",
    text: "Selected projects include RouteLab, a map-first tool for planning and remembering everyday movement; Hayalows Ventures, combining brand, customer journeys, operations and practical systems; and English Chat Finder, which searches availability across more than 200 conversation calendars.",
    tags: ["projects", "portfolio", "routelab", "hayalows", "english chat finder", "products"],
    url: "https://pkm.hayalows.com/#projects",
  },
  {
    title: "Education",
    text: "Papa Kojo earned a Bachelor of Science in Actuarial Science from Kwame Nkrumah University of Science and Technology in 2024.",
    tags: ["education", "degree", "actuarial science", "knust", "university"],
    url: "https://pkm.hayalows.com/#education",
  },
  {
    title: "Contact and CV",
    text: "Papa Kojo can be contacted at mpapakojo@gmail.com or through LinkedIn. A concise printable one-page CV is published at pkm.hayalows.com/resume/. The private source document and private phone number are not public.",
    tags: ["contact", "email", "linkedin", "resume", "cv", "hire"],
    url: "https://pkm.hayalows.com/#contact",
  },
];

const STOP_WORDS = new Set(["a", "an", "and", "are", "can", "did", "do", "for", "how", "i", "in", "is", "it", "kojo", "mensah", "of", "on", "or", "papa", "the", "to", "what", "with", "work", "you"]);
const TOKEN_ALIASES = {
  experienced: "experience",
  experiences: "experience",
  projects: "project",
  skills: "skill",
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

export function searchProfileContent(query, limit = 4) {
  const queryTokens = [...new Set(tokens(query))];
  if (!queryTokens.length) return [];
  return CONTENT.map((section, index) => {
    const title = section.title.toLowerCase();
    const tags = section.tags.join(" ").toLowerCase();
    const text = section.text.toLowerCase();
    const score = queryTokens.reduce((total, token) => (
      total + (title.includes(token) ? 5 : 0) + (tags.includes(token) ? 3 : 0) + (text.includes(token) ? 1 : 0)
    ), 0);
    return { section, score, index };
  })
    .filter(({ score }) => score >= 3)
    .sort((a, b) => b.score - a.score || a.index - b.index)
    .slice(0, limit)
    .map(({ section }) => section);
}

export const askPapaKojo = defineTool({
  stableKey: "pkm.ask_profile",
  name: "ask_papa_kojo",
  title: "Ask Papa Kojo's profile",
  description: "Find authoritative public information about Papa Kojo Mensah when a visitor asks about his operations, customer experience, data, design, experience, projects, education, skills, availability or contact details. Read-only and limited to published material. Returns a stable JSON object with schemaVersion, schemaUrl, query, matches (each with title, text, tags and url), note and canonicalProfile. The machine-readable AskPapaKojoResult contract is published at https://pkm.hayalows.com/webmcp/results.schema.json.",
  inputSchema: {
    type: "object",
    properties: {
      query: {
        type: "string",
        minLength: 2,
        maxLength: 300,
        description: "The visitor's question or the profile topic to find.",
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
    if (cleanQuery.length < 2) throw new Error("Ask Papa Kojo's profile requires a question of at least two characters.");
    if (cleanQuery.length > 300) throw new Error("Ask Papa Kojo's profile accepts questions up to 300 characters.");
    const matches = searchProfileContent(cleanQuery);
    return {
      schemaVersion: RESULT_SCHEMA_VERSION,
      schemaUrl: RESULT_SCHEMA_URL,
      query: cleanQuery,
      matches,
      note: matches.length
        ? "Use these public profile sections to answer the visitor and cite the supplied source URLs."
        : "The public profile has no directly matching published section. Do not infer private or unpublished information.",
      canonicalProfile: "https://pkm.hayalows.com/",
    };
  },
});

export const preparePapaKojoEmail = defineTool({
  stableKey: "pkm.prepare_email",
  name: "prepare_papa_kojo_email",
  title: "Prepare an email to Papa Kojo",
  description: "Prepare a reversible email draft link when a visitor wants to contact Papa Kojo Mensah about a role, project or professional conversation. It updates and focuses the public email link, but never opens the mail app, sends a message, books time or makes a commitment. Returns a stable JSON object with schemaVersion, schemaUrl, status, recipient, subject, message, sent (always false), nextStep and sourceUrl. The machine-readable PreparePapaKojoEmailResult contract is published at https://pkm.hayalows.com/webmcp/results.schema.json.",
  inputSchema: {
    type: "object",
    properties: {
      subject: {
        type: "string",
        minLength: 3,
        maxLength: 160,
        description: "A concise email subject describing the role, project or reason for contacting Papa Kojo.",
      },
      message: {
        type: "string",
        minLength: 10,
        maxLength: 3000,
        description: "The email body for the visitor to review and edit before choosing to send it.",
      },
    },
    required: ["subject", "message"],
    additionalProperties: false,
  },
  annotations: { readOnlyHint: false },
  source: "merchant_authored",
  intent: "act",
  execute({ subject, message }) {
    const cleanSubject = String(subject || "").trim();
    const cleanMessage = String(message || "").trim();
    if (cleanSubject.length < 3) throw new Error("The email subject must contain at least three characters.");
    if (cleanSubject.length > 160) throw new Error("The email subject must not exceed 160 characters.");
    if (cleanMessage.length < 10) throw new Error("The email message must contain at least ten characters.");
    if (cleanMessage.length > 3000) throw new Error("The email message must not exceed 3,000 characters.");

    const emailLink = document.querySelector('a[href^="mailto:mpapakojo@gmail.com"]');
    if (!emailLink) throw new Error("Papa Kojo's public email link is unavailable on this page.");
    const draftUrl = `mailto:mpapakojo@gmail.com?${new URLSearchParams({ subject: cleanSubject, body: cleanMessage })}`;
    emailLink.href = draftUrl;
    emailLink.scrollIntoView({ behavior: "smooth", block: "center" });
    emailLink.focus({ preventScroll: true });

    return {
      schemaVersion: RESULT_SCHEMA_VERSION,
      schemaUrl: RESULT_SCHEMA_URL,
      status: "draft_ready",
      recipient: "mpapakojo@gmail.com",
      subject: cleanSubject,
      message: cleanMessage,
      sent: false,
      nextStep: "The visitor must activate the focused email link, review the draft in their mail app and choose whether to send it.",
      sourceUrl: "https://pkm.hayalows.com/#contact",
    };
  },
});
