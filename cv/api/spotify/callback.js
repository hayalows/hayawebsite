const {
  createError,
  getRefreshToken,
  parseCookies,
  requestToken,
  serializeCookie,
  statesMatch,
} = require("../../lib/spotify");

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function page(response, status, title, body) {
  response.status(status);
  response.setHeader("Content-Type", "text/html; charset=utf-8");
  response.setHeader("Cache-Control", "no-store");
  response.setHeader("Referrer-Policy", "no-referrer");
  response.setHeader("X-Content-Type-Options", "nosniff");
  response.end(
    "<!doctype html><html lang=\"en\"><head>"
    + "<meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\">"
    + "<title>" + escapeHtml(title) + "</title>"
    + "<style>"
    + "body{margin:0;padding:2rem;background:#0d0d0d;color:#eee;font:16px/1.55 Arial,sans-serif}"
    + "main{max-width:620px;margin:8vh auto}h1{font-size:1.5rem;line-height:1.2}"
    + "p{color:#aaa}code,textarea{display:block;width:100%;box-sizing:border-box}"
    + "textarea{min-height:110px;margin:1rem 0;padding:.8rem;background:#070707;color:#eee;border:1px solid #444;border-radius:8px}"
    + "a{color:#9ec4e4}.note{padding:1rem;border:1px solid #333;border-radius:10px;background:#171717}"
    + "</style></head><body><main>"
    + body
    + "</main></body></html>",
  );
}

module.exports = async function handler(request, response) {
  if (request.method !== "GET") {
    response.setHeader("Allow", "GET");
    response.status(405).json({ error: "method_not_allowed" });
    return;
  }

  const url = new URL(request.url, "https://papa-kojo-cv.vercel.app");
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");
  const error = url.searchParams.get("error");
  const cookies = parseCookies(request.headers.cookie);

  if (error) {
    page(
      response,
      400,
      "Spotify connection cancelled",
      "<h1>Spotify connection cancelled</h1>"
      + "<p>No account data was changed.</p>"
      + "<p><a href=\"/\">Return to Papa Kojo's site</a></p>",
    );
    return;
  }

  if (!code || !statesMatch(cookies.spotify_oauth_state, state)) {
    page(
      response,
      400,
      "Spotify connection could not be verified",
      "<h1>Connection could not be verified</h1>"
      + "<p>The one-time security check was missing or expired. Start the connection again.</p>"
      + "<p><a href=\"/api/spotify/login\">Try Spotify connection again</a></p>",
    );
    return;
  }

  try {
    const token = await requestToken({
      grant_type: "authorization_code",
      code,
      redirect_uri: process.env.SPOTIFY_REDIRECT_URI,
    });

    if (!token.refresh_token) {
      throw createError(
        "spotify_refresh_token_missing",
        "Spotify did not return a refresh token.",
        502,
      );
    }

    response.setHeader(
      "Set-Cookie",
      serializeCookie("spotify_oauth_state", "", { maxAge: 0 }),
    );

    const replacingExistingToken = Boolean(getRefreshToken());
    const instructions = replacingExistingToken
      ? "Replace the existing SPOTIFY_REFRESH_TOKEN value in Vercel with this new value, then redeploy."
      : "Add this as a new SPOTIFY_REFRESH_TOKEN environment variable in Vercel, then redeploy.";

    page(
      response,
      200,
      "Spotify connection ready",
      "<h1>Spotify is authorised</h1>"
      + "<p>The connection worked. One final server setup step remains.</p>"
      + "<div class=\"note\"><strong>" + escapeHtml(instructions) + "</strong>"
      + "<textarea readonly>" + escapeHtml(token.refresh_token) + "</textarea>"
      + "<p>Keep this value private. Do not publish it or add it to browser code.</p></div>"
      + "<p><a href=\"/\">Return to Papa Kojo's site</a></p>",
    );
  } catch (error) {
    page(
      response,
      error.status || 502,
      "Spotify connection failed",
      "<h1>Spotify connection failed</h1>"
      + "<p>The account was not connected. Start again and try once more.</p>"
      + "<p><a href=\"/api/spotify/login\">Try Spotify connection again</a></p>",
    );
  }
};
