const ITEMS = ["Nanoplastia", "Keratin", "Balayage", "Hair Botox", "Zero Fades", "Olaplex Highlights", "Scissor Cuts", "Global Colour"];

export default function Marquee() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div className="overflow-hidden bg-sky py-3" aria-hidden>
      <div className="marquee-track flex w-max items-center gap-8 pr-8">
        {[0, 1].map((half) => (
          <div key={half} className="flex items-center gap-8">
            {row.map((item, i) => (
              <span key={`${half}-${i}`} className="flex items-center gap-8 font-display text-lg font-bold whitespace-nowrap text-ink-2 uppercase">
                {item} <span className="text-sun">✺</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
