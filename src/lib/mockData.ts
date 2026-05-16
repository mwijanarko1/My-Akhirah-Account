// Mock data for the website — replace with Convex queries later

import type {
    EmergencyCardAppeal,
    EmergencyFeatured,
} from "@/components/sections/EmergencyBar";

const img = "/hero-bg.jpg";

export const mockStats = [
    { value: "£2.4M+", label: "Distributed in aid" },
    { value: "40+", label: "Active programmes" },
    { value: "120k+", label: "Lives touched" },
    { value: "15+", label: "Years of service" },
];

export const mockBlogs = [
    {
        id: "1",
        title: "Understanding Zakat: a practical guide for families",
        category: "Resources",
        excerpt: "How to calculate, allocate, and give with confidence this year.",
        imageUrl: img,
        href: "/blog/zakat-guide",
        date: "12 Mar 2026",
        datetime: "2026-03-12T12:00:00.000Z",
    },
    {
        id: "2",
        title: "From your community to theirs: where your Sadaqah travels",
        category: "Impact",
        excerpt: "A look at local collections and how they reach those in need.",
        imageUrl: img,
        href: "/blog/sadaqah-journey",
        date: "28 Feb 2026",
        datetime: "2026-02-28T12:00:00.000Z",
    },
    {
        id: "3",
        title: "Volunteering that fits your schedule",
        category: "Community",
        excerpt: "Evenings, weekends, or remote — ways to contribute your time.",
        imageUrl: img,
        href: "/blog/volunteering",
        date: "10 Feb 2026",
        datetime: "2026-02-10T12:00:00.000Z",
    },
];

/** Fallback article bodies when Convex is unavailable (keys = normalized slugs). */
export const mockBlogPostDetailsBySlug: Record<
    string,
    {
        slug: string;
        title: string;
        excerpt: string;
        bodyMarkdown: string;
        category: { name: string };
        imageUrl: string;
        href: string;
        publishedAt: number;
    }
> = {
    "zakat-guide": {
        slug: "zakat-guide",
        title: "Understanding Zakat: a practical guide for families",
        excerpt: "How to calculate, allocate, and give with confidence this year.",
        bodyMarkdown:
            "Zakat is a pillar of our faith and a practical discipline for the household. This guide walks through nisab, eligible wealth, and who can receive support.\n\nWe recommend agreeing a zakat day as a family, keeping simple records, and consulting a qualified scholar where your situation is nuanced. When you are ready, you can give through My Akhirah Account and we will apply diligence on delivery and reporting.",
        category: { name: "Resources" },
        imageUrl: img,
        href: "/blog/zakat-guide",
        publishedAt: Date.UTC(2026, 2, 12, 12, 0, 0),
    },
    "sadaqah-journey": {
        slug: "sadaqah-journey",
        title: "From your community to theirs: where your Sadaqah travels",
        excerpt: "A look at local collections and how they reach those in need.",
        bodyMarkdown:
            "Every collection starts with neighbours who care. Volunteers sort, pack, and label; partners receive goods with clear handover notes; field teams confirm distribution.\n\nTransparency matters: we publish high-level programme updates and work with auditors where required. Your Sadaqah is never anonymous to us operationally — only publicly if you choose.",
        category: { name: "Impact" },
        imageUrl: img,
        href: "/blog/sadaqah-journey",
        publishedAt: Date.UTC(2026, 1, 28, 12, 0, 0),
    },
    volunteering: {
        slug: "volunteering",
        title: "Volunteering that fits your schedule",
        excerpt: "Evenings, weekends, or remote — ways to contribute your time.",
        bodyMarkdown:
            "We run warehouse sessions, community fundraisers, and remote skills volunteering. You choose shifts that fit school runs and work.\n\nSafeguarding training is provided for every role that meets beneficiaries. Start with an application and we will match you to a team lead.",
        category: { name: "Community" },
        imageUrl: img,
        href: "/blog/volunteering",
        publishedAt: Date.UTC(2026, 1, 10, 12, 0, 0),
    },
};

