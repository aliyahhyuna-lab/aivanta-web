import Link from "next/link";
export const metadata = { title: "Seite nicht gefunden", robots: { index: false } };
export default function NotFound() {
  return (
    <section className="mx-auto max-w-xl px-5 py-32 text-center">
      <p className="font-display text-6xl font-semibold text-gold">404</p>
      <h1 className="mt-4 font-display text-3xl font-semibold">Diese Seite gibt es nicht.</h1>
      <p className="mt-3 text-mute">Der Link ist veraltet oder falsch geschrieben. Gehe zurück zur Startseite oder direkt zum Leitfaden.</p>
      <div className="mt-8 flex justify-center gap-3">
        <Link href="/" className="btn btn-gold">Zur Startseite</Link>
        <Link href="/#kaufen" className="btn btn-ghost">Zum Leitfaden</Link>
      </div>
    </section>
  );
}
