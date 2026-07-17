"use client";

import Container from "../ui/Container";
import Section from "../ui/Section";

export default function AboutHero() {
  return (
    <Section className="relative flex min-h-screen items-center justify-center text-white">

      {/* Cinematic Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/55 to-black/75" />

      {/* Ambient Glow */}
      <div className="pointer-events-none absolute inset-0">

        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/15 blur-[180px]" />

      </div>

      <Container>

        <div className="relative z-10 mx-auto max-w-5xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-red-500">
            About TEDxGombeStateUniversity
          </p>

          <h1 className="mt-8 text-5xl font-black leading-tight sm:text-6xl lg:text-7xl">
            Discover the Story Behind
            <span className="mt-3 block text-red-600">
              TEDxGombeStateUniversity
            </span>
          </h1>

          <p className="mx-auto mt-10 max-w-4xl text-lg leading-9 text-gray-300">
            TEDxGombeStateUniversity is more than an event it&lsquo;s a growing
            community of thinkers, innovators, leaders, and changemakers
            committed to inspiring meaningful conversations and empowering
            people through ideas worth spreading.
          </p>

          <div className="mt-14 flex flex-col justify-center gap-5 sm:flex-row">

            <button
              onClick={() =>
                document
                  .getElementById("what-is-ted")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="rounded-full bg-red-600 px-8 py-4 text-lg font-semibold transition hover:bg-red-700"
            >
              Discover TED
            </button>

            <button
              onClick={() =>
                document
                  .getElementById("our-editions")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="rounded-full border border-white/20 px-8 py-4 text-lg font-semibold transition hover:border-red-600 hover:text-red-500"
            >
              Explore Our Journey
            </button>

          </div>

        </div>

      </Container>

    </Section>
  );
}