"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import SponsorBackground from "@/components/sponsor/SponsorBackground";
import SponsorHero from "@/components/sponsor/SponsorHero";
import WhySponsor from "@/components/sponsor/WhySponsor";
import SponsorshipPackages from "@/components/sponsor/SponsorshipPackages";
import PartnershipBenefits from "@/components/sponsor/PartnershipBenefits";
import AudienceImpact from "@/components/sponsor/AudienceImpact";
import TrustedPartners from "@/components/sponsor/TrustedPartners";
import SponsorFAQ from "@/components/sponsor/SponsorFAQ";
import SponsorApplicationForm from "@/components/sponsor/SponsorApplicationForm";

export default function SponsorPage() {
  return (
    <main className="relative w-full overflow-x-hidden">

      <SponsorBackground />

      <div className="fixed inset-0 -z-10 bg-black/55" />

      <div className="relative z-10">

        <Navbar />

        <SponsorHero />
        <WhySponsor />
        <SponsorshipPackages />
        <PartnershipBenefits />
        <AudienceImpact />
        <TrustedPartners />
        <SponsorFAQ />
        <SponsorApplicationForm />

        <Footer />

      </div>

    </main>
  );
}