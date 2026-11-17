"use client";

import { motion } from "framer-motion";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export default function SpeakersHero() {
  return (
    <Section
      id="speakers-hero"
      className="relative flex min-h-[70vh] items-center overflow-hidden pt-24 sm:min-h-[75vh] sm:pt-28 lg:min-h-[80vh]"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.3em] text-red-500 sm:text-sm">
            The Voices
          </span>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Ideas worth{" "}
            <span className="text-red-500">hearing.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-300 sm:text-lg sm:leading-8">
            Meet the thinkers, creators, innovators, and changemakers taking
            the TEDxGombeStateUniversity stage to share ideas worth spreading.
          </p>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mx-auto mt-8 h-px w-20 origin-center bg-red-500"
          />
        </motion.div>
      </Container>
    </Section>
  );
}