import type { Metadata } from "next";
import ComingSoonDetail from "../../ComingSoonDetail";

export const metadata: Metadata = {
    title: "Campaign | My Akhirah Account",
};

type Props = { params: Promise<{ slug: string }> };

export default async function CampaignDetailPage({ params }: Props) {
    const { slug } = await params;
    return (
        <ComingSoonDetail kind="Campaign" slug={slug} listHref="/campaigns" listLabel="All campaigns" />
    );
}
