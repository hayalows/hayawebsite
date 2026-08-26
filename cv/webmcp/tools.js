import { defineTool } from "@nekuda/webmcp-sdk";

const RESULT_SCHEMA_URL = "https://pkm.hayalows.com/webmcp/results.schema.json";
const RESULT_SCHEMA_VERSION = "1.1.0";

const RESULT_METADATA_PROPERTIES = {
  schemaVersion: { const: RESULT_SCHEMA_VERSION },
  schemaUrl: { const: RESULT_SCHEMA_URL },
};

const PROFILE_SECTION_SCHEMA = {
  type: "object",
  properties: {
    title: { type: "string" },
    text: { type: "string" },
    tags: { type: "array", items: { type: "string" } },
    url: { type: "string", format: "uri" },
  },
  required: ["title", "text", "tags", "url"],
  additionalProperties: false,
};

const PROFILE_TOPICS = {
  all: null,
  profile: ["Professional profile"],
  skills: ["Where Papa Kojo adds value"],
  experience: ["Current experience", "Banking and customer service experience", "Independent design work"],
  projects: ["Selected projects"],
  education: ["Education"],
  contact: ["Contact and CV"],
};

const ASK_PAPA_KOJO_OUTPUT_SCHEMA = {
  type: "object",
  properties: {
    ...RESULT_METADATA_PROPERTIES,
    topic: { enum: Object.keys(PROFILE_TOPICS) },
    query: { type: "string" },
    matches: { type: "array", maxItems: 4, items: PROFILE_SECTION_SCHEMA },
    note: { type: "string" },
    canonicalProfile: { const: "https://pkm.hayalows.com/" },
  },
  required: ["schemaVersion", "schemaUrl", "topic", "query", "matches", "note", "canonicalProfile"],
  additionalProperties: false,
};

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

