import type { Metadata } from "next";
import Link from "next/link";
import PublicPageBodySection from "@/components/layout/PublicPageBodySection";
import PublicPageCtaFooter from "@/components/layout/PublicPageCtaFooter";
import PublicPageIntro from "@/components/layout/PublicPageIntro";

export const metadata: Metadata = {
    title: "Programmes | My Akhirah Account",
    description: "Long-running programme areas — water, food, health, education, and more.",
};

const essentials = [
    {
        title: "Water & sanitation",
        href: "/programmes/water",
        body: "Wells, hygiene training, and safe water for whole villages.",
    },
    {
        title: "Food security",
        href: "/programmes/food",
        body: "Hot meals, parcels, and agricultural support where hunger bites hardest.",
    },
    {
        title: "Health & clinics",
        href: "/programmes/health",
        body: "Mobile clinics, vaccines, and maternal health services.",
    },
];

const recovery = [
    {
        title: "Education",
        href: "/programmes/education",
        body: "Schools, supplies, and scholarships so children keep learning.",
    },
    {
        title: "Shelter & recovery",
        href: "/programmes/shelter",
        body: "Temporary shelter, repairs, and cash assistance after emergencies.",
    },
    {
        title: "Livelihoods",
        href: "/programmes/livelihoods",
        body: "Skills training, tools, and small grants to rebuild income.",
    },
];

function ProgrammeGroup({
    heading,
    subtitle,
    items,
}: {
    heading: string;
    subtitle: string;
    items: { title: string; href: string; body: string }[];
}) {
    return (
        <div className="space-y-5">
            <div>
                <h2 className="text-xl sm:text-2xl font-bold text-akhirah-teal">{heading}</h2>
                <p className="mt-2 text-sm sm:text-base text-account-black/75">{subtitle}</p>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 list-none p-0 m-0">
                {items.map((item) => (
                    <li key={item.href}>
                        <Link
                            href={item.href}
                            className="block h-full rounded-sm border border-akhirah-teal/15 bg-purity-white p-4 sm:p-5 shadow-sm transition-colors hover:border-akhirah-teal/35 hover:bg-mercy-mint/30"
                        >
                            <h3 className="text-lg font-bold text-akhirah-teal mb-2">{item.title}</h3>
                            <p className="text-sm text-account-black/80 leading-relaxed">{item.body}</p>
                            <span className="mt-3 inline-block text-sm font-semibold text-akhirah-teal">
                                Open programme overview →
                            </span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default function ProgrammesPage() {
    return (
        <>
            <PublicPageIntro
                eyebrow="Programmes"
                title="Where long-term change happens"
                description="Programmes are how we organise sustained work with communities — alongside shorter emergency appeals you will find under Campaigns."
            />

            <PublicPageBodySection surface="white" spacious wide>
                <ProgrammeGroup
                    heading="Essential services"
                    subtitle="Foundational needs: clean water, food, and healthcare access."
                    items={essentials}
                />
            </PublicPageBodySection>

            <PublicPageBodySection surface="mint" spacious wide>
                <ProgrammeGroup
                    heading="Recovery, learning, and livelihoods"
                    subtitle="Education, rebuilding after crisis, and routes back to independence."
                    items={recovery}
                />
            </PublicPageBodySection>

            <PublicPageCtaFooter
                title="Support an appeal today"
                description="Programmes are funded through appeals and general giving — browse active campaigns or donate to the general route approved by your team."
                actions={[
                    { href: "/campaigns", label: "Browse campaigns", variant: "primary" },
                    { href: "/donate", label: "Go to donate", variant: "outlineOnDark" },
                    { href: "/faq", label: "Questions about giving", variant: "outlineOnDark" },
                ]}
            />
        </>
    );
}
