import { v } from "convex/values";
import { internalMutation } from "./_generated/server";
import { paymentProviderValidator, processingOutcomeValidator } from "./lib/validators";

export const upsert = internalMutation({
  args: {
    provider: paymentProviderValidator,
    providerEventId: v.string(),
    eventType: v.string(),
    intentReference: v.optional(v.string()),
    payloadJson: v.string(),
    processingOutcome: processingOutcomeValidator,
    processedAt: v.optional(v.number()),
    signatureVerified: v.optional(v.boolean()),
    rawProviderStatus: v.optional(v.string()),
    providerPaymentId: v.optional(v.string()),
    amountMinor: v.optional(v.number()),
    currency: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const existing = await ctx.db
      .query("payment_events")
      .withIndex("by_provider_event_id", (q) =>
        q.eq("provider", args.provider).eq("providerEventId", args.providerEventId),
      )
      .first();

    const now = Date.now();
    if (existing) {
      await ctx.db.patch(existing._id, {
        eventType: args.eventType,
        intentReference: args.intentReference,
        payloadJson: args.payloadJson,
        processingOutcome: args.processingOutcome,
        processedAt: args.processedAt ?? existing.processedAt,
        signatureVerified: args.signatureVerified ?? existing.signatureVerified,
        rawProviderStatus: args.rawProviderStatus ?? existing.rawProviderStatus,
        providerPaymentId: args.providerPaymentId ?? existing.providerPaymentId,
        amountMinor: args.amountMinor ?? existing.amountMinor,
        currency: args.currency ?? existing.currency,
      });
      return { eventId: existing._id, isDuplicate: true };
    }

    const eventId = await ctx.db.insert("payment_events", {
      provider: args.provider,
      providerEventId: args.providerEventId,
      eventType: args.eventType,
      intentReference: args.intentReference,
      payloadJson: args.payloadJson,
      receivedAt: now,
      processingOutcome: args.processingOutcome,
      processedAt: args.processedAt,
      signatureVerified: args.signatureVerified,
      rawProviderStatus: args.rawProviderStatus,
      providerPaymentId: args.providerPaymentId,
      amountMinor: args.amountMinor,
      currency: args.currency,
    });
    return { eventId, isDuplicate: false };
  },
});
