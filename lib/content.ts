import { Semester, Subject } from "./types";

export const semesters: Semester[] = [
  { id: "s3", label: "Semester 3" },
  { id: "s4", label: "Semester 4" },
  { id: "s5", label: "Semester 5" },
  { id: "s6", label: "Semester 6" },
  { id: "s7", label: "Semester 7" },
  { id: "s8", label: "Semester 8" },
];

export const subjects: Subject[] = [
  // Semester 3
  { code: "24MAP301", slug: "advanced-linear-algebra-complex-analysis-pde", name: "Advanced Linear Algebra, Complex Analysis & PDE", credits: 5, semesterId: "s3" },
  { code: "24EST332", slug: "network-theory", name: "Network Theory", credits: 2, semesterId: "s3" },
  { code: "24ERJ303", slug: "digital-electronics-and-logic-design", name: "Digital Electronics and Logic Design", credits: 5, semesterId: "s3" },
  { code: "24ERP304", slug: "data-structures-and-algorithms", name: "Data Structures and Algorithms", credits: 4, semesterId: "s3" },
  { code: "24ERT305", slug: "sensor-and-sensor-circuits", name: "Sensor & Sensor Circuits", credits: 3, semesterId: "s3" },
  { code: "24HUT310", slug: "life-skills-and-professional-ethics", name: "Life Skills and Professional Ethics", credits: 3, semesterId: "s3" },
  { code: "24ESP307", slug: "system-simulation-and-virtual-instrumentation-lab", name: "System Simulation & Virtual Instrumentation Lab", credits: 2, semesterId: "s3" },

  // Semester 4
  { code: "24ERT401", slug: "computer-organization-and-architecture", name: "Computer Organization and Architecture", credits: 4, semesterId: "s4" },
  { code: "24ERT402", slug: "signals-and-systems", name: "Signals & Systems", credits: 3, semesterId: "s4" },
  { code: "24ERP403", slug: "electrical-technology", name: "Electrical Technology", credits: 4, semesterId: "s4" },
  { code: "24ERJ404", slug: "solid-state-electronic-devices-and-circuits", name: "Solid State Electronic Devices and Circuits", credits: 5, semesterId: "s4" },
  { code: "24HUT435", slug: "engineering-economics", name: "Engineering Economics", credits: 3, semesterId: "s4" },
  { code: "24MCT406", slug: "environmental-sciences", name: "Environmental Sciences", credits: 0, semesterId: "s4" },
  { code: "24ERP407", slug: "object-oriented-programming-using-java", name: "Object Oriented Programming Using Java", credits: 2, semesterId: "s4" },

  // Semester 5
  { code: "24ERT501", slug: "control-systems", name: "Control Systems", credits: 3, semesterId: "s5" },
  { code: "24ERJ502", slug: "database-management-systems", name: "Database Management Systems", credits: 5, semesterId: "s5" },
  { code: "24ERT503", slug: "artificial-intelligence-theory-and-applications", name: "Artificial Intelligence: Theory and Applications", credits: 3, semesterId: "s5" },
  { code: "24ERP504", slug: "operating-systems", name: "Operating Systems", credits: 4, semesterId: "s5" },
  { code: "24HUT535", slug: "project-management-and-finance", name: "Project Management and Finance", credits: 3, semesterId: "s5" },
  { code: "24MCT506", slug: "constitution-of-india", name: "Constitution of India", credits: "MOOC", semesterId: "s5" },
  { code: "24ERT507", slug: "software-engineering", name: "Software Engineering", credits: 2, semesterId: "s5" },

  // Semester 6
  { code: "24ERP601", slug: "computer-networks", name: "Computer Networks", credits: 3, semesterId: "s6" },
  { code: "24ERP602", slug: "embedded-system-design-and-iot", name: "Embedded System Design and IoT", credits: 3, semesterId: "s6" },
  { code: "24ERT603", slug: "power-electronics-and-drives", name: "Power Electronics & Drives", credits: 3, semesterId: "s6" },
  { code: "24ERE6X4", slug: "professional-elective-1", name: "Professional Elective-I", credits: 3, semesterId: "s6" },
  { code: "24ERE6X5", slug: "professional-elective-2-industry-elective", name: "Professional Elective-II / Industry Elective", credits: 3, semesterId: "s6" },
  { code: "24ERS606", slug: "seminar", name: "Seminar", credits: 2, semesterId: "s6" },
  { code: "24SPJ607", slug: "socially-relevant-project", name: "Socially Relevant Project", credits: 1, semesterId: "s6" },
  { code: "24ESP608", slug: "cyber-physical-systems", name: "Cyber Physical Systems", credits: 2, semesterId: "s6" },

  // Semester 7
  { code: "24ERP701", slug: "computer-vision", name: "Computer Vision", credits: 4, semesterId: "s7" },
  { code: "24ERP702", slug: "energy-systems", name: "Energy Systems", credits: 4, semesterId: "s7" },
  { code: "24ERE7X3", slug: "professional-elective-3-mooc", name: "Professional Elective-III (MOOC)", credits: 3, semesterId: "s7" },
  { code: "24ERO7X4", slug: "open-elective-1-industry-elective", name: "Open Elective-I / Industry Elective", credits: 3, semesterId: "s7" },
  { code: "24ERD705", slug: "major-project-phase-1-internship", name: "Major Project Phase-I / Internship", credits: 7, semesterId: "s7" },

  // Semester 8
  { code: "24ERE8X1", slug: "professional-elective-4-mooc", name: "Professional Elective-IV / MOOC", credits: 3, semesterId: "s8" },
  { code: "24ERO8X2", slug: "open-elective-2-mooc", name: "Open Elective-II / MOOC", credits: 3, semesterId: "s8" },
  { code: "24ERO8X3", slug: "open-elective-3-mooc", name: "Open Elective-III / MOOC", credits: 3, semesterId: "s8" },
  { code: "24ERD804", slug: "major-project-internship", name: "Major Project / Internship", credits: 7, semesterId: "s8" },
];

export const electiveOptions: Record<string, string[]> = {
  "24ERE6X4": ["Bio-signal Processing", "FPGA", "Computer Graphics", "Data Science", "Wireless Networks", "Renewable Energy Systems"],
  "24ERE6X5": ["Bio Instrumentation", "Robotics", "Mobile Computing", "Biology for Engineers", "Power Quality", "Cyber Security (Industrial)"],
  "24ERE7X3": ["E-Mobility", "Modern Optimization Techniques", "Design & Analysis of Algorithms", "ML for Smart Grids", "Edge Computing", "Power Electronics for Renewables"],
  "24ERE8X1": ["Big Data Analysis", "Cloud Computing", "R Programming", "NLP", "AI with Python", "Grid Integration of Renewables"],
};

export function subjectsForSemester(semesterId: string): Subject[] {
  return subjects.filter((s) => s.semesterId === semesterId);
}

export function findSubject(semesterId: string, slug: string): Subject | undefined {
  return subjects.find((s) => s.semesterId === semesterId && s.slug === slug);
}
