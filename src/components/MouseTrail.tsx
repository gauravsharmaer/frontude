"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Cursor: React.FC = () => {
  const bigBallRef = useRef<HTMLDivElement>(null);
  const smallBallRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!bigBallRef.current || !smallBallRef.current) return;

      gsap.to(bigBallRef.current, {
        x: e.clientX - 15,
        y: e.clientY - 15,
        duration: 0.4,
        ease: "power2.out",
      });
      gsap.to(smallBallRef.current, {
        x: e.clientX - 5,
        y: e.clientY - 5,
        duration: 0.1,
      });
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div id="cursor-container" className="cursor-container">
      <div ref={bigBallRef} className="cursor__ball cursor__ball--big">
        <svg height="30" width="30">
          <circle cx="15" cy="15" r="12" strokeWidth="0" />
        </svg>
      </div>
      <div ref={smallBallRef} className="cursor__ball cursor__ball--small">
        <svg height="10" width="10">
          <circle cx="5" cy="5" r="4" strokeWidth="0" />
        </svg>
      </div>
    </div>
  );
};

export default Cursor;
