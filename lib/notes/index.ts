import { SubjectContent } from "../types";
import dsa from "./data-structures-and-algorithms";
import networkTheory from "./network-theory";
import simLab from "./system-simulation-and-virtual-instrumentation-lab";

// Add one entry per subject as notes get written.
// Key = subject code (matches lib/content.ts).
const registry: Record<string, SubjectContent> = {
  "24ERP304": dsa,
  "24EST332": networkTheory,
  "24ESP307": simLab,
};

export function getSubjectContent(subjectCode: string): SubjectContent | undefined {
  return registry[subjectCode];
}

export default registry;
