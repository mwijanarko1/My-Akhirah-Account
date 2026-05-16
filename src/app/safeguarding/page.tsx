import type { Metadata } from "next";
import { Header, Footer } from "@/components";

export const metadata: Metadata = {
  title: "Safeguarding | My Akhirah Account",
  description:
    "How My Akhirah Account approaches safeguarding children and adults at risk. Final policy text is pending approval.",
};

const SECTIONS: { id: string; title: string }[] = [
  { id: "introduction", title: "Introduction" },
  { id: "commitment", title: "Our commitment" },
  { id: "scope", title: "Who this policy applies to" },
  { id: "principles", title: "Principles" },
  { id: "safer-recruitment", title: "Safer recruitment and vetting" },
  { id: "conduct", title: "Code of conduct and expected behaviour" },
  { id: "recognising-harm", title: "Recognising harm and abuse" },
  { id: "reporting", title: "How to report a concern" },
  { id: "allegations", title: "Allegations involving staff or volunteers" },
  { id: "records", title: "Records, confidentiality, and information sharing" },
  { id: "training", title: "Training and supervision" },
  { id: "partners", title: "Safeguarding in partnerships and programmes" },
  { id: "review", title: "Reviewing this policy" },
  { id: "contact", title: "Safeguarding contacts" },
];

export default function SafeguardingPage() {
  return (
    <>
      <Header />

      <main className="min-w-0 flex-1">
        <section className="bg-akhirah-teal text-purity-white overflow-x-clip">
          <div className="container-custom max-w-full py-10 sm:py-12 md:py-16">
            <p className="text-xs font-semibold uppercase tracking-wide text-eternal-gold/95 mb-2 sm:mb-3">
              Legal
            </p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-balance max-w-3xl mb-4 sm:mb-5">
              Safeguarding policy
            </h1>
            <p className="text-sm sm:text-base text-white/90 max-w-2xl leading-relaxed">
              This page describes our approach to safeguarding. Section headings are fixed for layout;
              all substantive policy text will be supplied by the organisation. TODO: Mikhail copy
            </p>
            <p className="mt-4 text-xs sm:text-sm text-white/75 max-w-2xl">
              <strong className="font-semibold text-white/90">Last updated:</strong> placeholder
              date. TODO: Mikhail copy
            </p>
          </div>
        </section>

        <section className="section bg-purity-white">
          <div className="container-custom max-w-full">
            <div className="mx-auto max-w-3xl space-y-10 sm:space-y-12 md:space-y-14">
              {SECTIONS.map((block, index) => (
                <article
                  key={block.id}
                  id={block.id}
                  className={
                    index > 0
                      ? "scroll-mt-24 pt-10 sm:pt-12 border-t border-akhirah-teal/10"
                      : "scroll-mt-24"
                  }
                >
                  <h2 className="text-xl sm:text-2xl font-bold text-akhirah-teal mb-3 sm:mb-4 text-balance">
                    {block.title}
                  </h2>
                  <div className="rounded-sm border border-akhirah-teal/10 bg-mercy-mint/50 p-4 sm:p-5 md:p-6">
                    <p className="text-sm sm:text-base text-account-black/80 leading-relaxed">
                      TODO: Mikhail copy — replace this block with approved safeguarding policy text
                      for &ldquo;{block.title}&rdquo;.
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
