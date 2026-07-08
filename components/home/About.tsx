"use client";

import FadeIn from "../animations/FadeIn";

export default function About() {
  return (
    <FadeIn>
      <section className="bg-white text-black py-24">
        <div className="mx-auto max-w-7xl px-6">

          <p className="text-red-600 font-semibold uppercase tracking-[0.25em]">
            About TEDxGombeStateUniversity
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            Ideas Worth Spreading.
            <br />
            A Community Worth Building.
          </h2>

          <p className="mt-8 max-w-4xl text-lg leading-8 text-gray-700">
            TEDxGombeStateUniversity is an independently organized TEDx event
            dedicated to bringing together students, professionals,
            entrepreneurs, academics and community leaders through powerful
            ideas that inspire action and meaningful conversations.
          </p>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-gray-700">
            More than an annual event, TEDxGombeStateUniversity is building a
            lasting platform where curiosity, innovation and leadership can
            flourish within our university and beyond.
          </p>

        </div>
      </section>
    </FadeIn>
  );
}