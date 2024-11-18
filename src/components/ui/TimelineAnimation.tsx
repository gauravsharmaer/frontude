// "use client";

// import React, { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";

// export default function Component() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start 90%", "end end"],
//   });

//   const planningOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
//   const analysisOpacity = useTransform(scrollYProgress, [0.2, 0.3], [0, 1]);
//   const designOpacity = useTransform(scrollYProgress, [0.4, 0.5], [0, 1]);
//   const implementationOpacity = useTransform(
//     scrollYProgress,
//     [0.6, 0.7],
//     [0, 1]
//   );
//   const testingOpacity = useTransform(scrollYProgress, [0.8, 0.9], [0, 1]);
//   const maintenanceOpacity = useTransform(scrollYProgress, [0.9, 1], [0, 1]);

//   return (
//     <div ref={containerRef} className="relative w-full min-h-[800vh] bg-black">
//       <div className="sticky top-10 w-full min-h-screen flex items-center justify-center">
//         <svg
//           className="w-full h-screen"
//           viewBox="0 0 1000 800"
//           preserveAspectRatio="xMidYMid meet"
//         >
//           <defs>
//             <filter id="glow">
//               <feGaussianBlur stdDeviation="2" result="coloredBlur" />
//               <feMerge>
//                 <feMergeNode in="coloredBlur" />
//                 <feMergeNode in="SourceGraphic" />
//               </feMerge>
//             </filter>
//           </defs>

//           <motion.path
//             d="M 50,100
//                H 300
//                C 500,100 700,100 800,200
//                C 900,300 900,400 800,500
//                C 700,600 500,600 300,500"
//             className="stroke-[#d6180a] fill-none stroke-[2px]"
//             strokeLinecap="round"
//             filter="url(#glow)"
//             style={{
//               pathLength: scrollYProgress,
//             }}
//           />

//           {/* Planning */}
//           <motion.g style={{ opacity: planningOpacity }}>
//             <circle
//               cx="50"
//               cy="100"
//               r="4"
//               className="fill-[#d6180a]"
//               filter="url(#glow)"
//             />
//             <text x="20" y="80" className="text-[14px] fill-white font-light">
//               Planning
//             </text>
//           </motion.g>

//           {/* Analysis */}
//           <motion.g style={{ opacity: analysisOpacity }}>
//             <circle
//               cx="250"
//               cy="100"
//               r="4"
//               className="fill-[#d6180a]"
//               filter="url(#glow)"
//             />
//             <text x="220" y="80" className="text-[14px] fill-white font-light">
//               Analysis
//             </text>
//           </motion.g>

//           {/* Design */}
//           <motion.g style={{ opacity: designOpacity }}>
//             <circle
//               cx="650"
//               cy="125"
//               r="4"
//               className="fill-[#d6180a]"
//               filter="url(#glow)"
//             />
//             <text x="620" y="105" className="text-[14px] fill-white font-light">
//               Design
//             </text>
//           </motion.g>

//           {/* Implementation */}
//           <motion.g style={{ opacity: implementationOpacity }}>
//             <circle
//               cx="800"
//               cy="200"
//               r="4"
//               className="fill-[#d6180a]"
//               filter="url(#glow)"
//             />
//             <text x="770" y="180" className="text-[14px] fill-white font-light">
//               Implementation
//             </text>
//           </motion.g>

//           {/* Testing */}
//           <motion.g style={{ opacity: testingOpacity }}>
//             <circle
//               cx="800"
//               cy="500"
//               r="4"
//               className="fill-[#d6180a]"
//               filter="url(#glow)"
//             />
//             <text x="770" y="480" className="text-[14px] fill-white font-light">
//               Testing
//             </text>
//           </motion.g>

//           {/* Maintenance */}
//           <motion.g style={{ opacity: maintenanceOpacity }}>
//             <circle
//               cx="300"
//               cy="500"
//               r="4"
//               className="fill-[#d6180a]"
//               filter="url(#glow)"
//             />
//             <text x="270" y="480" className="text-[14px] fill-white font-light">
//               Maintenance
//             </text>
//             <text x="270" y="520" className="text-xs fill-white font-light">
//               Continuous improvement and support
//             </text>
//             <text x="270" y="540" className="text-xs fill-white font-light">
//               to ensure long-term success
//             </text>
//           </motion.g>
//         </svg>
//       </div>
//     </div>
//   );
// }

