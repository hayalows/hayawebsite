# Graphic design archive

Built 7 October 2026 using the existing portfolio as the visual target and the
owner’s Product Design OS and UI UX Craft skills from the Skills repository.

## Brief and outcome

Prospective clients and recruiters need to see Papa Kojo’s graphic design range,
inspect individual pieces and contact him from the existing professional portfolio.
A dedicated `/design/` page positions his practice around brand identity, campaigns
and visual communication, with a visible entry beside the graphic design experience
and links in both Explore menus. Claims are grounded in the owner’s existing
experience and actual artwork; no awards, client outcomes or statistics are invented.

## Content inventory

Source: the owner-provided [My designs folder](https://drive.google.com/drive/folders/1U9E2-LCnFExmH4R8AL6qHNglSrHBHall).
The direct folder listing returned 69 entries: 67 images, one support résumé PDF
and one empty BYUMS GH IT Coordination Council folder. All 67 images were downloaded
with the authenticated Drive connector, visually reviewed, given descriptive titles,
and included. The résumé is already represented elsewhere in the portfolio and is
not treated as artwork. No files were found in the subfolder.

`design/catalog.json` records every image’s Drive ID, original filename/URL, category,
original dimensions, source SHA-256 and local preview/full-image paths. The known
copy of IMG_5334 is retained to honour the request to include every image file.
Similar designs, alternative exports and campaign stages are also retained.
The import is a snapshot, not a live Drive sync. Future Drive additions need another
import. Drive originals retain their existing permissions.

Each source is converted without cropping to a WebP preview (at most 640 × 800)
and a larger image (at most 1800 × 2400). Original-resolution files remain available
through each piece’s Drive link. Below-the-fold images load lazily, dimensions
reserve space, and the page introduces no runtime framework dependency or Drive API
requests. Total local image payload is about 25.6 MB across 134 files; visitors load
only the images their browsing requires, rather than the entire archive initially.

## Component research and decisions

Official documentation and source were checked on 7 October 2026.

- [UseLayouts Expandable Gallery](https://uselayouts.com/docs/components/expandable-gallery):
  three image cards, slight rotation, hover lift and gallery expansion. Its deck
  composition is adapted into the hero; the archive stays immediately browsable.
- [UseLayouts Pop Tilt Cards](https://uselayouts.com/docs/components/pop-tilt-cards):
  stable hit slots and a separate moving visual layer prevent hover thrashing.
  Used as the structural basis for the hero/card motion. Pointer-driven X/Y tilt
  is implemented in the portfolio’s vanilla stack and capped at six degrees.
- Source: [UseLayouts repository](https://github.com/iurvish/uselayouts), revision
  `07cc4f4fb8e064643168e6fc8792127af92637f5`, registry files
  `registry/default/example/expandable-gallery.tsx` and `pop-tilt-cards.tsx`.
  MIT notice and copyright are retained in `THIRD-PARTY-NOTICES.md`, with a visible
  gallery footer credit.
- [Rare UI Folder](https://rareui.com/components/foldercomponent): inspected as an
  existing portfolio component. Existing project-folder and Explore integrations
  remain part of the surrounding site; an artwork grid is more direct for browsing
  this large design archive than putting another folder interaction in every card.

These are source-backed adaptations to the existing HTML/CSS/JavaScript product.
The upstream React, Motion, Tailwind and example stock photos are not runtime
requirements of this page. No inference of conversion improvement or measured
visitor preference is made from component-library examples.

## Flow and states

Portfolio experience or Explore → archive → optional category/search → artwork
viewer → inspect, zoom, browse or open original → close → same gallery position.
Contact links open the visitor’s mail app with a graphic design project subject.

- A restrained dark palette, pale-blue accent and system typography match the
  existing portfolio. Cards mount the full artwork without cropping.
- Desktop uses three columns (four above 1700 px); tablet/mobile uses two, and
  narrow widths at 360 px or below use one. Header/actions wrap as needed.
- Native image links remain available without JavaScript. The hero then links
  to the corresponding artwork anchor. Filters are hidden until enhancement works.
- Filters combine with a filename/title/category search. Empty results offer a
  reset action and announce the result count. Search text is not sent to a server.
- A native modal dialog provides inert background and a keyboard focus trap.
  Close/Escape restores the opener; outside clicks close on desktop. Arrow keys
  navigate the current filtered set with bounded previous/next controls.
- `#view=DRIVE_ID` links directly to a design. Back/Forward preserves modal history;
  browsing within a modal replaces its current entry rather than growing history.
- Loading shows immediate feedback and a close action. Failure exposes retry,
  full image and Drive original links. Zoom is disabled until the image is ready.
- Zoom expands the artwork in a scrollable surface; Fit to screen restores its
  uncropped view. Browser/touch zoom remains available.
- Desktop depth reacts to the pointer; touch does not require hover. The motion
  toggle disables depth. System reduced motion overrides the toggle and removes
  motion transitions. No automatic playback, sound or looping animation is added.

## Verification

Run from the repository root:

```sh
DESIGN_EVIDENCE_DIR=/tmp/pkm-design node cv/tests/design-gallery-flow.e2e.cjs
node cv/tests/explore-flow.e2e.cjs
```

The gallery harness tests actual decoded artwork, all-file coverage, filtering,
filename search, empty recovery, modal behavior, keyboard/focus, browser history,
deep links, zoom, desktop tilt, touch, reduced motion, 200% text, responsive layouts,
image failure/retry, slow loading, no-JavaScript fallback and homepage integration.
Reports and screenshots are written to the evidence directory. Network failure
and delay scenarios are explicit browser-route fixtures; unrelated outbound/API
requests are blocked to avoid production analytics writes.

This is expert and browser verification, not a representative visitor study,
formal screen-reader certification, production CDN verification or field performance
measurement. Existing analytics can report page visits and contact/source link
clicks; no new analytics events or collection of search terms is introduced.

Final local verification: all 18 gallery scenarios and all 17 existing Explore
scenarios passed. Source inventory IDs matched all 67 imported catalog entries.
Primary, muted and accent text contrast checks passed at 7.51:1 or above on their
applicable backgrounds. Screenshots were inspected for desktop, mobile and viewer
states. No production deployment was made by this change.
