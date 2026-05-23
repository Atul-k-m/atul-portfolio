"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [count, setCount] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Lock scroll on mount
    document.body.style.overflow = "hidden";

    let current = 0;
    const interval = setInterval(() => {
      // Sleek, non-linear progress simulation (starts fast, slows down, then finishes)
      const increment = Math.floor(Math.random() * 8) + 2;
      current = Math.min(current + increment, 100);
      setCount(current);

      if (current === 100) {
        clearInterval(interval);
        // Slight pause at 100% for readability before sliding up
        setTimeout(() => {
          setIsExiting(true);
        }, 350);
      }
    }, 50);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "";
    };
  }, []);

  const handleAnimationComplete = () => {
    // Unlock body scroll once the exit slide animation ends
    document.body.style.overflow = "";
    onComplete();
  };

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
          onAnimationComplete={handleAnimationComplete}
          className="fixed inset-0 bg-[#0c0c0c] text-white z-[9999] flex flex-col justify-between p-8 md:p-12 font-bricolage select-none pointer-events-auto"
        >
          {/* Top row status */}
          <div className="flex justify-between items-center w-full">
            <span className="text-sm font-semibold tracking-tight text-zinc-400 lowercase">
              atul.dev
            </span>
            <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-semibold">
              (portfolio 2026)
            </span>
          </div>

          {/* Large Center Counter */}
          <div className="flex flex-col items-center justify-center">
            <span className="font-instrument italic text-[24vw] md:text-[18vw] leading-none text-[#5B3FD4] font-normal tracking-tighter">
              {count.toString().padStart(3, "0")}
            </span>
          </div>

          {/* Bottom row status info */}
          <div className="flex justify-between items-end w-full">
            <div className="flex flex-col gap-1 text-left">
              <span className="text-[10px] uppercase tracking-wider text-zinc-500 font-bold">
                creative dev & designer
              </span>
              <span className="text-xs font-medium text-zinc-300">
                assembling interactive space
              </span>
            </div>
            <div className="text-right">
              <span className="text-[10px] uppercase tracking-wider text-zinc-500 block font-bold">
                system state
              </span>
              <span className="text-xs font-medium text-zinc-300">
                {count < 100 ? "loading portfolio assets..." : "ready"}
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
