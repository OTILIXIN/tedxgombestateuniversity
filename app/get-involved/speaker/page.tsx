"use client";

import { useState } from "react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import SpeakerBackground from "@/components/speaker/SpeakerBackground";
import SpeakerHero from "@/components/speaker/SpeakerHero";
import WhySpeak from "@/components/speaker/WhySpeak";
import SpeakerCategories from "@/components/speaker/SpeakerCategories";
import SpeakerCategoryDetails from "@/components/speaker/SpeakerCategoryDetails";
import SpeakerJourney from "@/components/speaker/SpeakerJourney";
import SpeakerApplicationForm from "@/components/speaker/SpeakerApplicationForm";

import { speakerCategories } from "@/data/speakerCategories";

export default function SpeakerPage() {
  const [selectedCategory, setSelectedCategory] = useState(
    speakerCategories[0]
  );

  return (
    <main className="relative w-full overflow-x-hidden">

      {/* Fixed Background */}
      <SpeakerBackground />

      {/* Global Dark Overlay */}
      <div className="fixed inset-0 -z-10 bg-black/55" />

      <div className="relative z-10 text-white">
        <Navbar />

        <SpeakerHero />

        <WhySpeak />

        <SpeakerCategories
          categories={speakerCategories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        <SpeakerCategoryDetails
          category={selectedCategory}
        />

        <SpeakerJourney />

        <SpeakerApplicationForm
          category={selectedCategory}
        />

        <Footer />
      </div>

    </main>
  );
}