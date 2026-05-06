import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
    title: string;
    category: string;
    excerpt: string;
    imageUrl: string;
    href: string;
    date?: string;
    datetime?: string;
}

export default function BlogCard({
    title,
    category,
    excerpt,
    imageUrl,
    href,
    date,
    datetime,
}: BlogCardProps) {
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
                    <div className="absolute top-3 left-3">
                        <span className="inline-block rounded-sm bg-eternal-gold px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-akhirah-teal">
                            {category}
                        </span>
                    </div>
                </div>
                <div className="p-4 md:p-5 flex flex-col flex-1">
                    {date && (
                        <time
                            dateTime={datetime}
                            className="mb-2 block text-xs font-medium uppercase tracking-wide text-account-black/55"
                        >
                            {date}
                        </time>
                    )}
                    <h3 className="mb-2 min-w-0 text-balance font-bold italic leading-snug text-akhirah-teal text-lg transition-colors group-hover:text-[#034b45] sm:text-xl">
                        {title}
                    </h3>
                    <p className="mb-4 flex-1 text-pretty text-sm leading-relaxed text-account-black/70 line-clamp-6 sm:text-base">
                        {excerpt}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-akhirah-teal group-hover:text-eternal-gold transition-colors">
                        Read more
                        <span aria-hidden>→</span>
                    </span>
                </div>
            </Link>
        </article>
    );
}
