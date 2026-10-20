# Hayalows studio overhaul · 20 October 2026

## Brief
A Ghanaian small-business owner needs to assess the studio, understand its services and start a useful enquiry. The old page asks them to read too much before showing real work, the founder or a clear path to cost.

Use the supplied UI/UX proposal and `hayalows/Skills/product-design-os`. The user's current preference is Inter throughout. Keep existing public payment destinations and WebMCP contracts working. Do not invent prices, terms, testimonials, outcomes, office hours or registration details.

## Implemented direction
Warm paper, forest ink, muted brass, a 1200px shared grid, compact mobile sections and a 40/64px heading scale. Three restrained patterned rules connect the founder, header and footer. Native sentence controls produce a reviewable WhatsApp draft; native disclosures provide service detail and FAQs. Actual existing artwork and product previews supply the proof.

The work grid and service bento use original HTML/CSS, following the composition patterns recommended in the proposal. No third-party component source is copied. Inter is self-hosted with its OFL notice. The static deployment is retained because these interactions do not require React; an Astro migration would add deployment changes without a needed capability here.

## Content decisions
- Real design archive and independent product examples, each identified as such.
- Founder portrait, name, Kumasi location, portfolio and verified personal LinkedIn.
- Prices page explains written GHS quotes. The proposal's GH₵1,200/2,500/4,000 examples are explicitly placeholders and are not published.
- Payment stages remain project-specific. No fixed deposit policy or reply-time promise is invented.
- 50's Bliss has its own page; existing store and confirmed-order destinations remain available there.
- Legacy homepage enquiry anchor remains functional in a disclosure. WebMCP opens it before filling. The dedicated contact page provides the full form directly.
- FAQ schema and visible answers are generated from one list.

## Repeatable authoring
Run `python3 scripts/build-studio.py` from the repository root. It generates the homepage, work index, three project pages, about, contact, prices, invoice and venture pages; updates shared policy navigation/footer and the sitemap. Edit shared content in the generator, and layouts in `studio.css`.

## Acceptance scenarios before implementation
1. A new visitor identifies the service, city and founder; sees real work early.
2. Change the quick-enquiry business, location and goal; preview reflects input; launch a reviewable draft without sending anything.
3. Empty location prevents launch; blocked popup offers a usable link.
4. Mobile menu opens, closes with Escape and lets visitors reach services and pages.
5. Service selection opens contact with the correct category; invalid enquiry preserves input and shows actionable errors.
6. Homepage legacy anchor and WebMCP enquiry draft open the disclosure and focus the form.
7. All case pages, policy links and public assets resolve.
8. Invoice payment opens the correct review dialog. Cancel and Escape return safely; no transaction is executed in verification.
9. 50's Bliss options appear on its own page.
10. Review at narrow phone, typical phone, tablet and desktop widths; no overflow, clipped controls or unreadable content. Review reduced motion and keyboard focus.

## Existing checks
`node --import ./tests/register-webmcp-loader.mjs --test ./tests/webmcp-tools.test.mjs ./tests/profile-structured-data.test.mjs`

An unrelated CV test already fails on the base commit `1df8c1a`: it expects 3 project records, but the portfolio publishes 4. Reproduced from an untouched detached worktree. That test is preserved; the overhaul does not change CV source or tests.
