"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import PartnerBackground from "@/components/partner/PartnerBackground";
import PartnerHero from "@/components/partner/PartnerHero";
import WhyPartner from "@/components/partner/WhyPartner";
import PartnershipOpportunities from "@/components/partner/PartnershipOpportunities";
import PartnerImpact from "@/components/partner/PartnerImpact";
import CurrentPartners from "@/components/partner/CurrentPartners";
import PartnerFAQ from "@/components/partner/PartnerFAQ";
import PartnerApplicationForm from "@/components/partner/PartnerApplicationForm";

export default function PartnerPage() {
  return (
    <main className="relative w-full overflow-x-hidden">

      <PartnerBackground />

      <div className="fixed inset-0 -z-10 bg-black/55" />

      <div className="relative z-10">

        <Navbar />

        <PartnerHero />
        <WhyPartner />
        <PartnershipOpportunities />
        <PartnerImpact />
        <CurrentPartners />
        <PartnerFAQ />
        <PartnerApplicationForm />

        <Footer />

      </div>

    </main>
  );
}