import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: {
    default: "Linda Schmidt Trades LLC | Professional Trading & Procurement Services",
    template: "%s | Linda Schmidt Trades LLC"
  },
  description: "Professional trading and procurement services for businesses and individuals. Bulk sourcing, custom procurement, supply consulting, and logistics across all 50 states.",
  keywords: ["trading", "procurement", "wholesale", "bulk sourcing", "supply chain", "Connecticut", "B2B", "B2C"],
  authors: [{ name: "Linda Schmidt Trades LLC" }],
  creator: "Linda Schmidt Trades LLC",
  publisher: "Linda Schmidt Trades LLC",
  metadataBase: new URL("https://lindaschmidttrades.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lindaschmidttrades.com",
    title: "Linda Schmidt Trades LLC | Professional Trading & Procurement Services",
    description: "Professional trading and procurement services for businesses and individuals. From home office setups to enterprise-scale supply solutions.",
    siteName: "Linda Schmidt Trades LLC",
    images: [
      {
        url: "/logos/icon-primary-256x.svg",
        width: 256,
        height: 256,
        alt: "Linda Schmidt Trades LLC Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Linda Schmidt Trades LLC | Professional Trading & Procurement Services",
    description: "Professional trading and procurement services for businesses and individuals. From home office setups to enterprise-scale supply solutions.",
    images: ["/logos/icon-primary-256x.svg"],
  },
  icons: {
    icon: [
      { url: "/favicons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/favicons/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "icon", url: "/favicons/favicon.ico" },
    ],
  },
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background font-sans antialiased">
        <div className="relative flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
