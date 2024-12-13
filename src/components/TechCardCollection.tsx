// import React, { useRef } from "react";
// import { motion, useScroll, useTransform, useSpring } from "framer-motion";
// import TechCard from "./TechCard";

// const TechCardCollection = () => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start end", "end start"],
//   });

//   // Optimize the spring configuration for smoother animation
//   const smoothProgress = useSpring(scrollYProgress, {
//     mass: 0.1,
//     stiffness: 100,
//     damping: 20,
//     restDelta: 0.001,
//   });

//   // Use useTransform to create a more efficient animation
//   const translateX = useTransform(smoothProgress, [0, 1], ["0%", "-66%"]);

//   return (
//     <div
//       ref={containerRef}
//       className="flex flex-col gap-6 px-4 sm:px-6 md:px-8 min-h-[150vh]"
//     >
//       <div className="flex flex-col gap-6 justify-center items-center text-center">
//         <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-pocKota leading-tight sm:leading-[57.60px]">
//           how frontude can elevate your business?
//         </h2>
//         <p className="opacity-70 text-white text-[14px] sm:text-[16px] font-light font-inter leading-normal sm:leading-[24px] max-w-[90%] sm:max-w-none">
//           uniting creativity and innovation, our team brings every project to
//           life with precision and passion, delivering results that exceed
//           expectations.
//         </p>
//       </div>

//       <div className="sticky top-[20vh] h-[60vh] overflow-hidden">
//         <motion.div
//           style={{ x: translateX }}
//           className="flex flex-row gap-8 absolute left-[50%] transform -translate-x-1/2"
//         >
//           {[1, 2, 3, 4].map((index) => (
//             <TechCard key={index} />
//           ))}
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default TechCardCollection;

import React from "react";
import TechCard from "./TechCard";

const TechCardCollection = () => {
  return (
    <div className="flex flex-col gap-6 px-4 sm:px-6 md:px-8 ">
      <div className="flex flex-col gap-6 justify-center items-center text-center">
        <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-pocKota leading-tight sm:leading-[57.60px]">
          how frontude can elevate your business?
        </h2>
        <p className="opacity-70 text-white text-[14px] sm:text-[16px] font-light font-inter leading-normal sm:leading-[24px] max-w-[90%] sm:max-w-none">
          uniting creativity and innovation, our team brings every project to
          life with precision and passion, delivering results that exceed
          expectations.
        </p>
      </div>

      <div className="flex flex-row gap-8 justify-center items-center mt-10">
        {[1, 2, 3].map((index) => (
          <TechCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default TechCardCollection;
