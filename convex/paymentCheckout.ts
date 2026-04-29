import { v } from "convex/values";
import { internal } from "./_generated/api";
import { action } from "./_generated/server";
import type { GivingType, LaunchCurrency } from "./lib/validators";
import {
  buildDonorboxCheckoutUrl,
  buildPayPalDonateCheckoutUrl,
  type CreateCheckoutInput,
} from "./lib/paymentProviders";

type IntentCheckoutPayload = {
  reference: string;
  amountMinor: number;
  amountMajor: number;
  currency: string;
  donorEmail: string;
  donorName: string;
  donorPhone?: string;
  messageToCharity?: string;
  fundId: string;
  campaignId?: string;
  givingType: GivingType;
  provider: string;
  selectedProvider: string;
};

function parseFlutterwavePaymentResponse(data: unknown): { checkoutUrl: string; sessionId: string } {
  if (!data || typeof data !== "object") {
    throw new Error("Invalid payment provider response");
  }

  const payload = data as {
    data?: {
      link?: string;
      id?: string | number;
    };
  };
  const checkoutUrl = payload.data?.link;
  const sessionId = payload.data?.id ? String(payload.data.id) : "";
  if (!checkoutUrl || !sessionId) {
    throw new Error("Payment provider did not return checkout session");
  }
  return { checkoutUrl, sessionId };
}

function toCheckoutInput(
  intent: IntentCheckoutPayload,
  successUrl: string,
  cancelUrl: string,
): CreateCheckoutInput {
  return {
    reference: intent.reference,
    amountMinor: intent.amountMinor,
    currency: intent.currency as LaunchCurrency,
    donorEmail: intent.donorEmail,
    donorName: intent.donorName,
    donorPhone: intent.donorPhone,
    fundId: intent.fundId,
    campaignId: intent.campaignId,
    givingType: intent.givingType,
    messageToCharity: intent.messageToCharity,
    successUrl,
    cancelUrl,
  };
}

export const createHostedCheckout: ReturnType<typeof action> = action({
  args: {
    intentId: v.id("donation_intents"),
    successUrl: v.string(),
    cancelUrl: v.string(),
  },
  handler: async (ctx, args) => {
    const intent = await ctx.runQuery(internal.donationCheckoutData.getIntentCheckoutData, {
      intentId: args.intentId,
    });
    if (!intent) {
      throw new Error("Donation intent not found");
    }

    const typedIntent = intent as IntentCheckoutPayload;
    const provider = typedIntent.selectedProvider ?? typedIntent.provider;

    if (provider === "launchgood") {
      throw new Error("LaunchGood checkout is prepared when the intent is created");
    }

    const checkoutInput = toCheckoutInput(typedIntent, args.successUrl, args.cancelUrl);

    if (provider === "flutterwave") {
      const secretKey = process.env.FLUTTERWAVE_SECRET_KEY;
      if (!secretKey) {
        throw new Error("FLUTTERWAVE_SECRET_KEY is not configured");
      }

      const response = await fetch("https://api.flutterwave.com/v3/payments", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${secretKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          tx_ref: typedIntent.reference,
          amount: typedIntent.amountMajor,
          currency: typedIntent.currency,
          redirect_url: args.successUrl,
          customer: {
            email: typedIntent.donorEmail,
            name: typedIntent.donorName,
            phone_number: typedIntent.donorPhone,
          },
          customizations: {
            title: "My Akhirah Account",
            description: typedIntent.messageToCharity ?? "Donation",
          },
          meta: {
            donation_reference: typedIntent.reference,
            fund_id: typedIntent.fundId,
            campaign_id: typedIntent.campaignId ?? null,
            giving_type: typedIntent.givingType,
            cancel_url: args.cancelUrl,
          },
        }),
      });

      if (!response.ok) {
        const failure = await response.text();
        throw new Error(`Checkout creation failed: ${failure}`);
      }

      const body = await response.json();
      const { checkoutUrl, sessionId } = parseFlutterwavePaymentResponse(body);

      await ctx.runMutation(internal.donationCheckoutData.updateCheckoutSession, {
        intentId: args.intentId,
        providerSessionId: sessionId,
        checkoutUrl,
      });

      return {
        requestId: "",
        reference: typedIntent.reference,
        provider: "flutterwave" as const,
        checkoutUrl,
        status: "checkout_created" as const,
      };
    }

    if (provider === "donorbox") {
      const checkoutUrl = buildDonorboxCheckoutUrl(checkoutInput);
      await ctx.runMutation(internal.donationCheckoutData.updateCheckoutSession, {
        intentId: args.intentId,
        providerSessionId: intent.reference,
        checkoutUrl,
      });
      return {
        requestId: "",
        reference: typedIntent.reference,
        provider: "donorbox" as const,
        checkoutUrl,
        status: "checkout_created" as const,
      };
    }

    if (provider === "paypal") {
      const checkoutUrl = buildPayPalDonateCheckoutUrl(checkoutInput);
      await ctx.runMutation(internal.donationCheckoutData.updateCheckoutSession, {
        intentId: args.intentId,
        providerSessionId: intent.reference,
        checkoutUrl,
      });
      return {
        requestId: "",
        reference: typedIntent.reference,
        provider: "paypal" as const,
        checkoutUrl,
        status: "checkout_created" as const,
      };
    }

    throw new Error(`Unsupported checkout provider: ${provider}`);
  },
});
