import { speakerApplicationsStatus } from "./siteAvailability";

export const speakerCategories = [
  {
    id: "student",
    title: "Student Speaker",
    overview:
      "Current students with powerful ideas, discoveries or inspiring experiences.",

    idealFor: [
      "University students",
      "Young innovators",
      "Student leaders",
    ],

    duration: "8–12 minutes",

    status: speakerApplicationsStatus,
  },

  {
    id: "professional",
    title: "Professional Speaker",
    overview:
      "Industry professionals sharing expertise and transformative ideas.",

    idealFor: [
      "Entrepreneurs",
      "Researchers",
      "Executives",
    ],

    duration: "12–18 minutes",

    status: speakerApplicationsStatus,
  },

  {
    id: "performer",
    title: "Performer",

    overview:
      "Artists using performance to communicate meaningful ideas.",

    idealFor: [
      "Poets",
      "Musicians",
      "Dancers",
    ],

    duration: "3–8 minutes",

    status: speakerApplicationsStatus,
  },

  {
    id: "community",

    title: "Community Voice",

    overview:
      "People creating measurable impact within their communities.",

    idealFor: [
      "NGOs",
      "Community Leaders",
      "Volunteers",
    ],

    duration: "10–15 minutes",

    status: speakerApplicationsStatus,
  },

  {
    id: "innovator",

    title: "Innovator",

    overview:
      "Builders and creators developing solutions for real-world problems.",

    idealFor: [
      "Founders",
      "Engineers",
      "Developers",
    ],

    duration: "10–15 minutes",

    status: speakerApplicationsStatus,
  },

  {
    id: "youth",

    title: "Youth Changemaker",

    overview:
      "Young people leading positive change through bold ideas and action.",

    idealFor: [
      "Youth Leaders",
      "Advocates",
      "Social Entrepreneurs",
    ],

    duration: "8–12 minutes",

    status: speakerApplicationsStatus,
  },
];