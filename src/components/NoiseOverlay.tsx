"use client";

import { useEffect, useRef } from "react";

export default function NoiseOverlay() {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Generate a tiny repeating noise tile on canvas
    const canvas = document.createElement("canvas");
    canvas.width = 128;
    canvas.height = 128;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const imgData = ctx.createImageData(128, 128);
    // Fill with random grey pixels at very low opacity
    for (let i = 0; i < imgData.data.length; i += 4) {
      const val = Math.floor(Math.random() * 255);
      imgData.data[i] = val;     // R
      imgData.data[i + 1] = val; // G
      imgData.data[i + 2] = val; // B
      imgData.data[i + 3] = 10;  // Alpha (opacity ~0.04)
    }
    ctx.putImageData(imgData, 0, 0);

    // Convert canvas to a static repeat image URL
    const dataUrl = canvas.toDataURL();
    if (overlayRef.current) {
      overlayRef.current.style.backgroundImage = `url(${dataUrl})`;
    }
  }, []);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 pointer-events-none z-[9998] opacity-100 mix-blend-normal bg-repeat"
      style={{ backgroundSize: "128px 128px" }}
    />
  );
}
