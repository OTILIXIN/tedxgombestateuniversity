"use client";

import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export default function ContactPage() {
  const [form, setForm] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; text: string } | null>(null);

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Unable to send your message.");
      }

      setForm(initialForm);
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

  const inputClass =
    "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white outline-none transition placeholder:text-gray-500 focus:border-red-600 focus:ring-2 focus:ring-red-600/20";

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden text-white">
      <Navbar />

      <section className="relative flex min-h-[70vh] items-center pt-28 pb-20 sm:pt-32">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red-500 sm:text-sm">
              Get in Touch
            </p>
            <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
              Contact <span className="text-red-500">TEDxGSU</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-300 sm:text-lg sm:leading-8">
              Have a question, proposal, or idea? Send us a message and our team will respond.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">
            <aside className="rounded-3xl border border-white/10 bg-black/35 p-6 backdrop-blur-xl sm:p-8">
              <h2 className="text-xl font-bold">Contact Information</h2>

              <div className="mt-8 space-y-6">
                <a
                  href="mailto:tedxgombestateuniversity0@gmail.com"
                  className="flex gap-4 text-gray-300 transition hover:text-white"
                >
                  <Mail className="mt-1 h-5 w-5 shrink-0 text-red-500" />
                  <span className="break-all">tedxgombestateuniversity0@gmail.com</span>
                </a>

                <a
                  href="tel:+2349135198971"
                  className="flex gap-4 text-gray-300 transition hover:text-white"
                >
                  <Phone className="mt-1 h-5 w-5 shrink-0 text-red-500" />
                  <span>+234 913 519 8971</span>
                </a>

                <div className="flex gap-4 text-gray-300">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-red-500" />
                  <span>Gombe State University<br />Gombe, Nigeria</span>
                </div>
              </div>
            </aside>

            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-white/10 bg-black/35 p-6 backdrop-blur-xl sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium">Full Name</label>
                  <input id="name" name="name" value={form.name} onChange={handleChange} className={inputClass} placeholder="Your name" required maxLength={120} />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium">Email Address</label>
                  <input id="email" name="email" type="email" value={form.email} onChange={handleChange} className={inputClass} placeholder="you@example.com" required maxLength={254} />
                </div>

                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-medium">Phone <span className="text-gray-500">(optional)</span></label>
                  <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} className={inputClass} placeholder="+234..." maxLength={30} />
                </div>

                <div>
                  <label htmlFor="subject" className="mb-2 block text-sm font-medium">Subject</label>
                  <input id="subject" name="subject" value={form.subject} onChange={handleChange} className={inputClass} placeholder="How can we help?" required maxLength={200} />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="message" className="mb-2 block text-sm font-medium">Message</label>
                  <textarea id="message" name="message" value={form.message} onChange={handleChange} className={`${inputClass} min-h-36 resize-y`} placeholder="Write your message here..." required maxLength={5000} />
                </div>
              </div>

              {status && (
                <p
                  role="status"
                  className={`mt-5 text-sm ${status.type === "success" ? "text-green-400" : "text-red-400"}`}
                >
                  {status.text}
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-6 w-full rounded-full bg-red-600 px-8 py-4 font-semibold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
