import {
  Megaphone,
  Handshake,
  GraduationCap,
} from "lucide-react";

import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionHeader from "../ui/SectionHeader";

const benefits = [
  {
    icon: <Megaphone size={42} />,
    title: "Brand Visibility",
    description:
      "Position your brand before students, professionals, entrepreneurs, educators and community leaders through on-site branding, digital campaigns and event exposure.",
  },
  {
    icon: <GraduationCap size={42} />,
    title: "Community Impact",
    description:
      "Support youth empowerment, innovation and education while helping create a platform where ideas inspire meaningful change.",
  },
  {
    icon: <Handshake size={42} />,
    title: "Meaningful Partnerships",
    description:
      "Build lasting relationships with one of the world's most recognized event brands while demonstrating your commitment to social impact.",
  },
];

export default function WhySponsor() {
  return (
    <Section className="bg-transparent">

      <Container>

        <SectionHeader
          eyebrow="Why Sponsor"
          title="Invest In Ideas That Matter"
          description="Sponsoring TEDxGombeStateUniversity goes beyond visibility. It is an opportunity to support innovation, leadership and community transformation while aligning your organization with globally recognized values."
        />

        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {benefits.map((item) => (

            <div
              key={item.title}
              className="group rounded-3xl border border-white/10 bg-black/25 backdrop-blur-md p-10 transition-all duration-500 hover:-translate-y-2 hover:border-red-600 hover:shadow-2xl hover:shadow-red-600/10"
            >

              <div className="mb-8 text-red-600">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold">
                {item.title}
              </h3>

              <p className="mt-5 leading-8 text-gray-300">
                {item.description}
              </p>

            </div>

          ))}

        </div>

      </Container>

    </Section>
  );
}