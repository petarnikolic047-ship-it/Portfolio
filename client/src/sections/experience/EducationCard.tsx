import { ChevronDown } from "lucide-react";

import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
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
  return (
    <Card
      role="button"
      tabIndex={0}
      aria-expanded={isExpanded}
      aria-controls={`edu-story-${item.id}`}
      onClick={onToggle}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onToggle();
        }
      }}
      className={cn(
        "space-y-4 shadow-none transition border-white/0",
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

      {item.summary ? (
        <p className="type-sm text-white/65">{item.summary}</p>
      ) : null}

      <div
        className={cn(
          "type-sm overflow-hidden text-white/65 transition-all duration-300",
          isExpanded ? "max-h-40 opacity-100" : "max-h-0 opacity-0",
        )}
        id={`edu-story-${item.id}`}
      >
        {item.story ? (
          <p className="pt-2 leading-relaxed text-white/65">{item.story}</p>
        ) : null}
      </div>

      {item.highlights && item.highlights.length > 0 ? (
        <div className="flex flex-wrap gap-2">
          {item.highlights.map((highlight) => (
            <Badge key={highlight} tone="neutral">
              {highlight}
            </Badge>
          ))}
        </div>
      ) : null}

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
