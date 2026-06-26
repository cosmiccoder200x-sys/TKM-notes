import { SubjectContent } from "../types";
import dsa from "./data-structures-and-algorithms";

// Add one entry per subject as notes get written.
// Key = subject code (matches lib/content.ts).
const registry: Record<string, SubjectContent> = {
  "24ERP304": dsa,
};

export function getSubjectContent(subjectCode: string): SubjectContent | undefined {
  return registry[subjectCode];
}

export default registry;
