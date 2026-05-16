import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CampaignProgress from "@/components/campaigns/CampaignProgress";
import { mockCampaigns } from "@/lib/mockData";

interface CampaignPageProps {
    params: Promise<{
        slug: string;
    }>;
}

const getSlugFromHref = (href: string) => href.split("/").filter(Boolean).at(-1);

export async function generateMetadata({ params }: CampaignPageProps): Promise<Metadata> {
    const { slug } = await params;
    const campaign = mockCampaigns.find((item) => getSlugFromHref(item.href) === slug);
    if (!campaign) {
        return {
            title: "Campaign | My Akhirah Account",
            description: "This appeal is not available — browse active campaigns to give.",
        };
    }
    const description =
        campaign.description.length > 160 ? `${campaign.description.slice(0, 157)}…` : campaign.description;
    return {
        title: `${campaign.title} | My Akhirah Account`,
        description,
    };
}

export default async function CampaignPage({ params }: CampaignPageProps) {
    const { slug } = await params;
    const campaign = mockCampaigns.find((item) => getSlugFromHref(item.href) === slug);

    if (!campaign) {
        return (
            <>
                <section className="section">
                    <div className="container-custom max-w-3xl">
                        <Link
                            href="/campaigns"
                            className="mb-6 inline-flex text-sm font-semibold text-akhirah-teal hover:text-akhirah-teal-dark"
                        >
                            ← View all campaigns
                        </Link>
                        <div className="border border-akhirah-teal/10 bg-mercy-mint p-6 md:p-8">
                            <h1 className="mb-3 text-3xl font-bold text-account-black md:text-4xl">Campaign not found</h1>
                            <p className="text-base leading-relaxed text-account-black/70">
                                This campaign is not available. Please return to the campaign list to choose an active
                                appeal.
                            </p>
                        </div>
                    </div>
                </section>
            </>
        );
    }

    return (
        <>
            <section className="section">
                <div className="container-custom">
                    <Link
                        href="/campaigns"
                        className="mb-6 inline-flex text-sm font-semibold text-akhirah-teal hover:text-akhirah-teal-dark"
                    >
                        ← View all campaigns
                    </Link>

                    <div className="grid gap-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(20rem,0.72fr)] lg:gap-10">
                        <div>
                            <h1 className="mb-4 text-3xl font-bold text-account-black md:text-5xl">{campaign.title}</h1>
                            <p className="max-w-3xl text-base leading-relaxed text-account-black/70 md:text-lg">
                                {campaign.description}
                            </p>
                        </div>

                        <aside className="border border-akhirah-teal/10 bg-mercy-mint p-5 md:p-6">
                            <CampaignProgress
                                title={campaign.title}
                                raised={campaign.raised}
                                goal={campaign.goal}
                                variant="detail"
                                className="mb-5"
                            />

                            <Link href="/donate" className="btn btn-primary w-full justify-center font-bold">
                                Donate to this appeal
                            </Link>
                        </aside>
                    </div>

                    {campaign.imageUrl ? (
                        <div className="relative mt-8 aspect-[16/9] overflow-hidden border border-akhirah-teal/10 md:mt-10">
                            <Image
                                src={campaign.imageUrl}
                                alt=""
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 1120px"
                                priority
                            />
                        </div>
                    ) : null}
                </div>
            </section>
        </>
    );
}
