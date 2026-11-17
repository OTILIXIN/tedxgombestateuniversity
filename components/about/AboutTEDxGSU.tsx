"use client";

import { motion } from "framer-motion";
import { ArrowRight, Lightbulb, Users, Mic2 } from "lucide-react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

const highlights = [
  {
    icon: Lightbulb,
    title: "Ideas",
    description:
      "We create space for ideas that challenge assumptions, encourage curiosity, and open new possibilities.",
  },
  {
    icon: Users,
    title: "People",
    description:
      "We bring together students, professionals, entrepreneurs, educators, and community leaders.",
  },
  {
    icon: Mic2,
    title: "Conversations",
    description:
      "We turn powerful ideas into meaningful conversations that can influence people and communities.",
  },
];

export default function AboutTEDxGSU() {
  return (
    <Section id="about-tedx-gsu">
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            eyebrow="Our Story"
            title="About TEDxGombeStateUniversity"
            description="TEDxGombeStateUniversity is a locally organized TEDx platform created to bring ideas, people, and conversations together within the Gombe State University community and beyond."
          />
        </motion.div>

        {/* Story */}
        <div className="mt-10 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch">
          {/* Main Story */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl sm:p-8 lg:p-10"
          >
            <p className="text-base leading-8 text-gray-300 sm:text-lg">
              TEDxGombeStateUniversity exists to create a platform where
              remarkable ideas can be discovered, shared, and explored. We
              believe that meaningful change often begins with a conversation
              and that universities have an important role to play in shaping
              those conversations.
            </p>

            <p className="mt-5 text-base leading-8 text-gray-400 sm:text-lg">
              Through independently organized TEDx events, we connect members
              of the university community with diverse voices and perspectives
              from across society. Our stage provides an opportunity for
              speakers to share experiences, insights, research, stories, and
              ideas that can inspire people to think differently.
            </p>

            <p className="mt-5 text-base leading-8 text-gray-400 sm:text-lg">
              Each edition is shaped by its own theme and context, allowing
              TEDxGombeStateUniversity to evolve with the people and
              communities it serves while remaining grounded in the spirit of
              TED&lsquo;s mission: Ideas Worth Spreading.
            </p>

            <a
              href="/editions"
              className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-red-500"
            >
              Explore our editions
              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </motion.div>

          {/* Side Statement */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative overflow-hidden rounded-2xl border border-red-500/20 bg-red-500/[0.06] p-6 sm:p-8 lg:p-10"
          >
            <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-red-500/10 blur-3xl" />

            <div className="relative">
              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-red-500">
                More than an event
              </span>

              <h3 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                A platform for ideas to move.
              </h3>

              <p className="mt-5 leading-7 text-gray-400">
                From the stage to the audience, TEDxGombeStateUniversity is
                about creating moments that continue long after an event ends.
              </p>

              <div className="mt-8 h-px w-16 bg-red-500" />

              <p className="mt-6 text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
                Ideas · People · Impact
              </p>
            </div>
          </motion.div>
        </div>

        {/* Highlights */}
        <div className="mt-10 grid gap-5 sm:mt-12 md:grid-cols-3 md:gap-6">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;

            return (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:border-red-500/30 hover:bg-white/[0.06] sm:p-7"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-500/10 text-red-500">
                  <Icon size={22} />
                </div>

                <h3 className="mt-5 text-lg font-semibold text-white">
                  {highlight.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-400 sm:text-base">
                  {highlight.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}