export function searchProfileContent(query, limit = 4, topic = "all") {
  const queryTokens = [...new Set(tokens(query))];
  if (!queryTokens.length) return [];
  const allowedTitles = PROFILE_TOPICS[topic];
  if (allowedTitles === undefined) throw new Error("Choose a supported public profile topic.");
  const candidates = allowedTitles ? CONTENT.filter((section) => allowedTitles.includes(section.title)) : CONTENT;
  return candidates.map((section, index) => {
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
  description: "Find authoritative public information about Papa Kojo Mensah, optionally constrained to profile, skills, experience, projects, education or contact. Read-only and limited to published material. Returns topic, query, matching public sections, a usage note and canonicalProfile as structured content enforced by outputSchema.",
  inputSchema: {
    type: "object",
    properties: {
      query: {
        type: "string",
        minLength: 2,
        maxLength: 300,
        description: "The visitor's question or the profile topic to find.",
      },
      topic: {
        type: "string",
        enum: Object.keys(PROFILE_TOPICS),
        default: "all",
        description: "Optional profile area used to constrain matching and avoid vague cross-topic results.",
      },
    },
    required: ["query"],
    additionalProperties: false,
  },
  outputSchema: ASK_PAPA_KOJO_OUTPUT_SCHEMA,
  annotations: { readOnlyHint: true },
  source: "merchant_authored",
  intent: "answer",
  execute({ query, topic = "all" }) {
    const cleanQuery = String(query || "").trim();
    if (cleanQuery.length < 2) throw new Error("Ask Papa Kojo's profile requires a question of at least two characters.");
    if (cleanQuery.length > 300) throw new Error("Ask Papa Kojo's profile accepts questions up to 300 characters.");
    const matches = searchProfileContent(cleanQuery, 4, topic);
    return {
      schemaVersion: RESULT_SCHEMA_VERSION,
      schemaUrl: RESULT_SCHEMA_URL,
      topic,
      query: cleanQuery,
      matches,
      note: matches.length
        ? "Use these public profile sections to answer the visitor and cite the supplied source URLs."
        : "The public profile has no directly matching published section. Do not infer private or unpublished information.",
      canonicalProfile: "https://pkm.hayalows.com/",
    };
  },
});

const PREPARE_EMAIL_OUTPUT_SCHEMA = {
  type: "object",
  properties: {
    ...RESULT_METADATA_PROPERTIES,
    status: { const: "draft_ready" },
    recipient: { const: "mpapakojo@gmail.com" },
    subject: { type: "string", minLength: 3, maxLength: 160 },
    message: { type: "string", minLength: 10, maxLength: 3000 },
    sent: { const: false },
    nextStep: { type: "string" },
    sourceUrl: { const: "https://pkm.hayalows.com/#contact" },
  },
  required: ["schemaVersion", "schemaUrl", "status", "recipient", "subject", "message", "sent", "nextStep", "sourceUrl"],
  additionalProperties: false,
};

export const preparePapaKojoEmail = defineTool({
  stableKey: "pkm.prepare_email",
  name: "prepare_papa_kojo_email",
  title: "Prepare an email to Papa Kojo",
  description: "Prepare a reversible email draft to the fixed public recipient mpapakojo@gmail.com for a role, project or professional conversation. It updates and focuses the public email link, but never opens the mail app, sends, books time or commits the visitor. Returns the enforced recipient, bounded subject and message, sent=false, nextStep and sourceUrl as structured content enforced by outputSchema.",
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
  outputSchema: PREPARE_EMAIL_OUTPUT_SCHEMA,
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

const PROJECTS = [
  {
    key: "routelab",
    name: "RouteLab",
    kind: "Live product",
    summary: "A map-first tool for planning routes and remembering everyday movement in one calm flow.",
    url: "https://maps.hayalows.com/",
  },
  {
    key: "hayalows_ventures",
    name: "Hayalows Ventures",
    kind: "Venture",
    summary: "Business clarity, brand communication, customer journeys, operations and practical digital systems from Ghana.",
    url: "https://hayalows.com/",
  },
  {
    key: "english_chat_finder",
    name: "English Chat Finder",
    kind: "Live tool",
    summary: "A single search across availability from more than 200 English-conversation calendars.",
    url: "https://englishchatsession.vercel.app/",
  },
];

const PROJECT_SCHEMA = {
  type: "object",
  properties: {
    key: { enum: PROJECTS.map((project) => project.key) },
    name: { type: "string" },
    kind: { type: "string" },
    summary: { type: "string" },
    url: { type: "string", format: "uri" },
  },
  required: ["key", "name", "kind", "summary", "url"],
  additionalProperties: false,
};

const GET_PROJECTS_OUTPUT_SCHEMA = {
  type: "object",
  properties: {
    ...RESULT_METADATA_PROPERTIES,
    project: { enum: ["all", ...PROJECTS.map((item) => item.key)] },
    projects: { type: "array", minItems: 1, maxItems: 3, items: PROJECT_SCHEMA },
    note: { type: "string" },
    sourceUrl: { const: "https://pkm.hayalows.com/#projects" },
  },
  required: ["schemaVersion", "schemaUrl", "project", "projects", "note", "sourceUrl"],
  additionalProperties: false,
};

export const getPapaKojoProjects = defineTool({
  stableKey: "pkm.get_projects",
  name: "get_papa_kojo_projects",
  title: "Get Papa Kojo's projects",
  description: "Return Papa Kojo Mensah's published projects when a visitor wants portfolio evidence, a specific project, or canonical project links. Read-only. Returns project, a precise projects array (key, name, kind, summary and url), note and sourceUrl as structured content enforced by outputSchema.",
  inputSchema: {
    type: "object",
    properties: {
      project: {
        type: "string",
        enum: ["all", ...PROJECTS.map((item) => item.key)],
        default: "all",
        description: "A specific published project, or all for the complete selection.",
      },
    },
    required: [],
    additionalProperties: false,
  },
  outputSchema: GET_PROJECTS_OUTPUT_SCHEMA,
  annotations: { readOnlyHint: true },
  source: "merchant_authored",
  intent: "answer",
  execute({ project = "all" }) {
    if (!["all", ...PROJECTS.map((item) => item.key)].includes(project)) {
      throw new Error("Choose all or a supported published project.");
    }
    const projects = project === "all" ? PROJECTS : PROJECTS.filter((item) => item.key === project);
    return {
      schemaVersion: RESULT_SCHEMA_VERSION,
      schemaUrl: RESULT_SCHEMA_URL,
      project,
      projects,
      note: project === "all" ? "Three published projects are available." : `One published project matched ${project}.`,
      sourceUrl: "https://pkm.hayalows.com/#projects",
    };
  },
});

const PROFILE_DESTINATIONS = {
  about: { label: "Profile overview", path: "/#about", url: "https://pkm.hayalows.com/#about" },
  projects: { label: "Selected projects", path: "/#projects", url: "https://pkm.hayalows.com/#projects" },
  experience: { label: "Professional experience", path: "/#experience", url: "https://pkm.hayalows.com/#experience" },
  skills: { label: "Skills", path: "/#skills", url: "https://pkm.hayalows.com/#skills" },
  education: { label: "Education", path: "/#education", url: "https://pkm.hayalows.com/#education" },
  contact: { label: "Contact", path: "/#contact", url: "https://pkm.hayalows.com/#contact" },
  resume: { label: "One-page résumé", path: "/resume/", url: "https://pkm.hayalows.com/resume/" },
};

const NAVIGATE_PROFILE_OUTPUT_SCHEMA = {
  type: "object",
  properties: {
    ...RESULT_METADATA_PROPERTIES,
    destination: { enum: Object.keys(PROFILE_DESTINATIONS) },
    label: { type: "string" },
    url: { type: "string", format: "uri" },
    navigationStarted: { const: true },
    nextStep: { type: "string" },
  },
  required: ["schemaVersion", "schemaUrl", "destination", "label", "url", "navigationStarted", "nextStep"],
  additionalProperties: false,
};

export const navigatePapaKojoProfile = defineTool({
  stableKey: "pkm.navigate_profile",
  name: "navigate_papa_kojo_profile",
  title: "Navigate Papa Kojo's profile",
  description: "Navigate directly to Papa Kojo Mensah's profile overview, projects, experience, skills, education, contact section or one-page résumé. Reversible page navigation only; it never contacts anyone or makes a commitment. Returns destination, label, canonical url, navigationStarted and nextStep as structured content enforced by outputSchema.",
  inputSchema: {
    type: "object",
    properties: {
      destination: {
        type: "string",
        enum: Object.keys(PROFILE_DESTINATIONS),
        description: "The exact public profile section or résumé page to open.",
      },
    },
    required: ["destination"],
    additionalProperties: false,
  },
  outputSchema: NAVIGATE_PROFILE_OUTPUT_SCHEMA,
  annotations: { readOnlyHint: false },
  source: "merchant_authored",
  intent: "act",
  execute({ destination }) {
    const target = PROFILE_DESTINATIONS[destination];
    if (!target) throw new Error("Choose a supported public profile destination.");
    setTimeout(() => location.assign(target.path), 0);
    return {
      schemaVersion: RESULT_SCHEMA_VERSION,
      schemaUrl: RESULT_SCHEMA_URL,
      destination,
      label: target.label,
      url: target.url,
      navigationStarted: true,
      nextStep: `The browser is opening ${target.label}.`,
    };
  },
});
