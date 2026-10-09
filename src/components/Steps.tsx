"use client";

import { MessagesSquare, Scissors, Sparkles } from "lucide-react";
import Reveal from "./Reveal";

const STEPS = [
  {
    icon: MessagesSquare,
    title: "Consult",
    text: "We listen first — your hair goals, lifestyle, and budget shape the plan.",
  },
  {
    icon: Scissors,
    title: "Create",
    text: "Your stylist crafts the look: braids, silk press, color, or a full transformation.",
  },
  {
    icon: Sparkles,
    title: "Care",
    text: "You leave with aftercare guidance so the style stays flawless for weeks.",
  },
];

export default function Steps() {
  return (
    <div className="mt-10 grid gap-4 sm:grid-cols-3">
      {STEPS.map((s, i) => (
        <Reveal key={s.title} delay={i * 0.12}>
          <div className="flex h-full items-start gap-4 rounded-2xl border border-ink/10 bg-white/60 p-5">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-ink font-display text-lg font-black text-goldlight">
              {i + 1}
            </span>
            <div>
              <p className="flex items-center gap-2 font-display text-lg font-bold text-ink">
                <s.icon className="h-4 w-4 text-gold" />
                {s.title}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-ink/60">{s.text}</p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
