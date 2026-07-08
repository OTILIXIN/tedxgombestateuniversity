"use client";

import FadeIn from "../animations/FadeIn";

export default function Theme() {
  return (
    <FadeIn>
      <section className="bg-[#111111] text-white py-28">
        <div className="mx-auto max-w-7xl px-6">

          <p className="uppercase tracking-[0.3em] text-red-600 font-semibold">
            2027 Theme
          </p>

          <h2 className="mt-6 text-6xl md:text-8xl font-black">
            Unboxed
            <span className="block text-red-600">
              Minds
            </span>
          </h2>

          <p className="mt-10 max-w-3xl text-xl leading-9 text-gray-300">
            &ldquo;Unboxed Minds&ldquo; is a call to challenge assumptions,
            embrace curiosity, and unlock new ways of thinking.
            It celebrates people who refuse to be limited by convention
            and choose instead to create, lead, and inspire.
          </p>

        </div>
      </section>
    </FadeIn>
  );
}