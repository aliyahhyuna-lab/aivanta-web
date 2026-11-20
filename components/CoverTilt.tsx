"use client";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Bot, Workflow, Clapperboard, ShoppingBag } from "lucide-react";

const chips = [
  { Icon: Bot, t: "KI-Persona", c: "-left-2 top-10 sm:-left-8" },
  { Icon: Workflow, t: "Workflow", c: "-right-2 top-24 sm:-right-8" },
  { Icon: Clapperboard, t: "KI-Video", c: "-left-2 bottom-24 sm:-left-10" },
  { Icon: ShoppingBag, t: "Shop & Checkout", c: "-right-2 bottom-8 sm:-right-10" },
];

export function CoverTilt() {
  const reduce = useReducedMotion();
  return (
    <div className="relative mx-auto w-64 sm:w-72" style={{ perspective: 1200 }}>
      <div className="absolute -inset-10 -z-10 rounded-full bg-teal/30 blur-3xl" aria-hidden="true" />
      <motion.div
        initial={reduce ? false : { rotateY: -32, rotateX: 8, opacity: 0 }}
        animate={{ rotateY: -18, rotateX: 5, opacity: 1 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        whileHover={reduce ? undefined : { rotateY: -6, rotateX: 2 }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative overflow-hidden rounded-r-xl rounded-l-sm border border-white/15 shadow-[0_40px_80px_-20px_rgba(0,0,0,.8)]"
      >
        <Image src="/cover.png" alt="Cover des E-Books „Dein eigenes Automatisiertes KI System“" width={910} height={1287} priority sizes="(max-width:640px) 256px, 288px" />
        <div className="pointer-events-none absolute inset-y-0 left-0 w-3 bg-gradient-to-r from-black/50 to-transparent" aria-hidden="true" />
      </motion.div>
      {chips.map(({ Icon, t, c }) => (
        <span key={t} className={`absolute ${c} inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-deep/90 px-3 py-1.5 text-xs text-mute backdrop-blur`}>
          <Icon className="h-3.5 w-3.5 text-gold" aria-hidden="true" />{t}
        </span>
      ))}
    </div>
  );
}
