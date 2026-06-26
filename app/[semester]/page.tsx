import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import SubjectCard from "@/components/SubjectCard";
import { semesters, subjectsForSemester } from "@/lib/content";

export function generateStaticParams() {
  return semesters.map((s) => ({ semester: s.id }));
}

export default function SemesterPage({ params }: { params: { semester: string } }) {
  const semester = semesters.find((s) => s.id === params.semester);
  if (!semester) notFound();

  const subjects = subjectsForSemester(semester.id);

  return (
    <>
      <Header />
      <main className="max-w-2xl mx-auto px-4 py-6">
        <Link href="/" className="eyebrow inline-block mb-3">← all semesters</Link>
        <h1 className="font-display font-semibold text-2xl text-ink-hi mb-5">{semester.label}</h1>

        <div className="flex flex-col gap-3">
          {subjects.map((subj) => (
            <SubjectCard key={subj.code} subject={subj} />
          ))}
        </div>
      </main>
    </>
  );
}
