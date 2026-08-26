import { defineTool } from "@nekuda/webmcp-sdk";

const RESULT_SCHEMA_URL = "https://pkm.hayalows.com/webmcp/results.schema.json";
const RESULT_SCHEMA_VERSION = "2.0.0";

const RESULT_METADATA_PROPERTIES = {
  schemaVersion: { const: RESULT_SCHEMA_VERSION },
  schemaUrl: { const: RESULT_SCHEMA_URL },
};

const PROFILE = {
  fullName: "Papa Kojo Mensah",
  headline: "Operations and Customer Experience Professional",
  location: "Ghana",
  availability: "Open to thoughtful work globally",
  summary: "Papa Kojo Mensah makes complex work easier to understand and use through accurate records, clear communication, practical tools and thoughtful customer experiences.",
  canonicalProfileUrl: "https://pkm.hayalows.com/",
  resumeUrl: "https://pkm.hayalows.com/resume/",
  linkedInUrl: "https://www.linkedin.com/in/papakojomensah",
};

const PROFILE_OUTPUT_SCHEMA = {
  type: "object",
  properties: {
    ...RESULT_METADATA_PROPERTIES,
    fullName: { const: PROFILE.fullName },
    headline: { const: PROFILE.headline },
    location: { const: PROFILE.location },
    availability: { const: PROFILE.availability },
    summary: { type: "string" },
    canonicalProfileUrl: { const: PROFILE.canonicalProfileUrl },
    resumeUrl: { const: PROFILE.resumeUrl },
    linkedInUrl: { const: PROFILE.linkedInUrl },
  },
  required: ["schemaVersion", "schemaUrl", "fullName", "headline", "location", "availability", "summary", "canonicalProfileUrl", "resumeUrl", "linkedInUrl"],
  additionalProperties: false,
};

export const getPapaKojoProfile = defineTool({
  stableKey: "pkm.get_profile",
  name: "get_papa_kojo_profile",
  title: "Get Papa Kojo's professional profile",
  description: "Return Papa Kojo Mensah's public identity, professional positioning, location, work availability and canonical profile, résumé and LinkedIn URLs. Read-only. Use this for a profile overview only; use the dedicated skills, experience, education or projects tool for those records. Returns exactly one structured object containing those fields.",
  inputSchema: { type: "object", properties: {}, required: [], additionalProperties: false },
  outputSchema: PROFILE_OUTPUT_SCHEMA,
  annotations: { readOnlyHint: true },
  source: "merchant_authored",
  intent: "answer",
  execute() {
    return { schemaVersion: RESULT_SCHEMA_VERSION, schemaUrl: RESULT_SCHEMA_URL, ...PROFILE };
  },
});

const SKILL_GROUPS = [
  {
    key: "operations_service",
    title: "Operations and service",
    skills: ["Customer support", "Banking operations", "Issue resolution", "Process documentation", "Workflow improvement"],
    evidence: "Experience handling customer and account requests, maintaining clear records and improving repeatable service work.",
  },
  {
    key: "data_tools",
    title: "Data and practical tools",
    skills: ["Data quality", "Source verification", "Excel", "Google Sheets", "Google Workspace", "Microsoft Office"],
    evidence: "Current record-review work and an Excel treasury-bill quotation tool built to reduce manual effort and calculation errors.",
  },
  {
    key: "brand_delivery",
    title: "Brand and delivery",
    skills: ["Brand identity", "Graphic design", "Social media design", "Adobe Creative Suite", "Canva", "Project coordination", "Client communication", "Remote collaboration"],
    evidence: "Independent design work taken from brief through revisions and final delivery alongside operations-focused projects.",
  },
];

const SKILL_GROUP_SCHEMA = {
  type: "object",
  properties: {
    key: { enum: SKILL_GROUPS.map((group) => group.key) },
    title: { type: "string" },
    skills: { type: "array", minItems: 1, items: { type: "string" } },
    evidence: { type: "string" },
  },
  required: ["key", "title", "skills", "evidence"],
  additionalProperties: false,
};

