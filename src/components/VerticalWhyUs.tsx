"use client";

import { useRef, memo } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Img from "../assets/Visual Brilliance.svg";
import Img2 from "../assets/Reliability.svg";
import Img3 from "../assets/Performance.svg";
import Img4 from "../assets/Security.svg";

interface TimelineSection {
  number: number;
  title: string;
  description: string;
  mockupImage: string | StaticImageData;
}

const sections: TimelineSection[] = [
  {
    number: 1,
    title: "Visual Brilliance",
    description:
      "We design captivating, intuitive applications that reflect your brand and design your users effortlessly.",
    mockupImage: Img,
  },
  {
    number: 2,
    title: "Reliability",
    description:
      "Expertly engineered for unwavering performance and dependable solutions.",
    mockupImage: Img2,
  },
  {
    number: 3,
    title: "Performance",
    description:
      "Maximizing speed and efficiency to deliver seamless, high-performing applications.",
    mockupImage: Img3,
  },
  {
    number: 4,
    title: "Security",
    description:
      "Specialized in building secure systems that safeguard data and trust.",
    mockupImage: Img4,
  },
];

const TimelineSection = memo(function TimelineSection({
  number,
  title,
  description,
  mockupImage,
  className,
}: TimelineSection & { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "center center", "end center"],
  });

  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1], // Simplified keyframes
    [0.95, 1, 0.95]
  );

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

  return (
    <motion.div
      ref={ref}
      className={`relative min-h-[40vh] flex items-center ${className}`}
      style={{
        scale,
        opacity,
      }}
      initial={false}
      transition={{ duration: 0.3 }}
    >
      <div className="w-full max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-8">
        <h2 className="text-xl md:text-2xl font-bold text-white text-center mb-2 font-inter">
          {title}
        </h2>
        <p className="text-sm md:text-base text-gray-400 text-center mb-4 md:mb-6 max-w-2xl mx-auto font-inter">
          {description}
        </p>

        <div className="relative w-full max-w-[min(90vw,800px)] mx-auto perspective-1000">
          <motion.div
            className="relative w-full rounded-2xl overflow-hidden transform-gpu"
            style={{
              transform: "rotateX(5deg)",
              transformOrigin: "center center",
              height: "60vh",
              minHeight: "400px",
              position: "relative",
            }}
            initial={false}
          >
            <Image
              src={mockupImage}
              alt={`${title} mockup`}
              className="rounded-2xl"
              fill
              unoptimized
              priority
              sizes="(max-width: 768px) 100vw, 800px"
              style={{
                objectFit: "contain",
                objectPosition: "center",
              }}
            />
          </motion.div>

          {/* Side numbers - Hide on small screens */}
          <div className="hidden lg:flex absolute left-0 -translate-x-12 lg:-translate-x-24 top-1/2 -translate-y-1/2 items-center">
            <div className="w-8 lg:w-10 h-8 lg:h-10 rounded-lg border-2 border-orange-500 flex items-center justify-center">
              <span className="text-orange-500 text-lg lg:text-xl font-medium">
                {number}
              </span>
            </div>
            <div className="w-6 lg:w-8 h-[2px] bg-orange-500 ml-2"></div>
          </div>
          <div className="hidden lg:flex absolute right-0 translate-x-12 lg:translate-x-24 top-1/2 -translate-y-1/2 items-center">
            <div className="w-6 lg:w-8 h-[2px] bg-orange-500 mr-2"></div>
            <div className="w-8 lg:w-10 h-8 lg:h-10 rounded-lg border-2 border-orange-500 flex items-center justify-center">
              <span className="text-orange-500 text-lg lg:text-xl font-medium">
                {number}
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
});

const VerticalTimeline = memo(function VerticalTimeline() {
  return (
    <div className="relative min-h-screen bg-black">
      <div className="mx-auto max-w-[100vw]">
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <div className="w-[1px] h-16 md:h-24 bg-white mx-auto"></div>
          <div className="w-8 md:w-12 h-[1px] bg-white mx-auto"></div>
          <div className="text-white text-xs md:text-sm mt-2 text-center">
            WHY US
          </div>
        </div>
        <div className="pt-24 md:pt-32 pb-6 md:pb-10 text-center px-6 lg:px-8">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white font-pocKota leading-relaxed max-w-[90rem] mx-auto">
            We craft apps that captivate, perform flawlessly, and prioritize
            security. Built on trust and expertise, every solution we deliver is
            designed to inspire and excel.
          </h1>
        </div>

        <div className="space-y-8">
          {sections.map((section) => (
            <TimelineSection key={section.number} {...section} />
          ))}
        </div>

        <div className="absolute left-1/2 transform -translate-x-1/2">
          <div className="w-[1px] h-16 md:h-24 bg-white mx-auto"></div>
          <div className="w-8 md:w-12 h-[1px] bg-white mx-auto"></div>
        </div>
      </div>
    </div>
  );
});

export default VerticalTimeline;
