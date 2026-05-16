import type { Metadata } from "next";
import PublicPageBodySection from "@/components/layout/PublicPageBodySection";
import PublicPageCtaFooter from "@/components/layout/PublicPageCtaFooter";
import PublicPageIntro from "@/components/layout/PublicPageIntro";

export const metadata: Metadata = {
    title: "Terms of use | My Akhirah Account",
    description: "Terms of use for the My Akhirah Account website.",
};

export default function TermsPage() {
    return (
        <>
            <PublicPageIntro
                eyebrow="Legal"
                title="Terms of use"
                description="Placeholder structure until legal copy is supplied. Annual reports may later live here or on a dedicated downloads page — see navigation-map.md."
            />

            <PublicPageBodySection surface="white" spacious>
                <section className="space-y-4">
                    <h2 className="text-xl sm:text-2xl font-bold text-akhirah-teal">Using this website</h2>
                    <p className="text-account-black/85 leading-relaxed">
                        Acceptable use, permitted linking, account behaviour (if introduced), and limitations of liability
                        in plain language — <strong className="text-account-black">TBD</strong>.
                    </p>
                    <h3 className="text-base sm:text-lg font-bold text-akhirah-teal pt-2">Intellectual property</h3>
                    <p className="text-sm sm:text-base text-account-black/80 leading-relaxed">
                        Logo, imagery, and content reuse rules — <strong className="text-account-black">TBD</strong>.
                    </p>
                </section>

                <section className="space-y-4 pt-10 border-t border-akhirah-teal/10">
                    <h2 className="text-xl sm:text-2xl font-bold text-akhirah-teal">Donations</h2>
                    <p className="text-account-black/85 leading-relaxed">
                        How donations are processed, when receipts are issued, refunds or chargebacks, and reference to
                        payment-provider terms — <strong className="text-account-black">TBD</strong>.
                    </p>
                    <h3 className="text-base sm:text-lg font-bold text-akhirah-teal pt-2">Campaign descriptions</h3>
                    <p className="text-sm sm:text-base text-account-black/80 leading-relaxed">
                        How appeals are described and what happens if targets change —{" "}
                        <strong className="text-account-black">TBD</strong>.
                    </p>
                </section>

                <section className="space-y-4 pt-10 border-t border-akhirah-teal/10">
                    <h2 className="text-xl sm:text-2xl font-bold text-akhirah-teal">Liability & governing law</h2>
                    <p className="text-account-black/85 leading-relaxed">
                        Jurisdiction, dispute resolution, and limitation clauses —{" "}
                        <strong className="text-account-black">TBD</strong>.
                    </p>
                </section>
            </PublicPageBodySection>

            <PublicPageCtaFooter
                title="Related policies"
                description="Privacy and FAQs cover donor data and common questions while legal wording is drafted."
                actions={[
                    { href: "/privacy", label: "Privacy policy", variant: "outlineOnDark" },
                    { href: "/faq", label: "FAQ", variant: "outlineOnDark" },
                    { href: "/contact", label: "Contact us", variant: "outlineOnDark" },
                ]}
            />
        </>
    );
}
