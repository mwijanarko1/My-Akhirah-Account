import Image from "next/image";
import Link from "next/link";
import { Footer, Header } from "@/components";
import { mockCampaigns } from "@/lib/mockData";

interface CampaignPageProps {
    params: Promise<{
        slug: string;
    }>;
}

const formatCurrency = (amount: number) =>
    new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP",
        minimumFractionDigits: 0,
    }).format(amount);

const getSlugFromHref = (href: string) => href.split("/").filter(Boolean).at(-1);

export default async function CampaignPage({ params }: CampaignPageProps) {
    const { slug } = await params;
    const campaign = mockCampaigns.find((item) => getSlugFromHref(item.href) === slug);

    if (!campaign) {
        return (
            <>
                <Header />

                <main className="min-w-0 flex-1 bg-purity-white">
                    <section className="section">
                        <div className="container-custom max-w-3xl">
                            <Link
                                href="/campaigns"
                                className="mb-6 inline-flex text-sm font-semibold text-akhirah-teal hover:text-akhirah-teal-dark"
                            >
                                Back to campaigns
                            </Link>
                            <div className="border border-akhirah-teal/10 bg-mercy-mint p-6 md:p-8">
                                <h1 className="mb-3 text-3xl font-bold text-account-black md:text-4xl">
                                    Campaign not found
                                </h1>
                                <p className="text-base leading-relaxed text-account-black/70">
                                    This campaign is not available. Please return to the campaign list to
                                    choose an active appeal.
                                </p>
                            </div>
                        </div>
                    </section>
                </main>

                <Footer />
            </>
        );
    }

    const progress = campaign.goal > 0 ? Math.min((campaign.raised / campaign.goal) * 100, 100) : 0;
    const roundedProgress = Math.round(progress);

    return (
        <>
            <Header />

            <main className="min-w-0 flex-1 bg-purity-white">
                <section className="section">
                    <div className="container-custom">
                        <Link
                            href="/campaigns"
                            className="mb-6 inline-flex text-sm font-semibold text-akhirah-teal hover:text-akhirah-teal-dark"
                        >
                            Back to campaigns
                        </Link>

                        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(20rem,0.72fr)] lg:gap-10">
                            <div>
                                <h1 className="mb-4 text-3xl font-bold text-account-black md:text-5xl">
                                    {campaign.title}
                                </h1>
                                <p className="max-w-3xl text-base leading-relaxed text-account-black/70 md:text-lg">
                                    {campaign.description}
                                </p>
                            </div>

                            <aside className="border border-akhirah-teal/10 bg-mercy-mint p-5 md:p-6">
                                <div className="mb-4 flex items-end justify-between gap-4">
                                    <div>
                                        <p className="text-sm font-semibold text-account-black/60">Raised</p>
                                        <p className="text-2xl font-bold text-akhirah-teal">
                                            {formatCurrency(campaign.raised)}
                                        </p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm font-semibold text-account-black/60">Goal</p>
                                        <p className="text-lg font-bold text-account-black">
                                            {formatCurrency(campaign.goal)}
                                        </p>
                                    </div>
                                </div>

                                <div className="mb-5" role="region" aria-label={`${campaign.title} fundraising progress`}>
                                    <div
                                        className="h-3 overflow-hidden rounded-sm border border-akhirah-teal/10 bg-purity-white"
                                        role="progressbar"
                                        aria-valuenow={roundedProgress}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                        aria-label={`${roundedProgress}% of goal reached`}
                                    >
                                        <div
                                            className="h-full rounded-sm bg-eternal-gold transition-all duration-500"
                                            style={{ width: `${progress}%` }}
                                        />
                                    </div>
                                    <p className="mt-2 text-sm font-semibold text-account-black/65">
                                        {roundedProgress}% funded
                                    </p>
                                </div>

                                <Link href="/donate" className="btn btn-primary w-full justify-center font-bold">
                                    Donate
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
            </main>

            <Footer />
        </>
    );
}
