import type { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";

export const metadata: Metadata = {
  title: "Campaigns | My Akhirah Account",
  description: "Active fundraising appeals and humanitarian campaigns from My Akhirah Account.",
};

export default function CampaignsPagePlaceholder() {
  return (
    <PageShell>
      <section className="section bg-purity-white">
        <div className="container-custom max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-akhirah-teal mb-3">Campaigns</p>
          <h1 className="text-2xl sm:text-3xl font-bold text-akhirah-teal text-balance">Appeals catalogue</h1>
          <p className="mt-4 text-account-black/70 text-sm sm:text-base leading-relaxed">
            Campaign listings hydrate from Convex in a dedicated sprint. Meanwhile you can revisit the homepage &ldquo;Active appeals&rdquo;
            carousel for live cards.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
