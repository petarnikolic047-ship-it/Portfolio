import type {
  EducationItem,
  ExperienceItem,
  ExperienceSection,
} from "@/types/experience";
import { positioning } from "./hero";

export const experienceWork: ExperienceItem[] = [
  {
    id: "inforce",
    role: "Software Engineer / Configuration Engineer",
    company: "Inforce",
    period: "2025 - Present",
    type: "Full-time",
    theme: {
      eyebrow: "Inforce",
      headline: "Your Fiercest Ally in Insurance Technology",
      subline: "Insurance technology expertise - P&C and life",
    },
    bullets: [
      "Own Oracle PL/SQL packages that run policy lifecycle workflows (renewals, endorsements, rating rule flows) to keep production transactions correct.",
      "Harden business rules and transactional logic with validation and safe rollback paths to protect data integrity.",
      "Diagnose production issues by tracing object-model transactions and rule outputs, reducing time-to-isolate edge cases.",
      "Validate data mart outputs against live policy behavior to keep reporting aligned with production logic.",
      "Ship changes through controlled release processes with senior engineers to keep high-volume systems stable.",
    ],
    story:
      "This role sits at the intersection of OneShield configuration and Oracle PL/SQL engineering. The work is less about greenfield features and more about making policy transactions behave predictably under real-world constraints. I spend most of my time tracing lifecycle logic, debugging rules, and protecting data integrity so production output stays consistent and explainable.",
    stack: ["Oracle PL/SQL", "OneShield", "Business Rules", "Data Workflows"],
  },
  {
    id: "freelance",
    role: "Freelance Web Developer",
    company: "Client Delivery",
    period: "2024 - Present",
    type: "Freelance",
    bullets: [
      "Deliver React and TypeScript frontends for dashboards, internal tools, and marketing sites with reusable component systems for clean handoff.",
      "Build Node/Express APIs or integrations when needed so data contracts stay predictable in production.",
      "Own end-to-end delivery from UI validation through deployment with focus on performance and UX polish.",
      "Partner with clients to scope features and iterate quickly, reducing rework and ambiguity.",
    ],
    story:
      "Client delivery work is about translating ambiguous goals into something shippable. I focus on clean UI architecture, predictable data contracts, and steady iteration so teams can keep momentum without compromising quality. The goal is reliable delivery, not flashy demos.",
    stack: ["React", "TypeScript", "Node.js", "APIs"],
  },
];

export const experienceEducation: EducationItem[] = [
  {
    id: "raf-bsc",
    title: "B.Sc. Software Engineering",
    institution: "RAF",
    period: "2023 - Present",
    summary:
      "Focused on systems engineering, databases, and real-world software architecture through intensive project work.",
    story:
      "The program emphasizes systems thinking: databases, operating systems, and architecture decisions grounded in performance and correctness. Coursework is applied through projects that reinforce low-level fundamentals alongside modern software structure.",
    highlights: [
      "Operating Systems",
      "Database Systems",
      "Algorithms & Data Structures",
      "Computer Networks",
    ],
  },
  {
    id: "gifted-hs",
    title: "High School Diploma (IT - Gifted Program)",
    institution: "Gimnazija Bora Stankovic, Vranje",
    period: "2019 - 2023",
    summary:
      "Selected for a specialized informatics and computing track with advanced coursework and competitions.",
    story:
      "A specialized IT track focused on algorithms, systems thinking, and competitive problem solving. The curriculum built a strong foundation in programming fundamentals and analytical reasoning.",
    highlights: [
      "Competitive programming background",
      "Advanced informatics curriculum",
      "Programming foundations in C/C++",
    ],
  },
  {
    id: "academic-projects",
    title: "Selected Academic Projects",
    institution: "Systems & Data Engineering",
    period: "2023 - Present",
    summary:
      "Hands-on projects spanning database engines, OS internals, and structured application architecture.",
    story:
      "Projects cover core systems topics such as query execution, indexing strategies, kernel-level changes, and structured application architecture. The focus is always on correctness, performance tradeoffs, and clean design.",
    highlights: [
      "Query engine extensions (SimpleDB-style)",
      "Spatial indexing (Hilbert / R-tree)",
      "xv6 kernel feature work",
      "JavaFX + Spring Boot system design",
      "ANTLR-based language parsing",
    ],
  },
  {
    id: "cae-c1",
    title: "Certificate in Advanced English (C1)",
    institution: "Cambridge English Assessment",
    period: "2022",
    summary: "Advanced professional English certification.",
    story:
      "Professional English certification that supports clear technical communication in collaborative, cross-functional environments.",
    highlights: ["C1 proficiency", "Academic and technical English"],
  },
];

export const experienceSection: ExperienceSection = {
  eyebrow: "Experience",
  title: "Work + Education",
  description: positioning,
  tabs: [
    { id: "work", label: "Work" },
    { id: "education", label: "Education" },
  ],
};
