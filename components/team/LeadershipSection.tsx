import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionHeader from "../ui/SectionHeader";
import TeamCard from "./TeamCard";

export default function LeadershipSection() {
  return (
    <Section className="relative text-white">
      <Container>

        <SectionHeader
          eyebrow="Leadership Team"
          title="Meet the Team Behind TEDxGombeStateUniversity"
          description="Our organizing committee brings together passionate leaders, creatives and professionals working together to deliver an exceptional TEDx experience."
        />

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          <TeamCard
            name="Ochi John Otinikanyohe"
            role="Organizer & Licensee"
          />

          <TeamCard
            name="Mr. Naphtali Hadu Ligari"
            role="Project Manager"
          />

          <TeamCard
            name="Asma'u Sa'ad Laido"
            role="Assistant Project Manager"
          />

          <TeamCard
            name="Dorcas Daniel"
            role="Co-organizer / Media & Communications"
          />

          <TeamCard
            name="Alewa Jonathan"
            role="Operations & Logistics Lead"
          />

          <TeamCard
            name="Shua Zakari M."
            role="Welfare Officer"
          />

          <TeamCard
            name="Aishatu Anisa"
            role="Lead, Program & Speaker Curation"
          />

          <TeamCard
            name="Christian Daniel"
            role="Technical & AV Lead"
          />

          <TeamCard
            name="Bashir Adamu Hassan"
            role="Mobilization & Audience Engagement"
          />

        </div>

      </Container>
    </Section>
  );
}