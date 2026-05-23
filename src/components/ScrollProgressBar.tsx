"use client";

import { useEffect, useState } from "react";

export default function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let rAFId: number;

    const updateScrollProgress = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        const scrolled = (window.scrollY / docHeight) * 100;
        setProgress(scrolled);
      }
      rAFId = requestAnimationFrame(updateScrollProgress);
    };

    rAFId = requestAnimationFrame(updateScrollProgress);

    return () => {
      cancelAnimationFrame(rAFId);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-[3px] bg-[#5B3FD4] z-[9999] transition-all duration-75"
      style={{ width: `${progress}%` }}
    />
  );
}
