"use client";

import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionHeader from "../ui/SectionHeader";

export default function SponsorApplicationForm() {
  return (
    <Section id="application" className="bg-transparent">

      <Container>

        <SectionHeader
          eyebrow="Apply"
          title="Become a Sponsor"
          description="Complete the form below and our Partnerships Team will get in touch to discuss the best sponsorship opportunity for your organization."
        />

        <form className="mx-auto mt-16 max-w-5xl rounded-3xl border border-white/10 bg-black/25 p-10 backdrop-blur-md">

          <div className="grid gap-8 md:grid-cols-2">

            <div>
              <label className="mb-2 block text-sm font-medium">
                Company Name
              </label>

              <input
                type="text"
                placeholder="ABC Company Ltd."
                className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 outline-none transition focus:border-red-600"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Representative
              </label>

              <input
                type="text"
                placeholder="John Doe"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 outline-none transition focus:border-red-600"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Email Address
              </label>

              <input
                type="email"
                placeholder="company@email.com"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 outline-none transition focus:border-red-600"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Phone Number
              </label>

              <input
                type="tel"
                placeholder="+234..."
                className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 outline-none transition focus:border-red-600"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Organization Website
              </label>

              <input
                type="url"
                placeholder="https://example.com"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 outline-none transition focus:border-red-600"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Sponsorship Package
              </label>

              <select className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 outline-none transition focus:border-red-600">

                <option>Bronze</option>
                <option>Silver</option>
                <option>Gold</option>
                <option>Titanium</option>
                <option>Custom Partnership</option>

              </select>

            </div>

          </div>

          <div className="mt-8">

            <label className="mb-2 block text-sm font-medium">
              Type of Support
            </label>

            <select className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 outline-none transition focus:border-red-600">

              <option>Financial Sponsorship</option>
              <option>In-kind Sponsorship</option>
              <option>Media Partnership</option>
              <option>Technology Partnership</option>
              <option>Custom Partnership</option>

            </select>

          </div>

          <div className="mt-8">

            <label className="mb-2 block text-sm font-medium">
              Message
            </label>

            <textarea
              rows={6}
              placeholder="Tell us about your organization and partnership goals..."
              className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 outline-none transition focus:border-red-600"
            />

          </div>

          <button
            type="submit"
            className="mt-10 w-full rounded-full bg-red-600 py-4 text-lg font-semibold transition hover:bg-red-700"
          >
            Submit Sponsorship Request
          </button>

        </form>

      </Container>

    </Section>
  );
}