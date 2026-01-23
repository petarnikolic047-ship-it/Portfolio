import type { EducationItem } from "@/types/experience";
import { EducationCard } from "./EducationCard";

type EducationGridProps = {
  items: EducationItem[];
  expandedId: string | null;
  onToggle: (id: string | null) => void;
};

export function EducationGrid({
  items,
  expandedId,
  onToggle,
}: EducationGridProps) {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {items.map((item, index) => (
        <div
          key={item.id}
          className="animate-fade-up"
          style={{ animationDelay: `${index * 70}ms` }}
        >
          <EducationCard
            item={item}
            isExpanded={expandedId === item.id}
            onToggle={() => onToggle(expandedId === item.id ? null : item.id)}
          />
        </div>
      ))}
    </div>
  );
}
