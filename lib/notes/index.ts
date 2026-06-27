import { SubjectContent } from "../types";
import dsa from "./data-structures-and-algorithms";
import networkTheory from "./network-theory";
import simLab from "./system-simulation-and-virtual-instrumentation-lab";
import advMath from "./advanced-linear-algebra-complex-analysis-pde";
import dld from "./digital-electronics-and-logic-design";
import sensors from "./sensor-and-sensor-circuits";
import lifeSkills from "./life-skills-and-professional-ethics";

// Add one entry per subject as notes get written.
// Key = subject code (matches lib/content.ts).
const registry: Record<string, SubjectContent> = {
  "24ERP304": dsa,
  "24EST332": networkTheory,
  "24ESP307": simLab,
  "24MAP301": advMath,
  "24ERJ303": dld,
  "24ERT305": sensors,
  "24HUT310": lifeSkills,
};

export function getSubjectContent(subjectCode: string): SubjectContent | undefined {
  return registry[subjectCode];
}

export default registry;
