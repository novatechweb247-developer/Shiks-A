export interface AcademyCourse {
  id: string;
  title: string;
  subtitle: string;
  category:
    | "Garment Construction"
    | "Modest Fashion"
    | "Bridal Couture"
    | "Digital & Illustration"
    | "Textile & Surface"
    | "Business & Enterprise";
  duration: string;
  format: "Full-Time (Weekday)" | "Part-Time" | "Weekend Executive" | "Apprenticeship Immersion";
  level: "Beginner to Advanced" | "Intermediate" | "Masterclass";
  description: string;
  curriculum: string[];
  careerOutcomes: string[];
  certification: string;
  image: string;
  featured?: boolean;
}

export interface Tutorial {
  id: string;
  title: string;
  category:
    | "Sewing Fundamentals"
    | "Pattern Drafting"
    | "Bridal Engineering"
    | "Abaya & Modest Cut"
    | "Embroidery CAD"
    | "Pressing & Finishing";
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "Beginner to Advanced" | "All Levels";
  description: string;
  equipmentNeeded: string[];
  steps: {
    number: string;
    heading: string;
    detail: string;
  }[];
  masterTips: string[];
  image: string;
}

export interface StudentWork {
  id: string;
  title: string;
  studentName: string;
  cohort: string;
  category: string;
  description: string;
  skillsDemonstrated: string[];
  image: string;
  testimonial?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category:
    | "Classroom & Training"
    | "Machine Skills"
    | "Alumni Runway"
    | "Awards & Ceremonies"
    | "Student Creations";
  image: string;
  caption: string;
}

export interface HeroSlide {
  id: number;
  slideNumber: string;
  kicker: string;
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaTarget: string;
  image: string;
  tagline: string;
  highlightCategory: string;
}

export interface EnrollmentApplication {
  fullName: string;
  email: string;
  phone: string;
  selectedCourse: string;
  studyMode: string;
  experienceLevel: string;
  goals: string;
}

export interface ContactInquiry {
  id: string;
  type: "contact" | "enrollment";
  name: string;
  email: string;
  phone: string;
  subjectOrCourse: string;
  messageOrGoals: string;
  studyMode?: string;
  experienceLevel?: string;
  createdAt: string;
}
