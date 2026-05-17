import Link from "next/link";
import PublicPageIntro from "@/components/layout/PublicPageIntro";

export default function ProgrammeNotFound() {
  return (
    <PublicPageIntro
      title="Programme not found"
      description="This programme is not available or may have been unpublished."
    >
      <div className="mb-8 rounded-sm border border-akhirah-teal/10 bg-mercy-mint/40 px-5 py-6">
        <p className="text-sm leading-relaxed text-account-black/80">
          Try returning to the programmes list to choose an active area of work, or browse campaigns if you would like
          to give today.
        </p>
      </div>
      <Link
        href="/programmes"
        className="btn btn-primary inline-flex min-h-12 w-full touch-manipulation items-center justify-center font-semibold sm:min-h-11 sm:w-auto"
      >
        All programmes
      </Link>
    </PublicPageIntro>
  );
}
