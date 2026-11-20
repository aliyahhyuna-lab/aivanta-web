"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const nav = [
  { href: "/", label: "Startseite" },
  { href: "/#system", label: "Das System" },
  { href: "/#inhalte", label: "Inhalte" },
  { href: "/#zielgruppe", label: "Für wen ist es?" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#kontakt", label: "Kontakt" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-deep/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link href="/" aria-label="Zur Startseite"><Logo /></Link>
        <nav aria-label="Hauptnavigation" className="hidden items-center gap-7 text-sm text-mute lg:flex">
          {nav.map((n) => <Link key={n.href} href={n.href} className="hover:text-white">{n.label}</Link>)}
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/#kaufen" className="btn btn-gold hidden sm:inline-flex !py-2.5">Jetzt starten</Link>
          <button className="rounded-lg p-2 lg:hidden" aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? "Menü schließen" : "Menü öffnen"} onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Mobile Navigation" className="border-t border-white/10 bg-deep px-5 pb-6 pt-3 lg:hidden">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className="block border-b border-white/5 py-3 text-mute hover:text-white">{n.label}</Link>
          ))}
          <Link href="/#kaufen" onClick={() => setOpen(false)} className="btn btn-gold mt-5 w-full">Jetzt starten</Link>
        </nav>
      )}
    </header>
  );
}
