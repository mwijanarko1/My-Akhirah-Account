import { v } from "convex/values";
import { internalMutation, internalQuery } from "./_generated/server";

export const updateCheckoutSession = internalMutation({
  args: {
    intentId: v.id("donation_intents"),
    providerSessionId: v.optional(v.string()),
    checkoutUrl: v.string(),
    providerPaymentId: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const intent = await ctx.db.get(args.intentId);
    if (!intent) {
      throw new Error("Donation intent not found");
    }
    if (
      intent.status !== "created" &&
      intent.status !== "checkout_created" &&
      intent.status !== "pending"
    ) {
      throw new Error("Donation intent is not open");
    }

    const patch: Record<string, unknown> = {
      status: "checkout_created",
      providerCheckoutUrl: args.checkoutUrl,
      updatedAt: Date.now(),
    };
    if (args.providerSessionId !== undefined) {
      patch.providerSessionId = args.providerSessionId;
    }
    if (args.providerPaymentId !== undefined) {
      patch.providerPaymentId = args.providerPaymentId;
    }

    await ctx.db.patch(args.intentId, patch);
    return { ok: true };
  },
});

export const getIntentCheckoutData = internalQuery({
  args: {
    intentId: v.id("donation_intents"),
  },
  handler: async (ctx, args) => {
    const intent = await ctx.db.get(args.intentId);
    if (!intent) {
      return null;
    }
    const donor = await ctx.db.get(intent.donorProfileId);
    if (!donor) {
      throw new Error("Donor profile not found");
    }

    return {
      reference: intent.reference,
      amountMinor: intent.amountMinor,
      amountMajor: Math.round(intent.amountMinor) / 100,
      currency: intent.currency,
      donorEmail: donor.email,
      donorName: donor.fullName,
      donorPhone: donor.phone ?? undefined,
      messageToCharity: intent.messageToCharity ?? undefined,
      fundId: String(intent.fundId),
      campaignId: intent.campaignId ? String(intent.campaignId) : undefined,
      givingType: intent.givingType,
      provider: intent.provider,
      selectedProvider: intent.selectedProvider ?? intent.provider,
    };
  },
});
