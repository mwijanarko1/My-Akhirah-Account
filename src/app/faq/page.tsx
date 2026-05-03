import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/layout/PageShell";

export const metadata: Metadata = {
  title: "FAQ | My Akhirah Account",
  description: "Answers to frequent questions about My Akhirah Account giving, safeguarding, receipts, programmes, and eligibility.",
};

export default function FAQPagePlaceholder() {
  return (
    <PageShell>
      <section className="section bg-mercy-mint border-y border-akhirah-teal/10">
        <div className="container-custom max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-akhirah-teal mb-3">Help</p>
          <h1 className="text-2xl sm:text-3xl font-bold text-akhirah-teal text-balance">FAQ</h1>
          <p className="mt-4 text-account-black/70 text-sm sm:text-base leading-relaxed">
            Frequently asked questions will live here shortly. Reach us early via{" "}
            <Link href="/contact" className="font-semibold text-akhirah-teal underline-offset-4 hover:underline">
              Contact
            </Link>{" "}
            if anything is unclear.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
