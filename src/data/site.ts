export const BUSINESS = {
  name: "Kams Hair & Beauty",
  phone: "(647) 572-8845",
  phoneHref: "tel:+16475728845",
  address: "Inside PROBEAUTY, 650 Matheson Blvd W, Ste 29, Mississauga, ON L5R 3T2",
  area: "Heartland — Mavis × Matheson",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Kams+Hair+%26+Beauty+Mississauga",
  instagram: "https://www.instagram.com/kams_hair_and_beauty",
  fresha:
    "https://www.fresha.com/lvp/kams-hair-beauty-matheson-boulevard-west-mississauga-VEg8ll",
  rating: "5.0",
  reviewCount: "800",
  hoursLine: "Open 7 days · 10 AM – 9 PM",
};

export type ServiceGroup = {
  no: string;
  name: string;
  blurb: string;
  note: string;
  items: string[];
};

/** Real services, confirmed from their Fresha page, Google listing and their
 * own promos (Oct 2026). Kams publishes NO prices — none are shown. */
export const GROUPS: ServiceGroup[] = [
  {
    no: "01",
    name: "Colour",
    blurb: "Painted, blended, polished",
    note: "First visit — 35% off highlights & root touch-up",
    items: ["Balayage", "Highlights with Olaplex", "Global Colour", "Root Touch-Up · ammonia-free"],
  },
  {
    no: "02",
    name: "Smoothing",
    blurb: "The glass-hair treatments",
    note: "FELP-certified — Keratin, Nanoplastia & Hair Botox specialist",
    items: ["Nanoplastia", "Keratin Treatment", "Hair Botox"],
  },
  {
    no: "03",
    name: "The Chair",
    blurb: "Cuts, fades & the finish",
    note: "First visit — 35% off haircuts",
    items: ["Cut + Blowdry", "Scissor Cut", "Zero Fade", "Beard Trim · blade", "Children's Haircut"],
  },
  {
    no: "04",
    name: "+ Also",
    blurb: "The rest of the menu",
    note: "Unisex — men, women & kids",
    items: ["Perm", "Permanent Straightening", "Blow Dry", "Facial"],
  },
];

export type Review = { quote: string; name: string };

/** Verbatim Google reviews (via Birdeye + Chamber of Commerce mirror), Oct 2026. */
export const REVIEWS: Review[] = [
  {
    quote:
      "He really took his time to make sure everything was done properly and didn't rush the haircut. Friendly, professional, and clearly takes pride in his work.",
    name: "Google review",
  },
  {
    quote:
      "So happy with my new layered haircut! Kamal did an amazing job and made sure the style suited me well. He was patient, attentive, and made the whole experience comfortable.",
    name: "Google review",
  },
  {
    quote:
      "I was delighted that Kam knew what I wanted and gave expert advice with regards to hair colour, the style that suits me.",
    name: "Google review",
  },
  {
    quote:
      "Been here twice for a mens haircut. Kamal is very good at what he does. Takes the time and effort to make sure that the customer is happy.",
    name: "Levin Tom Thomas — Google review",
  },
  {
    quote:
      "I've been here for the second time now, and I'm just as happy with my hair! Kam really takes his time and pays attention to every detail.",
    name: "Google review",
  },
];

export const NAV_LINKS = [
  { label: "The Chair Index", href: "#index" },
  { label: "Glass Pass", href: "#glass" },
  { label: "The Wall", href: "#wall" },
  { label: "Book", href: "#book" },
];
