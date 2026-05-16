import {
  Header,
  Footer,
  EventCard,
  SectionHeader,
  PageHero,
} from "@/components";
import { buildPageMetadata } from "@/lib/metadata";
import { listPublishedEvents } from "@/lib/server/content";

export const metadata = buildPageMetadata({
  title: "Events",
  description:
    "Workshops, community days, and fundraisers from My Akhirah Account — charitable giving, community support, and spiritual growth.",
});

export default async function EventsPage() {
  const events = await listPublishedEvents();
  const upcoming = events.filter((e) => e.isUpcoming);
  const past = events.filter((e) => !e.isUpcoming);

  return (
    <>
      <Header />
      <main className="min-w-0 flex-1">
        <PageHero
          title="Events"
          subtitle="Meet the team, learn about giving, or volunteer for a distribution day."
        />

        <section className="section bg-purity-white">
          <div className="container-custom max-w-full">
            {events.length === 0 ? (
              <div
                className="rounded-sm border border-dashed border-akhirah-teal/20 bg-mercy-mint/40 px-6 py-16 text-center"
                role="status"
              >
                <p className="text-account-black/70">
                  No events published yet. Please check back soon.
                </p>
              </div>
            ) : (
              <>
                {upcoming.length > 0 ? (
                  <>
                    <SectionHeader
                      title="Upcoming events"
                      subtitle="Save the date — registration details are on each event page."
                    />
                    <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8">
                      {upcoming.map((event) => (
                        <EventCard key={String(event.id)} {...event} />
                      ))}
                    </div>
                  </>
                ) : null}

                {past.length > 0 ? (
                  <div
                    className={
                      upcoming.length > 0
                        ? "mt-14 sm:mt-16 md:mt-20"
                        : undefined
                    }
                  >
                    <SectionHeader
                      title="Past events"
                      subtitle="Thank you to everyone who joined us — summaries stay available below."
                    />
                    <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8">
                      {past.map((event) => (
                        <EventCard key={String(event.id)} {...event} />
                      ))}
                    </div>
                  </div>
                ) : null}
              </>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
