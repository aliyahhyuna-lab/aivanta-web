# AIVANTA – Verkaufswebsite für „Dein eigenes automatisiertes KI-System“

Next.js 14 (App Router), React, TypeScript, Tailwind CSS, Lucide, Framer Motion. Keine Tracking-Skripte, keine simulierten Käufe.

## Installation
```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```
Voraussetzung: Node.js 18.18 oder neuer. Dieses Projekt wurde **noch nicht** mit `npm install`/`npm run build` getestet. Führe beides einmal aus und behebe ggf. Meldungen.

## Zentrale Konfiguration: `config/site.ts`
`BRAND_NAME`, `PRODUCT_PRICE`, `PRODUCT_CURRENCY`, `WHOP_CHECKOUT_URL`, `PRODUCT_PDF_URL`, `SUPPORT_EMAIL`. Leere Werte erscheinen als gelbe Platzhalter. Ohne `WHOP_CHECKOUT_URL` ist der Kaufbutton deaktiviert. Setze `NEXT_PUBLIC_SITE_URL` (z. B. `https://deine-domain.de`) für Canonical, Sitemap und Open Graph.
`PRODUCT_PDF_URL` ist nur Dokumentation: Die PDF gehört in Whop (Produkt → Datei), nicht öffentlich auf diese Seite.

## Vor der Veröffentlichung
1. Alle gelben `[…]`-Platzhalter suchen und ersetzen: `lib/legal.ts` (Rechtstexte), `app/page.tsx` (FAQ, Steuerhinweis), `config/site.ts`.
2. Rechtstexte anwaltlich oder über einen spezialisierten Anbieter erstellen/prüfen lassen, besonders AGB, Widerrufsbelehrung und -formular (gesetzliche Muster), Datenschutzerklärung und Impressum (§ 5 DDG).
3. Whop-Checkout rechtlich und technisch prüfen: Bestellbutton (§ 312j BGB), Gesamtpreis, Zustimmung zum vorzeitigen Beginn der Bereitstellung und Bestätigung des Verlusts des Widerrufsrechts (§ 356 Abs. 5 BGB), Bestellbestätigung auf dauerhaftem Datenträger. Eine bloße Checkbox genügt nicht pauschal.
4. Bei Einbindung von Analyse, Marketing oder externen Inhalten: Einwilligungsbanner (§ 25 TDDDG) und Datenschutzerklärung anpassen.
5. Produktangaben (Gebühren, Gratis-Limits) gegen die Anbieterseiten prüfen; das E-Book nennt Stand Oktober 2026.
6. Marke „AIVANTA“ auf Verfügbarkeit prüfen und Namen/Logo (`components/Logo.tsx`) ggf. ändern.

## Deployment (Vercel)
Repository auf GitHub pushen, in Vercel importieren, Umgebungsvariable `NEXT_PUBLIC_SITE_URL` setzen, Domain verbinden. Alternativ jeder Node-Host mit `npm run build && npm start`. Hosting-Anbieter in der Datenschutzerklärung eintragen.

## Struktur
`app/page.tsx` Startseite · `app/[slug]/page.tsx` neun Rechtsseiten (/impressum, /datenschutz, /agb, /widerruf, /widerrufsformular, /zahlung, /lieferung, /haftung, /urheberrecht) · `app/not-found.tsx` 404 · `app/sitemap.ts`, `app/robots.ts` · `components/` · `public/cover.png` (Seite 1 der PDF)

## Bewusst nicht enthalten
Keine strukturierten Daten (Product-Schema erst mit echtem Preis und Checkout), keine Bewertungen, Zahlen oder Einkommensversprechen, keine Firmenlogos von Drittanbietern.
