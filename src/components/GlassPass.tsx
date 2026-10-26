"use client";

import { useEffect, useRef, useState } from "react";
import { PRESS_FRAMES } from "@/lib/press-frames";

/**
 * THE GLASS PASS — the signature. Nanoplastia & keratin are sealed with heat:
 * a pinned, scroll-scrubbed pass of the iron — frizz goes in, glass comes out.
 * Your scroll moves the iron. Reduced motion: the finished pass, still.
 */
export default function GlassPass() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const pctRef = useRef<HTMLSpanElement>(null);
  const [reduced] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  const [interacted, setInteracted] = useState(false);

  useEffect(() => {
    PRESS_FRAMES.forEach((src) => {
      const i = new Image();
      i.src = src;
    });
  }, []);

  useEffect(() => {
    if (reduced) return;
    let target = 0;
    let current = 0;
    let raf = 0;
    let idle = 0;
    let touched = false;
    const TOTAL = PRESS_FRAMES.length;
    const IDLE_FRAMES = 14;

    const tick = () => {
      const el = wrapRef.current;
      if (el) {
        const rect = el.getBoundingClientRect();
        const total = rect.height - window.innerHeight;
        const p = total > 0 ? Math.min(1, Math.max(0, -rect.top / total)) : 0;
        if (p > 0.002 && !touched) {
          touched = true;
          setInteracted(true);
        }
        target = touched ? p * (TOTAL - 1) : (Math.sin(idle / 55) * 0.5 + 0.5) * IDLE_FRAMES;
        idle += 1;
        current += (target - current) * 0.16;
        const idx = Math.round(Math.min(TOTAL - 1, Math.max(0, current)));
        if (imgRef.current && imgRef.current.dataset.f !== String(idx)) {
          imgRef.current.dataset.f = String(idx);
          imgRef.current.src = PRESS_FRAMES[idx];
        }
        if (barRef.current) barRef.current.style.transform = `scaleX(${touched ? p : 0})`;
        if (pctRef.current) pctRef.current.textContent = touched ? `${String(Math.round(p * 100)).padStart(3, "0")}%` : "000%";
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [reduced]);

  return (
    <section id="glass" aria-label="The glass pass — the smoothing seal, frame by frame">
      <div className="mx-auto max-w-[1440px] px-5 pt-24 md:px-10 md:pt-32">
        <p className="label text-sky">The signature — nanoplastia &amp; keratin, sealed</p>
        <h2 className="mt-4 font-display text-[15vw] leading-[0.85] font-extrabold uppercase md:text-[8.5rem]">
          The Glass
          <br />
          Pass<span className="text-sun">.</span>
        </h2>
        <p className="mt-6 max-w-md text-base leading-relaxed text-bone/75 md:text-lg">
          This is how the treatment sets: one section at a time, the iron sealing
          in the repair. In Kamal&apos;s own words — intensive repair, anti-frizz,
          deep shine. Scroll, and the iron moves.
        </p>
      </div>

      <div ref={wrapRef} className="relative" style={{ height: reduced ? "auto" : "270vh" }}>
        <div className={`${reduced ? "relative" : "sticky top-0"} flex h-dvh items-center justify-center overflow-hidden`}>
          <div className={reduced ? "relative aspect-[3/2] w-full max-w-[1180px]" : "relative h-full w-full md:aspect-[3/2] md:h-auto md:max-w-[1180px]"}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              ref={imgRef}
              src={PRESS_FRAMES[reduced ? PRESS_FRAMES.length - 1 : 0]}
              alt="A flat iron sealing a smoothing treatment into a section of hair — frizz above, glass below, steam rising"
              className="absolute inset-0 h-full w-full object-cover"
              draggable={false}
            />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,6,0.35),transparent_30%,transparent_70%,rgba(5,5,6,0.45))]" />
            <div className="absolute top-24 left-5 md:top-8 md:left-8">
              <p className="label text-bone/85">{interacted || reduced ? "Section by section" : "Scroll — work the iron"}</p>
            </div>
            <div className="absolute right-5 bottom-5 text-right md:right-8 md:bottom-8">
              <p className="label text-bone/85">
                Frizz in — glass out · <span ref={pctRef} className="text-sun">000%</span>
              </p>
            </div>
            <div className="absolute right-0 bottom-0 left-0 h-[3px] bg-bone/15">
              <div ref={barRef} className="h-full origin-left bg-sun" style={{ transform: "scaleX(0)" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
