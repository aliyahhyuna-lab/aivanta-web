import Link from "next/link";
import { Logo } from "./Logo";
import { Rich, ph } from "@/lib/rich";
import { legalPages, site } from "@/config/site";

export function Footer() {
  return (
    <footer id="kontakt" className="border-t border-white/10 bg-ink/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-mute">{site.BRAND_NAME} vertreibt einen Praxis-Leitfaden zum Aufbau eines digitalen Produkt-Geschäfts mit KI-Werkzeugen. Allgemeine Bildungsinhalte, keine Einkommensgarantie.</p>
          <p className="mt-4 text-sm">Kontakt: <Rich text={ph(site.SUPPORT_EMAIL, "SUPPORT-E-MAIL EINTRAGEN")} /></p>
        </div>
        <nav aria-label="Seitenbereiche">
          <p className="font-medium">Navigation</p>
          <ul className="mt-3 space-y-2 text-sm text-mute">
            {[["/#system", "Das System"], ["/#inhalte", "Inhalte"], ["/#zielgruppe", "Für wen ist es?"], ["/#faq", "FAQ"], ["/#kaufen", "Kaufen"]].map(([h, l]) => (
              <li key={h}><Link href={h} className="hover:text-white">{l}</Link></li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Rechtliches">
          <p className="font-medium">Rechtliches</p>
          <ul className="mt-3 space-y-2 text-sm text-mute">
            {legalPages.map((p) => <li key={p.slug}><Link href={`/${p.slug}`} className="hover:text-white">{p.title}</Link></li>)}
          </ul>
        </nav>
      </div>
      <p className="border-t border-white/10 px-5 py-6 text-center text-xs text-mute">© {new Date().getFullYear()} {site.BRAND_NAME}. Alle Rechte vorbehalten. Unabhängig von TikTok, Whop, Google, Canva und anderen genannten Anbietern; Marken gehören den jeweiligen Inhabern.</p>
    </footer>
  );
}
