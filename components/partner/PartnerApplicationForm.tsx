
"use client";

import { useState } from "react";
import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionHeader from "../ui/SectionHeader";

type PartnerFormData = {
  organizationName: string;
  contactPerson: string;
  position: string;
  email: string;
  phone: string;
  website: string;
  organizationType: string;
  partnershipArea: string;
  proposal: string;
};

const initialFormData: PartnerFormData = {
  organizationName: "",
  contactPerson: "",
  position: "",
  email: "",
  phone: "",
  website: "",
  organizationType: "University",
  partnershipArea: "Education",
  proposal: "",
};

const inputClass =
  "w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none transition focus:border-red-600";

const labelClass = "mb-2 block text-sm font-medium";

export default function PartnerApplicationForm() {
  const [formData, setFormData] = useState<PartnerFormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  function handleChange(
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsSubmitting(true);
    setMessage("");
    setIsSuccess(false);

    try {
      const response = await fetch("/api/partner-applications", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Unable to submit your request.");
      }

      setIsSuccess(true);
      setMessage(
        "Your partnership request has been submitted successfully. Our team will be in touch."
      );
      setFormData(initialFormData);
    } catch (error) {
      setIsSuccess(false);
      setMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Section id="application" className="bg-transparent">
      <Container>
        <SectionHeader
          eyebrow="Partner With Us"
          title="Let's Build Something Meaningful Together"
          description="We believe the best ideas grow through collaboration. Tell us about your organization and how you'd like to partner with TEDxGombeStateUniversity."
        />

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-16 max-w-5xl rounded-3xl border border-white/10 bg-black/25 p-6 backdrop-blur-md md:p-10"
        >
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <label htmlFor="organizationName" className={labelClass}>
                Organization Name
              </label>
              <input
                id="organizationName"
                name="organizationName"
                type="text"
                placeholder="Organization Name"
                value={formData.organizationName}
                onChange={handleChange}
                className={inputClass}
                maxLength={150}
                required
              />
            </div>

            <div>
              <label htmlFor="contactPerson" className={labelClass}>
                Contact Person
              </label>
              <input
                id="contactPerson"
                name="contactPerson"
                type="text"
                placeholder="Full Name"
                value={formData.contactPerson}
                onChange={handleChange}
                className={inputClass}
                maxLength={120}
                required
              />
            </div>

            <div>
              <label htmlFor="position" className={labelClass}>
                Position / Role
              </label>
              <input
                id="position"
                name="position"
                type="text"
                placeholder="Executive Director"
                value={formData.position}
                onChange={handleChange}
                className={inputClass}
                maxLength={120}
                required
              />
            </div>

            <div>
              <label htmlFor="email" className={labelClass}>
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="example@email.com"
                value={formData.email}
                onChange={handleChange}
                className={inputClass}
                maxLength={254}
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className={labelClass}>
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+234..."
                value={formData.phone}
                onChange={handleChange}
                className={inputClass}
                maxLength={30}
                required
              />
            </div>

            <div>
              <label htmlFor="website" className={labelClass}>
                Website (Optional)
              </label>
              <input
                id="website"
                name="website"
                type="url"
                placeholder="https://yourwebsite.com"
                value={formData.website}
                onChange={handleChange}
                className={inputClass}
                maxLength={300}
              />
            </div>
          </div>

          <div className="mt-8">
            <label htmlFor="organizationType" className={labelClass}>
              Organization Type
            </label>
            <select
              id="organizationType"
              name="organizationType"
              value={formData.organizationType}
              onChange={handleChange}
              className={inputClass}
            >
              <option className="bg-black text-white">University</option>
              <option className="bg-black text-white">Company</option>
              <option className="bg-black text-white">NGO</option>
              <option className="bg-black text-white">
                Government Agency
              </option>
              <option className="bg-black text-white">Foundation</option>
              <option className="bg-black text-white">Innovation Hub</option>
              <option className="bg-black text-white">
                Media Organization
              </option>
              <option className="bg-black text-white">
                Community Organization
              </option>
              <option className="bg-black text-white">Other</option>
            </select>
          </div>

          <div className="mt-8">
            <label htmlFor="partnershipArea" className={labelClass}>
              Partnership Area
            </label>
            <select
              id="partnershipArea"
              name="partnershipArea"
              value={formData.partnershipArea}
              onChange={handleChange}
              className={inputClass}
            >
              <option className="bg-black text-white">Education</option>
              <option className="bg-black text-white">Technology</option>
              <option className="bg-black text-white">
                Community Development
              </option>
              <option className="bg-black text-white">Media</option>
              <option className="bg-black text-white">Innovation</option>
              <option className="bg-black text-white">Mentorship</option>
              <option className="bg-black text-white">Logistics</option>
              <option className="bg-black text-white">
                Custom Partnership
              </option>
            </select>
          </div>

          <div className="mt-8">
            <label htmlFor="proposal" className={labelClass}>
              Tell Us About Your Partnership Proposal
            </label>
            <textarea
              id="proposal"
              name="proposal"
              rows={6}
              placeholder="Share how your organization would like to collaborate with TEDxGombeStateUniversity..."
              value={formData.proposal}
              onChange={handleChange}
              className="w-full rounded-xl border border-white/10 bg-black/5 px-5 py-4 text-white outline-none transition focus:border-red-600"
              maxLength={5000}
              required
            />
          </div>

          {message && (
            <div
              role="status"
              aria-live="polite"
              className={`mt-6 rounded-xl border p-4 text-sm ${
                isSuccess
                  ? "border-green-500/30 bg-green-500/10 text-green-300"
                  : "border-red-500/30 bg-red-500/10 text-red-300"
              }`}
            >
              {message}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-10 w-full rounded-full bg-red-600 py-4 text-lg font-semibold transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? "Submitting..." : "Submit Partnership Request"}
          </button>
        </form>
      </Container>
    </Section>
  );
}
