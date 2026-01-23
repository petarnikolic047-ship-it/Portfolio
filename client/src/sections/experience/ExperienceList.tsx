import type { ExperienceItem } from "@/types/experience";
import { ExperienceCard } from "./ExperienceCard";

type ExperienceListProps = {
  items: ExperienceItem[];
  expandedId: string | null;
  onToggle: (id: string | null) => void;
};

export function ExperienceList({
  items,
  expandedId,
  onToggle,
}: ExperienceListProps) {
  return (
    <div className="space-y-5">
      {items.map((item, index) => (
        <div
          key={item.id}
          className="animate-fade-up"
          style={{ animationDelay: `${index * 70}ms` }}
        >
          <ExperienceCard
            item={item}
            isExpanded={expandedId === item.id}
            onToggle={() => onToggle(expandedId === item.id ? null : item.id)}
          />
        </div>
      ))}
    </div>
  );
}
