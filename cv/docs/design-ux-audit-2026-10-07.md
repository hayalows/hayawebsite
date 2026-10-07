# Graphic design gallery: UI and UX audit

Audit date: 7 October 2026. Baseline: production commit `3dbc83b`.
Skills applied: Product Design OS and Website UX Audit from the owner’s Skills repo.

## Verdict and scope

The original gallery supports finding, opening and inspecting all 67 image files,
but the expected swipe interaction is absent. The viewer also makes visitors do
extra work to jump between designs, recover from slow detail loading, revisit
filters after a long browse, and carry a particular design into a conversation.

Scope: the complete graphic design journey—portfolio experience/Explore entry,
gallery orientation, category and search, opening a design (including a direct
link), browsing, inspection/zoom, slow/failing media, exit/back/resumption, sharing
and contact. Surrounding unrelated projects are outside this repair scope.
Primary audience: prospective design clients and recruiters assessing range and
individual pieces, on desktop or phone. Success: inspect suitable work and return,
share or start a design-specific conversation without losing context.

Evidence: live HTML/CSS/JS responses fetched over verified HTTPS through curl,
rendered in Chromium; desktop/mobile screenshots; DOM/control geometry; real CDP
touch input; mouse drag and horizontal wheel input; code inspection. Chromium
itself does not trust this environment’s outbound proxy CA, so browser requests
were fulfilled with those actual live HTTPS responses, without disabling TLS.
Evidence is in `/tmp/pkm-design-audit-before/observations.json` and the six named
screenshots beside it. No access to the user’s active browser was available.

Limits: expert walkthrough and browser verification, not visitor interviews,
measured conversion impact, field Core Web Vitals or formal assistive-technology
certification. No contact email was sent. External analytics/API requests were
blocked. The audited artwork is genuine owner-provided content.

## Journey health before repair

| Step | Task | Baseline | Main risk |
| --- | --- | --- | --- |
| Entry | Find the designer and work | Good | Existing experience/Explore links work |
| Browse | Narrow the 67-file archive | Mixed | Search/filters disappear thousands of pixels above the current artwork |
| Open | Inspect a specific piece | Good | Native modal and direct links work |
| Move | Browse the next design naturally | Weak | Swipe, drag and horizontal wheel do nothing |
| Inspect | Read artwork and zoom | Mixed | Full-detail loading replaces artwork with a blank stage |
| Orient | Understand position and jump | Mixed | Counter and sequential arrows only; filenames add noise |
| Exit | Return to the same browsing task | Good | Focus/history work and should be preserved |
| Share/contact | Carry a piece into a conversation | Mixed | Raw deep link is shareable, but no explicit share/contact action in the viewer |

## Strengths to preserve

- Every original image file is represented, with uncropped local previews and
  original Drive links. No client outcomes, awards or research are fabricated.
- Native links work without JavaScript; a native modal supplies inert background.
- Touch targets, reduced motion, bounded arrows, browser history and focus return
  already have useful coverage. Existing navigation remains familiar.
- Typography, restrained surfaces and the pale-blue accent match the portfolio.
- Category/search filtering is local and search terms are not sent to a server.

## Prioritized findings and repairs

### A01 — Expected gesture does nothing (P1, high confidence)

Location: viewer image stage on touch, mouse drag and horizontal trackpad wheel.
Observation: Data Crunch masterclass remained selected after all three inputs.
The JS contains no gesture handlers. The user also directly reported this issue.
Consequence: the requested direct manipulation does not work; users must discover
and repeatedly tap the footer arrows. Alternative controls exist, so this is
not a total gallery blocker. Repair: horizontal swipe, mouse/pen drag and deliberate
horizontal wheel browsing, alongside existing arrows/keyboard. Keep vertical
movement, pinch and zoomed panning native. One gesture must advance at most once,
within the filtered set, with no wrap at an endpoint. Verify with actual CDP touch,
vertical/diagonal/cancel/multitouch cases, zoom and wheel-burst tests.

### A02 — The mobile viewer hides its instructions (P2, high confidence)

Observation: `.viewer-hint` is `display:none` below 600 px. Desktop instructions
mention only pointer depth and keyboard. Consequence: touch interaction and zoom
behavior are undiscoverable. Repair: one short device-appropriate instruction
that stays visible, changes when zoomed, and states boundaries naturally. Keep
48 px arrow targets as the explicit alternative. Verify portrait, landscape and
reduced motion; instructions must not be the sole way to operate the viewer.

### A03 — Sequential arrows cannot jump across the collection (P2, high confidence)

Observation: the modal has a position counter and previous/next, but no visual
index of the filtered results. Consequence: finding a different piece while
inside the viewer requires repeated navigation or exit. Repair: an optional
thumbnail strip scoped to the current results, with visible active selection,
accessible names, bounded keyboard navigation and a clear collapse button.
Do not auto-play or auto-advance. Verify direct jump, filtering, focus and image
failure; disclose only when requested to retain room for the artwork.

