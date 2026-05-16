import type { Metadata } from "next";
import Link from "next/link";
import PublicPageIntro from "@/components/layout/PublicPageIntro";
import { getProgrammePublicBySlug } from "@/lib/server/programmes";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const program = await getProgrammePublicBySlug(slug);
  if (!program) {
    return { title: "Programme | My Akhirah Account" };
  }
  return {
    title: `${program.name} | Programmes | My Akhirah Account`,
    description: program.summary,
  };
}

function MarkdownBlocks({ markdown }: { markdown: string }) {
  const blocks = markdown
    .trim()
    .split(/\n\n+/)
    .map((b) => b.trim())
    .filter(Boolean);
  if (blocks.length === 0) {
    return null;
  }
  return (
    <div className="space-y-4 text-base leading-relaxed text-account-black/85">
      {blocks.map((block, i) => (
        <p key={i} className="whitespace-pre-wrap">
          {block}
        </p>
      ))}
    </div>
  );
}

export default async function ProgrammeDetailPage({ params }: Props) {
  const { slug } = await params;
  const program = await getProgrammePublicBySlug(slug);

  if (!program) {
    return (
      <PublicPageIntro title="Programme not found" description="This programme is not available or may have been unpublished.">
        <div className="mb-8 rounded-sm border border-akhirah-teal/10 bg-mercy-mint/40 px-5 py-6">
          <p className="text-sm leading-relaxed text-account-black/80">
            Try returning to the programmes list to choose an active area of work, or browse campaigns if you would like
            to give today.
          </p>
        </div>
        <Link href="/programmes" className="btn btn-primary font-semibold">
          All programmes
        </Link>
      </PublicPageIntro>
    );
  }

  return (
    <PublicPageIntro title={program.name} description={program.summary}>
      <div className="mb-10">
        <MarkdownBlocks markdown={program.descriptionMarkdown} />
      </div>
      <Link
        href="/programmes"
        className="inline-flex text-sm font-semibold text-akhirah-teal hover:text-akhirah-teal-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-eternal-gold"
      >
        ← Back to all programmes
      </Link>
    </PublicPageIntro>
  );
}
