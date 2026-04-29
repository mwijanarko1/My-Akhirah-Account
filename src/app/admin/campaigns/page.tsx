"use client";

import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";

export default function AdminCampaignsPage() {
  const rows = useQuery(api.admin.listCampaignsForOps, { limit: 120 });

  if (rows === undefined) {
    return <p className="text-sm text-neutral-600">Loading…</p>;
  }

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-[var(--color-akhirah-teal-dark)]">Campaigns</h1>
      <div className="overflow-x-auto rounded border border-neutral-200 bg-white shadow-sm">
        <table className="min-w-full text-left text-sm">
          <thead className="border-b border-neutral-200 bg-neutral-50 text-xs font-semibold uppercase text-neutral-600">
            <tr>
              <th className="px-3 py-2">Title</th>
              <th className="px-3 py-2">Slug</th>
              <th className="px-3 py-2">Status</th>
              <th className="px-3 py-2">Fund</th>
              <th className="px-3 py-2">Updated</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((c) => (
              <tr key={c._id} className="border-b border-neutral-100 last:border-0">
                <td className="px-3 py-2 font-medium">{c.title}</td>
                <td className="px-3 py-2 font-mono text-xs">{c.slug}</td>
                <td className="px-3 py-2">{c.status}</td>
                <td className="px-3 py-2 font-mono text-xs">{String(c.fundId)}</td>
                <td className="px-3 py-2 text-xs text-neutral-600">{new Date(c.updatedAt).toISOString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
