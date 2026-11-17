import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SpeakerBackground from "@/components/speaker/SpeakerBackground";
import SpeakersHero from "@/components/speakers/SpeakersHero";
import SpeakerGrid from "@/components/speakers/SpeakerGrid";

export default function SpeakersPage() {
  return (
    <main className="relative w-full overflow-x-hidden text-white">

      {/* Background */}
      <SpeakerBackground />

      <div className="relative z-10">
        <Navbar />
        <SpeakersHero />
        <SpeakerGrid />
        <Footer />
      </div>

    </main>
  );
}