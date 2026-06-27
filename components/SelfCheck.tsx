"use client";

import { useState } from "react";
import { SelfCheckItem } from "@/lib/types";

export default function SelfCheck({ item, index }: { item: SelfCheckItem; index: number }) {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="border border-bg-border rounded-card p-3">
      <div className="flex items-start gap-2 mb-2">
        <span className="font-mono text-[11px] text-ink-faint shrink-0 mt-0.5">Q{index + 1}</span>
        <span className="text-sm text-ink-hi leading-relaxed">{item.question}</span>
      </div>
      {!revealed ? (
        <button
          onClick={() => setRevealed(true)}
          className="text-xs font-mono text-signal hover:text-ink-hi ml-6"
        >
          Tap to check yourself →
        </button>
      ) : (
        <div className="ml-6 bg-bg-raised border border-bg-border rounded-card p-2.5">
          <div className="text-sm text-ink-hi leading-relaxed">{item.answer}</div>
          <button
            onClick={() => setRevealed(false)}
            className="text-xs text-ink-faint hover:text-ink-lo mt-1.5"
          >
            Hide
          </button>
        </div>
      )}
    </div>
  );
}
