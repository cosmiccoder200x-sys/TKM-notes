# TKM S3–S8 Interactive Notes

Exam-focused, subject-wise interactive notes for TKM College of Engineering (ECE, 2024 scheme), S3–S8. One job only: help you score full marks. No chatbots, no trackers, no quizzes.

## Why this stack (read before you ask "where's the Express/Postgres backend?")

The brief asked for Node/Express + PostgreSQL. Given how you actually ship things — GitHub Desktop + Vercel, no terminal — that stack adds real friction for very little benefit on a personal notes site:

- **Next.js API routes already are a Node backend.** A separate Express server would mean two deployments instead of one.
- **Content lives as typed TypeScript data files** (`lib/notes/*.ts`) instead of a database for v1. Zero infra, zero env vars, zero migrations — push to GitHub, Vercel deploys it. This is also exactly how you already ship HabitOS etc.
- **A real Postgres-backed admin (Phase 2)** is still totally possible later — see "Upgrading to a database" below — but isn't needed to get a fast, working, editable notes site today.

## Project structure

```
app/
  page.tsx                    → home: semester grid + search
  [semester]/page.tsx         → subject list for one semester
  [semester]/[subject]/page.tsx → module notes viewer
  layout.tsx, globals.css     → dark theme shell, fonts
components/
  Header.tsx, SearchBar.tsx
  SemesterCard.tsx, SubjectCard.tsx
  ModuleView.tsx              → renders the 7 fixed sections (tabs)
  Diagrams.tsx                → named inline-SVG diagrams (no image hosting needed)
  WeightMeter.tsx             → exam-frequency indicator (low/med/high)
lib/
  types.ts                    → the content data model
  content.ts                  → semester + subject metadata (all of S3–S8)
  notes/                      → ONE FILE PER SUBJECT, this is where content lives
    index.ts                  → registry mapping subject code → its content file
    data-structures-and-algorithms.ts → fully written example (all 5 modules)
docs/
  syllabus-reference.txt      → extracted KTU syllabus (course outcomes, modules,
                                 textbooks) for every S3–S7 subject — use this as the
                                 source of truth when writing new subject content
```

## Every module always has exactly 7 sections

`Module` in `lib/types.ts` enforces this — there is no way to add a module without all 7:

1. `overview` — 2-minute summary + why it matters in exams
2. `coreConcepts` — bullet points, exam wording
3. `definitions` — must-memorize, card format
4. `diagrams` — references a named SVG in `components/Diagrams.tsx`
5. `formulas` — copy-friendly, monospace
6. `examFocus` — real KTU-style questions tagged Low/Medium/High frequency
7. `revisionNotes` — one-page, night-before-the-exam format

## Adding a new subject's notes

1. Open `docs/syllabus-reference.txt`, find the subject's module breakdown.
2. Copy `lib/notes/data-structures-and-algorithms.ts` as a template.
3. Fill in all 7 sections per module, save as `lib/notes/<subject-slug>.ts`.
4. Register it in `lib/notes/index.ts`:
   ```ts
   import myNewSubject from "./my-new-subject";
   const registry = {
     "24ERP304": dsa,
     "24XXXXXX": myNewSubject,   // ← add this line
   };
   ```
5. That's it — the subject page, search, and "coming soon" badge all update automatically.

Subjects with no entry in the registry show a friendly "not written yet" state instead of breaking.

## Adding a diagram

Diagrams are inline SVG, not uploaded images — keeps the site fast and avoids image hosting.
Add a new function + registry entry in `components/Diagrams.tsx`, then reference its key from any module's `diagrams` array.

## Running locally / deploying (no terminal needed)

- **Local preview (optional):** if you ever do open a terminal — `npm install` then `npm run dev`.
- **Deploy (your usual flow):** commit via GitHub Desktop → push → import the repo on Vercel once → every future push auto-deploys. Vercel auto-detects Next.js, no config needed.

## Editing content without GitHub Desktop every time (planned, not built yet)

