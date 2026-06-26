import Link from "next/link";
import { Subject } from "@/lib/types";
import registry from "@/lib/notes";

export default function SubjectCard({ subject }: { subject: Subject }) {
  const content = registry[subject.code];
  const moduleCount = content?.modules.length ?? 0;

  return (
    <Link
      href={`/${subject.semesterId}/${subject.slug}`}
      className="card p-4 flex items-start justify-between gap-3 hover:border-signal transition-colors group"
    >
      <div className="flex flex-col gap-1 min-w-0">
        <span className="eyebrow">{subject.code} · {subject.credits} cr</span>
        <span className="font-display font-semibold text-ink-hi group-hover:text-signal transition-colors leading-snug">
          {subject.name}
        </span>
      </div>
      <span
        className={`shrink-0 mt-1 text-[10px] font-mono uppercase tracking-wide px-2 py-1 rounded-card border ${
          moduleCount > 0
            ? "border-signal-dim text-signal bg-signal/10"
            : "border-bg-border text-ink-faint"
        }`}
      >
        {moduleCount > 0 ? `${moduleCount} modules` : "coming soon"}
      </span>
    </Link>
  );
}
