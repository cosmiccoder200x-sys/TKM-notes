// Core content model for TKM S3-S8 Interactive Notes.
// Every subject is broken into Modules. Every Module carries the
// 7 fixed exam-prep sections (A-G from the spec). Nothing else.

export type Weightage = "low" | "medium" | "high";

export interface Semester {
  id: string;       // "s3" ... "s8"
  label: string;     // "Semester 3"
}

export interface Subject {
  code: string;      // "24ERP304"
  slug: string;       // "data-structures-and-algorithms"
  name: string;
  credits: number | "MOOC";
  semesterId: string;
}

export interface Definition {
  term: string;
  definition: string; // exam-ready wording, 1-3 sentences
}

export interface FormulaItem {
  name: string;
  expression: string; // plain text / LaTeX-ish, rendered in mono font
  note?: string;       // when to use it / what each symbol means
}

export interface DiagramSpec {
  title: string;
  // Diagrams are rendered as inline SVG components (see components/Diagrams.tsx)
  // svgKey maps to a named diagram renderer so no image hosting is required.
  svgKey: string;
  caption: string;
}

export interface ExamFocusItem {
  question: string;
  weightage: Weightage;
  note?: string; // hint on how to structure the answer
}

export interface Module {
  id: string;          // "m1"
  title: string;
  overview: {
    summary: string;     // what this chapter is about
    whyItMatters: string; // why it matters in exams
  };
  coreConcepts: string[];          // bullet points, exam-wording
  definitions: Definition[];
  diagrams: DiagramSpec[];
  formulas: FormulaItem[];
  examFocus: ExamFocusItem[];
  revisionNotes: string[];          // ultra-short one-page bullets
}

export interface SubjectContent {
  subjectCode: string;
  modules: Module[];
}
