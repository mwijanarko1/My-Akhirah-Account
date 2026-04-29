import type { GivingType, LaunchCurrency, PaymentProvider } from "./validators";
import { LAUNCH_CURRENCIES, PAYMENT_PROVIDERS } from "./validators";

export type CreateCheckoutInput = {
  reference: string;
  amountMinor: number;
  currency: LaunchCurrency;
  donorEmail: string;
  donorName: string;
  donorPhone?: string;
  fundId: string;
  campaignId?: string;
  givingType: GivingType;
  messageToCharity?: string;
  successUrl: string;
  cancelUrl: string;
};

export type CreateCheckoutResult = {
  provider: PaymentProvider;
  providerSessionId?: string;
  providerPaymentId?: string;
  checkoutUrl: string;
  status: "checkout_created" | "pending";
};

export function isLaunchCurrency(value: string): value is LaunchCurrency {
  const upper = value.trim().toUpperCase();
  return (LAUNCH_CURRENCIES as readonly string[]).includes(upper);
}

export function assertPaymentProvider(value: string): PaymentProvider {
  const normalized = value.trim().toLowerCase();
  const match = PAYMENT_PROVIDERS.find((p) => p === normalized);
  if (!match) {
    throw new Error("Unsupported payment provider");
  }
  return match;
}

export function buildDonorboxCheckoutUrl(input: CreateCheckoutInput): string {
  const base = process.env.DONORBOX_BASE_URL?.trim();
  if (!base) {
    throw new Error("DONORBOX_BASE_URL is not configured");
  }
  const amountMajor = (input.amountMinor / 100).toFixed(2);
  const params = new URLSearchParams({
    amount: amountMajor,
    currency: input.currency,
    reference: input.reference,
    email: input.donorEmail,
    name: input.donorName,
    success_url: input.successUrl,
    cancel_url: input.cancelUrl,
  });
  if (input.donorPhone) {
    params.set("phone", input.donorPhone);
  }
  const join = base.includes("?") ? "&" : "?";
  return `${base}${join}${params.toString()}`;
}

export function buildPayPalDonateCheckoutUrl(input: CreateCheckoutInput): string {
  const business = process.env.PAYPAL_BUSINESS_ID?.trim() ?? process.env.PAYPAL_CLIENT_ID?.trim();
  if (!business) {
    throw new Error("PAYPAL_BUSINESS_ID or PAYPAL_CLIENT_ID is not configured");
  }
  const amountMajor = (input.amountMinor / 100).toFixed(2);
  const env = process.env.PAYPAL_ENVIRONMENT?.trim().toLowerCase();
  const host =
    env === "live" ? "https://www.paypal.com/donate" : "https://www.sandbox.paypal.com/donate";
  const params = new URLSearchParams({
    business,
    amount: amountMajor,
    currency_code: input.currency,
    item_name: "Donation",
    custom: input.reference,
  });
  return `${host}?${params.toString()}`;
}

export function buildLaunchGoodExternalUrl(input: CreateCheckoutInput): string {
  const base = process.env.LAUNCHGOOD_BASE_URL?.trim();
  if (!base) {
    throw new Error("LAUNCHGOOD_BASE_URL is not configured");
  }
  const params = new URLSearchParams({ ref: input.reference });
  const join = base.includes("?") ? "&" : "?";
  return `${base}${join}${params.toString()}`;
}
