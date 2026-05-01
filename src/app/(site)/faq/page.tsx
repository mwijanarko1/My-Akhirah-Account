import type { Metadata } from "next";
import PublicPageIntro from "@/components/layout/PublicPageIntro";

export const metadata: Metadata = {
    title: "FAQ | My Akhirah Account",
    description: "Answers to common questions about giving, Zakat, receipts, and safeguarding.",
};

export default function FaqPage() {
    return (
        <PublicPageIntro
            title="Frequently asked questions"
            description="Structured answers will be expanded in collaboration with Mikhail (receipts, fees, refunds, and compliance). Below is the outline we will fill."
        >
            <div className="space-y-8 text-account-black/85">
                <section>
                    <h2 className="text-lg font-bold text-akhirah-teal mb-2">Giving &amp; Zakat</h2>
                    <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base">
                        <li>How Zakat is calculated and distributed</li>
                        <li>Fees and covering processing costs</li>
                        <li>When receipts are issued</li>
                    </ul>
                </section>
                <section>
                    <h2 className="text-lg font-bold text-akhirah-teal mb-2">Safeguarding &amp; complaints</h2>
                    <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base">
                        <li>How to raise a concern</li>
                        <li>What we expect from volunteers and partners</li>
                    </ul>
                </section>
            </div>
        </PublicPageIntro>
    );
}
