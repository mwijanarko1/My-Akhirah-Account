import type { Metadata } from "next";
import { Header, Footer, ContentSection, Banner } from "@/components";

export const metadata: Metadata = {
  title: "About us | My Akhirah Account",
  description:
    "Learn about My Akhirah Account — our mission, how we work in Africa with local partners, and the team behind trusted Islamic giving.",
};

const TEAM_PLACEHOLDERS = [
  {
    name: "Team member name",
    role: "Role title",
    bio: "Short bio will be added here. TODO: Mikhail copy",
  },
  {
    name: "Team member name",
    role: "Role title",
    bio: "Short bio will be added here. TODO: Mikhail copy",
  },
  {
    name: "Team member name",
    role: "Role title",
    bio: "Short bio will be added here. TODO: Mikhail copy",
  },
];

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
];

const HOW_WE_WORK_STEPS = [
  {
    title: "Listen and assess",
    description:
      "We work with communities and trusted partners to understand needs and priorities on the ground.",
  },
  {
    title: "Deliver with accountability",
    description:
      "Programmes are implemented with clear oversight, reporting, and stewardship of donor funds.",
  },
  {
    title: "Report impact",
    description:
      "Donors receive transparent updates on outcomes, challenges, and how their giving made a difference.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className="about-page min-w-0 flex-1 overflow-x-clip">
        {/* Intro */}
        <section className="bg-akhirah-teal text-purity-white overflow-x-clip">
          <div className="container-custom max-w-full py-10 sm:py-12 md:py-16 lg:py-20">
            <p className="text-xs font-semibold uppercase tracking-wide text-eternal-gold/95 mb-2 sm:mb-3">
              About us
            </p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-balance max-w-3xl mb-4 sm:mb-5">
              Trusted giving for lasting impact
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-white/90 max-w-2xl leading-relaxed">
              My Akhirah Account connects donors with dignified, accountable charity work — with a
              focus on communities in Africa and transparent stewardship. TODO: Mikhail copy
            </p>
          </div>
        </section>

        {/* Mission */}
        <ContentSection
          title="Our mission"
          subtitle="Why we exist and what we set out to achieve for donors and beneficiaries alike."
        >
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm sm:text-base text-account-black/80 leading-relaxed">
              We exist to make Islamic giving simple, trustworthy, and visible — so every donation
              supports verified programmes, respects those we serve, and honours the intention behind
              Sadaqah and Zakat. TODO: Mikhail copy
            </p>
          </div>
        </ContentSection>

        {/* Africa focus */}
        <ContentSection
          variant="mint"
          bordered
          title="Our focus in Africa"
          subtitle="Programmes are shaped with communities and delivered through local partnership — not distant assumptions."
        >
          <div className="mx-auto max-w-3xl">
            <p className="text-sm sm:text-base text-account-black/80 leading-relaxed text-center mb-8 sm:mb-10">
              From emergency relief to education, water, and livelihoods, we prioritise dignity,
              participation, and long-term resilience. Geographic and thematic priorities will be
              confirmed with final copy. TODO: Mikhail copy
            </p>
            <ul className="grid gap-3 sm:gap-4 sm:grid-cols-2 text-left text-sm sm:text-base text-account-black/85">
              <li className="rounded-sm border border-akhirah-teal/10 bg-purity-white p-4 sm:p-5">
                <span className="font-semibold text-akhirah-teal">Local partners</span>
                <span className="text-account-black/70"> — vetted organisations rooted in their regions.</span>
              </li>
              <li className="rounded-sm border border-akhirah-teal/10 bg-purity-white p-4 sm:p-5">
                <span className="font-semibold text-akhirah-teal">Transparent reporting</span>
                <span className="text-account-black/70"> — clear updates for donors and stakeholders.</span>
              </li>
            </ul>
          </div>
        </ContentSection>

        {/* How we work */}
        <ContentSection
          title="How we work"
          subtitle="A simple model built on partnership, diligence, and care."
        >
          <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-3 md:gap-6">
            {HOW_WE_WORK_STEPS.map((step) => (
              <div
                key={step.title}
                className="min-w-0 rounded-sm border border-akhirah-teal/10 bg-purity-white p-5 sm:p-6 shadow-sm"
              >
                <h3 className="font-bold text-lg text-akhirah-teal mb-2 text-balance">{step.title}</h3>
                <p className="text-sm text-account-black/75 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </ContentSection>

        {/* Team */}
        <ContentSection
          id="team"
          variant="mint"
          bordered
          aria-label="Our team — placeholder profiles"
          title="Our team"
          subtitle="The people behind strategy, partnerships, and day-to-day delivery."
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
            {TEAM_PLACEHOLDERS.map((member, index) => (
              <article
                key={`${member.name}-${index}`}
                className="card min-w-0 p-5 sm:p-6 flex flex-col"
              >
                <p className="text-[0.6875rem] font-semibold uppercase tracking-wide text-account-black/50 mb-1">
                  Name
                </p>
                <h3 className="font-bold text-lg text-akhirah-teal mb-3 text-balance">{member.name}</h3>
                <p className="text-[0.6875rem] font-semibold uppercase tracking-wide text-account-black/50 mb-1">
                  Role
                </p>
                <p className="text-xs font-semibold uppercase tracking-wide text-account-black/70 mb-3">
                  {member.role}
                </p>
                <p className="text-[0.6875rem] font-semibold uppercase tracking-wide text-account-black/50 mb-1">
                  Short bio
                </p>
                <p className="text-sm text-account-black/75 leading-relaxed flex-1">{member.bio}</p>
              </article>
            ))}
          </div>
        </ContentSection>

        {/* Partners */}
        <ContentSection
          id="partners"
          aria-label="Our partners — placeholder profiles"
          title="Our partners"
          subtitle="Organisations we work alongside to reach communities safely and effectively."
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
            {PARTNER_PLACEHOLDERS.map((partner, index) => (
              <article
                key={`${partner.name}-${index}`}
                className="card min-w-0 p-5 sm:p-6 flex flex-col"
              >
                <p className="text-[0.6875rem] font-semibold uppercase tracking-wide text-account-black/50 mb-1">
                  Partner name
                </p>
                <h3 className="font-bold text-lg text-akhirah-teal mb-3 text-balance">{partner.name}</h3>
                <p className="text-[0.6875rem] font-semibold uppercase tracking-wide text-account-black/50 mb-1">
                  Region
                </p>
                <p className="text-sm text-account-black/75 mb-3">{partner.region}</p>
                <p className="text-[0.6875rem] font-semibold uppercase tracking-wide text-account-black/50 mb-1">
                  Work type
                </p>
                <p className="text-sm text-account-black/75 leading-relaxed flex-1">{partner.workType}</p>
              </article>
            ))}
          </div>
        </ContentSection>

        {/* CTA → /contact */}
        <Banner
          title="Questions or ideas?"
          description="Whether you are a donor, partner, or volunteer, we would be glad to hear from you. Reach out and our team will respond as soon as we can."
          ctaText="Contact us"
          ctaHref="/contact"
          variant="primary"
        />
      </main>

      <Footer />
    </>
  );
}
