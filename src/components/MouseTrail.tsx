// "use client";
// import React, { useEffect, useRef } from "react";

// // Define colors for each circle in the trail
// const colors: string[] = Array(22)
//   .fill("#000000")
//   .map((_, i) => `rgba(0, 0, 0, ${1 - i / 22})`);

// interface CircleProps {
//   x: number;
//   y: number;
//   element: HTMLDivElement | null;
// }

// const MouseTrail: React.FC = () => {
//   const numCircles = 20;
//   const circlesRef = useRef<CircleProps[]>(
//     Array(numCircles).fill({ x: 0, y: 0, element: null })
//   );
//   const coords = useRef({ x: 0, y: 0 });

//   useEffect(() => {
//     // Track mouse movements
//     const handleMouseMove = (e: MouseEvent) => {
//       coords.current.x = e.clientX;
//       coords.current.y = e.clientY;
//     };

//     window.addEventListener("mousemove", handleMouseMove);

//     // Animate circles based on mouse coordinates
//     const animateCircles = () => {
//       let x = coords.current.x;
//       let y = coords.current.y;

//       circlesRef.current.forEach((circle, index) => {
//         if (circle.element) {
//           // Position circle and scale based on index
//           circle.element.style.left = `${x - 12}px`;
//           circle.element.style.top = `${y - 12}px`;
//           circle.element.style.transform = `scale(${
//             (numCircles - index) / numCircles
//           })`;

//           // Define the next circle for smooth trailing
//           const nextCircle =
//             circlesRef.current[index + 1] || circlesRef.current[0];
//           x += (nextCircle.x - x) * 0.3;
//           y += (nextCircle.y - y) * 0.3;

//           // Update circle coordinates
//           circlesRef.current[index].x = x;
//           circlesRef.current[index].y = y;
//         }
//       });

//       requestAnimationFrame(animateCircles);
//     };

//     animateCircles();

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, [numCircles]);

//   return (
//     <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[99999999]">
//       {[...Array(numCircles)].map((_, index) => (
//         <div
//           key={index}
//           ref={(el) => {
//             circlesRef.current[index] = {
//               ...circlesRef.current[index],
//               element: el,
//             };
//           }}
//           className="fixed h-6 w-6 rounded-full pointer-events-none"
//           style={{ backgroundColor: colors[index % colors.length] }}
//         ></div>
//       ))}
//     </div>
//   );
// };

// export default MouseTrail;

// "use client";
// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";

// const Cursor: React.FC = () => {
//   const bigBallRef = useRef<HTMLDivElement>(null);
//   const smallBallRef = useRef<HTMLDivElement>(null);
//   const hoverableElements = useRef<NodeListOf<HTMLElement> | null>(null);

//   useEffect(() => {
//     const onMouseMove = (e: MouseEvent) => {
//       gsap.to(bigBallRef.current, {
//         x: e.pageX - 15,
//         y: e.pageY - 15,
//         duration: 0.4,
//       });
//       gsap.to(smallBallRef.current, {
//         x: e.pageX - 5,
//         y: e.pageY - 7,
//         duration: 0.1,
//       });
//     };

//     const onMouseHover = () => {
//       gsap.to(bigBallRef.current, { scale: 4, duration: 0.3 });
//     };

//     const onMouseHoverOut = () => {
//       gsap.to(bigBallRef.current, { scale: 1, duration: 0.3 });
//     };

//     document.body.addEventListener("mousemove", onMouseMove);

//     hoverableElements.current = document.querySelectorAll(".hoverable");
//     hoverableElements.current.forEach((el) => {
//       el.addEventListener("mouseenter", onMouseHover);
//       el.addEventListener("mouseleave", onMouseHoverOut);
//     });

//     return () => {
//       document.body.removeEventListener("mousemove", onMouseMove);
//       hoverableElements.current?.forEach((el) => {
//         el.removeEventListener("mouseenter", onMouseHover);
//         el.removeEventListener("mouseleave", onMouseHoverOut);
//       });
//     };
//   }, []);

//   return (
//     <div className="cursor">
//       <div className="cursor__ball cursor__ball--big" ref={bigBallRef}>
//         <svg height="30" width="30">
//           <circle cx="15" cy="15" r="12" strokeWidth="0"></circle>
//         </svg>
//       </div>
//       <div className="cursor__ball cursor__ball--small" ref={smallBallRef}>
//         <svg height="10" width="10">
//           <circle cx="5" cy="5" r="4" strokeWidth="0"></circle>
//         </svg>
//       </div>
//     </div>
//   );
// };

// export default Cursor;

"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Cursor: React.FC = () => {
  const bigBallRef = useRef<HTMLDivElement>(null);
  const smallBallRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      gsap.to(bigBallRef.current, {
        x: e.pageX - 15,
        y: e.pageY - 15,
        duration: 0.4,
      });
      gsap.to(smallBallRef.current, {
        x: e.pageX - 5,
        y: e.pageY - 5,
        duration: 0.1,
      });
    };

    const onMouseHover = () => {
      gsap.to(bigBallRef.current, { scale: 4, duration: 0.3 });
    };

    const onMouseHoverOut = () => {
      gsap.to(bigBallRef.current, { scale: 1, duration: 0.3 });
    };

    document.body.addEventListener("mousemove", onMouseMove);

    // Handle hover effects on elements with the 'hoverable' class
    const hoverables = document.querySelectorAll(".hoverable");
    hoverables.forEach((el) => {
      el.addEventListener("mouseenter", onMouseHover);
      el.addEventListener("mouseleave", onMouseHoverOut);
    });

    return () => {
      document.body.removeEventListener("mousemove", onMouseMove);
      hoverables.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseHover);
        el.removeEventListener("mouseleave", onMouseHoverOut);
      });
    };
  }, []);

  return (
    <div className="cursor pointer-events-none fixed top-0 left-0 z-[1000]">
      <div
        className="cursor__ball cursor__ball--big fixed mix-blend-difference"
        ref={bigBallRef}
      >
        <svg height="30" width="30" className="text-invert">
          <circle cx="15" cy="15" r="12" fill="rgba(255, 255, 255, 0.2)" />
        </svg>
      </div>
      <div
        className="cursor__ball cursor__ball--small fixed mix-blend-difference"
        ref={smallBallRef}
      >
        <svg height="10" width="10">
          <circle cx="5" cy="5" r="4" fill="#ffffff" />
        </svg>
      </div>
    </div>
  );
};

export default Cursor;
