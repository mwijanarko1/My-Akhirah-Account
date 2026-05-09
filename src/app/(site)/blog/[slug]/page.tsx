import type { Metadata } from "next";
import ComingSoonDetail from "../../ComingSoonDetail";

export const metadata: Metadata = {
    title: "Article | My Akhirah Account",
    description: "Read updates and stories from My Akhirah Account — full articles publish here when live in the CMS.",
};

type Props = { params: Promise<{ slug: string }> };

export default async function BlogArticlePage({ params }: Props) {
    const { slug } = await params;
    return (
        <ComingSoonDetail kind="Blog post" slug={slug} listHref="/blog" listLabel="View all articles — Blog" />
    );
}
