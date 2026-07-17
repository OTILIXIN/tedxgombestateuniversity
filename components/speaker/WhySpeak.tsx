import {
  Globe2,
  Mic2,
  Users,
  Rocket,
} from "lucide-react";

import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionHeader from "../ui/SectionHeader";

const benefits = [
  {
    icon: Globe2,
    title: "Inspire Thousands",
    description:
      "Share an original idea that has the power to influence perspectives, spark conversations, and inspire action far beyond the event itself.",
  },
  {
    icon: Mic2,
    title: "Speak on a World-Class Stage",
    description:
      "Deliver your idea on an official TEDx stage designed to amplify authentic voices and memorable stories.",
  },
  {
    icon: Users,
    title: "Join a Community",
    description:
      "Connect with innovators, entrepreneurs, researchers, creatives, and leaders passionate about shaping the future.",
  },
  {
    icon: Rocket,
    title: "Leave a Lasting Legacy",
    description:
      "Your talk has the potential to continue inspiring people long after the event through recordings and the TEDx community.",
  },
];

export default function WhySpeak() {
  return (
    <Section
      id="why-speak"
      className="relative text-white"
    >
      <Container>

        <SectionHeader
          eyebrow="Why Speak?"
          title="Ideas Can Change Everything"
          description="TEDxGombeStateUniversity is looking for speakers with original ideas that challenge assumptions, inspire action, and create meaningful impact."
        />

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {benefits.map((benefit) => {

            const Icon = benefit.icon;

            return (

              <div
                key={benefit.title}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur transition-all duration-500 hover:-translate-y-3 hover:border-red-600 hover:shadow-2xl hover:shadow-red-600/20"
              >

                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-red-600/10 blur-3xl transition group-hover:bg-red-600/20" />

                <div className="relative z-10">

                  <div className="mb-8 inline-flex rounded-2xl bg-red-600/10 p-5 text-red-500 transition group-hover:bg-red-600 group-hover:text-white">

                    <Icon size={34} />

                  </div>

                  <h3 className="text-2xl font-bold">
                    {benefit.title}
                  </h3>

                  <p className="mt-5 leading-8 text-gray-300">
                    {benefit.description}
                  </p>

                </div>

              </div>

            );

          })}

        </div>

      </Container>
    </Section>
  );
}