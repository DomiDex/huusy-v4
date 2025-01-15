import MainHeader from "~/components/layout/MainHeader";

export default function MainLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <MainHeader />
      {children}
    </>
  );
}
