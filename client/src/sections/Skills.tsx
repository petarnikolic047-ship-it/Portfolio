import { SectionLayout } from "@/components/SectionLayout";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { skillCategories, skillsSection } from "@/data";

export default function Skills() {
  return (
    <SectionLayout
      id="skills"
      titleId="skills-title"
      pill={skillsSection.eyebrow}
      title={skillsSection.title}
      description={skillsSection.description}
    >
      <div className="mx-auto mt-8 max-w-5xl">
        <div className="grid gap-5 md:grid-cols-2">
          {skillCategories.map((category) => (
            <Card
              key={category.id}
              className="space-y-4 shadow-none border-white/0"
            >
              <h3 className="type-lg font-serif text-white leading-tight">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <Badge key={item} tone="neutral">
                    {item}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </SectionLayout>
  );
}
