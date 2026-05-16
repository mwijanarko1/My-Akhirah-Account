import { Header, Footer } from "@/components";
import {
  PageHeroSkeleton,
  ArticleDetailSkeleton,
} from "@/components/skeletons/ContentSkeletons";

export default function EventDetailLoading() {
  return (
    <>
      <Header />
      <main className="min-w-0 flex-1">
        <PageHeroSkeleton />
        <div className="bg-purity-white">
          <ArticleDetailSkeleton />
        </div>
      </main>
      <Footer />
    </>
  );
}
