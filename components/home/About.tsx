import Container from "../ui/Container";
import Section from "../ui/Section";
import Button from "../ui/Button";
import Image from "next/image";

export default function About() {
  return (
    <Section className="bg-black text-white">
      <Container>
        <div className="grid items-center gap-10 md:gap-14 lg:grid-cols-2 lg:gap-20">

          {/* Content */}
          <div className="order-2 max-w-xl lg:order-1">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-red-600">
              ABOUT TEDxGOMBESTATEUNIVERSITY
            </p>

            <h2 className="text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
              Ideas have the power to transform communities.
            </h2>

            <p className="mt-6 text-base leading-8 text-gray-400 sm:text-lg">
              TEDxGombeStateUniversity is an independently organized TEDx
              event licensed by TED. We exist to create a platform where
              bold ideas, inspiring stories and meaningful conversations
              empower the next generation of leaders, innovators and
              changemakers.
            </p>

            <div className="mt-10 flex justify-start">
                <Button>
                   Learn More
                </Button>
            </div>
          </div>

          <div className="order-1 overflow-hidden rounded-3xl border border-white/10 shadow-2xl lg:order-2">
  <Image
  src="/about-image-v2.jpg"
  alt="About TEDxGombeStateUniversity"
  width={1000}
  height={700}
  className="h-[260px] w-full object-cover sm:h-[340px] md:h-[420px]"
/>
</div>

        </div>
<div className="order-1 overflow-hidden rounded-3xl border border-white/10 shadow-2xl transition duration-500 hover:scale-[1.02] lg:order-2"></div>

      </Container>
    </Section>
  );
}