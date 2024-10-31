"use client";

import { useState, useRef, FC, MouseEvent } from "react";

interface CardProps {
  color: string;
  title: string;
  description: string;
  icon: string;
}

const Card: FC<CardProps> = ({ color, title, description, icon }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: "50%", y: "50%" });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (rect) {
      setPosition({
        x: `${e.clientX - rect.left}px`,
        y: `${e.clientY - rect.top}px`,
      });
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="group relative cursor-pointer w-[320px] h-[400px] bg-[#2d2d2d] rounded-[20px] overflow-hidden shadow-xl"
      style={{ "--clr": color } as React.CSSProperties}
    >
      {/* Outer glow effect - casts shadow inside and outside */}
      <div
        className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          top: position.y,
          left: position.x,
          transform: "translate(-50%, -50%)",
          width: "500px",
          height: "500px",
          filter: "blur(30px)",
          background: `radial-gradient(circle, ${color} 10%, transparent 60%)`,
        }}
      />

      {/* Shadow layer over the card */}
      <div
        className="absolute opacity-0 group-hover:opacity-80 transition-opacity duration-500 z-10"
        style={{
          top: position.y,
          left: position.x,
          transform: "translate(-50%, -50%)",
          width: "300px",
          height: "300px",
          filter: "blur(20px)",
          background: `radial-gradient(circle, ${color} 5%, transparent 80%)`,
        }}
      />

      {/* Card content */}
      <div className="absolute inset-[2px] rounded-[18px] bg-[#2d2d2d] z-20 p-6 flex flex-col items-center justify-between shadow-inner">
        <div
          className="w-20 h-20 rounded-full bg-gray-800 flex items-center justify-center text-4xl"
          style={{ color }}
        >
          {icon}
        </div>
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-bold hoverable" style={{ color }}>
            {title}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed hoverable">
            {description}
          </p>
        </div>
        <button
          className="px-6 py-2 rounded-full font-semibold hover:scale-105 transition-transform duration-500"
          style={{ backgroundColor: color, color: "#1a1a1a" }}
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

const ColorfulCardHover: FC = () => (
  <div className="flex justify-center items-center">
    <div className="flex justify-around  gap-[100px] flex-wrap">
      <Card
        color="#0f0"
        icon="🚀"
        title="Speed Boost"
        description="Accelerate your workflow with our advanced optimization techniques and cutting-edge technology solutions."
      />
      <Card
        color="#ff0"
        icon="⚡"
        title="Power Up"
        description="Enhance your performance with our powerful tools and streamlined processes for maximum efficiency."
      />
    </div>
  </div>
);

export default ColorfulCardHover;
