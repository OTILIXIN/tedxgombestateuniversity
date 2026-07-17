"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionHeader from "../ui/SectionHeader";

const faqs = [
  {
    question: "Who can become a partner?",
    answer:
      "We welcome universities, NGOs, government agencies, companies, innovation hubs, media organizations and institutions that share our vision of empowering communities through ideas.",
  },
  {
    question: "Do partnerships have to be financial?",
    answer:
      "No. Partnerships can include knowledge sharing, venue support, media promotion, technology, logistics, mentorship, products, services or any contribution that creates value for the event.",
  },
  {
    question: "Can we propose a custom partnership?",
    answer:
      "Absolutely. Every organization has unique strengths, and we're happy to explore collaborations that align with our shared objectives.",
  },
  {
    question: "How long does a partnership last?",
    answer:
      "Partnerships may be event-specific or extend beyond the event into future TEDxGombeStateUniversity initiatives and community programs.",
  },
  {
    question: "Will partners receive recognition?",
    answer:
      "Yes. Depending on the nature of the partnership, partners may receive branding opportunities, acknowledgements, media exposure and inclusion in post-event reports.",
  },
  {
    question: "How do we begin?",
    answer:
      "Complete the Partner Application Form below. Our Partnerships Team will review your submission and schedule a conversation with your organization.",
  },
];

export default function PartnerFAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section className="bg-transparent">

      <Container>

        <SectionHeader
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          description="Answers to common questions about partnering with TEDxGombeStateUniversity."
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
                  onClick={() => setOpen(isOpen ? null : index)}
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

                    <p className="px-8 pb-8 leading-8 text-gray-300">
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