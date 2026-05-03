import type { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";
import NewsletterPageForm from "@/components/forms/NewsletterPageForm";

export const metadata: Metadata = {
  title: "Newsletter | My Akhirah Account",
  description: "Subscribe for measured updates about impact stories, curated appeals, events, and ways to volunteer.",
};

export default function NewsletterPage() {
  return (
    <PageShell>
      <section className="section bg-mercy-mint border-b border-akhirah-teal/10">
        <div className="container-custom grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.1fr)] lg:gap-14 items-start">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-wider text-akhirah-teal mb-3">Updates</p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-akhirah-teal text-balance">
              Quiet, intentional newsletters
            </h1>
            <p className="mt-4 text-account-black/70 text-sm sm:text-base leading-relaxed max-w-2xl">
              We spotlight lived impact, preparedness for Ramadan appeals, grassroots partner updates, volunteer spotlights—and we never cram your inbox. Add your preferred email once; you can revisit this page anytime to unsubscribe instructions once they ship.
            </p>
          </div>
          <div className="card p-6 sm:p-8 w-full max-w-md lg:justify-self-end">
            <h2 className="text-lg font-bold text-akhirah-teal mb-1">Join the reader list</h2>
            <p className="text-sm text-account-black/65 mb-6">
              Prefer brevity: one field, double opt‑in safeguards handled server‑side soon.
            </p>
            <NewsletterPageForm />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
