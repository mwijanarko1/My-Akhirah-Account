interface PageHeroProps {
  title: string;
  subtitle?: string;
}

export default function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section
      className="bg-akhirah-teal text-purity-white"
      aria-labelledby="page-hero-heading"
    >
      <div className="container-custom max-w-full py-10 sm:py-12 md:py-14 lg:py-16">
        <h1
          id="page-hero-heading"
          className="max-w-4xl text-balance font-bold italic leading-tight text-[clamp(1.75rem,3vw+1rem,2.75rem)]"
        >
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/90 sm:mt-4 sm:text-base">
            {subtitle}
          </p>
        ) : null}
      </div>
    </section>
  );
}
