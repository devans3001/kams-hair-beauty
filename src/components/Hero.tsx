"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Star, ArrowRight, MapPin, BadgeCheck } from "lucide-react";
import { BUSINESS } from "@/data/site";

const line1 = "Hair that turns".split(" ");
const line2 = "heads.".split(" ");

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} id="top" className="relative min-h-screen overflow-hidden">
      {/* backdrop */}
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,#f3e3c2_0%,#faf6ee_55%)]" />
        <div className="absolute -right-32 top-24 h-[34rem] w-[34rem] rounded-full bg-gold/15 blur-3xl" />
        <div className="absolute -left-40 bottom-0 h-[28rem] w-[28rem] rounded-full bg-blush/25 blur-3xl" />
      </motion.div>

      <motion.div
        style={{ opacity: fade }}
        className="relative mx-auto grid max-w-7xl gap-12 px-5 pb-20 pt-32 sm:px-8 md:pt-40 lg:grid-cols-[1.05fr_0.95fr] lg:items-center"
      >
        {/* copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/60 px-4 py-2 text-xs font-bold tracking-widest text-espresso uppercase backdrop-blur"
          >
            <span className="flex text-gold">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />
              ))}
            </span>
            {BUSINESS.rating} · {BUSINESS.reviewCount} Google reviews
          </motion.div>

          <h1 className="font-display text-5xl font-black leading-[1.02] tracking-tight text-ink sm:text-7xl">
            {line1.map((w, i) => (
              <span key={i} className="inline-block overflow-hidden pb-1">
                <motion.span
                  className="inline-block"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.9,
                    delay: 0.25 + i * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {w}&nbsp;
                </motion.span>
              </span>
            ))}
            <br />
            {line2.map((w, i) => (
              <span key={i} className="inline-block overflow-hidden pb-2">
                <motion.span
                  className="inline-block bg-gradient-to-r from-gold via-goldlight to-gold bg-clip-text text-transparent"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.9,
                    delay: 0.5 + i * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {w}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-ink/70"
          >
            Mississauga&apos;s most loved hair sanctuary — knotless braids, silk
            presses, sew-ins and natural hair care, crafted by artists your
            hair will thank you for.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <motion.a
              href="#booking"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="group flex items-center gap-2 rounded-full bg-ink px-8 py-4 font-bold text-cream shadow-[0_16px_40px_rgba(23,19,16,0.25)]"
            >
              Book your chair
              <ArrowRight className="h-5 w-5 text-goldlight transition-transform group-hover:translate-x-1" />
            </motion.a>
            <motion.a
              href="#services"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-full border-2 border-ink/15 px-8 py-[14px] font-bold text-ink transition-colors hover:border-gold hover:text-espresso"
            >
              View services
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-semibold text-ink/60"
          >
            <span className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-gold" /> Mississauga, ON
            </span>
            <span className="flex items-center gap-1.5">
              <BadgeCheck className="h-4 w-4 text-gold" /> Walk-ins welcome
            </span>
          </motion.div>
        </div>

        {/* visual */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.92, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-[2.5rem] shadow-[0_40px_80px_rgba(23,19,16,0.25)]"
          >
            <img
              src="/images/hero.jpg"
              alt="Stylist finishing a flawless silk press at Kams Hair & Beauty"
              className="aspect-[4/5] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl bg-white/85 px-5 py-4 backdrop-blur-md">
              <div>
                <p className="font-display text-lg font-bold text-ink">
                  Silk Press Season
                </p>
                <p className="text-xs font-semibold text-ink/60">
                  Glass-finish press + steam treatment
                </p>
              </div>
              <span className="rounded-full bg-gold px-4 py-2 text-sm font-black text-ink">
                $90+
              </span>
            </div>
          </motion.div>

          {/* floating review card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 1.15 }}
            className="absolute -right-3 top-10 sm:-right-6"
          >
            <div className="animate-float rounded-2xl bg-white/90 p-4 shadow-xl backdrop-blur-md">
              <div className="flex text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold" />
                ))}
              </div>
              <p className="mt-1 max-w-[180px] text-xs font-semibold leading-snug text-ink/80">
                &ldquo;Best braids I&apos;ve ever had. Two full months!&rdquo;
              </p>
              <p className="mt-1 text-[11px] font-bold text-ink/50">
                — Amara O., Google review
              </p>
            </div>
          </motion.div>

          {/* floating badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 1.35, type: "spring" }}
            className="absolute -left-4 bottom-16 sm:-left-8"
          >
            <div className="grid h-28 w-28 place-items-center rounded-full bg-ink text-center shadow-2xl">
              <div className="animate-spin-slower absolute inset-2 rounded-full border border-dashed border-gold/50" />
              <div>
                <p className="font-display text-2xl font-black text-goldlight">
                  5.0
                </p>
                <p className="text-[10px] font-bold tracking-widest text-cream/70 uppercase">
                  755+ reviews
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* marquee strip */}
      <div className="relative border-y border-ink/10 bg-ink py-4">
        <div className="flex overflow-hidden">
          <div className="animate-marquee flex shrink-0 items-center gap-8 pr-8">
            {Array.from({ length: 2 }).flatMap((_, dup) =>
              [
                "Knotless Braids",
                "Silk Press",
                "Sew-In Weave",
                "Wig Installs",
                "Faux Locs",
                "Natural Hair Care",
                "Cornrows",
                "Steam Treatments",
              ].map((s, i) => (
                <span
                  key={`${dup}-${i}`}
                  className="flex items-center gap-8 whitespace-nowrap font-display text-lg font-semibold tracking-wide text-cream"
                >
                  {s}
                  <span className="text-gold">✦</span>
                </span>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
