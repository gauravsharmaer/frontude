"use client";
import React, { memo } from "react";
import MouseTrail from "./MouseTrail";

export const CursorWrapper = memo(
  ({ children }: { children: React.ReactNode }) => {
    return (
      <div className="cursor-wrapper">
        <MouseTrail />
        {children}
        <style jsx>{`
          .cursor-wrapper {
            position: relative;
            width: 100%;
            min-height: 100vh;
          }
        `}</style>
        <style jsx global>{`
          .cursor__ball {
            position: fixed;
            top: 0;
            left: 0;
            z-index: 999999;
            pointer-events: none;
            will-change: transform;
          }
        `}</style>
      </div>
    );
  }
);

CursorWrapper.displayName = "CursorWrapper";
