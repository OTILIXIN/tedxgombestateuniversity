import { CheckCircle2, Clock3, User, Users } from "lucide-react";

import Container from "../ui/Container";
import Section from "../ui/Section";

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

type DepartmentDetailsProps = {
  department: Department;
};

export default function DepartmentDetails({
  department,
}: DepartmentDetailsProps) {
  return (
    <Section
    id="department-details"
      className="relative text-white"
    >
      <Container>

        <div className="relative overflow-hidden rounded-3xl border border-red-600/20 bg-gradient-to-br from-white/5 via-black/70 to-white/5 backdrop-blur-xl shadow-2xl shadow-red-600/10">

          {/* Ambient Glow */}
          <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-red-600/10 blur-3xl pointer-events-none" />
          <div className="absolute -left-40 -bottom-40 h-80 w-80 rounded-full bg-red-600/5 blur-3xl pointer-events-none" />

          {/* Header */}
          <div className="relative border-b border-white/10 bg-gradient-to-r from-white/10 to-transparent p-6 md:p-12">

            <div className="flex items-center justify-between mb-6">
              <span className="rounded-full bg-gradient-to-r from-red-600 to-red-500 px-4 py-2 text-sm font-semibold shadow-lg shadow-red-600/20">
                Selected Department
              </span>
              <span className={`rounded-full px-4 py-2 text-sm font-semibold ${
                department.status === "Open"
                  ? "bg-green-500/10 text-green-400"
                  : "bg-yellow-500/10 text-yellow-400"
              }`}>
                {department.status}
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-black bg-gradient-to-r from-white via-gray-100 to-gray-200 bg-clip-text text-transparent">
              {department.title}
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-300">
              {department.overview}
            </p>

          </div>

          {/* Stats */}
          <div className="relative grid gap-4 md:gap-6 border-b border-white/10 p-6 md:p-12 md:grid-cols-3">

            <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:bg-white/10 hover:border-red-600/30 hover:shadow-lg hover:shadow-red-600/10">
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-red-600/20 p-3">
                  <User className="text-red-500" size={24} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider font-semibold text-gray-300">Department Lead</p>
                  <h4 className="mt-2 text-lg font-bold text-white">
                    {department.lead}
                  </h4>
                </div>
              </div>
            </div>

            <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:bg-white/10 hover:border-red-600/30 hover:shadow-lg hover:shadow-red-600/10">
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-red-600/20 p-3">
                  <Clock3 className="text-red-500" size={24} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider font-semibold text-gray-300">Weekly Commitment</p>
                  <h4 className="mt-2 text-lg font-bold text-white">
                    {department.commitment}
                  </h4>
                </div>
              </div>
            </div>

            <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:bg-white/10 hover:border-red-600/30 hover:shadow-lg hover:shadow-red-600/10">
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-red-600/20 p-3">
                  <Users className="text-red-500" size={24} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider font-semibold text-gray-300">Team Size</p>
                  <h4 className="mt-2 text-lg font-bold text-white">
                    {department.teamSize}
                  </h4>
                </div>
              </div>
            </div>

          </div>

          {/* Content */}
          <div className="relative grid gap-8 md:gap-12 p-6 md:p-12 lg:grid-cols-2">

            {/* Responsibilities */}
            <div>

              <h3 className="mb-6 md:mb-8 text-2xl md:text-3xl font-bold relative inline-block">
                Responsibilities
                <div className="absolute -bottom-2 left-0 h-1 w-16 bg-gradient-to-r from-red-600 to-transparent rounded-full"></div>
              </h3>

              <ul className="space-y-4 mt-8">

                {department.responsibilities.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-4 px-3 py-4 rounded-lg hover:bg-white/5 transition-colors duration-200 group"
                  >
                    <CheckCircle2
                      className="mt-1 text-red-500 flex-shrink-0 group-hover:scale-110 transition-transform duration-200"
                      size={22}
                    />

                    <span className="text-gray-300 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}

              </ul>

            </div>

            {/* Requirements */}
            <div>

              <h3 className="mb-6 md:mb-8 text-2xl md:text-3xl font-bold relative inline-block">
                Ideal Candidate
                <div className="absolute -bottom-2 left-0 h-1 w-16 bg-gradient-to-r from-red-600 to-transparent rounded-full"></div>
              </h3>

              <ul className="space-y-4 mt-8">

                {department.requirements.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-4 px-3 py-4 rounded-lg hover:bg-white/5 transition-colors duration-200 group"
                  >
                    <CheckCircle2
                      className="mt-1 text-red-500 flex-shrink-0 group-hover:scale-110 transition-transform duration-200"
                      size={22}
                    />

                    <span className="text-gray-300 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}

              </ul>

            </div>

          </div>

          {/* CTA */}
          <div className="relative border-t border-white/10 p-6 md:p-12 bg-gradient-to-r from-transparent via-white/5 to-transparent">

            <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">

              <div>

                <h3 className="text-2xl font-bold">
                  Ready to Join {department.title}?
                </h3>

                <p className="mt-3 text-gray-300">
                  Submit your application and become part of the{" "}
                  {department.title} team for TEDxGombeStateUniversity 2026.
                </p>

              </div>

              <button
  onClick={() =>
    document
      .getElementById("application")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
  }
  className="rounded-full bg-red-600 px-8 py-4 font-semibold transition hover:bg-red-700"
>
  Apply for this Department
</button>

            </div>

          </div>

        </div>

      </Container>
    </Section>
  );
}