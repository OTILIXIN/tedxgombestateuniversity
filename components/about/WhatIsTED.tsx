"use client";

import { motion } from "framer-motion";
import { Lightbulb, Globe2, MessageSquareText, ArrowUpRight } from "lucide-react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

const features = [
  {
    icon: Lightbulb,
    title: "Ideas Worth Spreading",
    description:
      "TED brings together remarkable ideas from people across different fields, encouraging us to think differently and see the world from new perspectives.",
  },
  {
    icon: Globe2,
    title: "A Global Community",
    description:
      "TED connects millions of people around the world through talks, conversations, and ideas that cross boundaries, cultures, and disciplines.",
  },
  {
    icon: MessageSquareText,
    title: "Ideas That Inspire Action",
    description:
      "TED creates a space where powerful ideas can spark conversations, challenge assumptions, and inspire meaningful change.",
  },
];

export default function WhatIsTED() {
  return (
    <Section id="what-is-ted">
      <Container>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            eyebrow="The Beginning"
            title="What is TED?"
            description="TED is a global platform devoted to Ideas Worth Spreading, bringing together people from different fields to share ideas that can inspire, inform, and create meaningful change."
          />

          {/* Learn More */}
          <div className="mt-6 flex justify-center">
            <a
              href="https://www.ted.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-5 py-2.5 text-sm font-medium text-white backdrop-blur-xl transition-all duration-300 hover:border-red-500/40 hover:bg-red-500/10"
            >
              Learn more about TED
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </motion.div>

        {/* Feature Cards */}
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
                {/* Icon */}
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-red-500 transition-transform duration-300 group-hover:scale-105">
                  <Icon size={24} strokeWidth={2} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold tracking-tight text-white">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-7 text-gray-400 sm:text-base">
                  {feature.description}
                </p>

                {/* Hover Accent */}
                <div className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-red-500 transition-transform duration-300 group-hover:scale-x-100" />
              </motion.article>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}