export const mockStories = [
    {
        id: "s1",
        title: "Clean water reached another 2,000 households",
        excerpt: "Wells, filtration, and training — delivered with local partners.",
        imageUrl: img,
        href: "/blog/water-programme",
    },
    {
        id: "s2",
        title: "Winter kits: warmth when it matters most",
        excerpt: "Blankets, fuel, and essentials for families facing harsh weather.",
        imageUrl: img,
        href: "/blog/winter-kits",
    },
    {
        id: "s3",
        title: "Scholarships open doors for young learners",
        excerpt: "Supporting tuition and supplies so children can stay in school.",
        imageUrl: img,
        href: "/blog/scholarships",
    },
];

export const mockEvents = [
    {
        id: "e1",
        title: "Community Iftar & fundraiser",
        date: "18 Mar 2026 · 6:30 pm",
        datetime: "2026-03-18T18:30:00.000Z",
        location: "London Community Centre",
        imageUrl: img,
        href: "/events/community-iftar",
        isUpcoming: true,
    },
    {
        id: "e2",
        title: "Zakat clinic (drop-in)",
        date: "22 Mar 2026 · 10:00 am",
        datetime: "2026-03-22T10:00:00.000Z",
        location: "Birmingham Hub",
        imageUrl: img,
        href: "/events/zakat-clinic",
        isUpcoming: true,
    },
    {
        id: "e3",
        title: "Youth volunteering day",
        date: "5 Apr 2026 · 9:00 am",
        datetime: "2026-04-05T09:00:00.000Z",
        location: "Manchester Warehouse",
        imageUrl: img,
        href: "/events/youth-day",
        isUpcoming: false,
    },
    {
        id: "e-past",
        title: "Winter appeal wrap-up & volunteer thank-you",
        date: "20 Jan 2026 · 4:00 pm",
        datetime: "2026-01-20T16:00:00.000Z",
        location: "London Community Centre, 12 High Street, London, UK",
        imageUrl: img,
        href: "/events/winter-appeal-wrap-up",
        isUpcoming: false,
    },
];

/** Fallback event detail when Convex is unavailable. */
export const mockEventDetailsBySlug: Record<
    string,
    {
        slug: string;
        title: string;
        summary: string;
        descriptionMarkdown: string;
        imageUrl: string;
        href: string;
        locationLabel: string;
        startsAt: number;
        endsAt?: number;
    }
> = {
    "community-iftar": {
        slug: "community-iftar",
        title: "Community Iftar & fundraiser",
        summary: "Join us for Maghrib, a shared meal, and a short update on our programmes.",
        descriptionMarkdown:
            "We will welcome guests, share impact numbers from the last quarter, and host a fundraiser for emergency food.\n\nTickets are pay-what-you-can. Families with children are welcome; please let us know accessibility needs in advance.",
        imageUrl: img,
        href: "/events/community-iftar",
        locationLabel: "London Community Centre",
        startsAt: Date.parse("2026-03-18T18:30:00.000Z"),
        endsAt: Date.parse("2026-03-18T21:30:00.000Z"),
    },
    "zakat-clinic": {
        slug: "zakat-clinic",
        title: "Zakat clinic (drop-in)",
        summary: "Drop in for a confidential conversation about nisab, eligibility, and giving options.",
        descriptionMarkdown:
            "Trained volunteers and a scholar will be available for short sessions. Bring rough figures only; no bank statements are required on the day.\n\nYou can complete a donation on site or take a reference to give online later.",
        imageUrl: img,
        href: "/events/zakat-clinic",
        locationLabel: "Birmingham Hub",
        startsAt: Date.parse("2026-03-22T10:00:00.000Z"),
        endsAt: Date.parse("2026-03-22T15:00:00.000Z"),
    },
    "youth-day": {
        slug: "youth-day",
        title: "Youth volunteering day",
        summary: "A hands-on day packing parcels and learning how aid reaches families.",
        descriptionMarkdown:
            "Ages 14+ with guardian consent. Wear closed shoes; we provide gloves and high-vis.\n\nLunch and refreshments are included. Register so we can plan group sizes safely.",
        imageUrl: img,
        href: "/events/youth-day",
        locationLabel: "Manchester Warehouse",
        startsAt: Date.parse("2026-04-05T09:00:00.000Z"),
        endsAt: Date.parse("2026-04-05T13:00:00.000Z"),
    },
    "winter-appeal-wrap-up": {
        slug: "winter-appeal-wrap-up",
        title: "Winter appeal wrap-up & volunteer thank-you",
        summary: "Celebrating donors and volunteers who powered our winter response.",
        descriptionMarkdown:
            "Short talks from programme leads, certificates for volunteer teams, and tea.\n\nThis event has concluded — thank you to everyone who attended.",
        imageUrl: img,
        href: "/events/winter-appeal-wrap-up",
        locationLabel: "London Community Centre, 12 High Street, London, UK",
        startsAt: Date.parse("2026-01-20T16:00:00.000Z"),
        endsAt: Date.parse("2026-01-20T18:30:00.000Z"),
    },
};

