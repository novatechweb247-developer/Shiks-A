import React, { useState } from "react";
import { motion } from "motion/react";
import { Clock, GraduationCap, CheckCircle2, ArrowRight, BookOpen, X } from "lucide-react";
import { COURSES } from "@/data/fashionData";
import { useSiteContent } from "@/lib/site-content-context";
import type { AcademyCourse } from "@/types/fashion";
import { MediaImage } from "./MediaImage";

interface CoursesSectionProps {
  onEnrollCourse: (courseTitle: string) => void;
}

export const CoursesSection: React.FC<CoursesSectionProps> = ({ onEnrollCourse }) => {
  const content = useSiteContent();
  const allCourses: AcademyCourse[] = content?.courses || COURSES;

  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [modalCourse, setModalCourse] = useState<AcademyCourse | null>(null);

  const categories = [
    "All",
    "Garment Construction",
    "Modest Fashion",
    "Bridal Couture",
    "Digital & Illustration",
    "Textile & Surface",
    "Business & Enterprise",
  ];

  const filteredCourses =
    selectedCategory === "All"
      ? allCourses
      : allCourses.filter((c) => c.category === selectedCategory);

  return (
    <section id="courses" className="py-24 bg-white border-b border-purple-100/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-12 space-y-3.5"
        >
          <div className="flex items-center gap-2">
            <span className="w-6 h-[2px] bg-purple-700" />
            <span className="text-xs uppercase tracking-wider font-semibold text-purple-900">
              Curriculum & Programs
            </span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-950">
            COURSES & TRAINING PROGRAMS
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed">
            From technical garment engineering and modest abaya cut to computerized embroidery,
            digital CAD, and bridal couture. Comprehensive practical training on industrial
            machinery.
          </p>

          {/* Filter Categories */}
          <div className="flex items-center gap-2 overflow-x-auto pt-4 pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-purple-950 text-white shadow-xs"
                    : "bg-zinc-100 text-zinc-700 hover:bg-purple-50 hover:text-purple-900"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course, idx) => (
            <motion.div
              key={course.id || idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: (idx % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-xl border border-purple-100/80 shadow-xs hover:border-purple-300 hover:shadow-md transition-all flex flex-col justify-between group overflow-hidden"
            >
              <div>
                {/* Course Visual */}
                <div className="relative aspect-[16/10] overflow-hidden bg-zinc-100 border-b border-purple-50">
                  <MediaImage
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    containerClassName="w-full h-full"
                  />
                  <div className="absolute top-3 left-3 bg-purple-950/90 backdrop-blur-xs text-white text-[10px] font-semibold tracking-wider uppercase px-3 py-1 rounded-md shadow-xs">
                    {course.category}
                  </div>
                  {course.featured && (
                    <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-xs text-purple-900 text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-md shadow-xs">
                      Flagship Diploma
                    </div>
                  )}
                </div>

                {/* Course Details */}
                <div className="p-6 space-y-4">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2.5 text-xs text-zinc-500 font-medium">
                      <span className="flex items-center gap-1.5 text-purple-900 font-semibold">
                        <Clock className="w-3.5 h-3.5 text-purple-700" />
                        {course.duration}
                      </span>
                      <span>•</span>
                      <span className="text-zinc-600">{course.format}</span>
                    </div>
                    <h3 className="font-cinzel text-lg sm:text-xl font-bold text-zinc-950 group-hover:text-purple-900 transition-colors leading-snug">
                      {course.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-600 font-normal leading-relaxed line-clamp-2">
                      {course.subtitle}
                    </p>
                  </div>

                  {/* Highlights */}
                  {course.curriculum && course.curriculum.length > 0 && (
                    <div className="pt-3 border-t border-purple-100/70 space-y-2">
                      <span className="text-xs uppercase tracking-wider text-purple-900 font-bold block">
                        Core Modules:
                      </span>
                      {course.curriculum.slice(0, 3).map((item, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-2 text-xs text-zinc-600 font-normal"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{item}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Actions Footer */}
              <div className="p-6 pt-0 space-y-2">
                <div className="flex items-center gap-2.5">
                  <button
                    type="button"
                    onClick={() => setModalCourse(course)}
                    className="flex-1 py-2.5 border border-purple-900/30 text-purple-950 hover:bg-purple-50 text-xs font-semibold uppercase tracking-wider rounded-md flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Syllabus</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => onEnrollCourse(course.title)}
                    className="flex-1 py-2.5 bg-purple-950 text-white hover:bg-purple-900 text-xs font-semibold uppercase tracking-wider rounded-md flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-xs hover:shadow-md"
                  >
                    <span>Enroll Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Course Detailed Syllabus Modal */}
      {modalCourse && (
        <div
          className="fixed inset-0 z-50 bg-zinc-950/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fade-in"
          onClick={() => setModalCourse(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl border border-purple-100 overflow-hidden max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalCourse(null)}
              aria-label="Close modal"
              className="absolute top-4 right-4 z-10 p-2 text-zinc-400 hover:text-zinc-900 bg-white/80 rounded-full cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="bg-gradient-to-r from-purple-950 via-purple-900 to-zinc-950 text-white p-6 sm:p-8">
              <span className="text-xs uppercase tracking-wider text-purple-300 font-semibold block mb-1">
                {modalCourse.category} • {modalCourse.duration}
              </span>
              <h3 className="font-cinzel text-xl sm:text-2xl font-bold leading-tight">
                {modalCourse.title}
              </h3>
              <p className="text-xs sm:text-sm text-purple-200 mt-1 font-normal">
                {modalCourse.subtitle}
              </p>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              <div>
                <h4 className="text-xs uppercase tracking-wider font-bold text-purple-900 mb-2">
                  Program Overview
                </h4>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                  {modalCourse.description}
                </p>
              </div>

              {modalCourse.curriculum && (
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-bold text-purple-900 mb-3">
                    Curriculum Modules
                  </h4>
                  <div className="space-y-2">
                    {modalCourse.curriculum.map((m, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2.5 text-xs text-zinc-700 bg-purple-50/50 p-3 rounded-lg border border-purple-100/70"
                      >
                        <CheckCircle2 className="w-4 h-4 text-purple-700 shrink-0 mt-0.5" />
                        <span className="font-medium">{m}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {modalCourse.careerOutcomes && modalCourse.careerOutcomes.length > 0 && (
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-bold text-purple-900 mb-2">
                    Career Pathways & Graduate Outcomes
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {modalCourse.careerOutcomes.map((career, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 bg-zinc-100 rounded-md text-zinc-800 text-xs font-medium"
                      >
                        {career}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {modalCourse.certification && (
                <div className="p-3.5 bg-purple-50 rounded-lg text-xs text-purple-900 border border-purple-200 flex items-center gap-2.5">
                  <GraduationCap className="w-5 h-5 text-purple-800 shrink-0" />
                  <span>
                    Certification: <strong>{modalCourse.certification}</strong>
                  </span>
                </div>
              )}

              <button
                type="button"
                onClick={() => {
                  const title = modalCourse.title;
                  setModalCourse(null);
                  onEnrollCourse(title);
                }}
                className="w-full py-3.5 bg-purple-950 text-white text-xs uppercase tracking-wider font-semibold rounded-md hover:bg-purple-900 transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Enroll in this Course</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
