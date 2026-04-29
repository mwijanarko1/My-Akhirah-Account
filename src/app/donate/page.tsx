import { Header, Footer } from "@/components";
import { api } from "../../../convex/_generated/api";
import { fetchConvexQuery } from "@/lib/server/convex";
import DonateForm from "./DonateForm";

export default async function DonatePage({
  searchParams,
}: {
  searchParams: Promise<{ cancelled?: string; expired?: string }>;
}) {
  const params = await searchParams;
  let funds: Awaited<ReturnType<typeof fetchConvexQuery<typeof api.funds.listActive>>> = [];
  let campaigns: Awaited<ReturnType<typeof fetchConvexQuery<typeof api.campaigns.listPublished>>> = [];
  try {
    [funds, campaigns] = await Promise.all([
      fetchConvexQuery(api.funds.listActive, {}),
      fetchConvexQuery(api.campaigns.listPublished, { limit: 50 }),
    ]);
  } catch {
    funds = [];
    campaigns = [];
  }

  const fundOptions = funds.map((f) => ({
    _id: String(f._id),
    name: f.name,
    slug: f.slug,
    givingType: f.givingType,
  }));

  const campaignOptions = campaigns.map((c) => ({
    id: String(c.id),
    title: c.title,
    slug: c.slug ?? "",
    fundId: c.fundId ? String(c.fundId) : "",
  }));

  return (
    <>
      <Header />
      <main className="min-w-0 flex-1 bg-[var(--color-mercy-mint)]">
        <DonateForm funds={fundOptions} campaigns={campaignOptions} banner={params} />
      </main>
      <Footer />
    </>
  );
}