const SKILLS_OUTPUT_SCHEMA = {
  type: "object",
  properties: {
    ...RESULT_METADATA_PROPERTIES,
    category: { enum: ["all", ...SKILL_GROUPS.map((group) => group.key)] },
    groups: { type: "array", minItems: 1, maxItems: 3, items: SKILL_GROUP_SCHEMA },
    sourceUrl: { const: "https://pkm.hayalows.com/#skills" },
  },
  required: ["schemaVersion", "schemaUrl", "category", "groups", "sourceUrl"],
  additionalProperties: false,
};

export const getPapaKojoSkills = defineTool({
  stableKey: "pkm.get_skills",
  name: "get_papa_kojo_skills",
  title: "Get Papa Kojo's skills",
  description: "Return Papa Kojo Mensah's published capabilities grouped into operations and service, data and practical tools, or brand and delivery. Read-only. Use this for skills and capability evidence only, not employment history or portfolio projects. Returns the selected category and one to three exact skill groups.",
  inputSchema: {
    type: "object",
    properties: {
      category: {
        type: "string",
        enum: ["all", ...SKILL_GROUPS.map((group) => group.key)],
        default: "all",
        description: "The exact capability group to return, or all for the complete published skills set.",
      },
    },
    required: [],
    additionalProperties: false,
  },
  outputSchema: SKILLS_OUTPUT_SCHEMA,
  annotations: { readOnlyHint: true },
  source: "merchant_authored",
  intent: "answer",
  execute({ category = "all" }) {
    const supported = ["all", ...SKILL_GROUPS.map((group) => group.key)];
    if (!supported.includes(category)) throw new Error("Choose all or a supported published skill category.");
    return {
      schemaVersion: RESULT_SCHEMA_VERSION,
      schemaUrl: RESULT_SCHEMA_URL,
      category,
      groups: category === "all" ? SKILL_GROUPS : SKILL_GROUPS.filter((group) => group.key === category),
      sourceUrl: "https://pkm.hayalows.com/#skills",
    };
  },
});

const EXPERIENCE = [
  {
    key: "springboard",
    organization: "Springboard",
    title: "Data Entry Specialist",
    location: "Remote",
    startDate: "2026-04",
    endDate: null,
    summary: "Checks historical records against original sources and leaves a clear review trail.",
    highlights: [
      "Checks historical records against original sources and corrects incomplete or mismatched information.",
      "Protects sensitive personal data and records completed work, errors, corrections and revision notes in Google Sheets.",
      "Follows detailed quality procedures and daily targets while keeping names, dates, relationships and sources accurate.",
    ],
  },
  {
    key: "absa_bank_ghana",
    organization: "Absa Bank Ghana",
    title: "Customer Service and Sales Support",
    location: "Ghana",
    startDate: "2024-11",
    endDate: "2025-10",
    summary: "Supported customers and financial work while improving treasury-bill quotation workflow in Excel.",
    highlights: [
      "Processed and reviewed more than 50 customer and account requests on busy days while following banking controls.",
      "Built an Excel tool that made treasury-bill quotations faster and reduced manual calculation errors.",
      "Supported more than 125 youth accounts in a campaign and a GHS 1 million wholesale investment placement through tracking and follow-up.",
    ],
  },
  {
    key: "iconka_designs",
    organization: "Iconka Designs",
    title: "Freelance Graphic Designer",
    location: "Independent",
    startDate: "2022",
    endDate: null,
    summary: "Creates brand identities and visual communication alongside operations work.",
    highlights: [
      "Creates brand identities, social media graphics, presentations, print designs and campaign materials.",
      "Takes work from brief to final delivery while organizing requirements, timelines, feedback, revisions and files.",
    ],
  },
];

const EXPERIENCE_SCHEMA = {
  type: "object",
  properties: {
    key: { enum: EXPERIENCE.map((role) => role.key) },
    organization: { type: "string" },
    title: { type: "string" },
    location: { type: "string" },
    startDate: { type: "string" },
    endDate: { oneOf: [{ type: "string" }, { type: "null" }] },
    summary: { type: "string" },
    highlights: { type: "array", minItems: 1, items: { type: "string" } },
  },
  required: ["key", "organization", "title", "location", "startDate", "endDate", "summary", "highlights"],
  additionalProperties: false,
};

