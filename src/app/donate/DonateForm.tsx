"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type FundOption = {
  _id: string;
  name: string;
  slug: string;
  givingType: string;
};

type CampaignOption = {
  id: string;
  title: string;
  slug: string;
  fundId: string;
};

const givingTypes = [
  { value: "zakat", label: "Zakat" },
  { value: "sadaqah", label: "Sadaqah" },
  { value: "lillah", label: "Lillah" },
  { value: "kaffarah", label: "Kaffarah" },
  { value: "fidyah", label: "Fidyah" },
  { value: "qurbani", label: "Qurbani" },
  { value: "general", label: "General" },
] as const;

const currencies = [
  { value: "GBP", label: "GBP — British pound" },
  { value: "USD", label: "USD — US dollar" },
  { value: "EUR", label: "EUR — Euro" },
  { value: "GHS", label: "GHS — Ghanaian cedi" },
] as const;

const providers = [
  { value: "donorbox", label: "Donorbox (primary)" },
  { value: "flutterwave", label: "Card / mobile money (Flutterwave)" },
  { value: "paypal", label: "PayPal" },
  { value: "launchgood", label: "LaunchGood (external campaign)" },
] as const;

type BannerState = {
  cancelled?: string;
  expired?: string;
};

export default function DonateForm({
  funds,
  campaigns,
  banner,
}: {
  funds: FundOption[];
  campaigns: CampaignOption[];
  banner: BannerState;
}) {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const defaultFundId = funds[0]?._id ?? "";

  const campaignOptions = useMemo(() => {
    return campaigns.map((c) => ({ value: c.id, label: c.title, fundId: c.fundId }));
  }, [campaigns]);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setLoading(true);
    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/donations/checkout", {
        method: "POST",
        body: formData,
      });
      const data = (await response.json()) as {
        error?: string;
        checkoutUrl?: string;
      };
      if (!response.ok) {
        throw new Error(data.error ?? "Checkout failed");
      }
      if (!data.checkoutUrl) {
        throw new Error("Missing checkout URL from server");
      }
      window.location.assign(data.checkoutUrl);
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "Something went wrong");
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-[var(--color-akhirah-teal-dark)]">Donate</h1>
      <p className="mt-2 text-sm text-neutral-700">
        One-off gifts only. Amount and currency are set here and verified again when your payment provider confirms the
        gift.
      </p>

      {banner.cancelled === "true" ? (
        <p className="mt-6 rounded border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-950" role="status">
          Checkout was cancelled. You can adjust your details and try again.
        </p>
      ) : null}
      {banner.expired === "true" ? (
        <p className="mt-6 rounded border border-neutral-300 bg-neutral-50 px-4 py-3 text-sm text-neutral-900" role="status">
          This donation session expired. Please start again.
        </p>
      ) : null}

      {funds.length === 0 ? (
        <p className="mt-8 text-sm text-neutral-600">
          No active funds are available yet. Please try again later or{" "}
          <Link className="font-semibold text-[var(--color-akhirah-teal)] underline" href="/contact">
            contact us
          </Link>
          .
        </p>
      ) : (
        <form className="mt-8 space-y-6" onSubmit={onSubmit}>
          <input type="hidden" name="startedAt" value={Date.now()} />
          <input type="hidden" name="givingFrequency" value="one_off" />
          <input type="hidden" name="company" value="" />

          <div>
            <label className="block text-sm font-medium text-neutral-900" htmlFor="fullName">
              Full name
            </label>
            <input
              className="mt-1 min-h-11 w-full rounded border border-neutral-300 px-3 py-2 text-base"
              id="fullName"
              name="fullName"
              required
              autoComplete="name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-900" htmlFor="email">
              Email
            </label>
            <input
              className="mt-1 min-h-11 w-full rounded border border-neutral-300 px-3 py-2 text-base"
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-900" htmlFor="phone">
              Phone <span className="font-normal text-neutral-500">(optional)</span>
            </label>
            <input
              className="mt-1 min-h-11 w-full rounded border border-neutral-300 px-3 py-2 text-base"
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-neutral-900" htmlFor="country">
                Country <span className="font-normal text-neutral-500">(optional)</span>
              </label>
              <input className="mt-1 min-h-11 w-full rounded border border-neutral-300 px-3 py-2 text-base" id="country" name="country" />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-900" htmlFor="city">
                City <span className="font-normal text-neutral-500">(optional)</span>
              </label>
              <input className="mt-1 min-h-11 w-full rounded border border-neutral-300 px-3 py-2 text-base" id="city" name="city" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-900" htmlFor="fundId">
              Fund
            </label>
            <select
              className="mt-1 min-h-11 w-full rounded border border-neutral-300 px-3 py-2 text-base"
              id="fundId"
              name="fundId"
              required
              defaultValue={defaultFundId}
            >
              {funds.map((fund) => (
                <option key={fund._id} value={fund._id}>
                  {fund.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-900" htmlFor="campaignId">
              Campaign <span className="font-normal text-neutral-500">(optional)</span>
            </label>
            <select className="mt-1 min-h-11 w-full rounded border border-neutral-300 px-3 py-2 text-base" id="campaignId" name="campaignId">
              <option value="">— None —</option>
              {campaignOptions.map((c) => (
                <option key={c.value} value={c.value} data-fund-id={c.fundId}>
                  {c.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-900" htmlFor="givingType">
              Giving type
            </label>
            <select className="mt-1 min-h-11 w-full rounded border border-neutral-300 px-3 py-2 text-base" id="givingType" name="givingType" required>
              {givingTypes.map((gt) => (
                <option key={gt.value} value={gt.value}>
                  {gt.label}
                </option>
              ))}
            </select>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-neutral-900" htmlFor="amountMinor">
                Amount (minor units)
              </label>
              <input
                className="mt-1 min-h-11 w-full rounded border border-neutral-300 px-3 py-2 text-base"
                id="amountMinor"
                name="amountMinor"
                type="number"
                min={1}
                step={1}
                required
                placeholder="e.g. 5000 for £50.00"
              />
              <p className="mt-1 text-xs text-neutral-600">Enter pence/cents (integer). Example: 5000 = 50.00 in major units.</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-900" htmlFor="currency">
                Currency
              </label>
              <select className="mt-1 min-h-11 w-full rounded border border-neutral-300 px-3 py-2 text-base" id="currency" name="currency" required>
                {currencies.map((c) => (
                  <option key={c.value} value={c.value}>
                    {c.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-900" htmlFor="selectedProvider">
              Payment method
            </label>
            <select
              className="mt-1 min-h-11 w-full rounded border border-neutral-300 px-3 py-2 text-base"
              id="selectedProvider"
              name="selectedProvider"
              required
              defaultValue="donorbox"
            >
              {providers.map((p) => (
                <option key={p.value} value={p.value}>
                  {p.label}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-3">
            <label className="flex min-h-11 cursor-pointer items-start gap-3 text-sm">
              <input className="mt-1 size-5 shrink-0" name="coverFees" type="checkbox" value="true" />
              <span>Cover payment processing fees where possible</span>
            </label>
            <label className="flex min-h-11 cursor-pointer items-start gap-3 text-sm">
              <input className="mt-1 size-5 shrink-0" name="isAnonymousPublic" type="checkbox" value="true" />
              <span>Keep my name private on public donor rolls</span>
            </label>
            <label className="flex min-h-11 cursor-pointer items-start gap-3 text-sm">
              <input className="mt-1 size-5 shrink-0" name="consentTransactionalEmail" type="checkbox" value="true" required />
              <span>I agree to receive transactional emails about this gift (required)</span>
            </label>
            <label className="flex min-h-11 cursor-pointer items-start gap-3 text-sm">
              <input className="mt-1 size-5 shrink-0" name="consentEmailMarketing" type="checkbox" value="true" />
              <span>Email me occasional updates (optional)</span>
            </label>
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-900" htmlFor="messageToCharity">
              Message to the team <span className="font-normal text-neutral-500">(optional)</span>
            </label>
            <textarea className="mt-1 min-h-24 w-full rounded border border-neutral-300 px-3 py-2 text-base" id="messageToCharity" name="messageToCharity" maxLength={400} />
          </div>

          {error ? (
            <p className="text-sm text-red-700" role="alert">
              {error}
            </p>
          ) : null}

          <button className="btn btn-primary min-h-11 w-full sm:w-auto" type="submit" disabled={loading}>
            {loading ? "Redirecting…" : "Continue to secure checkout"}
          </button>
        </form>
      )}
    </div>
  );
}
