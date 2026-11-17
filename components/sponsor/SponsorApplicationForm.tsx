
"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionHeader from "../ui/SectionHeader";

type SponsorFormData = {
  companyName: string;
  representative: string;
  email: string;
  phone: string;
  website: string;
  sponsorshipPackage: string;
  supportType: string;
  message: string;
};

const initialFormData: SponsorFormData = {
  companyName: "",
  representative: "",
  email: "",
  phone: "",
  website: "",
  sponsorshipPackage: "Bronze",
  supportType: "Financial Sponsorship",
  message: "",
};

const inputClass =
  "w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none transition focus:border-red-600";

const labelClass = "mb-2 block text-sm font-medium";

export default function SponsorApplicationForm() {
  const [formData, setFormData] = useState<SponsorFormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  function handleChange(
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsSubmitting(true);
    setMessage("");
    setIsSuccess(false);

    try {
      const response = await fetch("/api/sponsor-applications", {
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
        "Your sponsorship request has been submitted successfully. Our Partnerships Team will be in touch."
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
          eyebrow="Apply"
          title="Become a Sponsor"
          description="Complete the form below and our Partnerships Team will get in touch to discuss the best sponsorship opportunity for your organization."
        />

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-16 max-w-5xl rounded-3xl border border-white/10 bg-black/25 p-6 backdrop-blur-md md:p-10"
        >
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <label htmlFor="companyName" className={labelClass}>
                Company Name
              </label>
              <input
                id="companyName"
                name="companyName"
                type="text"
                placeholder="ABC Company Ltd."
                value={formData.companyName}
                onChange={handleChange}
                className={inputClass}
                maxLength={150}
                required
              />
            </div>

            <div>
              <label htmlFor="representative" className={labelClass}>
                Representative
              </label>
              <input
                id="representative"
                name="representative"
                type="text"
                placeholder="John Doe"
                value={formData.representative}
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
                placeholder="company@email.com"
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
                Organization Website
              </label>
              <input
                id="website"
                name="website"
                type="url"
                placeholder="https://example.com"
                value={formData.website}
                onChange={handleChange}
                className={inputClass}
                maxLength={300}
              />
            </div>

            <div>
              <label htmlFor="sponsorshipPackage" className={labelClass}>
                Sponsorship Package
              </label>
              <select
                id="sponsorshipPackage"
                name="sponsorshipPackage"
                value={formData.sponsorshipPackage}
                onChange={handleChange}
                className={inputClass}
              >
                <option className="bg-black text-white">Bronze</option>
                <option className="bg-black text-white">Silver</option>
                <option className="bg-black text-white">Gold</option>
                <option className="bg-black text-white">Titanium</option>
                <option className="bg-black text-white">
                  Custom Partnership
                </option>
              </select>
            </div>
          </div>

          <div className="mt-8">
            <label htmlFor="supportType" className={labelClass}>
              Type of Support
            </label>
            <select
              id="supportType"
              name="supportType"
              value={formData.supportType}
              onChange={handleChange}
              className={inputClass}
            >
              <option className="bg-black text-white">
                Financial Sponsorship
              </option>
              <option className="bg-black text-white">
                In-kind Sponsorship
              </option>
              <option className="bg-black text-white">
                Media Partnership
              </option>
              <option className="bg-black text-white">
                Technology Partnership
              </option>
              <option className="bg-black text-white">
                Custom Partnership
              </option>
            </select>
          </div>

          <div className="mt-8">
            <label htmlFor="message" className={labelClass}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              placeholder="Tell us about your organization and partnership goals..."
              value={formData.message}
              onChange={handleChange}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none transition focus:border-red-600"
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
            {isSubmitting ? "Submitting..." : "Submit Sponsorship Request"}
          </button>
        </form>
      </Container>
    </Section>
  );
}
