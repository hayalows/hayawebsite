# Papa Kojo Mensah CV site

This folder is the standalone static site deployed to the existing Vercel project `papa-kojo-cv`.

The professional profile, project index and one-page CV register six non-overlapping WebMCP tools: bounded profile retrieval, skills by category, experience by organization, education by credential, projects by exact key and a reversible email draft. The tool descriptions explicitly route agents away from adjacent tools, input schemas use tight enums, and every result has an inline `outputSchema` plus matching `structuredContent`. Registration passes `telemetry: false`; no tool exposes private source material, sends a message or books time. Stable contracts are also published in `webmcp/results.schema.json`.

## Local preview

From the repository root:

```powershell
python -m http.server 4173 --directory cv
```

Open `http://localhost:4173`.

## Public CV

`resume/` is a one-page, print-friendly public CV built from private Google Drive source material. It deliberately omits the private document URL and phone number. The main site links to this route as “View one-page CV”.

## PKM Playground

`playground/` is an optional, dependency-free experience linked below the homepage evidence strip. Its original SVG workspace has four named corners: the Clarity Lab, RouteLab map notes, a listening corner and a postcard. Assets load only when someone navigates to the playground; the existing portfolio and printable CV remain directly accessible.

The calendar tangle is a fictional puzzle inspired by English Chat Finder. Three reversible filters narrow eight sample sessions to one match for Thursday, 18:30–19:15 GMT, lasting at least 45 minutes. Incorrect choices explain the mismatch, a correct choice reveals the real project story, and visitors can replay. These sessions are not live availability or bookable events.

Completion, explored corners and the chosen postcard palette are saved locally under `pkm.playground.v1`; unavailable or corrupt storage leaves the experience usable. An optional recipient name stays in page memory and the visitor's downloaded image. Postcards export locally as 1600×1000 PNGs, without a server or external image/font requests. The listening corner reads only an existing `pkm.spotify.snapshot.v2` saved track, labels it as saved, and makes no Spotify or listening API requests. The six existing WebMCP tools register on the new page as well.

Verify with `PLAYGROUND_EVIDENCE_DIR=/tmp/pkm-playground node cv/tests/playground-flow.e2e.cjs` from the repository root. The prerequisites match the Spotify browser harness below. The script serves real static files, uses native browser dialogs and downloads, closes disposable contexts/server, and leaves a versioned scenario report, screenshots and actual exported PNGs. External/unrelated API requests are blocked; WebMCP uses an AbortSignal-compatible browser registration fixture. Explicit storage/export failures are injected through browser APIs. Local checks do not establish production CDN behavior, field performance, or assistive-technology compliance.

## Spotify connection

The personal listening panel reads public track metadata from a server-side Vercel function. It shows the five tracks that repeat most within Spotify’s latest 50 recently played entries, while still checking whether something is playing now. Spotify does not provide lifetime play counts through this feed, so the page labels these as recent plays and shows the listening window. It stays quiet when Spotify is not connected and never exposes OAuth tokens to browser JavaScript.

The production project needs these Vercel environment variables:

~~~text
SPOTIFY_CLIENT_ID
SPOTIFY_CLIENT_SECRET
SPOTIFY_REDIRECT_URI
SPOTIFY_REFRESH_TOKEN
~~~

The redirect URI must match the Spotify Developer app exactly:

~~~text
https://pkm.hayalows.com/api/spotify/callback
~~~

To authorise the account, open https://pkm.hayalows.com/api/spotify/login. Spotify returns a one-time refresh token page. Add that value to Vercel as SPOTIFY_REFRESH_TOKEN, then redeploy. Keep the value private.

The connection requests only `user-read-currently-playing` and `user-read-recently-played`. No top-artist, profile or playlist permissions are requested. One controller, `spotify-ui.js`, owns the listening panel; WebMCP only registers tools. The page requests the stable `/api/listening` URL when the panel is near the viewport. It checks every 30 seconds while playing and every five minutes while idle or paused. It stops checking while offscreen, hidden, or offline. The progress bar advances locally and respects reduced motion.

