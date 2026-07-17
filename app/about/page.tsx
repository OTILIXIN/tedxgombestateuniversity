import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import AboutBackground from "@/components/about/AboutBackground";
import AboutHero from "@/components/about/AboutHero";
import WhatIsTED from "@/components/about/WhatIsTED";

export default function AboutPage() {
  return (
    <main className="relative w-full overflow-x-hidden">

      <AboutBackground />

      {/* Global Overlay */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-black/40 via-black/60 to-black/80" />

      <div className="relative z-10">

        <Navbar />

        <AboutHero />
        <WhatIsTED />

        <Footer />

      </div>

    </main>
  );
}