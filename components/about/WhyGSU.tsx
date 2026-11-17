"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Users,
  Lightbulb,
  Building2,
} from "lucide-react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

const reasons = [
  {
    icon: GraduationCap,
    title: "A Community of Learners",
    description:
      "Universities are places where people question what they know, explore new ideas, and prepare to shape the future.",
  },
  {
    icon: Users,
    title: "Diverse Perspectives",
    description:
      "GSU brings together students, academics, professionals, and people from different disciplines and backgrounds.",
  },
  {
    icon: Lightbulb,
    title: "Ideas in Motion",
    description:
      "From classrooms and research to entrepreneurship and student initiatives, ideas are constantly being developed and tested.",
  },
  {
    icon: Building2,
    title: "Beyond the Campus",
    description:
      "The conversations that begin at Gombe State University can extend into the wider Gombe community and beyond.",
  },
];

export default function WhyGSU() {
  return (
    <Section id="why-gombe-state-university">
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            eyebrow="Why Gombe State University?"
            title="Where ideas meet opportunity."
            description="Gombe State University provides an environment where learning, creativity, research, and ambition come together. It is a natural home for conversations that can challenge perspectives and inspire the next generation."
          />
        </motion.div>

        {/* Main Statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative mt-10 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl sm:mt-12 sm:rounded-3xl sm:p-10 lg:p-12"
        >
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-red-500/10 blur-3xl" />

          <div className="relative max-w-4xl">
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-red-500">
              The opportunity
            </span>

            <p className="mt-5 text-xl font-medium leading-relaxed tracking-tight text-white sm:text-2xl md:text-3xl">
              We believe the university is more than a place to earn a degree.
              It is a place where{" "}
              <span className="text-red-500">ideas are formed</span>,{" "}
              <span className="text-red-500">perspectives evolve</span>, and
              people discover what they can contribute to the world.
            </p>
          </div>
        </motion.div>

        {/* Reasons */}
        <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <motion.article
                key={reason.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-red-500/30 hover:bg-white/[0.06]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-500/10 text-red-500 transition-transform duration-300 group-hover:scale-105">
                  <Icon size={21} strokeWidth={2} />
                </div>

                <h3 className="mt-5 text-lg font-semibold tracking-tight text-white">
                  {reason.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-400">
                  {reason.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}