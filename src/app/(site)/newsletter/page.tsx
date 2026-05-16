import type { Metadata } from "next";
import Link from "next/link";
import NewsletterSubscribeForm from "@/components/forms/NewsletterSubscribeForm";
import PublicPageBodySection from "@/components/layout/PublicPageBodySection";
import PublicPageCtaFooter from "@/components/layout/PublicPageCtaFooter";
import PublicPageIntro from "@/components/layout/PublicPageIntro";

export const metadata: Metadata = {
    title: "Newsletter | My Akhirah Account",
    description: "Occasional updates on impact, events, and ways to give with intention.",
};

export default function NewsletterPage() {
    return (
        <>
            <PublicPageIntro
                eyebrow="Newsletter"
                title="Stay in touch"
                description="Occasional updates on impact, events, and ways to give with intention."
            />

            <PublicPageBodySection surface="white">
                <p className="text-account-black/80 mb-8 leading-relaxed">
                    We never sell your data — read how we handle information in our{" "}
                    <Link href="/privacy" className="font-semibold text-akhirah-teal underline underline-offset-2">
                        Privacy policy
                    </Link>
                    .
                </p>
                <h2 className="text-xl font-bold text-akhirah-teal mb-4">Email signup</h2>
                <div className="rounded-sm border border-akhirah-teal/15 bg-mercy-mint/30 p-6 sm:p-8">
                    <NewsletterSubscribeForm source="newsletter-page" layout="stacked" />
                </div>
                <p className="mt-8 text-sm text-account-black/60">
                    Prefer not to use this page? Subscribe from the{" "}
                    <Link href="/#site-newsletter" className="font-semibold text-akhirah-teal underline underline-offset-2">
                        footer on any page
                    </Link>{" "}
                    — same endpoint.
                </p>
            </PublicPageBodySection>

            <PublicPageCtaFooter
                title="While you wait for the next email"
                description="Explore appeals or questions donors ask most often."
                actions={[
                    { href: "/campaigns", label: "Browse campaigns", variant: "primary" },
                    { href: "/faq", label: "Open FAQ", variant: "outlineOnDark" },
                ]}
            />
        </>
    );
}
