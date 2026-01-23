import type { SectionIntro } from "@/types/section";
import type { SkillCategory } from "@/types/skills";

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    title: "Languages",
    items: ["TypeScript", "JavaScript", "SQL/PLSQL", "Java", "Python", "C"],
  },
  {
    id: "frontend",
    title: "Frontend",
    items: ["React", "TypeScript", "Tailwind CSS", "Vite", "Accessibility"],
  },
  {
    id: "backend-data",
    title: "Backend & Data",
    items: [
      "Oracle PL/SQL",
      "Business Rules",
      "Transactional Workflows",
      "API Design",
      "Performance Tuning",
    ],
  },
  {
    id: "tools",
    title: "Tools",
    items: ["Git", "Docker", "Postman", "Jira", "Linux"],
  },
];

export const skillsSection: SectionIntro = {
  eyebrow: "Skills",
  title: "Core Stack",
  description: "Focused on data-heavy backend logic and clean, maintainable UI.",
};
