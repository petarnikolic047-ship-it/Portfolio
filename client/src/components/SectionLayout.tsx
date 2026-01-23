import type { ReactNode } from "react";

import { SectionHeader } from "@/components/SectionHeader";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/utils";

type SectionLayoutProps = {
  id: string;
  titleId?: string;
  eyebrow?: string;
  pill?: string;
  title: string;
  description?: string;
  className?: string;
  headerClassName?: string;
  children: ReactNode;
};

export function SectionLayout({
  id,
  titleId,
  eyebrow,
  pill,
  title,
  description,
  className,
  headerClassName,
  children,
}: SectionLayoutProps) {
  return (
    <Section id={id} aria-labelledby={titleId} className={cn(className)}>
      <Container>
        <SectionHeader
          titleId={titleId}
          eyebrow={eyebrow}
          pill={pill}
          title={title}
          description={description}
          className={headerClassName}
        />
        {children}
      </Container>
    </Section>
  );
}
