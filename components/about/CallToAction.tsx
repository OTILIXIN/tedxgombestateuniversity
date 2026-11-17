"use client";

import { motion } from "framer-motion";
import { ArrowRight, Users, Sparkles } from "lucide-react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

const actions = [
  {
    icon: Users,
    eyebrow: "The People",
    title: "Meet the Team",
    description:
      "Discover the people working behind the scenes to bring TEDxGombeStateUniversity to life.",
    href: "/team",
    label: "Meet the Team",
  },
  {
    icon: Sparkles,
    eyebrow: "Be Part of It",
    title: "Get Involved",
    description:
      "Volunteer, partner, support, or contribute your skills and become part of the TEDxGombeStateUniversity journey.",
    href: "/get-involved",
    label: "Get Involved",
  },
];

export default function CallToAction() {
  return (
    <Section id="call-to-action">
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            eyebrow="Be Part of the Journey"
            title="There is a place for you here."
            description="TEDxGombeStateUniversity is built by people who believe ideas can create change. Discover the people behind the experience or find your own way to contribute."
          />
        </motion.div>

        {/* Action Cards */}
        <div className="mt-10 grid gap-5 sm:mt-12 md:grid-cols-2 md:gap-6">
          {actions.map((action, index) => {
            const Icon = action.icon;

            return (
              <motion.a
                key={action.title}
                href={action.href}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-red-500/30 hover:bg-white/[0.07] sm:p-9 lg:p-10"
              >
                {/* Background glow */}
                <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-red-500/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative">
                  {/* Icon */}
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-red-500 transition-transform duration-300 group-hover:scale-105">
                      <Icon size={23} strokeWidth={2} />
                    </div>

                    <ArrowRight
                      size={20}
                      className="text-gray-600 transition-all duration-300 group-hover:translate-x-1 group-hover:text-red-500"
                    />
                  </div>

                  {/* Content */}
                  <span className="mt-8 block text-xs font-semibold uppercase tracking-[0.28em] text-red-500">
                    {action.eyebrow}
                  </span>

                  <h3 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                    {action.title}
                  </h3>

                  <p className="mt-4 max-w-md text-sm leading-7 text-gray-400 sm:text-base">
                    {action.description}
                  </p>

                  {/* Link */}
                  <div className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors group-hover:text-red-500">
                    {action.label}
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </div>
                </div>

                {/* Bottom accent */}
                <div className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-red-500 transition-transform duration-500 group-hover:scale-x-100" />
              </motion.a>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}