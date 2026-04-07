import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "René Rychvalský | Brand & Marketing",
  description: "Osobný brand, marketing a stratégia. René Rychvalský — pomáham firmám a ľuďom budovať silné značky.",
  keywords: ["René Rychvalský", "marketing", "brand", "stratégia", "Slovensko"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
