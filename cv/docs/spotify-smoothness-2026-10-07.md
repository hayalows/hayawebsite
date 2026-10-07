# Spotify playback responsiveness and request protection

The main portfolio checks playing metadata every 10 seconds and idle/paused
metadata every 20 seconds while the listening panel is near the viewport and the
tab is visible and online. These replace the previous 30/60-second intervals.
Spotify has no playback push notification in this integration: skip detection is
bounded polling, plus network and provider latency, rather than instantaneous.

Shared Vercel Runtime Cache now keeps current snapshots, last observed tracks,
15-minute recent history, transient failure backoff and provider cooldowns across
function instances and deploys. The function region is pinned to its existing
`iad1` region because Runtime Cache is regional. Stable URLs retain CDN caching;
refresh clicks, reloads and lifecycle events do not bypass the upstream cache.
A warming marker coalesces ordinary concurrent cache misses, and promises
coalesce work within one worker. Public song metadata is cached; credentials are
never cached. A failed cache read stops before requesting Spotify.

In steady operation, active playback needs roughly six current-item requests per
minute across visitors sharing this regional cache, and history needs at most
one successful refresh per 15 minutes. Idle playback checks need roughly three
per minute. Requests stop when nobody is viewing the panel. The cache is
**ephemeral** and has no atomic compare-and-set: eviction, unavailable platform
cache, concurrent marker races, and OAuth/401 recovery prevent treating those
figures as a strict account-wide quota. Other Spotify applications can consume
the account/app's limits too. Real Retry-After deadlines remain authoritative.

Current songs no longer wait for a slow history refresh: current metadata is
returned after at most a short history grace period, and `waitUntil` retains
background work. When no current or last-known track exists, the initial history
lookup can still finish so an idle visitor sees real previous listening.

Frontend repairs:

- An expired CDN response is rechecked after one second instead of adding another
  full interval. Re-entry and online/visibility recovery revalidate promptly.
- Older HTTP or cross-tab snapshots cannot replace newer listening. Newer tab
  snapshots render without downgrading a fresh playing song to saved state.
- Brief network failures retry with 5/10/20/30-second capped backoff, while a
  provider cooldown survives reload and is shared across tabs and workers.
- Automatic polling keeps the refresh label stable. Changed titles immediately
  hide the previous album cover, with image-load races and broken art handled.
- Reduced-motion preferences retain one-second functional progress updates;
  progress does not make extra API calls or invent the next song at track end.

Validation: the API regression file and five cache tests pass, along with all
20 HTTP/browser scenarios on desktop and mobile. Cache tests use independent
readers and a shared fake store; they demonstrate application behavior but do
not prove the platform's storage guarantees. Browser timer fixtures use aligned
response timestamps. Production source, deployment, API deadlines and actual
rendered playback are checked separately after publishing.
