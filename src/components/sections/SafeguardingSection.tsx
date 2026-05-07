import Link from "next/link";

export default function SafeguardingSection() {
    return (
        <section className="bg-purity-white py-12 sm:py-14 md:py-16" aria-labelledby="safeguarding-heading">
            <div className="container-custom max-w-full">
                <h2
                    id="safeguarding-heading"
                    className="font-sans text-xl sm:text-2xl font-bold text-akhirah-teal text-balance mb-8 sm:mb-10 max-w-2xl"
                >
                    Safeguarding and dignity
                </h2>
                <div className="max-w-3xl rounded-sm border border-akhirah-teal/10 divide-y divide-akhirah-teal/10">
                    <div className="min-w-0 px-4 py-6 sm:px-6 sm:py-8 bg-purity-white">
                        <h3 className="font-sans text-lg sm:text-xl font-bold text-akhirah-teal text-balance mb-3">
                            Report a Concern
                        </h3>
                        <p className="font-sans text-base font-normal text-account-black leading-relaxed mb-4">
                            We take your concerns seriously and they can be reported anonymously. If you have any
                            concerns with conduct related to My Akhirah Account, our volunteers, or our projects —
                            please contact us below.
                        </p>
                        <Link
                            href="/contact"
                            className="font-sans inline-flex min-h-[44px] items-center justify-center rounded-sm bg-akhirah-teal px-5 text-base font-semibold text-purity-white hover:bg-akhirah-teal-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-akhirah-teal"
                        >
                            Report a Concern
                        </Link>
                    </div>

                    <div className="min-w-0 px-4 py-6 sm:px-6 sm:py-8 bg-mercy-mint">
                        <h3 className="font-sans text-lg sm:text-xl font-bold text-akhirah-teal text-balance mb-3">
                            Volunteer Conduct
                        </h3>
                        <p className="font-sans text-base font-normal text-account-black leading-relaxed mb-4">
                            Our volunteers follow a code of conduct that must be upheld at all times. This ensures we
                            protect the dignity and welfare of those we are helping — which you can read in full below.
                        </p>
                        {/* TODO: Point to /safeguarding when the dedicated page exists; #contact scrolls to FAQ Contact section for now. */}
                        <a
                            href="#contact"
                            className="font-sans text-base font-medium text-akhirah-teal hover:text-eternal-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-akhirah-teal inline-flex min-h-[44px] items-center py-2 underline-offset-4 hover:underline"
                        >
                            Read our safeguarding policy
                        </a>
                    </div>

                    <div className="min-w-0 px-4 py-6 sm:px-6 sm:py-8 bg-purity-white">
                        <h3 className="font-sans text-lg sm:text-xl font-bold text-akhirah-teal text-balance mb-3">
                            Beneficiary Care
                        </h3>
                        <p className="font-sans text-base font-normal text-account-black leading-relaxed mb-4">
                            In Islam, the dignity of every person is sacred. Every programme we support is built around
                            this belief — ensuring that those we help are treated with the care, respect, and humanity
                            they deserve.
                        </p>
                        {/* TODO: Point to /safeguarding when the dedicated page exists; #transparency scrolls to FAQ Transparency section for now. */}
                        <a
                            href="#transparency"
                            className="font-sans text-base font-medium text-akhirah-teal hover:text-eternal-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-akhirah-teal inline-flex min-h-[44px] items-center py-2 underline-offset-4 hover:underline"
                        >
                            How we protect welfare in programmes
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
