"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MessagesSquare, Scissors, Sparkles } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

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
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // the journey line draws itself as you scroll through
      gsap.fromTo(
        ".steps-line-fill",
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 78%",
            end: "bottom 60%",
            scrub: 1,
          },
        }
      );

      // each step ignites as the line reaches it
      gsap.utils.toArray<HTMLElement>(".step-card").forEach((card, i) => {
        const badge = card.querySelector(".step-badge");

        // cinematic entrance
        gsap.from(card, {
          y: 70,
          opacity: 0,
          rotationX: -18,
          transformPerspective: 800,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: card, start: "top 90%", once: true },
        });

        // badge pops with elastic energy, synced to scroll
        if (badge) {
          gsap.fromTo(
            badge,
            { scale: 0.5, rotation: -30 },
            {
              scale: 1,
              rotation: 0,
              ease: "back.out(2.2)",
              scrollTrigger: {
                trigger: card,
                start: "top 82%",
                end: "top 52%",
                scrub: 1,
              },
            }
          );
        }

        // card ignites: border warms to gold + soft glow, each in turn
        gsap.to(card, {
          borderColor: "rgba(201,162,39,0.65)",
          boxShadow: "0 18px 44px rgba(201,162,39,0.16)",
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top 82%",
            end: "top 48%",
            scrub: 1,
          },
        });
      });

      // traveling glow dot rides the line across the whole journey
      gsap.fromTo(
        ".steps-dot",
        { left: "0%" },
        {
          left: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 78%",
            end: "bottom 60%",
            scrub: 1,
          },
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className="relative mt-10">
      {/* journey connector (desktop) */}
      <div className="absolute left-[16%] right-[16%] top-1/2 hidden h-[2px] -translate-y-1/2 rounded-full bg-ink/10 sm:block">
        <div className="steps-line-fill h-full w-full origin-left scale-x-0 rounded-full bg-gradient-to-r from-gold via-goldlight to-gold" />
        <div className="steps-dot absolute top-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold shadow-[0_0_18px_rgba(201,162,39,0.9)]" />
      </div>

      <div className="relative grid gap-4 sm:grid-cols-3" style={{ perspective: "900px" }}>
        {STEPS.map((s, i) => (
          <div
            key={s.title}
            className="step-card flex h-full items-start gap-4 rounded-2xl border border-ink/10 bg-white/70 p-5 backdrop-blur"
          >
            <span className="step-badge grid h-12 w-12 shrink-0 place-items-center rounded-full bg-ink font-display text-lg font-black text-goldlight shadow-lg">
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
        ))}
      </div>
    </div>
  );
}
