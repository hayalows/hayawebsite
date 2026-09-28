const { adminAuthorized, getSql } = require("../lib/analytics");

function integer(value, fallback = 0) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? Math.round(parsed) : fallback;
}

module.exports = async function handler(request, response) {
  response.setHeader("X-Content-Type-Options", "nosniff");
  response.setHeader("Cache-Control", "private, no-store");
  if (request.method !== "GET") {
    response.setHeader("Allow", "GET");
    response.status(405).json({ ok: false, error: "method_not_allowed" });
    return;
  }
  if (!process.env.PKM_ANALYTICS_DASHBOARD_KEY) {
    response.status(503).json({ ok: false, error: "dashboard_not_configured" });
    return;
  }
  if (!adminAuthorized(request)) {
    response.status(401).json({ ok: false, error: "unauthorized" });
    return;
  }

  const days = Math.max(1, Math.min(365, integer(request.query?.days, 30)));

  try {
    const sql = getSql();
    const [totalsRows, audienceRows, timeline, pages, referrers, countries, devices, browsers, campaigns, actions, recent] = await Promise.all([
      sql`
        select
          count(*) filter (where event_name = 'page_view')::int as pageviews,
          count(distinct visitor_hash)::int as visitors,
          count(distinct session_id)::int as sessions,
          coalesce(round(avg(duration_ms) filter (where event_name = 'engagement' and duration_ms > 0)), 0)::int as avg_duration_ms,
          count(distinct visitor_hash) filter (where occurred_at >= now() - interval '5 minutes')::int as live_visitors
        from analytics.events
        where occurred_at >= now() - (${days}::int * interval '1 day')
      `,
      sql`
        with first_seen as (
          select visitor_hash, min(occurred_at) as first_seen_at
          from analytics.events
          group by visitor_hash
        ),
        active as (
          select distinct visitor_hash
          from analytics.events
          where occurred_at >= now() - (${days}::int * interval '1 day')
        )
        select
          count(*) filter (where first_seen.first_seen_at >= now() - (${days}::int * interval '1 day'))::int as new_visitors,
          count(*) filter (where first_seen.first_seen_at < now() - (${days}::int * interval '1 day'))::int as returning_visitors
        from active
        join first_seen using (visitor_hash)
      `,
      sql`
        select to_char(date_trunc('day', occurred_at), 'YYYY-MM-DD') as day,
          count(*) filter (where event_name = 'page_view')::int as pageviews,
          count(distinct visitor_hash)::int as visitors,
          count(distinct session_id)::int as sessions
        from analytics.events
        where occurred_at >= now() - (${days}::int * interval '1 day')
        group by 1 order by 1
      `,
      sql`
        select page_path as label, count(*)::int as pageviews, count(distinct visitor_hash)::int as visitors
        from analytics.events
        where event_name = 'page_view' and occurred_at >= now() - (${days}::int * interval '1 day')
        group by page_path order by pageviews desc, visitors desc limit 12
      `,
      sql`
        select coalesce(nullif(referrer_host, ''), 'Direct') as label,
          count(*)::int as pageviews, count(distinct visitor_hash)::int as visitors
        from analytics.events
        where event_name = 'page_view' and occurred_at >= now() - (${days}::int * interval '1 day')
        group by 1 order by pageviews desc limit 12
      `,
      sql`
        select coalesce(country_code, 'Unknown') as label,
          count(distinct visitor_hash)::int as visitors,
          count(*) filter (where event_name = 'page_view')::int as pageviews
        from analytics.events
        where occurred_at >= now() - (${days}::int * interval '1 day')
        group by 1 order by visitors desc limit 12
      `,
      sql`
        select coalesce(device_type, 'Unknown') as label, count(distinct visitor_hash)::int as visitors
        from analytics.events
        where occurred_at >= now() - (${days}::int * interval '1 day')
        group by 1 order by visitors desc
      `,
      sql`
        select coalesce(browser, 'Unknown') as label, count(distinct visitor_hash)::int as visitors
        from analytics.events
        where occurred_at >= now() - (${days}::int * interval '1 day')
        group by 1 order by visitors desc limit 8
      `,
      sql`
        select coalesce(utm_source, 'None') as label,
          count(*) filter (where event_name = 'page_view')::int as pageviews,
          count(distinct visitor_hash)::int as visitors
        from analytics.events
        where occurred_at >= now() - (${days}::int * interval '1 day') and utm_source is not null
        group by 1 order by pageviews desc limit 10
      `,
      sql`
        select event_name as label, count(*)::int as events, count(distinct visitor_hash)::int as visitors
        from analytics.events
        where occurred_at >= now() - (${days}::int * interval '1 day')
          and event_name not in ('page_view', 'section_view', 'engagement')
        group by event_name order by events desc limit 12
      `,
      sql`
        select occurred_at, event_name, page_path, section, target, country_code, region, device_type, browser, referrer_host
        from analytics.events
        where occurred_at >= now() - (${days}::int * interval '1 day') and event_name <> 'engagement'
        order by occurred_at desc limit 60
      `,
    ]);

    response.status(200).json({
      ok: true,
      generatedAt: new Date().toISOString(),
      days,
      totals: totalsRows[0] || {},
      audience: audienceRows[0] || {},
      timeline, pages, referrers, countries, devices, browsers, campaigns, actions, recent,
    });
  } catch (error) {
    if (error.code !== "analytics_database_missing") console.error("analytics_summary_failed", error);
    response.status(error.code === "analytics_database_missing" ? 503 : 500).json({
      ok: false,
      error: error.code === "analytics_database_missing" ? "analytics_not_configured" : "analytics_unavailable",
    });
  }
};
