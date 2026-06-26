"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { searchAll, SearchHit } from "@/lib/search";

export default function SearchBar({ compact = false }: { compact?: boolean }) {
  const [query, setQuery] = useState("");
  const [hits, setHits] = useState<SearchHit[]>([]);
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (boxRef.current && !boxRef.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  function onChange(v: string) {
    setQuery(v);
    setHits(v.trim() ? searchAll(v) : []);
    setOpen(true);
  }

  function goTo(hit: SearchHit) {
    setOpen(false);
    setQuery("");
    const path = `/${hit.semesterId}/${hit.subjectSlug}${hit.moduleId ? `#${hit.moduleId}` : ""}`;
    router.push(path);
  }

  return (
    <div ref={boxRef} className="relative w-full">
      <input
        value={query}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => query && setOpen(true)}
        placeholder={compact ? "Search…" : "Search subjects, definitions, concepts…"}
        className="w-full bg-bg-surface border border-bg-border rounded-card px-3 py-1.5 text-sm text-ink-hi placeholder:text-ink-faint focus:border-signal outline-none"
      />
      {open && hits.length > 0 && (
        <div className="absolute mt-1.5 w-full max-h-72 overflow-y-auto bg-bg-raised border border-bg-border rounded-card shadow-xl z-30">
          {hits.map((hit, i) => (
            <button
              key={i}
              onClick={() => goTo(hit)}
              className="w-full text-left px-3 py-2 hover:bg-bg-surface border-b border-bg-border last:border-0"
            >
              <div className="text-[11px] font-mono text-signal uppercase tracking-wide">
                {hit.matchType} · {hit.subjectCode}
              </div>
              <div className="text-sm text-ink-hi truncate">{hit.snippet}</div>
            </button>
          ))}
        </div>
      )}
      {open && query.trim() && hits.length === 0 && (
        <div className="absolute mt-1.5 w-full bg-bg-raised border border-bg-border rounded-card px-3 py-2 text-sm text-ink-lo z-30">
          No matches in notes added so far.
        </div>
      )}
    </div>
  );
}
