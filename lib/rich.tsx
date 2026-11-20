/** Rendert Text; Teile in [[doppelten eckigen Klammern]] werden als auffällige Platzhalter markiert. */
export function Rich({ text }: { text: string }) {
  return (
    <>
      {text.split(/(\[\[.*?\]\])/g).map((p, i) =>
        p.startsWith("[[") ? (
          <mark key={i} className="rounded bg-gold/20 px-1 font-semibold text-gold ring-1 ring-gold/40">{`[${p.slice(2, -2)}]`}</mark>
        ) : (
          <span key={i}>{p}</span>
        )
      )}
    </>
  );
}
export const ph = (v: string, label: string) => (v ? v : `[[${label}]]`);
