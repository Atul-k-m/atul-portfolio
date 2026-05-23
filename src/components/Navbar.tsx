"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { name: "(about)", href: "#about" },
  { name: "(works)", href: "#projects" },
  { name: "(contact)", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-md bg-[rgba(228,228,228,0.85)] border-b-[0.5px] border-[rgba(0,0,0,0.05)] py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          {/* Logo - Bricolage bold 16px */}
          <a
            href="#"
            className="font-bricolage text-base font-bold tracking-tight text-[#111111] hover:opacity-80 transition-opacity lowercase"
          >
            {/* EDIT: replace with logo name */}
            atul.dev
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-bricolage text-[14px] font-medium text-[#111111] hover:text-[#5B3FD4] transition-colors relative group py-2 lowercase"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#5B3FD4] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <a
              href="#contact"
              className="font-bricolage text-[13px] font-semibold bg-[#111111] text-white px-5 py-2 rounded-full hover:bg-[#5B3FD4] transition-all duration-300 lowercase"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile Menu Btn */}
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden p-2 text-[#111111] hover:text-[#5B3FD4] transition-colors cursor-pointer"
            aria-label="Open Menu"
          >
            <Menu size={20} />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 z-50 md:hidden backdrop-blur-sm"
            />

            {/* Sidebar Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-4/5 max-w-sm bg-[#F5F0E8] z-50 shadow-2xl p-8 flex flex-col justify-between md:hidden"
            >
              <div>
                <div className="flex justify-between items-center mb-12">
                  <span className="font-bricolage text-base font-bold text-[#111111] lowercase">atul.dev</span>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 text-[#111111] hover:text-[#5B3FD4] transition-colors cursor-pointer"
                    aria-label="Close Menu"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="flex flex-col gap-6">
                  {NAV_LINKS.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="font-bricolage text-3xl font-semibold text-[#111111] hover:text-[#5B3FD4] transition-colors py-2 lowercase"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="font-bricolage text-sm font-semibold text-center bg-[#111111] text-white py-4 rounded-full hover:bg-[#5B3FD4] transition-colors lowercase"
                >
                  Get in Touch
                </a>
                <p className="font-sora text-xs text-[#6B6B6B] text-center">
                  © 2026 Atul Kumar Mishra. All rights reserved.
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
