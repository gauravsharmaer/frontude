"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Component() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 100%", "end end"],
  });

  const planningOpacity = useTransform(scrollYProgress, [0, 0.15], [0, 1]);
  const analysisOpacity = useTransform(scrollYProgress, [0.15, 0.3], [0, 1]);
  const designOpacity = useTransform(scrollYProgress, [0.3, 0.45], [0, 1]);
  const implementationOpacity = useTransform(
    scrollYProgress,
    [0.45, 0.6],
    [0, 1]
  );
  const testingOpacity = useTransform(scrollYProgress, [0.6, 0.75], [0, 1]);
  const maintenanceOpacity = useTransform(scrollYProgress, [0.75, 0.9], [0, 1]);

  return (
    <>
      <div
        ref={containerRef}
        className="relative w-full min-h-[200vh] bg-black/70"
      >
        <div className="sticky top-12 w-full min-h-screen flex items-center justify-center flex-col">
          <div className="flex flex-col gap-4 justify-center items-center px-4 md:px-8">
            <div className="text-white text-2xl md:text-[56px] font-light font-pocKota leading-tight md:leading-[67.20px] text-center">
              Clear Path to
              <span className="font-['ITC Garamond Std'] leading-[67.20px] font-extralight pl-2">
                Accelerate
              </span>{" "}
              your business
            </div>
            <div className="opacity-70 text-white text-sm md:text-[16px] font-light font-inter leading-normal md:leading-[24px] text-center max-w-3xl">
              We turn complex digital transformations into clear, achievable
              steps:
            </div>
          </div>
          <svg
            className="w-full h-[60vh] md:h-screen"
            viewBox="0 0 1000 800"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              <linearGradient
                id="verticalLineGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="0%" stopColor="#d6180a" stopOpacity="1" />
                <stop offset="100%" stopColor="#d6180a" stopOpacity="0" />
              </linearGradient>

              <linearGradient
                id="verticalLineGradientReverse"
                x1="0"
                y1="1"
                x2="0"
                y2="0"
              >
                <stop offset="0%" stopColor="#d6180a" stopOpacity="1" />
                <stop offset="100%" stopColor="#d6180a" stopOpacity="0" />
              </linearGradient>
            </defs>

            <motion.path
              d="M 100,100 H 400 C 500,100 700,100 800,200 C 900,300 900,400 800,500 C 700,600 500,600 300,600"
              className="stroke-[#d6180a] fill-none stroke-[1px] md:stroke-[2px]"
              strokeLinecap="round"
              filter="url(#glow)"
              style={{ pathLength: scrollYProgress }}
            />

            {/* Planning */}
            <motion.g style={{ opacity: planningOpacity }}>
              {/* Upper vertical line with reversed gradient */}
              <rect
                x="98.5"
                y="0"
                width="3"
                height="100"
                fill="url(#verticalLineGradientReverse)"
                transform="rotate(-90.13deg)"
              />
              <image
                href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/discovery-lUcuYK3WA8j2J6VHM5COVjlUHe535G.svg"
                x="50"
                y="67"
                width="16"
                height="16"
              />
              <text
                x="70"
                y="80"
                className="text-[12px] md:text-[14px] fill-[#8A8A8A] font-inter"
              >
                Discovery
              </text>
              <text
                x="70"
                y="100"
                className="text-[10px] md:text-xs fill-[#8A8A8A] font-inter"
              >
                Understanding your business, goals
              </text>
              <text
                x="70"
                y="120"
                className="text-[10px] md:text-xs fill-[#8A8A8A] font-inter"
              >
                and market position
              </text>
              {/* Lower vertical line with normal gradient */}
              <rect
                x="98.5"
                y="100"
                width="3"
                height="100"
                fill="url(#verticalLineGradient)"
                transform="rotate(-90.13deg)"
              />
              <circle
                cx="100"
                cy="100"
                r="3"
                className="fill-[#d6180a]"
                filter="url(#glow)"
              />
            </motion.g>

            {/* Analysis */}
            <motion.g style={{ opacity: analysisOpacity }}>
              <image
                href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/discovery-lUcuYK3WA8j2J6VHM5COVjlUHe535G.svg"
                x="400"
                y="67"
                width="16"
                height="16"
              />
              <text
                x="420"
                y="80"
                className="text-[14px] fill-[#8A8A8A] font-inter"
              >
                Strategy Development
              </text>
              <text
                x="420"
                y="100"
                className="text-[10px] md:text-xs fill-[#8A8A8A] font-inter"
              >
                Creating a roadmap tailored
              </text>
              <text
                x="420"
                y="120"
                className="text-[10px] md:text-xs fill-[#8A8A8A] font-inter"
              >
                to your objectives
              </text>
              <rect
                x="448.5"
                y="100"
                width="3"
                height="100"
                transform="rotate(-90.13deg)"
                fill="url(#verticalLineGradient)"
              />
              <circle
                cx="450"
                cy="100"
                r="4"
                className="fill-[#d6180a]"
                filter="url(#glow)"
              />
            </motion.g>

            {/* Design */}
            <motion.g style={{ opacity: designOpacity }}>
              <image
                href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/discovery-lUcuYK3WA8j2J6VHM5COVjlUHe535G.svg"
                x="700"
                y="92"
                width="16"
                height="16"
              />
              <text
                x="720"
                y="105"
                className="text-[14px] fill-[#8A8A8A] font-inter"
              >
                Design & Innovation
              </text>
              <text
                x="720"
                y="125"
                className="text-[10px] md:text-xs fill-[#8A8A8A] font-inter"
              >
                Crafting solutions that blend
              </text>
              <text
                x="720"
                y="145"
                className="text-[10px] md:text-xs fill-[#8A8A8A] font-inter"
              >
                form and function
              </text>
              <rect
                x="748.5"
                y="162"
                width="3"
                height="100"
                transform="rotate(-90.13deg)"
                fill="url(#verticalLineGradient)"
              />

              <circle
                cx="750"
                cy="162"
                r="4"
                className="fill-[#d6180a]"
                filter="url(#glow)"
              />
            </motion.g>

            {/* Implementation */}
            <motion.g style={{ opacity: implementationOpacity }}>
              <image
                href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/discovery-lUcuYK3WA8j2J6VHM5COVjlUHe535G.svg"
                x="882"
                y="287"
                width="16"
                height="16"
              />
              <text
                x="900"
                y="300"
                className="text-[14px] fill-[#8A8A8A] font-inter"
              >
                Development
              </text>
              <text
                x="900"
                y="320"
                className="text-[10px] md:text-xs fill-[#8A8A8A] font-inter"
              >
                Building with cutting-edge technology
              </text>
              <text
                x="900"
                y="340"
                className="text-[10px] md:text-xs fill-[#8A8A8A] font-inter"
              >
                and best practices
              </text>
              <rect
                x="868"
                y="300"
                width="3"
                height="100"
                transform="rotate(-90.13deg)"
                fill="url(#verticalLineGradient)"
              />
              <circle
                cx="868"
                cy="300"
                r="4"
                className="fill-[#d6180a]"
                filter="url(#glow)"
              />
            </motion.g>

            {/* Testing */}
            <motion.g style={{ opacity: testingOpacity }}>
              <image
                href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/discovery-lUcuYK3WA8j2J6VHM5COVjlUHe535G.svg"
                x="750"
                y="467"
                width="16"
                height="16"
              />
              <text
                x="770"
                y="480"
                className="text-[14px] fill-[#8A8A8A] font-inter"
              >
                Launch & Optimization
              </text>
              <text
                x="770"
                y="500"
                className="text-[10px] md:text-xs fill-[#8A8A8A] font-inter"
              >
                Ensuring performance meets expectations
              </text>

              <rect
                x="799"
                y="500"
                width="3"
                height="100"
                transform="rotate(-90.13deg)"
                fill="url(#verticalLineGradient)"
              />
              <circle
                cx="800"
                cy="500"
                r="4"
                className="fill-[#d6180a]"
                filter="url(#glow)"
              />
            </motion.g>

            {/* Maintenance */}
            <motion.g style={{ opacity: maintenanceOpacity }}>
              <image
                href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/discovery-lUcuYK3WA8j2J6VHM5COVjlUHe535G.svg"
                x="250"
                y="527"
                width="16"
                height="16"
              />
              <text
                x="270"
                y="540"
                className="text-[12px] md:text-[14px] fill-[#8A8A8A] font-inter"
              >
                Ongoing Partnership
              </text>
              <rect
                x="298"
                y="600"
                width="4.5"
                height="80"
                transform="rotate(-90.13deg)"
                fill="url(#verticalLineGradient)"
              />
              <circle
                cx="300"
                cy="600"
                r="3"
                className="fill-[#d6180a]"
                filter="url(#glow)"
              />
              <text
                x="270"
                y="560"
                className="text-[10px] md:text-xs fill-[#8A8A8A] font-inter"
              >
                Supporting your continued
              </text>
              <text
                x="270"
                y="580"
                className="text-[10px] md:text-xs fill-[#8A8A8A] font-inter"
              >
                evolution and growth
              </text>
            </motion.g>
          </svg>
        </div>
      </div>
    </>
  );
}
