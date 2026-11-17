import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import AboutBackground from "@/components/about/AboutBackground";
import AboutHero from "@/components/about/AboutHero";
import WhatIsTED from "@/components/about/WhatIsTED";
import WhatIsTEDx from "@/components/about/WhatIsTEDx";
import AboutTEDxGSU from "@/components/about/AboutTEDxGSU";
import Vision from "@/components/about/Vision";
import Mission from "@/components/about/Mission";
import Values from "@/components/about/Values";
import WhyGSU from "@/components/about/WhyGSU";
import OurEditions from "@/components/about/OurEditions";
import CallToAction from "@/components/about/CallToAction";

export default function AboutPage() {
  return (
    <main className="relative w-full overflow-x-hidden">

      <AboutBackground />

      {/* Global Overlay */}
      <div className="fixed inset-0 -z-10 bg-black/60" />

      <div className="relative z-10">

        <Navbar />

        <AboutHero />
        <WhatIsTED />
        <WhatIsTEDx />
        <AboutTEDxGSU />
        <Vision />
        <Mission />
        <Values />
        <WhyGSU />
        <OurEditions />
        <CallToAction />
        <Footer />

      </div>

    </main>
  );
}