const EXPERIENCE_OUTPUT_SCHEMA = {
  type: "object",
  properties: {
    ...RESULT_METADATA_PROPERTIES,
    organization: { enum: ["all", ...EXPERIENCE.map((role) => role.key)] },
    roles: { type: "array", minItems: 1, maxItems: 3, items: EXPERIENCE_SCHEMA },
    sourceUrl: { const: "https://pkm.hayalows.com/#experience" },
  },
  required: ["schemaVersion", "schemaUrl", "organization", "roles", "sourceUrl"],
  additionalProperties: false,
};

export const getPapaKojoExperience = defineTool({
  stableKey: "pkm.get_experience",
  name: "get_papa_kojo_experience",
  title: "Get Papa Kojo's work experience",
  description: "Return Papa Kojo Mensah's published employment history with organization, title, dates, location, summary and factual highlights. Read-only. Use this for work history only; use the dedicated skills or projects tool for capabilities and portfolio work. Returns one selected role or all three roles.",
  inputSchema: {
    type: "object",
    properties: {
      organization: {
        type: "string",
        enum: ["all", ...EXPERIENCE.map((role) => role.key)],
        default: "all",
        description: "A specific published organization record, or all for the complete work history.",
      },
    },
    required: [],
    additionalProperties: false,
  },
  outputSchema: EXPERIENCE_OUTPUT_SCHEMA,
  annotations: { readOnlyHint: true },
  source: "merchant_authored",
  intent: "answer",
  execute({ organization = "all" }) {
    const supported = ["all", ...EXPERIENCE.map((role) => role.key)];
    if (!supported.includes(organization)) throw new Error("Choose all or a supported published organization.");
    return {
      schemaVersion: RESULT_SCHEMA_VERSION,
      schemaUrl: RESULT_SCHEMA_URL,
      organization,
      roles: organization === "all" ? EXPERIENCE : EXPERIENCE.filter((role) => role.key === organization),
      sourceUrl: "https://pkm.hayalows.com/#experience",
    };
  },
});

const EDUCATION = [
  { key: "hospitality_tourism", qualification: "Hospitality and Tourism Management Certificate", institution: "Ensign College through BYU-Pathway Worldwide", year: "2026", detail: "Published completion date: May 2026." },
  { key: "professional_training", qualification: "Selected professional training", institution: null, year: "2025", detail: "Excel, Customer Experience, Digital Payments and Enterprise Risk Management." },
  { key: "actuarial_science", qualification: "Bachelor of Science in Actuarial Science", institution: "Kwame Nkrumah University of Science and Technology", year: "2024", detail: "Undergraduate degree." },
  { key: "social_media_marketing", qualification: "Social Media Marketing Certificate", institution: "Ensign College", year: "2023", detail: "Published certificate." },
  { key: "google_project_management", qualification: "Google Project Management Certificate", institution: "Coursera", year: "2023", detail: "Published professional certificate." },
];

const EDUCATION_SCHEMA = {
  type: "object",
  properties: {
    key: { enum: EDUCATION.map((credential) => credential.key) },
    qualification: { type: "string" },
    institution: { oneOf: [{ type: "string" }, { type: "null" }] },
    year: { type: "string" },
    detail: { type: "string" },
  },
  required: ["key", "qualification", "institution", "year", "detail"],
  additionalProperties: false,
};

const EDUCATION_OUTPUT_SCHEMA = {
  type: "object",
  properties: {
    ...RESULT_METADATA_PROPERTIES,
    credential: { enum: ["all", ...EDUCATION.map((item) => item.key)] },
    credentials: { type: "array", minItems: 1, maxItems: 5, items: EDUCATION_SCHEMA },
    sourceUrl: { const: "https://pkm.hayalows.com/#education" },
  },
  required: ["schemaVersion", "schemaUrl", "credential", "credentials", "sourceUrl"],
  additionalProperties: false,
};

