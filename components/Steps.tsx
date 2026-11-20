"use client";
import { useState } from "react";
import { Search, BookOpen, UserRound, ShoppingBag, Clapperboard, Send, Check } from "lucide-react";

const icons = [Search, BookOpen, UserRound, ShoppingBag, Clapperboard, Send];
export type Step = { title: string; text: string; points: string[]; result: string };

export function Steps({ steps }: { steps: Step[] }) {
  const [a, setA] = useState(0);
  const s = steps[a];
  const Icon = icons[a];
  return (
    <div className="mt-12 grid gap-6 lg:grid-cols-[320px_1fr]">
      <div role="tablist" aria-label="Die sechs Schritte" className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible">
        {steps.map((st, i) => {
          const I = icons[i];
          return (
            <button key={st.title} role="tab" id={`step-t-${i}`} aria-selected={a === i} aria-controls="step-panel" onClick={() => setA(i)}
              className={`flex shrink-0 items-center gap-3 rounded-2xl border px-4 py-3 text-left text-sm transition ${a === i ? "border-gold/60 bg-ink text-white shadow-glow" : "border-white/10 text-mute hover:border-white/30"}`}>
              <I className="h-5 w-5 text-gold" aria-hidden="true" />
              <span><span className="block text-xs text-mute">Schritt {i + 1}</span><span className="font-medium">{st.title}</span></span>
            </button>
          );
        })}
      </div>
      <div id="step-panel" role="tabpanel" aria-labelledby={`step-t-${a}`} className="card p-7 md:p-10">
        <Icon className="h-9 w-9 text-gold" aria-hidden="true" />
        <h3 className="mt-5 font-display text-2xl font-semibold">Schritt {a + 1}: {s.title}</h3>
        <p className="mt-3 max-w-2xl leading-relaxed text-mute">{s.text}</p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {s.points.map((p) => (
            <li key={p} className="flex gap-2.5 text-sm"><Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />{p}</li>
          ))}
        </ul>
        <p className="mt-8 rounded-2xl border border-teal/40 bg-teal/10 p-4 text-sm"><strong className="font-semibold">Ergebnis laut E-Book:</strong> {s.result}</p>
      </div>
    </div>
  );
}
