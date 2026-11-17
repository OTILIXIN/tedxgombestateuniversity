"use client";

import Container from "../ui/Container";
import Section from "../ui/Section";

export default function SpeakerHero() {
  return (
    <Section className="py-0 relative flex min-h-screen items-center overflow-hidden text-white">

      {/* Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/15 blur-[180px]" />
      </div>

      <Container>

        <div className="relative z-10 mx-auto max-w-4xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-red-500">
            TEDxGombeStateUniversity
          </p>

          <h1 className="mt-6 text-5xl font-black leading-tight sm:text-6xl lg:text-7xl">
            Share
            <span className="block text-red-600">
              An Idea Worth Spreading
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-300">
            TEDx is more than a stage—it is a platform for ideas that inspire,
            challenge assumptions, and spark meaningful change. If you have an
            original idea that can influence the future, we&lsquo;d love to hear it.
          </p>

          <div className="mt-12 flex flex-col justify-center gap-5 sm:flex-row">

            <button
              onClick={() =>
                document.getElementById("categories")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                })
              }
              className="rounded-full bg-red-600 px-8 py-4 text-lg font-semibold transition hover:bg-red-700"
            >
              Explore Categories
            </button>

            <button
              onClick={() =>
                document.getElementById("why-speak")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                })
              }
              className="rounded-full border border-white/20 px-8 py-4 text-lg font-semibold transition hover:border-red-600 hover:text-red-500"
            >
              Why Speak?
            </button>

          </div>

        </div>

      </Container>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">

        <div className="h-14 w-7 rounded-full border border-white/30">

          <div className="mx-auto mt-2 h-3 w-3 animate-bounce rounded-full bg-red-600" />

        </div>

      </div>

    </Section>
  );
}