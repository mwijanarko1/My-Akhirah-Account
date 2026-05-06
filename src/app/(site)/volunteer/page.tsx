import type { Metadata } from "next";
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

            <PublicPageBodySection surface="mint">
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

            <PublicPageBodySection surface="white">
                <h2 className="text-xl sm:text-2xl font-bold text-akhirah-teal mb-3">Applications</h2>
                <p className="text-account-black/80 leading-relaxed">
                    Field grouping and clearer confirmation messaging arrive in Week 3 — the API route{" "}
                    <code className="text-sm">/api/volunteer</code> is already wired for submissions once the UI lands.
                </p>
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
