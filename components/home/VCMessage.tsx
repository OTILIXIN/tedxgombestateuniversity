import Image from "next/image";
import Container from "../ui/Container";
import Section from "../ui/Section";

export default function VCMessage() {
  return (
    <Section className="relative overflow-hidden bg-black text-white border-t border-white/10">

      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
       <div className="absolute right-0 top-1/2 h-[800px] w-[800px] -translate-y-1/2 rounded-full bg-red-400/10 blur-[230px]" />
      </div>

      <Container>

        <div className="relative z-10 grid min-h-[700px] items-center lg:grid-cols-2">

          {/* LEFT */}
          <div className="relative z-20 max-w-xl">

            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.35em] text-red-500">
              Message from the Vice-Chancellor
            </p>

            <h2 className="mb-8 text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-tight">
              Building a university where ideas shape the future.
            </h2>

            <blockquote className="max-w-xl text-lg md:text-xl leading-9 text-gray-300">
              &ldquo;Universities are not merely centres of learning; they are
              incubators of ideas that shape societies. TEDxGombeStateUniversity
              reflects our commitment to innovation, leadership and meaningful
              conversations that inspire positive change.&ldquo;
            </blockquote>

            <div className="mt-10">

              <h3 className="text-2xl font-bold">
                Prof. Sani Ahmed Yauta
              </h3>

              <p className="mt-2 text-gray-400">
                Vice-Chancellor<br />
                Gombe State University
              </p>

            </div>

            <button className="mt-10 rounded-xl border border-red-600 px-8 py-4 font-semibold transition hover:bg-red-600">
              Read Full Message
            </button>

          </div>

          {/* RIGHT */}
          <div className="relative h-[740px] lg:h-[800px]">

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