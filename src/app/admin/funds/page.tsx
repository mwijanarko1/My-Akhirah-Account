"use client";

import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";

export default function AdminFundsPage() {
  const rows = useQuery(api.funds.listAdmin, {});

  if (rows === undefined) {
    return <p className="text-sm text-neutral-600">Loading…</p>;
  }

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-[var(--color-akhirah-teal-dark)]">Funds</h1>
      <div className="overflow-x-auto rounded border border-neutral-200 bg-white shadow-sm">
        <table className="min-w-full text-left text-sm">
          <thead className="border-b border-neutral-200 bg-neutral-50 text-xs font-semibold uppercase text-neutral-600">
            <tr>
              <th className="px-3 py-2">Name</th>
              <th className="px-3 py-2">Slug</th>
              <th className="px-3 py-2">Giving type</th>
              <th className="px-3 py-2">Active</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((f) => (
              <tr key={f._id} className="border-b border-neutral-100 last:border-0">
                <td className="px-3 py-2 font-medium">{f.name}</td>
                <td className="px-3 py-2 font-mono text-xs">{f.slug}</td>
                <td className="px-3 py-2">{f.givingType}</td>
                <td className="px-3 py-2">{f.isActive ? "yes" : "no"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
