import type { ReactNode } from "react";
import Link from "next/link";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export default function SiteLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <Link
                href="#main-content"
                className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-purity-white focus:text-akhirah-teal focus:px-4 focus:py-2 focus:rounded-sm focus:shadow-md focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-eternal-gold"
            >
                Skip to main content
            </Link>
            <Header />
            <div id="main-content" tabIndex={-1} className="min-w-0 flex-1 flex flex-col outline-none">
                {children}
            </div>
            <Footer />
        </>
    );
}
