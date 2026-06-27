"use client";

import { useState } from "react";
import { WorkedExample } from "@/lib/types";

export default function WorkedExampleCard({ example }: { example: WorkedExample }) {
  const [revealed, setRevealed] = useState(0); // how many steps are shown
  const [showAnswer, setShowAnswer] = useState(false);
  const allStepsShown = revealed >= example.steps.length;

  function reset() {
    setRevealed(0);
    setShowAnswer(false);
  }

  return (
    <div className="border border-bg-border rounded-card overflow-hidden">
      <div className="px-3 pt-3">
        <div className="eyebrow mb-1">worked example</div>
        <div className="text-sm font-semibold text-ink-hi mb-1.5">{example.title}</div>
        <p className="text-sm text-ink-hi leading-relaxed mb-3">{example.problem}</p>
      </div>

      <div className="px-3 flex flex-col gap-2">
        {example.steps.slice(0, revealed).map((s, i) => (
          <div key={i} className="bg-bg-raised border border-bg-border rounded-card p-2.5">
            <div className="font-mono text-[11px] text-signal mb-1">{s.label}</div>
            <div className="text-sm text-ink-hi leading-relaxed">{s.content}</div>
          </div>
        ))}
      </div>

      <div className="px-3 pb-3 pt-2 flex flex-col gap-2">
        {!allStepsShown && (
          <button
            onClick={() => setRevealed((r) => r + 1)}
            className="text-sm font-mono py-2 rounded-card border border-signal-dim text-signal hover:bg-signal/10 transition-colors"
          >
            Reveal step {revealed + 1} of {example.steps.length}
          </button>
        )}

        {allStepsShown && !showAnswer && (
          <button
            onClick={() => setShowAnswer(true)}
            className="text-sm font-mono py-2 rounded-card border border-weight-dim text-weight hover:bg-weight/10 transition-colors"
          >
            Reveal final answer
          </button>
        )}

        {showAnswer && (
          <div className="bg-weight/10 border border-weight-dim rounded-card p-2.5">
            <div className="font-mono text-[11px] text-weight mb-1">answer</div>
            <div className="text-sm text-ink-hi leading-relaxed">{example.answer}</div>
          </div>
        )}

        {revealed > 0 && (
          <button onClick={reset} className="text-xs text-ink-faint hover:text-ink-lo self-start">
            Reset and try again
          </button>
        )}
      </div>
    </div>
  );
}
