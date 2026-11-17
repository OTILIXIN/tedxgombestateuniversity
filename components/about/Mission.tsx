"use client";

import { motion } from "framer-motion";
import { Brain, Users, Sparkles } from "lucide-react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

const missionPoints = [
  {
    icon: Brain,
    title: "Expand Perspectives",
    description:
      "Expose our community to diverse ideas, experiences, and perspectives that encourage deeper thinking.",
  },
  {
    icon: Users,
    title: "Build Connections",
    description:
      "Create meaningful connections between students, professionals, innovators, educators, and leaders.",
  },
  {
    icon: Sparkles,
    title: "Inspire Action",
    description:
      "Turn inspiring ideas into conversations and actions that contribute to positive change.",
  },
];

export default function Mission() {
  return (
    <Section id="our-mission">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            eyebrow="Our Mission"
            title="Creating space for ideas that matter."
            description="Our mission is to bring people and ideas together in an environment where curiosity, dialogue, and meaningful action can thrive."
          />
        </motion.div>

        <div className="mt-10 grid gap-6 lg:mt-12 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-2xl border border-red-500/20 bg-red-500/[0.06] p-7 sm:p-9 lg:p-10"
          >
            <div className="absolute -bottom-20 -right-20 h-48 w-48 rounded-full bg-red-500/10 blur-3xl" />

            <div className="relative">
              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-red-500">
                What drives us
              </span>

              <p className="mt-6 text-2xl font-medium leading-relaxed tracking-tight text-white sm:text-3xl">
                We exist to create a platform where{" "}
                <span className="text-red-500">ideas meet people</span> and
                conversations become catalysts for change.
              </p>

              <div className="mt-8 h-px w-12 bg-red-500" />
            </div>
          </motion.div>

          {/* Mission Points */}
          <div className="grid gap-4">
            {missionPoints.map((point, index) => {
              const Icon = point.icon;

              return (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="group flex gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl transition-all duration-300 hover:border-red-500/30 hover:bg-white/[0.06] sm:p-6"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-500/10 text-red-500 transition-transform duration-300 group-hover:scale-105">
                    <Icon size={21} />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {point.title}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-gray-400 sm:text-base">
                      {point.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}