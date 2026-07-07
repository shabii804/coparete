import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Minhas Enterprises — Building Tomorrow, Today",
  description:
    "Minhas Enterprises is a diversified conglomerate delivering excellence across industries with premium quality, innovation, and integrity. Discover our story, services, and impact.",
  keywords: [
    "Minhas Enterprises",
    "conglomerate",
    "corporate",
    "premium quality",
    "innovation",
    "excellence",
  ],
  authors: [{ name: "Minhas Enterprises" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Minhas Enterprises — Building Tomorrow, Today",
    description:
      "A diversified conglomerate delivering excellence across industries with premium quality, innovation, and integrity.",
    siteName: "Minhas Enterprises",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Minhas Enterprises — Building Tomorrow, Today",
    description:
      "A diversified conglomerate delivering excellence across industries.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
