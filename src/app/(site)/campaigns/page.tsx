import type { Metadata } from "next";
import { CampaignCard } from "@/components";
import PublicPageCtaFooter from "@/components/layout/PublicPageCtaFooter";
import { mockCampaigns } from "@/lib/mockData";

export const metadata: Metadata = {
    title: "Campaigns | My Akhirah Account",
    description:
        "Support active My Akhirah Account appeals funding urgent relief, recovery, and care.",
};

export default function CampaignsPage() {
    return (
        <>
            <section className="section bg-purity-white border-b border-akhirah-teal/10">
                <div className="container-custom">
                    <div className="mb-8 max-w-3xl md:mb-10">
                        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-akhirah-teal">
                            Campaigns
                        </p>
                        <h1 className="mb-4 text-3xl font-bold text-akhirah-teal md:text-5xl text-balance">
                            Support active appeals
                        </h1>
                        <p className="text-base leading-relaxed text-account-black/75 md:text-lg">
                            Choose a live campaign and help fund urgent relief, recovery, and care for communities who
                            need support now.
                        </p>
                    </div>

                    {mockCampaigns.length > 0 ? (
                        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8">
                            {mockCampaigns.map((campaign) => (
                                <CampaignCard key={campaign.id} {...campaign} />
                            ))}
                        </div>
                    ) : (
                        <div className="border border-akhirah-teal/10 bg-mercy-mint p-6 text-center md:p-8">
                            <h2 className="mb-2 text-xl font-bold text-account-black">
                                No campaigns are live right now
                            </h2>
                            <p className="mx-auto max-w-xl text-sm leading-relaxed text-account-black/70 md:text-base">
                                Please check back soon for new appeals and ways to give.
                            </p>
                        </div>
                    )}
                </div>
            </section>

            <PublicPageCtaFooter
                title="Prefer sustained giving?"
                description="Programmes fund longer-term change alongside emergency appeals — browse focus areas or read donor FAQs."
                actions={[
                    { href: "/programmes", label: "View programmes", variant: "outlineOnDark" },
                    { href: "/faq", label: "Donor FAQs", variant: "outlineOnDark" },
                    { href: "/donate", label: "Donate", variant: "primary" },
                ]}
            />
        </>
    );
}
