"use client";

import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";

export default function AdminReceiptsPage() {
  const rows = useQuery(api.admin.listReceipts, { limit: 150 });

  if (rows === undefined) {
    return <p className="text-sm text-neutral-600">Loading…</p>;
  }

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-[var(--color-akhirah-teal-dark)]">Receipts</h1>
      <div className="overflow-x-auto rounded border border-neutral-200 bg-white shadow-sm">
        <table className="min-w-full text-left text-sm">
          <thead className="border-b border-neutral-200 bg-neutral-50 text-xs font-semibold uppercase text-neutral-600">
            <tr>
              <th className="px-3 py-2">Receipt #</th>
              <th className="px-3 py-2">Donation</th>
              <th className="px-3 py-2">Email</th>
              <th className="px-3 py-2">Status</th>
              <th className="px-3 py-2">Retries</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r._id} className="border-b border-neutral-100 last:border-0">
                <td className="px-3 py-2 font-mono text-xs">{r.receiptNumber}</td>
                <td className="px-3 py-2 font-mono text-xs">{String(r.donationId)}</td>
                <td className="px-3 py-2">{r.recipientEmail}</td>
                <td className="px-3 py-2">{r.status}</td>
                <td className="px-3 py-2">{r.retryCount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
