//textreveal
//text reaveal
"use client";

import { FC, ReactNode, useRef } from "react";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";

import { cn } from "@/lib/utils";

interface TextRevealByWordProps {
  text: string;
  className?: string;
}

export const TextRevealByWord: FC<TextRevealByWordProps> = ({
  text,
  className,
}) => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 90%", "end 40%"],
  });
  const words = text.split(" ");

  return (
    <div
      ref={targetRef}
      className={cn("relative w-full  pointer-events-none", className)}
    >
      <p className="flex flex-wrap p-5 text-4xl font-bold md:text-5xl lg:text-6xl justify-center">
        {words.map((word, i) => {
          const start = (i / words.length) * 0.9;
          const end = start + 0.1;

          return (
            <Word key={i} progress={scrollYProgress} range={[start, end]}>
              {word}
            </Word>
          );
        })}
      </p>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative mx-1 lg:mx-2.5">
      <span className="absolute opacity-5 text-white">{children}</span>
      <motion.span style={{ opacity }} className="text-white relative">
        {children}
      </motion.span>
    </span>
  );
};

export { TextRevealByWord as default };
