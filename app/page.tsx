import Link from "next/link";
import { AlertTriangle, ArrowRight, Check, FileText, X } from "lucide-react";
import { CoverTilt } from "@/components/CoverTilt";
import { Steps, type Step } from "@/components/Steps";
import { Faq } from "@/components/Faq";
import { Rich } from "@/lib/rich";
import { priceLabel, site } from "@/config/site";

const problems = ["Welche Nische soll ich wählen?", "Welches digitale Produkt kann ich erstellen?", "Wie baue ich einen KI-Influencer auf?", "Wie produziere ich KI-Videos?", "Wie verkaufe ich digitale Produkte?", "Mir fehlt ein klarer Ablauf."];

const steps: Step[] = [
  { title: "Nische finden", text: "Du suchst ein Thema, das Aufmerksamkeit bekommt und ein dauerhaftes Problem löst, und prüfst es, bevor du Wochen investierst.", points: ["Markt- und Zielgruppenanalyse", "Fünf Kriterien einer guten Nische", "Sechs kostenlose Recherchequellen", "Google Trends und TikTok Creative Center", "Hype oder Evergreen?", "Bewertungsmatrix und Validierung in sieben Tagen"], result: "Eine Nische, eine Zielgruppe, mindestens 10 belegte Fragen und eine ausgefüllte Bewertungsmatrix." },
  { title: "E-Book erstellen", text: "Dein E-Book ist das Produkt. KI liefert Material, du bist Autor und Lektor.", points: ["Produktversprechen als Satz formulieren", "Aufbau in acht Bausteinen", "Schreiben mit KI-Prompts", "KI-Texte kritisch prüfen", "Gestaltung mit Canva, Google Docs, LibreOffice", "Qualitätscheck, Preis und Positionierung"], result: "Ein fertiges, geprüftes PDF mit Cover, Impressum, Quellen und Bonus-Vorlage." },
  { title: "KI-Influencer aufbauen", text: "Eine KI-Figur mit festem Aussehen und fester Persönlichkeit wird das Gesicht deiner Videos, offen als KI gekennzeichnet.", points: ["Persona und Charakter definieren", "Realistische KI-Gesichter erzeugen", "Konsistenz der Figur herstellen", "Stimme und Video-Produktion", "Drei-Fragen-Check für Werkzeuge", "Rechtliches und Kennzeichnung"], result: "Persona-Steckbrief, Master-Referenzset mit fünf Bildern, Videoablauf und ein Testvideo." },
  { title: "Whop-Shop einrichten", text: "Whop stellt Verkaufsseite, Bezahlvorgang und Auslieferung bereit, ohne eigene Website.", points: ["Konto erstellen", "Produkt anlegen und PDF hochladen", "Preis und Zahlungsmöglichkeiten", "Checkout-Link erstellen", "Automatische digitale Auslieferung", "Gebühren, Steuern und Recht in Deutschland"], result: "Whop-Konto, Produkt mit PDF, getesteter Checkout-Link und eingebundene Rechtstexte." },
  { title: "KI-Videos und Marketing", text: "Du baust einen wiederholbaren Videoprozess, wertest Zahlen aus und verbesserst, statt auf einen viralen Treffer zu hoffen.", points: ["Vier Content-Säulen", "Zehn Hook-Formeln", "Aufbau kurzer Videos", "Drei Skriptvorlagen", "14-Tage-Startplan", "Kennzahlen analysieren und optimieren"], result: "Content-Plan, Skript-System, 14-Tage-Plan und Zahlen-Log." },
  { title: "TikTok und Verkauf", text: "Du richtest den Account ein, baust den Weg vom Video zum Shop und hältst die Plattformregeln ein.", points: ["Account einrichten und Profil optimieren", "Bio und Shop-Link", "Keyword-Strategie und Verkaufsfunnel", "DM-Vorlagen und Datenschutz", "Instagram als optionaler Kanal", "Sicherheit und Sperrungen vermeiden"], result: "Eingerichteter Account, Bio-Link, Keyword-Konzept, DM-Vorlagen und Sicherheits-Checkliste. Hinweis aus dem E-Book: Ein automatischer Kommentar-zu-DM-Weg funktioniert auf TikTok in Deutschland derzeit nicht." },
];

const included = ["53-seitiger Praxisleitfaden", "Sechs aufeinander aufbauende Schritte", "90-Tage-Zeitplan", "Konkrete Schritt-für-Schritt-Anleitungen", "KI-Prompts zum Kopieren", "Bewertungsmatrix für Nischen", "Persona-Steckbrief", "Drei-Fragen-Check für Werkzeuge", "Posting- und Zahlen-Log", "Verkaufs- und Gebühren-Log", "Linkliste und Quellen", "Glossar"];

