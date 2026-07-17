import {
  Megaphone,
  Users,
  Globe,
  Camera,
  TrendingUp,
  HeartHandshake,
} from "lucide-react";

import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionHeader from "../ui/SectionHeader";

const benefits = [
  {
    icon: <Megaphone size={40} />,
    title: "Brand Awareness",
    description:
      "Increase your brand visibility before a diverse audience through event branding, stage recognition and digital promotion.",
  },
  {
    icon: <Users size={40} />,
    title: "Networking",
    description:
      "Connect with students, entrepreneurs, professionals, educators and influential community leaders.",
  },
  {
    icon: <TrendingUp size={40} />,
    title: "Business Growth",
    description:
      "Generate quality leads and strengthen your organization's presence within Northern Nigeria and beyond.",
  },
  {
    icon: <Camera size={40} />,
    title: "Media Exposure",
    description:
      "Benefit from extensive photo, video and social media coverage before, during and after the event.",
  },
  {
    icon: <HeartHandshake size={40} />,
    title: "Corporate Impact",
    description:
      "Demonstrate your commitment to education, innovation, leadership and community development through meaningful support.",
  },
  {
    icon: <Globe size={40} />,
    title: "Global TEDx Alignment",
    description:
      "Associate your brand with one of the world's most respected platforms for ideas worth spreading.",
  },
];

export default function PartnershipBenefits() {
  return (
    <Section className="bg-transparent">

      <Container>

        <SectionHeader
          eyebrow="Benefits"
          title="Why Partner With TEDxGombeStateUniversity?"
          description="Every sponsorship creates meaningful value for both your organization and our community."
        />

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {benefits.map((benefit) => (

            <div
              key={benefit.title}
              className="group rounded-3xl border border-white/10 bg-black/25 p-8 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-red-600 hover:shadow-xl hover:shadow-red-600/10"
            >

              <div className="mb-6 text-red-600">
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