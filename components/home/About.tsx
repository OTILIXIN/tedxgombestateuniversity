import Container from "../ui/Container";
import Section from "../ui/Section";
import Button from "../ui/Button";
import Image from "next/image";

export default function About() {
  return (
    <Section className="bg-black py-24 text-white">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Content */}
          <div className="max-w-xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-red-600">
              ABOUT TEDxGOMBESTATEUNIVERSITY
            </p>

            <h2 className="text-4xl font-bold leading-tight md:text-5xl">
              Ideas have the power to transform communities.
            </h2>

            <p className="mt-8 text-lg leading-8 text-gray-400">
              TEDxGombeStateUniversity is an independently organized TEDx
              event licensed by TED. We exist to create a platform where
              bold ideas, inspiring stories and meaningful conversations
              empower the next generation of leaders, innovators and
              changemakers.
            </p>

            <div className="mt-12">
                <Button>
                   Learn More
                </Button>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
  <Image
  src="/about-image-v2.jpg"
  alt="About TEDxGombeStateUniversity"
  width={1000}
  height={700}
  className="h-[400px] w-full object-cover rounded-5xl"
/>
</div>

        </div>
      </Container>
    </Section>
  );
}