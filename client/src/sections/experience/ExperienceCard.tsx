import { ChevronDown } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { ExperienceItem } from "@/types/experience";

type ExperienceCardProps = {
  item: ExperienceItem;
  isExpanded: boolean;
  onToggle: () => void;
};

export function ExperienceCard({
  item,
  isExpanded,
  onToggle,
}: ExperienceCardProps) {
  const isInforce = item.id === "inforce";
  const themeClass = isInforce
    ? "inforce-theme"
    : "rounded-2xl border border-white/10 bg-white/[0.02] p-4";

  return (
    <Card
      role="button"
      tabIndex={0}
      aria-expanded={isExpanded}
      aria-controls={`work-story-${item.id}`}
      onClick={onToggle}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onToggle();
        }
      }}
      className={cn(
        "space-y-6 shadow-none transition border-white/0",
        "cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30",
        isInforce && "inforce-card",
      )}
    >
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="space-y-3">
          {item.type ? (
            <Badge tone="neutral" className={isInforce ? "inforce-badge" : ""}>
              {item.type}
            </Badge>
          ) : null}
          <div className="space-y-1">
            <h3 className="type-2xl font-serif text-white leading-tight">
              {item.role}
            </h3>
            <p className="type-sm text-white/70">{item.company}</p>
          </div>
        </div>
        <p className="type-xs uppercase tracking-[0.3em] text-white/40">
          {item.period}
        </p>
      </div>

      {item.theme ? (
        <div className={themeClass}>
          <p
            className={`type-xs uppercase tracking-[0.4em] ${
              isInforce ? "inforce-theme-eyebrow" : "text-white/50"
            }`}
          >
            {item.theme.eyebrow}
          </p>
          <p
            className={`type-lg mt-2 font-serif ${
              isInforce ? "inforce-theme-headline" : "text-white"
            }`}
          >
            {item.theme.headline}
          </p>
          <p
            className={`type-xs mt-1 uppercase tracking-[0.3em] ${
              isInforce ? "inforce-theme-subline" : "text-white/45"
            }`}
          >
            {item.theme.subline}
          </p>
        </div>
      ) : null}

      <ul className="type-sm space-y-3 text-white/70">
        {item.bullets.map((bullet, index) => (
          <li key={`${item.id}-${index}`} className="flex gap-3">
            <span
              aria-hidden
              className="mt-2 h-1.5 w-1.5 rounded-full bg-white/30"
            />
            <p>{bullet}</p>
          </li>
        ))}
      </ul>

      {item.stack && item.stack.length > 0 ? (
        <div className="flex flex-wrap gap-2">
          {item.stack.map((tag) => (
            <Badge
              key={tag}
              tone="neutral"
              className={isInforce ? "inforce-tag" : ""}
            >
              {tag}
            </Badge>
          ))}
        </div>
      ) : null}

      <div
        className={cn(
          "type-sm overflow-hidden text-white/70 transition-all duration-300",
          isExpanded ? "max-h-64 opacity-100" : "max-h-0 opacity-0",
        )}
        id={`work-story-${item.id}`}
      >
        {item.story ? (
          <p className="pt-2 leading-relaxed text-white/65">{item.story}</p>
        ) : null}
      </div>

      <div className="type-xs flex items-center justify-between uppercase tracking-[0.3em] text-white/45">
        <span>{isExpanded ? "Collapse" : "View story"}</span>
        <ChevronDown
          className={cn(
            "h-4 w-4 transition-transform",
            isExpanded && "rotate-180",
          )}
        />
      </div>
    </Card>
  );
}
