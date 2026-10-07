import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;
  const isCompletedRef = useRef(false);

  const finish = useRef(() => {
    if (isCompletedRef.current) return;
    isCompletedRef.current = true;
    setIsDone(true);
    setTimeout(() => {
      onCompleteRef.current();
    }, 250);
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        finish.current();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    // High performance animation loop using performance.now
    const startTime = performance.now();
    const duration = 1100; // 1.1s total smooth intro duration
    let animFrameId: number;

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const rawProgress = Math.min(1, elapsed / duration);
      // Ease out cubic progression for a snappy initial burst and smooth finish
      const easedProgress = 1 - Math.pow(1 - rawProgress, 3);
      const currentVal = Math.min(100, Math.round(easedProgress * 100));

      setProgress(currentVal);

      if (rawProgress < 1) {
        animFrameId = requestAnimationFrame(tick);
      } else {
        setProgress(100);
        setTimeout(() => {
          finish.current();
        }, 120);
      }
    };

    animFrameId = requestAnimationFrame(tick);

    // Fallback safety timer: never stay stuck longer than 1.5s under any condition
    const safetyTimer = setTimeout(() => {
      finish.current();
    }, 1500);

    return () => {
      cancelAnimationFrame(animFrameId);
      clearTimeout(safetyTimer);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.99 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 bg-[#0c0617] text-white flex flex-col justify-between p-6 sm:p-10 select-none overflow-hidden will-change-opacity"
        >
          {/* Top Bar: Established & Fast Skip */}
          <div className="flex items-center justify-between text-xs text-purple-200/90 font-medium">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-purple-400 inline-block animate-ping" />
              <span>Est. 2016 · Jos, Plateau State, Nigeria</span>
            </div>
            <button
              type="button"
              onClick={() => finish.current()}
              className="text-zinc-400 hover:text-white transition-colors cursor-pointer text-xs font-medium px-2 py-1 rounded bg-white/5 hover:bg-white/10"
            >
              Skip [Esc]
            </button>
          </div>

          {/* Center: Brand Monogram & Title */}
          <div className="max-w-lg mx-auto w-full text-center space-y-6">
            {/* Monogram Emblem */}
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative inline-flex items-center justify-center w-20 h-20 mx-auto"
            >
              <div className="absolute inset-0 bg-purple-600/30 rounded-full blur-xl" />
              <div className="relative w-18 h-18 border border-purple-400/50 rounded-full flex items-center justify-center bg-purple-950/70 backdrop-blur-md shadow-lg shadow-purple-950/60">
                <span className="font-serif text-3xl font-bold text-white tracking-normal">S</span>
                <span className="w-1.5 h-1.5 bg-purple-400 absolute bottom-3.5 right-4 rounded-full" />
              </div>
            </motion.div>

            {/* Brand Title with Natural Typography */}
            <motion.div
              initial={{ y: 8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.05, duration: 0.4 }}
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
            <div className="w-full max-w-xs mx-auto h-[3px] bg-white/15 relative overflow-hidden rounded-full">
              <div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-purple-500 via-purple-300 to-white transition-all duration-75 ease-out rounded-full"
                style={{ width: `${progress}%` }}
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
