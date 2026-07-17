import {
  FileText,
  Search,
  Users,
  CheckCircle2,
} from "lucide-react";

import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionHeader from "../ui/SectionHeader";

const steps = [
  {
    icon: <FileText size={30} />,
    title: "Submit Your Application",
    description:
      "Complete the volunteer application form and select the department where you believe you can contribute best.",
  },
  {
    icon: <Search size={30} />,
    title: "Application Review",
    description:
      "Our leadership team reviews every application carefully to ensure the best fit for each department.",
  },
  {
    icon: <Users size={30} />,
    title: "Interview & Onboarding",
    description:
      "Successful applicants will be invited for a short interview and onboarding session with their department lead.",
  },
  {
    icon: <CheckCircle2 size={30} />,
    title: "Welcome to the Team",
    description:
      "You'll officially join the TEDxGombeStateUniversity organizing team and begin collaborating with fellow volunteers.",
  },
];

export default function ApplicationJourney() {
  return (
    <Section className="relative text-white overflow-hidden">
      <Container>

        <SectionHeader
          eyebrow="Application Process"
          title="Your Journey Starts Here"
          description="Here's what happens after you submit your application."
          />

        {/* Ambient Glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-1/2 top-1/4 h-96 w-96 -translate-x-1/2 rounded-full bg-red-600/5 blur-3xl" />
          <div className="absolute right-0 bottom-1/3 h-96 w-96 rounded-full bg-red-600/5 blur-3xl" />
        </div>

        <div className="relative mt-20">

          {/* Timeline */}
          <div className="absolute left-1/2 top-0 hidden h-full w-1 -translate-x-1/2 bg-gradient-to-b from-red-600 via-red-500/30 to-transparent lg:block" />

          <div className="space-y-16">

            {steps.map((step, index) => (

              <div
                key={step.title}
                className={`flex flex-col items-center gap-10 lg:flex-row ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >

                <div className="flex-1">

                  <div className="group relative overflow-hidden rounded-3xl border border-red-600/20 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-6 md:p-10 backdrop-blur-xl transition-all duration-300 hover:border-red-600/50 hover:shadow-2xl hover:shadow-red-600/20 hover:-translate-y-1">

                    {/* Card Glow */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent rounded-3xl" />
                    </div>

                    <div className="relative z-10">
                      <div className="mb-6 inline-flex rounded-2xl bg-gradient-to-br from-red-600/30 to-red-600/10 p-4 text-red-400 group-hover:text-red-300 transition-colors duration-300">
                        {step.icon}
                      </div>

                      <h3 className="text-xl md:text-2xl font-bold text-white">
                        {step.title}
                      </h3>

                      <p className="mt-5 leading-relaxed text-sm md:text-base text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                        {step.description}
                      </p>
                    </div>

                  </div>

                </div>

                {/* Timeline Circle */}
                <div className="relative hidden lg:flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full border-2 border-red-600/40 bg-gradient-to-br from-red-600/20 to-black font-bold text-red-400 text-lg shadow-lg shadow-red-600/20 group-hover:scale-110 transition-transform duration-300">
                  <div className="absolute inset-0 rounded-full border border-red-600/60 animate-pulse" />
                  <span className="relative z-10">{index + 1}</span>
                </div>

                <div className="hidden lg:block flex-1" />

              </div>

            ))}

          </div>

        </div>

      </Container>
    </Section>
  );
}