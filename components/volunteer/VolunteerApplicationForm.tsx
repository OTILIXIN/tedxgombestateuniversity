
"use client";

import { useState, type FormEvent, type ChangeEvent } from "react";
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

type FormValues = {
  fullName: string;
  email: string;
  phone: string;
  organization: string;
  faculty: string;
  academicDepartment: string;
  level: string;
  matricNumber: string;
  experience: string;
  portfolio: string;
  reason: string;
};

const initialValues: FormValues = {
  fullName: "",
  email: "",
  phone: "",
  organization: "",
  faculty: "",
  academicDepartment: "",
  level: "100 Level",
  matricNumber: "",
  experience: "No",
  portfolio: "",
  reason: "",
};

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

const inputClass =
  "w-full rounded-xl border border-white/10 bg-black/40 px-5 py-4 text-white outline-none transition focus:border-red-600";

export default function VolunteerApplicationForm({
  department,
}: VolunteerApplicationFormProps) {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [cv, setCv] = useState<File | null>(null);
  const [cvName, setCvName] = useState("");
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState("");

  const updateField = (field: keyof FormValues, value: string) => {
    setValues((previous) => ({ ...previous, [field]: value }));
  };

  const toggleSkill = (skill: string) => {
    setSelectedSkills((previous) =>
      previous.includes(skill)
        ? previous.filter((item) => item !== skill)
        : [...previous, skill]
    );
  };

  const continueToNextStep = () => {
    setError("");

    if (step === 1) {
      if (
        !values.fullName.trim() ||
        !values.email.trim() ||
        !values.phone.trim() ||
        !values.organization.trim()
      ) {
        setError("Please complete your personal information before continuing.");
        return;
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailPattern.test(values.email)) {
        setError("Please enter a valid email address.");
        return;
      }
    }

    if (step === 3) {
      if (!values.reason.trim()) {
        setError("Please tell us why you want to volunteer.");
        return;
      }

      if (!agreed) {
        setError("Please confirm that you understand the volunteer commitment.");
        return;
      }
    }

    setStep((previous) => Math.min(previous + 1, 4));
  };

  const handleCvChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) return;

    const allowedExtensions = [".pdf", ".doc", ".docx"];
    const extension = file.name.toLowerCase().slice(file.name.lastIndexOf("."));

    if (!allowedExtensions.includes(extension)) {
      setError("Please select a PDF, DOC or DOCX file.");
      event.target.value = "";
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setError("Your CV must not exceed 5 MB.");
      event.target.value = "";
      return;
    }

    setError("");
    setCv(file);
    setCvName(file.name);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    if (!agreed) {
      setError("Please confirm that you understand the volunteer commitment.");
      setStep(3);
      return;
    }

    setIsSubmitting(true);

    try {
      const formData = new FormData();

      Object.entries(values).forEach(([key, value]) => {
        formData.append(key, value);
      });

      formData.append("department", department.title);
      formData.append("skills", selectedSkills.join(", "));

      if (cv) {
        formData.append("cv", cv);
      }

      const response = await fetch("/api/volunteer-applications", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Unable to submit your application.");
      }

      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
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
              Our team will review your application and contact you via email
              if you&apos;re shortlisted.
            </p>

            <button
              type="button"
              onClick={() => {
                setSubmitted(false);
                setStep(1);
                window.scrollTo({ top: 0, behavior: "smooth" });
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
          noValidate
          className="mx-auto mt-16 max-w-5xl rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur md:p-10"
        >
          {/* Progress */}

          <div className="mb-12">
            <div className="mb-6 flex justify-between text-sm font-semibold text-gray-300">
              {["Personal", "Academic", "Experience", "Submit"].map(
                (label, index) => (
                  <span
                    key={label}
                    className={step >= index + 1 ? "text-red-500" : ""}
                  >
                    {label}
                  </span>
                )
              )}
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-red-600 transition-all duration-500"
                style={{ width: `${step * 25}%` }}
              />
            </div>
          </div>

          {/* Department Summary */}

          <div className="mb-12 overflow-hidden rounded-2xl border border-red-600/30 bg-gradient-to-r from-red-600/10 to-transparent">
            <div className="grid grid-cols-2 gap-4 p-6 md:grid-cols-3 md:gap-8 md:p-8 lg:grid-cols-4">
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

          {/* Step 1: Personal Information */}

          {step === 1 && (
            <div>
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={values.fullName}
                    onChange={(e) => updateField("fullName", e.target.value)}
                    className={inputClass}
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={values.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    className={inputClass}
                    placeholder="example@email.com"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    value={values.phone}
                    onChange={(e) => updateField("phone", e.target.value)}
                    className={inputClass}
                    placeholder="Phone Number"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    University / Organization *
                  </label>
                  <input
                    type="text"
                    value={values.organization}
                    onChange={(e) => updateField("organization", e.target.value)}
                    className={inputClass}
                    placeholder="Gombe State University"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Academic Information */}

          {step === 2 && (
            <div className="mt-4">
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
                    value={values.faculty}
                    onChange={(e) => updateField("faculty", e.target.value)}
                    placeholder="Faculty of Science"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Department
                  </label>
                  <input
                    type="text"
                    value={values.academicDepartment}
                    onChange={(e) =>
                      updateField("academicDepartment", e.target.value)
                    }
                    placeholder="Computer Science"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Level
                  </label>
                  <select
                    value={values.level}
                    onChange={(e) => updateField("level", e.target.value)}
                    className={inputClass}
                  >
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
                    value={values.matricNumber}
                    onChange={(e) =>
                      updateField("matricNumber", e.target.value)
                    }
                    className={inputClass}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Experience and Skills */}

          {step === 3 && (
            <div>
              <div className="mt-4">
                <h3 className="mb-6 text-2xl font-bold">
                  Experience
                </h3>

                <label className="mb-2 block text-sm font-medium">
                  Have you volunteered before?
                </label>

                <select
                  value={values.experience}
                  onChange={(e) => updateField("experience", e.target.value)}
                  className={inputClass}
                >
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
                  <div>
                    <label className="mb-3 block text-sm font-medium">
                      Curriculum Vitae (Optional)
                    </label>

                    <label
                      htmlFor="cv-upload"
                      className="group flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-white/10 bg-black/30 p-6 transition-all duration-300 hover:border-red-600 hover:bg-red-600/5 md:p-10"
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
                      onChange={handleCvChange}
                    />
                  </div>

                  <div>
                    <label className="mb-3 block text-sm font-medium">
                      Portfolio / LinkedIn / Website
                    </label>

                    <input
                      type="url"
                      value={values.portfolio}
                      onChange={(e) => updateField("portfolio", e.target.value)}
                      placeholder="https://yourportfolio.com"
                      className={inputClass}
                    />

                    <p className="mt-4 text-sm text-gray-300">
                      Share any portfolio, GitHub, Behance, LinkedIn or
                      personal website that showcases your work.
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
                  Why do you want to volunteer? *
                </label>
                <textarea
                  rows={6}
                  value={values.reason}
                  onChange={(e) => updateField("reason", e.target.value)}
                  className={inputClass}
                  placeholder="Tell us why you'd like to join TEDxGombeStateUniversity..."
                />
              </div>

              <div className="mt-8 flex items-start gap-3">
                <input
                  id="volunteer-agreement"
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-1"
                />

                <label
                  htmlFor="volunteer-agreement"
                  className="text-sm text-gray-300"
                >
                  I understand the commitment required and agree to actively
                  participate if selected as a volunteer.
                </label>
              </div>
            </div>
          )}

          {/* Step 4: Submission Review */}

          {step === 4 && (
            <div className="rounded-2xl border border-white/10 bg-black/20 p-6 md:p-8">
              <h3 className="text-2xl font-bold">
                Review Your Application
              </h3>

              <p className="mt-3 text-gray-300">
                You are applying for the {department.title} department.
                Please confirm that your information is correct before
                submitting.
              </p>

              <div className="mt-6 space-y-3 text-sm text-gray-300">
                <p><strong className="text-white">Name:</strong> {values.fullName}</p>
                <p><strong className="text-white">Email:</strong> {values.email}</p>
                <p><strong className="text-white">Phone:</strong> {values.phone}</p>
                <p><strong className="text-white">Organization:</strong> {values.organization}</p>
                <p><strong className="text-white">Department:</strong> {department.title}</p>
                <p><strong className="text-white">Skills:</strong> {selectedSkills.join(", ") || "None selected"}</p>
                <p><strong className="text-white">CV:</strong> {cvName || "Not attached"}</p>
              </div>
            </div>
          )}

          {/* Error Message */}

          {error && (
            <div
              role="alert"
              className="mt-8 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-300"
            >
              {error}
            </div>
          )}

          {/* Navigation Buttons */}

          <div className="mt-12 flex items-center justify-between">
            {step > 1 ? (
              <button
                type="button"
                onClick={() => {
                  setError("");
                  setStep((previous) => previous - 1);
                }}
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
                onClick={continueToNextStep}
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
