/**
 * ZENTRALE KONFIGURATION – hier alle Angaben pflegen.
 * Leere Werte werden auf der Website als gelb markierte Platzhalter angezeigt.
 */
export const site = {
  BRAND_NAME: "AIVANTA",
  PRODUCT_NAME: "Dein eigenes automatisiertes KI-System",
  PRODUCT_SUBTITLE: "In sechs Schritten von der Nische bis zum Verkauf.",
  PRODUCT_PRICE: "", // z. B. "14,90"
  PRODUCT_CURRENCY: "EUR",
  WHOP_CHECKOUT_URL: "", // z. B. "https://whop.com/checkout/..."
  PRODUCT_PDF_URL: "", // nur intern/Dokumentation; die PDF wird über Whop ausgeliefert, NICHT hier öffentlich verlinken
  SUPPORT_EMAIL: "", // z. B. "support@deine-domain.de"
  SITE_URL: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
};

export const priceLabel = () =>
  site.PRODUCT_PRICE ? `${site.PRODUCT_PRICE} ${site.PRODUCT_CURRENCY === "EUR" ? "€" : site.PRODUCT_CURRENCY}` : "[[PREIS EINTRAGEN]]";

export const legalPages = [
  { slug: "impressum", title: "Impressum" },
  { slug: "datenschutz", title: "Datenschutzerklärung" },
  { slug: "agb", title: "AGB" },
  { slug: "widerruf", title: "Widerrufsbelehrung" },
  { slug: "widerrufsformular", title: "Widerrufsformular" },
  { slug: "zahlung", title: "Zahlungsinformationen" },
  { slug: "lieferung", title: "Lieferung digitaler Produkte" },
  { slug: "haftung", title: "Haftungsausschluss" },
  { slug: "urheberrecht", title: "Urheberrecht & Nutzungsrechte" },
] as const;
