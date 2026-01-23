import { Briefcase, Camera, Code, Mail, MapPin, type LucideIcon } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { hero, heroSnapshot, socialLinks } from "@/data";
import type { SocialLink } from "@/types/social";
import { cn } from "@/lib/utils";

const iconMap: Record<SocialLink["icon"], LucideIcon> = {
  github: Code,
  linkedin: Briefcase,
  instagram: Camera,
  email: Mail,
};

export default function Hero() {
  return (
    <Section id="hero">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          {/* tagline */}
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5">
            <span className="type-xs font-medium uppercase tracking-[0.22em] text-white/60">
              {hero.tagline}
            </span>
          </div>

          <h1 className="type-4xl mt-6 font-serif leading-[1.05] text-white">
            {hero.name}
          </h1>

          <p className="type-lg mx-auto mt-3 max-w-2xl text-white/70">
            {hero.role}
          </p>

          <p className="type-base mx-auto mt-7 max-w-3xl leading-relaxed text-white/70">
            {hero.summary}
          </p>

          {/* signal strip (replaces right panel) */}
          {heroSnapshot?.length ? (
            <div className="mx-auto mt-9 max-w-4xl rounded-3xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl">
              <div className="grid grid-cols-1 divide-y divide-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                {heroSnapshot.map((line, idx) => (
                  <div
                    key={line.label}
                    className={cn(
                      "px-1 py-4 sm:px-5 sm:py-2",
                      idx === 0 && "sm:py-1",
                    )}
                  >
                    <p className="type-xs uppercase tracking-[0.3em] text-white/40">
                      {line.label}
                    </p>
                    <p
                      className={cn(
                        "type-sm mt-2 leading-relaxed text-white/70",
                        idx === 0 && "type-base font-serif text-white/85",
                      )}
                    >
                      {line.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          {/* CTA */}
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Button
              href={hero.secondaryCta.href}
              variant="outline"
              className="text-white"
            >
              {hero.secondaryCta.label}
            </Button>
          </div>

          {/* location */}
          <div className="type-xs mt-6 flex items-center justify-center gap-2 uppercase tracking-[0.22em] text-white/50">
            <MapPin className="h-3.5 w-3.5" />
            {hero.availability}
          </div>

          {/* socials */}
          <div className="mt-6 flex items-center justify-center gap-3">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon];
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className={cn(
                    "grid h-10 w-10 place-items-center rounded-full border border-white/10",
                    "text-white/60 transition",
                    "hover:border-white/25 hover:bg-white/[0.03] hover:text-white",
                  )}
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
