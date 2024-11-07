"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import Particles from "@/components/ui/particles";

export function ParticlesDemo() {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor("#ffffff");
  }, [theme]);

  return (
    <div className="absolute inset-0 w-full h-full z-0">
      <Particles
        className="absolute inset-0"
        quantity={50}
        ease={100}
        color={color}
        refresh
      />
    </div>
  );
}
