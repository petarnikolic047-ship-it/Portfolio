import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type BadgeTone = "neutral" | "accent";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  tone?: BadgeTone;
};

const toneClasses: Record<BadgeTone, string> = {
  neutral: "border-white/10 text-white/60",
  accent: "border-white/20 text-white/80",
};

export function Badge({
  className,
  tone = "neutral",
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "type-xs inline-flex items-center gap-2 rounded-full border bg-white/5 px-3 py-1 uppercase tracking-[0.25em]",
        toneClasses[tone],
        className,
      )}
      {...props}
    />
  );
}
