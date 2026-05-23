"use client";

import { useState } from "react";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <main className="relative min-h-screen w-full bg-[#e4e4e4] overflow-x-hidden">
      {/* Visual Preloader Screen */}
      <Preloader onComplete={() => setLoaded(true)} />

      {/* Navigation Menu */}
      <Navbar />

      {/* Sections */}
      <Hero loaded={loaded} />
      <About />
      <Projects />
      <Timeline />
      <Contact />
      <Footer />
    </main>
  );
}
