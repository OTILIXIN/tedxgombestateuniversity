import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import HeroBackground from "../components/home/HeroBackground";
import CurrentEdition from "../components/home/CurrentEdition";
import About from "../components/home/About";
import Speakers from "../components/home/Speakers";
import VCMessage from "@/components/home/VCMessage";
import Newsletter from "@/components/home/Newsletter";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="relative w-full overflow-x-hidden">

      {/* Fixed Background */}
      <HeroBackground />

      {/* Global Dark Overlay */}
      <div className="fixed inset-0 -z-10 bg-black/55" />

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <CurrentEdition />
        <About />
        <Speakers />
        <VCMessage />
        <Newsletter />
        <Footer />
      </div>

    </main>
  );
}