const tools: [string, string, string][] = [
  ["ChatGPT, Claude, Gemini", "Gliederung, Rohtexte, Prüfung", "Gratis-Tarife mit Nutzungslimits"],
  ["Leonardo AI", "Gesichter und Szenenbilder", "Tageskontingent; Bilder im Gratis-Tarif öffentlich"],
  ["Ideogram", "Bilder, auch mit Text", "Kleines wöchentliches Kontingent"],
  ["Canva", "Cover und Layout", "Nur Gratis-Elemente; Lizenz prüfen"],
  ["CapCut", "Videoschnitt, Untertitel", "Kostenloser Editor; Tarif prüfen"],
  ["HeyGen", "Sprechender Avatar", "Laut Anbieter wenige Gratis-Videos pro Monat"],
  ["Whop", "Shop, Checkout, Auslieferung", "Keine Monatsgebühr; Gebühren pro Verkauf"],
  ["TikTok", "Reichweite und Verkaufsweg", "Konto kostenlos"],
  ["Google Trends", "Nachfrage prüfen", "Kostenlos"],
  ["ManyChat", "Auto-Antworten (nur Instagram)", "Gratis-Tarif mit 25 aktiven Kontakten pro Monat"],
];

const roadmap: [string, string][] = [["Woche 1", "Nische recherchieren und validieren"], ["Woche 2–3", "E-Book erstellen und gestalten"], ["Woche 3", "KI-Influencer aufbauen"], ["Woche 4", "Shop und Social-Media-Account einrichten"], ["Woche 5–8", "Regelmäßig Content veröffentlichen"], ["Woche 9–12", "Ergebnisse auswerten und optimieren"]];

const faq = [
  { q: "Was genau bekomme ich nach dem Kauf?", a: "Einen 53-seitigen PDF-Praxisleitfaden mit sechs Schritten, 90-Tage-Zeitplan, KI-Prompts, Vorlagen (Bewertungsmatrix, Persona-Steckbrief, Logs), Linkliste und Glossar." },
  { q: "Wie viele Seiten hat das E-Book?", a: "53 Seiten." },
  { q: "Ist das E-Book für Anfänger geeignet?", a: "Ja. Der Leitfaden führt Schritt für Schritt durch den Ablauf und endet jedes Kapitel mit einer Checkliste." },
  { q: "Brauche ich Vorkenntnisse?", a: "Nein. Du brauchst Computer, Smartphone, Internetzugang, eine eigene E-Mail-Adresse für das Projekt und die Bereitschaft, regelmäßig Videos zu veröffentlichen." },
  { q: "Welche Programme benötige ich?", a: "Je nach Phase z. B. einen KI-Chatbot, einen Bildgenerator, einen Video-Editor wie CapCut, Canva oder Google Docs, Whop und TikTok. Du kannst Werkzeuge austauschen." },
  { q: "Kann ich mit kostenlosen Tools starten?", a: "Ja, laut E-Book mit 0 € Startbudget. Gratis-Tarife haben aber Limits, teils Wasserzeichen, und Whop berechnet Gebühren pro Verkauf. Bei dauerhaftem Verkauf können Kosten wie die Gewerbeanmeldung anfallen." },
  { q: "Wie viel Zeit muss ich investieren?", a: "Etwa 5 bis 10 Stunden pro Woche. Der Aufbau (Schritte 1 bis 4) dauert laut E-Book realistisch 3 bis 4 Wochen." },
  { q: "Kann ich damit garantiert Geld verdienen?", a: "Nein. Es gibt keine Einkommensgarantie. Viele Kanäle bleiben klein. Plane das Projekt als Experiment mit offenem Ausgang." },
  { q: "Wie funktioniert die Bezahlung?", a: "Du wirst zum Checkout bei Whop weitergeleitet. Zahlungsarten: [[ZAHLUNGSARTEN aus dem Whop-Checkout eintragen]]. Details unter „Zahlungsinformationen“." },
  { q: "Wie erhalte ich mein E-Book?", a: "Nach erfolgreicher Zahlung als PDF-Download. [[Auslieferungsweg nach Einrichtung bei Whop bestätigen]]" },
  { q: "Was passiert, wenn der Download nicht funktioniert?", a: "Schreibe an unseren Support: [[SUPPORT-E-MAIL]]." },
  { q: "Gibt es eine Rückerstattung?", a: "Es gelten die gesetzlichen Regeln zum Widerruf, die bei digitalen Inhalten unter Bedingungen erlöschen können. Siehe Widerrufsbelehrung. [[Freiwillige Rückerstattungsregelung festlegen, falls gewünscht]]" },
  { q: "Ist das E-Book eine Finanz- oder Rechtsberatung?", a: "Nein. Es sind allgemeine Bildungs- und Informationsinhalte, keine Rechts-, Steuer-, Finanz- oder Anlageberatung. Preise und Plattformregeln können sich ändern; prüfe Angaben vor der Anwendung." },
];

