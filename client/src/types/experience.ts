import type { SectionIntro } from "./section";

/** Work experience entry. */
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

/** Education or certification entry. */
export type EducationItem = {
  id: string;
  title: string;
  institution: string;
  period: string;
  summary?: string;
  story?: string;
  highlights?: string[];
};

/** Tabs for experience section. */
export type ExperienceTab = {
  id: "work" | "education";
  label: string;
};

/** Experience section copy + tabs. */
export type ExperienceSection = SectionIntro & {
  tabs: ExperienceTab[];
};
