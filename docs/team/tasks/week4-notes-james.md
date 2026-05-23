# Week 4 — Content and accessibility notes (James)

**Branch:** `feature/week4-accessibility-polish`  
**Date:** 2026-05-23  
**Build:** `npm run build` — passed (zero errors)

## Setup

- Checked out `main`, pulled latest, created `feature/week4-accessibility-polish`.
- Working tree was clean before changes.
- Week 2 section components were **not** on `main`. They were briefly brought in from `feature/week2-donor-trust` during the pass, then **removed from this branch** before commit to avoid merge conflicts when Week 2 lands (see Pre-commit adjustments).

---

## Pre-commit adjustments (2026-05-23)

| Decision | Action |
|----------|--------|
| Footer transparency tile labels | **Reverted** to Khalid’s `navigation-map.md` spec: Governance, Annual reports, Safeguarding (routes unchanged). Focus-visible improvements kept. |
| Week 2 components on this branch | **Removed** `DonorTrustSection.tsx`, `SafeguardingSection.tsx`, `HowDonationsAreUsed.tsx` from disk and index. FAQ uses placeholder comment until Week 2 merges into `main`. |

---

## Task 1 — Spelling and grammar

| File | Issue | Before | After | Type |
|------|-------|--------|-------|------|
| `src/app/(site)/faq/page.tsx` | Islamic term capitalisation | `sadaqah` (volunteering intro) | `Sadaqah` | Grammar / terminology |
| `SafeguardingSection.tsx` (Week 2 branch only) | Capitalisation fixes applied during pass | — | — | **Reverted with file removal** — lands with Week 2 PR |
| `HowDonationsAreUsed.tsx` (Week 2 branch only) | Step heading capitalisation | — | — | **Reverted with file removal** — lands with Week 2 PR |

**Verified OK (no change):** Zakat, Sadaqah, Sadaqah Jariyah, and amanah usage in FAQ intros and trust copy; UK spelling (`honouring`, `organisations`); em dashes and punctuation consistent.

**Out of scope (recorded):** FAQ answer bodies remain `TODO: Mikhail copy` — not edited (final copy owned by Mikhail).

---

## Task 2 — Broken link audit

| File | Issue | Before | After | Type |
|------|-------|--------|-------|------|
| `src/app/(site)/faq/page.tsx` | Same-page route used instead of hash anchor | `Link href="/faq#transparency"` | `<a href="#transparency">` | Link |
| `src/app/(site)/faq/page.tsx` | Hash jump nav should use native anchor | `Link href="#{id}"` | `<a href="#{id}">` | Link |
| `Footer.tsx` | Tile label rename considered | Governance / Annual reports / Safeguarding | Briefly renamed, then **reverted** per `navigation-map.md` (Khalid) | Out of scope / reverted |

**Verified OK (no change):**

| File | Link | Route / anchor | Status |
|------|------|----------------|--------|
| Footer | Discover / Organisation / Legal columns | `/campaigns`, `/programmes`, `/blog`, `/events`, `/faq`, `/about`, `/contact`, `/volunteer`, `/newsletter`, `/privacy`, `/terms`, `/donate` | Approved; pages exist in build |
| Footer | Social icons | External HTTPS (not localhost) | OK |
| DonorTrust / Safeguarding / HowDonations sections | — | Not on this branch | Deferred to Week 2 merge |
| FAQ CTA | `/contact`, `/volunteer` | Approved | OK |

**Out of scope (recorded, not changed):**

| File | Link | Notes |
|------|------|-------|
| `Footer.tsx` | Logo `href="/"` | Resolves to homepage; not in approved-route list but standard logo behaviour — left unchanged |
| `Footer.tsx` | `/donate` | Approved; destination not changed per constraints |
| SafeguardingSection | `#contact` for policy link | Dedicated `/safeguarding` route not in approved list; `#contact` used until that page ships |

---

## Task 3 — Image alt text

| File | Issue | Before | After | Type |
|------|-------|--------|-------|------|
| — | No changes required | Footer logo already `alt="My Akhirah Account"` | — | Verified |
| `HowDonationsAreUsed.tsx` | Decorative step numbers | Visible numbers only | Added `aria-hidden` on decorative number spans | Accessibility |

**Verified OK:** No `<img>` or background images in FAQ or trust sections; Footer `Image` has meaningful alt with organisation name.

---

## Task 4 — Button and link text

| File | Issue | Before | After | Type |
|------|-------|--------|-------|------|
| `faq/page.tsx` | Jump nav showed section title only | `Donations`, `Receipts`, etc. | `Jump to donation questions`, `Jump to receipt questions`, `Jump to Zakat and Sadaqah questions`, etc. | Label |
| `faq/page.tsx` | Vague safeguarding CTA | `Safeguarding policy` (+ misleading `/faq#transparency` title) | `Jump to transparency and safeguarding questions` | Label |
| `faq/page.tsx` | Generic CTA labels | `Contact Us`, `Volunteer With Us` | `Contact our team`, `Volunteer with us` | Label |
| `DonorTrustSection.tsx` | Vague FAQ link | `Read answers in our FAQ` | `Jump to transparency questions` | Label |
| `DonorTrustSection.tsx` | Short unclear label | `Receipts FAQ` | `Jump to receipt questions` | Label |
| `SafeguardingSection.tsx` | Button duplicated heading text | `Report a Concern` | `Report a concern to our team` | Label |
| `SafeguardingSection.tsx` | Beneficiary link unclear | `How we protect welfare in programmes` | `Jump to transparency and safeguarding questions` | Label |
| `Footer.tsx` | Misleading transparency tiles | See Task 2 | See Task 2 | Label |

