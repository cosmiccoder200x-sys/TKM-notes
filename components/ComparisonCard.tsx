import { ComparisonCard as ComparisonCardType } from "@/lib/types";

export default function ComparisonCard({ card }: { card: ComparisonCardType }) {
  return (
    <div className="border border-bg-border rounded-card overflow-hidden">
      <div className="px-3 pt-3">
        <div className="eyebrow mb-1">why this, not that</div>
        <div className="text-sm font-semibold text-ink-hi mb-1">{card.title}</div>
        <p className="text-xs text-ink-lo leading-relaxed mb-3">{card.scenario}</p>
      </div>

      <div className="grid grid-cols-2 gap-px bg-bg-border">
        <div className="bg-bg-surface p-2.5">
          <div className="font-mono text-[11px] text-signal mb-1">{card.a.label}</div>
          <div className="text-sm text-ink-hi leading-relaxed">{card.a.body}</div>
        </div>
        <div className="bg-bg-surface p-2.5">
          <div className="font-mono text-[11px] text-weight mb-1">{card.b.label}</div>
          <div className="text-sm text-ink-hi leading-relaxed">{card.b.body}</div>
        </div>
      </div>

      <div className="px-3 py-2.5 bg-critical/5 border-t border-bg-border">
        <span className="font-mono text-[11px] text-critical">key difference — </span>
        <span className="text-sm text-ink-hi">{card.takeaway}</span>
      </div>
    </div>
  );
}
