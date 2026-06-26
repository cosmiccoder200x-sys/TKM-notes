import Link from "next/link";
import SearchBar from "./SearchBar";

export default function Header({ showSearch = true }: { showSearch?: boolean }) {
  return (
    <header className="sticky top-0 z-20 bg-bg/95 backdrop-blur border-b border-bg-border">
      <div className="max-w-2xl mx-auto px-4 py-3 flex items-center gap-3">
        <Link href="/" className="flex flex-col leading-tight">
          <span className="font-display font-semibold text-ink-hi text-[15px] tracking-tight">
            TKM <span className="text-signal">S3–S8</span> Notes
          </span>
          <span className="eyebrow">exam-focused · no distractions</span>
        </Link>
        {showSearch && (
          <div className="ml-auto flex-1 max-w-[180px]">
            <SearchBar compact />
          </div>
        )}
      </div>
    </header>
  );
}
