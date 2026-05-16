import {
  Header,
  Footer,
  Hero,
  SectionHeader,
  Banner,
  Stats,
  EmergencyBar,
  TrustSection,
  GlobalReach,
  BlogCard,
  EventCard,
  ImpactCard,
  CampaignCard,
} from "@/components";
import type { Metadata } from "next";
import {
  mockTrustItems,
  mockEmergencyFeatured,
  mockEmergencySecondaryAppeals,
} from "@/lib/mockData";
import { getHomepageData } from "@/lib/server/homepage";

export const metadata: Metadata = {
    title: "Home | My Akhirah Account",
    description:
        "Give with clarity — trusted appeals, transparent delivery, and impact you can follow. Explore campaigns, programmes, events, and ways to support communities.",
    openGraph: {
        title: "My Akhirah Account",
        description:
            "Charitable giving, community support, and growth rooted in faith — donate, learn, and stay informed.",
        type: "website",
    },
};

export default async function HomePage() {
  const homepage = await getHomepageData();
  const supportBanner =
    homepage.banners.find((b) => b.id === "support-palestine-sudan") ??
    homepage.banners[0] ??
    null;
  const fundraiseBanner =
    homepage.banners.find((b) => b.id === "collections") ?? null;
  const storyBanner =
    homepage.banners.find((b) => b.id === "our-story") ?? null;

  return (
    <>
      <Header transparentAtTop />

      <main className="min-w-0 flex-1">
        <Hero
          title={homepage.hero.title}
          subtitle={homepage.hero.subtitle}
          ctaText={homepage.hero.ctaText}
          ctaHref={homepage.hero.ctaHref}
          secondaryCtaText={homepage.hero.secondaryCtaText}
          secondaryCtaHref={homepage.hero.secondaryCtaHref}
          backgroundImage={homepage.hero.backgroundImage}
        />

        <Stats stats={homepage.stats} />

        <EmergencyBar
          featured={mockEmergencyFeatured}
          secondaryAppeals={mockEmergencySecondaryAppeals}
          secondarySectionTitle="Support current emergency appeals"
        />

        <section className="section bg-purity-white">
          <div className="container-custom">
            <SectionHeader
              title="Latest updates"
              subtitle="News, guides, and stories from our teams and partners."
              viewAllHref="/blog"
              viewAllText="View all articles"
            />
            <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8">
              {homepage.posts.map((blog) => (
                <BlogCard key={blog.id} {...blog} />
              ))}
            </div>
          </div>
        </section>

        {supportBanner ? (
          <Banner
            title={supportBanner.title}
            description={supportBanner.description}
            ctaText={supportBanner.ctaText}
            ctaHref={supportBanner.ctaHref}
            imageUrl={supportBanner.imageUrl}
            variant={supportBanner.variant}
          />
        ) : null}

        <section className="section bg-purity-white">
          <div className="container-custom">
            <SectionHeader
              title="Where your giving goes"
              subtitle="Choose a focus area — we handle diligence, delivery, and reporting."
              viewAllHref="/programmes"
              viewAllText="All programmes"
            />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
              {homepage.impacts.length === 0 ? (
                <div className="sm:col-span-2 lg:col-span-3 rounded-sm border border-akhirah-teal/10 bg-mercy-mint/40 px-5 py-10 text-center">
                  <p className="text-base font-semibold text-akhirah-teal">Programme impact stories coming soon</p>
                  <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-account-black/70">
                    When published metrics are linked to programmes, highlights will appear here. You can still browse
                    programmes and campaigns below.
                  </p>
                </div>
              ) : (
                homepage.impacts.map((impact) => <ImpactCard key={impact.id} {...impact} />)
              )}
            </div>
          </div>
        </section>

        <section className="section bg-mercy-mint border-y border-akhirah-teal/10">
          <div className="container-custom">
            <SectionHeader
              title="Upcoming events"
              subtitle="Meet the team, learn about Zakat, or volunteer for a distribution day."
              viewAllHref="/events"
              viewAllText="See all events"
              surface="mint"
            />
            <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8">
              {homepage.events.map((event) => (
                <EventCard key={event.id} {...event} />
              ))}
            </div>
          </div>
        </section>

        {fundraiseBanner ? (
          <Banner
            title={fundraiseBanner.title}
            description={fundraiseBanner.description}
            ctaText={fundraiseBanner.ctaText}
            ctaHref={fundraiseBanner.ctaHref}
            imageUrl={fundraiseBanner.imageUrl}
            variant={fundraiseBanner.variant}
          />
        ) : null}

        <section className="section bg-purity-white">
          <div className="container-custom">
            <SectionHeader
              title="Active appeals"
              subtitle="Help us close the gap on programmes that are live right now."
              viewAllHref="/campaigns"
              viewAllText="View all campaigns"
            />
            <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8">
              {homepage.campaigns.map((campaign) => (
                <CampaignCard key={campaign.id} {...campaign} />
              ))}
            </div>
          </div>
        </section>

        <TrustSection
          title="Why donors trust us"
          subtitle="Transparency, partnership, and care for every person we serve."
          items={mockTrustItems}
        />

        <GlobalReach
          title="Global reach, local delivery"
          subtitle="Programmes shaped with communities — not for them alone."
        />

        {storyBanner ? (
          <Banner
            title={storyBanner.title}
            description={storyBanner.description}
            ctaText={storyBanner.ctaText}
            ctaHref={storyBanner.ctaHref}
            imageUrl={storyBanner.imageUrl}
            variant={storyBanner.variant}
          />
        ) : null}
      </main>

      <Footer />
    </>
  );
}
