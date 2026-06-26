import Header from "@/components/Header";
import SemesterCard from "@/components/SemesterCard";
import SearchBar from "@/components/SearchBar";
import { semesters } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <Header showSearch={false} />
      <main className="max-w-2xl mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="font-display font-semibold text-2xl text-ink-hi leading-tight mb-1.5">
            Pick your semester
          </h1>
          <p className="text-sm text-ink-lo leading-relaxed">
            Exam-oriented notes for every TKM subject, S3 through S8. Built to be read the night before — no clutter.
          </p>
        </div>

        <div className="mb-6">
          <SearchBar />
        </div>

        <div className="grid grid-cols-2 gap-3">
          {semesters.map((s) => (
            <SemesterCard key={s.id} semester={s} />
          ))}
        </div>
      </main>
    </>
  );
}
