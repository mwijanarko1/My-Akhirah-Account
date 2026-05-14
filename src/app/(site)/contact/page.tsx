import type { Metadata } from "next";
import Link from "next/link";
import PublicPageIntro from "@/components/layout/PublicPageIntro";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
    title: "Contact | My Akhirah Account",
    description: "Get in touch with My Akhirah Account about giving, programmes, partnerships, or support.",
};

export default function ContactPage() {
    return (
        <PublicPageIntro
            title="Contact us"
            description="Send us a note about donations, programmes, partnerships, or anything else — we’ll route it to the right teammate. Please don’t share passwords, card numbers, or sensitive documents in this form."
        >
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] lg:items-start lg:gap-12 xl:grid-cols-[minmax(0,1fr)_minmax(0,26rem)]">
                <div className="order-1 min-w-0 lg:order-2">
                    <ContactForm />
                </div>
                <aside
                    className="order-2 space-y-4 rounded-sm border border-akhirah-teal/12 bg-mercy-mint/35 p-5 text-sm leading-relaxed text-account-black/85 sm:p-6 lg:order-1 lg:sticky lg:top-28"
                    aria-labelledby="contact-aside-heading"
                >
                    <h2 id="contact-aside-heading" className="text-base font-bold text-akhirah-teal">
                        Before you write
                    </h2>
                    <ul className="list-disc space-y-2 pl-5 marker:text-akhirah-teal">
                        <li>We aim to reply by email — not by phone — unless you ask otherwise.</li>
                        <li>For volunteering, use the volunteer form so your skills route correctly.</li>
                        <li>Urgent safeguarding concerns should follow the process on our FAQ page.</li>
                    </ul>
                    <p className="text-xs text-account-black/65">
                        Tip: use Tab to move through the form; Shift+Tab to go back. The skip link at the top of every
                        page jumps past the menu.
                    </p>
                    <Link
                        href="/volunteer"
                        className="inline-flex min-h-11 w-full items-center justify-center rounded-sm border border-akhirah-teal/25 bg-purity-white px-4 text-center text-sm font-semibold text-akhirah-teal transition-colors hover:border-akhirah-teal/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-eternal-gold sm:w-auto"
                    >
                        Apply to volunteer
                    </Link>
                </aside>
            </div>
        </PublicPageIntro>
    );
}
