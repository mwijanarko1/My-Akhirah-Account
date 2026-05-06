import type { Metadata } from "next";
import PublicPageBodySection from "@/components/layout/PublicPageBodySection";
import PublicPageCtaFooter from "@/components/layout/PublicPageCtaFooter";
import PublicPageIntro from "@/components/layout/PublicPageIntro";

export const metadata: Metadata = {
    title: "Privacy policy | My Akhirah Account",
    description: "How we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
    return (
        <>
            <PublicPageIntro
                eyebrow="Legal"
                title="Privacy policy"
                description="Placeholder structure until legal copy is supplied. Final wording is owned by Mikhail / legal — see navigation-map.md for required topics."
            />

            <PublicPageBodySection surface="white" spacious>
                <section className="space-y-4">
                    <h2 className="text-xl sm:text-2xl font-bold text-akhirah-teal">Who we are</h2>
                    <p className="text-account-black/85 leading-relaxed">
                        Controller name, charity registration number, and registered address —{" "}
                        <strong className="text-account-black">to be confirmed</strong>.
                    </p>
                    <h3 className="text-base sm:text-lg font-bold text-akhirah-teal pt-2">Data protection contact</h3>
                    <p className="text-sm sm:text-base text-account-black/80 leading-relaxed">
                        Dedicated privacy inbox or officer — <strong className="text-account-black">TBD</strong>.
                    </p>
                </section>

                <section className="space-y-4 pt-10 border-t border-akhirah-teal/10">
                    <h2 className="text-xl sm:text-2xl font-bold text-akhirah-teal">What we collect</h2>
                    <p className="text-account-black/85 leading-relaxed">
                        Typical categories include donor contact details, gift history, communication preferences, and
                        limited technical data from the website — exact lists await legal review.
                    </p>
                    <h3 className="text-base sm:text-lg font-bold text-akhirah-teal pt-2">Payments</h3>
                    <p className="text-sm sm:text-base text-account-black/80 leading-relaxed">
                        Card and payment processing is handled by our payment provider — we receive confirmation and
                        metadata needed for receipts, not full card numbers —{" "}
                        <strong className="text-account-black">TBD</strong> detail for privacy notice.
                    </p>
                    <h3 className="text-base sm:text-lg font-bold text-akhirah-teal pt-2">Cookies & analytics</h3>
                    <p className="text-sm sm:text-base text-account-black/80 leading-relaxed">
                        Cookie categories and analytics tools — <strong className="text-account-black">TBD</strong>.
                    </p>
                </section>

                <section className="space-y-4 pt-10 border-t border-akhirah-teal/10">
                    <h2 className="text-xl sm:text-2xl font-bold text-akhirah-teal">Your rights</h2>
                    <p className="text-account-black/85 leading-relaxed">
                        Depending on where you live you may have rights to access, correct, delete, or object to
                        certain processing — <strong className="text-account-black">TBD</strong> jurisdiction-specific
                        wording.
                    </p>
                    <h3 className="text-base sm:text-lg font-bold text-akhirah-teal pt-2">Retention</h3>
                    <p className="text-sm sm:text-base text-account-black/80 leading-relaxed">
                        How long donor records are kept — <strong className="text-account-black">TBD</strong>.
                    </p>
                </section>
            </PublicPageBodySection>

            <PublicPageCtaFooter
                title="Questions before legal copy lands?"
                description="Use the FAQ for donor-facing topics, or contact the team for urgent concerns."
                actions={[
                    { href: "/faq", label: "Read FAQs", variant: "outlineOnDark" },
                    { href: "/contact", label: "Contact us", variant: "outlineOnDark" },
                    { href: "/terms", label: "Terms of use", variant: "outlineOnDark" },
                ]}
            />
        </>
    );
}
