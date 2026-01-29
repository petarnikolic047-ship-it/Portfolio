import type { HeroContent, HeroSnapshotLine } from "@/types/hero";
import type { SocialLink } from "@/types/social";

export const primaryEmail = "petar.nikolic.04.7@gmail.com";

export const positioning =
  "Software engineer building enterprise insurance systems (Oracle PL/SQL) and modern React/TypeScript frontends.";

export const hero: HeroContent = {
  name: "Petar Nikolić",
  role: "Software / Configuration Engineer - Enterprise Insurance Systems",
  tagline: "Enterprise insurance systems | Transactional workflows | Data integrity",
  summary:
    "I build and maintain enterprise insurance platforms where correctness matters more than flash. My day-to-day is designing and debugging policy lifecycle workflows (renewals, endorsements, rules-driven changes), tracing transactional behavior across complex object models, and keeping production data stable under real-world volume. I work deep in Oracle/PL/SQL business logic and data workflows, and I modernize React/TypeScript UI delivery when needed - with a focus on reliability, performance, and clean handoff.",
  availability: "Belgrade, Serbia | Cleveland, Ohio",
  email: primaryEmail,
  secondaryCta: {
    label: "Contact",
    href: `mailto:${primaryEmail}`,
  },
};

export const heroSnapshot: HeroSnapshotLine[] = [
  {
    label: "Snapshot",
    value: "Reliable enterprise systems that do not break under scale.",
  },
  {
    label: "Focus",
    value: "Policy workflows, rating/rules integrity, production-safe delivery.",
  },
  {
    label: "Current",
    value: "Renewals, rules debugging, UI modernization in the OneShield ecosystem.",
  },
];

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/petar-nikolic125",
    icon: "github",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/petar-nikolic-957875345/",
    icon: "linkedin",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/nfs.u.2",
    icon: "instagram",
  },
  {
    label: "Email",
    href: `mailto:${primaryEmail}`,
    icon: "email",
  },
];