export const getPapaKojoEducation = defineTool({
  stableKey: "pkm.get_education",
  name: "get_papa_kojo_education",
  title: "Get Papa Kojo's education",
  description: "Return Papa Kojo Mensah's published education and professional certificates with exact qualification, year, public detail and institution when stated. Read-only. Use this for education and training only, not skills, employment history or projects. Returns one selected credential or all five credentials.",
  inputSchema: {
    type: "object",
    properties: {
      credential: {
        type: "string",
        enum: ["all", ...EDUCATION.map((item) => item.key)],
        default: "all",
        description: "A specific published qualification or certificate, or all for the complete education record.",
      },
    },
    required: [],
    additionalProperties: false,
  },
  outputSchema: EDUCATION_OUTPUT_SCHEMA,
  annotations: { readOnlyHint: true },
  source: "merchant_authored",
  intent: "answer",
  execute({ credential = "all" }) {
    const supported = ["all", ...EDUCATION.map((item) => item.key)];
    if (!supported.includes(credential)) throw new Error("Choose all or a supported published credential.");
    return {
      schemaVersion: RESULT_SCHEMA_VERSION,
      schemaUrl: RESULT_SCHEMA_URL,
      credential,
      credentials: credential === "all" ? EDUCATION : EDUCATION.filter((item) => item.key === credential),
      sourceUrl: "https://pkm.hayalows.com/#education",
    };
  },
});

const PROJECTS = [
  { key: "routelab", name: "RouteLab", kind: "Live product", summary: "A map-first tool for planning routes and remembering everyday movement in one calm flow.", url: "https://maps.hayalows.com/" },
  { key: "hayalows_ventures", name: "Hayalows Ventures", kind: "Venture", summary: "Business clarity, brand communication, customer journeys, operations and practical digital systems from Ghana.", url: "https://hayalows.com/" },
  { key: "english_chat_finder", name: "English Chat Finder", kind: "Live tool", summary: "A single search across availability from more than 200 English-conversation calendars.", url: "https://englishchatsession.vercel.app/" },
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

const PROJECTS_OUTPUT_SCHEMA = {
  type: "object",
  properties: {
    ...RESULT_METADATA_PROPERTIES,
    project: { enum: ["all", ...PROJECTS.map((project) => project.key)] },
    projects: { type: "array", minItems: 1, maxItems: 3, items: PROJECT_SCHEMA },
    sourceUrl: { const: "https://pkm.hayalows.com/projects/" },
  },
  required: ["schemaVersion", "schemaUrl", "project", "projects", "sourceUrl"],
  additionalProperties: false,
};

export const getPapaKojoProjects = defineTool({
  stableKey: "pkm.get_projects",
  name: "get_papa_kojo_projects",
  title: "Get Papa Kojo's projects",
  description: "Return Papa Kojo Mensah's published portfolio projects with exact name, type, summary and canonical live URL. Read-only. Use this for portfolio evidence only, not general profile information, skills or employment history. Returns one selected project or all three projects.",
  inputSchema: {
    type: "object",
    properties: {
      project: {
        type: "string",
        enum: ["all", ...PROJECTS.map((project) => project.key)],
        default: "all",
        description: "A specific published project, or all for the complete portfolio selection.",
      },
    },
    required: [],
    additionalProperties: false,
  },
  outputSchema: PROJECTS_OUTPUT_SCHEMA,
  annotations: { readOnlyHint: true },
  source: "merchant_authored",
  intent: "answer",
  execute({ project = "all" }) {
    const supported = ["all", ...PROJECTS.map((item) => item.key)];
    if (!supported.includes(project)) throw new Error("Choose all or a supported published project.");
    return {
      schemaVersion: RESULT_SCHEMA_VERSION,
      schemaUrl: RESULT_SCHEMA_URL,
      project,
      projects: project === "all" ? PROJECTS : PROJECTS.filter((item) => item.key === project),
      sourceUrl: "https://pkm.hayalows.com/projects/",
    };
  },
});

const EMAIL_OUTPUT_SCHEMA = {
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
  description: "Prepare a reversible email draft to Papa Kojo Mensah's fixed public address after a visitor has decided to make professional contact. This action only updates and focuses the site's email link. It never opens the mail app, sends a message, books time or creates a commitment. Returns the recipient, bounded subject and message, sent=false and the required human next step.",
  inputSchema: {
    type: "object",
    properties: {
      subject: { type: "string", minLength: 3, maxLength: 160, description: "A concise subject describing the role, project or professional reason for contact." },
      message: { type: "string", minLength: 10, maxLength: 3000, description: "The email body for the visitor to review and edit before choosing whether to send it." },
    },
    required: ["subject", "message"],
    additionalProperties: false,
  },
  outputSchema: EMAIL_OUTPUT_SCHEMA,
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
    emailLink.href = `mailto:mpapakojo@gmail.com?${new URLSearchParams({ subject: cleanSubject, body: cleanMessage })}`;
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
