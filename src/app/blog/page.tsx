import {
  Header,
  Footer,
  BlogCard,
  SectionHeader,
  PageHero,
} from "@/components";
import { buildPageMetadata } from "@/lib/metadata";
import { listPublishedBlogPosts } from "@/lib/server/content";

export const metadata = buildPageMetadata({
  title: "Blog",
  description:
    "Latest news, guides, and impact stories from My Akhirah Account — charitable giving, community support, and spiritual growth.",
});

export default async function BlogPage() {
  const posts = await listPublishedBlogPosts();

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
            <SectionHeader
              title="Latest articles"
              subtitle="Practical guidance, field updates, and community voices."
            />

            {posts.length === 0 ? (
              <div
                className="rounded-sm border border-dashed border-akhirah-teal/20 bg-mercy-mint/40 px-6 py-16 text-center"
                role="status"
              >
                <p className="text-account-black/70">
                  No articles yet. Please check back soon.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8">
                {posts.map((post) => (
                  <BlogCard key={String(post.id)} {...post} />
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
