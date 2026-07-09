import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionHeader from "../ui/SectionHeader";
import SpeakerCard from "../shared/SpeakerCard";

export default function Speakers() {
  return (
    <Section className="relative overflow-hidden bg-black text-white">

        <div className="absolute inset-0 pointer-events-none">
  <div className="absolute left-1/2 top-40 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-red-600/10 blur-[180px]" />
</div>

      <Container>

        <div className="relative z-10">
  {/* Existing SectionHeader, grid and button */}
</div>

        <SectionHeader
          eyebrow="2026 Edition"
          title="2026 Edition Speakers"
          description="Meet the inspiring speakers who shared ideas worth spreading at the inaugural TEDxGombeStateUniversity event."
        />

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          <SpeakerCard
            name="Speaker One"
            title="Entrepreneur"
            image="/speakers/placeholder.jpg"
          />

          <SpeakerCard
            name="Speaker Two"
            title="Educator"
            image="/speakers/placeholder.jpg"
          />

          <SpeakerCard
            name="Speaker Three"
            title="Innovator"
            image="/speakers/placeholder.jpg"
          />

          <SpeakerCard
            name="Speaker Four"
            title="Researcher"
            image="/speakers/placeholder.jpg"
          />

          <SpeakerCard
            name="Speaker Five"
            title="Creative Leader"
            image="/speakers/placeholder.jpg"
          />

          <SpeakerCard
            name="Speaker Six"
            title="Community Builder"
            image="/speakers/placeholder.jpg"
          />

        </div>

        <div className="mt-16 flex justify-center">
          <button className="rounded-xl border border-red-600 px-8 py-3 font-semibold transition hover:bg-red-600">
            View All 2026 Speakers
          </button>
        </div>

      </Container>
    </Section>
  );
}