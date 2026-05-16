import type { Metadata } from "next";
import VolunteerForm from "@/components/forms/VolunteerForm";
import PublicPageBodySection from "@/components/layout/PublicPageBodySection";
import PublicPageCtaFooter from "@/components/layout/PublicPageCtaFooter";
import PublicPageIntro from "@/components/layout/PublicPageIntro";

export const metadata: Metadata = {
    title: "Volunteer | My Akhirah Account",
    description: "Volunteer with My Akhirah Account — events, distributions, and remote help.",
};

export default function VolunteerPage() {
    return (
        <>
            <PublicPageIntro
                eyebrow="Volunteer"
                title="Volunteer with us"
                description="Warehouse shifts, community events, and remote skills — volunteers carry amanah in every distribution."
            />

            <PublicPageBodySection surface="mint" spacious>
                <h2 className="text-xl sm:text-2xl font-bold text-akhirah-teal mb-4">Ways to help</h2>
                <ul className="list-disc pl-5 space-y-3 text-account-black/85 leading-relaxed">
                    <li>
                        <strong className="text-account-black">On-site logistics:</strong> packing days and appeals prep.
                    </li>
                    <li>
                        <strong className="text-account-black">Community events:</strong> outreach booths and greeting
                        donors.
                    </li>
                    <li>
                        <strong className="text-account-black">Remote support:</strong> design, translation, comms, and
                        admin tasks where screened volunteers fit best.
                    </li>
                </ul>
            </PublicPageBodySection>

            <PublicPageBodySection surface="white" spacious id="volunteer-application">
                <h2 className="text-xl sm:text-2xl font-bold text-akhirah-teal mb-3">Apply to volunteer</h2>
                <p className="text-account-black/80 leading-relaxed mb-8 max-w-2xl">
                    Tell us how you&apos;d like to help and when you&apos;re usually free. We&apos;ll email you when there&apos;s a good match
                    — please answer honestly so we can place you safely.
                </p>
                <div className="rounded-sm border border-akhirah-teal/15 bg-mercy-mint/25 p-5 sm:p-8 md:p-10">
                    <VolunteerForm />
                </div>
            </PublicPageBodySection>

            <PublicPageCtaFooter
                title="Talk to us before you apply"
                description="Questions about time commitments or safeguarding — reach the team directly."
                actions={[
                    {
                        href: "/contact",
                        label: "Message the contact page",
                        variant: "outlineOnDark",
                    },
                    { href: "/faq#volunteering", label: "Volunteering FAQs", variant: "outlineOnDark" },
                    { href: "/events", label: "See upcoming events", variant: "primary" },
                ]}
            />
        </>
    );
}
