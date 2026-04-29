"use client";

import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";

export default function AdminStaffPage() {
  const rows = useQuery(api.staff.listStaffUsers, {});

  if (rows === undefined) {
    return <p className="text-sm text-neutral-600">Loading…</p>;
  }

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-[var(--color-akhirah-teal-dark)]">Staff</h1>
      <p className="text-sm text-neutral-600">Role changes require the Settings domain (super admin).</p>
      <div className="overflow-x-auto rounded border border-neutral-200 bg-white shadow-sm">
        <table className="min-w-full text-left text-sm">
          <thead className="border-b border-neutral-200 bg-neutral-50 text-xs font-semibold uppercase text-neutral-600">
            <tr>
              <th className="px-3 py-2">Name</th>
              <th className="px-3 py-2">Email</th>
              <th className="px-3 py-2">Role</th>
              <th className="px-3 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((s) => (
              <tr key={s._id} className="border-b border-neutral-100 last:border-0">
                <td className="px-3 py-2 font-medium">{s.fullName}</td>
                <td className="px-3 py-2">{s.email}</td>
                <td className="px-3 py-2">{s.role}</td>
                <td className="px-3 py-2">{s.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
