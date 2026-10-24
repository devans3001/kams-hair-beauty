import { BUSINESS, GROUPS } from "@/data/site";
import { Reveal } from "./fx";

export default function ChairIndex() {
  return (
    <section id="index" className="scroll-mt-24">
      <div className="mx-auto max-w-[1440px] px-5 pt-24 md:px-10 md:pt-32">
        <Reveal>
          <p className="label text-sky">The menu — real services, straight from their Fresha</p>
          <h2 className="mt-4 font-display text-[13.5vw] leading-[0.88] font-extrabold uppercase md:text-[7.5rem]">
            The Chair
            <br />
            Index<span className="text-sun">.</span>
          </h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-bone/75 md:text-lg">
            Kams doesn&apos;t print prices — the chair is booked by appointment and
            quoted in it. What they do print: first-visit offers, below in yellow.
          </p>
        </Reveal>
      </div>

      <div className="mt-14">
        {GROUPS.map((g, gi) => (
          <div key={g.no} className="border-t hairline">
            <div className="mx-auto grid max-w-[1440px] gap-8 px-5 py-12 md:grid-cols-[1fr_1.2fr] md:px-10 md:py-16">
              <Reveal>
                <p className="font-display text-lg font-bold text-sky">{g.no}</p>
                <h3 className="mt-2 font-display text-5xl font-extrabold uppercase md:text-6xl">{g.name}</h3>
                <p className="label mt-3 text-bone/55">{g.blurb}</p>
                <p className="mt-5 inline-block bg-sun px-3 py-1.5 font-display text-[0.8rem] font-bold text-ink-2 uppercase">
                  {g.note}
                </p>
              </Reveal>
              <div>
                {g.items.map((item, i) => (
                  <Reveal key={item} delay={i * 60}>
                    <a
                      href={BUSINESS.fresha}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-baseline justify-between gap-4 border-b hairline py-4 transition-all duration-300 hover:pl-3 md:py-5"
                    >
                      <span className="flex items-baseline gap-4">
                        <span className="font-display text-sm font-bold text-sky">
                          {g.no}.{i + 1}
                        </span>
                        <span className="font-display text-[1.35rem] font-bold uppercase transition-colors group-hover:text-sun md:text-3xl">
                          {item}
                        </span>
                      </span>
                      <span className="label text-bone/40 transition-colors group-hover:text-sun">Book ↗</span>
                    </a>
                  </Reveal>
                ))}
                {gi === GROUPS.length - 1 && (
                  <p className="label mt-6 text-bone/40">Full menu &amp; live booking — Fresha ↗</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
