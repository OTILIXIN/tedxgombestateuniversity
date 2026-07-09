"use client";

import FadeIn from "../animations/FadeIn";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <FadeIn>
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6 text-center text-white">
  {/* Background Glow */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute left-1/2 top-1/2 h-[900px] w-28 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-full bg-red-600/30 blur-[220px]" />

    <div className="absolute left-1/2 top-1/2 h-[900px] w-28 -translate-x-1/2 -translate-y-1/2 -rotate-45 rounded-full bg-red-600/30 blur-[220px]" />
  </div>

        {/* Background Glow */}
        <div className="absolute inset-0">
          <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-red-600/10 blur-[180px]" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center pt-28">

          <p className="mb-6 uppercase tracking-[0.35em] text-red-600 font-semibold text-sm">
            TEDxGombe State University
          </p>

          <h1 className="text-5xl font-extrabold leading-[0.9] md:text-6xl lg:text-7xl">
            Ideas Worth
            <br />
            <span className="text-red-600">Spreading</span>
          </h1>

          <p className="mx-auto mt-10 max-w-3xl text-lg leading-9 text-gray-300 md:text-xl">
            Welcome to the official website of TEDxGombeStateUniversity,
            an independently organized TEDx event licensed by TED.
            Discover our journey, speakers, partners, stories and future editions
            as we continue building a community inspired by ideas worth spreading.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">
            <Button>
              Stay Updated
            </Button>

            <Button variant="secondary">
              Explore TEDxGSU
            </Button>
          </div>

        </div>

      </section>
    </FadeIn>
  );
}