import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export function Section({
  className,
  ...props
}: HTMLAttributes<HTMLElement>) {
  return (
    <section
      className={cn(
        "py-[var(--section-y)] md:py-[var(--section-y-md)] lg:py-[var(--section-y-lg)] scroll-mt-24",
        className,
      )}
      {...props}
    />
  );
}
