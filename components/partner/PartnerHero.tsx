"use client";

import Container from "../ui/Container";
import Section from "../ui/Section";

export default function PartnerHero() {
  return (
    <Section className="relative flex min-h-screen items-center justify-center text-white">


      {/* Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/15 blur-[180px]" />
      </div>

      <Container>

        <div className="relative z-10 mx-auto max-w-5xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-red-500">
            TEDxGombeStateUniversity
          </p>

          <h1 className="mt-8 text-5xl font-black leading-tight sm:text-6xl lg:text-7xl">
            Become
            <span className="block text-red-600">
              A Partner
            </span>
          </h1>

          <p className="mx-auto mt-10 max-w-4xl text-lg leading-9 text-gray-300">
            Join us in building a platform where ideas inspire innovation,
            leadership, entrepreneurship and meaningful social impact.
            Together, we can empower communities and amplify ideas worth spreading.
          </p>

          <div className="mt-14 flex flex-col justify-center gap-5 sm:flex-row">

            <button
              onClick={() =>
                document.getElementById("opportunities")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="rounded-full bg-red-600 px-8 py-4 text-lg font-semibold transition hover:bg-red-700"
            >
              Explore Opportunities
            </button>

            <button
              onClick={() =>
                document.getElementById("application")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="rounded-full border border-white/20 px-8 py-4 text-lg font-semibold transition hover:border-red-600 hover:text-red-500"
            >
              Partner With Us
            </button>

          </div>

        </div>

      </Container>

    </Section>
  );
}