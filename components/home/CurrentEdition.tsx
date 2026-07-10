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
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/10 blur-[180px]" />
      <Container>
        <SectionHeader
          eyebrow="Current Edition"
          title="TEDxGombeStateUniversity 2027"
          description="Our license has been approved. Stay connected as we announce the official theme, event date and registration details."
        />

        <div className="mb-10 flex justify-center">
          <Badge variant="success">
            ✓ License Approved
          </Badge>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">

          <InfoCard
            icon={<Palette className="h-7 w-7 sm:h-8 sm:w-8 text-red-500" />}
            title="Theme"
            value="To Be Announced"
          />

          <InfoCard
            icon={<CalendarDays className="h-7 w-7 sm:h-8 sm:w-8 text-red-500" />}
            title="Date"
            value="To Be Announced"
          />

          <InfoCard
            icon={<MapPin className="h-7 w-7 sm:h-8 sm:w-8 text-red-500" />}
            title="Venue"
            value="Gombe State University"
          />

          <InfoCard
            icon={<Ticket className="h-7 w-7 sm:h-8 sm:w-8 text-red-500" />}
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
    <Card className="h-full rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-red-600/50">
      <div className="mb-5 flex justify-center">
        {icon}
      </div>

      <h3 className="text-xs uppercase tracking-[0.3em] text-gray-400 sm:text-sm">
        {title}
      </h3>

      <p className="mt-3 text-lg font-bold sm:text-xl">
        {value}
      </p>
    </Card>
  );
}