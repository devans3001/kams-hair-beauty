import { BUSINESS } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t hairline bg-ink-2">
      <div className="mx-auto max-w-[1440px] px-5 pt-16 pb-8 md:px-10">
        <p className="font-display leading-[0.85] font-extrabold uppercase">
          <span className="text-[18vw] md:text-[11rem]">
            <span className="text-sky">K</span>AMS
          </span>
        </p>
        <p className="mt-4 max-w-md font-display text-xl font-bold uppercase md:text-2xl">
          Your hair is 90% of your selfie. <span className="text-sun">Take care of it.</span>
        </p>

        <div className="mt-12 flex flex-wrap gap-x-10 gap-y-3 border-t hairline pt-6">
          <a href={BUSINESS.phoneHref} className="label text-bone/70 hover:text-sun">{BUSINESS.phone}</a>
          <a href={BUSINESS.fresha} target="_blank" rel="noreferrer" className="label text-bone/70 hover:text-sun">Book on Fresha ↗</a>
          <a href={BUSINESS.instagram} target="_blank" rel="noreferrer" className="label text-bone/70 hover:text-sun">Instagram ↗</a>
          <a href={BUSINESS.mapsUrl} target="_blank" rel="noreferrer" className="label text-bone/70 hover:text-sun">Directions ↗</a>
        </div>

        <p className="label mt-8 leading-relaxed text-bone/35">
          Real photos &amp; reviews — Kams&apos;s own pages · ★ {BUSINESS.rating} / {BUSINESS.reviewCount} Google reviews ·
          Concept site built for Kams Hair &amp; Beauty
        </p>
      </div>
    </footer>
  );
}
