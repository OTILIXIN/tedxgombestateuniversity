"use client";

import Container from "../ui/Container";
import Section from "../ui/Section";

export default function VolunteerHero() {
  return (
    <Section className="py-0 relative flex min-h-screen items-center overflow-hidden text-white">

      {/* Red Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] md:h-[500px] md:w-[500px] lg:h-[700px] lg:w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/15 blur-[180px]" />
      </div>

      <Container>

        <div className="relative z-10 mx-auto max-w-4xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-red-500">
            TEDxGombeStateUniversity
          </p>

          <h1 className="mt-6 text-3xl font-black leading-tight sm:text-5xl lg:text-7xl">
            Volunteer
            <span className="block text-red-600">
              With Purpose
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-sm md:text-lg leading-8 text-gray-200">
            Every unforgettable TEDx event is powered by passionate people.
            Join our organizing team, grow your leadership, build meaningful
            connections, and help bring ideas worth spreading to life.
          </p>

          <div className="mt-12 flex flex-col justify-center gap-5 sm:flex-row">

        <button
  onClick={() => {
    const section = document.getElementById("departments");

    console.log(section);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }}
  className="rounded-full bg-red-600 px-6 md:px-8 py-3 md:py-4 text-sm md:text-lg font-semibold"
>
  Explore Departments
</button>
        <button
        onClick={() =>
            document.getElementById("why-volunteer")?.scrollIntoView({
            behavior: "smooth",
            block: "start",
            })
        }
        className="rounded-full border border-white/20 px-6 md:px-8 py-3 md:py-4 text-sm md:text-lg font-semibold transition hover:border-red-600 hover:text-red-500"
        >
        Why Volunteer?
        </button>

          </div>

        </div>

      </Container>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">

        <div className="flex flex-col items-center">

          <span className="mb-3 text-xs uppercase tracking-[0.3em] text-gray-400">
          </span>

          <div className="h-14 w-7 rounded-full border border-white/30">

            <div className="mx-auto mt-2 h-3 w-3 rounded-full bg-red-600 animate-bounce" />

          </div>

        </div>

      </div>

    </Section>
  );
}