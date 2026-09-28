create schema if not exists analytics;

create table if not exists analytics.events (
  id uuid primary key,
  occurred_at timestamptz not null default now(),
  visitor_hash varchar(40) not null,
  session_id varchar(64) not null,
  event_name varchar(48) not null,
  page_path varchar(500) not null,
  section varchar(64),
  target varchar(160),
  referrer_host varchar(255),
  referrer_path varchar(500),
  utm_source varchar(120),
  utm_medium varchar(120),
  utm_campaign varchar(160),
  utm_content varchar(160),
  country_code varchar(2),
  region varchar(120),
  device_type varchar(16),
  browser varchar(32),
  os varchar(32),
  screen_width integer,
  screen_height integer,
  duration_ms integer,
  scroll_depth smallint,
  metadata jsonb not null default '{}'::jsonb,
  constraint analytics_events_scroll_depth_check check (scroll_depth is null or (scroll_depth >= 0 and scroll_depth <= 100)),
  constraint analytics_events_duration_check check (duration_ms is null or duration_ms >= 0)
);

create index if not exists analytics_events_occurred_at_idx on analytics.events (occurred_at desc);
create index if not exists analytics_events_event_time_idx on analytics.events (event_name, occurred_at desc);
create index if not exists analytics_events_visitor_time_idx on analytics.events (visitor_hash, occurred_at desc);
create index if not exists analytics_events_path_time_idx on analytics.events (page_path, occurred_at desc);

comment on schema analytics is 'First-party portfolio analytics. Raw IP addresses and raw user-agent strings are not stored.';
comment on column analytics.events.visitor_hash is 'One-way HMAC generated at request time from network and browser signals. The raw values are discarded.';
