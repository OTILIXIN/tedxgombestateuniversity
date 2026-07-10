"use client";

import FadeIn from "../animations/FadeIn";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <FadeIn>
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-5 pt-20 pb-16 text-center text-white sm:px-6 lg:px-8">
  {/* Background Glow */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute left-1/2 top-1/2 h-[650px] w-20 sm:h-[800px] sm:w-24 lg:h-[900px] lg:w-28 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-full bg-red-600/30 blur-[180px] lg:blur-[220px]" />

    <div className="absolute left-1/2 top-1/2 h-[650px] w-20 sm:h-[800px] sm:w-24 lg:h-[900px] lg:w-28 -translate-x-1/2 -translate-y-1/2 -rotate-45 rounded-full bg-red-600/30 blur-[180px] lg:blur-[220px]" />
  </div>

        {/* Background Glow */}
        <div className="absolute inset-0">
          <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-red-600/10 blur-[180px]" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center pt-16 sm:pt-20 lg:pt-28">

          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-red-600 sm:text-sm">
            TEDxGombe State University
          </p>

          <h1 className="text-4xl font-black leading-[0.95] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            Ideas Worth
            <br />
            <span className="text-red-600">Spreading</span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl px-2 text-base leading-8 text-gray-300 sm:text-lg md:mt-10 md:text-xl md:leading-9">
            Welcome to the official website of TEDxGombeStateUniversity,
            an independently organized TEDx event licensed by TED.
            Discover our journey, speakers, partners, stories and future editions
            as we continue building a community inspired by ideas worth spreading.
          </p>

          <div className="mt-10 flex w-full flex-col gap-4 sm:mt-12 sm:w-auto sm:flex-row sm:justify-center">
            <Button>
              Stay Updated
            </Button>

            <Button variant="secondary">
              Explore TEDxGSU
            </Button>
          </div>

        </div>
        <div className="absolute bottom-0 left-0 h-48 w-full bg-gradient-to-t from-black via-black/90 to-transparent" />
      </section>
    </FadeIn>
  );
}