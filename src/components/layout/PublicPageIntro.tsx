import type { ReactNode } from "react";

type PublicPageIntroProps = {
    eyebrow?: string;
    title: string;
    description?: string;
    children?: ReactNode;
};

/**
 * Week 2 — top intro: exactly one `<h1>` per page; pair with {@link PublicPageBodySection} + {@link PublicPageCtaFooter}.
 */
export default function PublicPageIntro({ eyebrow, title, description, children }: PublicPageIntroProps) {
    return (
        <section className="section bg-purity-white border-b border-akhirah-teal/10">
            <div className="container-custom max-w-3xl">
                {eyebrow ? (
                    <p className="text-xs font-semibold uppercase tracking-wider text-akhirah-teal mb-3">{eyebrow}</p>
                ) : null}
                <h1 className="text-3xl sm:text-4xl font-bold text-akhirah-teal mb-4 text-balance">{title}</h1>
                {description ? (
                    <p className="text-account-black/80 text-base sm:text-lg leading-relaxed mb-8">{description}</p>
                ) : null}
                {children}
            </div>
        </section>
    );
}
