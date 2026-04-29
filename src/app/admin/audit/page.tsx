"use client";

import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";

export default function AdminAuditPage() {
  const rows = useQuery(api.admin.listAuditLogs, { limit: 150 });

  if (rows === undefined) {
    return <p className="text-sm text-neutral-600">Loading…</p>;
  }

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-[var(--color-akhirah-teal-dark)]">Audit log</h1>
      <div className="overflow-x-auto rounded border border-neutral-200 bg-white shadow-sm">
        <table className="min-w-full text-left text-sm">
          <thead className="border-b border-neutral-200 bg-neutral-50 text-xs font-semibold uppercase text-neutral-600">
            <tr>
              <th className="px-3 py-2">When</th>
              <th className="px-3 py-2">Entity</th>
              <th className="px-3 py-2">Action</th>
              <th className="px-3 py-2">Request</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((log) => (
              <tr key={log._id} className="border-b border-neutral-100 last:border-0">
                <td className="px-3 py-2 text-xs text-neutral-600">{new Date(log.createdAt).toISOString()}</td>
                <td className="px-3 py-2">
                  {log.entityType}
                  {log.entityId ? <span className="ml-1 font-mono text-xs">{log.entityId}</span> : null}
                </td>
                <td className="px-3 py-2">{log.action}</td>
                <td className="px-3 py-2 font-mono text-xs">{log.requestId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
