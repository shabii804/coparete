import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Minhas Enterprises — Building Tomorrow, Today",
  description:
    "Minhas Enterprises is a diversified conglomerate delivering excellence across industries with premium quality, innovation, and integrity. Discover our story, services, products, and impact.",
  keywords: [
    "Minhas Enterprises",
    "conglomerate",
    "corporate",
    "real estate",
    "trading",
    "technology",
    "energy",
    "logistics",
    "investments",
  ],
  authors: [{ name: "Minhas Enterprises" }],
  icons: {
    icon: "/minhas-logo.svg",
  },
  openGraph: {
    title: "Minhas Enterprises — Building Tomorrow, Today",
    description:
      "A diversified conglomerate delivering excellence across industries with premium quality, innovation, and integrity.",
    siteName: "Minhas Enterprises",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Minhas Enterprises — Building Tomorrow, Today",
    description:
      "A diversified conglomerate delivering excellence across industries.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Organization structured data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Minhas Enterprises",
              url: "https://minhas-enterprises.com",
              logo: "https://minhas-enterprises.com/minhas-logo.svg",
              foundingDate: "2001",
              description:
                "A diversified conglomerate delivering excellence across real estate, trading, technology, energy, and logistics.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Minhas Tower, Gulberg III",
                addressLocality: "Lahore",
                addressRegion: "Punjab",
                addressCountry: "PK",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+92-42-111-222-333",
                contactType: "customer service",
                email: "hello@minhas-enterprises.com",
              },
              sameAs: [
                "https://www.linkedin.com/company/minhas-enterprises",
                "https://twitter.com/minhasent",
                "https://www.facebook.com/minhasenterprises",
                "https://www.instagram.com/minhasenterprises",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${jakarta.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
