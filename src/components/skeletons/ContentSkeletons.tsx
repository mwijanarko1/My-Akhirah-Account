function BlogCardSkeleton() {
  return (
    <div className="card animate-pulse">
      <div className="aspect-video bg-akhirah-teal/15" />
      <div className="space-y-3 p-4 md:p-5">
        <div className="h-3 w-28 rounded-sm bg-eternal-gold/40" />
        <div className="h-3 w-20 rounded-sm bg-account-black/10" />
        <div className="h-5 w-full rounded-sm bg-akhirah-teal/15" />
        <div className="h-5 w-[92%] rounded-sm bg-akhirah-teal/15" />
        <div className="h-4 w-full rounded-sm bg-account-black/10" />
        <div className="h-4 w-full rounded-sm bg-account-black/10" />
        <div className="h-4 w-[66%] rounded-sm bg-account-black/10" />
      </div>
    </div>
  );
}

function EventCardSkeleton() {
  return (
    <div className="card animate-pulse">
      <div className="aspect-video bg-akhirah-teal/15" />
      <div className="space-y-3 p-4 md:p-5">
        <div className="h-3 w-36 rounded-sm bg-akhirah-teal/20" />
        <div className="h-5 w-full rounded-sm bg-akhirah-teal/15" />
        <div className="h-5 w-[83%] rounded-sm bg-akhirah-teal/15" />
        <div className="h-4 w-full rounded-sm bg-account-black/10" />
      </div>
    </div>
  );
}

export function BlogGridSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8">
      {Array.from({ length: count }, (_, i) => (
        <BlogCardSkeleton key={i} />
      ))}
    </div>
  );
}

export function EventGridSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8">
      {Array.from({ length: count }, (_, i) => (
        <EventCardSkeleton key={i} />
      ))}
    </div>
  );
}

export function PageHeroSkeleton() {
  return (
    <section className="bg-akhirah-teal" aria-hidden>
      <div className="container-custom max-w-full animate-pulse py-10 sm:py-12 md:py-14 lg:py-16">
        <div className="h-9 max-w-md rounded-sm bg-white/20 sm:h-10 md:h-11" />
        <div className="mt-4 h-4 max-w-xl rounded-sm bg-white/15" />
        <div className="mt-2 h-4 max-w-lg rounded-sm bg-white/10" />
      </div>
    </section>
  );
}

export function ArticleDetailSkeleton() {
  return (
    <div className="container-custom max-w-full animate-pulse py-10 md:py-14">
      <div className="mx-auto max-w-3xl space-y-4">
        <div className="aspect-video w-full rounded-sm bg-akhirah-teal/15" />
        <div className="h-4 w-40 rounded-sm bg-account-black/15" />
        <div className="h-6 w-full rounded-sm bg-akhirah-teal/15" />
        <div className="h-6 w-5/6 rounded-sm bg-akhirah-teal/15" />
        <div className="space-y-2 pt-4">
          <div className="h-4 w-full rounded-sm bg-account-black/10" />
          <div className="h-4 w-full rounded-sm bg-account-black/10" />
          <div className="h-4 w-[92%] rounded-sm bg-account-black/10" />
        </div>
      </div>
    </div>
  );
}
