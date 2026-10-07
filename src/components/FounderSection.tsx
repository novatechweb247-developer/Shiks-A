import React from "react";
import { motion } from "motion/react";
import { Award, CheckCircle2, Quote } from "lucide-react";
import { useSiteContent } from "@/lib/site-content-context";
import { MediaImage } from "./MediaImage";

export const FounderSection: React.FC = () => {
  const content = useSiteContent();
  const founder = content?.founder;

  return (
    <section id="founder" className="py-24 bg-white border-b border-purple-100/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Founder Portrait & Award Honors with Scroll Pop */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="aspect-[3/4] bg-zinc-100 overflow-hidden rounded-xl shadow-2xl border border-purple-200/80">
              <MediaImage
                src={founder?.image || "/images/ELS_9208.jpg"}
                alt={founder?.name || "Maryam Sadiq Shikra"}
                className="w-full h-full object-cover object-top"
                containerClassName="w-full h-full"
              />
            </div>

            {/* Overlapping Award Banner */}
            <div className="absolute -bottom-6 -right-3 sm:-right-6 bg-gradient-to-br from-purple-950 to-zinc-950 text-white p-6 rounded-lg shadow-2xl border border-purple-600/40 max-w-xs">
              <div className="flex items-center gap-2 text-purple-300 text-xs font-semibold mb-1.5">
                <Award className="w-4 h-4 text-purple-400 shrink-0" />
                <span className="uppercase tracking-wider">
                  {founder?.awardBadge || "Multiple Award Winner"}
                </span>
              </div>
              <p className="font-cinzel text-xs font-bold text-white tracking-wide leading-snug">
                {founder?.awardSub || "BEST FASHION SCHOOL IN PLATEAU STATE"}
              </p>
              <p className="text-[11px] text-zinc-300 font-normal mt-1 leading-relaxed">
                Youth Empowerment Merit Award • Stylist & Designer of the Year
              </p>
            </div>
          </motion.div>

          {/* Right: Founder Narrative & Leadership Credentials with Scroll Pop */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="space-y-2.5">
              <div className="flex items-center gap-2">
                <span className="w-6 h-[2px] bg-purple-700" />
                <span className="text-xs uppercase tracking-wider font-semibold text-purple-900">
                  {founder?.kicker || "Meet the Founder & CEO"}
                </span>
              </div>
              <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-950 leading-tight">
                {founder?.name || "MARYAM SADIQ SHIKRA"}
              </h2>
              <p className="text-xs sm:text-sm font-semibold text-purple-900 uppercase tracking-wider">
                {founder?.title ||
                  "Fashion Enterprise Development Advocate • Entrepreneur • Educator"}
              </p>
            </div>

            <p className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed">
              {founder?.bio ||
                "Maryam Sadiq Shikra holds a degree in Business Administration and Entrepreneurship from Bayero University, Kano (2014, NYSC 2015). Under her stewardship, Shiks Fashion & Innovation Hub has established itself as Nigeria's preeminent fashion training academy and enterprise development engine."}
            </p>

            {/* Leadership Record */}
            <div className="space-y-3 pt-1">
              {(
                founder?.roles || [
                  {
                    title: "Former President, Plateau Fashion Designers Association (PLAFDA)",
                    detail:
                      "Facilitated industrial machinery acquisition from SMEDAN, grant support and equipment via PLASMIDA and NG CARES for emerging designers.",
                  },
                  {
                    title: "Public Relations Officer, NASME",
                    detail:
                      "Championing MSME expansion and federal policies across the small and medium enterprise sector in Nigeria.",
                  },
                  {
                    title: "Lady President, ASNAT",
                    detail:
                      "Spearheading national advancement for artisans and technical craftswomen in Nigeria.",
                  },
                ]
              ).map((role, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3.5 rounded-lg bg-purple-50/40 border border-purple-100/70"
                >
                  <CheckCircle2 className="w-4 h-4 text-purple-700 shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-zinc-700 leading-relaxed font-normal">
                    <strong className="text-zinc-950 font-semibold">{role.title}:</strong>{" "}
                    {role.detail}
                  </div>
                </div>
              ))}
            </div>

            {/* Quote */}
            <div className="p-5 bg-gradient-to-r from-purple-50 via-white to-purple-50/50 rounded-lg border-l-4 border-purple-800 text-xs sm:text-sm italic font-cormorant text-zinc-800 leading-relaxed shadow-2xs">
              "
              {founder?.quote ||
                "The real measure of a skills programme is not only how many people are trained, but how many are able to use their skills to earn, produce and create opportunities for others."}
              "
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