The API caches current playback for 30 seconds while playing or five minutes while idle, and recent history for 15 minutes. Concurrent requests share playback/history work and OAuth refreshes within a warm function instance. A Spotify `204` is an idle result; the current-only route never fetches history as a fallback. The combined response keeps the latest known track and ranked history, so the main card can say “Last played” without a fresh history call on every idle check.

Successful snapshots and quiet/error states return HTTP 200 with a payload `status` and Vercel CDN cache headers. A Spotify `429` returns `status: "rate_limited"`, an absolute `retryAt`, remaining `retryAfter`, and any available saved metadata. Both API views and OAuth calls respect the cooldown within the warm instance. The CDN can cache this metadata response throughout the cooldown; the browser persists the same deadline across reloads, refresh clicks, lifecycle events, and tabs. Saved music is never labelled live. Temporary failures keep the last known UI and use a slower retry.

`/api/listening?view=current` and `?view=recent` remain available for diagnostics and backwards compatibility. The page uses the queryless combined route so visitors share one CDN key, with no timestamps or cache-bypass headers. Warm-instance memory is not a durable store or a global lock across cold workers/regions. CDN caching reduces those requests, but Spotify's app-wide quota still applies, including other clients using the same app. This code cannot cancel an existing Spotify cooldown or guarantee a provider will never return 429.

### Verify the listening flow

From the repository root:

```sh
node --test cv/tests/listening-api.test.cjs
SPOTIFY_EVIDENCE_DIR=/tmp/spotify-flow-evidence node cv/tests/spotify-flow.e2e.cjs
node --import ./tests/register-webmcp-loader.mjs --test tests/webmcp-tools.test.mjs tests/profile-structured-data.test.mjs
```

The browser harness needs Playwright (validated with 1.62.1) available to Node and Chromium at `/usr/bin/chromium`. It starts an ephemeral local HTTP server, exercises the real page and listening handler, and mocks only Spotify/OAuth and unrelated outbound browser requests. It uses disposable fixture credentials and local browser storage. It closes the server/browser and leaves `report.json` plus desktop/mobile screenshots in the evidence directory. The report includes source revision, patch and harness hashes, versions, and scenario outcomes. The local adapter does not verify Vercel CDN behavior or production credentials. `--baseline` serves the original `773c38e` frontend to reproduce the original controller/registration failures; API source always comes from the current checkout.

The public /api/listening route returns metadata only:

~~~json
{
  "status": "playing",
  "provider": "Spotify",
  "isPlaying": true,
  "source": "currently_playing",
  "track": {
    "name": "Track title",
    "artists": ["Artist"],
    "album": "Album title",
    "albumUrl": "https://open.spotify.com/album/...",
    "imageUrl": "https://i.scdn.co/image/...",
    "url": "https://open.spotify.com/track/...",
    "playedAt": null,
    "durationMs": 210000
  },
  "progressMs": 42000,
  "updatedAt": "2026-08-23T12:00:00Z"
}
~~~

## Deployment

The existing Vercel project uses `cv` as its Git root directory. Deploy from this folder and keep the main Hayalows website configuration untouched.


## First-party analytics

The portfolio includes a custom analytics collector and private dashboard backed by Neon Postgres.

Required production environment variables:

- `PKM_ANALYTICS_DATABASE_URL`: pooled Neon Postgres connection string for the analytics database.
- `PKM_ANALYTICS_HASH_KEY`: long random secret used to HMAC visitor network/browser signals. Raw IP addresses and raw user-agent strings are not stored.
- `PKM_ANALYTICS_DASHBOARD_KEY`: private key required by `/analytics/` to read aggregated data.

Apply `analytics/schema.sql` once to the target Neon database before enabling collection.

Public collection endpoint: `POST /api/analytics`.
Private summary endpoint: `GET /api/analytics-summary?days=30`.
Private dashboard: `/analytics/`.

The tracker respects Global Privacy Control and Do Not Track, does not use advertising cookies, and records an engagement event when the visitor leaves the page.