"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Component() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 100%", "end end"],
  });

  const planningOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  const analysisOpacity = useTransform(scrollYProgress, [0.2, 0.3], [0, 1]);
  const designOpacity = useTransform(scrollYProgress, [0.4, 0.5], [0, 1]);
  const implementationOpacity = useTransform(
    scrollYProgress,
    [0.6, 0.7],
    [0, 1]
  );
  const testingOpacity = useTransform(scrollYProgress, [0.8, 0.9], [0, 1]);
  const maintenanceOpacity = useTransform(scrollYProgress, [0.9, 1], [0, 1]);

  return (
    <>
      <div
        ref={containerRef}
        className="relative w-full min-h-[800vh] bg-black"
      >
        <div className="sticky top-12 w-full min-h-screen flex items-center justify-center flex-col">
          <div className="flex flex-col gap-4 justify-center items-center">
            <div className="text-white text-[56px] font-light font-['ITC Garamond Std'] leading-[67.20px]">
              clear path to accelerate your project
            </div>
            <div className="text-white text-[16px] font-light font-['ITC Garamond Std'] leading-[24px]">
              discover our streamlined process for crafting custom products that
              perfectly align with your goals.
            </div>
          </div>
          <svg
            className="w-full h-screen"
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
            </defs>

            <motion.path
              d="M 50,100 
               H 300
               C 500,100 700,100 800,200
               C 900,300 900,400 800,500
               C 700,600 500,600 300,600"
              className="stroke-[#d6180a] fill-none stroke-[2px]"
              strokeLinecap="round"
              filter="url(#glow)"
              style={{
                pathLength: scrollYProgress,
              }}
            />

            {/* Planning */}
            <motion.g style={{ opacity: planningOpacity }}>
              <line
                x1="50"
                y1="100"
                x2="50"
                y2="160"
                className="stroke-[#d6180a] stroke-[1px]"
              />
              <circle
                cx="50"
                cy="100"
                r="4"
                className="fill-[#d6180a]"
                filter="url(#glow)"
              />
              <text x="20" y="80" className="text-[14px] fill-white font-light">
                Planning
              </text>
            </motion.g>

            {/* Analysis */}
            <motion.g style={{ opacity: analysisOpacity }}>
              <line
                x1="250"
                y1="100"
                x2="250"
                y2="160"
                className="stroke-[#d6180a] stroke-[1px]"
              />
              <circle
                cx="250"
                cy="100"
                r="4"
                className="fill-[#d6180a]"
                filter="url(#glow)"
              />
              <text
                x="220"
                y="80"
                className="text-[14px] fill-white font-light"
              >
                Analysis
              </text>
            </motion.g>

            {/* Design */}
            <motion.g style={{ opacity: designOpacity }}>
              <line
                x1="650"
                y1="125"
                x2="650"
                y2="185"
                className="stroke-[#d6180a] stroke-[1px]"
              />
              <circle
                cx="650"
                cy="125"
                r="4"
                className="fill-[#d6180a]"
                filter="url(#glow)"
              />
              <text
                x="620"
                y="105"
                className="text-[14px] fill-white font-light"
              >
                Design
              </text>
            </motion.g>

            {/* Implementation */}
            <motion.g style={{ opacity: implementationOpacity }}>
              <line
                x1="800"
                y1="200"
                x2="800"
                y2="260"
                className="stroke-[#d6180a] stroke-[1px]"
              />
              <circle
                cx="800"
                cy="200"
                r="4"
                className="fill-[#d6180a]"
                filter="url(#glow)"
              />
              <text
                x="770"
                y="180"
                className="text-[14px] fill-white font-light"
              >
                Implementation
              </text>
            </motion.g>

            {/* Testing */}
            <motion.g style={{ opacity: testingOpacity }}>
              <line
                x1="800"
                y1="500"
                x2="800"
                y2="560"
                className="stroke-[#d6180a] stroke-[1px]"
              />
              <circle
                cx="800"
                cy="500"
                r="4"
                className="fill-[#d6180a]"
                filter="url(#glow)"
              />
              <text
                x="770"
                y="480"
                className="text-[14px] fill-white font-light"
              >
                Testing
              </text>
            </motion.g>

            {/* Maintenance */}
            <motion.g style={{ opacity: maintenanceOpacity }}>
              <line
                x1="300"
                y1="600"
                x2="300"
                y2="660"
                className="stroke-[#d6180a] stroke-[1px]"
              />
              <circle
                cx="300"
                cy="600"
                r="4"
                className="fill-[#d6180a]"
                filter="url(#glow)"
              />
              <text
                x="270"
                y="540"
                className="text-[14px] fill-white font-light"
              >
                Maintenance
              </text>
              <text x="270" y="560" className="text-xs fill-white font-light">
                Continuous improvement and support
              </text>
              <text x="270" y="580" className="text-xs fill-white font-light">
                to ensure long-term success
              </text>
            </motion.g>
          </svg>
        </div>
      </div>
    </>
  );
}
