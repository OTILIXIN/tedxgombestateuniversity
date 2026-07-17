import {
  FileText,
  Search,
  MessagesSquare,
  GraduationCap,
  Mic2,
} from "lucide-react";

import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionHeader from "../ui/SectionHeader";

const journey = [
  {
    icon: FileText,
    title: "Submit Your Idea",
    description:
      "Complete the speaker application and share your original idea, experience, and why it matters.",
  },
  {
    icon: Search,
    title: "Review & Evaluation",
    description:
      "Our curation team carefully evaluates every submission for originality, relevance, and alignment with TEDx principles.",
  },
  {
    icon: MessagesSquare,
    title: "Speaker Interview",
    description:
      "Shortlisted applicants are invited for a conversation to better understand their idea and presentation style.",
  },
  {
    icon: GraduationCap,
    title: "Coaching & Refinement",
    description:
      "Selected speakers work with our coaching team to refine their message, storytelling, and stage delivery.",
  },
  {
    icon: Mic2,
    title: "Take the TEDx Stage",
    description:
      "Deliver your talk live at TEDxGombeStateUniversity and become part of a global community of ideas worth spreading.",
  },
];

export default function SpeakerJourney() {
  return (
    <Section className="relative text-white">
      <Container>

        <SectionHeader
          eyebrow="Speaker Journey"
          title="Your Journey to the TEDx Stage"
          description="Every TEDx speaker goes through a thoughtful curation and coaching process designed to bring out the very best version of their idea."
        />

        <div className="relative mt-20">

          {/* Timeline */}

          <div className="absolute left-6 top-0 hidden h-full w-1 rounded-full bg-red-600/20 lg:block" />

          <div className="space-y-10">

            {journey.map((step, index) => {

              const Icon = step.icon;

              return (

                <div
                  key={step.title}
                  className="group relative flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur transition-all duration-500 hover:border-red-600 hover:shadow-xl hover:shadow-red-600/10 lg:flex-row lg:items-start"
                >

                  {/* Number */}

                  <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-lg font-bold">

                    {index + 1}

                  </div>

                  {/* Icon */}

                  <div className="rounded-2xl bg-red-600/10 p-5 text-red-500 transition group-hover:bg-red-600 group-hover:text-white">

                    <Icon size={32} />

                  </div>

                  {/* Content */}

                  <div className="flex-1">

                    <h3 className="text-2xl font-bold">
                      {step.title}
                    </h3>

                    <p className="mt-4 max-w-3xl leading-8 text-gray-300">
                      {step.description}
                    </p>

                  </div>

                </div>

              );

            })}

          </div>

        </div>

      </Container>
    </Section>
  );
}