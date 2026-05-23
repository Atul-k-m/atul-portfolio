"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowDown } from "lucide-react";

export default function Hero({ loaded }: { loaded: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!loaded) return;

      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      // Stagger each hero word line
      tl.from(".hero-line", {
        y: "110%",
        duration: 1.1,
        stagger: 0.09,
        ease: "power4.out",
      });

      // Scattered elements fade in
      tl.from(
        ".hero-scatter",
        {
          opacity: 0,
          y: 20,
          duration: 0.9,
          stagger: 0.1,
          ease: "power3.out",
        },
        "-=0.5"
      );

      // CTA + scroll arrow
      tl.from(
        ".hero-cta",
        {
          opacity: 0,
          y: 24,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
        },
        "-=0.4"
      );
    },
    { dependencies: [loaded], scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full bg-[#e4e4e4] overflow-hidden select-none"
    >
      {/* Subtle 5-col grid lines */}
      <div className="absolute inset-0 pointer-events-none grid grid-cols-5 opacity-[0.06] z-0">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="border-r border-[#111111] h-full" />
        ))}
      </div>

      {/* Section tag */}
      <span className="absolute top-28 left-8 font-poppins text-[10px] uppercase tracking-widest text-[#6B6B6B] z-10">
        01 — Home
      </span>

      {/* ───────────── DESKTOP LAYOUT ───────────── */}
      <div className="hidden md:flex flex-col justify-center min-h-screen px-10 lg:px-20 xl:px-28 relative z-10">

        {/* Scattered top-right descriptor */}
        <div className="hero-scatter absolute top-[22%] right-10 lg:right-20 max-w-[220px] text-right">
          <p className="font-sora text-[13px] leading-[1.65] text-[#6B6B6B]">
           A creative developer and technical builder crafting impactful products, scalable systems, and immersive digital experiences.
          </p>
        </div>


        {/* Giant typographic headline */}
        <div className="flex flex-col gap-0 mt-4">
          {/* Line 1 — italic word */}
          <div className="overflow-hidden">
            <h1 className="hero-line font-instrument italic text-[clamp(32px,4.5vw,72px)] text-[#5B3FD4] leading-[1.05] tracking-normal">
              introducing
            </h1>
          </div>

          {/* Line 2 — massive name */}
          <div className="overflow-hidden">
            <h1 className="hero-line font-bricolage font-[900] text-[clamp(80px,14vw,200px)] leading-[0.85] tracking-tighter text-[#111111] uppercase">
              ATUL
            </h1>
          </div>

          {/* Line 3 — secondary descriptor line */}
          <div className="overflow-hidden">
            <h2 className="hero-line font-bricolage font-[800] text-[clamp(24px,3.5vw,52px)] leading-[1.1] tracking-tight text-[#111111] uppercase">
              Interactive&nbsp;
              <span className="font-instrument font-normal italic not-italic normal-case text-[#5B3FD4]">
                engineer
              </span>
              &nbsp;&amp; creator.
            </h2>
          </div>
        </div>

        {/* Bottom bar — availability + CTA */}
        <div className="flex items-center gap-6 mt-14">
          {/* Available badge */}
          <div className="hero-cta flex items-center gap-2 border border-[#111111]/20 rounded-full px-4 py-2 bg-white/60 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-poppins text-[11px] uppercase tracking-widest text-[#6B6B6B]">
              Available for work
            </span>
          </div>

          {/* CTA */}
          <a
            href="#projects"
            className="hero-cta group font-poppins text-[13px] font-bold uppercase tracking-[0.12em] bg-[#111111] text-white px-10 py-4 rounded-full hover:bg-[#5B3FD4] transition-all duration-300 shadow-md"
          >
            View My Work
          </a>

          <a
            href="#about"
            className="hero-cta font-poppins text-[13px] font-semibold uppercase tracking-[0.1em] text-[#6B6B6B] hover:text-[#111111] transition-colors"
          >
            About me →
          </a>
        </div>

        {/* Italic aside — inline below CTA */}
        <p className="hero-scatter font-instrument italic text-[13px] text-[#6B6B6B] leading-[1.6] mt-1">
          (a lot of late nights &amp; obsession with detail)
        </p>

        {/* Scroll hint — bottom right */}
        <div className="hero-scatter absolute bottom-10 right-10 lg:right-20 flex flex-col items-center gap-2">
          <span className="font-poppins text-[9px] uppercase tracking-widest text-[#6B6B6B]">
            Scroll
          </span>
          <div className="w-px h-12 bg-[#111111]/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-[#5B3FD4] animate-[slideDown_1.5s_ease-in-out_infinite]" />
          </div>
        </div>

      </div>

      {/* ───────────── MOBILE LAYOUT ───────────── */}
      <div className="flex md:hidden flex-col justify-between min-h-screen px-5 pt-32 pb-10 relative z-10">

        {/* Hero type */}
        <div className="flex flex-col">
          <div className="overflow-hidden mb-1">
            <span className="hero-line block font-instrument italic text-[clamp(22px,6vw,36px)] text-[#5B3FD4] leading-[1.1]">
              introducing
            </span>
          </div>
          <div className="overflow-hidden">
            <h1 className="hero-line font-bricolage font-[900] text-[clamp(72px,22vw,130px)] leading-[0.82] tracking-tighter text-[#111111] uppercase">
              ATUL
            </h1>
          </div>
          <div className="overflow-hidden mt-1">
            <h2 className="hero-line font-bricolage font-bold text-[clamp(18px,5.5vw,28px)] leading-[1.15] text-[#111111] uppercase tracking-tight">
              Engineer &amp; Creator
            </h2>
          </div>
        </div>

        {/* Tagline */}
        <p className="hero-scatter font-sora text-[14px] leading-[1.7] text-[#6B6B6B] mt-6 max-w-[300px]">
          Crafting premium interfaces, fluid scroll animations, and bespoke web solutions.
        </p>

        {/* Stats row */}
        <div className="hero-scatter grid grid-cols-3 gap-3 mt-8 border-t border-[#111111]/10 pt-6">
          {[
            { n: "8+", l: "Hustling" },
            { n: "40+", l: "Projects" },
            { n: "12+", l: "Clients" },
          ].map((s) => (
            <div key={s.n} className="flex flex-col gap-0.5">
              <span className="font-bricolage font-[900] text-[28px] text-[#111111] leading-none">
                {s.n}
              </span>
              <span className="font-poppins text-[10px] uppercase tracking-wider text-[#6B6B6B]">
                {s.l}
              </span>
            </div>
          ))}
        </div>

        {/* Available + CTA */}
        <div className="hero-scatter flex flex-col gap-3 mt-8">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
            <span className="font-poppins text-[11px] uppercase tracking-widest text-[#6B6B6B]">
              Available for work
            </span>
          </div>
          <a
            href="#projects"
            className="hero-cta w-full text-center font-poppins text-[13px] font-bold uppercase tracking-[0.12em] bg-[#111111] text-white px-8 py-4 rounded-full hover:bg-[#5B3FD4] transition-all duration-300"
          >
            View My Work
          </a>
        </div>

        {/* Italic note */}
        <p className="hero-scatter font-instrument italic text-[12px] text-[#6B6B6B] mt-4 text-center">
          (a lot of late nights &amp; pixel obsession)
        </p>

        {/* Scroll arrow */}
        <div className="hero-cta flex justify-center mt-6">
          <div className="flex flex-col items-center gap-1 animate-bounce">
            <ArrowDown size={16} className="text-[#6B6B6B]" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideDown {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
      `}</style>
    </section>
  );
}
