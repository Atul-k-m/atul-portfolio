"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const PROJECTS = [
  {
    id: 1,
    title: "DayTrails",
    category: "Mental Wellness Platform",
    year: "2026",
    description:
      "A privacy-first ‘Mental Strava’ combining GPS journey tracking with emotional wellness analytics and AI-style daily journals.",
    tags: ["React", "Vite", "Tailwind", "Leaflet", "IndexedDB"],
    imageUrl: "/p1svg.svg",
    demoLink: "https://daytrails.vercel.app",
    githubLink: "https://github.com/yourusername/daytrails",
    accent: "#5B3FD4",
    number: "01",
  },
  {
    id: 2,
    title: "Sentinel IDS",
    category: "Cybersecurity System",
    year: "2026",
    description:
      "An ML-powered intrusion detection system focused on anomaly detection, explainable AI, and real-time threat analysis.",
    tags: ["Python", "Next.js", "Machine Learning", "SHAP", "Security"],
    imageUrl: "/p2.svg",

    githubLink: "https://github.com/Atul-k-m/idsproject",
    accent: "#EC4899",
    number: "02",
  },
  {
    id: 3,
    title: "UniPM",
    category: "Developer Tooling",
    year: "2025",
    description:
      "A universal cross-platform package manager with dependency resolution and automated installation workflows.",
    tags: ["C++", "Shell", "CLI", "Automation", "Linux"],
    imageUrl: "/p3.svg",
    demoLink: "https://ieee-cs-bmsit.github.io/unipm/",
    githubLink: "https://github.com/ieee-cs-bmsit/unipm",
    accent: "#10B981",
    number: "03",
  },
  {
    id: 4,
    title: "Reel-Agent",
    category: "AI Automation Tool",
    year: "2025",
    description:
      "An autonomous AI video production pipeline built using scalable microservice architecture and Dockerized deployment.",
    tags: ["React", "Python", "FastAPI", "Docker", "AI"],
    imageUrl: "/p4.svg",
   
    githubLink: "https://github.com/yourusername/reel-agent",
    accent: "#F59E0B",
    number: "04",
  },
];

