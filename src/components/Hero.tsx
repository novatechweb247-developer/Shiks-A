import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, ArrowUpRight, GraduationCap, Pause, Play } from "lucide-react";
import { HERO_SLIDES } from "@/data/fashionData";
import { useSiteContent } from "@/lib/site-content-context";
import { MediaImage } from "./MediaImage";

interface HeroProps {
  onCtaClick: (target: string) => void;
  onOpenEnrollment: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick, onOpenEnrollment }) => {
  const content = useSiteContent();
  // STRICT RULE: EXACTLY 3 SLIDES ONLY
  const rawSlides = content?.heroSlides || HERO_SLIDES;
  const slides = rawSlides.slice(0, 3);

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(1);
  const timerRef = useRef<number | null>(null);

  const SLIDE_DURATION = 6500; // ms per slide

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentSlideIndex((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentSlideIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setDirection(index > currentSlideIndex ? 1 : -1);
    setCurrentSlideIndex(index);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    timerRef.current = window.setInterval(() => {
      nextSlide();
    }, SLIDE_DURATION);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isAutoPlaying, nextSlide]);

  const currentSlide = slides[currentSlideIndex] || slides[0];

  const handleAction = (target: string) => {
    if (target === "#enroll") {
      onOpenEnrollment();
    } else {
      onCtaClick(target);
    }
  };

  return (
    <section className="relative w-full h-[88vh] min-h-[640px] max-h-[920px] bg-zinc-950 text-white overflow-hidden select-none">
      {/* Background Slides with AnimatePresence */}
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentSlide.id || currentSlideIndex}
          custom={direction}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Main Academy / Fashion Image with Ken Burns drift */}
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: 1.05 }}
            transition={{ duration: 7, ease: "linear" }}
            className="w-full h-full"
          >
            <MediaImage
              src={currentSlide.image}
              alt={currentSlide.title}
              className="w-full h-full object-cover object-center filter brightness-[0.82] contrast-[1.08]"
              containerClassName="w-full h-full"
            />
          </motion.div>

          {/* Gradients tailored for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-purple-950/50 to-transparent opacity-95" />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/90 via-purple-950/40 to-transparent" />
          <div className="absolute inset-0 bg-radial-at-c from-transparent via-purple-950/20 to-zinc-950/60" />
        </motion.div>
      </AnimatePresence>

      {/* Floating Academy Watermark */}
      <div className="absolute top-10 right-8 lg:right-16 pointer-events-none z-10 hidden sm:block">
        <div className="flex flex-col items-end opacity-40">
          <span className="text-xs uppercase tracking-wider font-medium text-purple-200">
            Shiks Fashion Academy • Jos
          </span>
          <span className="font-cinzel text-5xl font-black tracking-tight text-white/10 mt-0.5">
            0{currentSlideIndex + 1}
          </span>
        </div>
      </div>

      {/* Hero Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto h-full px-6 sm:px-8 lg:px-12 flex flex-col justify-end pb-24 sm:pb-28">
        <div className="max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide.id || currentSlideIndex}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={{
                hidden: { opacity: 0, y: 25 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.7,
                    staggerChildren: 0.12,
                    ease: [0.16, 1, 0.3, 1],
                  },
                },
                exit: { opacity: 0, y: -15, transition: { duration: 0.35 } },
              }}
              className="space-y-4 sm:space-y-5"
            >
              {/* Kicker Tag */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -10 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="flex items-center gap-3"
              >
                <span className="w-8 h-[2px] bg-purple-400" />
                <span className="text-xs uppercase tracking-wider font-semibold text-purple-300">
                  {currentSlide.kicker}
                </span>
                {currentSlide.highlightCategory && (
                  <>
                    <span className="text-purple-400/60 text-xs hidden sm:inline">•</span>
                    <span className="text-xs tracking-wide text-white/90 font-medium hidden sm:inline">
                      {currentSlide.highlightCategory}
                    </span>
                  </>
                )}
              </motion.div>

              {/* Slide Headline */}
              <motion.h1
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="font-cinzel text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] drop-shadow-md"
              >
                {currentSlide.title}
              </motion.h1>

              {/* Description */}
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="text-sm sm:text-base text-zinc-200 font-normal max-w-2xl leading-relaxed drop-shadow-xs"
              >
                {currentSlide.description}
              </motion.p>

              {/* Academy CTAs */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="pt-2 flex flex-wrap items-center gap-4 sm:gap-5"
              >
                {/* Primary CTA */}
                <button
                  onClick={() => handleAction(currentSlide.ctaTarget)}
                  className="px-7 py-3.5 bg-white text-zinc-950 hover:bg-purple-600 hover:text-white transition-all duration-300 text-xs font-semibold uppercase tracking-wider rounded-md shadow-md hover:shadow-lg flex items-center gap-2.5 group cursor-pointer"
                >
                  <span>{currentSlide.ctaText || "Explore Academy"}</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>

                {/* Secondary CTA */}
                <button
                  onClick={onOpenEnrollment}
                  className="px-6 py-3.5 border border-purple-300/40 text-purple-100 hover:border-white hover:text-white hover:bg-white/10 transition-all duration-300 text-xs font-semibold uppercase tracking-wider rounded-md backdrop-blur-xs flex items-center gap-2 cursor-pointer"
                >
                  <GraduationCap className="w-4 h-4 text-purple-300" />
                  <span>Enroll for Training</span>
                </button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom Bar: Exact 3 Slide Indicators + Controls */}
      <div className="absolute bottom-6 inset-x-0 z-30 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* EXACT 3 SLIDE INDICATORS (01, 02, 03) */}
        <div className="flex items-center gap-4 sm:gap-8">
          {slides.map((slide, idx) => {
            const isActive = idx === currentSlideIndex;
            return (
              <button
                key={slide.id || idx}
                onClick={() => goToSlide(idx)}
                className="group flex flex-col items-start gap-1.5 text-left cursor-pointer transition-opacity"
              >
                <div className="flex items-center gap-2">
                  <span
                    className={`text-xs font-cinzel font-bold tracking-normal transition-colors ${
                      isActive ? "text-white" : "text-zinc-500 group-hover:text-zinc-300"
                    }`}
                  >
                    0{idx + 1}
                  </span>
                  <span
                    className={`text-xs tracking-wider uppercase hidden md:inline transition-colors font-medium ${
                      isActive ? "text-purple-300" : "text-zinc-500 group-hover:text-zinc-400"
                    }`}
                  >
                    {idx === 0
                      ? "Skills & Passion"
                      : idx === 1
                        ? "Master Fashion"
                        : "Start Journey"}
                  </span>
                </div>
                {/* Progress Line */}
                <div className="w-12 sm:w-20 lg:w-28 h-[2.5px] bg-white/20 relative overflow-hidden rounded-full">
                  {isActive && (
                    <motion.div
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{
                        duration: isAutoPlaying ? SLIDE_DURATION / 1000 : 0,
                        ease: "linear",
                      }}
                      className="absolute inset-0 bg-gradient-to-r from-purple-400 to-white"
                    />
                  )}
                  {!isActive && (
                    <div className="w-0 group-hover:w-full h-full bg-white/40 transition-all duration-300" />
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            aria-label={isAutoPlaying ? "Pause slides" : "Play slides"}
            className="p-2 text-zinc-400 hover:text-white transition-colors cursor-pointer rounded-full hover:bg-white/10"
            title={isAutoPlaying ? "Pause autoplay" : "Play autoplay"}
          >
            {isAutoPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>
          <button
            onClick={prevSlide}
            aria-label="Previous slide"
            className="p-2 sm:p-2.5 rounded-full border border-white/20 hover:border-white text-zinc-300 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next slide"
            className="p-2 sm:p-2.5 rounded-full border border-white/20 hover:border-white text-zinc-300 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
