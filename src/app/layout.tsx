import type { Metadata } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";

const display = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const sans = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kams Hair & Beauty | Luxury Hair Salon in Mississauga",
  description:
    "Mississauga's 5-star rated hair salon. Knotless braids, silk press, sew-ins, wig installs & natural hair care. 755+ five-star Google reviews. Book your appointment today.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${display.variable} ${sans.variable} bg-cream text-ink font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
