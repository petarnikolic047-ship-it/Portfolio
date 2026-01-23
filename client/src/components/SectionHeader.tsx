import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  titleId?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  pill?: string;
  className?: string;
};

export function SectionHeader({
  titleId,
  eyebrow,
  title,
  description,
  pill,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("mx-auto max-w-4xl text-center", className)}>
      {pill ? (
        <div className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5">
          <span className="type-xs font-medium uppercase tracking-[0.22em] text-white/60">
            {pill}
          </span>
        </div>
      ) : eyebrow ? (
        <p className="type-xs uppercase tracking-[0.4em] text-white/50">
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={titleId}
        className="type-3xl mt-5 font-serif text-white leading-tight"
      >
        {title}
      </h2>
      {description ? (
        <p className="type-base mx-auto mt-3 max-w-2xl text-white/60">
          {description}
        </p>
      ) : null}
    </div>
  );
}
