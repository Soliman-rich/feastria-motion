"use client";

import { Children, PropsWithChildren, cloneElement, isValidElement } from "react";
import Reveal from "./Reveal";
import { MOTION } from "../../motion/tokens";

function randomBetween(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export default function Stagger({ children }: PropsWithChildren) {
  const items = Children.toArray(children);

  // كسر التناسق: أحيانًا نؤخر الأول
  const baseDelay =
    Math.random() > 0.6
      ? randomBetween(MOTION.stagger.min, MOTION.stagger.max)
      : 0;

  let accumulatedDelay = baseDelay;

  return (
    <>
      {items.map((child, index) => {
        if (!isValidElement(child)) return child;

        const delay =
          index === 0
            ? baseDelay
            : (accumulatedDelay += randomBetween(
                MOTION.stagger.min,
                MOTION.stagger.max
              ));

        return (
          <Reveal key={index}>
            <div
              style={{
                transitionDelay: `${delay}s`,
              }}
            >
              {cloneElement(child)}
            </div>
          </Reveal>
        );
      })}
    </>
  );
}