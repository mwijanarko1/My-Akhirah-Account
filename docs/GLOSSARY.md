# Glossary (payments, donations, admin)

Shared vocabulary for docs, code, tests, admin UI, and reviews.

| Term | Meaning |
|------|--------|
| **Donation CTA** | A visible call-to-action that sends donors to the approved donation entry (`/donate`). |
| **Donation Entry** | The public `/donate` flow where a donor chooses fund, amount, currency, provider, and submits the checkout form. |
| **Donation Intent** | A server-side record of an intended donation before funds are settled; holds amount, currency, fund/campaign, donor profile link, and checkout state. |
| **Hosted Checkout** | A provider-hosted payment page the donor is redirected to; the app never embeds trusted card data. |
| **Payment Provider** | Donorbox, Flutterwave, PayPal, or LaunchGood (external link), as configured for checkout. |
| **Payment Event** | An append-only (or upserted-by-provider-id) log row for a webhook or provider callback, including raw payload and processing outcome. |
| **Payment Reference** | Stable reference tying intent to provider (e.g. Flutterwave `tx_ref`); used for reconciliation. |
| **Donor Profile** | Stored donor identity and consent flags, keyed by email. |
| **Completed Donation** | Immutable settled gift after provider success is reconciled against the intent. |
| **Donation Allocation** | Ledger split of a completed donation to fund/campaign/program under restriction policy. |
| **Receipt** | Post-donation tax/acknowledgement delivery record (`queued` / `sent` / `failed`). |
| **Staff User** | Internal user synced from Clerk into `staff_users`. |
| **Admin Access** | Convex queries/mutations gated by authenticated staff identity and role domains (never client-only flags). |
| **Campaign Link** | External URL (e.g. LaunchGood) used when the org routes gifts through a third-party campaign page. |
| **Launch Currency** | One of `GBP`, `USD`, `EUR`, `GHS` supported at launch. |
| **Provider Fallback** | Using PayPal (or another secondary path) when the primary path is unavailable or unsuitable for the donor. |
