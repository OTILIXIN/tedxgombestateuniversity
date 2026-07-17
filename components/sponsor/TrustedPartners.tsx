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

export default function TrustedPartners() {
  return (
    <Section className="bg-transparent">

      <Container>

        <SectionHeader
          eyebrow="Trusted Partners"
          title="Built Through Meaningful Collaboration"
          description="TEDxGombeStateUniversity is proud to collaborate with organizations that believe in innovation, education and ideas worth spreading."
        />

        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {partners.map((partner) => (

            <div
              key={partner.name}
              className="group flex h-44 flex-col items-center justify-center rounded-3xl border border-white/10 bg-black/25 p-8 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-red-600 hover:shadow-xl hover:shadow-red-600/10"
            >

              <div className="relative h-16 w-40">

                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain grayscale transition duration-500 group-hover:grayscale-0"
                />

              </div>

              <p className="mt-6 text-center font-medium text-gray-300">
                {partner.name}
              </p>

            </div>

          ))}

        </div>

      </Container>

    </Section>
  );
}