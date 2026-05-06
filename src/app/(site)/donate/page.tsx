import type { Metadata } from "next";
import Link from "next/link";
import PublicPageBodySection from "@/components/layout/PublicPageBodySection";
import PublicPageCtaFooter from "@/components/layout/PublicPageCtaFooter";
import PublicPageIntro from "@/components/layout/PublicPageIntro";

export const metadata: Metadata = {
    title: "Donate | My Akhirah Account",
    description: "Support appeals and programmes through My Akhirah Account.",
};

type Props = {
    searchParams: Promise<{ cancelled?: string }>;
};

export default async function DonatePage({ searchParams }: Props) {
    const sp = await searchParams;
    const cancelled = sp.cancelled === "true";

    return (
        <>
            <PublicPageIntro
                eyebrow="Give"
                title="Donate"
                description="Choose an appeal or programme, then complete secure checkout. Hosted checkout behaviour is owned by Mikhail — use sandbox credentials until production testing is approved."
            />

            <PublicPageBodySection surface="mint">
                {cancelled ? (
                    <p
                        className="mb-8 rounded-sm border border-akhirah-teal/25 bg-purity-white px-4 py-3 text-sm text-account-black"
                        role="status"
                    >
                        Checkout was cancelled — no payment was taken. Pick an appeal below or return when ready.
                    </p>
                ) : null}
                <h2 className="text-xl sm:text-2xl font-bold text-akhirah-teal mb-4">Choose where to give</h2>
                <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
                    <Link href="/campaigns" className="btn btn-primary font-bold text-center">
                        Browse active campaigns
                    </Link>
                    <Link href="/programmes" className="btn btn-secondary font-semibold text-center">
                        Learn about programmes
                    </Link>
                </div>
                <p className="mt-8 text-sm text-account-black/65 leading-relaxed">
                    Need reassurance before paying? Read donor FAQs or reach the team — payment flows continue to evolve
                    alongside Mikhail&apos;s payments stream.
                </p>
            </PublicPageBodySection>

            <PublicPageCtaFooter
                title="Questions before you donate?"
                actions={[
                    { href: "/faq", label: "Open donor FAQs", variant: "outlineOnDark" },
                    { href: "/contact", label: "Contact us", variant: "outlineOnDark" },
                    { href: "/campaigns", label: "Return to campaigns", variant: "primary" },
                ]}
            />
        </>
    );
}
