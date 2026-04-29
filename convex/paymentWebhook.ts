import { internal } from "./_generated/api";
import { httpAction } from "./_generated/server";

export const handleFlutterwaveWebhook = httpAction(async (ctx, request) => {
  const webhookSecret = process.env.FLUTTERWAVE_WEBHOOK_HASH ?? "";
  const providedSignature = request.headers.get("verif-hash") ?? "";
  if (!webhookSecret || !providedSignature || providedSignature !== webhookSecret) {
    return new Response("Invalid webhook signature", { status: 401 });
  }

  const bodyText = await request.text();
  let payload: {
    id?: string | number;
    event?: string;
    data?: {
      tx_ref?: string;
      status?: string;
      amount?: number;
      currency?: string;
      id?: string | number;
    };
  };

  try {
    payload = JSON.parse(bodyText);
  } catch {
    return new Response("Invalid JSON", { status: 400 });
  }

  const providerEventId = payload.id ? String(payload.id) : `evt_${Date.now()}`;
  const eventType = payload.event ?? "unknown";
  const intentReference = payload.data?.tx_ref;
  const paymentStatus = payload.data?.status ?? "unknown";
  const paidAmountMinor = Math.round((payload.data?.amount ?? 0) * 100);
  const paidCurrency = payload.data?.currency ?? "USD";
  const providerTransactionId = payload.data?.id ? String(payload.data.id) : providerEventId;

  const upsert = await ctx.runMutation(internal.paymentEvents.upsert, {
    provider: "flutterwave",
    providerEventId,
    eventType,
    intentReference,
    payloadJson: bodyText,
    processingOutcome: "ignored",
    signatureVerified: true,
    rawProviderStatus: paymentStatus,
    providerPaymentId: providerTransactionId,
    amountMinor: paidAmountMinor,
    currency: paidCurrency.toUpperCase(),
  });

  const settlement = await ctx.runMutation(internal.donations.applyFlutterwaveSettlement, {
    paymentEventId: upsert.eventId,
    intentReference,
    providerTransactionId,
    paidAmountMinor,
    paidCurrency,
    paymentStatus,
    wasDuplicateEvent: upsert.isDuplicate,
  });

  return new Response("ok", { status: settlement.status });
});