## Project folders

Selected work uses a vanilla HTML/CSS/JavaScript adaptation of Rare UI's folder
silhouette and motion. Each native button opens a static interface preview;
Escape or Close preview closes it and returns focus to the folder. Only one
preview opens at a time. Names, project evidence and tracked links remain visible
without JavaScript. Open state resets on reload. Images failing to load show a
message while the project links remain available.

The three public project screenshots were captured on 2026-10-01 and stored as
local, lazy-loaded WebP images (about 116 KB combined). This feature makes no API
calls. The visible privacy-page design credit and `THIRD-PARTY-NOTICES.md` preserve Rare UI's
copyright and licence conditions.

Run the browser checks from the repository root:

```sh
FOLDER_EVIDENCE_DIR=/tmp/pkm-project-folders node cv/tests/project-folders-flow.e2e.cjs
```

Requires Playwright and `/usr/bin/chromium`. The harness serves the real static
files, blocks API/external requests, and uses an AbortSignal-compatible WebMCP
registration fixture. Reports and screenshots record the actual outcomes;
image failure and JavaScript-disabled scenarios use disposable contexts.

## Explore navigation and contact

The portfolio has one native disclosure controller for desktop and mobile
Explore menus. UseLayouts Smooth Dropdown and Bottom Menu inspired the compact
panel and tray motion; Get In Touch inspired the portrait contact link, and
StatusButton informed clipboard feedback. Adaptations use the existing vanilla
stack with no new runtime dependency or Spotify requests. The MIT copyright and
permission notice are retained in `THIRD-PARTY-NOTICES.md`.

Mobile keeps Home, Work, Experience and Contact directly visible. Explore links
to the Playground, one-page CV, Skills, Education and Personal. The desktop
sidebar retains its section links and adds the same Explore destinations.
Native `details`/`summary` and real links work without JavaScript; the mobile
fallback keeps the menu in document flow and hides the unavailable copy button. Enhancement
adds Escape/outside dismissal, focus handling and section tracking. The dock
wraps when enlarged text needs more room; the panel scrolls within the viewport.
Animations respect reduced motion.

The contact link keeps the email address visible while its portrait/greeting
respond to hover and keyboard focus. Clipboard feedback reflects the actual
write result: pending suppresses duplicate writes, success announces Copied,
and denial offers manual selection or the mail link plus retry. It does not
silently launch email after a failed copy.

Run from the repository root:

```sh
EXPLORE_EVIDENCE_DIR=/tmp/pkm-explore node cv/tests/explore-flow.e2e.cjs
```

Requires Playwright and `/usr/bin/chromium`. The harness serves the real static
site, uses disposable browser contexts and leaves scenario reports/screenshots.
Listening/analytics and outbound requests are fixtures; clipboard success,
pending and rejection are injected through the browser API. WebMCP uses the
same AbortSignal registration fixture as the existing browser checks. No email
is sent. These checks do not establish production CDN behaviour or formal
assistive-technology compliance.

## Mobile Gooey Nav

`mobile-gooey.js` adapts Rare UI’s Gooey Nav for the existing five mobile
destinations. Selected tiles separate from joined inactive groups; decorative
SVG necks pinch and break during a bounded 320 ms transition. Section tracking
and the native Explore disclosure continue to own navigation. Open Explore
temporarily takes visual priority, while the actual current-section link keeps
its accessible state.

The adaptation uses the portfolio’s pale-blue accent, retains 48 px target
heights, and adds no dependency or API calls. Rapid selections replace the
current animation rather than accumulating work. Reduced motion applies the
final state immediately. At enlarged text sizes, wrapped rows use separate
rounded tiles without SVG bridges. The desktop sidebar stays unchanged.
If the optional script cannot load, the existing links and Explore still work.
Rare UI attribution remains on the privacy page and the source licence is in
`THIRD-PARTY-NOTICES.md`. The Explore browser harness also verifies active tile
separation, rapid selection, reduced motion and wrapped rows.
