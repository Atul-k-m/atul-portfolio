"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const POLAROIDS = [
  {
    id: 1,
    url: "/akm.jpeg",
    caption: "Eyes On Bigger Things",
    rotation: -6,
    desktopPos: "top-[5%] left-[5%]",
  },
  {
    id: 2,
    url: "/atul2.jpeg",
    caption: "Soft Smiles, Loud Dreams",
    rotation: 4,
    desktopPos: "top-[15%] right-[5%]",
  },
  {
    id: 3,
    url: "/atul3.jpeg",
    caption: "Painted With Ambition",
    rotation: -2,
    desktopPos: "bottom-[5%] left-[10%]",
  },
  {
    id: 4,
    url: "/atul4.jpeg",
    caption: "Analyzing user flows",
    rotation: 7,
    desktopPos: "bottom-[10%] right-[8%]",
  },
];

export default function About() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const polaroidVariants = (rot: number) => ({
    hidden: { y: 60, opacity: 0, rotate: 0 },
    visible: {
      y: 0,
      opacity: 1,
      rotate: rot,
      transition: {
        type: "spring" as const,
        stiffness: 70,
        damping: 14,
      },
    },
  });

  return (
    <section
      id="about"
      className="relative min-h-screen bg-[#000000] text-white py-[clamp(80px,10vw,160px)] px-6 overflow-hidden flex items-center rounded-b-[40px] md:rounded-b-[120px] shadow-2xl z-20"
    >
      {/* Small Section Identifier Tag */}
      <span className="absolute top-8 left-8 font-poppins text-[10px] uppercase tracking-widest text-[#6B6B6B] z-20">
        02 — About
      </span>

      {/* Grid container: 55% left / 45% right on desktop */}
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[55%_45%] gap-16 items-center z-20 relative">

        {/* LEFT COLUMN: Polaroid Cluster (55% width) */}
        <div className="w-full relative">

          {/* Desktop Scattered Layout */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="hidden lg:block relative w-full h-[520px]"
          >
            {POLAROIDS.map((card) => (
              <motion.div
                key={card.id}
                variants={polaroidVariants(card.rotation)}
                whileHover={{ scale: 1.05, rotate: card.rotation * 0.4, zIndex: 30 }}
                className={`absolute bg-white text-zinc-950 p-[12px] pb-[40px] rounded-xs shadow-[0_8px_32px_rgba(0,0,0,0.4)] w-[210px] border border-zinc-200/10 cursor-pointer ${card.desktopPos}`}
              >
                {/* Red Pin Dot at top center */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[12px] h-[12px] bg-[#D4411A] rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.3)] z-20" />

                <div className="relative aspect-[4/3] w-full bg-zinc-100 overflow-hidden rounded-xs mt-1">
                  <Image
                    src={card.url}
                    alt={card.caption}
                    fill
                    sizes="210px"
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <p className="font-caveat text-[16px] text-[#444] text-center tracking-wide mt-3 select-none">
                  {card.caption}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Mobile Swiper/Horizontal Layout */}
          <div className="lg:hidden w-full flex gap-6 overflow-x-auto px-4 pb-8 snap-x snap-mandatory scrollbar-none">
            {POLAROIDS.map((card) => (
              <div
                key={card.id}
                className="snap-center shrink-0 bg-white text-zinc-950 p-[12px] pb-[40px] rounded-xs shadow-[0_8px_32px_rgba(0,0,0,0.4)] w-[240px] relative"
              >
                {/* Red Pin Dot at top center */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[12px] h-[12px] bg-[#D4411A] rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.3)] z-20" />

                <div className="relative aspect-[4/3] w-full bg-zinc-100 overflow-hidden rounded-xs mt-1">
                  <Image
                    src={card.url}
                    alt={card.caption}
                    fill
                    sizes="240px"
                    className="object-cover"
                  />
                </div>
                <p className="font-caveat text-[18px] text-[#444] text-center tracking-wide mt-3 select-none">
                  {card.caption}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* RIGHT COLUMN: Bio & Stats (45% width) */}
        <div className="flex flex-col gap-6 justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            {/* Bio Title Row */}
            <h2 className="font-instrument italic leading-tight select-none">
              <span className="text-[32px] text-[#6B6B6B] block">Hi, I'm</span>
              {/* EDIT: replace name placeholder */}
              <span className="text-[56px] font-bricolage font-extrabold not-italic text-white block mt-1 tracking-tight">Atul.</span>
            </h2>

            {/* Paragraph Description */}
            <p className="font-sora text-[16px] leading-[1.9] text-[#9B9B9B]">
              I'm a <strong className="text-white font-semibold">developer & open-source builder</strong> passionate about crafting impactful digital experiences and scalable tech solutions. I believe in building technology that feels intuitive, meaningful, and community-driven. I'm also creating <strong className="text-white font-semibold">innovative projects and creative developer tools</strong>.
            </p>

            {/* Stat Blocks */}
            <div className="flex gap-12 mt-6 pt-6 border-t border-zinc-800">
  <div className="flex flex-col gap-1">
    <span className="font-bricolage text-[40px] font-extrabold text-white leading-none">15+</span>
    <span className="font-poppins text-[10px] uppercase tracking-wider text-[#9B9B9B]">Projects Built</span>
  </div>

  <div className="flex flex-col gap-1">
    <span className="font-bricolage text-[40px] font-extrabold text-white leading-none">5+</span>
    <span className="font-poppins text-[10px] uppercase tracking-wider text-[#9B9B9B]">Open Source Events</span>
  </div>

  <div className="flex flex-col gap-1">
    <span className="font-bricolage text-[40px] font-extrabold text-white leading-none">1000+</span>
    <span className="font-poppins text-[10px] uppercase tracking-wider text-[#9B9B9B]">Hours Building</span>
  </div>
</div>
          </motion.div>
        </div>

      </div>

      {/* Giant outlined "About" watermark at the bottom center */}
      <div className="absolute bottom-[-10px] md:bottom-[-20px] left-1/2 -translate-x-1/2 font-instrument italic text-[18vw] leading-none text-stroke-white opacity-20 pointer-events-none select-none z-10 uppercase">
        About
      </div>
    </section>
  );
}
