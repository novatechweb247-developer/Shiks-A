import React, { useState } from "react";
import { motion } from "motion/react";
import { BookOpen, Clock, X, ArrowRight, Lightbulb } from "lucide-react";
import { TUTORIALS } from "@/data/fashionData";
import { useSiteContent } from "@/lib/site-content-context";
import type { Tutorial } from "@/types/fashion";
import { MediaImage } from "./MediaImage";

export const TutorialsSection: React.FC = () => {
  const content = useSiteContent();
  const tutorials: Tutorial[] = content?.tutorials || TUTORIALS;
  const [activeTutorial, setActiveTutorial] = useState<Tutorial | null>(null);

  return (
    <section
      id="tutorials"
      className="py-24 bg-[#faf9fd] border-b border-purple-100/60 overflow-hidden"
    >
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
              Open Academy • Practical Guides
            </span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-950">
            TUTORIALS & PRACTICAL SKILLS
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed">
            Curated lessons directly from Shiks Fashion Academy instructors. Learn industrial sewing
            machine threading, precision bodice sloper drafting, corsetry boning, and computerized
            embroidery.
          </p>
        </motion.div>

        {/* Tutorials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tutorials.map((tut, idx) => (
            <motion.div
              key={tut.id || idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: (idx % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-xl border border-purple-100/80 shadow-xs hover:border-purple-300 hover:shadow-md transition-all flex flex-col justify-between group overflow-hidden"
            >
              <div>
                {/* Visual */}
                <div className="relative aspect-[16/10] overflow-hidden bg-zinc-100 border-b border-purple-50">
                  <MediaImage
                    src={tut.image}
                    alt={tut.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    containerClassName="w-full h-full"
                  />
                  <div className="absolute top-3 left-3 bg-purple-950/90 backdrop-blur-xs text-white text-[10px] font-semibold tracking-wider uppercase px-3 py-1 rounded-md shadow-xs">
                    {tut.category}
                  </div>
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-xs text-purple-900 text-[10px] font-bold tracking-wider px-2.5 py-1 rounded-md shadow-xs">
                    {tut.level}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-xs text-zinc-500 font-medium">
                    <Clock className="w-3.5 h-3.5 text-purple-700" />
                    <span>{tut.duration}</span>
                  </div>
                  <h3 className="font-cinzel text-base sm:text-lg font-bold text-zinc-950 group-hover:text-purple-900 transition-colors line-clamp-2 leading-snug">
                    {tut.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 font-normal leading-relaxed line-clamp-3">
                    {tut.description}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <button
                  type="button"
                  onClick={() => setActiveTutorial(tut)}
                  className="w-full py-2.5 bg-purple-50 text-purple-950 hover:bg-purple-950 hover:text-white transition-all text-xs font-semibold uppercase tracking-wider rounded-md flex items-center justify-center gap-2 cursor-pointer shadow-2xs hover:shadow-xs"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Learn Practical Steps</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Tutorial Deep-Dive Modal */}
      {activeTutorial && (
        <div
          className="fixed inset-0 z-50 bg-zinc-950/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fade-in"
          onClick={() => setActiveTutorial(null)}
        >
          <div
            className="relative w-full max-w-3xl bg-white rounded-xl shadow-2xl border border-purple-100 overflow-hidden max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveTutorial(null)}
              aria-label="Close tutorial"
              className="absolute top-4 right-4 z-10 p-2 text-zinc-400 hover:text-zinc-900 bg-white/80 rounded-full cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="bg-gradient-to-r from-purple-950 via-purple-900 to-zinc-950 text-white p-6 sm:p-8">
              <span className="text-xs uppercase tracking-wider text-purple-300 font-semibold block mb-1">
                Practical Tutorial • {activeTutorial.category}
              </span>
              <h3 className="font-cinzel text-xl sm:text-2xl font-bold leading-tight">
                {activeTutorial.title}
              </h3>
              <p className="text-xs sm:text-sm text-purple-200 mt-1 font-normal">
                {activeTutorial.description}
              </p>
            </div>

            {/* Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              {/* Equipment Needed */}
              {activeTutorial.equipmentNeeded && (
                <div className="bg-purple-50/60 p-4 rounded-lg border border-purple-100 space-y-2">
                  <span className="text-xs uppercase tracking-wider text-purple-900 font-bold block">
                    Required Equipment & Tools:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeTutorial.equipmentNeeded.map((eq, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 bg-white border border-purple-200 rounded-md text-xs text-zinc-700 font-medium"
                      >
                        {eq}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Step by Step Breakdown */}
              {activeTutorial.steps && (
                <div className="space-y-4">
                  <h4 className="text-xs uppercase tracking-wider font-bold text-zinc-950">
                    Step-by-Step Practical Demonstration:
                  </h4>
                  {activeTutorial.steps.map((st) => (
                    <div
                      key={st.number}
                      className="flex gap-4 p-4 rounded-lg border border-zinc-100 bg-[#fbf9fe]"
                    >
                      <span className="font-cinzel text-2xl font-bold text-purple-900 shrink-0">
                        {st.number}
                      </span>
                      <div className="space-y-1">
                        <h5 className="text-xs font-bold text-zinc-900 uppercase tracking-wide">
                          {st.heading}
                        </h5>
                        <p className="text-xs sm:text-sm text-zinc-600 font-normal leading-relaxed">
                          {st.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Master Tips */}
              {activeTutorial.masterTips && (
                <div className="p-5 bg-gradient-to-r from-purple-950 to-zinc-950 rounded-lg text-white space-y-2.5 shadow-xs">
                  <div className="flex items-center gap-2 text-xs font-bold text-purple-300 uppercase tracking-wider">
                    <Lightbulb className="w-4 h-4 text-purple-400" />
                    <span>Instructor Secrets & Master Tips:</span>
                  </div>
                  <ul className="space-y-2 text-xs text-zinc-300 font-normal list-disc pl-5 leading-relaxed">
                    {activeTutorial.masterTips.map((tip, i) => (
                      <li key={i}>{tip}</li>
                    ))}
                  </ul>
                </div>
              )}

              <button
                type="button"
                onClick={() => setActiveTutorial(null)}
                className="w-full py-3 bg-zinc-900 text-white text-xs uppercase tracking-wider font-semibold rounded-md hover:bg-purple-950 transition-colors cursor-pointer"
              >
                Close Tutorial
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
