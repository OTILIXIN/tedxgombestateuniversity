"use client";

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

type DepartmentGridProps = {
  departments: Department[];
  selectedDepartment: Department;
  onSelectDepartment: (department: Department) => void;
};

export default function DepartmentGrid({
  departments,
  selectedDepartment,
  onSelectDepartment,
}: DepartmentGridProps) {
  return (
    <Section
      id="departments"
      className="relative text-white"
    >
      <Container>

        <SectionHeader
          eyebrow="Departments"
          title="Choose Where You Want to Serve"
          description="Every department plays a unique role in delivering an unforgettable TEDx experience."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {departments.map((department) => (

            <button
              key={department.id}
              type="button"
              onClick={() => {
  onSelectDepartment(department);

  setTimeout(() => {
    document
      .getElementById("department-details")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  }, 50);
}}
              className="group text-left"
            >

              <div
                className={`relative h-full overflow-hidden rounded-3xl border p-5 md:p-7 backdrop-blur transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-red-600/20 ${
                  selectedDepartment.id === department.id
                    ? "border-red-600 bg-red-600/10"
                    : "border-white/10 bg-white/5 hover:border-red-600"
                }`}
              >

                {/* Red Glow */}
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-red-600/10 blur-3xl transition group-hover:bg-red-600/20" />

                <div className="relative z-10">

                  <span
                    className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                      department.status === "Open"
                        ? "bg-green-500/10 text-green-400"
                        : "bg-yellow-500/10 text-yellow-400"
                    }`}
                  >
                    {department.status}
                  </span>

                  <h3 className="mt-4 md:mt-6 text-lg md:text-2xl font-bold">
                    {department.title}
                  </h3>

                  <p className="mt-4 text-gray-300">
                    Lead
                  </p>

                  <p className="font-medium text-white">
                    {department.lead}
                  </p>

                  <div className="mt-8 font-semibold text-red-500 transition-all duration-300 group-hover:translate-x-2">
                    View Details →
                  </div>

                </div>

              </div>

            </button>

          ))}

        </div>

      </Container>
    </Section>
  );
}