import type { Metadata } from "next";
import Link from "next/link";
import PublicPageBodySection from "@/components/layout/PublicPageBodySection";
import PublicPageCtaFooter from "@/components/layout/PublicPageCtaFooter";
import PublicPageIntro from "@/components/layout/PublicPageIntro";

export const metadata: Metadata = {
    title: "Events | My Akhirah Account",
    description: "Community events, clinics, and volunteer days.",
};

export default function EventsPage() {
    return (
        <>
            <PublicPageIntro
                eyebrow="Events"
                title="Events"
                description="Meet the team, join a Zakat clinic, or sign up for a distribution day. Live listings appear first on the homepage."
            />

            <PublicPageBodySection surface="mint">
                <h2 className="text-xl sm:text-2xl font-bold text-akhirah-teal mb-3">Upcoming dates</h2>
                <p className="text-account-black/80 leading-relaxed mb-6">
                    Scroll to the Upcoming events section on the homepage to see what's confirmed — each tile opens an
                    event detail page when content exists for that slug.
                </p>
                <Link href="/" className="btn btn-primary font-bold w-full sm:w-auto justify-center">
                    View upcoming events on homepage
                </Link>
            </PublicPageBodySection>

            <PublicPageCtaFooter
                title="Get involved between events"
                description="Volunteer remotely or in person, or subscribe for reminders."
                actions={[
                    { href: "/volunteer", label: "Volunteer with us", variant: "outlineOnDark" },
                    { href: "/newsletter", label: "Email newsletter signup", variant: "outlineOnDark" },
                    { href: "/contact", label: "Contact the team", variant: "primary" },
                ]}
            />
        </>
    );
}
