import type { Metadata } from "next";
import { Header, Footer, ContentSection, Banner } from "@/components";

export const metadata: Metadata = {
  title: "Our team | My Akhirah Account",
  description:
    "Meet the people behind My Akhirah Account — strategy, partnerships, and programme delivery.",
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
  {
    name: "Team member name",
    role: "Role title",
    bio: "Short bio will be added here. TODO: Mikhail copy",
  },
];

export default function TeamPage() {
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
              Our team
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-white/90 max-w-2xl leading-relaxed">
              {
                "Placeholder profiles below will be replaced with approved names, roles, and bios. TODO: Mikhail copy"
              }
            </p>
          </div>
        </section>

        <ContentSection
          aria-label="Team members — placeholder profiles"
          title="Meet the team"
          subtitle="Strategy, partnerships, finance, programmes, and safeguarding — working together for donors and communities."
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

        <Banner
          title="Work with us or ask a question"
          description="We are always glad to hear from partners, volunteers, and supporters."
          ctaText="Contact us"
          ctaHref="/contact"
          variant="primary"
        />
      </main>

      <Footer />
    </>
  );
}
