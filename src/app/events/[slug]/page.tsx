import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Header, Footer, PageHero } from "@/components";
import MarkdownArticleBody from "@/components/article/MarkdownArticleBody";
import {
  buildPageMetadata,
  DEFAULT_DESCRIPTION,
} from "@/lib/metadata";
import { getEventBySlug } from "@/lib/server/content";

type Props = {
  params: Promise<{ slug: string }>;
};

function formatEventWhen(startsAt: number, endsAt?: number): string {
  const start = new Date(startsAt);
  const dateStr = start.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  const startTime = start.toLocaleTimeString("en-GB", {
    hour: "numeric",
    minute: "2-digit",
  });
  if (endsAt) {
    const end = new Date(endsAt);
    const sameDay = end.toDateString() === start.toDateString();
    if (sameDay) {
      const endTime = end.toLocaleTimeString("en-GB", {
        hour: "numeric",
        minute: "2-digit",
      });
      return `${dateStr} · ${startTime} – ${endTime}`;
    }
  }
  return `${dateStr} · ${startTime}`;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const event = await getEventBySlug(slug);
  if (!event) {
    return buildPageMetadata({
      title: "Event",
      description: DEFAULT_DESCRIPTION,
    });
  }
  return buildPageMetadata({
    title: event.title,
    description: event.summary,
  });
}

export default async function EventDetailPage({ params }: Props) {
  const { slug } = await params;
  const event = await getEventBySlug(slug);

  if (!event) {
    notFound();
  }

  const when = formatEventWhen(event.startsAt, event.endsAt);
  const isUpcoming = event.startsAt >= Date.now();

  return (
    <>
      <Header />
      <main className="min-w-0 flex-1">
        <PageHero title={event.title} />

        <article className="section bg-purity-white">
          <div className="container-custom max-w-full">
            <div className="mx-auto max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-wide text-account-black/55">
                <span
                  className={
                    isUpcoming ? "text-akhirah-teal" : "text-account-black/55"
                  }
                >
                  {isUpcoming ? "Upcoming" : "Past event"}
                </span>
              </p>

              <p className="mt-6 text-pretty text-lg leading-relaxed text-account-black/80">
                {event.summary}
              </p>

              <div className="relative mt-8 aspect-video w-full overflow-hidden rounded-sm border border-akhirah-teal/10">
                <Image
                  src={event.imageUrl}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 768px"
                  priority
                />
              </div>

              <h2 className="mt-10 text-xl font-bold text-akhirah-teal sm:text-2xl">
                Event details
              </h2>
              <dl className="mt-4 space-y-3 text-account-black/85">
                <div>
                  <dt className="text-xs font-bold uppercase tracking-wide text-account-black/55">
                    When
                  </dt>
                  <dd className="mt-1">
                    <time dateTime={new Date(event.startsAt).toISOString()}>
                      {when}
                    </time>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-wide text-account-black/55">
                    Where
                  </dt>
                  <dd className="mt-1 text-pretty">{event.locationLabel}</dd>
                </div>
              </dl>

              <h2 className="mt-10 text-xl font-bold text-akhirah-teal sm:text-2xl">
                About this event
              </h2>
              <div className="mt-4">
                <MarkdownArticleBody markdown={event.descriptionMarkdown} />
              </div>

              <p className="mt-10">
                <Link
                  href="/events"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-akhirah-teal underline-offset-4 hover:text-eternal-gold hover:underline"
                >
                  ← Back to events
                </Link>
              </p>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
