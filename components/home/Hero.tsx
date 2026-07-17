"use client";
import FadeIn from "../animations/FadeIn";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <FadeIn>
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 pt-20 pb-16 text-center text-white sm:px-6 lg:px-8">
        {/* HeroBackground removed — already rendered once in page.tsx */}

        {/* Hero Content */}
        <div className="relative z-10 mx-auto w-full max-w-4xl px-6 pt-28 text-center">

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
      </section>
    </FadeIn>
  );
}