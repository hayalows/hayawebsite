# Hayalows homepage redesign

Date: 1 October 2026

## Brief and primary task

A Ghanaian small-business owner needs to understand which kind of help fits their business and begin a useful conversation, but a broad list of services can make that first decision difficult. Success means choosing a relevant starting point and preparing an enquiry that the visitor can review before sending.

This redesign changes the homepage presentation and composition. Existing service categories, contact information, payment routes, policies, structured data, and enquiry delivery behavior remain intact.

## Design decisions

- Keep the established locally hosted Fraunces typeface, existing brand mark, and warm paper surface. Deep green gives the page a calmer, consistent ink and accent system.
- Make the meaning of Hayalows visible through a custom SVG illustration of a higher low. This is a conceptual illustration of the brand philosophy, not a measured growth chart or promised result.
- Give the hero one dominant enquiry action and a quieter service link. Move the optional diagnostic into its own section so it does not compete with the opening message.
- Present the three services as comparable columns on desktop and readable sections on mobile. Native disclosures reveal secondary examples on mobile.
- Use simple line illustrations for the kinds of work offered, without fabricating client work, testimonials, metrics, or product screenshots.
- Explain the process, introduce the business, answer common hesitations, and then offer the enquiry. Use explicit required labels and leave personal details optional.
- Keep animation short and tied to feedback. The diagnostic selection surface moves between tabs, retains keyboard semantics, and stops moving under reduced-motion preferences.
- Use SVG/CSS arrows instead of relying on symbol coverage in a visitor's installed fonts. Mobile form controls use 16px text to avoid unintended input zoom.

## Skills used

The user's skills repository provided the main guidance:

- `skills/product-design-os/SKILL.md`, including interface craft, component patterns, accessibility and the audit checklist.
- `skills/ui-ux-craft/SKILL.md`.
- `skills/design-taste-frontend/SKILL.md` and its composition, engineering and design-system references.
- `skills/frontend-design/SKILL.md` for the final composition critique.

## Component references

Reviewed on 1 October 2026:

- [Rare UI](https://rareui.com) and its [Folder component](https://rareui.com/components/foldercomponent): examples of contained, purposeful interaction and progressive reveal. Folder, orb and gravity-letter components were evaluated; these widgets do not match the homepage's visitor task, so they were not transplanted.
- [shadcn/ui Accordion](https://ui.shadcn.com/docs/components/accordion) and [Tabs](https://ui.shadcn.com/docs/components/tabs): clear control hierarchy, disclosure styling and peer-view selection. The implementation retains native `details` and the site's keyboard-operated ARIA tabs.
- [useLayouts](https://uselayouts.com), [Tactile Button](https://uselayouts.com/docs/components/tactile-button), and [Accessible Action](https://uselayouts.com/docs/components/accessible-action): restrained feedback and tactile controls. The homepage uses a shared moving tab-selection surface and subtle press feedback.

The request's `uselayoouts.com` spelling was resolved to `uselayouts.com`. No third-party component source was copied, and no React or motion package was added. These are original native adaptations suitable for the dependency-free site.

## Implementation

- `index.html`: revised composition, explanatory illustration, service illustrations, clearer labels, and font preload.
- `home.css`: homepage-only semantic tokens, compositions and responsive states; loaded after the shared stylesheet. Payment and policy pages keep their existing shared styling.
- `script.js`: moving tab-selection indicator, resize handling and an accessible initial diagnostic action name. Existing enquiry logic remains the source of truth.

## Verification

Verified against a local static server with Chromium:

- No horizontal overflow at 320, 390, 680, 768, 960, 1024, 1440 and 1920 CSS pixels.
- At 200% root text size, the 1440px desktop layout reflows without horizontal overflow.
- Desktop and mobile screenshots reviewed for hierarchy, wrapping, service content and enquiry layout.
- Axe scans covering WCAG 2 A/AA, 2.1 AA and 2.2 AA reported zero violations at 1440px and 390px. This automated result does not establish full accessibility compliance.
- Arrow keys, Home and End select the diagnostic tabs and update the connected panel.
- Diagnostic actions fill the enquiry and focus the message, while preserving a visitor's authored note.
- Required-field errors retain input and move focus to the field needing attention.
- Invalid optional email reopens its disclosure and focuses the input.
- Copy and WhatsApp actions generate the expected message; external delivery was stubbed and no message was sent.
- Mobile navigation opens, makes background content inert, closes with Escape or a navigation link, and returns focus on Escape.
- FAQ disclosures work; payment route loads; content and direct contact links remain available without JavaScript.
- Reduced-motion and normal-motion rendering checked; no browser JavaScript errors recorded.
- All 19 existing WebMCP and structured-data tests passed. JavaScript syntax and Git whitespace checks passed.

Evidence and the browser verification script are saved in `/workspace/verification/hayalows-redesign/`. Screen-reader user testing and field performance measurements were not performed. Production publication uses the existing Cloudflare Pages deployment on pushes to `main`.
