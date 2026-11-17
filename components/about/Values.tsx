"use client";

import { motion } from "framer-motion";
import {
  Lightbulb,
  Users,
  Compass,
  Heart,
  Rocket,
  MessageCircle,
} from "lucide-react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

const values = [
  {
    icon: Lightbulb,
    title: "Curiosity",
    description:
      "We stay curious, ask better questions, and remain open to discovering new possibilities.",
  },
  {
    icon: Users,
    title: "Inclusivity",
    description:
      "We value diverse voices, backgrounds, experiences, and perspectives.",
  },
  {
    icon: Compass,
    title: "Integrity",
    description:
      "We approach our work with honesty, responsibility, and respect for the trust placed in us.",
  },
  {
    icon: Heart,
    title: "Community",
    description:
      "We believe meaningful ideas grow stronger when people come together to share and support them.",
  },
  {
    icon: Rocket,
    title: "Impact",
    description:
      "We seek ideas that can move beyond the stage and contribute to meaningful change.",
  },
  {
    icon: MessageCircle,
    title: "Open Dialogue",
    description:
      "We encourage thoughtful conversations where people can challenge ideas while respecting one another.",
  },
];

export default function Values() {
  return (
    <Section id="our-values">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            eyebrow="Our Values"
            title="What guides us."
            description="The principles behind how we create experiences, engage our community, and bring ideas to the TEDxGombeStateUniversity stage."
          />
        </motion.div>

        <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <motion.article
                key={value.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-red-500/30 hover:bg-white/[0.06] sm:p-7"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-500/10 text-red-500 transition-transform duration-300 group-hover:scale-105">
                    <Icon size={21} strokeWidth={2} />
                  </div>

                  <span className="text-xs font-medium text-gray-600">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-semibold tracking-tight text-white">
                  {value.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-400 sm:text-base">
                  {value.description}
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