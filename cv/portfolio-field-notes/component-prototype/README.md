# Field Notes component prototype

This is an unfinished branch-only experiment, not a production release. The
useLayouts Dynamic Grid Gallery is copied from the upstream MIT-licensed source
and adapted to expose archive links, labels and keyboard focus. Its adapter reads
six real selected portfolios from the existing static markup. The original selected
links remain in the HTML if scripts fail. The upstream license is preserved in
`vendor/uselayouts/LICENSE`.

To rebuild the committed JS: `npm ci && npm run build` in this directory. Gallery
styling is scoped in the archive's `styles.css`; `dist/gallery.css` is generated
but not used by the page. Browser and accessibility checks are still required.
