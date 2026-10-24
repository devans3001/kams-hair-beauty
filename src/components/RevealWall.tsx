import { REVIEWS } from "@/data/site";
import { STILL_BALAYAGE, STILL_BEFORE, STILL_BOTOX, STILL_NANO } from "@/lib/photos-real";
import { Reveal } from "./fx";

function Panel({ src, alt, tag, caption }: { src: string; alt: string; tag: string; caption: string }) {
  return (
    <figure className="relative overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="aspect-[4/5] w-full object-cover md:aspect-[5/6]" loading="lazy" />
      <figcaption className="absolute bottom-4 left-4">
        <span className="label block bg-ink-2/85 px-3 py-2 text-sun">{tag}</span>
        <span className="label mt-2 block bg-ink-2/85 px-3 py-2 text-bone/80">{caption}</span>
      </figcaption>
    </figure>
  );
}

const QUOTE_SIZES = [
  "text-[6.2vw] md:text-[3.1rem]",
  "text-[5.4vw] md:text-[2.6rem]",
  "text-[6.2vw] md:text-[3.1rem]",
  "text-[5.4vw] md:text-[2.6rem]",
  "text-[6.2vw] md:text-[3.1rem]",
];

export default function RevealWall() {
  return (
    <section id="wall" className="scroll-mt-24 border-t hairline">
      <div className="mx-auto max-w-[1440px] px-5 pt-24 md:px-10 md:pt-32">
        <Reveal>
          <p className="label text-sky">The wall — 800 Google reviews, one pattern</p>
          <h2 className="mt-4 font-display leading-[0.88] font-extrabold uppercase">
            <span className="block text-[13.5vw] md:text-[7.5rem]">He took</span>
            <span className="block text-[13.5vw] text-sun md:text-[7.5rem]">his time.”</span>
          </h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-bone/75 md:text-lg">
            Read the reviews and the same sentence keeps surfacing — in different
            words, from different chairs. That patience is the product. First,
            the proof it buys:
          </p>
        </Reveal>
      </div>

      {/* Before / after — frames from their own treatment reel */}
      <div className="mx-auto mt-14 grid max-w-[1440px] gap-4 px-5 md:grid-cols-2 md:px-10">
        <Reveal>
          <Panel
            src={STILL_BEFORE}
            alt="Before treatment at Kams — a client's frizzy, dry hair, frame from their Instagram reel"
            tag="Before"
            caption="Their treatment reel — frame one"
          />
        </Reveal>
        <Reveal delay={120}>
          <Panel
            src={STILL_NANO}
            alt="After nanoplastia at Kams — the same kind of hair sealed to a glossy, frizz-free sheet, from their Instagram"
            tag="After — nanoplastia"
            caption="Intensive repair · anti-frizz · deep shine"
          />
        </Reveal>
      </div>

      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        {REVIEWS.map((r, i) => (
          <Reveal key={i}>
            <blockquote className="border-b hairline py-12 md:py-16">
              <p className={`max-w-5xl font-display leading-[1.04] font-bold ${QUOTE_SIZES[i]}`}>
                <span className="text-sky">“</span>
                {r.quote}
                <span className="text-sky">”</span>
              </p>
              <cite className="label mt-5 block not-italic text-sun">— {r.name}</cite>
            </blockquote>
          </Reveal>
        ))}
      </div>

      {/* More of the work — stills from their reels */}
      <div className="mx-auto mt-4 grid max-w-[1440px] gap-4 px-5 pb-4 md:grid-cols-2 md:px-10">
        <Reveal>
          <Panel
            src={STILL_BALAYAGE}
            alt="Blonde balayage, cut and blowdry at Kams — long waves in the salon, from their Instagram"
            tag="Balayage + blowdry"
            caption="Highlights, cut & the finish"
          />
        </Reveal>
        <Reveal delay={120}>
          <Panel
            src={STILL_BOTOX}
            alt="Hair botox result at Kams — a comb gliding through glossy black hair melting to copper ends, from their Instagram"
            tag="Hair botox"
            caption="The comb-through test"
          />
        </Reveal>
      </div>
    </section>
  );
}
