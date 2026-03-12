import { useEffect, useRef, useState } from "react";
import { MOTION } from "./tokens";

type RevealEntry = {
  id: string;
  element: HTMLElement;
};

let observer: IntersectionObserver | null = null;
const registry = new Map<string, RevealEntry>();

function getObserver() {
  if (observer) return observer;

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const el = entry.target as HTMLElement;
        const id = el.dataset.revealId;
        if (!id) return;

        el.dispatchEvent(new CustomEvent("reveal:enter"));
        observer?.unobserve(el);
        registry.delete(id);
      });
    },
    {
      root: null,
      threshold: 0,
      rootMargin: `0px 0px -${(1 - MOTION.viewport.threshold) * 100}% 0px`,
    }
  );

  return observer;
}

export function useRevealObserver<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || revealed) return;

    const id = crypto.randomUUID();
    el.dataset.revealId = id;

    registry.set(id, { id, element: el });
    getObserver().observe(el);

    const onReveal = () => setRevealed(true);
    el.addEventListener("reveal:enter", onReveal, { once: true });

    return () => {
      el.removeEventListener("reveal:enter", onReveal);
      observer?.unobserve(el);
      registry.delete(id);
    };
  }, [revealed]);

  return { ref, revealed };
}