"use client";

import { useState } from "react";
import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionHeader from "../ui/SectionHeader";

type Department = {
  id: string;
  title: string;
  lead: string;
  status: string;
  overview: string;
  responsibilities: string[];
  requirements: string[];
  commitment: string;
  teamSize: string;
};

type VolunteerApplicationFormProps = {
  department: Department;
};

export default function VolunteerApplicationForm({
  department,
}: VolunteerApplicationFormProps) {
    const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
    const [cvName, setCvName] = useState("");
    const [step, setStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

const skills = [
  "Leadership",
  "Communication",
  "Graphic Design",
  "Photography",
  "Videography",
  "Public Speaking",
  "Event Planning",
  "Writing",
  "Social Media",
  "Technical Support",
  "Customer Service",
  "Problem Solving",
];

const toggleSkill = (skill: string) => {
  setSelectedSkills((prev) =>
    prev.includes(skill)
      ? prev.filter((s) => s !== skill)
      : [...prev, skill]
  );
};

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  setIsSubmitting(true);

  // Simulate sending the application
  await new Promise((resolve) => setTimeout(resolve, 2000));

  setIsSubmitting(false);
  setSubmitted(true);
};
if (submitted) {
  return (
    <Section className="relative text-white">
      <Container>

        <div className="mx-auto max-w-3xl rounded-3xl border border-green-500/20 bg-white/5 p-12 text-center backdrop-blur">

          <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-green-500/10 text-5xl">
            ✓
          </div>

          <h2 className="text-4xl font-bold">
            Application Submitted!
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-300">
            Thank you for applying to join
            <span className="font-semibold text-white">
              {" "}TEDxGombeStateUniversity
            </span>.
          </p>

          <p className="mt-4 text-gray-300">
            We&apos;ve received your application for
            <span className="font-semibold text-red-500">
              {" "}{department.title}
            </span>.
          </p>

          <p className="mt-4 text-gray-300">
            Our team will review your application and
            contact you via email if you&lsquo;re shortlisted.
          </p>

          <button
            onClick={() => {
              setSubmitted(false);
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
            className="mt-10 rounded-full bg-red-600 px-8 py-4 font-semibold transition hover:bg-red-700"
          >
            Back to Volunteer Portal
          </button>

        </div>

      </Container>
    </Section>
  );
}
  return (
    <Section id="application" className="relative text-white">
      <Container>

        <SectionHeader
          eyebrow="Application"
          title="Volunteer Application Form"
          description="Complete the form below to apply for your preferred department."
        />
        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-16 max-w-5xl rounded-3xl border border-white/10 bg-white/5 p-6 md:p-10 backdrop-blur"
        >
{/* Progress */}

<div className="mb-12">

  <div className="mb-6 flex justify-between text-sm font-semibold text-gray-300">

    <span className={step >= 1 ? "text-red-500" : ""}>
      Personal
    </span>

    <span className={step >= 2 ? "text-red-500" : ""}>
      Academic
    </span>

    <span className={step >= 3 ? "text-red-500" : ""}>
      Experience
    </span>

    <span className={step >= 4 ? "text-red-500" : ""}>
      Submit
    </span>

  </div>

  <div className="h-2 overflow-hidden rounded-full bg-white/10">

    <div
      className="h-full rounded-full bg-red-600 transition-all duration-500"
      style={{
        width: `${step * 25}%`,
      }}
    />

  </div>

</div>
        {/* Department Summary */}

        <div className="mb-12 overflow-hidden rounded-2xl border border-red-600/30 bg-gradient-to-r from-red-600/10 to-transparent">

        <div className="grid gap-4 md:gap-8 p-6 md:p-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

            <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gray-300">
                Applying For
            </p>

            <h2 className="mt-3 text-2xl font-bold text-white">
                {department.title}
            </h2>
            </div>

            <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gray-300">
                Department Lead
            </p>

            <h3 className="mt-3 text-lg font-semibold">
                {department.lead}
            </h3>
            </div>

            <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gray-300">
                Commitment
            </p>

            <h3 className="mt-3 text-lg font-semibold">
                {department.commitment}
            </h3>
            </div>

            <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gray-300">
                Status
            </p>

            <span className="mt-3 inline-flex rounded-full bg-green-500/15 px-4 py-2 text-sm font-semibold text-green-400">
                {department.status}
            </span>
            </div>

        </div>

        </div>

          {step === 1 && (
  <div>
    {/* Personal Information */}
    <div className="grid gap-8 md:grid-cols-2">

            <div>
              <label className="mb-2 block text-sm font-medium">
                Full Name
              </label>

              <input
                type="text"
                className="w-full rounded-xl border border-white/10 bg-black/40 px-5 py-4 outline-none transition focus:border-red-600"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Email Address
              </label>

              <input
                type="email"
                className="w-full rounded-xl border border-white/10 bg-black/40 px-5 py-4 outline-none transition focus:border-red-600"
                placeholder="example@email.com"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Phone Number
              </label>

              <input
                type="tel"
                className="w-full rounded-xl border border-white/10 bg-black/40 px-5 py-4 outline-none transition focus:border-red-600"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                University / Organization
              </label>

              <input
                type="text"
                className="w-full rounded-xl border border-white/10 bg-black/40 px-5 py-4 outline-none transition focus:border-red-600"
                placeholder="Gombe State University"
              />
            </div>

          </div>
  </div>
)}

          {step === 2 && (
  <div>
    {/* Academic Information */}
    <div className="mt-12">

  <h3 className="mb-6 text-2xl font-bold">
    Academic Information
  </h3>

  <div className="grid gap-8 md:grid-cols-2">

    <div>
      <label className="mb-2 block text-sm font-medium">
        Faculty / School
      </label>

      <input
        type="text"
        placeholder="Faculty of Science"
        className="w-full rounded-xl border border-white/10 bg-black/40 px-5 py-4 outline-none focus:border-red-600"
      />
    </div>

    <div>
      <label className="mb-2 block text-sm font-medium">
        Department
      </label>

      <input
        type="text"
        placeholder="Computer Science"
        className="w-full rounded-xl border border-white/10 bg-black/40 px-5 py-4 outline-none focus:border-red-600"
      />
    </div>

    <div>
      <label className="mb-2 block text-sm font-medium">
        Level
      </label>

      <select className="w-full rounded-xl border border-white/10 bg-black/40 px-5 py-4 outline-none focus:border-red-600">

        <option>100 Level</option>
        <option>200 Level</option>
        <option>300 Level</option>
        <option>400 Level</option>
        <option>500 Level</option>
        <option>Postgraduate</option>
        <option>Not a Student</option>

      </select>

    </div>

    <div>
      <label className="mb-2 block text-sm font-medium">
        Matric Number (Optional)
      </label>

      <input
        type="text"
        className="w-full rounded-xl border border-white/10 bg-black/40 px-5 py-4 outline-none focus:border-red-600"
      />
    </div>

  </div>

</div>
  </div>
)}

    {step === 3 && (
  <div>
    {/* Experience & Skills */}

<div className="mt-12">

  <h3 className="mb-6 text-2xl font-bold">
    Experience
  </h3>

  <label className="mb-2 block text-sm font-medium">
    Have you volunteered before?
  </label>

  <select className="w-full rounded-xl border border-white/10 bg-black/40 px-5 py-4 outline-none focus:border-red-600">

    <option>No</option>
    <option>Yes</option>

  </select>

</div>

    {/* Skills */}

<div className="mt-12">

  <h3 className="mb-6 text-2xl font-bold">
    Skills
  </h3>

  <div className="flex flex-wrap gap-3">

    {skills.map((skill) => {

      const active = selectedSkills.includes(skill);

      return (

        <button
          key={skill}
          type="button"
          onClick={() => toggleSkill(skill)}
          className={`rounded-full border px-5 py-3 text-sm font-medium transition-all duration-300 ${
            active
              ? "border-red-600 bg-red-600 text-white shadow-lg shadow-red-600/30"
              : "border-white/10 bg-black/40 hover:border-red-600 hover:bg-red-600/10"
          }`}
        >
          {skill}
        </button>

      );

    })}

  </div>

</div>

    {/* Supporting Documents */}
    <div className="mt-12">

  <h3 className="mb-6 text-2xl font-bold">
    Supporting Documents
  </h3>

  <div className="grid gap-6 md:gap-8 lg:grid-cols-2">

    {/* CV Upload */}
    <div>

      <label className="mb-3 block text-sm font-medium">
        Curriculum Vitae (Optional)
      </label>

      <label
        htmlFor="cv-upload"
        className="group flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-white/10 bg-black/30 p-6 md:p-10 transition-all duration-300 hover:border-red-600 hover:bg-red-600/5"
      >

        <div className="mb-4 rounded-full bg-red-600/10 p-5 text-red-500 transition group-hover:bg-red-600 group-hover:text-white">

          📄

        </div>

        <h4 className="text-lg font-semibold">
            {cvName || "Upload Your CV"}
        </h4>

        <p className="mt-2 text-center text-sm text-gray-300">
        {cvName
            ? "File selected successfully."
            : "PDF or DOCX • Maximum 5MB"}
        </p>

        <p className="mt-6 rounded-full border border-red-600 px-5 py-2 text-sm font-semibold text-red-500 transition group-hover:bg-red-600 group-hover:text-white">
          Choose File
        </p>

      </label>

      <input
  id="cv-upload"
  type="file"
  accept=".pdf,.doc,.docx"
  className="hidden"
  onChange={(e) => {
    if (e.target.files?.length) {
      setCvName(e.target.files[0].name);
    }
  }}
/>

    </div>

    {/* Portfolio */}

    <div>

      <label className="mb-3 block text-sm font-medium">
        Portfolio / LinkedIn / Website
      </label>

      <input
        type="url"
        placeholder="https://yourportfolio.com"
        className="w-full rounded-xl border border-white/10 bg-black/40 px-5 py-4 outline-none transition focus:border-red-600"
      />

      <p className="mt-4 text-sm text-gray-300">
        Share any portfolio, GitHub, Behance,
        LinkedIn or personal website that showcases your work.
      </p>

    </div>

  </div>

</div>

    <div className="mt-10">
      <label className="mb-2 block text-sm font-medium">
        Department Applying For
      </label>

      <input
        readOnly
        value={department.title}
        className="w-full rounded-xl border border-red-600 bg-red-600/10 px-5 py-4 font-semibold text-red-400"
      />
    </div>

    <div className="mt-10">
      <label className="mb-2 block text-sm font-medium">
        Why do you want to volunteer?
      </label>

      <textarea
        rows={6}
        className="w-full rounded-xl border border-white/10 bg-black/40 px-5 py-4 outline-none transition focus:border-red-600"
        placeholder="Tell us why you'd like to join TEDxGombeStateUniversity..."
      />
    </div>

    <div className="mt-8 flex items-start gap-3">
      <input
        type="checkbox"
        className="mt-1"
      />

      <p className="text-sm text-gray-300">
        I understand the commitment required and agree to actively
        participate if selected as a volunteer.
      </p>
    </div>
  </div>
)}

          {/* Navigation Buttons */}
          <div className="mt-12 flex items-center justify-between">

  {step > 1 ? (
    <button
      type="button"
      onClick={() => setStep(step - 1)}
      className="rounded-full border border-white/20 px-8 py-4 font-semibold transition hover:border-red-600"
    >
      ← Previous
    </button>
  ) : (
    <div />
  )}

  {step < 4 ? (
    <button
      type="button"
      onClick={() => setStep(step + 1)}
      className="rounded-full bg-red-600 px-8 py-4 font-semibold transition hover:bg-red-700"
    >
      Continue →
    </button>
  ) : (
    <button
      type="submit"
      disabled={isSubmitting}
      className="rounded-full bg-red-600 px-8 py-4 font-semibold transition hover:bg-red-700 disabled:opacity-60"
    >
      {isSubmitting ? "Submitting..." : "Submit Application"}
    </button>
  )}

</div>
        </form>

      </Container>
    </Section>
  );
}