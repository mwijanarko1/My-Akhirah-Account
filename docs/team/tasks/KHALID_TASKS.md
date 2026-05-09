# Khalid Tasks

Role: Public navigation, page structure, content organization, form UX, and cross-page QA owner  
Primary ownership: public route structure, navigation clarity, policy/about/programme content organization, form user experience, broken-link checks, and cross-page QA. Mikhail owns all payment provider, Convex, and Clerk implementation.

## Shared Product Contract

- [x] Use the shared header/footer route set: `/`, `/about`, `/campaigns`, `/programmes`, `/blog`, `/events`, `/faq`, `/contact`, `/volunteer`, `/newsletter`.
- [x] Use the existing brand colors, spacing, buttons, and card patterns instead of inventing a separate visual style.
- [x] Point every donation CTA to the destination approved by Mikhail.
- [x] Do not change payment provider, Convex, Clerk/auth, or admin files.
- [x] Keep every new page mobile-first and readable at mobile, tablet, and desktop widths.

## Setup Checklist

- [x] Read `README.md`.
- [x] Read `docs/CODEBASE_MAP.md`.
- [x] Pull the latest `main` branch before starting work.
- [x] Create a feature branch using `feature/<short-description>` or `fix/<short-description>`.
- [x] Confirm you can run `bun run build`.
- [x] Do not change payment provider code.
- [x] Do not change Convex code.
- [x] Do not change Clerk or authentication code.

## Week 1: Public Structure Planning

- [x] Create `docs/team/tasks/navigation-map.md` with the final homepage section order to ship.
- [x] List every header nav item with its destination URL and fix wrong or missing links.
- [x] List every footer nav item with its destination URL and fix wrong or missing links.
- [x] Map required public routes: home, about, campaigns, programmes, blog, events, FAQ, contact, volunteer, newsletter, and policies.
- [x] Add missing public links for required routes (about, campaigns, programmes, blog, events, FAQ, contact, volunteer, newsletter, policies).
- [x] Rename confusing navigation labels to clear user-facing wording.
- [x] Add final menu labels and route map to `docs/team/tasks/navigation-map.md`.
- [x] Add policy page content requirements to `docs/team/tasks/navigation-map.md`, including required pages and missing copy from Mikhail.
- [x] Open a PR only for public navigation or layout changes.

## Week 2: Public Layout and Content Organization

- [x] Update header/footer labels so the same route has the same label everywhere.
- [x] Create or update one reusable page layout pattern for intro, body sections, and CTA footer.
- [x] Build/fix about page section structure so intro, mission, and key content blocks are clearly separated.
- [x] Build/fix programme page structure with clear section headings and scannable content grouping.
- [x] Build/fix policy page structure with consistent heading levels and readable section spacing.
- [x] Build/fix contact page layout with clear contact options and form placement.
- [x] Rewrite unclear link labels so each link states destination intent.
- [x] Fix heading hierarchy so each page has one `<h1>` and logical `<h2>/<h3>` order.
- [x] Open a PR for public structure and content organization.

## Week 3: Form UX and Cross-Page QA

- [x] Fix contact form UX issues (field order, spacing, and button clarity).
- [x] Fix volunteer form UX issues (field grouping, readability, and submit flow).
- [x] Fix newsletter signup UX issues (input clarity and submit feedback).
- [x] Add missing labels/helper text to all form fields you touch.
- [x] Add clear success and error copy for all form submissions you touch.
- [x] Fix mobile layout issues found across assigned public pages.
- [x] Fix desktop layout issues found across assigned public pages.
- [x] Create a broken-link list with source page + broken URL + intended destination, then fix all links in your scope.
- [x] Open a PR for form UX and public page polish assigned to you.

## Week 4: Final Navigation and Content QA

> **Prep (done locally):** `main` includes upstream `mwijanarko1/main` plus merged `feature/week3-form-ux`. Week 4 execution completed 2026-05-08 — see `docs/team/tasks/WEEK4_NAVIGATION_QA_REPORT.md` for Mikhail.

- [x] Run broken-link checks manually across public navigation.
- [x] Fix all broken header links found in final QA.
- [x] Fix all broken footer links found in final QA.
- [x] Fix all broken policy page links found in final QA.
- [x] Fix broken internal links from homepage sections.
- [x] Fix broken internal links from blog/event/campaign cards.
- [x] Fill in missing metadata fields on assigned public pages.
- [x] Add or improve weak calls to action on assigned content pages.
- [x] Submit one final navigation/content QA report to Mikhail with completed fixes and remaining blockers.
- [x] Open final polish PR if needed.

## PR Checklist

- [x] PR explains what changed.
- [x] PR explains why it changed.
- [x] PR explains how to test it.
- [x] `bun run build` passes.
- [x] No payment provider code was changed.
- [x] No Convex code was changed.
- [x] No Clerk/auth code was changed.
- [ ] Mikhail is requested as final reviewer.