### A04 — Primary browsing tools are left far behind (P2, high confidence)

Observation: after scrolling to the final card, the search field was at y=-12505
on the 1440 px viewport. Consequence: revisiting a category or query requires a
long return scroll. Repair: compact contextual browsing tools that stay reachable
while browsing, with category counts and an explicit reset. Let controls become
static when a short viewport or enlarged text would obscure content. Raise search
input text from observed 13.6 px to 16 px to avoid the common iOS focus-zoom trigger.
Verify scrolling, keyboard focus, narrow width, 200% text and short landscape.

### A05 — Slow detail loading throws away useful preview content (P2, high confidence)

Observation: `loadImage()` hides the only viewer image until the full file loads.
Consequence: a visitor who already saw the thumbnail must wait at a blank stage;
a high-resolution failure loses the visual even when a preview is available.
Repair: show the preview immediately, load full detail in place, keep retry and
original links, and ignore stale loads after rapid navigation or close. Bound
stalled requests with an understandable retry state. Verify delayed, failed,
rapidly replaced and recovered loads; label preview quality honestly.

### A06 — Source filenames compete with meaningful orientation (P3, high confidence)

Observation: the header shows category plus raw `272EBAD2-...png` or `IMG_*.PNG`.
Consequence: metadata adds noise instead of helping visitors assess the work.
Repair: header shows category and clear current-result context; move original
filename to an optional source section. Expose one useful live announcement for
new artwork instead of reading multiple competing update regions. Verify dialog
accessible names, position announcements and source details.

### A07 — Viewer actions consume landscape artwork space (P2, high confidence)

Observation: at 844 × 390, the footer consumed 141 px; the artwork stage had only
143 px. File-opening actions and long desktop hints compete with browsing/zoom.
Consequence: an otherwise usable viewer gives the artwork too little space.
Repair: keep navigation, zoom and optional thumbnails visible; group full image,
original source, copying and enquiry under one clear Options disclosure. Keep
close visible at all sizes, use safe-area padding, and make overflow actions
scroll within the viewer. Verify all controls and artwork remain reachable at
short height, enlarged text and with the disclosure open.

### A08 — Sharing and enquiry require manual context transfer (P2, high confidence)

Observation: the hash supports individual links, but there is no copy/share or
contact action in the viewer. The gallery’s contact links describe a generic
project. Consequence: visitors must copy the address or manually describe which
piece they mean. Repair: copy the current design’s stable URL with real success
feedback and manual-copy recovery if clipboard access fails, plus an email link
containing the piece title and URL. No automatic email or sharing. Verify copy
success/pending/denial and encoded email content without sending it.

### A09 — Search requires an exact phrase and has no nearby reset (P2, high confidence)

Observation: one raw `includes(query)` comparison rejects reordered words and
accent differences. Recovery only appears once there are zero matches.
Consequence: ordinary variations in search can unnecessarily hide relevant work.
Repair: normalized word matching and a nearby reset whenever category/search is
active. Keep result totals and the existing no-results recovery. Verify filenames,
reordered words, diacritics, no results and filter composition.

## Review of the draft audit

No unsupported claim of visitor abandonment, preference or conversion uplift is
made. Gesture absence is supported by the user’s report, code and input tests;
other priorities reflect task cost with workable alternatives. Short landscape
is constrained, not a total failure. The established layout is retained, and new
controls each remove a concrete step. No fabricated case-study narratives,
awards, social proof, autoplay, analytics collection or full-site redesign is
part of these repairs.

## Future flow and acceptance

Entry → browse or narrow with reachable tools → tap artwork → see preview right
away → swipe/drag, arrows or optional thumbnails → zoom/pan → share/enquire with
current piece context → return with filters and position intact. Loading failure
preserves useful content and offers retry/source access. Natural first/last
boundaries remain explicit. All paths must work by touch or keyboard without
requiring animation.

Success measures proposed for later visitor validation: successful next-design
browse; successful direct jump; ability to find a named piece; correct return to
the gallery; successful design-link copy and enquiry composition. No new analytics
collection is added by this audit. Any conversion claims require real observation.

## Repairs and verification

A01–A09 are implemented in the static gallery, preserving all 67 catalog entries
and 134 image assets. A supplementary direct-entry repair brings the selected
artwork into view on close instead of focusing an offscreen card. Ordinary
opener/scroll restoration remains intact. The whole card title/category also
shares its image's native link target.

Browser evidence: `/tmp/pkm-design-repaired/report.json`, screenshots alongside it,
and `/tmp/pkm-design-audit-after/` visual review. The browser harness contains 32
scenarios covering real touch swipes both ways/bounds, rejected vertical/diagonal/
short/canceled/multitouch gestures, native zoomed panning, one-step mouse/wheel
bursts, filtered thumbnail jumps/keyboard movement, ordered-independent search,
sticky controls/focus, real image decoding, progressive/error/timeout/retry
states, rapid navigation, clipboard pending/success/denial/late completion,
contextual email encoding, native links without JS, history/exit and integration.