export const mockCampaigns = [
    {
        id: "c1",
        title: "Emergency food & medicine",
        description: "Rapid response for families facing crisis.",
        imageUrl: img,
        goal: 500000,
        raised: 312000,
        href: "/campaigns/emergency-aid",
    },
    {
        id: "c2",
        title: "Rebuild & recover",
        description: "Shelter materials and livelihood support after disaster.",
        imageUrl: img,
        goal: 250000,
        raised: 189000,
        href: "/campaigns/rebuild",
    },
    {
        id: "c3",
        title: "Orphan sponsorship fund",
        description: "Education, nutrition, and care for children in our programme.",
        imageUrl: img,
        goal: 180000,
        raised: 94000,
        href: "/campaigns/orphans",
    },
];

export const mockImpacts = [
    {
        id: "i1",
        title: "Water & sanitation",
        description: "Wells, hygiene training, and safe water for whole villages.",
        imageUrl: img,
        stat: "2.1M",
        statLabel: "Litres/day capacity",
        href: "/programmes/water",
    },
    {
        id: "i2",
        title: "Food security",
        description: "Hot meals, parcels, and agricultural support where hunger bites hardest.",
        imageUrl: img,
        href: "/programmes/food",
    },
    {
        id: "i3",
        title: "Health & clinics",
        description: "Mobile clinics, vaccines, and maternal health services.",
        imageUrl: img,
        href: "/programmes/health",
    },
    {
        id: "i4",
        title: "Education",
        description: "Schools, supplies, and scholarships so children keep learning.",
        imageUrl: img,
        href: "/programmes/education",
    },
    {
        id: "i5",
        title: "Shelter & recovery",
        description: "Temporary shelter, repairs, and cash assistance after emergencies.",
        imageUrl: img,
        href: "/programmes/shelter",
    },
    {
        id: "i6",
        title: "Livelihoods",
        description: "Skills training, tools, and small grants to rebuild income.",
        imageUrl: img,
        href: "/programmes/livelihoods",
    },
];

export const mockTrustItems = [
    {
        title: "Transparent giving",
        description: "We publish what we fund, where programmes run, and how donations are allocated.",
    },
    {
        title: "Local delivery",
        description: "We work with vetted partners on the ground so aid reaches people quickly and safely.",
    },
    {
        title: "Receipts and updates",
        description: "Donors receive confirmations and regular updates as campaigns and programmes progress.",
    },
];

export const mockEmergencyFeatured: EmergencyFeatured = {
    headline: "Lebanon crisis appeal",
    paragraphs: [
        "Families are facing severe shortages of food, clean water, and medical care. Roads and infrastructure are damaged, and children are among the hardest hit.",
        "Together with trusted local partners, we are delivering emergency supplies, supporting clinics, and helping communities survive this crisis.",
    ],
    closingLine: "Donate now to help families in urgent need in Lebanon.",
    ctaText: "Donate now",
    ctaHref: "/donate",
    imageSrc: img,
    imageAlt: "Emergency relief and humanitarian response in a crisis-affected area",
};

export const mockEmergencySecondaryAppeals: [EmergencyCardAppeal, EmergencyCardAppeal] = [
    {
        headline: "Give to Palestine",
        body: "Families need food, medical care, and shelter. Your Sadaqah and Zakat help us reach them quickly through partners on the ground.",
        href: "/donate",
    },
    {
        headline: "Give to Sudan",
        body: "Conflict and displacement have left millions in need. Support emergency food, water, and protection for the most vulnerable.",
        href: "/donate",
    },
];
