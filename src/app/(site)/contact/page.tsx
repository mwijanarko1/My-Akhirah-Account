import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/forms/ContactForm";
import PublicPageBodySection from "@/components/layout/PublicPageBodySection";
import PublicPageCtaFooter from "@/components/layout/PublicPageCtaFooter";
import PublicPageIntro from "@/components/layout/PublicPageIntro";

export const metadata: Metadata = {
    title: "Contact | My Akhirah Account",
    description: "Get in touch with My Akhirah Account.",
};

const options = [
    {
        title: "General enquiries",
        body: "Questions about donations, receipts, or programmes. We aim to reply within a few working days.",
        href: "#contact-form",
        linkLabel: "Jump to message form",
    },
    {
        title: "Volunteering",
        body: "Warehouse days, events, and remote skills — see roles and how to apply.",
        href: "/volunteer",
        linkLabel: "Open volunteer page",
    },
    {
        title: "Media & partnerships",
        body: "Press, collaborations, or institutional outreach — include “Media enquiry” in your subject when you write.",
        href: "#contact-form",
        linkLabel: "Use the message form",
    },
] as const;

export default function ContactPage() {
    return (
        <>
            <PublicPageIntro
                eyebrow="Contact"
                title="Contact us"
                description="Choose the route that fits your question — every message is read by the team."
            />

            <PublicPageBodySection surface="mint" spacious>
                <h2 className="sr-only">Contact options</h2>
                <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 list-none p-0 m-0">
                    {options.map((opt) => (
                        <li
                            key={opt.title}
                            className="rounded-sm border border-akhirah-teal/15 bg-purity-white p-5 flex flex-col"
                        >
                            <h3 className="text-lg font-bold text-akhirah-teal mb-2">{opt.title}</h3>
                            <p className="text-sm text-account-black/80 leading-relaxed flex-1 mb-4">{opt.body}</p>
                            <Link
                                href={opt.href}
                                className="text-sm font-semibold text-akhirah-teal underline underline-offset-2 hover:text-eternal-gold"
                            >
                                {opt.linkLabel}
                            </Link>
                        </li>
                    ))}
                </ul>
            </PublicPageBodySection>

            <PublicPageBodySection surface="white" spacious id="contact-form">
                <h2 className="text-xl sm:text-2xl font-bold text-akhirah-teal mb-3">Send a message</h2>
                <p className="text-account-black/80 text-base leading-relaxed mb-8 max-w-2xl">
                    Use this form for general enquiries, media requests, and partnership outreach. Fields marked with an asterisk (*) are
                    required.
                </p>
                <div className="rounded-sm border border-akhirah-teal/15 bg-mercy-mint/25 p-5 sm:p-8 md:p-10">
                    <ContactForm />
                </div>
                <p className="mt-8 text-sm text-account-black/70">
                    For urgent safeguarding concerns, follow the reporting routes described in our{" "}
                    <Link href="/faq#transparency" className="font-semibold text-akhirah-teal underline underline-offset-2">
                        transparency FAQs
                    </Link>
                    .
                </p>
            </PublicPageBodySection>

            <PublicPageCtaFooter
                title="Prefer self‑serve answers?"
                description="Many donor questions are covered in our FAQs — volunteering and appeals have dedicated pages too."
                actions={[
                    { href: "/faq", label: "Open FAQ", variant: "outlineOnDark" },
                    { href: "/volunteer", label: "Volunteer with us", variant: "outlineOnDark" },
                    { href: "/campaigns", label: "View campaigns", variant: "primary" },
                ]}
            />
        </>
    );
}
