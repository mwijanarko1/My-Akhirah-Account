import Link from "next/link";

const trustLinkClassName =
    "font-sans text-base font-medium text-akhirah-teal hover:text-eternal-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-akhirah-teal inline-flex min-h-[44px] items-center py-2 underline-offset-4 hover:underline";

const blocks = [
    {
        title: "Transparent Giving",
        body: "We treat every donation as an amanah — a trust we take seriously. Your giving is handled with full accountability and directed to where it is truly needed.",
        href: "#transparency",
        linkLabel: "Read answers in our FAQ",
        surface: "white" as const,
    },
    {
        title: "Local Delivery",
        body: "For over 15 years we have built lasting relationships with communities on the ground, ensuring that every donation made today creates an impact that endures.",
        href: "/programmes",
        linkLabel: "Explore our programmes",
        surface: "mint" as const,
    },
    {
        title: "Receipts and Updates",
        body: "Upon payment you will receive a receipt straight to your inbox. As campaigns progress, we share updates so you can see the difference your donation is making on the ground.",
        href: "#receipts",
        linkLabel: "Receipts FAQ",
        surface: "white" as const,
    },
];

export default function DonorTrustSection() {
    return (
        <section className="bg-purity-white py-12 sm:py-14 md:py-16" aria-labelledby="donor-trust-heading">
            <div className="container-custom max-w-full">
                <h2
                    id="donor-trust-heading"
                    className="font-sans text-xl sm:text-2xl font-bold text-akhirah-teal text-balance mb-8 sm:mb-10 max-w-2xl"
                >
                    Trust in your giving
                </h2>
                <div className="max-w-3xl rounded-sm border border-akhirah-teal/10 divide-y divide-akhirah-teal/10">
                    {blocks.map((block) => (
                        <div
                            key={block.title}
                            className={`min-w-0 px-4 py-6 sm:px-6 sm:py-8 ${
                                block.surface === "mint" ? "bg-mercy-mint" : "bg-purity-white"
                            }`}
                        >
                            <h3 className="font-sans text-lg sm:text-xl font-bold text-akhirah-teal text-balance mb-3">
                                {block.title}
                            </h3>
                            <p className="font-sans text-base font-normal text-account-black leading-relaxed mb-4">
                                {block.body}
                            </p>
                            {block.href.startsWith("#") ? (
                                <a href={block.href} className={trustLinkClassName}>
                                    {block.linkLabel}
                                </a>
                            ) : (
                                <Link href={block.href} className={trustLinkClassName}>
                                    {block.linkLabel}
                                </Link>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
