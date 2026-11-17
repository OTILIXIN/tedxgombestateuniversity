"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Vision() {
  return (
    <Section id="our-vision" className="pt-6 sm:pt-8 lg:pt-10">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            eyebrow="Our Vision"
            title="A community where ideas create possibilities."
            description="We envision a university community where curiosity is encouraged, diverse perspectives are valued, and bold ideas have the opportunity to shape people, communities, and the future."
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative mx-auto mt-10 max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl sm:mt-12 sm:rounded-3xl sm:p-10 lg:p-14"
        >
          {/* Decorative glow */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-red-500/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -left-20 h-64 w-64 rounded-full bg-red-500/5 blur-3xl" />

          <div className="relative">
            <div className="flex items-start justify-between gap-6">
              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-red-500">
                Looking Forward
              </span>

              <div className="hidden h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gray-500 sm:flex">
                <ArrowUpRight size={18} />
              </div>
            </div>

            <blockquote className="mt-8 max-w-4xl text-2xl font-medium leading-relaxed tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl lg:leading-tight">
              “We want to cultivate a culture where{" "}
              <span className="text-red-500">ideas are heard</span>,{" "}
              perspectives are challenged, and people are inspired to make a
              difference.”
            </blockquote>

            <div className="mt-8 flex items-center gap-3">
              <div className="h-px w-10 bg-red-500" />
              <span className="text-sm text-gray-500">
                TEDxGombeStateUniversity
              </span>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}