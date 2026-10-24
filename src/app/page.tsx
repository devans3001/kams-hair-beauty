import BookSection from "@/components/BookSection";
import ChairIndex from "@/components/ChairIndex";
import Footer from "@/components/Footer";
import GlassPass from "@/components/GlassPass";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Nav from "@/components/Nav";
import RevealWall from "@/components/RevealWall";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <Marquee />
      <GlassPass />
      <ChairIndex />
      <RevealWall />
      <BookSection />
      <Footer />
    </main>
  );
}
