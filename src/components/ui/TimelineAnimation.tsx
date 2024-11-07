"use client";

import React, { useEffect, useRef, useState } from "react";

export function TimelineAnimation() {
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    let lastScrollTop = window.scrollY;

    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const currentScrollTop = window.scrollY;

      // Check if section is in view
      if (
        rect.top <= viewportHeight * 0.5 &&
        rect.bottom >= viewportHeight * 0.5
      ) {
        setIsInView(true);
        setIsAnimating(true);

        // Determine scroll direction
        const isScrollingDown = currentScrollTop > lastScrollTop;

        // Calculate progress based on scroll direction
        const newProgress = isScrollingDown
          ? Math.min(scrollProgress + 0.02, 1)
          : Math.max(scrollProgress - 0.02, 0);

        setScrollProgress(newProgress);

        // Only prevent default scroll while animating within the section
        if (newProgress > 0 && newProgress < 1) {
          window.scrollTo(0, lastScrollTop);
        }
      } else {
        setIsInView(false);
        setIsAnimating(false);
      }

      if (!isAnimating) {
        lastScrollTop = currentScrollTop;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollProgress, isAnimating]);

  useEffect(() => {
    if (pathRef.current) {
      const length = pathRef.current.getTotalLength();
      pathRef.current.style.strokeDasharray = length.toString();
      pathRef.current.style.strokeDashoffset = (
        length -
        length * scrollProgress
      ).toString();
    }
  }, [scrollProgress]);

  return (
    <section
      ref={sectionRef}
      id="timeline-section"
      className="min-h-screen w-full relative flex items-center justify-center"
    >
      {isInView && (
        <div className="fixed inset-0 bg-[#070305] transition-opacity duration-500 opacity-100" />
      )}
      <div className="relative w-full z-20">
        <h1 className="text-center text-3xl font-bold mb-20 text-orange-500">
          Scroll to see the process flow
        </h1>
        <svg
          ref={svgRef}
          className="w-full h-[60vh]"
          viewBox="0 0 1000 800"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            ref={pathRef}
            d="M 50,100 L 200,100 Q 800,100 600,200 T 900,400 Q 950,500 850,650"
            className="stroke-orange-500 fill-none stroke-[3px]"
            strokeLinecap="round"
          />

          <g
            className={`transition-opacity duration-500 ${
              scrollProgress > 0 ? "opacity-100" : "opacity-0"
            }`}
          >
            <circle cx="50" cy="100" r="10" className="fill-orange-500" />
            <text x="20" y="80" className="text-sm fill-current">
              discovery phase
            </text>
          </g>

          <g
            className={`transition-opacity duration-500 ${
              scrollProgress > 0.3 ? "opacity-100" : "opacity-0"
            }`}
          >
            <circle cx="600" cy="200" r="6" className="fill-orange-500" />
            <text x="570" y="180" className="text-sm fill-current">
              design concept
            </text>
          </g>

          <g
            className={`transition-opacity duration-500 ${
              scrollProgress > 0.6 ? "opacity-100" : "opacity-0"
            }`}
          >
            <circle cx="900" cy="400" r="6" className="fill-orange-500" />
            <text x="870" y="380" className="text-sm fill-current">
              development & testing
            </text>
          </g>

          <g
            className={`transition-opacity duration-500 ${
              scrollProgress > 0.9 ? "opacity-100" : "opacity-0"
            }`}
          >
            <circle cx="850" cy="650" r="6" className="fill-orange-500" />
            <text x="820" y="630" className="text-sm fill-current">
              launch & support
            </text>
          </g>
        </svg>
      </div>
    </section>
  );
}
