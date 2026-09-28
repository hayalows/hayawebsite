const crypto = require("node:crypto");
const { neon } = require("@neondatabase/serverless");

const EVENT_NAMES = new Set([
  "page_view",
  "section_view",
  "project_click",
  "resume_open",
  "credential_click",
  "email_click",
  "linkedin_click",
  "copy_email",
  "external_click",
  "engagement",
]);

function getSql() {
  const connectionString = process.env.PKM_ANALYTICS_DATABASE_URL;
  if (!connectionString) {
    const error = new Error("Analytics database is not configured.");
    error.code = "analytics_database_missing";
    throw error;
  }
  return neon(connectionString);
}

function text(value, max = 255) {
  if (value === null || value === undefined) return null;
  const cleaned = String(value).trim();
  return cleaned ? cleaned.slice(0, max) : null;
}

function number(value, min, max) {
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) return null;
  return Math.max(min, Math.min(max, Math.round(parsed)));
}

function header(request, name) {
  const value = request.headers?.[name];
  return Array.isArray(value) ? value[0] : value;
}

function clientIp(request) {
  const forwarded = header(request, "x-forwarded-for");
  if (forwarded) return String(forwarded).split(",")[0].trim();
  return text(header(request, "x-real-ip"), 128) || "";
}

function visitorHash(request) {
  const key = process.env.PKM_ANALYTICS_HASH_KEY;
  if (!key) {
    const error = new Error("Analytics hashing key is not configured.");
    error.code = "analytics_hash_key_missing";
    throw error;
  }
  const ip = clientIp(request);
  const ua = text(header(request, "user-agent"), 800) || "";
  return crypto
    .createHmac("sha256", key)
    .update(ip + "|" + ua)
    .digest("hex")
    .slice(0, 40);
}

function isBot(request) {
  const ua = String(header(request, "user-agent") || "").toLowerCase();
  return !ua || /(bot|crawler|spider|slurp|headless|lighthouse|monitor|uptime|preview|facebookexternalhit|twitterbot|linkedinbot)/i.test(ua);
}

function deviceInfo(request) {
  const ua = String(header(request, "user-agent") || "");
  let deviceType = "desktop";
  if (/ipad|tablet|kindle|silk/i.test(ua)) deviceType = "tablet";
  else if (/mobi|iphone|android/i.test(ua)) deviceType = "mobile";

  let browser = "Other";
  if (/Edg\//.test(ua)) browser = "Edge";
  else if (/OPR\//.test(ua)) browser = "Opera";
  else if (/Firefox\//.test(ua)) browser = "Firefox";
  else if (/Chrome\//.test(ua) && !/Chromium/.test(ua)) browser = "Chrome";
  else if (/Safari\//.test(ua) && /Version\//.test(ua)) browser = "Safari";

  let os = "Other";
  if (/Windows NT/i.test(ua)) os = "Windows";
  else if (/Android/i.test(ua)) os = "Android";
  else if (/iPhone|iPad|iPod/i.test(ua)) os = "iOS";
  else if (/Mac OS X/i.test(ua)) os = "macOS";
  else if (/Linux/i.test(ua)) os = "Linux";

  return { deviceType, browser, os };
}

function parseBody(request) {
  if (request.body && typeof request.body === "object" && !Buffer.isBuffer(request.body)) return request.body;
  if (!request.body) return {};
  try {
    return JSON.parse(Buffer.isBuffer(request.body) ? request.body.toString("utf8") : String(request.body));
  } catch {
    return {};
  }
}

function safeReferrer(value) {
  if (!value) return { host: null, path: null };
  try {
    const url = new URL(String(value));
    return {
      host: text(url.hostname.replace(/^www\./, ""), 255),
      path: text(url.pathname, 500),
    };
  } catch {
    return { host: null, path: null };
  }
}

function cleanEvent(request) {
  const body = parseBody(request);
  const eventName = text(body.event, 48);
  if (!eventName || !EVENT_NAMES.has(eventName)) {
    const error = new Error("Unsupported analytics event.");
    error.code = "analytics_event_invalid";
    throw error;
  }

  const referrer = safeReferrer(body.referrer);
  const { deviceType, browser, os } = deviceInfo(request);
  const eventId = /^[0-9a-f-]{36}$/i.test(String(body.id || "")) ? String(body.id) : crypto.randomUUID();

  return {
    eventId,
    visitorHash: visitorHash(request),
    sessionId: text(body.sessionId, 64) || crypto.randomUUID(),
    eventName,
    pagePath: text(body.path, 500) || "/",
    section: text(body.section, 64),
    target: text(body.target, 160),
    referrerHost: referrer.host,
    referrerPath: referrer.path,
    utmSource: text(body.utm?.source, 120),
    utmMedium: text(body.utm?.medium, 120),
    utmCampaign: text(body.utm?.campaign, 160),
    utmContent: text(body.utm?.content, 160),
    countryCode: text(header(request, "x-vercel-ip-country"), 2),
    region: text(header(request, "x-vercel-ip-country-region"), 120),
    deviceType,
    browser,
    os,
    screenWidth: number(body.screen?.width, 0, 10000),
    screenHeight: number(body.screen?.height, 0, 10000),
    durationMs: number(body.durationMs, 0, 86400000),
    scrollDepth: number(body.scrollDepth, 0, 100),
    metadata: {
      title: text(body.meta?.title, 200),
      label: text(body.meta?.label, 200),
      hrefHost: text(body.meta?.hrefHost, 255),
    },
  };
}

function originAllowed(request) {
  const origin = header(request, "origin");
  if (!origin) return true;
  try {
    return new URL(origin).host === header(request, "host");
  } catch {
    return false;
  }
}

function adminAuthorized(request) {
  const expected = process.env.PKM_ANALYTICS_DASHBOARD_KEY;
  if (!expected) return false;
  const raw = text(header(request, "x-analytics-key"), 512)
    || String(header(request, "authorization") || "").replace(/^Bearer\s+/i, "");
  if (!raw) return false;
  const a = Buffer.from(raw);
  const b = Buffer.from(expected);
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}

module.exports = { adminAuthorized, cleanEvent, getSql, isBot, originAllowed };
