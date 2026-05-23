"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const ARCHIVE_ITEMS = [
  {
    id: "01",
    title: "The Digital Spark",
    category: "First Curiosity Into Technology",
    tech: "Games / Internet / Exploration",
    year: "2014",
    color: "#3B82F6",
  },
  {
    id: "02",
    title: "Started Learning Tech",
    category: "Programming & Creative Curiosity",
    tech: "HTML / CSS / Basic Programming",
    year: "2016",
    color: "#10B981",
  },
  {
    id: "03",
    title: "Dove Into Open Source",
    category: "Communities & Collaboration",
    tech: "Git / GitHub / OSS Culture",
    year: "2019",
    color: "#F59E0B",
  },
  {
    id: "04",
    title: "Started Freelancing",
    category: "Design & Development Work",
    tech: "Frontend / UI / Client Projects",
    year: "2020",
    color: "#EC4899",
  },
  {
    id: "05",
    title: "Started Engineering Journey",
    category: "College & Technical Growth",
    tech: "DSA / Full-Stack / Systems",
    year: "2023",
    color: "#6366F1",
  },
  {
    id: "06",
    title: "On The Job Hunt",
    category: "Building, Learning & Applying",
    tech: "Projects / Open Source / AI",
    year: "2026",
    color: "#8B5CF6",
  },
  {
    id: "07",
    title: "Manifesting The Dream Role",
    category: "Future Vision & Growth",
    tech: "Impact / Innovation / Leadership",
    year: "2038",
    color: "#5B3FD4",
  },
];

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const darkLayerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // ── Same pinned clip-path reveal on ALL screen sizes ──────────────
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=130%",
          pin: true,
          scrub: 0.6,
          anticipatePin: 1,
        },
      });

      // Expand the dark circle from center
      tl.fromTo(
        darkLayerRef.current,
        { clipPath: "circle(60px at 50% 50%)" },
        { clipPath: "circle(150% at 50% 50%)", ease: "none" }
      );

      // Stagger the rows into view inside the dark layer
      tl.fromTo(
        ".archive-row",
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.07,
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.35"
      );
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      id="experience"
      className="relative w-full h-screen bg-[#e4e4e4] overflow-visible z-30"
    >
      {/* ── Sticky wrapper (same height as viewport) ── */}
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden flex items-center justify-center">

        {/* ═══════════════════════════════════════════════
            LAYER 1 — Light background (always visible)
           ═══════════════════════════════════════════════ */}
        <div className="absolute inset-0 bg-[#e4e4e4] flex flex-col justify-center items-center px-4 md:px-6">
          {/* Grid lines */}
          <div className="absolute inset-0 pointer-events-none grid grid-cols-5 opacity-[0.06]">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="border-r border-[#111111] h-full" />
            ))}
          </div>

          <div className="absolute top-6 left-6 md:top-8 md:left-8 font-poppins text-[10px] uppercase tracking-widest text-[#6B6B6B] z-10">
            03 — Timeline
          </div>

          {/* Outline heading */}
          <div className="text-center select-none pointer-events-none z-10">
            <h2 className="font-instrument italic text-[clamp(48px,16vw,160px)] leading-none uppercase text-stroke tracking-tighter">
              Timeline
            </h2>
            <p className="font-bricolage text-[10px] md:text-xs font-semibold uppercase tracking-wider text-[#6b6b6b] mt-3">
              Scroll to reveal details
            </p>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════
            LAYER 2 — Dark reveal (clip-path expands)
           ═══════════════════════════════════════════════ */}
        <div
          ref={darkLayerRef}
          className="absolute inset-0 bg-black text-[#e4e4e4] flex flex-col justify-center items-center px-4 md:px-6 z-10 overflow-hidden"
          style={{ clipPath: "circle(60px at 50% 50%)" }}
        >
          {/* Grid lines */}
          <div className="absolute inset-0 pointer-events-none grid grid-cols-5 opacity-[0.05]">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="border-r border-[#e4e4e4] h-full" />
            ))}
          </div>

          <div className="absolute top-6 left-6 md:top-8 md:left-8 font-poppins text-[10px] uppercase tracking-widest text-zinc-500 z-10">
            03 — Timeline
          </div>

          {/* Content */}
          <div className="w-full max-w-5xl flex flex-col justify-center items-center z-10 relative px-0">
            {/* Outline heading inside dark layer */}
            <div className="text-center select-none pointer-events-none mb-6 md:mb-10">
              <h2 className="font-instrument italic text-[clamp(42px,14vw,140px)] leading-none uppercase text-stroke-white tracking-tighter">
                Timeline
              </h2>
            </div>

            {/* ── Rows table ── */}
            <div className="w-full border-t border-zinc-800 divide-y divide-zinc-900">
              {ARCHIVE_ITEMS.map((item) => (
                <div
                  key={item.id}
                  className="archive-row group cursor-pointer hover:bg-zinc-900/40 transition-colors duration-300 rounded-lg"
                >
                  {/* ── Desktop row (md+): all columns in one line ── */}
                  <div className="hidden md:flex justify-between items-center py-4 px-3">
                    {/* Left: number + title */}
                    <div className="flex items-center gap-5 flex-1 min-w-0">
                      <span
                        className="font-instrument italic text-xl flex-shrink-0 transition-colors"
                        style={{ color: item.color }}
                      >
                        {item.id}
                      </span>
                      <h3 className="font-bricolage text-lg lg:text-xl font-medium tracking-tight group-hover:translate-x-1 transition-transform truncate">
                        {item.title}
                      </h3>
                    </div>

                    {/* Right: category + tech + year + arrow */}
                    <div className="flex items-center gap-4 lg:gap-8 flex-shrink-0">
                      <span className="font-poppins text-[10px] font-bold uppercase tracking-wider bg-zinc-900 text-zinc-400 px-3 py-1 rounded-full border border-zinc-800">
                        {item.category}
                      </span>
                      <span className="hidden lg:block font-sora text-sm text-zinc-500">
                        {item.tech}
                      </span>
                      <div className="flex items-center gap-1.5 font-instrument text-lg text-zinc-400 group-hover:text-white transition-colors">
                        {item.year}
                        <ArrowUpRight
                          size={16}
                          className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                        />
                      </div>
                    </div>
                  </div>

                  {/* ── Mobile row: two sub-rows ── */}
                  <div className="md:hidden py-3.5 px-2">
                    {/* Row 1: number + title */}
                    <div className="flex items-center gap-3">
                      <span
                        className="font-instrument italic text-lg flex-shrink-0"
                        style={{ color: item.color }}
                      >
                        {item.id}
                      </span>
                      <h3 className="font-bricolage text-[14px] font-semibold tracking-tight text-[#e4e4e4] leading-[1.25] group-hover:translate-x-0.5 transition-transform">
                        {item.title}
                      </h3>
                    </div>

                    {/* Row 2: pill + tech + year */}
                    <div className="flex items-center gap-2 mt-2 pl-7 flex-wrap">
                      <span className="font-poppins text-[8px] font-bold uppercase tracking-wider bg-zinc-900 text-zinc-400 px-2 py-0.5 rounded-full border border-zinc-800 flex-shrink-0">
                        {item.category}
                      </span>
                      <span className="font-sora text-[10px] text-zinc-600 flex-1 min-w-0 truncate">
                        {item.tech}
                      </span>
                      <div className="flex items-center gap-1 ml-auto flex-shrink-0">
                        <span className="font-instrument text-sm text-zinc-400 group-hover:text-white transition-colors">
                          {item.year}
                        </span>
                        <ArrowUpRight
                          size={12}
                          className="text-zinc-700 opacity-0 group-hover:opacity-100 transition-all duration-300"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
