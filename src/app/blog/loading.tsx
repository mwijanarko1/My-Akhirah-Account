import { Header, Footer, PageHero } from "@/components";
import { BlogGridSkeleton } from "@/components/skeletons/ContentSkeletons";

export default function BlogLoading() {
  return (
    <>
      <Header />
      <main className="min-w-0 flex-1">
        <PageHero
          title="Blog"
          subtitle="News, guides, and stories from our teams and partners."
        />
        <section className="section bg-purity-white">
          <div className="container-custom max-w-full">
            <div className="mb-8 md:mb-10">
              <div className="h-8 max-w-sm animate-pulse rounded-sm bg-akhirah-teal/15 sm:h-9 md:h-10" />
              <div className="mt-3 h-4 max-w-xl animate-pulse rounded-sm bg-account-black/10" />
            </div>
            <BlogGridSkeleton count={6} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
