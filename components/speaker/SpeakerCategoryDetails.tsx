"use client";

import Container from "../ui/Container";
import Section from "../ui/Section";

type Category = {
  id: string;
  title: string;
  overview: string;
  idealFor: string[];
  duration: string;
  status: string;
};

type SpeakerCategoryDetailsProps = {
  category: Category;
};

export default function SpeakerCategoryDetails({
  category,
}: SpeakerCategoryDetailsProps) {
  return (
    <Section
      id="speaker-details"
      className="relative text-white"
    >
      <Container>

        <div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur">

          {/* Header */}

          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

            <div>

              <span
                className={`rounded-full px-4 py-2 text-sm font-semibold ${
                    category.status === "Open"
                    ? "bg-green-500/10 text-green-400"
                    : category.status === "Coming Soon"
                    ? "bg-yellow-500/10 text-yellow-400"
                    : "bg-red-500/10 text-red-400"
                }`}
                >
                {category.status}
                </span>

              <h2 className="mt-6 text-5xl font-black">
                {category.title}
              </h2>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-300">
                {category.overview}
              </p>

            </div>

            <div className="rounded-2xl border border-red-600/20 bg-red-600/10 px-8 py-6">

              <p className="text-sm uppercase tracking-[0.3em] text-gray-300">
                Talk Duration
              </p>

              <h3 className="mt-3 text-3xl font-bold text-red-500">
                {category.duration}
              </h3>

            </div>

          </div>

          {/* Content */}

          <div className="mt-16 grid gap-10 lg:grid-cols-2">

            {/* Ideal For */}

            <div className="rounded-2xl border border-white/10 bg-black/30 p-8">

              <h3 className="text-2xl font-bold">
                Who Should Apply?
              </h3>

              <div className="mt-8 space-y-5">

                {category.idealFor.map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-4"
                  >

                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-600 font-bold">
                      ✓
                    </div>

                    <span className="text-lg">
                      {item}
                    </span>

                  </div>

                ))}

              </div>

            </div>

            {/* What We're Looking For */}

            <div className="rounded-2xl border border-white/10 bg-black/30 p-8">

              <h3 className="text-2xl font-bold">
                What We&lsquo;re Looking For
              </h3>

              <div className="mt-8 space-y-5">

                {[
                  "An original idea worth spreading",
                  "Clear evidence or personal insight",
                  "Strong storytelling ability",
                  "Authenticity and credibility",
                  "Potential for meaningful impact",
                  "A message that aligns with the TEDx spirit",
                ].map((item) => (

                  <div
                    key={item}
                    className="flex items-start gap-4"
                  >

                    <div className="mt-2 h-2.5 w-2.5 rounded-full bg-red-500" />

                    <p className="text-gray-300">
                      {item}
                    </p>

                  </div>

                ))}

              </div>

            </div>

          </div>

          {/* CTA */}

          <div className="mt-16 rounded-3xl border border-red-600/20 bg-gradient-to-r from-red-600/10 to-transparent p-8 text-center">

            <h3 className="text-3xl font-bold">
              Ready to share your idea?
            </h3>

            <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-300">
              If this category best represents your experience and your idea,
              continue to the application form and tell us your story.
            </p>

            <button
              onClick={() =>
                document.getElementById("speaker-application")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                })
              }
              className="mt-10 rounded-full bg-red-600 px-8 py-4 text-lg font-semibold transition hover:bg-red-700"
            >
              Apply as {category.title}
            </button>

          </div>

        </div>

      </Container>
    </Section>
  );
}