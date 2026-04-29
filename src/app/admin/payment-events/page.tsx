"use client";

import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";

export default function AdminPaymentEventsPage() {
  const rows = useQuery(api.admin.listPaymentEvents, { limit: 150 });

  if (rows === undefined) {
    return <p className="text-sm text-neutral-600">Loading…</p>;
  }

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-[var(--color-akhirah-teal-dark)]">Payment events</h1>
      <div className="overflow-x-auto rounded border border-neutral-200 bg-white shadow-sm">
        <table className="min-w-full text-left text-sm">
          <thead className="border-b border-neutral-200 bg-neutral-50 text-xs font-semibold uppercase text-neutral-600">
            <tr>
              <th className="px-3 py-2">Provider</th>
              <th className="px-3 py-2">Event id</th>
              <th className="px-3 py-2">Intent ref</th>
              <th className="px-3 py-2">Outcome</th>
              <th className="px-3 py-2">Status</th>
              <th className="px-3 py-2">Received</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((e) => (
              <tr key={e._id} className="border-b border-neutral-100 last:border-0">
                <td className="px-3 py-2">{e.provider}</td>
                <td className="px-3 py-2 font-mono text-xs">{e.providerEventId}</td>
                <td className="px-3 py-2 font-mono text-xs">{e.intentReference ?? "—"}</td>
                <td className="px-3 py-2">{e.processingOutcome}</td>
                <td className="px-3 py-2 text-xs">{e.rawProviderStatus ?? "—"}</td>
                <td className="px-3 py-2 text-xs text-neutral-600">{new Date(e.receivedAt).toISOString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
