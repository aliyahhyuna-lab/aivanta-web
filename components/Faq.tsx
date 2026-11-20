"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Rich } from "@/lib/rich";

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mt-10 divide-y divide-white/10 rounded-3xl border border-white/10 bg-ink/50">
      {items.map((it, i) => (
        <div key={it.q}>
          <h3>
            <button id={`faq-b-${i}`} aria-expanded={open === i} aria-controls={`faq-p-${i}`} onClick={() => setOpen(open === i ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-medium">
              {it.q}
              <ChevronDown className={`h-5 w-5 shrink-0 text-gold transition-transform ${open === i ? "rotate-180" : ""}`} />
            </button>
          </h3>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div id={`faq-p-${i}`} role="region" aria-labelledby={`faq-b-${i}`} initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                <p className="px-6 pb-6 leading-relaxed text-mute"><Rich text={it.a} /></p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
