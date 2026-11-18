import Image from "next/image";
import Container from "../ui/Container";
import Section from "../ui/Section";

export default function VCMessage() {
  return (
    <Section className="relative overflow-hidden text-white border-t border-white/10">

      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
       <div className="absolute right-0 top-1/2 h-[500px] w-[500px] sm:h-[650px] sm:w-[650px] lg:h-[800px] lg:w-[800px] -translate-y-1/2 rounded-full bg-red-400/10 blur-[230px]" />
      </div>

      <Container>

        <div className="relative z-10 grid items-center gap-8 sm:gap-10 lg:min-h-[760px] lg:grid-cols-2 lg:gap-20">

          {/* LEFT */}
          <div className="order-2 relative z-20 max-w-xl lg:order-1">

            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.35em] text-red-500">
              Message from the Vice-Chancellor
            </p>

            <h2 className="mb-6 text-3xl font-black leading-tight tracking-tight sm:text-4xl md:text-5xl">
              Building a university where ideas shape the future.
            </h2>

            <blockquote className="max-w-xl text-base leading-8 text-gray-300 sm:text-lg md:text-xl md:leading-9">
              &ldquo;Universities are not merely centres of learning; they are
              incubators of ideas that shape societies. TEDxGombeStateUniversity
              reflects our commitment to innovation, leadership and meaningful
              conversations that inspire positive change.&ldquo;
            </blockquote>

            <div className="mt-10">

              <h3 className="text-2xl font-extrabold text-white">
                Prof. Sani Ahmed Yauta
              </h3>

              <p className="mt-2 text-sm uppercase tracking-wider text-gray-300">
                Vice-Chancellor<br />
                Gombe State University
              </p>

            </div>

          </div>

          {/* RIGHT */}
          <div className="order-1 relative h-[320px] overflow-hidden rounded-3xl sm:h-[500px] md:h-[620px] lg:order-2 lg:h-[800px] lg:rounded-none">

            {/* Left Fade */}
<div className="absolute inset-y-0 left-0 z-10 w-40 bg-gradient-to-r from-black via-black/80 to-transparent" />

{/* Right Fade */}
<div className="absolute inset-y-0 right-0 z-10 w-40 bg-gradient-to-l from-black via-black/80 to-transparent" />

{/* Bottom Fade */}
<div className="absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-t from-black to-transparent" />

            <Image
              src="/vc3.png"
              alt="Vice-Chancellor"
              fill
              priority
              className="object-cover object-center"
            />

          </div>

        </div>

      </Container>

    </Section>
  );
}