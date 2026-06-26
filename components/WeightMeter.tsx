import { Weightage } from "@/lib/types";

const LEVELS: Record<Weightage, { bars: number; color: string; label: string }> = {
  low: { bars: 1, color: "bg-ink-faint", label: "Low" },
  medium: { bars: 2, color: "bg-weight", label: "Medium" },
  high: { bars: 3, color: "bg-critical", label: "High" },
};

export default function WeightMeter({ level }: { level: Weightage }) {
  const { bars, color, label } = LEVELS[level];
  return (
    <div className="inline-flex items-center gap-1.5" title={`${label} exam frequency`}>
      <div className="flex items-end gap-[2px] h-3">
        {[1, 2, 3].map((i) => (
          <span
            key={i}
            className={`w-[3px] rounded-sm ${i <= bars ? color : "bg-bg-border"}`}
            style={{ height: `${i * 4}px` }}
          />
        ))}
      </div>
      <span className="font-mono text-[10px] uppercase tracking-wide text-ink-lo">{label}</span>
    </div>
  );
}
