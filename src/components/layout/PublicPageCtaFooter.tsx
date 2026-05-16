import Link from "next/link";
import type { ReactNode } from "react";

export type PublicCtaAction = {
    href: string;
    label: string;
    variant?: "primary" | "secondary" | "outlineOnDark";
};

type PublicPageCtaFooterProps = {
    title: string;
    description?: string | ReactNode;
    actions: PublicCtaAction[];
    surface?: "teal" | "mint";
};

/**
 * Week 2 — closing CTA strip: intro → body section(s) → this.
 */
export default function PublicPageCtaFooter({
    title,
    description,
    actions,
    surface = "teal",
}: PublicPageCtaFooterProps) {
    const shell =
        surface === "teal"
            ? "bg-akhirah-teal text-purity-white border-akhirah-teal"
            : "bg-mercy-mint text-account-black border-akhirah-teal/10";

    return (
        <section className={`section ${shell} border-t`}>
            <div className="container-custom max-w-3xl">
                <h2 className="text-2xl sm:text-3xl font-bold text-balance mb-3">{title}</h2>
                {description ? (
                    <div
                        className={`text-sm sm:text-base leading-relaxed mb-8 max-w-2xl ${
                            surface === "teal" ? "text-white/85" : "text-account-black/80"
                        }`}
                    >
                        {description}
                    </div>
                ) : null}
                <ul className="flex flex-col sm:flex-row sm:flex-wrap gap-3 list-none p-0 m-0">
                    {actions.map((a) => {
                        const key = `${a.href}-${a.label}`;
                        if (surface === "teal" && a.variant === "outlineOnDark") {
                            return (
                                <li key={key}>
                                    <Link
                                        href={a.href}
                                        className="inline-flex min-h-11 items-center justify-center rounded-sm border border-white/35 px-5 py-3 text-sm font-semibold text-purity-white hover:border-eternal-gold hover:text-eternal-gold transition-colors"
                                    >
                                        {a.label}
                                    </Link>
                                </li>
                            );
                        }
                        if (surface === "mint" || a.variant === "secondary") {
                            return (
                                <li key={key}>
                                    <Link href={a.href} className="btn btn-secondary font-semibold text-center">
                                        {a.label}
                                    </Link>
                                </li>
                            );
                        }
                        return (
                            <li key={key}>
                                <Link href={a.href} className="btn btn-primary font-bold text-center">
                                    {a.label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
}
