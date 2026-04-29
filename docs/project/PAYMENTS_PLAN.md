# Payments plan (canonical brief)

This document is the canonical task brief for production donation work. It aligns with `mikhail-payments-auth-admin-and-launch-readiness-plan.md` and `docs/team/tasks/MIKHAIL_TASKS.md`.

## Approved donation CTA

- Public donation entry and intern-facing CTA destination: **`/donate`**.

## Launch currencies

- `GBP`, `USD`, `EUR`, `GHS`

## Giving types

- `zakat`, `sadaqah`, `lillah`, `kaffarah`, `fidyah`, `qurbani`, `general`

## Giving frequency

- **In scope:** one-off donations only.
- **Out of scope:** monthly / recurring (explicitly not implemented in this phase).

## Required donor fields

- Full name  
- Email  
- Optional: phone, country, city  
- Currency (must be a launch currency)  
- Consent for transactional email  
- Optional: marketing consent  

## Donation fields (server-trusted)

- Amount in **minor units** (integer)  
- Currency  
- Giving type  
- Fund ID  
- Optional campaign ID  
- Cover-fees flag  
- Anonymous-public flag  
- Optional donor message  
- **Selected provider** (`donorbox`, `flutterwave`, `paypal`, `launchgood`)  

## Provider roles

| Provider    | Role |
|------------|------|
| Donorbox   | Primary hosted checkout |
| Flutterwave | Secondary hosted checkout |
| PayPal     | Fallback hosted / donate link checkout |
| LaunchGood | External campaign link only (no automatic local completion unless reconciliation is explicitly configured) |

## Donation intent statuses

- `created`, `checkout_created`, `pending`, `completed`, `failed`, `cancelled`, `expired`, `abandoned`

## Payment event processing outcomes

- `processed`, `ignored`, `failed`, `duplicate`, `invalid_signature`, `unknown_reference`, `amount_mismatch`, `currency_mismatch`

## Non-goals (this phase)

- Recurring donations  
- Trusting client-side totals for reconciliation  
- Trusting client-side payment status  
- Switching providers to **live** mode before documented sandbox sign-off and Mikhail approval  

## Intern guidance

- Public UI PRs may link to **`/donate`**.  
- Interns must **not** change payment provider wiring, Convex schema, Clerk/auth, admin access rules, webhooks, receipts, or donor-data logic without **Mikhail** approval.

## Environment variables

See repository **`.env.example`** for names and placeholders. Production secrets must never be committed.

## Donorbox note

If Donorbox webhooks are not enabled for the account, manual reconciliation remains a **launch risk** until webhooks or an export process is confirmed.

## Rollback and launch

- Provider live-mode switch and production webhook URLs are **launch checklist** items, not part of day-to-day implementation merges.  
- Production deployment and live payments require Mikhail approval after sandbox sign-off.
