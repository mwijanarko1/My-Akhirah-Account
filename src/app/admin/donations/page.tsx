"use client";

import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";

export default function AdminDonationsPage() {
  const rows = useQuery(api.donations.listRecent, { limit: 80 });

  if (rows === undefined) {
    return <p className="text-sm text-neutral-600">Loading…</p>;
  }

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-[var(--color-akhirah-teal-dark)]">Donations</h1>
      <div className="overflow-x-auto rounded border border-neutral-200 bg-white shadow-sm">
        <table className="min-w-full text-left text-sm">
          <thead className="border-b border-neutral-200 bg-neutral-50 text-xs font-semibold uppercase text-neutral-600">
            <tr>
              <th className="px-3 py-2">Reference</th>
              <th className="px-3 py-2">Amount</th>
              <th className="px-3 py-2">Currency</th>
              <th className="px-3 py-2">Provider</th>
              <th className="px-3 py-2">Receipt</th>
              <th className="px-3 py-2">Received</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((d) => (
              <tr key={d._id} className="border-b border-neutral-100 last:border-0">
                <td className="px-3 py-2 font-mono text-xs">{d.reference}</td>
                <td className="px-3 py-2">{d.amountMinor}</td>
                <td className="px-3 py-2">{d.currency}</td>
                <td className="px-3 py-2">{d.provider}</td>
                <td className="px-3 py-2">{d.receiptStatus}</td>
                <td className="px-3 py-2 text-xs text-neutral-600">{new Date(d.receivedAt).toISOString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
