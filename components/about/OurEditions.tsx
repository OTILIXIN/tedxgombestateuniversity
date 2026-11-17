"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, CalendarDays } from "lucide-react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

const editions = [
  {
    year: "2026",
    edition: "Edition 01",
    theme: "Unboxed Minds",
    status: "Past Edition",
    description:
      "The inaugural TEDxGombeStateUniversity experience, centered on challenging limitations, embracing new perspectives, and exploring the possibilities that emerge when minds think beyond conventional boundaries.",
    href: "#",
  },
];

export default function OurEditions() {
  return (
    <Section id="our-editions">
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            eyebrow="Our Editions"
            title="Every edition. A new conversation."
            description="TEDxGombeStateUniversity evolves through editions, with each theme creating a new space for ideas, perspectives, and conversations that matter."
          />
        </motion.div>

        {/* Editions */}
        <div className="mt-10 space-y-5 sm:mt-12">
          {editions.map((edition, index) => (
            <motion.article
              key={`${edition.year}-${edition.edition}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition-all duration-300 hover:border-red-500/30 hover:bg-white/[0.06] sm:p-8 lg:p-10"
            >
              <div className="grid gap-8 lg:grid-cols-[180px_1fr_auto] lg:items-center">
                {/* Year */}
                <div>
                  <span className="text-sm font-semibold uppercase tracking-[0.25em] text-red-500">
                    {edition.edition}
                  </span>

                  <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                    {edition.year}
                  </p>
                </div>

                {/* Content */}
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-gray-400">
                      <CalendarDays size={13} />
                      {edition.status}
                    </span>
                  </div>

                  <h3 className="mt-5 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                    {edition.theme}
                  </h3>

                  <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
                    {edition.description}
                  </p>
                </div>

                {/* Action */}
                <div className="lg:justify-self-end">
                  <a
                    href={edition.href}
                    className="group/link inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-red-500"
                  >
                    Explore edition
                    <ArrowUpRight
                      size={17}
                      className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                    />
                  </a>
                </div>
              </div>

              {/* Accent */}
              <div className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-red-500 transition-transform duration-500 group-hover:scale-x-100" />
            </motion.article>
          ))}
        </div>

        {/* Future editions */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-gray-500">
            New editions will bring new themes, new voices, and new ideas.
          </p>
        </motion.div>
      </Container>
    </Section>
  );
}