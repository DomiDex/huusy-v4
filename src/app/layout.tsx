import "~/styles/globals.css";
import { customFont } from "~/lib/fonts";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Huusy",
  description: "Find the perfect professional for your home",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={customFont.className}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
