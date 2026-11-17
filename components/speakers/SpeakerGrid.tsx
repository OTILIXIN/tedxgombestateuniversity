"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, VideoOff, Mic2 } from "lucide-react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

import { speakers } from "./speakers";

export default function SpeakerGrid() {
  return (
    <Section id="speakers">
      <Container>
        <SectionHeader
          eyebrow="Our Speakers"
          title="UNBOXED MINDS 2026"
          description="Meet the voices that brought powerful ideas, fresh perspectives and meaningful conversations to the TEDxGombeStateUniversity stage."
        />

        {/* Edition Introduction */}
        <div className="mt-12 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-red-950/40 via-black/60 to-black/30 p-7 sm:p-10">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-red-500">
                <span className="h-2 w-2 rounded-full bg-red-600" />
                Speaker Archive
              </div>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                First Edition
              </h2>

              <p className="mt-2 text-lg font-medium text-gray-300">
                Unboxed Minds
              </p>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-400">
                Revisit the talks, ideas and perspectives shared during the
                first TEDxGombeStateUniversity experience. Explore the
                speakers and watch their presentations below.
              </p>
            </div>

            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-red-500/20 bg-red-600/10">
              <Mic2 size={30} className="text-red-500" />
            </div>
          </div>
        </div>

        {/* Speaker Collection */}
        <div className="mt-12">
          <div className="mb-7 flex items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold text-white sm:text-2xl">
                Meet the Speakers
              </h3>
            </div>

            <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-gray-400">
              {speakers.length} Speakers
            </span>
          </div>

          {speakers.length === 0 ? (
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-10 text-center">
              <p className="text-gray-400">
                Speaker profiles will be announced soon.
              </p>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {speakers.map((speaker, index) => (
                <motion.article
                  key={speaker.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-red-500/30"
                >
                  {/* YouTube Video */}
                  <div className="relative aspect-video overflow-hidden bg-black">
                    {speaker.youtubeId ? (
                      <iframe
                        src={`https://www.youtube-nocookie.com/embed/${speaker.youtubeId}`}
                        title={`${speaker.name} - TEDxGombeStateUniversity`}
                        className="absolute inset-0 h-full w-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      />
                    ) : (
                      <div className="flex h-full flex-col items-center justify-center gap-3 bg-white/[0.02] text-gray-500">
                        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]">
                          <VideoOff size={24} />
                        </div>

                        <p className="text-sm font-medium">
                          Video currently unavailable
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Speaker Details */}
                  <div className="p-6">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center justify-end gap-3">
                        <span className="text-xs text-gray-600">
                          TEDxGombeStateUniversity
                        </span>
                      </div>
                    </div>

                    <h4 className="mt-4 text-xl font-semibold tracking-tight text-white">
                      {speaker.name}
                    </h4>

                    {speaker.youtubeId ? (
                      <a
                        href={`https://www.youtube.com/watch?v=${speaker.youtubeId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gray-300 transition-colors hover:text-red-500"
                      >
                        Watch on YouTube
                        <ArrowUpRight size={16} />
                      </a>
                    ) : (
                      <p className="mt-5 text-sm text-gray-500">
                        This recording is no longer available.
                      </p>
                    )}
                  </div>

                  <div className="h-px origin-left scale-x-0 bg-red-500 transition-transform duration-500 group-hover:scale-x-100" />
                </motion.article>
              ))}
            </div>
          )}
        </div>

        {/* Become a Speaker */}
        <div className="mt-20 rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-12 text-center backdrop-blur-md sm:px-12">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-red-500">
            Your Idea Deserves a Stage
          </p>

          <h3 className="mx-auto mt-4 max-w-2xl text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Have an idea worth sharing?
          </h3>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-400">
            Become part of the next TEDxGombeStateUniversity experience.
            Share your perspective and help inspire meaningful conversations.
          </p>

          <Link
            href="/get-involved/speaker"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-red-600 px-8 py-4 text-sm font-semibold text-white transition hover:bg-red-700"
          >
            Apply to Become a Speaker
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </Container>
    </Section>
  );
}
