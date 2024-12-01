"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

interface TimelineSection {
  number: number;
  title: string;
  description: string;
  mockupImage: string;
}

const sections: TimelineSection[] = [
  {
    number: 1,
    title: "Visual Brilliance",
    description:
      "We design captivating, intuitive applications that reflect your brand and design your users effortlessly.",
    mockupImage: "https://picsum.photos/seed/picsum/200/300",
  },
  {
    number: 2,
    title: "Reliability",
    description:
      "Expertly engineered for unwavering performance and dependable solutions.",
    mockupImage: "https://picsum.photos/seed/picsum/200/300",
  },
  {
    number: 3,
    title: "Performance",
    description:
      "Maximizing speed and efficiency to deliver seamless, high-performing applications.",
    mockupImage: "https://picsum.photos/seed/picsum/200/300",
  },
  {
    number: 4,
    title: "Security",
    description:
      "Specialized in building secure systems that safeguard data and trust.",
    mockupImage: "https://picsum.photos/seed/picsum/200/300",
  },
];

function TimelineSection({
  number,
  title,
  description,
  mockupImage,
  className,
}: TimelineSection & { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5, 0.7, 1],
    [0.9, 1.3, 1.3, 1.3, 0.9]
  );

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5]);

  return (
    <motion.div
      ref={ref}
      className={`relative min-h-[80%] flex items-center ${className}`}
      style={{
        scale,
        opacity,
        zIndex: 1,
      }}
    >
      <div className="max-w-6xl mx-auto px-4 py-24">
        <h2 className="text-3xl font-bold text-white text-center mb-4">
          {title}
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          {description}
        </p>

        <div className="relative w-full max-w-4xl mx-auto perspective-1000">
          <motion.div
            className="relative w-full rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.3)] transform-gpu"
            style={{
              transform: "rotateX(5deg)",
              transformOrigin: "center center",
            }}
          >
            <Image
              src={mockupImage}
              alt={`${title} mockup`}
              width={800}
              height={400}
              className="w-full h-[400px] object-cover rounded-2xl"
            />
          </motion.div>

          {title !== "Security" && (
            <div className="absolute left-1/2 transform -translate-x-1/2">
              {/* Vertical line */}
              <div className="w-[1px] h-12 bg-white mx-auto"></div>
              {/* Horizontal line */}

              {/* Text below the lines */}
            </div>
          )}

          <div className="absolute left-0 -translate-x-24 top-1/2 -translate-y-1/2 flex items-center">
            <div className="w-10 h-10 rounded-lg border-2 border-orange-500 flex items-center justify-center">
              <span className="text-orange-500 text-xl font-medium">
                {number}
              </span>
            </div>
            <div className="w-8 h-[2px] bg-orange-500 ml-2"></div>
          </div>
          <div className="absolute right-0 translate-x-24 top-1/2 -translate-y-1/2 flex items-center">
            <div className="w-8 h-[2px] bg-orange-500 mr-2"></div>
            <div className="w-10 h-10 rounded-lg border-2 border-orange-500 flex items-center justify-center">
              <span className="text-orange-500 text-xl font-medium">
                {number}
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function VerticalTimeline() {
  return (
    <div className="relative  min-h-screen bg-black ">
      <div className="absolute left-1/2 transform -translate-x-1/2">
        {/* Vertical line */}
        <div className="w-[1px] h-24 bg-white mx-auto"></div>
        {/* Horizontal line */}
        <div className="w-12 h-[1px] bg-white mx-auto"></div>
        {/* Text below the lines */}
        <div className="text-white text-sm mt-2 text-center">WHY US</div>
      </div>
      <div className="pt-32 pb-10 text-center">
        <h1 className="text-4xl font-bold text-white ">
          We craft apps that captivate, perform flawlessly, and
          <br />
          prioritize security. Built on trust and expertise, every solution
          <br /> we deliver is designed to inspire and excel.
        </h1>
        {/* <p className="text-4xl text-white">
          prioritize security. Built on trust and expertise, every solution
          <br />
          we deliver is designed to inspire and excel.
        </p> */}
      </div>

      {sections.map((section) => (
        <TimelineSection key={section.number} {...section} className="" />
      ))}

      <div className="absolute left-1/2 transform -translate-x-1/2">
        {/* Vertical line */}
        <div className="w-[1px] h-24 bg-white mx-auto"></div>
        {/* Horizontal line */}
        <div className="w-12 h-[1px] bg-white mx-auto"></div>
        {/* Text below the lines */}
      </div>
    </div>
  );
}
