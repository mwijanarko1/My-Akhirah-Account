# Week 3 broken-link audit (Khalid)

Tracked during **Form UX and Cross-Page QA** (Week 3). Internal app routes were verified against `src/app/(site)` and the homepage shell.

## Findings and fixes

| Source page / component | Issue | Intended destination | Resolution |
|---------------------------|--------|----------------------|------------|
| Footer — transparency tile **Safeguarding** | Linked to `/faq` with no hash; users landed at the top of the FAQ instead of transparency / safeguarding-related answers | Transparency section on FAQ (`#transparency`) | Updated href to **`/faq#transparency`** in `Footer.tsx` |
| FAQ section anchors | Deep links (`#transparency`, `#volunteering`) could sit under the sticky header | Same-page sections | Added **`scroll-mt-24`** on FAQ `<article>` blocks so in-page targets aren’t hidden |

## Checked — no change required (within Week 3 scope)

- Header and footer column links resolve to existing `(site)` routes (`/about`, `/campaigns`, `/programmes`, `/blog`, `/events`, `/faq`, `/contact`, `/volunteer`, `/newsletter`, `/donate`, `/privacy`, `/terms`).
- Homepage section headers (`/blog`, `/programmes`, `/events`, `/campaigns`) and mock card slugs match dynamic placeholder routes under `/blog/[slug]`, `/events/[slug]`, `/campaigns/[slug]`, `/programmes/[slug]`.
- Contact / volunteer / newsletter forms POST to `/api/contact`, `/api/volunteer`, `/api/newsletter` (server handlers unchanged).

## Outstanding (product / marketing — not “broken” URLs)

- Footer **social** icons still point at generic network roots until real profile URLs are supplied (see `navigation-map.md`).
- **Annual reports** transparency tile still routes to **`/terms`** as an agreed placeholder until a reports URL exists.
