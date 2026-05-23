"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hide and do not initialize cursor on touch devices
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    gsap.set(cursor, { xPercent: -50, yPercent: -50 });

    const xTo = gsap.quickTo(cursor, "x", { duration: 0.2, ease: "power3" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.2, ease: "power3" });

    const onMouseMove = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    const onMouseEnter = () => {
      gsap.to(cursor, { scale: 2.5, duration: 0.3, backgroundColor: "#5B3FD4" });
    };

    const onMouseLeave = () => {
      gsap.to(cursor, { scale: 1, duration: 0.3, backgroundColor: "#5B3FD4" });
    };

    window.addEventListener("mousemove", onMouseMove);

    // Apply scaling listeners to all standard clickable elements
    const attachListeners = () => {
      const elements = document.querySelectorAll("a, button, [role='button'], .cursor-pointer");
      elements.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnter);
        el.removeEventListener("mouseleave", onMouseLeave);
        el.addEventListener("mouseenter", onMouseEnter);
        el.addEventListener("mouseleave", onMouseLeave);
      });
    };

    attachListeners();

    // Listen for DOM changes to auto-bind to elements added dynamically
    const observer = new MutationObserver(attachListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      const elements = document.querySelectorAll("a, button, [role='button'], .cursor-pointer");
      elements.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnter);
        el.removeEventListener("mouseleave", onMouseLeave);
      });
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-3 h-3 bg-[#5B3FD4] rounded-full pointer-events-none z-[9999] mix-blend-difference hidden lg:block"
    />
  );
}
