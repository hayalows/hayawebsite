# Portfolio Field Notes

Independent archive of 50 portfolios, published at `https://pkm.hayalows.com/portfolio-field-notes/`.

## Product behaviour

The index uses static HTML so every portfolio remains browsable if JavaScript fails. Clicking a card opens a **local** canonical review URL (`/<portfolio-id>/`). The original portfolio always has its own explicit outbound link on its review page.

12 entries have detailed observational notes for designers and hiring teams. 34 additional entries are indexed without fabricated long reviews. Four inaccessible sites remain explicitly marked for another look. No numeric individual ratings or fabricated results are shown.

The source collection lives in `data.js`; IDs are stable public URL identifiers. The 50 detail pages contain static HTML, unique titles/descriptions and neighbour links. Only optional controls use JavaScript. Avoid a mandatory SPA runtime in this directory.

Eleven featured portfolio previews were captured from the owners' public websites on 24 October 2026 and are stored as local WebP assets in `screenshots/`. Other image previews are lazy thumbnails requested from WordPress mShots. Their appearance may differ from the live website and the source can fail; the built-in editorial typographic cover remains visible underneath. Third-party preview requests occur when the image approaches the viewport. Do not silently replace absent screenshots with AI-generated fake website screenshots.

## Library patterns and credits

The upstream designs are React/Motion components. Because the existing Vercel project serves **static vanilla HTML/CSS/JavaScript** from `cv/`, Field Notes ports their useful interaction patterns rather than copying TSX unchanged. These are **adaptations**, not original upstream implementations. This choice avoids a new application framework and keeps the rest of the portfolio unchanged.

| Source | Components adapted | Actual use |
| --- | --- | --- |
| [useLayouts](https://uselayouts.com/docs) | Expandable Gallery, Feature Carousel, Pop Tilt Cards, Smooth Dropdown, Discrete Tabs | Featured horizontal gallery, its arrows and related article navigation, subtle hover tilt, archive sort menu, category filters |
| [Rare UI](https://rareui.com/components) | Gooey Nav, Grid Reveal, Animated Counter, Scroll Progress, Rail ToC | Compact mobile navigation, incremental grid entry, result count motion, article reading progress, article section navigation |
| [beUI](https://beui.dev/components/motion) | Command Palette, Theme Toggle, Bottom Sheet, Tooltip, Bouncy Accordion, Animated Toast Stack | Keyboard search, light/dark switch, mobile saved list, action hints, expandable review method, bookmark/copy feedback |

16 component *patterns* have useful jobs. The animations are kept deliberately small and disabled under `prefers-reduced-motion`. Legal credit appears in the visible site footer and `../THIRD-PARTY-NOTICES.md`. No Pro/premium asset is redistributed.

## Editing guidance for developers and coding agents

- Preserve the 50 existing entries and their external URLs. `data.js` is the single source of editorial notes.
- Every added entry must have a unique lowercase slug as `id`, a working original URL where available and a corresponding static `<id>/index.html`. Use an existing page as the authoring template. Update the sitemap.
- Do not invent interview quotes, screenshots, portfolio scores, impact metrics or detailed commentary. Mark pending reviews as pending.
- `styles.css` contains the design tokens and responsive layout; `ui.js` owns shared controls; `app.js` owns archive filters, sorting and layout only. Keep them separate.
- Use real links rather than click-only divs. Dialogs must remain keyboard reachable, and screenshot failures must not destroy layout.
- Run `node --check portfolio-field-notes/ui.js`, `node --check portfolio-field-notes/app.js` and `node portfolio-field-notes/verify.mjs` from the `cv` directory, then browser-test 320px, 390px, tablet and desktop widths.
- The website's Spotify and analytics functions, project stories, design portfolio and other site sections are outside this feature's scope.
