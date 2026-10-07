import React from "react";
import { motion } from "motion/react";
import { CheckCircle2, User, Quote } from "lucide-react";
import { STUDENT_WORKS } from "@/data/fashionData";
import { useSiteContent } from "@/lib/site-content-context";
import type { StudentWork } from "@/types/fashion";
import { MediaImage } from "./MediaImage";

export const StudentShowcaseSection: React.FC = () => {
  const content = useSiteContent();
  const studentWorks: StudentWork[] = content?.studentWorks || STUDENT_WORKS;

  return (
    <section id="showcase" className="py-24 bg-white border-b border-purple-100/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-14 space-y-3.5"
        >
          <div className="flex items-center gap-2">
            <span className="w-6 h-[2px] bg-purple-700" />
            <span className="text-xs uppercase tracking-wider font-semibold text-purple-900">
              Alumni Portfolio • Graduation Work
            </span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-950">
            FROM LEARNING TO CREATION
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed">
            Witness the craftsmanship Shiks Fashion Academy students produce. Every creation
            showcases mastery in internal structural boning, precision pattern engineering, and
            luxury fabric manipulation.
          </p>
        </motion.div>

        {/* Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {studentWorks.map((work, idx) => (
            <motion.div
              key={work.id || idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-xl border border-purple-100/80 shadow-xs hover:border-purple-300 hover:shadow-md transition-all overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Visual */}
                <div className="relative aspect-[4/3] overflow-hidden bg-zinc-100">
                  <MediaImage
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    containerClassName="w-full h-full"
                  />
                  <div className="absolute top-3 left-3 bg-purple-950/90 backdrop-blur-xs text-white text-[10px] font-semibold tracking-wider uppercase px-3 py-1 rounded-md shadow-xs">
                    {work.category}
                  </div>
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-xs text-zinc-900 text-xs font-semibold px-2.5 py-0.5 rounded-md shadow-xs">
                    {work.cohort}
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 sm:p-8 space-y-4">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 text-xs font-bold text-purple-900 uppercase tracking-wider">
                      <User className="w-3.5 h-3.5" />
                      <span>{work.studentName}</span>
                    </div>
                    <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-zinc-950 leading-snug">
                      {work.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-600 font-normal leading-relaxed">
                      {work.description}
                    </p>
                  </div>

                  {/* Skills Demonstrated */}
                  {work.skillsDemonstrated && (
                    <div className="pt-3 border-t border-purple-100/70 space-y-2">
                      <span className="text-xs uppercase tracking-wider font-bold text-purple-900 block">
                        Technical Skills Applied:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {work.skillsDemonstrated.map((sk, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-zinc-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-purple-700 shrink-0" />
                            <span className="line-clamp-1 font-medium">{sk}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Student Quote */}
              {work.testimonial && (
                <div className="p-6 pt-0">
                  <div className="p-4 bg-purple-50/70 rounded-lg border-l-3 border-purple-700 text-xs italic font-cormorant text-zinc-800 leading-relaxed">
                    "{work.testimonial}"
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
