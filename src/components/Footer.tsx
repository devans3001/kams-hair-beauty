"use client";

import { MapPin, Phone, Camera, Clock, Scissors, Navigation } from "lucide-react";
import Reveal from "./Reveal";
import { BUSINESS, NAV_LINKS } from "@/data/site";

export default function Footer() {
  return (
    <footer id="visit" className="bg-espresso text-cream">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <Reveal>
            <div className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-gold text-ink">
                <Scissors className="h-5 w-5" />
              </span>
              <span className="font-display text-2xl font-bold">
                Kams <span className="text-goldlight">Hair &amp; Beauty</span>
              </span>
            </div>
            <p className="mt-4 max-w-sm leading-relaxed text-cream/60">
              {BUSINESS.tagline}. Precision styling, honest pricing, and
              hair that speaks before you do.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={BUSINESS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="grid h-11 w-11 place-items-center rounded-full bg-cream/10 transition-all hover:bg-gold hover:text-ink"
              >
                <Camera className="h-5 w-5" />
              </a>
              <a
                href={BUSINESS.phoneHref}
                aria-label="Call us"
                className="grid h-11 w-11 place-items-center rounded-full bg-cream/10 transition-all hover:bg-gold hover:text-ink"
              >
                <Phone className="h-5 w-5" />
              </a>
              <a
                href={BUSINESS.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Directions"
                className="grid h-11 w-11 place-items-center rounded-full bg-cream/10 transition-all hover:bg-gold hover:text-ink"
              >
                <Navigation className="h-5 w-5" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h3 className="flex items-center gap-2 text-sm font-black tracking-[0.25em] text-goldlight uppercase">
              <Clock className="h-4 w-4" /> Hours
            </h3>
            <ul className="mt-5 space-y-3">
              {BUSINESS.hours.map((h) => (
                <li
                  key={h.day}
                  className="flex items-center justify-between border-b border-cream/10 pb-3 text-[15px]"
                >
                  <span className="font-semibold text-cream/75">{h.day}</span>
                  <span className="font-bold text-cream">{h.time}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.2}>
            <h3 className="flex items-center gap-2 text-sm font-black tracking-[0.25em] text-goldlight uppercase">
              <MapPin className="h-4 w-4" /> Find us
            </h3>
            <p className="mt-5 leading-relaxed text-cream/75">{BUSINESS.address}</p>
            <a
              href={BUSINESS.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block rounded-full border border-gold/50 px-6 py-2.5 text-sm font-bold text-goldlight transition-all hover:bg-gold hover:text-ink"
            >
              Get directions
            </a>
            <div className="mt-8">
              <h4 className="text-sm font-black tracking-[0.25em] text-goldlight uppercase">
                Explore
              </h4>
              <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
                {NAV_LINKS.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    className="text-sm font-semibold text-cream/60 transition-colors hover:text-goldlight"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-8 text-xs font-semibold text-cream/40 sm:flex-row">
          <p>© 2026 {BUSINESS.name}. All rights reserved.</p>
          <p>Designed with care in Mississauga, Ontario.</p>
        </div>
      </div>
    </footer>
  );
}
