"use client";

/**
 * Reveal (Enhanced)
 * مسؤول عن:
 * - fade + slide
 * - دعم delay
 * - استخدام tokens
 */

import { useEffect, useRef, useState } from "react";
import { MOTION } from "./tokens";

type Props = {
  children: React.ReactNode;
  delay?: number;
};

export default function Reveal({ children, delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : "translateY(40px)",
        transition: `
          opacity ${MOTION.duration.secondary}s ease ${delay}s,
          transform ${MOTION.duration.secondary}s ease ${delay}s
        `,
      }}
    >
      {children}
    </div>
  );
}