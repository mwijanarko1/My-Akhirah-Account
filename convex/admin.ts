import { v } from "convex/values";
import { query } from "./_generated/server";
import { requireDomainAccess } from "./lib/auth";
import { processingOutcomeValidator } from "./lib/validators";

export const getDashboardSummary = query({
  args: {},
  handler: async (ctx) => {
    await requireDomainAccess(ctx, "dashboard");
    const now = Date.now();
    const last30Days = now - 30 * 24 * 60 * 60 * 1000;

    const contacts = await ctx.db.query("contact_submissions").collect();
    const volunteers = await ctx.db.query("volunteer_applications").collect();
    const receipts = await ctx.db.query("receipts").collect();
    const donations = await ctx.db.query("donations").collect();

    return {
      openContacts: contacts.filter((entry) => entry.status === "new" || entry.status === "in_review").length,
      openVolunteers: volunteers.filter((entry) => entry.status === "new" || entry.status === "screening").length,
      pendingReceipts: receipts.filter((entry) => entry.status === "queued").length,
      recentDonationsCount: donations.filter((entry) => entry.receivedAt >= last30Days).length,
      totalRaisedMinorLast30Days: donations
        .filter((entry) => entry.receivedAt >= last30Days)
        .reduce((total, entry) => total + entry.amountMinor, 0),
    };
  },
});

export const searchDonations = query({
  args: {
    reference: v.optional(v.string()),
    donorEmail: v.optional(v.string()),
    limit: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    await requireDomainAccess(ctx, "donations");
    const limit = Math.min(args.limit ?? 50, 200);
    let donations = await ctx.db.query("donations").collect();

    if (args.reference) {
      donations = donations.filter((entry) => entry.reference.toLowerCase().includes(args.reference!.toLowerCase()));
    }

    if (args.donorEmail) {
      const normalized = args.donorEmail.trim().toLowerCase();
      const donors = await ctx.db.query("donor_profiles").collect();
      const donorIds = new Set(donors.filter((donor) => donor.email.includes(normalized)).map((donor) => donor._id));
      donations = donations.filter((entry) => donorIds.has(entry.donorProfileId));
    }

    return donations.sort((left, right) => right.receivedAt - left.receivedAt).slice(0, limit);
  },
});

export const listPaymentEvents = query({
  args: {
    outcome: v.optional(processingOutcomeValidator),
    limit: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    await requireDomainAccess(ctx, "donations");
    const limit = Math.min(args.limit ?? 100, 300);
    let events = await ctx.db.query("payment_events").collect();
    if (args.outcome) {
      events = events.filter((entry) => entry.processingOutcome === args.outcome);
    }
    return events.sort((left, right) => right.receivedAt - left.receivedAt).slice(0, limit);
  },
});

export const listReceipts = query({
  args: {
    status: v.optional(v.union(v.literal("queued"), v.literal("sent"), v.literal("failed"))),
    limit: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    await requireDomainAccess(ctx, "donations");
    const limit = Math.min(args.limit ?? 100, 300);
    let receipts = await ctx.db.query("receipts").collect();
    if (args.status) {
      receipts = receipts.filter((entry) => entry.status === args.status);
    }
    return receipts.sort((left, right) => right.queuedAt - left.queuedAt).slice(0, limit);
  },
});

export const listAuditLogs = query({
  args: {
    entityType: v.optional(v.string()),
    limit: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    await requireDomainAccess(ctx, "dashboard");
    const limit = Math.min(args.limit ?? 100, 300);
    let logs = await ctx.db.query("audit_logs").collect();
    if (args.entityType) {
      logs = logs.filter((entry) => entry.entityType === args.entityType);
    }
    return logs.sort((left, right) => right.createdAt - left.createdAt).slice(0, limit);
  },
});

export const listCampaignsForOps = query({
  args: {
    limit: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    await requireDomainAccess(ctx, "donations");
    const limit = Math.min(args.limit ?? 100, 300);
    const campaigns = await ctx.db.query("campaigns").collect();
    return campaigns.sort((left, right) => right.updatedAt - left.updatedAt).slice(0, limit);
  },
});
