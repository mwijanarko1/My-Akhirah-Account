const steps = [
    {
        number: 1,
        title: "Choose an Appeal",
        body: "Browse our live appeals and find a cause that speaks to you. You can choose to give to a specific appeal, or trust us to direct your donation where it is needed most. Whether you are giving Zakat or Sadaqah — every gift finds its purpose.",
    },
    {
        number: 2,
        title: "Donate Securely",
        body: "Your donation is in safe hands. We treat every gift as an amanah — ensuring it is secure, purposefully used, and fully accounted for. Upon payment you will receive a receipt straight to your inbox.",
    },
    {
        number: 3,
        title: "Receive Updates",
        body: "After you give, we keep you informed. Receive live updates from projects on the ground so you can see exactly where your donation is going and the difference it is making.",
    },
];

export default function HowDonationsAreUsed() {
    return (
        <section className="bg-purity-white py-12 sm:py-14 md:py-16" aria-labelledby="how-donations-heading">
            <div className="container-custom max-w-full">
                <h2
                    id="how-donations-heading"
                    className="font-sans text-xl sm:text-2xl font-bold text-akhirah-teal text-balance mb-8 sm:mb-10 max-w-2xl"
                >
                    How donations are used
                </h2>
                <div className="max-w-4xl rounded-sm border border-akhirah-teal/10 px-4 py-6 sm:px-6 sm:py-8 md:px-8">
                    <ol className="m-0 grid list-none grid-cols-1 gap-8 p-0 md:grid-cols-3 md:gap-6 lg:gap-8">
                        {steps.map((step) => (
                            <li key={step.number} className="min-w-0 flex flex-col gap-3">
                                <span className="font-sans text-4xl sm:text-5xl font-bold leading-none text-eternal-gold">
                                    {step.number}
                                </span>
                                <h3 className="font-sans text-lg sm:text-xl font-bold text-akhirah-teal text-balance">
                                    {step.title}
                                </h3>
                                <p className="font-sans text-base font-normal text-account-black leading-relaxed">
                                    {step.body}
                                </p>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </section>
    );
}
