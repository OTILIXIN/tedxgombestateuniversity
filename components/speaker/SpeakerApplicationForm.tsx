"use client";

import { useState } from "react";

import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionHeader from "../ui/SectionHeader";

type Category = {
  id: string;
  title: string;
  overview: string;
  duration: string;
};

type SpeakerApplicationFormProps = {
  category: Category;
};

export default function SpeakerApplicationForm({
  category,
}: SpeakerApplicationFormProps) {

  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setSubmitting(true);

    await new Promise((resolve) =>
      setTimeout(resolve, 2000)
    );

    setSubmitting(false);

    alert("Application Submitted Successfully!");
  }

  return (
    <Section
      id="speaker-application"
      className="relative text-white"
    >
      <Container>

        <SectionHeader
          eyebrow="Application"
          title="Apply to Become a TEDx Speaker"
          description="Tell us about your idea and why it deserves a place on the TEDx stage."
        />

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-16 max-w-5xl space-y-12 rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur"
        >

          {/* Category */}

          <div className="rounded-2xl border border-red-600/20 bg-red-600/10 p-8">

            <p className="text-sm uppercase tracking-[0.3em] text-gray-300">
              Applying As
            </p>

            <h2 className="mt-3 text-3xl font-bold text-red-500">
              {category.title}
            </h2>

            <p className="mt-4 text-gray-300">
              {category.overview}
            </p>

          </div>

          {/* Personal */}

          <div>

            <h3 className="mb-8 text-2xl font-bold">
              Personal Information
            </h3>

            <div className="grid gap-8 md:grid-cols-2">

              <input
                required
                placeholder="Full Name"
                className="rounded-xl border border-white/10 bg-black/40 px-5 py-4"
              />

              <input
                required
                type="email"
                placeholder="Email Address"
                className="rounded-xl border border-white/10 bg-black/40 px-5 py-4"
              />

              <input
                required
                placeholder="Phone Number"
                className="rounded-xl border border-white/10 bg-black/40 px-5 py-4"
              />

              <input
                placeholder="Occupation"
                className="rounded-xl border border-white/10 bg-black/40 px-5 py-4"
              />

            </div>

          </div>

          {/* Talk */}

          <div>

            <h3 className="mb-8 text-2xl font-bold">
              Your TEDx Talk
            </h3>

            <div className="space-y-8">

              <input
                required
                placeholder="Proposed Talk Title"
                className="w-full rounded-xl border border-white/10 bg-black/40 px-5 py-4"
              />

              <textarea
                required
                rows={6}
                placeholder="Describe your idea worth spreading..."
                className="w-full rounded-xl border border-white/10 bg-black/40 px-5 py-4"
              />

              <textarea
                required
                rows={5}
                placeholder="Why are you the right person to give this talk?"
                className="w-full rounded-xl border border-white/10 bg-black/40 px-5 py-4"
              />

            </div>

          </div>

          {/* Experience */}

          <div>

            <h3 className="mb-8 text-2xl font-bold">
              Speaking Experience
            </h3>

            <textarea
              rows={5}
              placeholder="Tell us about your previous speaking experience (Optional)"
              className="w-full rounded-xl border border-white/10 bg-black/40 px-5 py-4"
            />

          </div>

          {/* Links */}

          <div>

            <h3 className="mb-8 text-2xl font-bold">
              Portfolio & Links
            </h3>

            <div className="grid gap-8">

              <input
                placeholder="LinkedIn"
                className="rounded-xl border border-white/10 bg-black/40 px-5 py-4"
              />

              <input
                placeholder="Website"
                className="rounded-xl border border-white/10 bg-black/40 px-5 py-4"
              />

              <input
                placeholder="Previous Talk / YouTube Link"
                className="rounded-xl border border-white/10 bg-black/40 px-5 py-4"
              />

            </div>

          </div>

          {/* Bio */}

          <div>

            <h3 className="mb-8 text-2xl font-bold">
              Short Biography
            </h3>

            <textarea
              required
              rows={5}
              placeholder="Tell us about yourself..."
              className="w-full rounded-xl border border-white/10 bg-black/40 px-5 py-4"
            />

          </div>

          {/* Agreement */}

          <label className="flex items-start gap-4">

            <input
              required
              type="checkbox"
              className="mt-1"
            />

            <span className="text-gray-300">

              I confirm that this submission is my original work and
              I understand that submitting this application does not
              guarantee selection as a TEDx speaker.

            </span>

          </label>

          <button
            type="submit"
            disabled={submitting}
            className="w-full rounded-full bg-red-600 py-5 text-lg font-semibold transition hover:bg-red-700 disabled:opacity-60"
          >
            {submitting
              ? "Submitting..."
              : "Submit Speaker Application"}
          </button>

        </form>

      </Container>

    </Section>
  );
}