function BuyButton({ className = "" }: { className?: string }) {
  return site.WHOP_CHECKOUT_URL ? (
    <a href={site.WHOP_CHECKOUT_URL} className={`btn btn-gold ${className}`} rel="noopener noreferrer">Jetzt Leitfaden sichern <ArrowRight className="h-4 w-4" aria-hidden="true" /></a>
  ) : (
    <span className={`btn cursor-not-allowed border border-dashed border-gold/60 bg-gold/10 text-gold ${className}`} role="note"><Rich text="[[WHOP_CHECKOUT_URL FEHLT – Kauf noch nicht möglich]]" /></span>
  );
}

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="sec grid items-center gap-14 !py-16 lg:grid-cols-[1.15fr_.85fr] md:!py-24">
          <div>
            <h1 className="font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">Baue dein eigenes KI-Business. Von der ersten Idee bis zum digitalen Verkauf.</h1>
            <p className="lead">Entdecke einen strukturierten 6-Schritte-Leitfaden, mit dem du lernst, digitale Produkte zu entwickeln, KI-Influencer aufzubauen und deine Inhalte über Social Media zu vermarkten.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/#kaufen" className="btn btn-gold">Jetzt Leitfaden sichern</Link>
              <Link href="/#system" className="btn btn-ghost">System entdecken</Link>
            </div>
            <p className="mt-6 max-w-md text-sm text-mute">Keine Einkommensgarantie. Ein Praxis-Leitfaden mit offenem Ausgang, kostenlos startbar mit Gratis-Werkzeugen.</p>
          </div>
          <CoverTilt />
        </div>
      </section>

      <section className="sec !pt-8">
        <h2 className="h2">Der Einstieg scheitert selten an Werkzeugen, sondern am fehlenden Ablauf.</h2>
        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((p) => <li key={p} className="card px-5 py-4 text-mute">{p}</li>)}
        </ul>
        <p className="lead">Der Leitfaden beantwortet das mit sechs aufeinander aufbauenden Schritten. Jedes Kapitel endet mit einer Checkliste: Erst wenn alles erledigt ist, geht es weiter.</p>
      </section>

      <section id="system" className="sec">
        <h2 className="h2">Die sechs Schritte</h2>
        <p className="lead">Wähle einen Schritt, um zu sehen, was du darin lernst und was am Ende fertig ist.</p>
        <Steps steps={steps} />
      </section>

      <section id="inhalte" className="sec">
        <h2 className="h2">Was im E-Book enthalten ist</h2>
        <p className="lead">Angaben laut Leitfaden, Ausgabe Oktober 2026. Die vollständige PDF gibt es nur nach dem Kauf.</p>
        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {included.map((i) => <li key={i} className="card flex items-center gap-3 px-5 py-4"><FileText className="h-5 w-5 shrink-0 text-gold" aria-hidden="true" />{i}</li>)}
        </ul>
      </section>

      <section className="sec">
        <h2 className="h2">Werkzeuge und Plattformen</h2>
        <p className="lead">Beispiele aus dem E-Book, Stand Oktober 2026. Gratis-Tarife haben Limits und können sich ändern; prüfe Bedingungen vor der Nutzung beim jeweiligen Anbieter.</p>
        <div className="mt-10 grid gap-3 md:grid-cols-2">
          {tools.map(([n, use, free]) => (
            <div key={n} className="card px-5 py-4">
              <p className="font-display font-semibold">{n}</p>
              <p className="mt-1 text-sm">{use}</p>
              <p className="mt-1 text-sm text-mute">{free}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-xs text-mute">Dieses E-Book steht in keiner Verbindung zu den genannten Unternehmen. Alle Marken gehören ihren Inhabern.</p>
      </section>

      <section id="zielgruppe" className="sec">
        <h2 className="h2">Für wen ist das E-Book?</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <div className="card p-7">
            <h3 className="font-display text-xl font-semibold">Geeignet für</h3>
            <ul className="mt-5 space-y-3">{["Einsteiger im digitalen Business", "Menschen, die digitale Produkte erstellen möchten", "Interessierte an KI-Content", "Menschen, die Social-Media-Marketing lernen möchten", "Personen, die einen strukturierten Arbeitsablauf suchen"].map((t) => <li key={t} className="flex gap-2.5"><Check className="mt-1 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />{t}</li>)}</ul>
          </div>
          <div className="card p-7">
            <h3 className="font-display text-xl font-semibold">Nicht geeignet für</h3>
            <ul className="mt-5 space-y-3">{["Menschen, die garantierte Einnahmen erwarten", "Menschen, die ohne eigene Arbeit Geld verdienen möchten", "Personen, die keine Zeit in die Umsetzung investieren wollen"].map((t) => <li key={t} className="flex gap-2.5"><X className="mt-1 h-4 w-4 shrink-0 text-mute" aria-hidden="true" />{t}</li>)}</ul>
          </div>
        </div>
      </section>

      <section className="sec">
        <h2 className="h2">Dein 90-Tage-Zeitplan</h2>
        <ol className="mt-10 grid gap-4 md:grid-cols-6">
          {roadmap.map(([w, t]) => (
            <li key={w} className="relative border-l-2 border-gold/60 pl-4 md:border-l-0 md:border-t-2 md:pl-0 md:pt-4">
              <p className="font-display font-semibold text-gold">{w}</p>
              <p className="mt-1 text-sm text-mute">{t}</p>
            </li>
          ))}
        </ol>
        <p className="mt-6 text-sm text-mute">Plane je Phase etwa 5 bis 10 Stunden pro Woche. Der Zeitplan ist eine Orientierung, keine Ergebnisgarantie.</p>
      </section>

      <section id="kaufen" className="sec">
        <div className="card grid gap-10 p-7 md:p-12 lg:grid-cols-[260px_1fr]">
          <div className="mx-auto w-48 lg:w-full">{/* eslint-disable-next-line @next/next/no-img-element */}<img src="/cover.png" alt="E-Book-Cover" width={910} height={1287} className="rounded-lg border border-white/10 shadow-card" loading="lazy" /></div>
          <div>
            <h2 className="h2">{site.PRODUCT_NAME}</h2>
            <p className="mt-2 text-mute">{site.PRODUCT_SUBTITLE} PDF, 53 Seiten, Ausgabe Oktober 2026.</p>
            <ul className="mt-6 grid gap-2 text-sm sm:grid-cols-2">{included.map((i) => <li key={i} className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />{i}</li>)}</ul>
            <p className="mt-8 font-display text-4xl font-semibold"><Rich text={priceLabel()} /></p>
            <p className="mt-1 text-sm text-mute">Einmaliger Kaufpreis (Gesamtpreis). <Rich text="[[Steuerhinweis festlegen: inkl. USt. oder § 19 UStG]]" /></p>
            <div className="mt-6"><BuyButton /></div>
            <p className="mt-4 text-sm text-mute">Zugriff als PDF-Download nach erfolgreicher Zahlung, sofern die Auslieferung bei Whop eingerichtet ist. Die Bezahlung erfolgt auf der Seite von Whop. Informationen zum Widerruf bei digitalen Inhalten: <Link href="/widerruf" className="underline">Widerrufsbelehrung</Link>.</p>
          </div>
        </div>
      </section>

      <section id="faq" className="sec">
        <h2 className="h2">Häufige Fragen</h2>
        <Faq items={faq} />
      </section>

      <section className="sec text-center">
        <h2 className="h2 mx-auto max-w-2xl">Dein nächster Schritt beginnt mit einem klaren System.</h2>
        <p className="lead mx-auto">Lerne, wie du deine Idee strukturierst, digitale Produkte entwickelst und KI für deinen eigenen Content-Prozess einsetzt.</p>
        <Link href="/#kaufen" className="btn btn-gold mt-8">Jetzt E-Book sichern</Link>
        <p className="mx-auto mt-8 flex max-w-xl items-start justify-center gap-2 text-left text-xs text-mute"><AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" /><span>Allgemeine Bildungsinhalte, keine Rechts-, Steuer- oder Finanzberatung und keine Einkommensgarantie. Siehe <Link href="/haftung" className="underline">Haftungsausschluss</Link>.</span></p>
      </section>
    </>
  );
}
