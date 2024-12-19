"use client";

import { FC, ReactNode, useRef, useMemo, forwardRef } from "react";
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

  const scrollConfig = useMemo(
    () => ({
      target: targetRef,
      offset: ["start 90%", "end 40%"] as ["start 90%", "end 40%"],
    }),
    []
  );

  const { scrollYProgress } = useScroll(scrollConfig);

  const words = useMemo(() => text.split(" "), [text]);

  const wordTimings = useMemo(
    () =>
      words.map((_, i) => ({
        start: (i / words.length) * 0.9,
        end: (i / words.length) * 0.9 + 0.1,
      })),
    [words]
  );

  return (
    <div
      ref={targetRef}
      className={cn("relative w-full  pointer-events-none", className)}
    >
      <p className="flex flex-wrap p-5 text-4xl font-bold md:text-5xl lg:text-6xl justify-center">
        {words.map((word, i) => (
          <Word
            key={word + i}
            progress={scrollYProgress}
            range={[wordTimings[i].start, wordTimings[i].end]}
          >
            {word}
          </Word>
        ))}
      </p>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}

const WordComponent = forwardRef<HTMLSpanElement, WordProps>(
  ({ children, progress, range }, ref) => {
    const opacity = useTransform(progress, range, [0, 1]);
    return (
      <span ref={ref} className="relative mx-1 lg:mx-2.5">
        <span className="absolute opacity-5 text-white">{children}</span>
        <motion.span style={{ opacity }} className="text-white relative">
          {children}
        </motion.span>
      </span>
    );
  }
);

WordComponent.displayName = "Word";

const Word = motion(WordComponent);

// Add display name to the TextRevealByWord component
TextRevealByWord.displayName = "TextRevealByWord";

export { TextRevealByWord as default };
