import type { SectionIntro } from "@/types/section";
import type { SkillCategory } from "@/types/skills";

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    title: "Languages",
    items: ["Java", "SQL", "PL/SQL", "TypeScript", "JavaScript", "Python", "C"],
  },
  {
    id: "frontend",
    title: "Frontend",
    items: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Component-Driven UI",
      "Accessibility",
      "Vite",
    ],
  },
  {
    id: "backend-data",
    title: "Backend & Data",
    items: [
      "Oracle PL/SQL",
      "API Integrations",
      "Business Rules",
      "Transactional Workflows",
      "Data Integrity",
      "Performance Tuning",
    ],
  },
  {
    id: "tools",
    title: "Tools",
    items: ["Git", "Docker", "Postman", "Jira", "Linux","AWS"],
  },
];

export const skillsSection: SectionIntro = {
  eyebrow: "Skills",
  title: "Core Stack",
  description:
    "Backend-first (Java + Oracle PL/SQL/SQL) with React (JS/TS) + Tailwind for maintainable UI and migrations.",
};
