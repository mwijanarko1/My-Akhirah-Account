interface MarkdownArticleBodyProps {
  markdown: string;
  /** Visually labelled section for heading hierarchy (parent page supplies `<h2>`). */
  className?: string;
}

/** Renders simple paragraph breaks; no full Markdown parser (dependency-free). */
export default function MarkdownArticleBody({
  markdown,
  className = "",
}: MarkdownArticleBodyProps) {
  const blocks = markdown
    .split(/\n\s*\n/)
    .map((block) => block.trim())
    .filter(Boolean);

  return (
    <div className={`space-y-4 text-base leading-relaxed text-account-black/90 sm:text-lg ${className}`}>
      {blocks.map((block, index) => (
        <p key={index} className="text-pretty">
          {block}
        </p>
      ))}
    </div>
  );
}
