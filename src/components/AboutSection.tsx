import React from "react";
import { motion } from "motion/react";
import { Award, Target, Compass, Users, GraduationCap, Quote } from "lucide-react";
import { useSiteContent } from "@/lib/site-content-context";
import { MediaImage } from "./MediaImage";

interface AboutSectionProps {
  onOpenEnrollment: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenEnrollment }) => {
  const content = useSiteContent();
  const about = content?.about;

  return (
    <section id="about" className="py-24 bg-white border-b border-purple-100/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-16 space-y-3.5"
        >
          <div className="flex items-center gap-2">
            <span className="w-6 h-[2px] bg-purple-700" />
            <span className="text-xs uppercase tracking-wider font-semibold text-purple-900">
              {about?.badge || "Established 2016 • Jos, Nigeria"}
            </span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-950 leading-tight">
            {about?.title || "ABOUT SHIKS FASHION ACADEMY"}
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed">
            {about?.description ||
              "Shiks Fashion Academy & Innovation Hub is a premier fashion training, enterprise development, and production platform based in Jos, Plateau State. Founded by award-winning entrepreneur Maryam Sadiq Shikra, our mission is to empower youth and women through transformative, practical fashion education."}
          </p>
        </motion.div>

        {/* 2-Column Story & Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          {/* Left: Facility Visual Composite */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative"
          >
            <div className="aspect-[4/3] bg-zinc-100 overflow-hidden rounded-xl shadow-xl border border-purple-100">
              <MediaImage
                src={about?.facilityImage || "/images/DTO_3524.jpeg"}
                alt="Shiks Fashion Facility"
                className="w-full h-full object-cover object-center"
                containerClassName="w-full h-full"
              />
            </div>

            {/* Overlay Trophy Badge */}
            <div className="absolute -bottom-6 -right-3 sm:-right-6 bg-gradient-to-br from-purple-950 to-zinc-950 text-white p-6 rounded-lg shadow-2xl border border-purple-700/50 max-w-xs">
              <div className="flex items-center gap-2 text-purple-300 text-xs font-semibold mb-1.5">
                <Award className="w-4 h-4 text-purple-400 shrink-0" />
                <span className="uppercase tracking-wider">Statewide Honors</span>
              </div>
              <p className="font-cinzel text-sm font-bold text-white leading-snug">
                {about?.awardTitle || "BEST FASHION SCHOOL IN PLATEAU STATE"}
              </p>
              <p className="text-xs text-zinc-300 font-normal mt-1.5 leading-relaxed">
                {about?.awardSub ||
                  "Multiple-time recipient of Plateau Excellence Awards & Youth Empowerment Merit Award."}
              </p>
            </div>
          </motion.div>

          {/* Right: Core Pillars & Mission */}
          <div className="lg:col-span-6 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="p-6 bg-gradient-to-br from-purple-50/80 via-white to-purple-50/40 rounded-xl border-l-4 border-purple-800 border border-purple-100/60 shadow-2xs space-y-2.5 relative"
            >
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-900">
                <Target className="w-4 h-4 text-purple-700 shrink-0" />
                <span>{about?.purposeTitle || "Our Core Purpose"}</span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-700 font-normal leading-relaxed italic">
                "
                {about?.purpose ||
                  "Shik's exists to close the gap between acquiring a skill and being able to use that skill productively. We believe that the real measure of a skills programme is not only how many people are trained, but how many are able to use their skills to earn, produce and create opportunities for others."}
                "
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-4"
            >
              <div className="flex items-start gap-3.5 p-4 bg-white rounded-lg border border-purple-100 shadow-2xs hover:border-purple-200 transition-colors">
                <div className="p-2 rounded-md bg-purple-50 text-purple-800 shrink-0 mt-0.5">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-cinzel text-base font-bold text-zinc-950">
                    {about?.visionTitle || "Our Vision"}
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-600 font-normal mt-1 leading-relaxed">
                    {about?.vision ||
                      "To become a leading fashion enterprise development and innovation hub in Nigeria, producing skilled, confident and economically independent entrepreneurs who create value, businesses and employment."}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 bg-white rounded-lg border border-purple-100 shadow-2xs hover:border-purple-200 transition-colors">
                <div className="p-2 rounded-md bg-purple-50 text-purple-800 shrink-0 mt-0.5">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-cinzel text-base font-bold text-zinc-950">
                    {about?.missionTitle || "Our Mission"}
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-600 font-normal mt-1 leading-relaxed">
                    {about?.mission ||
                      "To empower young people and women through practical fashion and textile skills, enterprise development, incubation, access to productive infrastructure, mentorship and market opportunities."}
                  </p>
                </div>
              </div>
            </motion.div>

            <div className="pt-2 flex items-center gap-4">
              <button
                type="button"
                onClick={onOpenEnrollment}
                className="px-7 py-3.5 bg-purple-950 hover:bg-purple-900 text-white rounded-md transition-all text-xs uppercase tracking-wider font-semibold flex items-center gap-2 cursor-pointer shadow-md hover:shadow-lg"
              >
                <GraduationCap className="w-4 h-4 text-purple-300" />
                <span>Join The Academy</span>
              </button>
            </div>
          </div>
        </div>

        {/* 4 Stats Grid with elevated background */}
        <div className="rounded-xl bg-gradient-to-b from-purple-50/70 via-white to-purple-50/40 border border-purple-100/90 shadow-2xs p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {(
              about?.stats || [
                { number: "500+", label: "Individuals Trained" },
                { number: "2016", label: "Year Established" },
                { number: "3-in-1", label: "Academy Model" },
                { number: "#1", label: "Fashion School in Plateau" },
              ]
            ).map((st, i) => (
              <div key={i} className="text-center space-y-1.5 p-3">
                <span className="font-cinzel text-4xl sm:text-5xl font-black text-purple-950 block">
                  {st.number}
                </span>
                <span className="text-xs uppercase tracking-wider text-zinc-600 font-semibold block">
                  {st.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
