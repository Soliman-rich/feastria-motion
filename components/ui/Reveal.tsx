"use client";

import { motion } from "framer-motion";
import { PropsWithChildren, ElementType } from "react";
import { useRevealObserver } from "../../motion/useRevealObserver";
import { MOTION } from "../../motion/tokens";

type RevealProps = PropsWithChildren<{
  as?: ElementType;
}>;

export default function Reveal({ children, as = "div" }: RevealProps) {
  const { ref, revealed } = useRevealObserver<HTMLElement>();
  const MotionTag = motion(as as any);

  return (
    <MotionTag
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={
        revealed
          ? {
              opacity: 1,
              y: 0,
              transition: {
                duration: MOTION.duration.primary,
                ease: MOTION.easing.primary,
              },
            }
          : undefined
      }
    >
      {children}
    </MotionTag>
  );
}