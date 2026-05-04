import Image from "next/image";
import Link from "next/link";

interface CampaignCardProps {
    title: string;
    description: string;
    imageUrl: string;
    goal: number;
    raised: number;
    href: string;
}

export default function CampaignCard({
    title,
    description,
    imageUrl,
    goal,
    raised,
    href,
}: CampaignCardProps) {
    const progress = Math.min((raised / goal) * 100, 100);

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
            minimumFractionDigits: 0,
        }).format(amount);
    };

    return (
        <article className="card group flex h-full min-w-0 flex-col">
            <div className="relative aspect-video overflow-hidden">
                <Link href={href} aria-hidden="true" tabIndex={-1}>
                    <Image
                        src={imageUrl}
                        alt=""
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </Link>
            </div>
            <div className="p-4 md:p-5 flex flex-col flex-1">
                <Link href={href} className="outline-none focus-visible:ring-2 focus-visible:ring-akhirah-teal rounded-sm">
                    <h3 className="font-bold text-lg mb-2 text-account-black group-hover:text-akhirah-teal transition-colors line-clamp-2 leading-snug">
                        {title}
                    </h3>
                </Link>
                <p className="text-account-black/70 text-sm mb-4 line-clamp-2 flex-1">{description}</p>

                <div className="mb-4" role="region" aria-label={`${title} fundraising progress`}>
                    <div
                        className="h-2 bg-mercy-mint rounded-sm overflow-hidden border border-akhirah-teal/10"
                        role="progressbar"
                        aria-valuenow={Math.round(progress)}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-label={`${Math.round(progress)}% of goal reached`}
                    >
                        <div
                            className="h-full bg-eternal-gold rounded-sm transition-all duration-500"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                </div>

                <div className="flex justify-between text-sm mb-4">
                    <span className="font-bold text-akhirah-teal">{formatCurrency(raised)} raised</span>
                    <span className="text-account-black/55">of {formatCurrency(goal)}</span>
                </div>
                
                <div className="mt-auto pt-2 border-t border-gray-100">
                    <Link 
                        href={`/donate?campaign=${encodeURIComponent(title)}`} 
                        className="w-full btn border-2 border-akhirah-teal text-akhirah-teal hover:bg-mercy-mint py-2 rounded-sm block text-center font-bold text-sm"
                    >
                        Donate to {title}
                    </Link>
                </div>
            </div>
        </article>
    );
}
