import {
  CalendarDays,
  MapPin,
  Palette,
  Ticket,
} from "lucide-react";

import Badge from "../ui/Badge";
import Card from "../ui/Card";
import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionHeader from "../ui/SectionHeader";

export default function CurrentEdition() {
  return (
    <Section className="bg-black text-white">
      <Container>
        <SectionHeader
          eyebrow="Current Edition"
          title="TEDxGombeStateUniversity 2027"
          description="Our license has been approved. Stay connected as we announce the official theme, event date and registration details."
        />

        <div className="mb-10 flex justify-center">
          <Badge variant="success">
            License Approved
          </Badge>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          <InfoCard
            icon={<Palette className="h-6 w-6 text-red-500" />}
            title="Theme"
            value="To Be Announced"
          />

          <InfoCard
            icon={<CalendarDays className="h-6 w-6 text-red-500" />}
            title="Date"
            value="To Be Announced"
          />

          <InfoCard
            icon={<MapPin className="h-6 w-6 text-red-500" />}
            title="Venue"
            value="Gombe State University"
          />

          <InfoCard
            icon={<Ticket className="h-6 w-6 text-red-500" />}
            title="Registration"
            value="Opening Soon"
          />

        </div>
      </Container>
    </Section>
  );
}

type InfoCardProps = {
  icon: React.ReactNode;
  title: string;
  value: string;
};

function InfoCard({
  icon,
  title,
  value,
}: InfoCardProps) {
  return (
    <Card className="text-center">
      <div className="mb-5 flex justify-center">
        {icon}
      </div>

      <h3 className="text-sm uppercase tracking-[0.25em] text-gray-400">
        {title}
      </h3>

      <p className="mt-3 text-lg font-semibold">
        {value}
      </p>
    </Card>
  );
}