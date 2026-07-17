"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionHeader from "../ui/SectionHeader";

const faqs = [
  {
    question: "Can startups sponsor TEDxGombeStateUniversity?",
    answer:
      "Yes. We welcome organizations of every size. Partnership opportunities can be tailored to align with your objectives and budget.",
  },
  {
    question: "Do you accept in-kind sponsorships?",
    answer:
      "Absolutely. We welcome support through products, services, media partnerships, logistics, hospitality, printing, technology, and other valuable contributions.",
  },
  {
    question: "Can sponsorship packages be customized?",
    answer:
      "Yes. We can create bespoke partnership packages that align with your marketing goals, CSR initiatives, and audience engagement objectives.",
  },
  {
    question: "When should we confirm our sponsorship?",
    answer:
      "The earlier the better. Early confirmation allows us to maximize your visibility across our marketing campaigns and event materials.",
  },
  {
    question: "Will sponsors receive a post-event report?",
    answer:
      "Yes. All sponsors receive a partnership report highlighting attendance, media reach, event highlights, and the overall impact of the event.",
  },
  {
    question: "Who do we contact for sponsorship enquiries?",
    answer:
      "Simply complete the sponsorship application form below, and a member of our Partnerships Team will contact you promptly.",
  },
];

export default function SponsorFAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section className="bg-transparent">

      <Container>

        <SectionHeader
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          description="Everything you need to know before partnering with TEDxGombeStateUniversity."
        />

        <div className="mx-auto mt-16 max-w-4xl space-y-5">

          {faqs.map((faq, index) => {

            const isOpen = open === index;

            return (

              <div
                key={faq.question}
                className="overflow-hidden rounded-3xl border border-white/10 bg-black/25 backdrop-blur-md"
              >

                <button
                  onClick={() =>
                    setOpen(isOpen ? null : index)
                  }
                  className="flex w-full items-center justify-between px-8 py-6 text-left transition hover:bg-white/5"
                >

                  <h3 className="text-lg font-semibold">
                    {faq.question}
                  </h3>

                  <ChevronDown
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-red-500" : ""
                    }`}
                  />

                </button>

                <div
                  className={`grid transition-all duration-500 ${
                    isOpen
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }`}
                >

                  <div className="overflow-hidden">

                    <p className="px-8 pb-8 text-gray-300 leading-8">
                      {faq.answer}
                    </p>

                  </div>

                </div>

              </div>

            );

          })}

        </div>

      </Container>

    </Section>
  );
}