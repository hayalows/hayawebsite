# Spotify playback freshness repair

The owner reported BALOTELLI playing while the main portfolio did not show live
playback. The first live responses contained a successful but cached idle result
checked at 10:40:08 UTC, with a deadline five minutes later. A later response
reported Adey Mad playing at 10:46:08 UTC. This establishes a working connection
and a stale idle window; it does not establish that any particular song is still
playing when someone subsequently opens this report.

Three delays are repaired:

1. Server and browser idle/paused checking is bounded to one minute, replacing
   five minutes. Playing remains on the existing 30-second interval; recent
   history remains cached for 15 minutes.
2. Normal saved content revalidates when the panel enters the viewport after a
   reload. A stored normal polling deadline no longer hides new playback. Stored
   Spotify rate-limit deadlines still survive reload and coordinate tabs.
3. A response already cached for part of its lifetime schedules the next browser
   request for the remaining server lifetime. It does not add a fresh full minute
   on top of that cache age. Missing/expired deadlines fall back to the ordinary
   interval, with a one-second minimum to avoid immediate loops.

The endpoint URL stays `/api/listening`, preserving shared cache keys. Warm
snapshots and in-flight work are deduplicated. Offscreen, hidden and offline
panels remain quiet; manual refresh throttling, denied OAuth recovery and
provider cooldowns remain. No credentials, OAuth scopes or connected account
are changed. The Design archive is unchanged: the requested panel is on the main
portfolio. Reload the page after the release to load the revised controller.

Validation uses the real handler with disposable Spotify/OAuth fixtures and a
warm idle-to-playing transition at 60 seconds, including concurrent requests
and retained history caching. Browser checks cover entry, normal saved state,
server-cache phase, playback/progress, offscreen behavior, cooldown reload and
cross-tab races, mobile fit and existing WebMCP registration. Dedicated timer
fixtures align response timestamps to the browser's virtual clock; real local
HTTP coverage handles the other scenarios. These do not simulate multiple cloud
workers or physical devices. A production read check verifies the actual public
playback response and its rendered label after the exact revision is deployed.

Final local verification: the API regression suite and all 14 Spotify
HTTP/browser scenarios passed. No production credentials were used in these tests.
