import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

interface PageShellProps {
  children: React.ReactNode;
}

export default function PageShell({ children }: PageShellProps) {
  return (
    <>
      <Link
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-purity-white focus:text-akhirah-teal focus:px-4 focus:py-2 focus:rounded-sm focus:shadow-md focus:outline focus:outline-2 focus:outline-eternal-gold"
      >
        Skip to main content
      </Link>
      <Header />
      <main id="main-content" className="min-w-0 flex-1">
        {children}
      </main>
      <Footer />
    </>
  );
}
