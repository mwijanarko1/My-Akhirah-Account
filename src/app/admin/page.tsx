"use client";

import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";

export default function AdminDashboardPage() {
  const summary = useQuery(api.admin.getDashboardSummary, {});

  if (summary === undefined) {
    return <p className="text-sm text-neutral-600">Loading…</p>;
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-[var(--color-akhirah-teal-dark)]">Dashboard</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded border border-neutral-200 bg-white p-4 shadow-sm">
          <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">Open contacts</p>
          <p className="mt-2 text-2xl font-semibold">{summary.openContacts}</p>
        </div>
        <div className="rounded border border-neutral-200 bg-white p-4 shadow-sm">
          <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">Open volunteers</p>
          <p className="mt-2 text-2xl font-semibold">{summary.openVolunteers}</p>
        </div>
        <div className="rounded border border-neutral-200 bg-white p-4 shadow-sm">
          <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">Queued receipts</p>
          <p className="mt-2 text-2xl font-semibold">{summary.pendingReceipts}</p>
        </div>
        <div className="rounded border border-neutral-200 bg-white p-4 shadow-sm">
          <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">Donations (30 days)</p>
          <p className="mt-2 text-2xl font-semibold">{summary.recentDonationsCount}</p>
        </div>
        <div className="rounded border border-neutral-200 bg-white p-4 shadow-sm sm:col-span-2">
          <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">Raised (30 days, minor units)</p>
          <p className="mt-2 text-2xl font-semibold">{summary.totalRaisedMinorLast30Days}</p>
        </div>
      </div>
    </div>
  );
}
