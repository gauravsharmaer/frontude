"use client";
import React from "react";
import MouseTrail from "./MouseTrail";

export const CursorWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="cursor-wrapper">
      <MouseTrail />
      {children}
      <style jsx global>{`
        .cursor-wrapper {
          position: relative;
          width: 100%;
          min-height: 100vh;
        }

        /* Ensure cursor stays on top */
        .cursor__ball {
          position: fixed !important;
          z-index: 999999 !important;
          pointer-events: none !important;
          will-change: transform;
        }
      `}</style>
    </div>
  );
};
