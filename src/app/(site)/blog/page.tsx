import type { Metadata } from "next";
import Link from "next/link";
import PublicPageBodySection from "@/components/layout/PublicPageBodySection";
import PublicPageCtaFooter from "@/components/layout/PublicPageCtaFooter";
import PublicPageIntro from "@/components/layout/PublicPageIntro";

export const metadata: Metadata = {
    title: "Blog | My Akhirah Account",
    description: "News, guides, and stories from our teams and partners.",
};

export default function BlogPage() {
    return (
        <>
            <PublicPageIntro
                eyebrow="Blog"
                title="Blog"
                description="Guides on Zakat and Sadaqah, field updates, and volunteer stories. Full articles open from the homepage feed once published."
            />

            <PublicPageBodySection surface="mint">
                <h2 className="text-xl sm:text-2xl font-bold text-akhirah-teal mb-3">Latest articles</h2>
                <p className="text-account-black/80 leading-relaxed mb-6">
                    The freshest posts appear first on the homepage under Latest updates — open any card to read the full
                    story when live content exists for that slug.
                </p>
                <Link href="/" className="btn btn-primary font-bold w-full sm:w-auto justify-center">
                    Go to homepage for latest articles
                </Link>
            </PublicPageBodySection>

            <PublicPageCtaFooter
                title="Explore more"
                description="Stay informed before long reads publish — subscribe or browse FAQs."
                actions={[
                    { href: "/newsletter", label: "Subscribe to newsletter", variant: "outlineOnDark" },
                    { href: "/faq", label: "Open FAQ", variant: "outlineOnDark" },
                    { href: "/events", label: "See upcoming events", variant: "primary" },
                ]}
            />
        </>
    );
}
