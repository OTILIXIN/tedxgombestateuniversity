"use client";

import FadeIn from "../animations/FadeIn";

export default function Hero() {
  return (
    <FadeIn>
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center bg-black text-white">

        <p className="text-red-500 font-semibold uppercase tracking-[0.3em] mb-4">
          TEDxGombeStateUniversity 2027
        </p>

        <h1 className="text-6xl md:text-8xl font-extrabold leading-tight">
          Unboxed <span className="text-red-600">Minds</span>
        </h1>

        <p className="mt-8 text-xl text-gray-300 max-w-3xl mx-auto leading-8">
          Ideas can transform communities.
          Join Northern Nigeria&lsquo;s brightest thinkers, innovators,
          entrepreneurs and changemakers for a day of powerful TEDx talks,
          meaningful conversations and unforgettable experiences.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-5">

          <button className="rounded-xl bg-red-600 px-8 py-4 font-semibold transition hover:bg-red-700">
            Register Now
          </button>

          <button className="rounded-xl border border-white px-8 py-4 transition hover:bg-white hover:text-black">
            Watch 2026 Highlights
          </button>

        </div>

      </section>
    </FadeIn>
  );
}