import {
  Users,
  Mic2,
  Handshake,
  Briefcase,
} from "lucide-react";

import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionHeader from "../ui/SectionHeader";
import OpportunityCard from "./OpportunityCard";

export default function Opportunities() {
  return (
    <Section className="relative text-white" id="opportunities">
      <Container>

        <SectionHeader
          eyebrow="Get Involved"
          title="Find Your Place at TEDxGombeStateUniversity"
          description="Whether you're passionate about organizing, speaking, sponsoring, or partnering, there's an opportunity for you to contribute to ideas worth spreading."
        />

        <div className="grid gap-8 md:grid-cols-2">

          <OpportunityCard
            title="Volunteer"
            description="Join the organizing team behind TEDxGombeStateUniversity and help deliver an unforgettable experience."
            status="Open"
            href="/get-involved/volunteer"
            icon={<Users size={40} />}
          />

          <OpportunityCard
            title="Become a Speaker"
            description="Share an original idea, inspiring story, or powerful performance with our audience."
            status="Coming Soon"
            href="/get-involved/speaker"
            icon={<Mic2 size={40} />}
          />

          <OpportunityCard
            title="Sponsor"
            description="Support TEDxGombeStateUniversity while positioning your brand before a vibrant audience."
            status="Open"
            href="/get-involved/sponsor"
            icon={<Briefcase size={40} />}
          />

          <OpportunityCard
            title="Partner With Us"
            description="Collaborate with us to create lasting educational and community impact."
            status="Open"
            href="/get-involved/partner"
            icon={<Handshake size={40} />}
          />

        </div>

      </Container>
    </Section>
  );
}