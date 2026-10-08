"use client";

import { Star, Quote } from "lucide-react";
import Reveal from "./Reveal";
import { TESTIMONIALS } from "@/data/site";

function Card({ t }: { t: (typeof TESTIMONIALS)[number] }) {
  return (
    <div className="w-[320px] shrink-0 rounded-3xl border border-ink/8 bg-white p-7 shadow-[0_10px_40px_rgba(23,19,16,0.07)] sm:w-[380px]">
      <Quote className="h-7 w-7 text-gold" />
      <div className="mt-3 flex gap-0.5 text-gold">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-gold" />
        ))}
      </div>
      <p className="mt-3 leading-relaxed text-ink/75">“{t.quote}”</p>
      <div className="mt-5 flex items-center gap-3">
        <span className="grid h-11 w-11 place-items-center rounded-full bg-ink font-display text-lg font-bold text-goldlight">
          {t.name[0]}
        </span>
        <div>
          <p className="font-bold text-ink">{t.name}</p>
          <p className="text-xs font-semibold tracking-wide text-ink/50 uppercase">
            {t.detail}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="reviews" className="overflow-hidden bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="text-center">
          <p className="text-xs font-black tracking-[0.3em] text-gold uppercase">
            755+ five-star reviews
          </p>
          <h2 className="mx-auto mt-3 max-w-2xl font-display text-4xl font-black tracking-tight text-ink sm:text-6xl">
            Mississauga keeps <span className="italic text-gold">talking</span>
          </h2>
        </Reveal>
      </div>

      <Reveal className="mt-14">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="animate-marquee-slow flex shrink-0 gap-6 pr-6">
            {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
              <Card key={i} t={t} />
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
