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
            image="/team/placeholder.jpg"
            name="Ochi John Otinikanyohe"
            role="Organizer & Licensee"
          />

          <TeamCard
            image="/team/placeholder.jpg"
            name="Mr. Naphtali Hadu Ligari"
            role="Project Manager"
          />

          <TeamCard
            image="/team/placeholder.jpg"
            name="Asma'u Sa'ad Laido"
            role="Assistant Project Manager"
          />

          <TeamCard
            image="/team/placeholder.jpg"
            name="Dorcas Daniel"
            role="Co-organizer / Media & Communications"
          />

          <TeamCard
            image="/team/placeholder.jpg"
            name="Alewa Jonathan"
            role="Operations & Logistics Lead"
          />

          <TeamCard
            image="/team/placeholder.jpg"
            name="Shua Zakari M."
            role="Welfare Officer"
          />

          <TeamCard
            image="/team/placeholder.jpg"
            name="Aishatu Anisa"
            role="Lead, Program & Speaker Curation"
          />

          <TeamCard
            image="/team/placeholder.jpg"
            name="Christian Daniel"
            role="Technical & AV Lead"
          />

          <TeamCard
            image="/team/placeholder.jpg"
            name="Bashir Adamu Hassan"
            role="Mobilization & Audience Engagement"
          />

        </div>

      </Container>
    </Section>
  );
}