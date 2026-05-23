"use client";

import { motion } from "framer-motion";
import { Mail, Download } from "lucide-react";

const BUBBLES = [
  { top: "10%", left: "15%", size: "8px", duration: "5s", delay: "0s" },
  { top: "25%", left: "75%", size: "6px", duration: "3s", delay: "1.5s" },
  { top: "45%", left: "10%", size: "10px", duration: "7s", delay: "0.5s" },
  { top: "60%", left: "85%", size: "7px", duration: "4.5s", delay: "2s" },
  { top: "80%", left: "20%", size: "9px", duration: "6s", delay: "1s" },
  { top: "15%", left: "60%", size: "6px", duration: "4s", delay: "0.2s" },
  { top: "35%", left: "30%", size: "8px", duration: "5.5s", delay: "1.2s" },
  { top: "70%", left: "45%", size: "10px", duration: "6.5s", delay: "0.8s" },
  { top: "50%", left: "65%", size: "8px", duration: "3.5s", delay: "2.5s" },
  { top: "85%", left: "70%", size: "7px", duration: "5s", delay: "1.8s" },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-[70vh] bg-[#5B3FD4] text-white py-24 px-6 flex flex-col justify-center items-center overflow-hidden"
    >
      {/* Floating Bubbles Styling Keyframe Injector */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes bubbleFloat {
          0% { transform: translateY(0) scale(1); opacity: 0.25; }
          50% { transform: translateY(-25px) scale(1.1); opacity: 0.55; }
          100% { transform: translateY(0) scale(1); opacity: 0.25; }
        }
        .floating-bubble-item {
          animation: bubbleFloat infinite ease-in-out;
        }
      ` }} />

      {/* Small Section Identifier Tag */}
      <span className="absolute top-8 left-8 font-poppins text-[10px] uppercase tracking-widest text-[rgba(255,255,255,0.4)]">
        05 — Contact
      </span>

      {/* Floating SVG/CSS Bubbles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {BUBBLES.map((bubble, i) => (
          <div
            key={i}
            className="floating-bubble-item absolute bg-white/15 rounded-full"
            style={{
              top: bubble.top,
              left: bubble.left,
              width: bubble.size,
              height: bubble.size,
              animationDuration: bubble.duration,
              animationDelay: bubble.delay,
            }}
          />
        ))}
      </div>

      {/* Foreground Content Card */}
      <div className="max-w-4xl mx-auto z-10 text-center flex flex-col items-center">
        
        {/* Small Label above heading */}
        <span className="font-poppins text-[11px] font-bold uppercase tracking-[0.2em] text-[rgba(255,255,255,0.5)] mb-4">
          {/* EDIT: replace template badge */}
          GET IN TOUCH
        </span>

        {/* Heading: two lines, Instrument Serif italic */}
        <h2 className="font-instrument text-[clamp(40px,7vw,90px)] font-[400] italic leading-[1.1] text-white text-center">
          Let's build something <br />
          {/* EDIT: replace template CTA text */}
          <span className="font-bricolage font-extrabold not-italic uppercase tracking-tighter">together.</span>
        </h2>

        {/* Subtext: Sora 17px */}
        <p className="font-sora text-[17px] text-[rgba(255,255,255,0.7)] mt-6 text-center max-w-xl">
          {/* EDIT: replace template subtext details */}
          Open to freelance, full-time, and collabs.
        </p>

        {/* Buttons Row */}
        <div className="flex flex-col sm:flex-row items-center gap-[16px] mt-12 w-full sm:w-auto justify-center flex-wrap">
          {/* Button 1: Send a Message */}
          <a
            href="mailto:hello@atulkm189@gmail.com"
            className="group font-poppins text-[14px] font-bold uppercase tracking-wider bg-white text-[#5B3FD4] px-10 py-4 rounded-[100px] flex items-center gap-3 hover:bg-[#EDE9FF] transition-all duration-300 w-full sm:w-auto justify-center shadow-lg"
          >
            {/* EDIT: replace button email */}
            Send a Message
            <Mail size={16} />
          </a>

          {/* Button 2: Download Resume */}
          <a
            href="/ATUL_KUMAR_MISHRA_1BY23IS044_BMSITM.pdf"
            download
            className="group font-poppins text-[14px] font-bold uppercase tracking-wider border-2 border-[rgba(255,255,255,0.5)] text-white px-10 py-4 rounded-[100px] flex items-center gap-3 hover:border-white hover:bg-white/10 transition-all duration-300 w-full sm:w-auto justify-center"
          >
            {/* EDIT: replace button label */}
            Download Resume
            <Download size={16} className="group-hover:translate-y-0.5 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
}
