import type { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact | My Akhirah Account",
  description: "Get in touch with My Akhirah Account for questions about giving, programmes, partnerships, or support.",
};

export default function ContactPage() {
  return (
    <PageShell>
      <section className="section bg-gradient-to-b from-mercy-mint to-purity-white border-b border-akhirah-teal/10">
        <div className="container-custom">
          <p className="text-xs font-semibold uppercase tracking-wider text-akhirah-teal mb-3">Contact</p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-akhirah-teal text-balance max-w-2xl">
            We&apos;re here to help
          </h1>
          <p className="mt-4 text-account-black/70 text-sm sm:text-base max-w-2xl leading-relaxed">
            Send us a note about donations, programme questions, media requests, partnerships, or anything else—we’ll route it to the right
            teammate.
          </p>
        </div>
      </section>

      <section className="section bg-purity-white">
        <div className="container-custom">
          <div className="card p-6 sm:p-8 md:p-10 max-w-3xl mx-auto lg:mx-0">
            <h2 className="text-xl font-bold text-akhirah-teal mb-1">Contact form</h2>
            <p className="text-sm text-account-black/65 mb-8 max-w-xl">
              Fields mirror the public submission contract—please don’t include passwords, card numbers, or sensitive documents.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
