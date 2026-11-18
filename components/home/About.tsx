import Container from "../ui/Container";
import Section from "../ui/Section";
import Button from "../ui/Button";
import Image from "next/image";

export default function About() {
  return (
    <Section className="relative overflow-hidden text-white">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,_transparent_0%,_rgba(255,255,255,0.025)_50%,_transparent_100%)]" />

      <Container>
        <div className="grid items-center gap-10 md:gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="order-2 max-w-xl lg:order-1">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-red-600">
              ABOUT TEDxGOMBESTATEUNIVERSITY
            </p>

            <h2 className="text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
              Ideas have the power to transform communities.
            </h2>

            <p className="mt-6 text-base leading-8 text-gray-300 sm:text-lg">
              TEDxGombeStateUniversity is an independently organized TEDx
              event licensed by TED. We exist to create a platform where
              bold ideas, inspiring stories and meaningful conversations
              empower the next generation of leaders, innovators and
              changemakers.
            </p>

            <div className="mt-10 flex justify-start">
              <Button href="/about">Learn More</Button>
            </div>
          </div>

          <div className="order-1 overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-2 shadow-2xl shadow-black/40 transition duration-500 hover:scale-[1.01] lg:order-2">
            <Image
              src="/about-image-v2.jpg"
              alt="About TEDxGombeStateUniversity"
              width={1000}
              height={700}
              className="h-[260px] w-full rounded-[1.4rem] object-cover sm:h-[340px] md:h-[420px]"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}