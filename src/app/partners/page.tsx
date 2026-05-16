import type { Metadata } from "next";
import { Header, Footer, ContentSection, Banner } from "@/components";

export const metadata: Metadata = {
  title: "Our partners | My Akhirah Account",
  description:
    "Organisations My Akhirah Account works with to deliver programmes safely and accountably across Africa.",
};

const PARTNER_PLACEHOLDERS = [
  {
    name: "Partner organisation",
    region: "Region",
    workType: "Type of collaboration",
  },
  {
    name: "Partner organisation",
    region: "Region",
    workType: "Type of collaboration",
  },
  {
    name: "Partner organisation",
    region: "Region",
    workType: "Type of collaboration",
  },
  {
    name: "Partner organisation",
    region: "Region",
    workType: "Type of collaboration",
  },
];

const labelClass =
  "text-[0.6875rem] font-semibold uppercase tracking-wide text-account-black/50 mb-1";

export default function PartnersPage() {
  return (
    <>
      <Header />

      <main className="min-w-0 flex-1">
        <section className="bg-akhirah-teal text-purity-white overflow-x-clip">
          <div className="container-custom max-w-full py-10 sm:py-12 md:py-16 lg:py-20">
            <p className="text-xs font-semibold uppercase tracking-wide text-eternal-gold/95 mb-2 sm:mb-3">
              About us
            </p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-balance max-w-3xl mb-4 sm:mb-5">
              Our partners
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-white/90 max-w-2xl leading-relaxed">
              {
                "Placeholder cards below will be replaced with approved partner names, regions, and collaboration types. TODO: Mikhail copy"
              }
            </p>
          </div>
        </section>

        <ContentSection
          aria-label="Partner organisations — placeholder profiles"
          title="Who we work with"
          subtitle="Local and regional organisations that help us reach communities with dignity and accountability."
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
            {PARTNER_PLACEHOLDERS.map((partner, index) => (
              <article
                key={`${partner.name}-${index}`}
                className="card min-w-0 p-5 sm:p-6 flex flex-col"
              >
                <p className={labelClass}>Partner name</p>
                <h3 className="font-bold text-lg text-akhirah-teal mb-3 text-balance">{partner.name}</h3>
                <p className={labelClass}>Region</p>
                <p className="text-sm text-account-black/75 mb-3">{partner.region}</p>
                <p className={labelClass}>Work type</p>
                <p className="text-sm text-account-black/75 leading-relaxed flex-1">{partner.workType}</p>
              </article>
            ))}
          </div>
        </ContentSection>

        <Banner
          title="Explore our programmes or get in touch"
          description="Learn how we fund and monitor work on the ground, or start a conversation about partnership."
          ctaText="Contact us"
          ctaHref="/contact"
          variant="primary"
        />
      </main>

      <Footer />
    </>
  );
}
