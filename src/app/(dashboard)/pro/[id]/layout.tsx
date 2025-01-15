import Footer from "~/components/layout/Footer";
import ProDashboardHeader from "~/components/layout/ProDashboardHeader";

export default function ProDashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-screen">
      <ProDashboardHeader />
      {children}
      <Footer />
    </div>
  );
}
