"use client";

import { motion } from "framer-motion";
import { Phone, Camera, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import { BUSINESS } from "@/data/site";

export default function Booking() {
  return (
    <section id="booking" className="relative overflow-hidden bg-ink py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -right-40 -top-40 h-[36rem] w-[36rem] rounded-full border border-dashed border-gold/25"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-48 -left-40 h-[34rem] w-[34rem] rounded-full border border-dashed border-gold/20"
        />
        <div className="absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <p className="text-xs font-black tracking-[0.3em] text-goldlight uppercase">
            Your chair is waiting
          </p>
          <h2 className="mt-4 font-display text-4xl font-black leading-tight tracking-tight text-cream sm:text-6xl">
            Ready for your{" "}
            <span className="bg-gradient-to-r from-goldlight to-gold bg-clip-text text-transparent">
              best hair days
            </span>{" "}
            yet?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-cream/65">
            Call, DM, or walk in — consultations are free and the coffee is
            always on. Evenings and Saturdays fill fast.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <motion.a
            href={BUSINESS.phoneHref}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="group flex items-center gap-3 rounded-full bg-gold px-9 py-4 text-lg font-black text-ink shadow-[0_16px_50px_rgba(201,162,39,0.35)]"
          >
            <Phone className="h-5 w-5 transition-transform group-hover:rotate-12" />
            {BUSINESS.phone}
          </motion.a>
          <motion.a
            href={BUSINESS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="flex items-center gap-3 rounded-full border-2 border-cream/25 px-9 py-4 text-lg font-bold text-cream transition-colors hover:border-goldlight hover:text-goldlight"
          >
            <Camera className="h-5 w-5" />
            DM us on Instagram
            <ArrowRight className="h-5 w-5" />
          </motion.a>
        </Reveal>

        <Reveal delay={0.25}>
          <p className="mt-8 text-sm font-semibold tracking-wide text-cream/45">
            No booking app needed — a real human answers.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
