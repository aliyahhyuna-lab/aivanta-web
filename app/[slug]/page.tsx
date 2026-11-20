import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { AlertTriangle } from "lucide-react";
import { legal } from "@/lib/legal";
import { legalPages } from "@/config/site";
import { Rich } from "@/lib/rich";

export const dynamicParams = false;
export const generateStaticParams = () => legalPages.map((p) => ({ slug: p.slug }));

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const page = legalPages.find((p) => p.slug === params.slug);
  return page ? { title: page.title, alternates: { canonical: `/${page.slug}` } } : {};
}

export default function LegalPage({ params }: { params: { slug: string } }) {
  const page = legalPages.find((p) => p.slug === params.slug);
  const doc = legal[params.slug];
  if (!page || !doc) notFound();
  return (
    <article className="mx-auto max-w-3xl px-5 py-16 md:py-24">
      <h1 className="font-display text-4xl font-semibold">{page.title}</h1>
      <div className="mt-6 flex gap-3 rounded-2xl border border-gold/40 bg-gold/10 p-4 text-sm">
        <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
        <p>Entwurf mit Platzhaltern. Nicht anwaltlich geprüft und nicht als rechtssicher zu verstehen. Alle gelb markierten Stellen müssen vor der Veröffentlichung ersetzt und der Text rechtlich geprüft werden.{doc.intro ? ` ${doc.intro}` : ""}</p>
      </div>
      {doc.sections.map((s) => (
        <section key={s.h} className="mt-10">
          <h2 className="font-display text-xl font-semibold">{s.h}</h2>
          {s.p.map((t, i) => <p key={i} className="mt-3 leading-relaxed text-mute"><Rich text={t} /></p>)}
        </section>
      ))}
      <Link href="/" className="btn btn-ghost mt-14">Zurück zur Startseite</Link>
    </article>
  );
}
