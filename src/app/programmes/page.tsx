import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/layout/PageShell";

export const metadata: Metadata = {
  title: "Programmes | My Akhirah Account",
  description: "Explore how My Akhirah Account delivers humanitarian and development programmes—with transparent reporting rooted in dignity.",
};

const pillars = [
  {
    title: "Community-led priorities",
    body: "Local partners co-design timelines, safeguarding plans, and success metrics—you’ll see Convex-backed narratives here soon.",
    tag: "Field alignment",
  },
  {
    title: "Operational clarity",
    body: "Each programme publishes delivery milestones, stewardship notes, and finance snapshots once data contracts are finalized with Mikhail.",
    tag: "Reporting",
  },
  {
    title: "Donor-visible impact",
    body: "This shell follows the Stats + card visual language elsewhere on the marketing site once live metrics hydrate from Convex queries.",
    tag: "Impact",
  },
] as const;

export default function ProgrammesPage() {
  return (
    <PageShell>
      <section className="section bg-purity-white border-b border-akhirah-teal/8">
        <div className="container-custom">
          <p className="text-xs font-semibold uppercase tracking-wider text-akhirah-teal mb-3">Programmes</p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-akhirah-teal text-balance max-w-3xl">
            Transparent programmes anchored in dignity
          </h1>
          <p className="mt-4 text-account-black/70 text-sm sm:text-base leading-relaxed max-w-3xl">
            This page establishes the storytelling shell ahead of Convex-powered programme catalogs. Sections below preview how we explain delivery patterns while keeping fundraisers and donors grounded in the same language.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/campaigns" className="btn btn-secondary text-sm md:text-base text-white font-bold">
              View active appeals
            </Link>
            <Link href="/donate" className="btn btn-primary text-sm md:text-base font-bold">
              Donate
            </Link>
          </div>
        </div>
      </section>

      <section className="section bg-mercy-mint border-y border-akhirah-teal/10">
        <div className="container-custom">
          <h2 className="text-xl sm:text-2xl font-bold text-akhirah-teal mb-2 text-balance">How we organise delivery</h2>
          <p className="text-sm sm:text-base text-account-black/70 max-w-3xl mb-8 sm:mb-10 leading-relaxed">
            Placeholder copy keeps layout honest—we’ll hydrate each card with sanctioned programme excerpts, SDG tags, and allocation storytelling after data models land.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {pillars.map((pillar) => (
              <article key={pillar.title} className="card p-6 flex flex-col gap-4">
                <span className="inline-flex items-center px-3 py-1 text-xs font-bold uppercase tracking-wide text-akhirah-teal bg-eternal-gold/20 self-start rounded-sm">
                  {pillar.tag}
                </span>
                <h3 className="text-lg font-bold text-akhirah-teal leading-snug">{pillar.title}</h3>
                <p className="text-sm text-account-black/70 leading-relaxed flex-1">{pillar.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-purity-white">
        <div className="container-custom">
          <div className="card p-8 sm:p-10 text-center border-dashed border-akhirah-teal/30 bg-mercy-mint/50">
            <h2 className="text-xl font-bold text-akhirah-teal mb-3">Programme catalog coming Week 3+</h2>
            <p className="text-sm sm:text-base text-account-black/70 max-w-2xl mx-auto leading-relaxed">
              Once Convex programme listings are unlocked for marketing pages, cards here will reuse the Campaign/Impact typography scale and load fallbacks gracefully when records are unpublished.
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
