import type { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";
import VolunteerForm from "@/components/forms/VolunteerForm";

export const metadata: Metadata = {
  title: "Volunteer | My Akhirah Account",
  description: "Apply to volunteer with My Akhirah Account and support communities across our programmes.",
};

export default function VolunteerPage() {
  return (
    <PageShell>
      <section className="section bg-gradient-to-b from-akhirah-teal to-akhirah-teal-dark text-purity-white border-b border-white/10">
        <div className="container-custom">
          <p className="text-xs font-semibold uppercase tracking-wider text-eternal-gold mb-3">Volunteer</p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-balance max-w-3xl leading-tight">
            Give time with intention
          </h1>
          <p className="mt-4 text-white/85 text-sm sm:text-base max-w-2xl leading-relaxed">
            Share your skills, locality, or availability—we’ll respond if there’s a good fit across distributions, mentoring, storytelling, or operational support.
          </p>
        </div>
      </section>

      <section className="section bg-purity-white">
        <div className="container-custom">
          <div className="card p-6 sm:p-8 md:p-10 max-w-4xl mx-auto lg:mx-0 border-akhirah-teal/12">
            <h2 className="text-xl font-bold text-akhirah-teal mb-1">Application</h2>
            <p className="text-sm text-account-black/65 mb-8 max-w-2xl">
              Complete each required field thoughtfully. Responses help our team prioritize outreach—and we&apos;ll retain only what&apos;s necessary to progress your application.
            </p>
            <VolunteerForm />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
