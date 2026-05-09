import type { Metadata } from "next";
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
            <ContactForm />
        </PublicPageIntro>
    );
}
