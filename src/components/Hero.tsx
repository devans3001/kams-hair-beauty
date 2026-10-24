import { BUSINESS } from "@/data/site";
import { REAL_GLASS } from "@/lib/photos-real";
import { Magnetic, Reveal } from "./fx";

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-svh flex-col overflow-hidden">
      {/* Their glass hair — full-bleed, right-weighted */}
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={REAL_GLASS}
          alt="Glass hair at Kams — a client's mirror-shine, frizz-free result, from Kams's own promo"
          className="h-full w-full object-cover object-[68%_18%] md:object-[78%_15%]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,6,0.97)_30%,rgba(5,5,6,0.72)_52%,rgba(5,5,6,0.18)_78%,rgba(5,5,6,0.05))]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(5,5,6,0.94),transparent_38%)]" />
      </div>

      <div className="relative mx-auto flex w-full max-w-[1440px] flex-1 flex-col justify-end px-5 pt-28 pb-10 md:px-10 md:pb-12">
        <Reveal>
          <p className="label text-sky">Kams Hair &amp; Beauty — unisex · Heartland, Mississauga</p>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="mt-5 font-display leading-[0.88] font-extrabold uppercase">
            <span className="block text-[11.5vw] md:text-[5.8rem] lg:text-[6.8rem]">Your hair is</span>
            <span className="block text-[26vw] text-sun md:text-[12rem] lg:text-[13.5rem]">90%</span>
            <span className="block text-[11.5vw] md:text-[5.8rem] lg:text-[6.8rem]">
              of your selfie<span className="text-sky">.</span>
            </span>
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-6 max-w-md text-base leading-relaxed text-bone/80 md:text-lg">
            Their words — and the care is real: balayage, keratin, nanoplastia and
            precision cuts by Kamal, one chair at a time. Take care of it.
          </p>
        </Reveal>
        <Reveal delay={300}>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Magnetic>
              <a
                href={BUSINESS.fresha}
                target="_blank"
                rel="noreferrer"
                className="group relative inline-block overflow-hidden rounded-full bg-sun px-8 py-4 font-display text-sm font-bold tracking-wide text-ink-2 uppercase"
              >
                <span className="absolute inset-0 overflow-hidden rounded-full">
                  <span className="absolute inset-y-0 w-1/3 bg-white/50 blur-md group-hover:[animation:sheen_0.9s_ease]" />
                </span>
                <span className="relative">Book a chair ↗</span>
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href={BUSINESS.phoneHref}
                className="inline-block rounded-full border border-bone/35 px-8 py-4 font-display text-sm font-bold tracking-wide uppercase transition-colors hover:border-sun hover:text-sun"
              >
                Call {BUSINESS.phone}
              </a>
            </Magnetic>
          </div>
        </Reveal>

        <Reveal delay={400} className="mt-12">
          <div className="grid grid-cols-2 gap-x-6 gap-y-4 border-t hairline pt-6 md:grid-cols-4">
            <div>
              <p className="font-display text-xl font-bold text-sun">★ {BUSINESS.rating}</p>
              <p className="label mt-1 text-bone/55">{BUSINESS.reviewCount} Google reviews</p>
            </div>
            <div>
              <p className="font-display text-xl font-bold">7 days</p>
              <p className="label mt-1 text-bone/55">{BUSINESS.hoursLine}</p>
            </div>
            <div>
              <p className="font-display text-xl font-bold">By appointment</p>
              <p className="label mt-1 text-bone/55">One chair · no rush</p>
            </div>
            <div>
              <p className="font-display text-xl font-bold">PROBEAUTY</p>
              <p className="label mt-1 text-bone/55">650 Matheson Blvd W, Ste 29</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
