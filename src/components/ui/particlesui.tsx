"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import Particles from "@/components/ui/particles";

export function ParticlesDemo() {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");
  const [quantity, setQuantity] = useState(120);

  useEffect(() => {
    // Adjust initial particle quantity based on screen size
    const adjustParticleCount = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setQuantity(30); // Reduced from 50 for mobile
      } else if (width < 1024) {
        setQuantity(50); // Reduced from 100 for tablets
      } else {
        setQuantity(100); // Reduced from 200 for desktop
      }
    };

    adjustParticleCount();
    window.addEventListener("resize", adjustParticleCount);

    return () => window.removeEventListener("resize", adjustParticleCount);
  }, []);

  useEffect(() => {
    setColor("#ffffff");
  }, [theme]);

  return (
    <div className="absolute inset-0 w-full h-full z-0">
      <Particles
        className="absolute inset-0"
        quantity={quantity}
        ease={150}
        color={color}
        refresh={false} // Set to false to prevent unnecessary refreshes
        staticity={100} // Increased staticity for smoother movement
        size={0.3} // Smaller particles
      />
    </div>
  );
}
