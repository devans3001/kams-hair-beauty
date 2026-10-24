import { BUSINESS } from "@/data/site";
import { REAL_KAMAL_POSTER } from "@/lib/photos-real";
import { Magnetic, Reveal } from "./fx";

export default function BookSection() {
  return (
    <section id="book" className="scroll-mt-24 border-t hairline">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-24 md:grid-cols-[0.85fr_1.15fr] md:px-10 md:py-32">
        <Reveal>
          <figure>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={REAL_KAMAL_POSTER}
              alt="Kamal of Kams Hair & Beauty on his own promo poster — Karachi's professional barber in Heartland, Mississauga"
              className="w-full max-w-[420px] border hairline"
              loading="lazy"
            />
            <figcaption className="label mt-4 text-bone/50">
              Kamal — on their own poster. Karachi&apos;s professional barber, in Heartland.
            </figcaption>
          </figure>
        </Reveal>

        <div>
          <Reveal>
            <p className="label text-sky">Book — appointment only</p>
            <h2 className="mt-4 font-display leading-[0.88] font-extrabold uppercase">
              <span className="block text-[13vw] md:text-[6.5rem]">One chair.</span>
              <span className="block text-[13vw] text-sun md:text-[6.5rem]">No rush.</span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-bone/75 md:text-lg">
              There is no queue and no conveyor belt — when you book, the chair is
              yours and Kamal takes his time. That&apos;s why 800 reviews read the
              way they do.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-10 flex flex-col gap-4">
              <Magnetic>
                <a
                  href={BUSINESS.fresha}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative block overflow-hidden bg-sun px-7 py-6"
                >
                  <span className="absolute inset-0 overflow-hidden">
                    <span className="absolute inset-y-0 w-1/3 bg-white/50 blur-md group-hover:[animation:sheen_0.9s_ease]" />
                  </span>
                  <span className="relative flex items-center justify-between">
                    <span className="font-display text-xl font-extrabold text-ink-2 uppercase md:text-2xl">Book on Fresha</span>
                    <span className="font-display text-xl font-extrabold text-ink-2">↗</span>
                  </span>
                  <span className="label relative mt-1 block text-ink-2/70">Live availability · first visit 35% off select services</span>
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href={BUSINESS.phoneHref}
                  className="block border hairline px-7 py-6 transition-colors hover:border-sun"
                >
                  <span className="flex items-center justify-between">
                    <span className="font-display text-xl font-extrabold uppercase md:text-2xl">Call {BUSINESS.phone}</span>
                    <span className="font-display text-xl font-extrabold text-sun">→</span>
                  </span>
                  <span className="label mt-1 block text-bone/50">“Call Kamal” — their words</span>
                </a>
              </Magnetic>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <dl className="mt-12 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <dt className="label text-sky">Find the chair</dt>
                <dd className="mt-2 leading-relaxed text-bone/80">
                  {BUSINESS.address}
                  <br />
                  {BUSINESS.area}
                </dd>
              </div>
              <div>
                <dt className="label text-sky">Hours</dt>
                <dd className="mt-2 leading-relaxed text-bone/80">
                  {BUSINESS.hoursLine}
                  <br />
                  Appointment only
                </dd>
              </div>
              <div>
                <dt className="label text-sky">Proof</dt>
                <dd className="mt-2 leading-relaxed text-bone/80">
                  ★ {BUSINESS.rating} — {BUSINESS.reviewCount} Google reviews
                </dd>
              </div>
              <div>
                <dt className="label text-sky">Follow the work</dt>
                <dd className="mt-2 leading-relaxed text-bone/80">
                  <a href={BUSINESS.instagram} target="_blank" rel="noreferrer" className="underline decoration-sky underline-offset-4 hover:text-sun">
                    @kams_hair_and_beauty
                  </a>{" "}
                  — new results most weeks
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
