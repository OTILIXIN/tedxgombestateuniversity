"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import Section from "../ui/Section";
import FadeIn from "../animations/FadeIn";

export default function WhatIsTED() {
  return (
    <Section
      id="what-is-ted"
      className="relative py-28 text-white lg:py-36"
    >
      <Container>

        <FadeIn>
          <div className="grid items-center gap-20 lg:grid-cols-2">

            {/* Left */}
            <div className="flex flex-col items-center text-center">

              <Image
                src="/about/ted-logo.png"
                alt="TED Logo"
                width={260}
                height={110}
                className="w-48 lg:w-64"
              />

            <h2 className="mt-6 text-lg font-medium tracking-wide text-gray-300">
                Ideas Worth Spreading
              </h2>

              <div className="mt-10 h-px w-24 bg-red-600" />

              <p className="mt-8 text-sm uppercase tracking-[0.4em] text-gray-300">
                Since 1984
              </p>

            </div>

            {/* Right */}
            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-red-500">
                Global Platform
              </p>

              <h2 className="mt-5 text-4xl font-black leading-tight lg:text-6xl">
                What is <span className="text-red-600">TED?</span>
              </h2>

              <p className="mt-8 text-lg leading-9 text-gray-300">
                TED is a nonprofit organization devoted to discovering,
                debating and spreading ideas that spark conversation,
                deepen understanding and drive meaningful change.
                Since 1984, TED has brought together the world&lsquo;s leading
                thinkers, innovators, artists, scientists and changemakers
                to share powerful short talks that inspire millions of
                people across the globe.
              </p>

              <blockquote className="mt-10 border-l-4 border-red-600 pl-6 italic text-gray-200">
                “Ideas change perspectives. Ideas inspire action.
                Ideas are worth spreading.”
              </blockquote>

              <Link
                href="https://www.ted.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-12 inline-flex rounded-full border border-red-600 px-8 py-4 font-semibold transition hover:bg-red-600"
              >
                Visit TED →
              </Link>

            </div>

          </div>
        </FadeIn>

      </Container>
    </Section>
  );
}