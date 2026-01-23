import type { ExperienceTab } from "@/types/experience";

type ExperienceTabsProps = {
  value: ExperienceTab["id"];
  onChange: (value: ExperienceTab["id"]) => void;
  tabs: ExperienceTab[];
};

export function ExperienceTabs({ value, onChange, tabs }: ExperienceTabsProps) {
  return (
    <div
      role="tablist"
      aria-label="Experience tabs"
      className="relative isolate inline-flex items-center rounded-full border border-white/15 bg-white/5 p-1"
    >
      <span
        className={`absolute inset-y-1 rounded-full bg-white/10 transition-all duration-500 ${
          value === "work" ? "left-1 right-1/2" : "left-1/2 right-1"
        }`}
        aria-hidden
      />
      {tabs.map((item) => (
        <button
          key={item.id}
          type="button"
          role="tab"
          aria-selected={value === item.id}
          aria-controls={`experience-${item.id}`}
          onClick={() => onChange(item.id)}
          className={`type-xs relative z-10 px-10 py-2 uppercase tracking-[0.3em] transition ${
            value === item.id ? "text-white" : "text-white/50 hover:text-white"
          }`}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
