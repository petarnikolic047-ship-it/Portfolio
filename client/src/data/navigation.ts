import type { Brand, NavItem } from "@/types/navigation";

export const navItems: NavItem[] = [
  { id: "hero", label: "Home", href: "#hero" },
  { id: "experience", label: "Experience", href: "#experience" },
  { id: "skills", label: "Skills", href: "#skills" },
];

export const brand: Brand = {
  monogram: "PN",
  label: "Portfolio",
};
