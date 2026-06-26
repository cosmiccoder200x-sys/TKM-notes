import Link from "next/link";
import { Semester } from "@/lib/types";
import { subjectsForSemester } from "@/lib/content";
import registry from "@/lib/notes";

export default function SemesterCard({ semester }: { semester: Semester }) {
  const subs = subjectsForSemester(semester.id);
  const withNotes = subs.filter((s) => registry[s.code]).length;

  return (
    <Link
      href={`/${semester.id}`}
      className="card p-4 flex flex-col gap-1 hover:border-signal transition-colors group"
    >
      <span className="eyebrow">{subs.length} subjects</span>
      <span className="font-display font-semibold text-lg text-ink-hi group-hover:text-signal transition-colors">
        {semester.label}
      </span>
      <span className="text-xs text-ink-lo font-mono">
        {withNotes}/{subs.length} have notes
      </span>
    </Link>
  );
}
