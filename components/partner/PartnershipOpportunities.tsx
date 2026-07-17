import {
  GraduationCap,
  Newspaper,
  Laptop,
  HeartHandshake,
  Lightbulb,
  Landmark,
} from "lucide-react";

import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionHeader from "../ui/SectionHeader";

const opportunities = [
  {
    icon: <GraduationCap size={42} />,
    title: "Education Partners",
    description:
      "Universities, schools and educational institutions supporting learning, leadership and innovation.",
  },
  {
    icon: <HeartHandshake size={42} />,
    title: "Community Partners",
    description:
      "NGOs, nonprofits and community organizations committed to creating meaningful social impact.",
  },
  {
    icon: <Newspaper size={42} />,
    title: "Media Partners",
    description:
      "Media houses, bloggers and content creators helping amplify ideas worth spreading.",
  },
  {
    icon: <Laptop size={42} />,
    title: "Technology Partners",
    description:
      "Technology companies providing digital tools, platforms and technical expertise.",
  },
  {
    icon: <Lightbulb size={42} />,
    title: "Innovation Partners",
    description:
      "Innovation hubs, startups and entrepreneurial organizations driving creative solutions.",
  },
  {
    icon: <Landmark size={42} />,
    title: "Institutional Partners",
    description:
      "Government agencies, foundations and corporate institutions supporting long-term impact.",
  },
];

export default function PartnershipOpportunities() {
  return (
    <Section id="opportunities" className="bg-transparent">

      <Container>

        <SectionHeader
          eyebrow="Opportunities"
          title="Ways To Partner With Us"
          description="There are many ways organizations can collaborate with TEDxGombeStateUniversity to create meaningful impact."
        />

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {opportunities.map((item) => (

            <div
              key={item.title}
              className="group rounded-3xl border border-white/10 bg-black/25 p-10 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-red-600 hover:shadow-xl hover:shadow-red-600/10"
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