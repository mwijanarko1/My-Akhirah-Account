# My Akhirah Account

My Akhirah Account is a charity website for Islamic giving and community support work in Africa. The project should help donors understand the charity's work, choose trusted appeals, donate securely, receive receipts, and see clear impact updates.

## Current Stack

- Framework: Next.js 16 App Router
- Language: TypeScript
- UI: React 19, Tailwind CSS v4
- Backend: Convex
- Auth: Clerk for staff/admin access
- Payments: Flutterwave checkout and webhooks
- Package manager: Bun

## Project Goals

The finished website should support:

- Clear charity homepage with mission, appeals, trust signals, and impact statistics
- Campaign and programme pages for African charity projects
- Donation flow with one-off giving, campaign/fund selection, fee coverage, and donor details
- Secure Flutterwave payment checkout and webhook reconciliation
- Donation receipts and donor confirmation emails
- Blog/news updates, events, volunteer form, contact form, and newsletter signup
- Staff/admin workflows for campaigns, posts, events, impact metrics, forms, donors, and donations
- Search and filtering for campaigns, posts, and events
- Mobile-first responsive design and accessible UI
- Production deployment with environment variables, monitoring, and launch checks

## Repository Guide

For a detailed map of the current codebase, read [docs/CODEBASE_MAP.md](docs/CODEBASE_MAP.md).

Important areas:

- `src/app/` - Next.js routes, layout, homepage, and API route handlers
- `src/components/` - Shared layout, section, and card components
- `src/lib/server/` - Server-side Convex helpers and homepage data loading
- `src/lib/validation/` - Public form validation
- `convex/` - Backend schema, queries, mutations, actions, payment logic, staff logic, and webhooks
- `convex/_generated/` - Auto-generated Convex files. Do not edit these manually.
- `public/` - Static images and brand assets

## Getting Started

Install dependencies:

```bash
bun install
```

Run the development server:

```bash
bun run dev
```

Build for production:

```bash
bun run build
```

Run linting:

```bash
bun run lint
```

## Documentation

Detailed working guidance now lives in `docs`:

- [Intern setup and Git/PR workflow](docs/onboarding/INTERN_SETUP_AND_GIT.md)
- [Team working agreements and ownership](docs/team/WORKING_AGREEMENTS.md)
- [Delivery plan, definition of done, and launch checklist](docs/project/DELIVERY_PLAN.md)
- [Codebase map](docs/CODEBASE_MAP.md)

## Environment Setup (Quick Rules)

Create local environment files from the project manager's shared credentials. Do not commit real secrets.

- Never commit `.env`, `.env.local`, API keys, webhook secrets, or payment credentials.
- Use test/sandbox payment credentials until the manager approves production payment testing.
- Any code that handles payments, Convex, Clerk, authentication, admin access, permissions, webhooks, receipts, or donor data must be owned and reviewed by Mikhail.
