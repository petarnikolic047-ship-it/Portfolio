import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { Container } from "@/components/ui/container";
import { brand, navItems } from "@/data";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-transparent transition",
        isScrolled && "border-white/10 bg-black/80 backdrop-blur",
      )}
    >
      <Container className="grid h-16 max-w-5xl grid-cols-[auto_1fr_auto] items-center">
        <a
          href="#hero"
          className="type-lg group inline-flex items-center gap-3 font-serif text-white"
          aria-label="Jump to top"
        >
          <span className="type-xs grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 tracking-[0.3em] text-white/70 transition group-hover:border-white/30 group-hover:text-white">
            {brand.monogram}
          </span>
          <span className="type-sm hidden uppercase tracking-[0.3em] text-white/60 sm:inline">
            {brand.label}
          </span>
        </a>

        <nav
          className="hidden justify-self-center md:flex md:items-center md:gap-6"
          aria-label="Primary"
        >
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="type-xs uppercase tracking-[0.3em] text-white/60 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center">
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/70 transition hover:border-white/30 hover:text-white md:hidden"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </Container>

      {isOpen && (
        <div className="border-t border-white/10 bg-black/90 md:hidden">
          <Container className="flex flex-col gap-4 py-6 max-w-5xl">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="type-xs uppercase tracking-[0.3em] text-white/70 transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </Container>
        </div>
      )}
    </header>
  );
}
