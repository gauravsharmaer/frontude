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
    offset: ["start 80%", "end 20%"],
  });
  const words = text.split(" ");

  return (
    <div
      ref={targetRef}
      className={cn("relative w-full  pointer-events-none", className)}
    >
      <p className="flex flex-wrap p-5 text-4xl font-bold md:text-5xl lg:text-6xl justify-center">
        {words.map((word, i) => {
          const firstHalfDuration = 0.4;
          const secondHalfDuration = 0.35;
          const midPoint = 4;

          let start, end;
          if (i <= midPoint) {
            start = (i / midPoint) * firstHalfDuration;
            end = start + firstHalfDuration / midPoint + 0.1;
          } else {
            const remainingWords = words.length - midPoint - 1;
            const position = i - midPoint;
            start =
              firstHalfDuration +
              (position / remainingWords) * secondHalfDuration;
            end = start + secondHalfDuration / remainingWords + 0.1;
          }

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
      <span className="absolute opacity-10 text-white">{children}</span>
      <motion.span style={{ opacity }} className="text-white relative">
        {children}
      </motion.span>
    </span>
  );
};

export { TextRevealByWord as default };
