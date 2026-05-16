import SectionHeader from "./SectionHeader";

export interface ContentSectionProps {
  id?: string;
  variant?: "white" | "mint";
  /** When `variant` is `mint`, adds top/bottom border between sections */
  bordered?: boolean;
  "aria-label"?: string;
  className?: string;
  title: string;
  subtitle?: string;
  headerCentered?: boolean;
  viewAllHref?: string;
  viewAllText?: string;
  children: React.ReactNode;
}

/** Section + container + `SectionHeader` + body — shared across marketing pages. */
export default function ContentSection({
  id,
  variant = "white",
  bordered = false,
  "aria-label": ariaLabel,
  className,
  title,
  subtitle,
  headerCentered = true,
  viewAllHref,
  viewAllText,
  children,
}: ContentSectionProps) {
  const surface = variant === "mint" ? "mint" : "white";
  const bg =
    variant === "mint"
      ? `bg-mercy-mint${bordered ? " border-y border-akhirah-teal/10" : ""}`
      : "bg-purity-white";

  const sectionClass = ["section", bg, className].filter(Boolean).join(" ");

  return (
    <section id={id} className={sectionClass} aria-label={ariaLabel}>
      <div className="container-custom max-w-full">
        <SectionHeader
          title={title}
          subtitle={subtitle}
          centered={headerCentered}
          surface={surface}
          viewAllHref={viewAllHref}
          viewAllText={viewAllText}
        />
        {children}
      </div>
    </section>
  );
}
