"use client";

import { ClerkProvider, useAuth } from "@clerk/nextjs";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { ConvexReactClient } from "convex/react";

const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL ?? "";
const convex = new ConvexReactClient(convexUrl);

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY ?? "";

  if (!publishableKey || !convexUrl) {
    return (
      <div className="mx-auto max-w-lg px-4 py-16 text-sm text-neutral-800">
        <h1 className="text-xl font-semibold text-[var(--color-akhirah-teal-dark)]">Admin unavailable</h1>
        <p className="mt-3">
          Set <code className="rounded bg-neutral-100 px-1">NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY</code> and{" "}
          <code className="rounded bg-neutral-100 px-1">NEXT_PUBLIC_CONVEX_URL</code> to enable the admin console.
        </p>
      </div>
    );
  }

  return (
    <ClerkProvider publishableKey={publishableKey}>
      <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
        <div className="min-h-dvh bg-neutral-50">
          <header className="border-b border-neutral-200 bg-white px-4 py-3">
            <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2">
              <span className="font-semibold text-[var(--color-akhirah-teal-dark)]">My Akhirah — Admin</span>
              <nav className="flex flex-wrap gap-3 text-sm">
                <a className="text-[var(--color-akhirah-teal)] hover:underline" href="/admin">
                  Dashboard
                </a>
                <a className="text-[var(--color-akhirah-teal)] hover:underline" href="/admin/donations">
                  Donations
                </a>
                <a className="text-[var(--color-akhirah-teal)] hover:underline" href="/admin/payment-events">
                  Payment events
                </a>
                <a className="text-[var(--color-akhirah-teal)] hover:underline" href="/admin/receipts">
                  Receipts
                </a>
                <a className="text-[var(--color-akhirah-teal)] hover:underline" href="/admin/campaigns">
                  Campaigns
                </a>
                <a className="text-[var(--color-akhirah-teal)] hover:underline" href="/admin/funds">
                  Funds
                </a>
                <a className="text-[var(--color-akhirah-teal)] hover:underline" href="/admin/staff">
                  Staff
                </a>
                <a className="text-[var(--color-akhirah-teal)] hover:underline" href="/admin/audit">
                  Audit
                </a>
                <a className="text-neutral-600 hover:underline" href="/">
                  Site home
                </a>
              </nav>
            </div>
          </header>
          <div className="mx-auto max-w-6xl px-4 py-8">{children}</div>
        </div>
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
}
