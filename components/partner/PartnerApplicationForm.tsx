"use client";

import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionHeader from "../ui/SectionHeader";

export default function PartnerApplicationForm() {
  return (
    <Section id="application" className="bg-transparent">

      <Container>

        <SectionHeader
          eyebrow="Partner With Us"
          title="Let's Build Something Meaningful Together"
          description="We believe the best ideas grow through collaboration. Tell us about your organization and how you'd like to partner with TEDxGombeStateUniversity."
        />

        <form className="mx-auto mt-16 max-w-5xl rounded-3xl border border-white/10 bg-black/25 p-10 backdrop-blur-md">

          <div className="grid gap-8 md:grid-cols-2">

            <div>
              <label className="mb-2 block text-sm font-medium">
                Organization Name
              </label>

              <input
                type="text"
                placeholder="Organization Name"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 outline-none transition focus:border-red-600"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Contact Person
              </label>

              <input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 outline-none transition focus:border-red-600"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Position / Role
              </label>

              <input
                type="text"
                placeholder="Executive Director"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 outline-none transition focus:border-red-600"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Email Address
              </label>

              <input
                type="email"
                placeholder="example@email.com"
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
                Website (Optional)
              </label>

              <input
                type="url"
                placeholder="https://yourwebsite.com"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 outline-none transition focus:border-red-600"
              />
            </div>

          </div>

          <div className="mt-8">

            <label className="mb-2 block text-sm font-medium">
              Organization Type
            </label>

            <select
            className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none transition focus:border-red-600"
            >

            <option className="bg-black text-white">University</option>
            <option className="bg-black text-white">Company</option>
            <option className="bg-black text-white">NGO</option>
            <option className="bg-black text-white">Government Agency</option>
            <option className="bg-black text-white">Foundation</option>
            <option className="bg-black text-white">Innovation Hub</option>
            <option className="bg-black text-white">Media Organization</option>
            <option className="bg-black text-white">Community Organization</option>
            <option className="bg-black text-white">Other</option>

            </select>

          </div>

          <div className="mt-8">

            <label className="mb-2 block text-sm font-medium">
              Partnership Area
            </label>

            <select
            className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none transition focus:border-red-600"
            >

            <option className="bg-black text-white">Education</option>
            <option className="bg-black text-white">Technology</option>
            <option className="bg-black text-white">Community Development</option>
            <option className="bg-black text-white">Media</option>
            <option className="bg-black text-white">Innovation</option>
            <option className="bg-black text-white">Mentorship</option>
            <option className="bg-black text-white">Logistics</option>
            <option className="bg-black text-white">Custom Partnership</option>

            </select>

          </div>

          <div className="mt-8">

            <label className="mb-2 block text-sm font-medium">
              Tell Us About Your Partnership Proposal
            </label>

            <textarea
              rows={6}
              placeholder="Share how your organization would like to collaborate with TEDxGombeStateUniversity..."
              className="w-full rounded-xl border border-white/10 bg-black/5 px-5 py-4 outline-none transition focus:border-red-600"
            />

          </div>

          <button
            type="submit"
            className="mt-10 w-full rounded-full bg-red-600 py-4 text-lg font-semibold transition hover:bg-red-700"
          >
            Submit Partnership Request
          </button>

        </form>

      </Container>

    </Section>
  );
}