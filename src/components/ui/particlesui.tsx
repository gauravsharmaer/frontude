"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import Particles from "@/components/ui/particles";

export function ParticlesDemo() {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");
  const [quantity, setQuantity] = useState(50);

  useEffect(() => {
    // More aggressive particle reduction
    const adjustParticleCount = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setQuantity(20); // Reduced from 30
      } else if (width < 1024) {
        setQuantity(30); // Reduced from 50
      } else {
        setQuantity(50); // Reduced from 100
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
        refresh={false}
        staticity={100}
        size={0.3}
        vx={0}
        vy={0}
      />
    </div>
  );
}
