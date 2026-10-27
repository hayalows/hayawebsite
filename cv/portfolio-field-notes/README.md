# Portfolio Field Notes

Independent archive of 150 portfolios, published at `https://pkm.hayalows.com/portfolio-field-notes/`.

## Product behaviour

The index uses static HTML so every portfolio remains browsable if JavaScript fails. Clicking a card opens a **local** canonical review URL (`/<portfolio-id>/`). The original portfolio always has its own explicit outbound link on its review page.

The original 50 entries remain intact: 12 selected close reads, 34 additional records and four sites marked for another look. The 100 new entries have concise first-pass screens based on one visible signal from each public portfolio. They are useful starting points, not long-form reviews, individual ratings or hiring recommendations.

The source collection lives in `data.js`; IDs are stable public URL identifiers. All 150 detail pages contain static HTML, unique titles/descriptions and neighbour links. The 100 new pages are generated from their source-grounded screening signals. Only optional controls use JavaScript. Avoid a mandatory SPA runtime in this directory.

Eleven featured portfolio previews were captured from the owners' public websites on 24 October 2026 and are stored as local WebP assets in `screenshots/`. Other image previews are lazy thumbnails requested from WordPress mShots. Their appearance may differ from the live website and the source can fail; the built-in editorial typographic cover remains visible underneath. Third-party preview requests occur when the image approaches the viewport. Do not silently replace absent screenshots with AI-generated fake website screenshots.

## Library patterns and credits

The original archive uses static HTML/CSS/JavaScript and retains the interaction-pattern adaptations listed below. The current index also progressively enhances selected areas with React components copied from the useLayouts and ReUI registries. These source components have been adapted for archive data, styling, accessibility, and compatibility with the existing controls. The static archive remains the fallback if JavaScript fails. See `component-prototype/README.md` and its `vendor/` directory for the ten sourced components and their licences.

| Source | Components adapted | Actual use |
| --- | --- | --- |
| [useLayouts](https://uselayouts.com/docs) | Expandable Gallery, Feature Carousel, Pop Tilt Cards, Smooth Dropdown, Discrete Tabs | Featured horizontal gallery, its arrows and related article navigation, subtle hover tilt, archive sort menu, category filters |
| [Rare UI](https://rareui.com/components) | Gooey Nav, Grid Reveal, Animated Counter, Scroll Progress, Rail ToC | Compact mobile navigation, incremental grid entry, result count motion, article reading progress, article section navigation |
| [beUI](https://beui.dev/components/motion) | Command Palette, Theme Toggle, Bottom Sheet, Tooltip, Bouncy Accordion, Animated Toast Stack | Keyboard search, light/dark switch, mobile saved list, action hints, expandable review method, bookmark/copy feedback |

16 component *patterns* have useful jobs. The animations are kept deliberately small and disabled under `prefers-reduced-motion`. Legal credit appears in the visible site footer and `../THIRD-PARTY-NOTICES.md`. No Pro/premium asset is redistributed.

## Editing guidance for developers and coding agents

- Preserve the original 50 entries and their external URLs. `data.js` is the source for all 150 archive records and their screening signals.
- Every added entry must have a unique lowercase slug as `id`, a working original URL where available, a concise source-grounded `qualitySignal`, an X `sourceUrl`, a corresponding static `<id>/index.html`, and an entry in the sitemap. Run `node portfolio-field-notes/sync-screenings.mjs` from `cv` to build the first-pass pages and keep route navigation current.
- Do not invent interview quotes, screenshots, portfolio scores, impact metrics or detailed commentary. Mark pending reviews as pending.
- `styles.css` contains the design tokens and responsive layout; `ui.js` owns shared controls; `app.js` owns archive filters, sorting and layout only. Keep them separate.
- Use real links rather than click-only divs. Dialogs must remain keyboard reachable, and screenshot failures must not destroy layout.
- Run `node --check portfolio-field-notes/ui.js`, `node --check portfolio-field-notes/app.js` and `node portfolio-field-notes/verify.mjs` from the `cv` directory, then browser-test 320px, 390px, tablet and desktop widths.
- The website's Spotify and analytics functions, project stories, design portfolio and other site sections are outside this feature's scope.

## UI refinement v4

A locally hosted Lucide SVG sprite (`icons.svg`) supplies one consistent icon vocabulary across the archive, review pages, command search and mobile navigation. `ui.js` enhances existing plain-text symbols so no-JS navigation and article links remain intact. Controls use stable 44–48px touch targets, readable mobile labels, explicit page and saved states, and reduced-motion support. Mobile review actions are two compact tools followed by one full-width visit action.

## Mobile finishing pass

At 320px the selected count is dropped rather than wrapping as an orphan. The mobile dock hides while scrolling down through a review or long archive, returns on upward scroll, and always returns when close to either end of the page. Filter, query, sort and display mode are saved in per-tab session storage, so returning from a portfolio preserves the previous browsing context without requiring an account or new service. Indexed and close-read badges are hidden on full review pages; missing-assessment status remains visible.

## Source-grounded reading notes (24 October 2026)

reviews.json holds 50 editorial drafts based on public portfolio content and earlier source notes. Each article has What caught my eye, What works well, and My recommendation. Forty-five reviews include a direct recommended project or source link. Entries with inaccessible or thin source material explain that limit.

The first-person observations are proposed writing for the owner to review. They do not establish that Papa Kojo personally visited, tested or endorses every site. Claims about creator results are not independently verified. Change reviews.json as your own views develop.

Run from `cv`: `node portfolio-field-notes/sync-reviews.mjs` rebuilds the original 50 editorial pages. `node portfolio-field-notes/sync-screenings.mjs` rebuilds the 100 first-pass pages and archive route navigation. Then run `node portfolio-field-notes/verify.mjs`.
