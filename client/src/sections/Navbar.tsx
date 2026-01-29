import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { Container } from "@/components/ui/container";
import { brand, navItems } from "@/data";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeId, setActiveId] = useState(navItems[0]?.id ?? "");

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (sections.length === 0) return;

    const updateActive = () => {
      const checkpoint = window.scrollY + window.innerHeight * 0.35;
      let current = sections[0]?.id ?? "";
      for (const section of sections) {
        if (section.offsetTop <= checkpoint) current = section.id;
      }
      setActiveId((prev) => (prev === current ? prev : current));
    };

    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);
    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50",
        // full-width glass bar
        "backdrop-blur-3xl backdrop-saturate-150",
        "transition",
        isScrolled ? "bg-black/30" : "bg-black/15",
        // subtle bottom hairline so it blends
        "border-b border-white/10",
      )}
    >
      {/* soft top glow like your reference */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
      />

      <Container className="relative flex h-16 max-w-6xl items-center">
        {/* left: brand */}
        <a
          href="#hero"
          className="group inline-flex items-center gap-4"
          aria-label="Jump to top"
          onClick={() => {
            setActiveId("hero");
            setIsOpen(false);
          }}
        >
          <span className="grid h-9 w-9 place-items-center rounded-full border border-white/12 bg-white/[0.02] text-white/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition group-hover:border-white/25 group-hover:text-white">
            <span className="type-xs tracking-[0.35em]">{brand.monogram}</span>
          </span>
          <span className="type-sm hidden uppercase tracking-[0.35em] text-white/55 transition group-hover:text-white/80 sm:inline">
            {brand.label}
          </span>
        </a>

        {/* center: links (true centered) */}
        <nav
          className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-10 md:flex"
          aria-label="Primary"
        >
          {navItems.map((item) => {
            const isActive = activeId === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                onClick={() => setActiveId(item.id)}
                className={cn(
                  "group relative type-xs uppercase tracking-[0.34em] transition",
                  isActive ? "text-white" : "text-white/55 hover:text-white",
                )}
              >
                <span>{item.label}</span>
                <span
                  aria-hidden
                  className={cn(
                    "absolute left-1/2 top-full mt-3 h-[2px] w-10 -translate-x-1/2 rounded-full transition",
                    isActive
                      ? "bg-white/85 opacity-100"
                      : "bg-white/70 opacity-0 group-hover:opacity-60",
                  )}
                />
              </a>
            );
          })}
        </nav>

        {/* right: mobile toggle */}
        <div className="ml-auto md:hidden">
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/[0.02] text-white/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition hover:border-white/25 hover:text-white"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </Container>

      {/* mobile dropdown (still glass) */}
      {isOpen && (
        <div className="border-t border-white/10 bg-black/10 backdrop-blur-3xl backdrop-saturate-150 md:hidden">
          <Container className="max-w-6xl py-5">
            <div className="flex flex-col gap-5">
              {navItems.map((item) => {
                const isActive = activeId === item.id;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={() => {
                      setActiveId(item.id);
                      setIsOpen(false);
                    }}
                    className={cn(
                      "group type-xs uppercase tracking-[0.34em] transition",
                      isActive ? "text-white" : "text-white/65 hover:text-white",
                    )}
                  >
                    <span>{item.label}</span>
                    <span
                      aria-hidden
                      className={cn(
                        "mt-3 block h-[2px] w-12 rounded-full transition",
                        isActive
                          ? "bg-white/85 opacity-100"
                          : "bg-white/70 opacity-0 group-hover:opacity-60",
                      )}
                    />
                  </a>
                );
              })}
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
