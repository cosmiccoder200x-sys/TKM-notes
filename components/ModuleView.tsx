"use client";

import { useState } from "react";
import { Module } from "@/lib/types";
import Diagram from "./Diagrams";
import WeightMeter from "./WeightMeter";

const SECTIONS = [
  { key: "overview", label: "Overview" },
  { key: "concepts", label: "Concepts" },
  { key: "definitions", label: "Definitions" },
  { key: "diagrams", label: "Diagrams" },
  { key: "formulas", label: "Formulas" },
  { key: "examfocus", label: "Exam Focus" },
  { key: "revision", label: "Revision" },
] as const;

type SectionKey = typeof SECTIONS[number]["key"];

export default function ModuleView({ module, defaultSection = "overview" }: { module: Module; defaultSection?: SectionKey }) {
  const [active, setActive] = useState<SectionKey>(defaultSection);

  return (
    <div id={module.id} className="card overflow-hidden">
      <div className="px-4 pt-4">
        <h3 className="font-display font-semibold text-ink-hi text-base leading-snug">{module.title}</h3>
      </div>

      {/* Section pills — horizontally scrollable on mobile */}
      <div className="flex gap-1.5 px-4 pt-3 pb-2 overflow-x-auto no-scrollbar">
        {SECTIONS.map((s) => (
          <button
            key={s.key}
            onClick={() => setActive(s.key)}
            className={`shrink-0 font-mono text-[11px] uppercase tracking-wide px-2.5 py-1 rounded-card border transition-colors ${
              active === s.key
                ? "border-signal text-signal bg-signal/10"
                : "border-bg-border text-ink-lo hover:text-ink-hi"
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>

      <div className="px-4 pb-5 pt-1">
        {active === "overview" && (
          <div className="space-y-3">
            <div>
              <div className="eyebrow mb-1">What it's about</div>
              <p className="text-sm text-ink-hi leading-relaxed">{module.overview.summary}</p>
            </div>
            <div>
              <div className="eyebrow mb-1 text-weight">Why it matters in exams</div>
              <p className="text-sm text-ink-hi leading-relaxed">{module.overview.whyItMatters}</p>
            </div>
          </div>
        )}

        {active === "concepts" && (
          <ul className="space-y-2">
            {module.coreConcepts.map((c, i) => (
              <li key={i} className="text-sm text-ink-hi leading-relaxed flex gap-2">
                <span className="text-signal shrink-0">›</span>
                <span>{c}</span>
              </li>
            ))}
          </ul>
        )}

        {active === "definitions" && (
          <div className="space-y-2.5">
            {module.definitions.map((d, i) => (
              <div key={i} className="border border-weight-dim bg-weight/5 rounded-card p-3">
                <div className="font-mono text-[12px] text-weight font-semibold mb-1">{d.term}</div>
                <div className="text-sm text-ink-hi leading-relaxed">{d.definition}</div>
              </div>
            ))}
          </div>
        )}

        {active === "diagrams" && (
          <div className="space-y-5">
            {module.diagrams.map((d, i) => (
              <div key={i}>
                <div className="text-sm font-semibold text-ink-hi mb-2">{d.title}</div>
                <div className="bg-bg-raised border border-bg-border rounded-card p-3">
                  <Diagram svgKey={d.svgKey} />
                </div>
                <div className="text-xs text-ink-lo mt-2 leading-relaxed">{d.caption}</div>
              </div>
            ))}
          </div>
        )}

        {active === "formulas" && (
          <div className="space-y-2.5">
            {module.formulas.map((f, i) => (
              <div key={i} className="border border-bg-border bg-bg-raised rounded-card p-3">
                <div className="text-[12px] text-ink-lo mb-1">{f.name}</div>
                <div className="font-mono text-[13px] text-signal leading-relaxed break-words select-all">
                  {f.expression}
                </div>
                {f.note && <div className="text-xs text-ink-lo mt-1.5 leading-relaxed">{f.note}</div>}
              </div>
            ))}
          </div>
        )}

        {active === "examfocus" && (
          <div className="space-y-2.5">
            {module.examFocus.map((q, i) => (
              <div key={i} className="border border-bg-border rounded-card p-3">
                <div className="flex items-start justify-between gap-2 mb-1.5">
                  <span className="text-sm text-ink-hi leading-relaxed">{q.question}</span>
                  <WeightMeter level={q.weightage} />
                </div>
                {q.note && <div className="text-xs text-ink-lo leading-relaxed">{q.note}</div>}
              </div>
            ))}
          </div>
        )}

        {active === "revision" && (
          <ul className="space-y-1.5">
            {module.revisionNotes.map((r, i) => (
              <li key={i} className="text-sm text-ink-hi leading-relaxed font-mono flex gap-2">
                <span className="text-critical shrink-0">•</span>
                <span>{r}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
