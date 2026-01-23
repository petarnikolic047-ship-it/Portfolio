export type HeroCta = {
  label: string;
  href: string;
};

export type HeroContent = {
  name: string;
  role: string;
  tagline: string;
  summary: string;
  availability: string;
  email: string;
  secondaryCta: HeroCta;
};

export type HeroSnapshotLine = {
  label: string;
  value: string;
};
