import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionHeader from "../ui/SectionHeader";
import Link from "next/link";
import SpeakerCard from "../shared/SpeakerCard";
import { speakers } from "../speakers/speakers";

export default function Speakers() {
  return (
    <Section className="relative overflow-hidden text-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/10 blur-[160px] sm:h-[550px] sm:w-[550px] lg:h-[700px] lg:w-[700px] lg:blur-[220px]" />
      </div>

      <Container>
        <SectionHeader
          eyebrow="2026 Edition"
          title="2026 Edition Speakers"
          description="Meet the inspiring speakers who shared ideas worth spreading at the inaugural TEDxGombeStateUniversity event."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {speakers.map((speaker) => (
            <SpeakerCard
              key={speaker.id}
              name={speaker.name}
              title="First Edition Speaker"
              image={speaker.image}
            />
          ))}
        </div>

        <div className="mt-12 flex justify-center sm:mt-16">
          <Link
            href="/speakers"
            className="w-full rounded-full border border-red-600 px-8 py-3 text-center font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-600 sm:w-auto"
          >
            View All 2026 Speakers
          </Link>
        </div>
      </Container>
    </Section>
  );
}