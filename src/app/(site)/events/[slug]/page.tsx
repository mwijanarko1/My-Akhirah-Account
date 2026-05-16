import type { Metadata } from "next";
import ComingSoonDetail from "../../ComingSoonDetail";

export const metadata: Metadata = {
    title: "Event | My Akhirah Account",
    description: "Event details and registration — full listings publish here when live in the CMS.",
};

type Props = { params: Promise<{ slug: string }> };

export default async function EventDetailPage({ params }: Props) {
    const { slug } = await params;
    return <ComingSoonDetail kind="Event" slug={slug} listHref="/events" listLabel="View events overview" />;
}
