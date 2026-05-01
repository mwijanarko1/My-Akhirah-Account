import Link from "next/link";
import { Footer, Header } from "@/components";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSection {
  id: string;
  title: string;
  intro: string;
  items: FaqItem[];
}

const faqSections: FaqSection[] = [
  {
    id: "donations",
    title: "Donations",
    intro: "How donations work on our platform and what to expect after checkout.",
    items: [
      {
        question: "How do I make a donation?",
        answer:
          "Choose an appeal, select an amount, and complete checkout with your preferred payment method.",
      },
      {
        question: "Can I make a one-off or recurring donation?",
        answer: "TODO: Mikhail copy",
      },
      {
        question: "Can I donate to a specific cause?",
        answer: "TODO: Mikhail copy",
      },
      {
        question: "Is my payment secure?",
        answer: "Donations are processed through secure payment flows with encrypted transmission.",
      },
    ],
  },
  {
    id: "receipts",
    title: "Receipts",
    intro: "Information on confirmations, receipts, and records for your giving.",
    items: [
      {
        question: "Will I receive a donation receipt?",
        answer: "Yes, a confirmation is sent after a successful donation.",
      },
      {
        question: "How long does it take to receive the receipt?",
        answer: "TODO: Mikhail copy",
      },
      {
        question: "Can I request a copy of a past receipt?",
        answer: "TODO: Mikhail copy",
      },
      {
        question: "Who should I contact about a receipt error?",
        answer: "Please use the contact page so our team can review and correct the record.",
      },
    ],
  },
  {
    id: "zakat-sadaqah",
    title: "Zakat and Sadaqah",
    intro: "Guidance on giving types and how funds are handled responsibly.",
    items: [
      {
        question: "Do you accept both Zakat and Sadaqah?",
        answer: "Yes, you can give either Zakat or Sadaqah depending on your intention.",
      },
      {
        question: "How do you keep Zakat funds separate where required?",
        answer: "TODO: Mikhail copy",
      },
      {
        question: "Can I add a note to say my donation is Zakat?",
        answer: "TODO: Mikhail copy",
      },
      {
        question: "Do you provide guidance on Zakat eligibility?",
        answer: "TODO: Mikhail copy",
      },
    ],
  },
  {
    id: "volunteering",
    title: "Volunteering",
    intro: "How to get involved, safeguarding checks, and expectations for volunteers.",
    items: [
      {
        question: "How do I register as a volunteer?",
        answer: "Use the volunteer form and our team will follow up with next steps.",
      },
      {
        question: "Do all volunteer roles require checks?",
        answer: "TODO: Mikhail copy",
      },
      {
        question: "Will volunteers receive onboarding guidance?",
        answer: "TODO: Mikhail copy",
      },
      {
        question: "Can I volunteer remotely?",
        answer: "TODO: Mikhail copy",
      },
    ],
  },
  {
    id: "contact",
    title: "Contact",
    intro: "The best ways to get support for donations, volunteering, and safeguarding concerns.",
    items: [
      {
        question: "How do I contact your team?",
        answer: "Use our contact page and include enough detail so we can help quickly.",
      },
      {
        question: "What details should I include in my message?",
        answer: "TODO: Mikhail copy",
      },
      {
        question: "How quickly do you respond?",
        answer: "TODO: Mikhail copy",
      },
      {
        question: "Can I report an urgent safeguarding concern?",
        answer: "Yes. Please contact us immediately through the safeguarding and contact channels.",
      },
    ],
  },
  {
    id: "transparency",
    title: "Transparency",
    intro: "How we communicate delivery, partners, and impact to build donor confidence.",
    items: [
      {
        question: "How do you decide which projects to fund?",
        answer: "TODO: Mikhail copy",
      },
      {
        question: "Do you share updates on where funds are used?",
        answer: "Yes, we share updates as campaigns and programmes progress.",
      },
      {
        question: "How do you vet partner organisations?",
        answer: "TODO: Mikhail copy",
      },
      {
        question: "Where can I read more about your safeguarding approach?",
        answer: "Visit the safeguarding page for policies and reporting routes.",
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <>
      <Header />
      <main className="min-w-0 flex-1 bg-purity-white">
        <section className="bg-akhirah-teal text-purity-white border-b border-white/10">
          <div className="container-custom max-w-full py-14 sm:py-16 md:py-20">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-wider text-eternal-gold mb-3">Support</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-balance mb-4">
                Frequently asked questions
              </h1>
              <p className="text-white/85 text-base sm:text-lg leading-relaxed">
                Clear answers on donations, receipts, Zakat and Sadaqah, volunteering, contact routes, and how we
                protect your trust.
              </p>
            </div>
          </div>
        </section>

        <section className="section bg-purity-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 gap-6 lg:gap-8">
              {faqSections.map((section) => (
                <article key={section.id} id={section.id} className="rounded-sm border border-akhirah-teal/15 p-5 sm:p-6 md:p-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-account-black mb-2">{section.title}</h2>
                  <p className="text-account-black/75 text-sm sm:text-base mb-6">{section.intro}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                    {section.items.map((item) => (
                      <div key={item.question} className="rounded-sm border border-akhirah-teal/10 bg-mercy-mint/35 p-4 sm:p-5">
                        <h3 className="text-base sm:text-lg font-semibold text-account-black mb-2">{item.question}</h3>
                        <p className="text-account-black/80 text-sm sm:text-base leading-relaxed">{item.answer}</p>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section bg-mercy-mint border-y border-akhirah-teal/10">
          <div className="container-custom">
            <div className="max-w-4xl rounded-sm border border-akhirah-teal/15 bg-purity-white p-5 sm:p-6 md:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-account-black mb-3">Trust and safeguarding support</h2>
              <p className="text-account-black/80 text-sm sm:text-base leading-relaxed mb-6">
                If you need to raise a concern, ask for support, or join our safeguarding-first volunteer pathways,
                please use the routes below.
              </p>
              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3">
                <Link href="/safeguarding" className="btn btn-secondary inline-flex items-center justify-center min-h-11">
                  Safeguarding
                </Link>
                <Link href="/contact" className="btn btn-secondary inline-flex items-center justify-center min-h-11">
                  Contact
                </Link>
                <Link href="/volunteer" className="btn btn-primary inline-flex items-center justify-center min-h-11">
                  Volunteer
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
