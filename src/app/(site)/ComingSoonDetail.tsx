import Link from "next/link";
import PublicPageBodySection from "@/components/layout/PublicPageBodySection";
import PublicPageIntro from "@/components/layout/PublicPageIntro";

type ComingSoonDetailProps = {
    kind: "Blog post" | "Event" | "Campaign" | "Programme";
    slug: string;
    listHref: string;
    /** Verb-led label so users know where the link goes */
    listLabel: string;
};

function titleCaseSlug(slug: string) {
    return slug
        .split("-")
        .filter(Boolean)
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

export default function ComingSoonDetail({ kind, slug, listHref, listLabel }: ComingSoonDetailProps) {
    const readable = titleCaseSlug(slug) || slug;
    return (
        <>
            <PublicPageIntro
                title={`${kind}: ${readable}`}
                description="Full editorial content for this URL will publish from the content system. Until then, use the listing below so visitors never hit a dead end."
            />
            <PublicPageBodySection surface="mint">
                <p className="text-sm text-account-black/75 mb-6">
                    <span className="font-semibold text-account-black">Preview slug:</span>{" "}
                    <code className="rounded-sm bg-purity-white px-2 py-1 border border-akhirah-teal/15">{slug}</code>
                </p>
                <Link href={listHref} className="btn btn-secondary font-semibold">
                    {listLabel}
                </Link>
            </PublicPageBodySection>
        </>
    );
}