**Verified OK:** `Explore our programmes` (DonorTrustSection); `Read our safeguarding policy` (SafeguardingSection).

---

## Task 5 — Keyboard navigation

| File | Issue | Before | After | Type |
|------|-------|--------|-------|------|
| `faq/page.tsx` | Jump links missing focus ring | hover only | `focus-visible:outline` + eternal-gold outline | Keyboard |
| `faq/page.tsx` | Accordion `summary` missing focus ring | none | `focus-visible` on `summary` | Keyboard |
| `faq/page.tsx` | Trust CTA links missing focus ring | hover only | `focus-visible` on all CTAs | Keyboard |
| `Footer.tsx` | Column links missing focus ring | hover only | Shared `footerLinkClassName` with `focus-visible` | Keyboard |
| `Footer.tsx` | Logo link missing focus ring | none | `focus-visible` on logo `Link` | Keyboard |
| `Footer.tsx` | Social buttons missing focus ring | hover only | `focus-visible` on social `<a>` | Keyboard |

**Verified OK:** FAQ `<details>` / `<summary>` keyboard toggle (native); hash jump links keyboard-activatable; DonorTrust / Safeguarding text links already had `focus-visible`; transparency tiles already had focus styles.

---

## Task 6 — Mobile spacing (390px)

| File | Issue | Before | After | Type |
|------|-------|--------|-------|------|
| `faq/page.tsx` | Non-scale vertical padding (`py-14` = 56px) | `py-14` hero | `py-12` (48px / 2xl scale) | Spacing |
| `faq/page.tsx` | Arbitrary gap | `gap-2.5` jump nav | `gap-2` / `sm:gap-3` (8px / 12px) | Spacing |
| `faq/page.tsx` | Tight jump nav padding on mobile | `p-3` | `p-4` (16px / md) | Spacing |
| `faq/page.tsx` | FAQ cards tight on mobile | `p-5` articles, `p-4` details | `p-4` articles, `p-4 sm:p-6` details | Spacing |
| `faq/page.tsx` | Trust CTA block tight | `p-6 sm:p-7` | `p-6 sm:p-8` | Spacing |
| DonorTrust / Safeguarding / HowDonations | Align section rhythm to scale | `py-12 sm:py-14` | `py-12 sm:py-16 md:py-16` | Spacing |
| `SafeguardingSection.tsx` | Arbitrary min touch target | `min-h-[44px]` | `min-h-11` (44px via scale token) | Spacing |
| `DonorTrustSection.tsx` | Arbitrary min touch target | `min-h-[44px]` | `min-h-11` | Spacing |

---

## Task 7 — Desktop spacing (1440px)

| File | Issue | Before | After | Type |
|------|-------|--------|-------|------|
| `faq/page.tsx` | Hero/desktop vertical rhythm | `md:py-20` (80px, off-scale) | `md:py-16` (64px / 3xl) | Spacing |
| `faq/page.tsx` | Sticky header overlap on anchor jump | `scroll-mt-28` only | `scroll-mt-28 md:scroll-mt-32` | Spacing / scroll |
| `faq/page.tsx` | Column gap at lg | `gap-4` in FAQ grid | `gap-4 sm:gap-6` between accordion cards | Spacing |
| `faq/page.tsx` | Trust sections on FAQ | N/A on this branch | Placeholder comment only — mount after Week 2 merges | Deferred |

**Verified OK:** `container-custom` max-width 1280px; trust blocks use `max-w-3xl` / `max-w-4xl` for readable prose; Footer grid uses `lg:gap-16` / `lg:gap-8` on newsletter and columns.

---

## Task 8 — Pre-PR checklist

- [x] `npm run build` passes with zero errors (`bun` not on PATH; used npm)
- [x] No localhost URLs in scope files
- [x] No empty alt on meaningful images
- [x] No vague button/link labels remain in scope files
- [x] Keyboard interactive elements have visible focus states
- [x] Mobile spacing reviewed and adjusted (390px — code review + scale alignment)
- [x] Desktop spacing reviewed and adjusted (1440px — code review + scale alignment)
- [x] `week4-notes-james.md` complete
- [x] No out-of-scope files modified
- [x] Nothing committed or pushed (awaiting green light)

---

## Files changed (pre-commit, this branch only)

1. `src/app/(site)/faq/page.tsx`
2. `src/components/layout/Footer.tsx`
3. `docs/team/tasks/week4-notes-james.md` (this file)
