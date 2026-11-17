"use client";

import { motion } from "framer-motion";
import { Lightbulb, Mic2, Users } from "lucide-react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

const features = [
  {
    icon: Mic2,
    title: "Independently Organized",
    description:
      "TEDx events are independently organized under a free license granted by TED while following TED's global standards and values.",
  },
  {
    icon: Lightbulb,
    title: "Ideas Worth Spreading",
    description:
      "TEDx creates a platform where powerful ideas can inspire curiosity, challenge perspectives, and encourage meaningful action.",
  },
  {
    icon: Users,
    title: "Built for Community",
    description:
      "TEDx brings together students, innovators, entrepreneurs, educators, and leaders to spark conversations that matter.",
  },
];

export default function WhatIsTEDx() {
  return (
    <Section
      id="what-is-tedx"
      className="pt-6 sm:pt-8 lg:pt-10"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            eyebrow="The TEDx Program"
            title="What is TEDx?"
            description="TEDx is a program of local, independently organized events that bring people together to share ideas and create meaningful conversations within their communities."
          />
        </motion.div>

        <div className="mt-10 grid gap-5 sm:mt-12 md:grid-cols-3 md:gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.article
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-red-500/30 hover:bg-white/[0.07] sm:p-7"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-red-500 transition-transform duration-300 group-hover:scale-105">
                  <Icon size={24} strokeWidth={2} />
                </div>

                <h3 className="text-xl font-semibold tracking-tight text-white">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-400 sm:text-base">
                  {feature.description}
                </p>

                <div className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-red-500 transition-transform duration-300 group-hover:scale-x-100" />
              </motion.article>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}