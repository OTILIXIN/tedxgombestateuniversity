export type OpportunityStatus = "Open" | "Closed" | "Coming Soon";

export interface OpportunityOption {
  id: string;
  name: string;
  lead: string;

  status: OpportunityStatus;

  teamSize?: number;

  commitment: string;

  overview: string;

  responsibilities: string[];

  requirements: string[];

  benefits: string[];

  skills: string[];

  idealFor: string;

  applicationDeadline?: string;
}

export interface OpportunityGroup {
  title: string;
  intro: string;
  options: OpportunityOption[];
}

export const opportunities: Record<
  "volunteer" | "speaker" | "sponsor" | "partner",
  OpportunityGroup
> = {
  volunteer: {
    title: "Volunteer",

    intro:
      "Join our organizing team and help create an unforgettable TEDx experience.",

    options: [
      {
        id: "project-management",

        name: "Project Management",

        lead: "Mr. Naphtali Hadu Ligari",

        status: "Open",

        teamSize: 2,

        commitment: "8 Weeks",

        overview:
          "The Project Management team coordinates planning, timelines, meetings and execution across every department.",

        responsibilities: [
          "Coordinate timelines",
          "Manage meetings",
          "Track progress",
          "Support department leads",
        ],

        requirements: [
          "Leadership",
          "Communication",
          "Organization",
        ],

        skills: [
          "Project Management",
          "Leadership",
          "Planning",
        ],

        benefits: [
          "Leadership experience",
          "TEDx Certificate",
          "Networking",
        ],

        idealFor:
          "Students passionate about leadership and organization.",
      },

      {
        id: "media",

        name: "Media & Communications",

        lead: "Dorcas Daniel",

        status: "Open",

        teamSize: 10,

        commitment: "8 Weeks",

        overview:
          "Capture and share the TEDx story through photography, videography and digital media.",

        responsibilities: [
          "Photography",
          "Videography",
          "Social Media",
          "Press",
        ],

        requirements: [
          "Creative mindset",
          "Basic media skills",
        ],

        skills: [
          "Content Creation",
          "Photography",
          "Brand Storytelling",
        ],

        benefits: [
          "Portfolio Building",
          "Networking",
          "TEDx Certificate",
        ],

        idealFor:
          "Creative students interested in media and communications.",
      },

      {
        id: "technical",

        name: "Technical & AV",

        lead: "Christian Daniel",

        status: "Open",

        teamSize: 8,

        commitment: "8 Weeks",

        overview:
          "Responsible for sound, lighting, presentation slides, livestream and every technical aspect of the event.",

        responsibilities: [
          "Audio Systems",
          "Lighting",
          "Presentation Slides",
          "Livestream",
        ],

        requirements: [
          "Problem Solving",
          "Basic Technical Knowledge",
        ],

        skills: [
          "AV Production",
          "Live Events",
          "Troubleshooting",
        ],

        benefits: [
          "Hands-on Experience",
          "Networking",
          "Certificate",
        ],

        idealFor:
          "Students passionate about technology and live production.",
      },

      {
        id: "welfare",

        name: "Hospitality & Welfare",

        lead: "Shua Zakari M.",

        status: "Open",

        teamSize: 6,

        commitment: "8 Weeks",

        overview:
          "Ensure speakers, volunteers and guests have an exceptional experience throughout the event.",

        responsibilities: [
          "Refreshments",
          "Volunteer Care",
          "Guest Support",
        ],

        requirements: [
          "Empathy",
          "Communication",
        ],

        skills: [
          "Hospitality",
          "Customer Service",
        ],

        benefits: [
          "Networking",
          "Certificate",
        ],

        idealFor:
          "People who enjoy helping others and creating memorable experiences.",
      }
    ]
  },

  speaker: {
    title: "Become a Speaker",
    intro: "Share an idea worth spreading.",
    options: []
  },

  sponsor: {
    title: "Sponsor",
    intro: "Support the event through sponsorship.",
    options: []
  },

  partner: {
    title: "Partner",
    intro: "Collaborate with TEDxGombeStateUniversity.",
    options: []
  }
};