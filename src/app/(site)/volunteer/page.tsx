import type { Metadata } from "next";
import PublicPageIntro from "@/components/layout/PublicPageIntro";
import VolunteerForm from "@/components/forms/VolunteerForm";

export const metadata: Metadata = {
    title: "Volunteer | My Akhirah Account",
    description: "Apply to volunteer with My Akhirah Account — distributions, events, and remote skills support.",
};

export default function VolunteerPage() {
    return (
        <PublicPageIntro
            title="Volunteer"
            description="Share your skills, locality, or availability — we’ll respond if there’s a good fit across distributions, mentoring, storytelling, or operational support."
        >
            <ul className="list-disc pl-5 space-y-2 text-account-black/85 mb-8">
                <li>Distribution and packing days</li>
                <li>Community events and outreach</li>
                <li>Remote skills (design, translation, comms)</li>
            </ul>
            <VolunteerForm />
        </PublicPageIntro>
    );
}
