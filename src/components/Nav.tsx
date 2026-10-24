"use client";

import { useEffect, useState } from "react";
import { BUSINESS, NAV_LINKS } from "@/data/site";
import { Magnetic } from "./fx";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled ? "bg-ink-2/92 shadow-[0_1px_0_rgba(244,244,242,0.12)]" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-5 py-3.5 md:px-10">
        <a href="#top" className="leading-none">
          <span className="font-display text-[1.35rem] font-extrabold tracking-tight">
            <span className="text-sky">K</span>AMS
          </span>
          <span className="label mt-1 block text-[0.55rem] text-bone/60">Hair &amp; Beauty — Heartland</span>
        </a>
        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="label text-bone/70 transition-colors hover:text-sun">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a href={BUSINESS.phoneHref} className="label hidden text-bone/80 transition-colors hover:text-sun md:block">
            {BUSINESS.phone}
          </a>
          <Magnetic>
            <a
              href={BUSINESS.fresha}
              target="_blank"
              rel="noreferrer"
              className="label inline-block rounded-full bg-sun px-4 py-2.5 whitespace-nowrap text-ink-2 transition-transform hover:scale-[1.04] md:px-5"
            >
              Book now
            </a>
          </Magnetic>
        </div>
      </div>
    </header>
  );
}
