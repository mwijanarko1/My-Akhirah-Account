import { Header, Footer, PageHero } from "@/components";
import { EventGridSkeleton } from "@/components/skeletons/ContentSkeletons";

export default function EventsLoading() {
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
            <div className="mb-8 md:mb-10">
              <div className="h-8 max-w-md animate-pulse rounded-sm bg-akhirah-teal/15 sm:h-9 md:h-10" />
              <div className="mt-3 h-4 max-w-xl animate-pulse rounded-sm bg-account-black/10" />
            </div>
            <EventGridSkeleton count={6} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
