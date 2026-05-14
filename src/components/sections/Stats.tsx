interface StatsProps {
  stats: {
    value: string;
    label: string;
  }[];
}

function statsGridClass(count: number): string {
  const base = "gap-x-3 gap-y-8 text-center sm:gap-x-4 sm:gap-y-10 md:gap-x-6 md:gap-10";
  if (count <= 1) return `grid max-w-xs mx-auto grid-cols-1 ${base}`;
  if (count === 2) return `grid grid-cols-2 ${base}`;
  if (count === 3) return `grid grid-cols-1 sm:grid-cols-3 ${base}`;
  return `grid grid-cols-2 md:grid-cols-4 ${base}`;
}

export default function Stats({ stats }: StatsProps) {
  return (
    <section className="bg-mercy-mint border-y border-akhirah-teal/10 py-10 sm:py-12 md:py-16">
      <div className="container-custom max-w-full">
        <div className="mx-auto mb-8 max-w-2xl text-center md:mb-10">
          <p className="text-xs font-semibold uppercase tracking-wider text-akhirah-teal/90">Impact</p>
          <h2 className="mt-1 text-xl font-bold text-akhirah-teal sm:text-2xl md:text-3xl">Numbers we stand behind</h2>
          <p className="mt-2 text-sm leading-relaxed text-account-black/70 sm:text-base">
            Figures come from verified impact metrics published by our team. They update as new data is approved.
          </p>
        </div>

        {stats.length === 0 ? (
          <div
            role="status"
            className="mx-auto max-w-xl rounded-sm border border-akhirah-teal/15 bg-purity-white/80 px-5 py-8 text-center shadow-sm"
          >
            <p className="text-base font-semibold text-akhirah-teal">Impact figures coming soon</p>
            <p className="mt-2 text-sm leading-relaxed text-account-black/70">
              When our next verified snapshot is published, headline totals will appear here. Explore active programmes
              and appeals in the meantime.
            </p>
          </div>
        ) : (
          <div className={statsGridClass(stats.length)}>
            {stats.map((stat, index) => (
              <div key={index} className="min-w-0 px-0.5">
                <div
                  className="text-2xl font-bold text-akhirah-teal sm:text-3xl md:text-4xl lg:text-5xl mb-1.5 sm:mb-2"
                  style={{ fontVariantNumeric: "tabular-nums" }}
                >
                  {stat.value}
                </div>
                <div className="text-xs font-medium text-account-black/70 sm:text-sm md:text-base leading-snug">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
