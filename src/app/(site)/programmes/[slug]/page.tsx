import type { Metadata } from "next";
import ComingSoonDetail from "../../ComingSoonDetail";

export const metadata: Metadata = {
    title: "Programme | My Akhirah Account",
    description: "Programme focus area — long-form content and impact reporting will appear here when published.",
};

type Props = { params: Promise<{ slug: string }> };

export default async function ProgrammeDetailPage({ params }: Props) {
    const { slug } = await params;
    return (
        <ComingSoonDetail
            kind="Programme"
            slug={slug}
            listHref="/programmes"
            listLabel="View programmes overview"
        />
    );
}
