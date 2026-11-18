# Iconka Designs portfolio

The public design portfolio at https://pkm.hayalows.com/design/. It is a separate surface from the main PKM page but shares its language: warm near-black, warm white text, soft brass accent (`#BBA783`), Inter and quiet borders.

## Pages

- `/design/` opens with the hero, ten case studies, the draggable archive wall (all 50 projects) and an about and contact section.
- `/design/index` is the searchable index. Vercel rewrites it to `/design/index.html`; `app.js` renders it in the browser from the same data. Filters, search and layout live in the address bar, so a filtered view can be shared (for example `/design/index?filter=identity&view=list`).
- `/design/sketchbook` is a masonry of smaller pieces. Each opens in the viewer without leaving the page.
- `/design/<project>/` is one page per project. Only the ten projects with verified notes in `stories.json` are indexable; the rest are `noindex` and stay out of the sitemap.

## Files

| File | Job |
| --- | --- |
| `catalog.json` | 67 original image records. Keep the files and IDs. |
| `stories.json` | Verified notes for the ten case studies. Never invent tools, briefs, client responses or results. |
| `core.js` | Data model (grouping into 50 projects) and every HTML view. Runs in the browser and in Node, so static pages and browser-rendered pages never drift. |
| `template.html` | The page shell: head, top bar, footer, phone dock, viewer, command palette. |
| `site.css` | Tokens and all styles. Dark is the default; light uses darker accents for contrast. |
| `app.js` | Progressive enhancement only. Pages work without it. |
| `generate-pages.cjs` | Builds `index.html`, `sketchbook/index.html`, the 50 project pages and the design entries of `../sitemap.xml`. |
| `verify-assets.cjs` | Offline checks for images, pages, robots directives and the sitemap. |
| `smoke-live.cjs` | Optional live check after a deploy. |

`legacy.html` redirects old links to the index. Old `#view=<image-id>` links are redirected to their project by `app.js`.

## Interactions

- Hero keywords preview real work beside the copy and link to a filtered index.
- The hero stack tilts with the pointer; each card opens its project.
- The wall scrolls natively on touch and keyboard, and drags with momentum on a mouse. Shuffle re-flows the tiles.
- `⌘K` or `Ctrl+K` opens a command palette for every project and page. `/` focuses the index search.
- "Start a project" and the email card copy the address and offer the mail app; if copying fails, the mail app opens.
- Motion respects `prefers-reduced-motion`. The cursor label and previews appear only on fine pointers.

## Publishing new designs

1. Add and optimise the artwork with accurate titles and alt text in `catalog.json`.
2. Group variations under one stable project slug in `core.js` (`mappings`).
3. Add verified context in `stories.json` if a project merits a case study. To feature it on the landing, add its key to `SHOWCASE` in `core.js`.
4. From the repository root run `node cv/design/generate-pages.cjs`, then `node cv/design/verify-assets.cjs`.
5. Check `/design/`, `/design/index`, `/design/sketchbook`, a case study and an image-led project on desktop and phone, in both themes.
6. Push to `main`. Vercel publishes the `cv` folder to pkm.hayalows.com. Then run `node cv/design/smoke-live.cjs`.

CI regenerates the pages and fails if the result differs from the commit, so always commit generated files together with their source.
