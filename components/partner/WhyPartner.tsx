import {
  Handshake,
  Globe2,
  Rocket,
} from "lucide-react";

import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionHeader from "../ui/SectionHeader";

const benefits = [
  {
    icon: <Handshake size={42} />,
    title: "Strategic Collaboration",
    description:
      "Work alongside TEDxGombeStateUniversity to deliver meaningful experiences that inspire innovation, leadership and positive social change.",
  },
  {
    icon: <Globe2 size={42} />,
    title: "Community Impact",
    description:
      "Reach students, professionals and changemakers while contributing to initiatives that empower communities through ideas worth spreading.",
  },
  {
    icon: <Rocket size={42} />,
    title: "Shared Growth",
    description:
      "Build long-term relationships, expand your network and create opportunities that benefit both your organization and our audience.",
  },
];

export default function WhyPartner() {
  return (
    <Section className="bg-transparent">

      <Container>

        <SectionHeader
          eyebrow="Why Partner"
          title="Creating Greater Impact Together"
          description="Partnerships are built on shared values, mutual growth and a common commitment to empowering people through transformative ideas."
        />

        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {benefits.map((benefit) => (

            <div
              key={benefit.title}
              className="group rounded-3xl border border-white/10 bg-black/25 p-10 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-red-600 hover:shadow-2xl hover:shadow-red-600/10"
            >

              <div className="mb-8 text-red-600">
                {benefit.icon}
              </div>

              <h3 className="text-2xl font-bold">
                {benefit.title}
              </h3>

              <p className="mt-5 leading-8 text-gray-300">
                {benefit.description}
              </p>

            </div>

          ))}

        </div>

      </Container>

    </Section>
  );
}