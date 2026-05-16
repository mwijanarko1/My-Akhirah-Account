# Week 4 — Final navigation & content QA report (Khalid → Mikhail)

**Date:** 2026-05-08  
**Scope:** Public marketing routes in `(site)`, homepage (`src/app/page.tsx`), global `Header` / `Footer`, policy pages, slug placeholders, and homepage card components.

---

## Summary

| Area | Result |
|------|--------|
| **Header links** | All `navLinks` + mobile **Donate** resolve to existing routes (`/` … `/newsletter`, `/donate`). No code changes required. |
| **Footer links** | Column links + transparency tiles verified; **Safeguarding** → `/faq#transparency` (Week 3). Social icons remain generic roots — **blocker: marketing URLs** (see below). |
| **Policy pages** | `/privacy`, `/terms`, `/faq` internal links and CTA footers point to `/faq`, `/contact`, `/volunteer`, `/privacy`, `/terms` — valid routes. |
| **Homepage sections** | `SectionHeader` `viewAllHref` values `/blog`, `/programmes`, `/events`, `/campaigns`. Hero defaults `/donate` + `/faq`. Emergency bar mock → `/donate`. |
| **Cards (blog / event / campaign / impact)** | `href`s from Convex or `mockData` match `/blog/[slug]`, `/events/[slug]`, `/campaigns/[slug]`, `/programmes/...`. Placeholder slug pages use `ComingSoonDetail` with correct `listHref`. |
| **Metadata** | Added missing `description` (and campaign `generateMetadata`) on home + thin slug routes; campaign detail uses dynamic title/description when mock match exists. |
| **CTAs** | Added homepage-adjacent CTAs: **Trust** band (`/faq`, `/contact`), **Global reach** (`/programmes`), **Coming soon** detail (`/donate`, `/faq` alongside list back-link). |

---

## Fixes shipped in this pass (code)

1. **`TrustSection`** — Outbound links: **Browse donor FAQs** → `/faq`, **Contact the team** → `/contact`.
2. **`GlobalReach`** — Primary button **Explore programme areas** → `/programmes`.
3. **`ComingSoonDetail`** — Secondary actions: **Donate** → `/donate`, **Read FAQs** → `/faq` (plus existing list back-link).
4. **`src/app/page.tsx`** — `metadata` with title, description, and `openGraph` for the homepage.
5. **Slug placeholders** — `description` on `metadata` for `/blog/[slug]`, `/events/[slug]`, `/programmes/[slug]`.
6. **`/campaigns/[slug]`** — `generateMetadata` for known mock campaigns + sensible copy when not found.
7. **`/about`** — Replaced raw `<a href>` with Next **`Link`** for internal routes.
8. **Cards** — Image **`alt`** set from card **title** (`BlogCard`, `EventCard`, `CampaignCard`, `ImpactCard`) for accessibility.

---

## Remaining blockers (need Mikhail / product / marketing)

1. **Social profile URLs** — Footer still uses `facebook.com`, `twitter.com`, etc. Replace with real org profiles when available (`navigation-map.md` already notes this).
2. **Transparency tiles** — **Annual reports** still routes to `/terms` as placeholder; **Governance** → `/privacy` until dedicated assets exist.
3. **Legal / FAQ copy** — Policy pages and FAQ answers remain **TBD / placeholder** per `navigation-map.md`; no statutory text added in this pass.
4. **Convex-driven hrefs** — Homepage hero and banners can override mock links; re-smoke test after CMS/database changes.
5. **Production URL for `metadataBase` / OG** — Not set globally; add `metadataBase` in `layout.tsx` when canonical site URL is fixed.

---

## Recommended manual smoke test (you / QA)

With `bun run dev`: click every header + footer item, homepage **View all** links, one sample card per grid, footer **Safeguarding** hash, donate flow entry, and a **Coming soon** slug page to confirm new CTAs.

---

## Sign-off

Week 4 checklist items in `KHALID_TASKS.md` are marked complete against this report and the shipped diff. Further issues should be filed as new tasks or PRs after Mikhail merges.
