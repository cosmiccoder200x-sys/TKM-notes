import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import ModuleView from "@/components/ModuleView";
import { subjects, findSubject } from "@/lib/content";
import registry from "@/lib/notes";

export function generateStaticParams() {
  return subjects.map((s) => ({ semester: s.semesterId, subject: s.slug }));
}

export default function SubjectPage({ params }: { params: { semester: string; subject: string } }) {
  const subject = findSubject(params.semester, params.subject);
  if (!subject) notFound();

  const content = registry[subject.code];

  return (
    <>
      <Header />
      <main className="max-w-2xl mx-auto px-4 py-6">
        <Link href={`/${subject.semesterId}`} className="eyebrow inline-block mb-3">
          ← {subject.semesterId.toUpperCase()}
        </Link>
        <div className="mb-5">
          <span className="eyebrow">{subject.code} · {subject.credits} credits</span>
          <h1 className="font-display font-semibold text-2xl text-ink-hi leading-tight mt-1">
            {subject.name}
          </h1>
        </div>

        {!content && (
          <div className="card p-5 text-center">
            <p className="text-sm text-ink-hi mb-1">Notes for this subject haven't been written yet.</p>
            <p className="text-xs text-ink-lo">Ask for it by name and it'll be added module by module.</p>
          </div>
        )}

        {content && (
          <>
            <div className="flex gap-1.5 mb-4 overflow-x-auto no-scrollbar">
              {content.modules.map((m, i) => (
                <a
                  key={m.id}
                  href={`#${m.id}`}
                  className="shrink-0 font-mono text-[11px] text-ink-lo hover:text-signal border border-bg-border rounded-card px-2.5 py-1"
                >
                  M{i + 1}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              {content.modules.map((m) => (
                <ModuleView key={m.id} module={m} />
              ))}
            </div>
          </>
        )}
      </main>
    </>
  );
}
