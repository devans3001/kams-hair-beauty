"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Reveal from "./Reveal";

gsap.registerPlugin(ScrollTrigger);

const SHOTS = [
  { src: "/images/gallery-1.jpg", label: "Knotless braids" },
  { src: "/images/gallery-2.jpg", label: "Silk press finish" },
  { src: "/images/gallery-3.jpg", label: "Goddess locs" },
  { src: "/images/gallery-4.jpg", label: "Wig install" },
];

export default function Gallery() {
  const ref = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // cinematic clip reveal per card
      gsap.utils.toArray<HTMLElement>(".g-card").forEach((card) => {
        gsap.from(card, {
          clipPath: "inset(12% 8% 12% 8% round 24px)",
          scale: 0.94,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top 92%",
            end: "top 42%",
            scrub: 0.8,
          },
        });
        // inner parallax
        const img = card.querySelector(".g-img");
        if (img) {
          gsap.fromTo(
            img,
            { yPercent: -10 },
            {
              yPercent: 10,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            }
          );
        }
      });
      // whole row drifts against scroll
      gsap.to(".g-row", {
        xPercent: -10,
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="gallery" className="overflow-hidden bg-sand py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="text-xs font-black tracking-[0.3em] text-gold uppercase">
            The proof
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-4xl font-black tracking-tight text-ink sm:text-6xl">
            Fresh out of <span className="italic text-gold">our</span> chairs
          </h2>
        </Reveal>
      </div>

      <div className="g-row mt-14 flex w-max gap-6 px-5 sm:px-8">
        {SHOTS.map((s, i) => (
          <figure
            key={s.src}
            className={`g-card group relative w-64 shrink-0 overflow-hidden rounded-3xl shadow-xl sm:w-80 ${
              i % 2 === 1 ? "mt-12" : ""
            }`}
          >
            <div className="overflow-hidden">
              <img
                src={s.src}
                alt={s.label}
                className="g-img aspect-[3/4] w-full scale-125 object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
            <figcaption className="absolute bottom-5 left-5 font-display text-xl font-bold text-cream">
              {s.label}
            </figcaption>
          </figure>
        ))}

        <div className="grid w-64 shrink-0 place-items-center sm:w-80">
          <a
            href="https://www.instagram.com/kams_hair_and_beauty"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-3xl bg-ink p-8 text-center shadow-xl transition-transform hover:scale-105"
          >
            <p className="font-display text-2xl font-bold text-cream">
              See 1,000+ transformations
            </p>
            <p className="mt-2 text-sm font-bold text-goldlight">
              @kams_hair_and_beauty →
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}
