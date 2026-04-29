export const LAUNCH_CURRENCIES = ["GBP", "USD", "EUR", "GHS"] as const;
export const CHECKOUT_PAYMENT_PROVIDERS = ["donorbox", "flutterwave", "paypal", "launchgood"] as const;

export type CheckoutPaymentProvider = (typeof CHECKOUT_PAYMENT_PROVIDERS)[number];

export function assertLaunchCurrency(currency: string): string {
  const upper = currency.trim().toUpperCase();
  if (!(LAUNCH_CURRENCIES as readonly string[]).includes(upper)) {
    throw new Error("Unsupported currency");
  }
  return upper;
}

export function assertCheckoutProvider(value: string): CheckoutPaymentProvider {
  const normalized = value.trim().toLowerCase();
  const match = CHECKOUT_PAYMENT_PROVIDERS.find((p) => p === normalized);
  if (!match) {
    throw new Error("Unsupported payment provider");
  }
  return match;
}

export function assertOneOffGivingFrequency(formData: FormData): void {
  const raw = formData.get("givingFrequency");
  if (typeof raw !== "string" || raw.trim() === "") {
    return;
  }
  const value = raw.trim().toLowerCase();
  if (value === "monthly" || value === "recurring") {
    throw new Error("Recurring donations are not available yet");
  }
  if (value !== "one_off" && value !== "once") {
    throw new Error("Invalid giving frequency");
  }
}
