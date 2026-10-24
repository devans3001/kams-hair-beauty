import type { Metadata } from "next";
import { Archivo, Syne } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const syne = Syne({ subsets: ["latin"], weight: ["700", "800"], variable: "--font-display" });
const archivo = Archivo({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "Kams Hair & Beauty — Heartland, Mississauga",
  description:
    "Kams Hair & Beauty, inside PROBEAUTY, Heartland Mississauga. Balayage, keratin, nanoplastia, hair botox, precision cuts & fades by Kamal. 5.0 stars across 800 Google reviews. Appointment only — book on Fresha or call (647) 572-8845.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${archivo.variable}`}>
      <body>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
