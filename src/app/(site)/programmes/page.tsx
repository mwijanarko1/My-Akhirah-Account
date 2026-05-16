import type { Metadata } from "next";
import Link from "next/link";
import PublicPageIntro from "@/components/layout/PublicPageIntro";
import { getProgrammesPublicList } from "@/lib/server/programmes";

export const metadata: Metadata = {
  title: "Programmes | My Akhirah Account",
  description: "Long-running programme areas — water, food, health, education, and more.",
};

export default async function ProgrammesPage() {
  const programmes = await getProgrammesPublicList();

  return (
    <PublicPageIntro
      title="Programmes"
      description="Programmes are how we organise long-term work with communities — wells, clinics, schools, livelihoods, and emergency recovery."
    >
      {programmes.length === 0 ? (
        <div
          role="status"
          className="mb-8 rounded-sm border border-akhirah-teal/15 bg-mercy-mint/50 px-5 py-8 text-center"
        >
          <p className="text-base font-semibold text-akhirah-teal">No published programmes yet</p>
          <p className="mx-auto mt-2 max-w-lg text-sm leading-relaxed text-account-black/75">
            When the team publishes active programmes in the admin system, they will appear here automatically. You can
            still explore campaigns and other ways to give in the meantime.
          </p>
          <Link href="/campaigns" className="btn btn-primary mt-6 inline-flex min-h-12 w-full touch-manipulation items-center justify-center font-bold sm:min-h-11 sm:w-auto">
            View campaigns
          </Link>
        </div>
      ) : (
        <ul className="mb-8 space-y-3 sm:space-y-4">
          {programmes.map((program) => (
            <li key={program.slug}>
              <Link
                href={`/programmes/${program.slug}`}
                className="block min-h-[3.25rem] rounded-sm border border-akhirah-teal/12 bg-purity-white p-4 shadow-sm transition-shadow active:bg-mercy-mint/30 sm:min-h-0 sm:p-5 hover:border-akhirah-teal/25 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-eternal-gold"
              >
                <h2 className="text-lg font-bold text-akhirah-teal sm:text-xl">{program.name}</h2>
                <p className="mt-2 text-sm leading-relaxed text-account-black/80 sm:text-base">{program.summary}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-akhirah-teal">
                  Read more
                  <span aria-hidden>→</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}

      <Link href="/" className="btn btn-secondary inline-flex min-h-12 items-center justify-center font-semibold touch-manipulation sm:min-h-11">
        Back to homepage
      </Link>
    </PublicPageIntro>
  );
}
