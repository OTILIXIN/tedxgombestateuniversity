"use client";

import { useState } from "react";
import Container from "../ui/Container";
import Section from "../ui/Section";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; text: string } | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Unable to subscribe.");
      }

      setEmail("");
      setStatus({ type: "success", text: result.message });
    } catch (error) {
      setStatus({
        type: "error",
        text: error instanceof Error ? error.message : "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Section id="newsletter" className="relative overflow-hidden text-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/10 blur-[140px] sm:h-[450px] sm:w-[450px] sm:blur-[180px] lg:h-[600px] lg:w-[600px] lg:blur-[220px]" />
      </div>

      <Container>
        <div className="relative z-10 mx-auto max-w-4xl rounded-2xl border border-white/10 bg-white/[0.06] p-5 shadow-[0_25px_80px_rgba(0,0,0,0.35)] backdrop-blur-md sm:rounded-[2rem] sm:p-8 lg:p-12">
          <p className="mt-2 text-center text-2xl font-black leading-tight sm:mt-4 sm:text-4xl md:text-5xl">
            Stay Connected
          </p>

          <h2 className="mt-3 text-center text-3xl font-bold sm:mt-4 sm:text-4xl">
            Never Miss an Update
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-8 text-gray-300 sm:text-lg">
            Subscribe to receive speaker announcements, ticket releases,
            event updates and exclusive TEDxGombeStateUniversity news.
          </p>

          <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-4 sm:mt-12 md:flex-row">
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="min-w-0 flex-1 rounded-full border border-white/10 bg-black/40 px-4 py-4 text-white placeholder:text-gray-500 outline-none transition-all duration-300 focus:border-red-600 focus:ring-2 focus:ring-red-600/20 sm:px-5"
              required
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-full bg-red-600 px-8 py-4 font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-700 md:w-auto"
            >
              {isSubmitting ? "Subscribing..." : "Subscribe"}
            </button>
          </form>

          {status && (
            <p className={`mt-6 text-center text-sm ${status.type === "error" ? "text-red-400" : "text-green-400"}`}>
              {status.text}
            </p>
          )}

          <p className="mt-6 text-center text-sm text-gray-300">
            We respect your privacy. No spam, only important TEDxGombeStateUniversity updates.
          </p>
        </div>
      </Container>
    </Section>
  );
}