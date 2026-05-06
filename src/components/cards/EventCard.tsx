import Image from "next/image";
import Link from "next/link";

interface EventCardProps {
    title: string;
    date: string;
    datetime?: string;
    location: string;
    imageUrl: string;
    href: string;
    isUpcoming?: boolean;
}

export default function EventCard({
    title,
    date,
    datetime,
    location,
    imageUrl,
    href,
    isUpcoming = true,
}: EventCardProps) {
    return (
        <article className="card group flex h-full min-w-0 flex-col">
            <Link href={href} className="block flex flex-col h-full">
                <div className="relative aspect-video overflow-hidden">
                    <Image
                        src={imageUrl}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {isUpcoming ? (
                        <div className="absolute top-3 left-3">
                            <span className="inline-block rounded-sm bg-eternal-gold px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-akhirah-teal">
                                Upcoming
                            </span>
                        </div>
                    ) : (
                        <div className="absolute top-3 left-3">
                            <span className="inline-block rounded-sm bg-account-black/80 px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-purity-white backdrop-blur-sm">
                                Past event
                            </span>
                        </div>
                    )}
                </div>
                <div className="flex flex-1 flex-col p-4 md:p-5">
                    <div className="mb-2 flex min-w-0 items-start gap-2 text-xs font-medium uppercase tracking-wide text-account-black/55">
                        <svg
                            className="mt-0.5 h-4 w-4 shrink-0 text-akhirah-teal"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                        </svg>
                        <time dateTime={datetime} className="min-w-0 text-pretty leading-snug">
                            {date}
                        </time>
                    </div>
                    <h3 className="mb-3 min-w-0 flex-1 text-balance font-bold italic leading-snug text-akhirah-teal text-lg transition-colors group-hover:text-[#034b45] sm:text-xl">
                        {title}
                    </h3>
                    <div className="flex min-w-0 items-start gap-2 text-sm leading-snug text-account-black/70">
                        <svg
                            className="mt-0.5 h-4 w-4 shrink-0 text-eternal-gold"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                        </svg>
                        <span className="min-w-0 break-words">{location}</span>
                    </div>
                </div>
            </Link>
        </article>
    );
}
