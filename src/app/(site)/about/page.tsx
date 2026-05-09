import type { Metadata } from "next";
import Link from "next/link";
import PublicPageBodySection from "@/components/layout/PublicPageBodySection";
import PublicPageCtaFooter from "@/components/layout/PublicPageCtaFooter";
import PublicPageIntro from "@/components/layout/PublicPageIntro";

export const metadata: Metadata = {
    title: "About us | My Akhirah Account",
    description: "Learn about My Akhirah Account — mission, values, and how we work with communities.",
};

export default function AboutPage() {
    return (
        <>
            <PublicPageIntro
                eyebrow="About us"
                title="Who we are"
                description="My Akhirah Account helps donors give with clarity — trusted appeals, transparent delivery, and impact you can follow across Africa and beyond."
            />

            <PublicPageBodySection surface="mint">
                <h2 className="text-xl sm:text-2xl font-bold text-akhirah-teal mb-4">Our mission</h2>
                <p className="text-account-black/85 text-base sm:text-lg leading-relaxed">
                    Charitable giving, community support, and growth rooted in faith. We partner with vetted local
                    organisations so every pound reaches people with dignity — not bureaucracy for its own sake.
                </p>
            </PublicPageBodySection>

            <PublicPageBodySection surface="white">
                <h2 className="text-xl sm:text-2xl font-bold text-akhirah-teal mb-4">What guides us</h2>
                <ul className="list-disc pl-5 space-y-3 text-account-black/85 text-base leading-relaxed">
                    <li>
                        <strong className="text-account-black">Transparency:</strong> donors deserve honest reporting
                        and clear appeals.
                    </li>
                    <li>
                        <strong className="text-account-black">Amanah:</strong> we steward Zakat and Sadaqah with care
                        and accountability.
                    </li>
                    <li>
                        <strong className="text-account-black">Partnership:</strong> programmes are shaped with
                        communities — not imposed on them.
                    </li>
                </ul>
            </PublicPageBodySection>

            <PublicPageBodySection surface="mint">
                <h2 className="text-xl sm:text-2xl font-bold text-akhirah-teal mb-4">How we deliver</h2>
                <p className="text-account-black/85 text-base leading-relaxed mb-4">
                    Long-running programmes cover water, food security, health, education, shelter, and livelihoods.
                    Emergency appeals respond when crisis hits. Governance copy, leadership bios, and partner stories
                    will expand here once approved — see <code className="text-sm">navigation-map.md</code> for owners.
                </p>
                <p className="text-account-black/85 text-base leading-relaxed">
                    Explore live appeals on{" "}
                    <Link href="/campaigns" className="font-semibold text-akhirah-teal underline underline-offset-2">
                        Campaigns
                    </Link>{" "}
                    or browse ongoing work on{" "}
                    <Link href="/programmes" className="font-semibold text-akhirah-teal underline underline-offset-2">
                        Programmes
                    </Link>
                    .
                </p>
            </PublicPageBodySection>

            <PublicPageCtaFooter
                title="Ready to give or learn more?"
                description="Choose an appeal, explore programme areas, or read common questions from donors."
                actions={[
                    { href: "/donate", label: "Donate", variant: "primary" },
                    { href: "/programmes", label: "View programmes", variant: "outlineOnDark" },
                    { href: "/faq", label: "Read FAQs", variant: "outlineOnDark" },
                ]}
            />
        </>
    );
}
