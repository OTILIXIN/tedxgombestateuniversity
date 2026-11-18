"use client";
import FadeIn from "../animations/FadeIn";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <FadeIn>
      <section className="relative flex min-h-[92svh] items-center justify-center overflow-hidden px-4 pt-24 pb-12 text-center text-white sm:min-h-screen sm:px-6 sm:pb-16 lg:px-8">
        {/* HeroBackground removed — already rendered once in page.tsx */}

        {/* Hero Content */}
        <div className="relative z-10 mx-auto w-full max-w-4xl text-center">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-red-600 sm:text-sm">
            TEDxGombe State University
          </p>

          <h1 className="break-words text-[2.5rem] font-black leading-[0.95] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            Ideas Worth
            <br />
            <span className="text-red-600">Spreading</span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-base leading-7 text-gray-300 sm:px-2 sm:text-lg sm:leading-8 md:mt-10 md:text-xl md:leading-9">
            Welcome to the official website of TEDxGombeStateUniversity,
            an independently organized TEDx event licensed by TED.
            Discover our journey, speakers, partners, stories and future editions
            as we continue building a community inspired by ideas worth spreading.
          </p>

          <div className="mt-10 grid w-full gap-4 sm:mt-12 sm:w-auto sm:grid-flow-col sm:auto-cols-fr sm:justify-center">
            <Button href="#newsletter">Stay Updated</Button>

            <Button href="/about" variant="secondary">
              Explore TEDxGSU
            </Button>
          </div>
        </div>
      </section>
    </FadeIn>
  );
}