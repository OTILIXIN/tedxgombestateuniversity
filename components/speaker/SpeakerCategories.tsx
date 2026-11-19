"use client";

import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionHeader from "../ui/SectionHeader";
import type { AvailabilityStatus } from "@/data/siteAvailability";

type Category = {
  id: string;
  title: string;
  overview: string;
  idealFor: string[];
  duration: string;
  status: AvailabilityStatus;
};

type SpeakerCategoriesProps = {
  categories: Category[];
  selectedCategory: Category;
  onSelectCategory: (category: Category) => void;
};

export default function SpeakerCategories({
  categories,
  selectedCategory,
  onSelectCategory,
}: SpeakerCategoriesProps) {
  const hasOpenCategories = categories.some(
    (category) => category.status === "Open"
  );

  return (
    <Section
      id="categories"
      className="relative text-white"
    >
      <Container>

        <SectionHeader
          eyebrow="Speaker Categories"
          title={
            hasOpenCategories
              ? "Choose Your Speaking Category"
              : "Speaker Categories"
          }
          description={
            hasOpenCategories
              ? "Select the category that best represents your idea and experience."
              : "Explore the categories we are preparing for upcoming speaker applications."
          }
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {categories.map((category) => {
            const isOpen = category.status === "Open";
            const isSelected = isOpen && selectedCategory.id === category.id;
            const card = (
              <div
                className={`relative h-full overflow-hidden rounded-3xl border p-8 text-left ${
                  isOpen
                    ? "group transition-all duration-500 hover:-translate-y-2 hover:border-red-600"
                    : ""
                } ${
                  isSelected
                    ? "border-red-600 bg-red-600/10 shadow-xl shadow-red-600/20"
                    : "border-white/10 bg-white/5"
                }`}
              >
                <div
                  className={`absolute -right-10 -top-10 h-40 w-40 rounded-full bg-red-600/10 blur-3xl ${
                    isOpen ? "transition group-hover:bg-red-600/20" : ""
                  }`}
                />

                <div className="relative z-10">
                  <span
                    className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                      category.status === "Open"
                        ? "bg-green-500/10 text-green-400"
                        : category.status === "Coming Soon"
                          ? "bg-yellow-500/10 text-yellow-400"
                          : "bg-red-500/10 text-red-400"
                    }`}
                  >
                    {category.status}
                  </span>

                  <h3 className="mt-6 text-2xl font-bold">
                    {category.title}
                  </h3>

                  <p className="mt-4 leading-7 text-gray-300">
                    {category.overview}
                  </p>

                  {isOpen && (
                    <div className="mt-8 font-semibold text-red-500 transition group-hover:translate-x-1">
                      View Category →
                    </div>
                  )}
                </div>
              </div>
            );

            return isOpen ? (
              <button
                key={category.id}
                type="button"
                onClick={() => {
                  onSelectCategory(category);

                  setTimeout(() => {
                    document
                      .getElementById("speaker-details")
                      ?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                  }, 100);
                }}
                className="h-full w-full text-left"
              >
                {card}
              </button>
            ) : (
              <div key={category.id}>{card}</div>
            );
          })}

        </div>

      </Container>
    </Section>
  );
}