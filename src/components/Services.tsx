"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import SplitReveal from "./SplitReveal";
import ScissorsDivider from "./ScissorsDivider";
import { SERVICES, BUSINESS } from "@/data/site";

export default function Services() {
  return (
    <section id="services" className="relative bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="text-xs font-black tracking-[0.3em] text-gold uppercase">
            Our menu
          </p>
          <SplitReveal
            text="Services crafted for your crown"
            accent="your"
            accentClassName="italic text-gold"
            className="mt-3 max-w-2xl font-display text-4xl font-black tracking-tight text-ink sm:text-6xl"
          />
          <p className="mt-4 max-w-xl text-lg text-ink/65">
            Every appointment starts with a consultation — because great hair
            is never one-size-fits-all.
          </p>
        </Reveal>

        <ScissorsDivider />

        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.name} delay={(i % 3) * 0.12}>
              <motion.a
                href="#booking"
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-ink/8 bg-white p-7 shadow-[0_10px_40px_rgba(23,19,16,0.06)]"
              >
                <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-gold to-goldlight transition-transform duration-500 group-hover:scale-x-100" />
                {s.tag && (
                  <span className="mb-4 w-fit rounded-full bg-ink px-3 py-1 text-[11px] font-black tracking-widest text-goldlight uppercase">
                    {s.tag}
                  </span>
                )}
                <h3 className="font-display text-2xl font-bold text-ink">
                  {s.name}
                </h3>
                <p className="mt-2 flex-1 text-[15px] leading-relaxed text-ink/60">
                  {s.desc}
                </p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="font-display text-xl font-black text-espresso">
                    {s.price}
                  </span>
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-sand text-ink transition-all duration-300 group-hover:bg-ink group-hover:text-goldlight">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </div>
              </motion.a>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 text-center">
          <p className="text-sm font-semibold text-ink/55">
            Prices vary by length &amp; density — call{" "}
            <a
              href={BUSINESS.phoneHref}
              className="font-black text-ink underline decoration-gold decoration-2 underline-offset-4"
            >
              {BUSINESS.phone}
            </a>{" "}
            for an exact quote.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
