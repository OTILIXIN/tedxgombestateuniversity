"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import {
  Users,
  Mic2,
  Globe2,
  Building2,
} from "lucide-react";

import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionHeader from "../ui/SectionHeader";

const stats = [
  {
    icon: <Users size={42} />,
    end: 300,
    suffix: "+",
    label: "Expected Attendees",
  },
  {
    icon: <Mic2 size={42} />,
    end: 10,
    suffix: "+",
    label: "Inspiring Speakers",
  },
  {
    icon: <Globe2 size={42} />,
    end: 50,
    suffix: "K+",
    label: "Digital Reach",
  },
  {
    icon: <Building2 size={42} />,
    end: 20,
    suffix: "+",
    label: "Partner Organizations",
  },
];

export default function AudienceImpact() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <Section className="bg-transparent">

      <Container>

        <SectionHeader
          eyebrow="Audience & Impact"
          title="A Platform Designed For Visibility"
          description="TEDxGombeStateUniversity connects brands with a vibrant audience of students, innovators, professionals and community leaders while extending impact through digital media."
        />

        <div
          ref={ref}
          className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >

          {stats.map((stat) => (

            <div
              key={stat.label}
              className="group rounded-3xl border border-white/10 bg-black/25 p-10 text-center backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-red-600 hover:shadow-xl hover:shadow-red-600/10"
            >

              <div className="flex justify-center text-red-600">
                {stat.icon}
              </div>

              <h3 className="mt-8 text-5xl font-black text-white">

                {inView ? (
                  <CountUp
                    end={stat.end}
                    duration={2.5}
                    suffix={stat.suffix}
                  />
                ) : (
                  `0${stat.suffix}`
                )}

              </h3>

              <p className="mt-4 text-gray-300">
                {stat.label}
              </p>

            </div>

          ))}

        </div>

      </Container>

    </Section>
  );
}