"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Reveal from "./Reveal";

const SHOTS = [
  { src: "/images/gallery-1.jpg", label: "Knotless braids", span: "tall" },
  { src: "/images/gallery-2.jpg", label: "Silk press finish", span: "short" },
  { src: "/images/gallery-3.jpg", label: "Goddess locs", span: "tall" },
  { src: "/images/gallery-4.jpg", label: "Wig install", span: "short" },
];

export default function Gallery() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["4%", "-14%"]);

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

      <motion.div style={{ x }} className="mt-14 flex w-max gap-6 px-5 sm:px-8">
        {SHOTS.map((s, i) => (
          <motion.figure
            key={s.src}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            whileHover={{ scale: 1.03, rotate: i % 2 === 0 ? 1 : -1 }}
            className={`group relative w-64 shrink-0 overflow-hidden rounded-3xl shadow-xl sm:w-80 ${
              s.span === "tall" ? "mt-0" : "mt-12"
            }`}
          >
            <img
              src={s.src}
              alt={s.label}
              className="aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-80" />
            <figcaption className="absolute bottom-5 left-5 font-display text-xl font-bold text-cream">
              {s.label}
            </figcaption>
          </motion.figure>
        ))}

        {/* end card */}
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
      </motion.div>
    </section>
  );
}
