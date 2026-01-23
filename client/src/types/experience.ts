import type { SectionIntro } from "./section";

export type ExperienceItem = {
  id: string;
  role: string;
  company: string;
  period: string;
  type?: string;
  bullets: string[];
  story?: string;
  stack?: string[];
  theme?: {
    eyebrow: string;
    headline: string;
    subline: string;
  };
};

export type EducationItem = {
  id: string;
  title: string;
  institution: string;
  period: string;
  summary?: string;
  story?: string;
  highlights?: string[];
};

export type ExperienceTab = {
  id: "work" | "education";
  label: string;
};

export type ExperienceSection = SectionIntro & {
  tabs: ExperienceTab[];
};
