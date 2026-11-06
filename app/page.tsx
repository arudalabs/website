import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PixelDivider from "@/components/PixelDivider";
import Logos from "@/components/Logos";
import Features from "@/components/Features";
import Stats from "@/components/Stats";
import Projects from "@/components/Projects";
import DevUpdates from "@/components/DevUpdates";
import Roadmap from "@/components/Roadmap";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col w-full bg-[#0A0A0A] pt-[60px]">
        <Hero />
        <PixelDivider />
        <Logos />
        <Features />
        <Stats />
        <Projects />
        <DevUpdates />
        <Roadmap />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
