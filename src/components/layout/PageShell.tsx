import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

interface PageShellProps {
  children: React.ReactNode;
}

export default function PageShell({ children }: PageShellProps) {
  return (
    <>
      <Header />
      <main className="min-w-0 flex-1">{children}</main>
      <Footer />
    </>
  );
}
