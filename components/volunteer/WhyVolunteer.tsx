import {
  Award,
  Users,
  Briefcase,
  Sparkles,
} from "lucide-react";

import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionHeader from "../ui/SectionHeader";

const benefits = [
  {
    icon: <Award size={34} />,
    title: "Leadership",
    description:
      "Take ownership of meaningful responsibilities and develop leadership skills by organizing a world-class TEDx event.",
  },
  {
    icon: <Users size={34} />,
    title: "Networking",
    description:
      "Connect with speakers, professionals, entrepreneurs, creatives, and fellow volunteers from diverse backgrounds.",
  },
  {
    icon: <Briefcase size={34} />,
    title: "Real Experience",
    description:
      "Gain practical experience in event management, communication, logistics, marketing, media, and project execution.",
  },
  {
    icon: <Sparkles size={34} />,
    title: "Recognition",
    description:
      "Receive an official volunteer certificate, build your portfolio, and become part of the TEDxGombeStateUniversity community.",
  },
];

export default function WhyVolunteer() {
  return (
    <Section
      id="why-volunteer"
      className="relative text-white"
    >
      <Container>

        <SectionHeader
          eyebrow="Why Volunteer?"
          title="More Than Just Volunteering"
          description="Volunteering at TEDxGombeStateUniversity is an opportunity to grow, serve, and become part of a passionate team creating an unforgettable experience."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:border-red-600 hover:shadow-xl hover:shadow-red-600/10"
            >
              {/* Glow */}
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-red-600/10 blur-3xl transition group-hover:bg-red-600/20" />

              <div className="relative z-10">

                <div className="mb-6 inline-flex rounded-2xl bg-red-600/10 p-4 text-red-500 transition-transform duration-300 group-hover:scale-110">
                  {benefit.icon}
                </div>

                <h3 className="text-2xl font-bold">
                  {benefit.title}
                </h3>

                <p className="mt-5 leading-7 text-gray-300">
                  {benefit.description}
                </p>

              </div>
            </div>
          ))}

        </div>

      </Container>
    </Section>
  );
}