"use client";

import { useState } from "react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import VolunteerBackground from "@/components/volunteer/VolunteerBackground";
import VolunteerHero from "@/components/volunteer/VolunteerHero";
import WhyVolunteer from "@/components/volunteer/WhyVolunteer";
import DepartmentGrid from "@/components/volunteer/DepartmentGrid";
import DepartmentDetails from "@/components/volunteer/DepartmentDetails";
import ApplicationJourney from "@/components/volunteer/ApplicationJourney";
import VolunteerApplicationForm from "@/components/volunteer/VolunteerApplicationForm";

import { volunteerDepartments } from "@/data/volunteerDepartments";

export default function VolunteerPage() {
  const [selectedDepartment, setSelectedDepartment] = useState(
    volunteerDepartments[0]
  );

  return (
    <main className="relative w-full overflow-x-hidden">

      {/* Fixed Image Background */}
      <VolunteerBackground />

      {/* Global Dark Overlay */}
      <div className="fixed inset-0 -z-10 bg-black/55" />

      <div className="relative z-10 text-white">
        <Navbar />

        <VolunteerHero />

        <WhyVolunteer />

        <DepartmentGrid
          departments={volunteerDepartments}
          selectedDepartment={selectedDepartment}
          onSelectDepartment={setSelectedDepartment}
        />

        <DepartmentDetails
          department={selectedDepartment}
        />

        <ApplicationJourney />

        <VolunteerApplicationForm
            department={selectedDepartment}
        />

        <Footer />
      </div>

    </main>
  );
}