import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import CurrentEdition from "../components/home/CurrentEdition";
import About from "../components/home/About";
import Speakers from "../components/home/Speakers";
import VCMessage from "@/components/home/VCMessage";
import Newsletter from "@/components/home/Newsletter";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="relative w-full overflow-x-hidden bg-black">
      <Navbar />
      <Hero />
      <CurrentEdition />
      <About />
      <Speakers />
      <VCMessage />
      <Newsletter />
      <Footer />
    </main>
  );
}