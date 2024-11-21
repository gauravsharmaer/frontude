"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import Particles from "@/components/ui/particles";

export function ParticlesDemo() {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");
  const [quantity, setQuantity] = useState(200);

  useEffect(() => {
    // Adjust initial particle quantity based on screen size
    const adjustParticleCount = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setQuantity(50); // Mobile devices
      } else if (width < 1024) {
        setQuantity(100); // Tablets
      } else {
        setQuantity(200); // Desktop
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
        ease={100}
        color={color}
        refresh={false} // Set to false to prevent unnecessary refreshes
        staticity={75} // Increased staticity for smoother movement
      />
    </div>
  );
}
