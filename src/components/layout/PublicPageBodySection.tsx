import type { ReactNode } from "react";

type Surface = "white" | "mint";

type PublicPageBodySectionProps = {
    children: ReactNode;
    surface?: Surface;
    wide?: boolean;
    /** Extra vertical spacing between stacked blocks */
    spacious?: boolean;
    className?: string;
    id?: string;
};

const surfaceClass: Record<Surface, string> = {
    white: "bg-purity-white",
    mint: "bg-mercy-mint/45",
};

/**
 * Week 2 — middle “body” bands between {@link PublicPageIntro} and {@link PublicPageCtaFooter}.
 */
export default function PublicPageBodySection({
    children,
    surface = "white",
    wide = false,
    spacious = false,
    className = "",
    id,
}: PublicPageBodySectionProps) {
    const max = wide ? "max-w-4xl" : "max-w-3xl";
    const spacing = spacious ? "space-y-10 sm:space-y-12" : "";
    return (
        <section
            id={id}
            className={`section scroll-mt-24 ${surfaceClass[surface]} border-y border-akhirah-teal/10 ${className}`}
        >
            <div className={`container-custom ${max} ${spacing}`}>{children}</div>
        </section>
    );
}
