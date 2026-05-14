import type { Metadata } from "next";
import Link from "next/link";
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
            <div className="grid gap-10 lg:grid-cols-[minmax(0,18rem)_minmax(0,1fr)] lg:items-start lg:gap-12 xl:gap-14">
                <aside
                    className="order-2 space-y-4 rounded-sm border border-akhirah-teal/12 bg-mercy-mint/35 p-5 sm:p-6 lg:order-1 lg:sticky lg:top-28"
                    aria-labelledby="vol-aside-heading"
                >
                    <h2 id="vol-aside-heading" className="text-base font-bold text-akhirah-teal">
                        Ways to help
                    </h2>
                    <ul className="list-disc space-y-2.5 pl-5 text-sm leading-relaxed text-account-black/85 marker:text-akhirah-teal sm:text-base">
                        <li>Distribution and packing days</li>
                        <li>Community events and outreach</li>
                        <li>Remote skills (design, translation, comms)</li>
                    </ul>
                    <p className="text-xs leading-relaxed text-account-black/65">
                        The form works with keyboard only: Tab through fields, Enter on buttons, and use the error list
                        links to jump to a field.
                    </p>
                </aside>
                <div className="order-1 min-w-0 lg:order-2">
                    <VolunteerForm />
                </div>
            </div>
            <div className="mt-10 border-t border-akhirah-teal/10 pt-8">
                <Link
                    href="/contact"
                    className="inline-flex min-h-11 items-center text-sm font-semibold text-akhirah-teal underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-eternal-gold"
                >
                    General enquiry instead → Contact
                </Link>
            </div>
        </PublicPageIntro>
    );
}
