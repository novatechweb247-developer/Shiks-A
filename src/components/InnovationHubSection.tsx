import React from "react";
import { motion } from "motion/react";
import { Scissors, Briefcase, Factory, Sparkles, ArrowRight, ShieldCheck } from "lucide-react";
import { ECOSYSTEM_PARTNERS } from "@/data/fashionData";
import { useSiteContent } from "@/lib/site-content-context";
import { MediaImage } from "./MediaImage";

interface InnovationHubSectionProps {
  onOpenAppointment: () => void;
}

export const InnovationHubSection: React.FC<InnovationHubSectionProps> = ({
  onOpenAppointment,
}) => {
  const content = useSiteContent();
  const hub = content?.hub;

  const pipelineSteps = [
    { num: "01", label: "Skills Mastery" },
    { num: "02", label: "Enterprise Readiness" },
    { num: "03", label: "Incubation" },
    { num: "04", label: "Production" },
    { num: "05", label: "Market Access" },
    { num: "06", label: "Sustainable Jobs" },
  ];

  return (
    <section id="hub" className="py-24 bg-[#faf8fc] border-b border-purple-100/60 overflow-hidden">
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
              {hub?.kicker || "Institutional Compendium • Est. 2016"}
            </span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-950">
            {hub?.title || "THE SHIK'S 3-IN-1 MODEL"}
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed">
            {hub?.description ||
              "Bridging the gap between vocational training and commercially viable enterprise. Shiks Fashion & Innovation Hub in Jos, Plateau State, powers a proven pathway from technical competence to sustainable enterprise."}
          </p>
        </motion.div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Pillar 1: Training Centre */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white p-8 rounded-xl border border-purple-100/90 shadow-xs hover:shadow-md hover:border-purple-300 transition-all space-y-4 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center text-purple-900">
                <Scissors className="w-6 h-6" />
              </div>
              <span className="text-xs uppercase tracking-wider text-purple-700 font-bold block">
                Pillar 01 • Academy
              </span>
              <h3 className="font-cinzel text-xl font-bold text-zinc-900">
                {hub?.pillar1Title || "Training Centre"}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 font-normal leading-relaxed">
                {hub?.pillar1Text ||
                  "Practical fashion, textile, pattern making, and garment-construction skills on industrial machinery leading to technical competence and mastery."}
              </p>
            </div>
            <div className="pt-3 border-t border-zinc-100 text-xs text-purple-900 font-semibold">
              {hub?.pillar1Sub || "Over 500+ individuals trained since 2016"}
            </div>
          </motion.div>

          {/* Pillar 2: Incubation Centre */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="bg-gradient-to-br from-purple-950 to-zinc-950 text-white p-8 rounded-xl border border-purple-800 shadow-md transition-all space-y-4 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 bg-purple-900/70 rounded-xl flex items-center justify-center text-purple-300">
                <Briefcase className="w-6 h-6" />
              </div>
              <span className="text-xs uppercase tracking-wider text-purple-300 font-bold block">
                Pillar 02 • Enterprise
              </span>
              <h3 className="font-cinzel text-xl font-bold text-white">
                {hub?.pillar2Title || "Incubation Centre"}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 font-normal leading-relaxed">
                {hub?.pillar2Text ||
                  "Professional workspace, equipment access, technical guidance, business planning, and enterprise clinics to ensure readiness and commercial survival."}
              </p>
            </div>
            <div className="pt-3 border-t border-purple-900 text-xs text-purple-200 font-semibold">
              {hub?.pillar2Sub || "Mentorship, market access & industry linkages"}
            </div>
          </motion.div>

          {/* Pillar 3: Production Hub */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white p-8 rounded-xl border border-purple-100/90 shadow-xs hover:shadow-md hover:border-purple-300 transition-all space-y-4 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center text-purple-900">
                <Factory className="w-6 h-6" />
              </div>
              <span className="text-xs uppercase tracking-wider text-purple-700 font-bold block">
                Pillar 03 • Manufacturing
              </span>
              <h3 className="font-cinzel text-xl font-bold text-zinc-900">
                {hub?.pillar3Title || "Production Hub"}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 font-normal leading-relaxed">
                {hub?.pillar3Text ||
                  "Ready-to-wear lines, bespoke bridal dresses, custom uniforms, modest abayas, and luxury home duvets fulfilling large institutional contracts."}
              </p>
            </div>
            <div className="pt-3 border-t border-zinc-100 text-xs text-purple-900 font-semibold">
              {hub?.pillar3Sub || "Generating income & sustainable employment"}
            </div>
          </motion.div>
        </div>

        {/* The Core Proposition Visual Pipeline */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="bg-white border border-purple-100 p-6 sm:p-8 rounded-xl mb-16 shadow-2xs"
        >
          <div className="flex items-center justify-between mb-4 pb-2 border-b border-zinc-100">
            <span className="text-xs uppercase tracking-wider font-bold text-purple-900">
              The Enterprise Value Chain
            </span>
            <span className="text-xs text-zinc-500 font-medium">
              From Vocational Skills to Sustainable Employment
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {pipelineSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-b from-purple-50/60 to-white p-3.5 rounded-lg border border-purple-100/70 text-center space-y-1 relative group"
              >
                <span className="text-[10px] font-bold text-purple-700 uppercase tracking-wider block">
                  Step {step.num}
                </span>
                <span className="font-cinzel text-xs font-bold text-zinc-900 block">
                  {step.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Proposed Shared Production Facility & Summit Feature */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="space-y-2.5">
              <span className="text-xs uppercase tracking-wider text-purple-700 font-bold">
                {hub?.proposalKicker || "Strategic Infrastructure Proposal · ₦119,000,000"}
              </span>
              <h3 className="font-cinzel text-2xl sm:text-3xl lg:text-4xl font-bold text-zinc-950 leading-tight">
                {hub?.proposalTitle || "PROPOSED SHARED PRODUCTION FACILITY"}
              </h3>
              <p className="text-sm text-zinc-600 leading-relaxed font-normal">
                {hub?.proposalText ||
                  "Reducing the prohibitive capital barrier for emerging Nigerian fashion designers. The facility features 80 industrial straight-stitch machines, overlock and coverstitch units, computerized embroidery, and laser cutting."}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-1">
              <div className="bg-white p-4 rounded-lg border border-purple-100 shadow-2xs">
                <span className="font-cinzel text-2xl font-bold text-purple-950 block">80+</span>
                <span className="text-xs text-zinc-600 font-medium">
                  Industrial Straight Machines
                </span>
              </div>
              <div className="bg-white p-4 rounded-lg border border-purple-100 shadow-2xs">
                <span className="font-cinzel text-2xl font-bold text-purple-950 block">3-in-1</span>
                <span className="text-xs text-zinc-600 font-medium">
                  Training, Incubation & Production
                </span>
              </div>
              <div className="bg-white p-4 rounded-lg border border-purple-100 shadow-2xs">
                <span className="font-cinzel text-2xl font-bold text-purple-950 block">2027</span>
                <span className="text-xs text-zinc-600 font-medium">
                  Alumni Impact Summit (Jan 9)
                </span>
              </div>
              <div className="bg-white p-4 rounded-lg border border-purple-100 shadow-2xs">
                <span className="font-cinzel text-2xl font-bold text-purple-950 block">500+</span>
                <span className="text-xs text-zinc-600 font-medium">Alumni & Women Empowered</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                onClick={onOpenAppointment}
                className="px-6 py-3.5 bg-purple-950 text-white text-xs uppercase tracking-wider font-semibold rounded-md hover:bg-purple-900 transition-colors flex items-center gap-2 cursor-pointer shadow-md hover:shadow-lg"
              >
                <Sparkles className="w-4 h-4 text-purple-300" />
                <span>Inquire for Sponsorship & Partnerships</span>
              </button>
              <a
                href="/hub"
                className="px-5 py-3.5 bg-white text-purple-950 border border-purple-200 hover:bg-purple-50 text-xs uppercase tracking-wider font-semibold rounded-md transition-colors flex items-center gap-1.5"
              >
                <span>Full Hub Details</span>
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative aspect-[4/3] bg-zinc-100 overflow-hidden rounded-xl shadow-xl border border-purple-100"
          >
            <MediaImage
              src={hub?.proposalImage || "/images/IMG_9722.jpg"}
              alt="Shared Production Facility"
              className="w-full h-full object-cover"
              containerClassName="w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-950/90 via-purple-950/20 to-transparent flex flex-col justify-end p-6 text-white">
              <span className="text-xs uppercase tracking-wider text-purple-300 font-semibold mb-1">
                Alumni Impact Summit 2027
              </span>
              <h4 className="font-cinzel text-xl font-bold leading-tight">
                Runway Showcase, Business Pitching & Industrial Support
              </h4>
            </div>
          </motion.div>
        </div>

        {/* Institutional Ecosystem Partners Marquee */}
        <div className="pt-8 border-t border-purple-100/80">
          <div className="text-center mb-5">
            <span className="text-xs uppercase tracking-wider font-bold text-zinc-600 flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4 text-purple-700" />
              <span>Institutional Program & Ecosystem Partners</span>
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4">
            {(hub?.ecosystemPartners || ECOSYSTEM_PARTNERS).map((partner: string, idx: number) => (
              <span
                key={idx}
                className="px-4 py-2 bg-white rounded-lg border border-purple-100 text-zinc-800 text-xs font-semibold tracking-wide shadow-2xs hover:border-purple-300 transition-colors"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
