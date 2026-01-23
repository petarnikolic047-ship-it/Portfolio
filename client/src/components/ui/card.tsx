import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/5 bg-white/[0.02] p-6 shadow-[var(--shadow-card)] backdrop-blur-sm",
        className,
      )}
      {...props}
    />
  );
}
