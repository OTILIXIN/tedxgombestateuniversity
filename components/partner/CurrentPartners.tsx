import Image from "next/image";

import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionHeader from "../ui/SectionHeader";

const partners = [
  {
    name: "Gombe State University",
    logo: "/partners/gsu.png",
  },
  {
    name: "Fidelity Bank",
    logo: "/partners/fidelity.png",
  },
  {
    name: "LIXIN NETWORK LTD",
    logo: "/partners/lixin.png",
  },
  {
    name: "Silicon Africa Technologies Limited",
    logo: "/partners/silicon-africa.png",
  },
];

export default function CurrentPartners() {
  return (
    <Section className="bg-transparent">

      <Container>

        <SectionHeader
          eyebrow="Our Partners"
          title="Organizations Working With Us"
          description="We are proud to collaborate with organizations that believe in education, innovation, leadership and ideas worth spreading."
        />

        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {partners.map((partner) => (

            <div
              key={partner.name}
              className="group flex h-48 flex-col items-center justify-center rounded-3xl border border-white/10 bg-black/25 p-8 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-red-600 hover:shadow-xl hover:shadow-red-600/10"
            >

              <div className="relative h-20 w-40">

                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain grayscale transition duration-500 group-hover:grayscale-0"
                />

              </div>

              <h3 className="mt-6 text-center text-lg font-semibold">
                {partner.name}
              </h3>

            </div>

          ))}

        </div>

      </Container>

    </Section>
  );
}