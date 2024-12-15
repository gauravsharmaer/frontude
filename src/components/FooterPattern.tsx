"use client";

import { useState } from "react";

export function FooterPattern() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="w-full h-[100px] md:h-[150px] lg:h-[200px] relative overflow-hidden cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <svg
        viewBox="0 0 1440 200"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
      >
        <path
          d="M0 100 Q360 150 720 100 Q1080 50 1440 100"
          className={`transition-all duration-300 ${
            isHovered ? "stroke-[#d6180a]" : "stroke-zinc-800"
          }`}
          fill="none"
          strokeWidth="1.5"
        />
        <path
          d="M0 120 Q360 70 720 120 Q1080 170 1440 120"
          className={`transition-all duration-300 ${
            isHovered ? "stroke-[#d6180a]" : "stroke-zinc-800"
          }`}
          fill="none"
          strokeWidth="1.5"
        />
        <path
          d="M0 80 Q360 130 720 80 Q1080 30 1440 80"
          className={`transition-all duration-300 ${
            isHovered ? "stroke-[#d6180a]" : "stroke-zinc-800"
          }`}
          fill="none"
          strokeWidth="1.5"
        />
      </svg>
      <div
        className={`absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 transition-opacity duration-1000`}
      ></div>
    </div>
  );
}
