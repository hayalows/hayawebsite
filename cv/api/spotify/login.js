const {
  buildAuthorizationUrl,
  createState,
  getOAuthConfig,
  serializeCookie,
} = require("../../lib/spotify");

module.exports = function handler(request, response) {
  if (request.method !== "GET") {
    response.setHeader("Allow", "GET");
    response.status(405).json({ error: "method_not_allowed" });
    return;
  }

  try {
    getOAuthConfig();
    const state = createState();

    response.setHeader(
      "Set-Cookie",
      serializeCookie("spotify_oauth_state", state, { maxAge: 600 }),
    );
    response.setHeader("Cache-Control", "no-store");
    response.setHeader("Location", buildAuthorizationUrl(state));
    response.statusCode = 302;
    response.end();
  } catch (error) {
    response.status(error.status || 500).json({
      error: error.code || "spotify_connection_unavailable",
    });
  }
};
