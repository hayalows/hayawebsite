const crypto = require("node:crypto");

const SCOPES = [
  "user-read-recently-played",
  "user-top-read",
  "playlist-read-private",
];

function createError(code, message, status = 500) {
  const error = new Error(message);
  error.code = code;
  error.status = status;
  return error;
}

function getOAuthConfig() {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  const redirectUri = process.env.SPOTIFY_REDIRECT_URI;

  if (!clientId || !clientSecret || !redirectUri) {
    throw createError(
      "spotify_config_missing",
      "Spotify connection is not configured.",
      503,
    );
  }

  return { clientId, clientSecret, redirectUri };
}

function getRefreshToken() {
  return process.env.SPOTIFY_REFRESH_TOKEN || "";
}

function createState() {
  return crypto.randomBytes(32).toString("base64url");
}

function parseCookies(header) {
  if (!header) return {};

  return header.split(";").reduce((cookies, part) => {
    const separator = part.indexOf("=");
    if (separator === -1) return cookies;

    const name = part.slice(0, separator).trim();
    const value = part.slice(separator + 1).trim();

    try {
      cookies[name] = decodeURIComponent(value);
    } catch {
      cookies[name] = value;
    }

    return cookies;
  }, {});
}

function serializeCookie(name, value, options = {}) {
  const parts = [
    name + "=" + encodeURIComponent(value),
    "Path=" + (options.path || "/"),
    "HttpOnly",
    "Secure",
    "SameSite=Lax",
  ];

  if (typeof options.maxAge === "number") {
    parts.push("Max-Age=" + options.maxAge);
  }

  return parts.join("; ");
}

function statesMatch(expected, received) {
  if (!expected || !received) return false;

  const expectedBuffer = Buffer.from(expected);
  const receivedBuffer = Buffer.from(received);

  return (
    expectedBuffer.length === receivedBuffer.length
    && crypto.timingSafeEqual(expectedBuffer, receivedBuffer)
  );
}

function buildAuthorizationUrl(state) {
  const { clientId, redirectUri } = getOAuthConfig();
  const url = new URL("https://accounts.spotify.com/authorize");

  url.searchParams.set("client_id", clientId);
  url.searchParams.set("response_type", "code");
  url.searchParams.set("redirect_uri", redirectUri);
  url.searchParams.set("scope", SCOPES.join(" "));
  url.searchParams.set("state", state);

  return url.toString();
}

async function requestToken(parameters) {
  const { clientId, clientSecret } = getOAuthConfig();
  const basicCredentials = Buffer
    .from(clientId + ":" + clientSecret)
    .toString("base64");

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: "Basic " + basicCredentials,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams(parameters),
  });

  const body = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw createError(
      "spotify_token_exchange_failed",
      "Spotify did not accept the connection.",
      response.status,
    );
  }

  return body;
}

async function getAccessToken() {
  const refreshToken = getRefreshToken();
  if (!refreshToken) {
    throw createError(
      "spotify_refresh_token_missing",
      "Spotify has not been connected yet.",
      503,
    );
  }

  const body = await requestToken({
    grant_type: "refresh_token",
    refresh_token: refreshToken,
  });

  if (!body.access_token) {
    throw createError(
      "spotify_access_token_missing",
      "Spotify did not return an access token.",
      502,
    );
  }

  return body.access_token;
}

async function spotifyRequest(path, accessToken) {
  const response = await fetch("https://api.spotify.com" + path, {
    headers: {
      Authorization: "Bearer " + accessToken,
    },
  });

  const body = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw createError(
      "spotify_api_request_failed",
      "Spotify did not return the requested data.",
      response.status,
    );
  }

  return body;
}

module.exports = {
  SCOPES,
  buildAuthorizationUrl,
  createError,
  createState,
  getAccessToken,
  getOAuthConfig,
  getRefreshToken,
  parseCookies,
  requestToken,
  serializeCookie,
  spotifyRequest,
  statesMatch,
};
