import Link from "next/link";
import { Header, Footer } from "@/components";

export default async function DonateSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ ref?: string }>;
}) {
  const params = await searchParams;
  const ref = params.ref?.trim();

  return (
    <>
      <Header />
      <main className="mx-auto max-w-2xl flex-1 px-4 py-16 sm:px-6">
        <h1 className="text-3xl font-bold text-[var(--color-akhirah-teal-dark)]">Thank you</h1>
        <p className="mt-4 text-neutral-800">
          Your payment is being confirmed. If your bank or provider shows a success screen, your gift is on its way. A
          receipt will be emailed when processing finishes.
        </p>
        {ref ? (
          <p className="mt-4 text-sm text-neutral-600">
            Reference: <span className="font-mono font-medium">{ref}</span>
          </p>
        ) : null}
        <p className="mt-8">
          <Link className="btn btn-secondary min-h-11 inline-flex" href="/donate">
            Make another gift
          </Link>
        </p>
      </main>
      <Footer />
    </>
  );
}
