"use client";
import React, { useEffect, useRef, useCallback } from "react";

const Cursor: React.FC = () => {
  const bigBallRef = useRef<HTMLDivElement>(null);
  const smallBallRef = useRef<HTMLDivElement>(null);
  const rafIdRef = useRef<number>();
  const lastMousePosition = useRef({ x: 0, y: 0 });
  // Add this at the start of your MouseTrail component
  const isSupportedBrowser =
    typeof window !== "undefined" &&
    "requestAnimationFrame" in window &&
    !("ontouchstart" in window);

  if (!isSupportedBrowser) {
    return null;
  }

  // Throttled mouse move handler
  const onMouseMove = useCallback((e: MouseEvent) => {
    lastMousePosition.current = { x: e.clientX, y: e.clientY };
  }, []);

  // Animate function using requestAnimationFrame
  const animate = useCallback(() => {
    if (bigBallRef.current && smallBallRef.current) {
      const { x, y } = lastMousePosition.current;

      // Simple linear interpolation for smoother movement
      const currentBigX =
        parseFloat(bigBallRef.current.style.transform.split("(")[1]) || 0;
      const currentBigY =
        parseFloat(bigBallRef.current.style.transform.split(",")[1]) || 0;

      const targetBigX = x - 15;
      const targetBigY = y - 15;

      const newBigX = currentBigX + (targetBigX - currentBigX) * 0.2;
      const newBigY = currentBigY + (targetBigY - currentBigY) * 0.2;

      bigBallRef.current.style.transform = `translate(${newBigX}px, ${newBigY}px)`;
      smallBallRef.current.style.transform = `translate(${x - 5}px, ${
        y - 5
      }px)`;
    }

    rafIdRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    // Initialize animation
    rafIdRef.current = requestAnimationFrame(animate);

    // Add event listener with passive option for better performance
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    // Simplified hover handlers
    const onMouseHover = () => {
      if (bigBallRef.current) {
        bigBallRef.current.style.transform += " scale(4)";
      }
    };

    const onMouseHoverOut = () => {
      if (bigBallRef.current) {
        bigBallRef.current.style.transform =
          bigBallRef.current.style.transform.replace(" scale(4)", "");
      }
    };

    // Use event delegation instead of multiple listeners
    document.body.addEventListener("mouseover", (e) => {
      if ((e.target as Element).classList.contains("hoverable")) {
        onMouseHover();
      }
    });

    document.body.addEventListener("mouseout", (e) => {
      if ((e.target as Element).classList.contains("hoverable")) {
        onMouseHoverOut();
      }
    });

    return () => {
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, [animate, onMouseMove]);

  return (
    <div id="cursor-container">
      <div
        ref={bigBallRef}
        className="cursor__ball cursor__ball--big"
        style={{ transform: "translate(0, 0)" }}
      >
        <svg height="30" width="30">
          <circle cx="15" cy="15" r="12" strokeWidth="0" />
        </svg>
      </div>
      <div
        ref={smallBallRef}
        className="cursor__ball cursor__ball--small"
        style={{ transform: "translate(0, 0)" }}
      >
        <svg height="10" width="10">
          <circle cx="5" cy="5" r="4" strokeWidth="0" />
        </svg>
      </div>
    </div>
  );
};

export default Cursor;
