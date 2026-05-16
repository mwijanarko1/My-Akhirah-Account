import type { Metadata } from "next";
import Link from "next/link";
import PublicPageBodySection from "@/components/layout/PublicPageBodySection";
import PublicPageCtaFooter from "@/components/layout/PublicPageCtaFooter";
import PublicPageIntro from "@/components/layout/PublicPageIntro";

export const metadata: Metadata = {
    title: "Thank you | My Akhirah Account",
    description: "Your donation was received.",
};

type Props = {
    searchParams: Promise<{ ref?: string }>;
};

export default async function DonateSuccessPage({ searchParams }: Props) {
    const sp = await searchParams;
    const ref = sp.ref?.trim();

    return (
        <>
            <PublicPageIntro
                eyebrow="Thank you"
                title="Payment received"
                description="Your payment was submitted successfully. You will receive a confirmation by email when processing completes."
            />

            <PublicPageBodySection surface="mint">
                {ref ? (
                    <p className="mb-6 text-sm text-account-black/80">
                        Reference:{" "}
                        <code className="rounded-sm bg-purity-white px-2 py-1 text-account-black border border-akhirah-teal/15">
                            {ref}
                        </code>
                    </p>
                ) : null}
                <h2 className="text-xl font-bold text-akhirah-teal mb-4">What you can do next</h2>
                <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
                    <Link href="/" className="btn btn-primary font-bold text-center">
                        Return to homepage
                    </Link>
                    <Link href="/campaigns" className="btn btn-secondary font-semibold text-center">
                        Browse more campaigns
                    </Link>
                </div>
            </PublicPageBodySection>

            <PublicPageCtaFooter
                title="Stay connected"
                description="Receipt questions usually appear in our FAQs — subscribe if you want impact updates."
                actions={[
                    { href: "/faq", label: "Receipt & donation FAQs", variant: "outlineOnDark" },
                    { href: "/newsletter", label: "Newsletter signup", variant: "outlineOnDark" },
                ]}
            />
        </>
    );
}
