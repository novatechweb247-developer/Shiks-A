import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsDone(true);
        setTimeout(onComplete, 200);
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsDone(true);
            setTimeout(onComplete, 400);
          }, 150);
          return 100;
        }
        // Smooth and snappy progression
        const step = prev < 40 ? 7 : prev < 75 ? 9 : 6;
        return Math.min(100, prev + step);
      });
    }, 32);

    return () => {
      clearInterval(interval);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 bg-[#0c0617] text-white flex flex-col justify-between p-6 sm:p-10 select-none"
        >
          {/* Top Bar: Established & Fast Skip */}
          <div className="flex items-center justify-between text-xs text-purple-200/90 font-medium">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-ping inline-block" />
              <span>Est. 2016 · Jos, Plateau State, Nigeria</span>
            </div>
            <button
              onClick={() => {
                setIsDone(true);
                setTimeout(onComplete, 200);
              }}
              className="text-zinc-400 hover:text-white transition-colors cursor-pointer text-xs font-medium"
            >
              Skip [Esc]
            </button>
          </div>

          {/* Center: Brand Monogram & Title */}
          <div className="max-w-lg mx-auto w-full text-center space-y-6">
            {/* Monogram Emblem */}
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative inline-flex items-center justify-center w-20 h-20 mx-auto"
            >
              <div className="absolute inset-0 bg-purple-600/30 rounded-full blur-xl animate-pulse-glow" />
              <div className="relative w-18 h-18 border border-purple-400/50 rounded-full flex items-center justify-center bg-purple-950/70 backdrop-blur-md shadow-lg shadow-purple-950/60">
                <span className="font-serif text-3xl font-bold text-white tracking-normal">S</span>
                <span className="w-1.5 h-1.5 bg-purple-400 absolute bottom-3.5 right-4 rounded-full" />
              </div>
            </motion.div>

            {/* Brand Title with Natural Typography - Normal Kerning */}
            <motion.div
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="space-y-1.5"
            >
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                SHIKS FASHION
              </h1>
              <p className="text-xs sm:text-sm text-purple-200 font-medium tracking-normal">
                Academy & Innovation Hub
              </p>
            </motion.div>

            {/* Tabular Percentage Display */}
            <div className="pt-2">
              <span className="font-sans text-5xl sm:text-6xl font-light tabular-nums text-purple-100 tracking-tight">
                {progress.toString().padStart(2, "0")}%
              </span>
            </div>

            {/* Progress Bar */}
            <div className="w-full max-w-xs mx-auto h-[2.5px] bg-white/15 relative overflow-hidden rounded-full">
              <motion.div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-purple-500 via-purple-300 to-white"
                style={{ width: `${progress}%` }}
                transition={{ ease: "linear" }}
              />
            </div>
          </div>

          {/* Bottom Kicker */}
          <div className="text-center text-xs text-zinc-400 font-normal max-w-md mx-auto">
            Building Skills · Creating Opportunities · Shaping Nigerian Fashion
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