// ─── Spider-Man Web SVG Paths ─────────────────────────────────────────────────
// Full 800×1600 coordinate space (viewBox), webs flow between cards
const WEB_PATHS = [
  // Left strand — flows top-left to bottom-left
  "M 80,0 Q 60,200 40,400 Q 20,600 80,800 Q 140,1000 60,1200 Q 0,1400 80,1600",
  // Right strand — mirror
  "M 720,0 Q 740,200 760,400 Q 780,600 720,800 Q 660,1000 740,1200 Q 800,1400 720,1600",
  // Center weave 1
  "M 400,0 C 300,150 500,300 400,450 C 300,600 500,750 400,900 C 300,1050 500,1200 400,1350 C 300,1500 400,1600 400,1600",
  // Crossweb diagonal left-to-right
  "M 80,200 Q 240,250 400,200 Q 560,150 720,200",
  "M 80,600 Q 240,650 400,600 Q 560,550 720,600",
  "M 80,1000 Q 240,1050 400,1000 Q 560,950 720,1000",
  "M 80,1400 Q 240,1450 400,1400 Q 560,1350 720,1400",
  // Radial fans from center
  "M 400,200 L 80,0",
  "M 400,200 L 720,0",
  "M 400,600 L 80,400",
  "M 400,600 L 720,400",
  "M 400,1000 L 80,800",
  "M 400,1000 L 720,800",
  "M 400,1400 L 80,1200",
  "M 400,1400 L 720,1200",
];

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  useGSAP(
    () => {
      // ── SVG web path draw-on-scroll ─────────────────────────────────────
      const paths = svgRef.current?.querySelectorAll("path");
      paths?.forEach((path, i) => {
        const len = path.getTotalLength();
        gsap.set(path, {
          strokeDasharray: len,
          strokeDashoffset: len,
        });
        gsap.to(path, {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 30%",
            end: "bottom 70%",
            scrub: 0.6 + i * 0.05,
          },
        });
      });

      // ── Glow dot travelling along center strand ─────────────────────────
      const centerPath = svgRef.current?.querySelectorAll("path")[2];
      const dot = svgRef.current?.querySelector(".web-dot") as SVGCircleElement | null;
      if (centerPath && dot) {
        const totalLen = centerPath.getTotalLength();
        gsap.to(
          {},
          {
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 30%",
              end: "bottom 70%",
              scrub: 0.5,
              onUpdate(self) {
                const pt = centerPath.getPointAtLength(
                  self.progress * totalLen
                );
                gsap.set(dot, { attr: { cx: pt.x, cy: pt.y } });
              },
            },
          }
        );
      }

      // ── Card entrance animations ─────────────────────────────────────────
      const cards = gsap.utils.toArray<HTMLElement>(".project-card");
      cards.forEach((card, i) => {
        const dir = i % 2 === 0 ? -60 : 60;
        gsap.from(card, {
          x: dir,
          opacity: 0,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        });
      });

      // ── Section heading reveal ──────────────────────────────────────────
      gsap.from(".projects-heading-word", {
        y: "100%",
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".projects-heading",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="projects"
      className="relative bg-[#e4e4e4] py-[clamp(80px,10vw,160px)] px-5 md:px-10 overflow-hidden z-20"
    >
      {/* Column grid lines */}
      <div className="absolute inset-0 pointer-events-none grid grid-cols-5 opacity-[0.05] z-0">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="border-r border-[#111111] h-full" />
        ))}
      </div>

      {/* Section tag */}
      <span className="absolute top-8 left-8 font-poppins text-[10px] uppercase tracking-widest text-[#6B6B6B] z-10">
        04 — Selected Works
      </span>

      {/* ── Spider-Man Web SVG overlay (desktop only) ── */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block z-0 overflow-hidden">
        <svg
          ref={svgRef}
          className="absolute top-0 left-0 w-full h-full"
          viewBox="0 0 800 1600"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter id="web-glow">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <radialGradient id="dot-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#5B3FD4" stopOpacity="1" />
              <stop offset="100%" stopColor="#5B3FD4" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Main web strands */}
          {WEB_PATHS.map((d, i) => (
            <path
              key={i}
              d={d}
              stroke={i < 3 ? "#5B3FD4" : "#8B5CF640"}
              strokeWidth={i < 3 ? "1.8" : "1"}
              strokeLinecap="round"
              opacity={i < 3 ? 0.5 : 0.35}
              filter={i < 3 ? "url(#web-glow)" : undefined}
            />
          ))}

          {/* Travelling dot */}
          <circle
            className="web-dot"
            cx="-20"
            cy="-20"
            r="5"
            fill="url(#dot-glow)"
          >
            <animate
              attributeName="r"
              values="5;8;5"
              dur="1.2s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
      </div>

      {/* ── Content ── */}
      <div className="max-w-6xl mx-auto relative z-10">

        {/* Section heading */}
        <div className="projects-heading overflow-hidden mb-[clamp(50px,8vw,100px)]">
          <h2 className="font-instrument italic text-[clamp(42px,7vw,90px)] font-normal text-[#111111] tracking-tight leading-[1.0]">
            <span className="projects-heading-word inline-block mr-3">Selected</span>
            <span className="projects-heading-word font-bricolage font-extrabold not-italic uppercase tracking-tighter text-[#5B3FD4] inline-block">
              Work
            </span>
          </h2>
          <p className="projects-heading-word font-sora text-sm text-[#6B6B6B] mt-3 max-w-sm">
            A curated selection of projects that push the boundaries of digital craftsmanship.
          </p>
        </div>

        {/* ── Projects Grid ── */}
        <div className="space-y-[clamp(40px,8vw,100px)]">
          {PROJECTS.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={project.id}
                className={`project-card group flex flex-col md:flex-row gap-6 md:gap-10 items-center ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* ── Image panel ── */}
                <a
                  href={project.demoLink}
                  className="relative flex-shrink-0 w-full md:w-[55%] aspect-[16/10] rounded-2xl overflow-hidden bg-zinc-100 block"
                  style={{
                    boxShadow:
                      hoveredId === project.id
                        ? `0 30px 60px -12px ${project.accent}40, 0 0 0 1px ${project.accent}20`
                        : "0 10px 40px -10px rgba(0,0,0,0.12)",
                    transition: "box-shadow 0.5s ease",
                  }}
                >
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 55vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Gradient overlay on hover */}
                  <div
                    className="absolute inset-0 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(135deg, ${project.accent}30, transparent)`,
                      opacity: hoveredId === project.id ? 1 : 0,
                    }}
                  />
                  {/* Number badge */}
                  <div className="absolute top-4 left-4 font-instrument italic text-5xl font-bold text-white/20 select-none">
                    {project.number}
                  </div>
                  {/* Arrow badge on hover */}
                  <div
                    className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-lg transition-all duration-400"
                    style={{
                      transform:
                        hoveredId === project.id
                          ? "scale(1) rotate(-45deg)"
                          : "scale(0) rotate(0deg)",
                    }}
                  >
                    <ArrowUpRight size={18} style={{ color: project.accent }} />
                  </div>
                </a>

                {/* ── Text panel ── */}
                <div className={`flex-1 flex flex-col gap-4 ${isEven ? "" : "md:text-right md:items-end"}`}>
                  {/* Year + category */}
                  <div className={`flex items-center gap-3 ${isEven ? "" : "md:justify-end"}`}>
                    <span
                      className="font-poppins text-[11px] font-bold uppercase tracking-widest"
                      style={{ color: project.accent }}
                    >
                      {project.year}
                    </span>
                    <span className="w-6 h-px bg-[#6B6B6B]" />
                    <span className="font-poppins text-[11px] font-bold uppercase tracking-widest text-[#6B6B6B]">
                      {project.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-bricolage text-[clamp(26px,3.5vw,44px)] font-[900] tracking-tight text-[#111111] leading-[1.1]">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sora text-sm md:text-base leading-relaxed text-[#6B6B6B] max-w-sm">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className={`flex flex-wrap gap-2 ${isEven ? "" : "md:justify-end"}`}>
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-poppins text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border transition-all duration-300"
                        style={{
                          borderColor:
                            hoveredId === project.id
                              ? project.accent
                              : "transparent",
                          backgroundColor:
                            hoveredId === project.id
                              ? `${project.accent}12`
                              : "rgba(0,0,0,0.06)",
                          color:
                            hoveredId === project.id
                              ? project.accent
                              : "#6B6B6B",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div
                    className={`flex gap-4 mt-4 ${isEven ? "" : "md:justify-end"}`}
                  >
                    {/* Live Demo */}
                    {project.demoLink && (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group/btn inline-flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 hover:bg-[${project.accent}] hover:text-white`}
                        style={{
                          backgroundColor: hoveredId === project.id ? project.accent : "transparent",
                          color: hoveredId === project.id ? "#fff" : project.accent,
                        }}
                      >
                        <span className="font-poppins text-[10px] font-bold uppercase tracking-widest">
                          Live Demo
                        </span>
                        <ArrowUpRight size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </a>
                    )}

                    {/* GitHub */}
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group/btn inline-flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 hover:bg-[${project.accent}] hover:text-white`}
                        style={{
                          backgroundColor: hoveredId === project.id ? project.accent : "transparent",
                          color: hoveredId === project.id ? "#fff" : project.accent,
                        }}
                      >
                        <span className="font-poppins text-[10px] font-bold uppercase tracking-widest">
                          GitHub
                        </span>
                        <ArrowUpRight size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Footer CTA ── */}
        <div className="mt-[clamp(60px,10vw,120px)] text-center">
          <p className="font-sora text-sm text-[#6B6B6B] mb-6">
            Want to see more?
          </p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Atul-k-m"
            className="inline-flex items-center gap-3 font-poppins text-[13px] font-bold uppercase tracking-[0.12em] border border-[#111111] text-[#111111] px-10 py-4 rounded-full hover:bg-[#111111] hover:text-white hover:border-[#111111] transition-all duration-300 group"
          >
            Let&apos;s work together
            <ArrowUpRight
              size={16}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