The cleanest fit for your workflow: an `/admin` page, password-gated, that loads a subject's JSON into an editable form and gives you a "Download updated file" button — you replace the file in GitHub Desktop and commit. No database, no live-write infra. Say the word and this gets built next.

## Upgrading to a database later (optional, Phase 2)

If you ever want live multi-device admin editing (not just edit-then-commit), the move is:
1. Create a free Neon or Vercel Postgres database (web dashboard, no terminal).
2. Add Prisma, paste in the connection string as a Vercel environment variable.
3. Convert `lib/notes/*.ts` into seed data for a `modules` table.
4. Admin panel writes to the DB via Next.js API routes — still one deployable project, still no Express needed.

Schema sketch for that future point:

```sql
CREATE TABLE subjects (code TEXT PRIMARY KEY, semester TEXT, name TEXT, credits TEXT);
CREATE TABLE modules (
  id SERIAL PRIMARY KEY,
  subject_code TEXT REFERENCES subjects(code),
  title TEXT, "order" INT
);
CREATE TABLE module_sections (
  module_id INT REFERENCES modules(id),
  section TEXT CHECK (section IN ('overview','concepts','definitions','diagrams','formulas','exam_focus','revision')),
  content JSONB
);
```

## AI deep-dive prompt (new)

Every subject page now has a collapsible "Want to go deeper on this subject?" card at the bottom. It generates a copy-ready prompt (`lib/deepDivePrompt.ts`) that:

- Embeds the **exact official module-wise syllabus** for that subject (`lib/syllabusText.ts`, extracted from the same KTU PDF as `docs/syllabus-reference.txt`)
- Asks whatever AI you paste it into to produce the same 7-section format this app uses (overview, concepts, definitions, worked examples, formula sheet, ranked exam-focus questions, revision notes) — module by module, in order
- Falls back gracefully for electives (lists the official options, asks the AI to confirm which one) and for courses with no fixed module syllabus (Seminar, Major Project) — it's honest about not having exact data rather than guessing

This means **every subject is useful immediately**, even ones with no written notes yet — copy the prompt, paste it into Claude (or anything), get a full deep-dive on the spot. 29 of 38 subjects have the exact syllabus embedded; the rest (open electives, project/seminar courses) use an honest generic fallback.

## Understanding features (new)

Every module across all 7 S3 subjects now also has, where it genuinely applies:

- **Intuition** — one "think of it like..." analogy for the module's hardest idea, shown at the top of the Overview tab
- **Worked Examples** — step-revealed numerical/derivation walkthroughs (`components/WorkedExampleCard.tsx`): see the problem, tap to reveal one step at a time, then the answer — forces you to predict the next step instead of just reading a finished solution
- **Comparison Cards** — side-by-side "why this and not that" cards for near-twin concepts (Mealy vs Moore, chaining vs probing, Thevenin vs Norton, CCD vs CMOS, etc.)
- **Self-Check Questions** — tap-to-reveal questions at the end of each module, for noticing gaps before the exam does
- **Cross-Links** — a handful of genuine "this idea also appears in..." links between S3 subjects (e.g. Hall-effect sensors in both the VI Lab and Sensor Circuits courses). More will populate naturally as S4–S8 get written.
- **Interactive Diagrams** — two diagrams (RL step response, RLC resonance curve, in `components/InteractiveDiagrams.tsx`) now have live sliders for R/L/C that redraw the actual curve in real time, instead of a static picture

These are all optional fields on `Module` (see `lib/types.ts`) — a module renders fine with just the original 7 sections if these aren't filled in, so they can be added incrementally to new subjects too.

## Current content status

- ✅ **All 7 S3 subjects — fully written**, including understanding features (Advanced Linear Algebra/Complex Analysis/PDE, Network Theory, Digital Electronics & Logic Design, Data Structures and Algorithms, Sensor & Sensor Circuits, Life Skills and Professional Ethics, System Simulation & VI Lab)
- ✅ **AI deep-dive prompt** — live on every subject page, syllabus-accurate for 29/38 subjects
- ⬜ S4–S8 written notes — next
