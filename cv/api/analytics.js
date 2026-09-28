const { cleanEvent, getSql, isBot, originAllowed } = require("../lib/analytics");

module.exports = async function handler(request, response) {
  response.setHeader("X-Content-Type-Options", "nosniff");
  response.setHeader("Cache-Control", "no-store");

  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    response.status(405).json({ ok: false, error: "method_not_allowed" });
    return;
  }
  if (!originAllowed(request)) {
    response.status(403).json({ ok: false, error: "origin_not_allowed" });
    return;
  }
  if (isBot(request)) {
    response.status(202).json({ ok: true, ignored: "bot" });
    return;
  }

  try {
    const event = cleanEvent(request);
    const sql = getSql();
    await sql`
      insert into analytics.events (
        id, visitor_hash, session_id, event_name, page_path, section, target,
        referrer_host, referrer_path, utm_source, utm_medium, utm_campaign, utm_content,
        country_code, region, device_type, browser, os, screen_width, screen_height,
        duration_ms, scroll_depth, metadata
      ) values (
        ${event.eventId}::uuid, ${event.visitorHash}, ${event.sessionId}, ${event.eventName},
        ${event.pagePath}, ${event.section}, ${event.target}, ${event.referrerHost},
        ${event.referrerPath}, ${event.utmSource}, ${event.utmMedium}, ${event.utmCampaign},
        ${event.utmContent}, ${event.countryCode}, ${event.region}, ${event.deviceType},
        ${event.browser}, ${event.os}, ${event.screenWidth}, ${event.screenHeight},
        ${event.durationMs}, ${event.scrollDepth}, ${JSON.stringify(event.metadata)}::jsonb
      )
      on conflict (id) do nothing
    `;
    response.status(202).json({ ok: true });
  } catch (error) {
    const configurationError = error.code === "analytics_database_missing" || error.code === "analytics_hash_key_missing";
    const invalidEvent = error.code === "analytics_event_invalid";
    if (!configurationError && !invalidEvent) console.error("analytics_collect_failed", error);
    response.status(configurationError ? 503 : invalidEvent ? 400 : 500).json({
      ok: false,
      error: configurationError ? "analytics_not_configured" : invalidEvent ? "invalid_event" : "analytics_unavailable",
    });
  }
};
