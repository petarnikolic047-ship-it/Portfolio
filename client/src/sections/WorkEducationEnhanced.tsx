import { useEffect, useState } from "react";

import { SectionLayout } from "@/components/SectionLayout";
import { experienceData } from "@/data";
import { EducationGrid } from "@/sections/experience/EducationGrid";
import { ExperienceList } from "@/sections/experience/ExperienceList";
import { ExperienceTabs } from "@/sections/experience/ExperienceTabs";
import type { ExperienceTab } from "@/types/experience";

type TabId = ExperienceTab["id"];

const workIds = new Set(experienceData.tabs.work.map((item) => item.id));
const educationIds = new Set(
  experienceData.tabs.education.map((item) => item.id),
);

export default function WorkEducationEnhanced() {
  const [tab, setTab] = useState<TabId>("work");
  const [expandedWorkId, setExpandedWorkId] = useState<string | null>(null);
  const [expandedEducationId, setExpandedEducationId] = useState<string | null>(
    null,
  );
  const updateHash = (id?: string) => {
    const nextHash = id ? `#experience=${id}` : "#experience";
    if (window.location.hash === nextHash) {
      return;
    }
    window.history.replaceState(null, "", nextHash);
  };

  const handleTabChange = (nextTab: TabId) => {
    setTab(nextTab);
    setExpandedWorkId(null);
    setExpandedEducationId(null);
    updateHash();
  };

  const handleWorkToggle = (id: string | null) => {
    setTab("work");
    setExpandedEducationId(null);
    setExpandedWorkId(id);
    updateHash(id ?? undefined);
  };

  const handleEducationToggle = (id: string | null) => {
    setTab("education");
    setExpandedWorkId(null);
    setExpandedEducationId(id);
    updateHash(id ?? undefined);
  };

  useEffect(() => {
    const syncFromHash = () => {
      const hash = decodeURIComponent(window.location.hash);
      if (!hash.startsWith("#experience")) {
        return;
      }

      const [, rawId] = hash.split("=");
      if (!rawId) {
        setExpandedWorkId(null);
        setExpandedEducationId(null);
        return;
      }

      if (workIds.has(rawId)) {
        setTab("work");
        setExpandedWorkId(rawId);
        setExpandedEducationId(null);
        document.getElementById("experience")?.scrollIntoView?.({
          block: "start",
        });
        return;
      }

      if (educationIds.has(rawId)) {
        setTab("education");
        setExpandedEducationId(rawId);
        setExpandedWorkId(null);
        document.getElementById("experience")?.scrollIntoView?.({
          block: "start",
        });
      }
    };

    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, []);

  return (
    <SectionLayout
      id="experience"
      titleId="experience-title"
      pill={experienceData.section.eyebrow}
      title={experienceData.section.title}
      description={experienceData.section.description}
      className="relative overflow-hidden"
    >
      <div className="mt-6 flex justify-center">
        <ExperienceTabs
          value={tab}
          onChange={handleTabChange}
          tabs={experienceData.section.tabs}
        />
      </div>

      <div
        key={tab}
        className="mx-auto mt-8 max-w-5xl tab-fade"
        role="tabpanel"
        id={`experience-${tab}`}
      >
        {tab === "work" ? (
          <ExperienceList
            items={experienceData.tabs.work}
            expandedId={expandedWorkId}
            onToggle={handleWorkToggle}
          />
        ) : (
          <EducationGrid
            items={experienceData.tabs.education}
            expandedId={expandedEducationId}
            onToggle={handleEducationToggle}
          />
        )}
      </div>
    </SectionLayout>
  );
}
