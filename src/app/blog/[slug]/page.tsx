import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Header, Footer, PageHero } from "@/components";
import MarkdownArticleBody from "@/components/article/MarkdownArticleBody";
import {
  buildPageMetadata,
  DEFAULT_DESCRIPTION,
} from "@/lib/metadata";
import { getBlogPostBySlug } from "@/lib/server/content";

type Props = {
  params: Promise<{ slug: string }>;
};

function categoryName(post: Awaited<ReturnType<typeof getBlogPostBySlug>>): string | null {
  if (!post || !("category" in post) || !post.category) {
    return null;
  }
  const c = post.category as { name?: string };
  return c.name ?? null;
}

function publishedLabel(post: Awaited<ReturnType<typeof getBlogPostBySlug>>): string | null {
  if (!post || !("publishedAt" in post) || post.publishedAt == null) {
    return null;
  }
  return new Date(post.publishedAt).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) {
    return buildPageMetadata({
      title: "Article",
      description: DEFAULT_DESCRIPTION,
    });
  }
  return buildPageMetadata({
    title: post.title,
    description: post.excerpt,
  });
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const cat = categoryName(post);
  const dateStr = publishedLabel(post);

  return (
    <>
      <Header />
      <main className="min-w-0 flex-1">
        <PageHero title={post.title} />

        <article className="section bg-purity-white">
          <div className="container-custom max-w-full">
            <div className="mx-auto max-w-3xl">
              {dateStr || cat ? (
                <p className="text-sm font-medium uppercase tracking-wide text-account-black/55">
                  {dateStr && post.publishedAt != null ? (
                    <time dateTime={new Date(post.publishedAt).toISOString()}>
                      {dateStr}
                    </time>
                  ) : null}
                  {dateStr && cat ? " · " : null}
                  {cat ? <span>{cat}</span> : null}
                </p>
              ) : null}

              <p className="mt-6 text-pretty text-lg leading-relaxed text-account-black/80">
                {post.excerpt}
              </p>

              <div className="relative mt-8 aspect-video w-full overflow-hidden rounded-sm border border-akhirah-teal/10">
                <Image
                  src={post.imageUrl}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 768px"
                  priority
                />
              </div>

              <h2 className="mt-10 text-xl font-bold text-akhirah-teal sm:text-2xl">
                Article
              </h2>
              <div className="mt-4">
                <MarkdownArticleBody markdown={post.bodyMarkdown} />
              </div>

              <p className="mt-10">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-akhirah-teal underline-offset-4 hover:text-eternal-gold hover:underline"
                >
                  ← Back to blog
                </Link>
              </p>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
