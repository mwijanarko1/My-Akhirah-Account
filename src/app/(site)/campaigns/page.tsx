import type { Metadata } from "next";
import Link from "next/link";
import PublicPageIntro from "@/components/layout/PublicPageIntro";

export const metadata: Metadata = {
    title: "Campaigns | My Akhirah Account",
    description: "Active appeals and fundraising campaigns.",
};

export default function CampaignsPage() {
    return (
        <PublicPageIntro
            title="Campaigns & appeals"
            description='Choose a live appeal to support. Detailed campaign pages are powered by our content system — browse the homepage "Active appeals" section for the latest entries.'
        >
            <p className="mb-6 text-account-black/80">
                When you are ready to give, your donation flow is handled securely through our checkout (see Mikhail
                for test vs production behaviour).
            </p>
            <Link href="/" className="btn btn-primary font-bold">
                Back to homepage
            </Link>
        </PublicPageIntro>
    );
}
