import type { Metadata } from "next";
import Link from "next/link";
import PublicPageIntro from "@/components/layout/PublicPageIntro";
import NewsletterSubscribeForm from "@/components/forms/NewsletterSubscribeForm";

export const metadata: Metadata = {
    title: "Newsletter | My Akhirah Account",
    description: "Occasional updates on impact, events, and ways to give with intention.",
};

export default function NewsletterPage() {
    return (
        <PublicPageIntro
            title="Newsletter"
            description="Occasional updates on impact, events, and ways to give with intention. We never sell your data — see our Privacy page for how we handle information."
        >
            <div className="mx-auto max-w-xl rounded-sm border border-akhirah-teal/15 bg-mercy-mint/30 p-5 sm:p-8 lg:mx-0 lg:max-w-lg">
                <h2 id="newsletter-signup" className="text-lg font-bold text-akhirah-teal sm:text-xl">
                    Sign up
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-account-black/75 sm:text-base">
                    One field, one tap — works on small screens and with screen readers.
                </p>
                <div className="mt-6">
                    <NewsletterSubscribeForm source="newsletter-page" layout="stacked" />
                </div>
            </div>
            <p className="mt-8 max-w-prose text-sm leading-relaxed text-account-black/65 sm:text-base">
                You can also subscribe from the{" "}
                <Link
                    href="/#site-newsletter"
                    className="font-semibold text-akhirah-teal underline underline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-eternal-gold"
                >
                    site footer
                </Link>{" "}
                on any page — the same secure endpoint is used.
            </p>
        </PublicPageIntro>
    );
}
