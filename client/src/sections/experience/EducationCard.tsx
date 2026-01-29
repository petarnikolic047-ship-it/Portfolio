import { ChevronDown } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { EducationItem } from "@/types/experience";

type EducationCardProps = {
  item: EducationItem;
  isExpanded: boolean;
  onToggle: () => void;
};

export function EducationCard({
  item,
  isExpanded,
  onToggle,
}: EducationCardProps) {
  const hasStory = Boolean(item.story && item.story.length > 0);
  return (
    <Card
      role={hasStory ? "button" : undefined}
      tabIndex={hasStory ? 0 : undefined}
      aria-expanded={hasStory ? isExpanded : undefined}
      aria-controls={hasStory ? `edu-story-${item.id}` : undefined}
      onClick={hasStory ? onToggle : undefined}
      onKeyDown={
        hasStory
          ? (event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                onToggle();
              }
            }
          : undefined
      }
      className={cn(
        "space-y-4 shadow-none transition border-white/0",
        hasStory &&
          "cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30",
      )}
    >
      <div className="space-y-1">
        <p className="type-xs uppercase tracking-[0.3em] text-white/40">
          {item.period}
        </p>
        <h3 className="type-lg font-serif text-white leading-tight">
          {item.title}
        </h3>
        <p className="type-sm text-white/70">{item.institution}</p>
      </div>

      {item.bullets.length > 0 ? (
        <ul className="type-sm space-y-3 text-white/65">
          {item.bullets.map((bullet, index) => (
            <li key={`${item.id}-summary-${index}`} className="flex gap-3">
              <span
                aria-hidden
                className="mt-2 h-1.5 w-1.5 rounded-full bg-white/30"
              />
              <p>{bullet}</p>
            </li>
          ))}
        </ul>
      ) : null}

      {hasStory ? (
        <div
          className={cn(
            "type-sm text-white/65 transition-opacity duration-300",
            isExpanded ? "opacity-100" : "opacity-0",
          )}
          id={`edu-story-${item.id}`}
          aria-hidden={!isExpanded}
        >
          {isExpanded ? (
            <div className="space-y-3 pt-2">
              {item.story?.map((paragraph, index) => (
                <p key={`${item.id}-story-${index}`}>{paragraph}</p>
              ))}
            </div>
          ) : null}
        </div>
      ) : null}

      {item.highlights && item.highlights.length > 0 ? (
        <div className="flex flex-wrap gap-2">
          {item.highlights.map((highlight) => (
            <Badge key={highlight} tone="neutral">
              {highlight}
            </Badge>
          ))}
        </div>
      ) : null}

      {hasStory ? (
        <div className="type-xs flex items-center justify-between uppercase tracking-[0.3em] text-white/45">
          <span>{isExpanded ? "Collapse" : "View story"}</span>
          <ChevronDown
            className={cn(
              "h-4 w-4 transition-transform",
              isExpanded && "rotate-180",
            )}
          />
        </div>
      ) : null}
    </Card>
  );
}
