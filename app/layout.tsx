import type { Metadata } from "next";
import { Sora, Figtree } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/config/site";

const display = Sora({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const body = Figtree({ subsets: ["latin"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.SITE_URL),
  title: { default: `${site.PRODUCT_NAME} – 6-Schritte-Leitfaden | ${site.BRAND_NAME}`, template: `%s | ${site.BRAND_NAME}` },
  description: "53-seitiger Praxis-Leitfaden: KI-Business aufbauen, digitales Produkt erstellen, KI-Influencer entwickeln, über Whop verkaufen und per TikTok vermarkten. Keine Einkommensgarantie.",
  keywords: ["KI Business aufbauen", "Digitales Produkt erstellen", "KI Influencer erstellen", "E-Book verkaufen", "KI Videos erstellen", "TikTok Marketing", "Automatisiertes KI System", "Digitales Business für Anfänger"],
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "de_DE", siteName: site.BRAND_NAME, title: site.PRODUCT_NAME, description: site.PRODUCT_SUBTITLE, images: [{ url: "/cover.png", width: 910, height: 1287, alt: "E-Book-Cover" }] },
  twitter: { card: "summary_large_image", title: site.PRODUCT_NAME, description: site.PRODUCT_SUBTITLE, images: ["/cover.png"] },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${display.variable} ${body.variable}`}>
      <body className="font-sans">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-gold focus:px-4 focus:py-2 focus:text-deep">Zum Inhalt springen</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