Reviewed layouts: 320, 390, 768, 1440 and 1920 px; mobile portrait and 844 × 390
landscape; 200% root text size; reduced motion. The landscape artwork stage is
about 250 px high after repair, compared with about 143 px before. Enlarged text
keeps the close and actions inside the viewport. This measurement establishes
space recovery, not visitor preference or conversion impact.

The optional axe-core 4.10.3 scan runs on the gallery, viewer and open Options
using WCAG 2/2.1/2.2 A/AA tags, with dialog accessibility snapshots. This is an
automated scan and semantics inspection, not formal screen-reader certification.
Pinch and native pan are exercised in separate disposable pages so browser page
magnification does not distort subsequent automation coordinates. Chromium input
emulation does not establish device-specific Safari behavior; physical iPhone /
Android and visitor checks remain useful follow-up validation.

All 32 gallery scenarios and all 17 existing Explore scenarios passed on the
final implementation. The automated scan found no violations in the audited
gallery, viewer or Options states. The Explore suite checks the surrounding
entry/contact navigation. No new production telemetry or external message is
created. Proposed visitor success measures above remain unmeasured.

Deployment verification is recorded in the task's live report after publishing;
only report success once the exact Git revision is READY and the custom domain
serves the revised gesture code and controls.

## Follow-up: artwork framing and mobile header

User evidence: screenshot of the hero and a report that the mobile Portfolio
label is incomplete. Baseline revision: `7280ca3`. Scope: hero, navigation,
mobile/text reflow, artwork entry and related recovery states. Product Design OS
is reapplied to this focused refinement.

- B01 (P2, high confidence): fixed 3:4 hero slots, padded surfaces and a light
  image background create visible white letterboxing around landscape/square
  designs. Respect each original ratio, remove the added mat/frame, keep the
  artwork uncropped and retain manual hover/focus depth and native links.
- B02 (P2, high confidence for layout): the header distributes three labels in a
  single flex row. At enlarged text it breaks the arrow from Portfolio, squeezes
  the contact label across multiple lines and pushes its icon toward the edge.
  Keep Portfolio complete on one line, make the mobile contact label concise,
  and let navigation wrap deliberately at enlarged text. Baseline normal mobile
  Chromium shows the entire word; the owner's device-specific truncation is not
  independently reproduced, so verify glyph and link bounds rather than assume
  its exact cause.
- B03 (P2, high confidence): mobile Chromium at 320 px with 200% root text reports
  an expanded 381 px layout viewport. The service strip’s intrinsic grid columns exceed its container; the long
  display word and inflexible header are further reflow risks. Repair min-width/reflow constraints, responsive headline
  sizing and the hero's intermediate-width layout. Verify 320–1920 px, including
  mobile emulation and enlarged text, not only desktop viewport resizing.
- B04 (P2, high confidence): gallery images have error recovery, but the three
  hero images do not. Add a same-ratio readable fallback with the working native
  link; failed images must not leave an unexplained blank or shift the next
  section over the art.
- B05 (P3, medium confidence): viewer “Browse” does not name the thumbnail index
  it reveals. Use visible “Thumbnails” with accessible Show/Hide labels and expanded state;
  keep the visible label stable to avoid moving the toolbar on toggle.

The framing change follows the owner's explicit visual preference. This audit
does not claim measured preference, conversion improvement or physical-device
accessibility. The overlapping composition and existing gallery remain familiar;
no autoplay or new dependency is introduced. Captions should sit in document
flow rather than an absolute slot so enlarged text does not collide with images.


Follow-up evidence: `/tmp/pkm-design-hero-refined/` (scenario report, unframed
hero desktop/mobile captures and mobile header at enlarged text), plus
`/tmp/pkm-hero-after/`. The stricter overflow check compares document scroll width
with its client width: mobile browsers can expand `innerWidth` to hide a layout
problem from an incorrect check. After repair, the 320 px mobile viewport remains
320 px at 200% text instead of expanding to 381 px. The service descriptions now
stack on mobile rather than forcing two narrow intrinsic grid tracks. The same
strict check also exposed tablet search/result-count overflow at 200% text; the
search row now wraps and its input shrinks within the available content width. Captions
flow below the artwork. All originals and source links remain intact.


Final follow-up validation: all 35 gallery scenarios pass, including all three
favourites opened by keyboard with correct focus return, original rendered image
ratios, failed hero previews with usable full-detail links, complete Portfolio
text bounds at 320/360/390/600/768 px with normal and 200% text, all prior gesture /
viewer / recovery scenarios, and the automated accessibility scan. Visual review
covers the unframed desktop/mobile hero and enlarged-text mobile header. The
mobile implementation is tested in Chromium emulation; no physical Safari / iOS
result or measured visitor preference is asserted.
