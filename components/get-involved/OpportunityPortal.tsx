"use client";

import { useState } from "react";

import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionHeader from "../ui/SectionHeader";

import { opportunities } from "./data";

export default function OpportunityPortal() {
  const [selected, setSelected] = useState(
    opportunities.volunteer.options[0]
  );

  return (
    <Section className="relative text-white">
      <Container>

        <SectionHeader
          eyebrow="Volunteer Portal"
          title="Explore Volunteer Opportunities"
          description="Select a department below to learn more before submitting your application."
        />

        <div className="mx-auto max-w-5xl">

          {/* Dropdown */}

          <select
            className="mb-10 w-full rounded-2xl border border-white/10 bg-neutral-900 px-5 py-4 text-lg outline-none focus:border-red-600"
            value={selected.id}
            onChange={(e) => {
              const option =
                opportunities.volunteer.options.find(
                  (o) => o.id === e.target.value
                );

              if (option) setSelected(option);
            }}
          >
            {opportunities.volunteer.options.map((option) => (
              <option
                key={option.id}
                value={option.id}
              >
                {option.name}
              </option>
            ))}
          </select>

          {/* Information Card */}

          <div className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur">

            <h2 className="text-3xl font-bold">
              {selected.name}
            </h2>

            <p className="mt-3 text-gray-300">
              {selected.overview}
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-4">

              <Info
                title="Lead"
                value={selected.lead}
              />

              <Info
                title="Status"
                value={selected.status}
              />

              <Info
                title="Team Size"
                value={`${selected.teamSize ?? "-"} Members`}
              />

              <Info
                title="Commitment"
                value={selected.commitment}
              />

            </div>

            {/* Responsibilities */}

            <div className="mt-12">

              <h3 className="text-xl font-semibold">
                Responsibilities
              </h3>

              <ul className="mt-5 space-y-3 text-gray-300">

                {selected.responsibilities.map((item) => (
                  <li key={item}>
                    • {item}
                  </li>
                ))}

              </ul>

            </div>

            {/* Requirements */}

            <div className="mt-12">

              <h3 className="text-xl font-semibold">
                Requirements
              </h3>

              <ul className="mt-5 space-y-3 text-gray-300">

                {selected.requirements.map((item) => (
                  <li key={item}>
                    • {item}
                  </li>
                ))}

              </ul>

            </div>

            {/* Skills */}

            <div className="mt-12">

              <h3 className="text-xl font-semibold">
                Skills You&lsquo;ll Gain
              </h3>

              <ul className="mt-5 space-y-3 text-gray-300">

                {selected.skills.map((item) => (
                  <li key={item}>
                    • {item}
                  </li>
                ))}

              </ul>

            </div>

            {/* Benefits */}

            <div className="mt-12">

              <h3 className="text-xl font-semibold">
                Benefits
              </h3>

              <ul className="mt-5 space-y-3 text-gray-300">

                {selected.benefits.map((item) => (
                  <li key={item}>
                    • {item}
                  </li>
                ))}

              </ul>

            </div>

            <div className="mt-12">

              <button className="rounded-xl bg-red-600 px-8 py-4 font-semibold transition hover:bg-red-700">
                Apply for {selected.name}
              </button>

            </div>

          </div>

        </div>

      </Container>
    </Section>
  );
}

type InfoProps = {
  title: string;
  value: string;
};

function Info({
  title,
  value,
}: InfoProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/40 p-5">

      <p className="text-xs uppercase tracking-widest text-gray-300">
        {title}
      </p>

      <p className="mt-3 font-semibold">
        {value}
      </p>

    </div>
  );
}