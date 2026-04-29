import { describe, expect, it } from "vitest";
import {
  assertCheckoutProvider,
  assertLaunchCurrency,
  assertOneOffGivingFrequency,
} from "./donationCheckout";

describe("assertLaunchCurrency", () => {
  it("accepts launch currencies", () => {
    expect(assertLaunchCurrency("gbp")).toBe("GBP");
    expect(assertLaunchCurrency(" USD ")).toBe("USD");
    expect(assertLaunchCurrency("EUR")).toBe("EUR");
    expect(assertLaunchCurrency("ghs")).toBe("GHS");
  });

  it("rejects unsupported currency", () => {
    expect(() => assertLaunchCurrency("CAD")).toThrow("Unsupported currency");
  });
});

describe("assertCheckoutProvider", () => {
  it("accepts known providers", () => {
    expect(assertCheckoutProvider("DONORBOX")).toBe("donorbox");
    expect(assertCheckoutProvider("flutterwave")).toBe("flutterwave");
  });

  it("rejects unknown provider", () => {
    expect(() => assertCheckoutProvider("stripe")).toThrow("Unsupported payment provider");
  });
});

describe("assertOneOffGivingFrequency", () => {
  it("allows empty frequency", () => {
    const form = new FormData();
    expect(() => assertOneOffGivingFrequency(form)).not.toThrow();
  });

  it("rejects monthly", () => {
    const form = new FormData();
    form.set("givingFrequency", "monthly");
    expect(() => assertOneOffGivingFrequency(form)).toThrow("not available yet");
  });

  it("allows one_off", () => {
    const form = new FormData();
    form.set("givingFrequency", "one_off");
    expect(() => assertOneOffGivingFrequency(form)).not.toThrow();
  });
});
