/** Link metadata for hero CTAs. */
export type HeroCta = {
  label: string;
  href: string;
};

/** Primary hero copy and actions. */
export type HeroContent = {
  name: string;
  role: string;
  tagline: string;
  summary: string;
  availability: string;
  email: string;
  secondaryCta: HeroCta;
};

/** One line in the hero snapshot strip. */
export type HeroSnapshotLine = {
  label: string;
  value: string;
};
