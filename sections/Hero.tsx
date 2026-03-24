"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import ButtonPrimary from "@/components/ui/ButtonPrimary";
export default function Hero() {
  const burgerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const burger = burgerRef.current as unknown as HTMLElement;
    if (!hero || !burger) return;

    const maxX = 150;
    const maxY = 110;

    burger.style.transition =
      "transform 140ms cubic-bezier(0.215, 0.610, 0.355, 1)";

    const handleMouseMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();

      const percentX = (e.clientX - rect.left) / rect.width - 0.5;
      const percentY = (e.clientY - rect.top) / rect.height - 0.5;

      burger.style.transform = `translate3d(${percentX * maxX}px, ${
        percentY * maxY
      }px, 0)`;
    };

    const handleMouseLeave = () => {
      burger.style.transform = `translate3d(0px, 0px, 0px)`;
    };

    hero.addEventListener("mousemove", handleMouseMove);
    hero.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      hero.removeEventListener("mousemove", handleMouseMove);
      hero.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="
      relative 
      bg-[hsl(var(--hero-bg))]
      overflow-hidden
      min-h-[560px] md:min-h-[620px]
      flex
      items-center
    "
    >
      {/* 🔥 BACKGROUND MARQUEE */}
      <div className="absolute inset-0 flex flex-col justify-center mt-12 pointer-events-none select-none">
        
        <div className="hero-marquee-wrapper">
          <div className="hero-marquee-track">
            {[...Array(3)].map((_, i) => (
              <h1 key={i} className="hero-marquee-text-filled">
                فيستريا – برجر، وجبات خفيفة، وأجواء مجتمعية مميزة –
              </h1>
            ))}
          </div>
        </div>

        <div className="hero-marquee-wrapper mt-2">
          <div className="hero-marquee-track reverse">
            {[...Array(3)].map((_, i) => (
              <h1 key={i} className="hero-marquee-text-outline">
                فيستريا – برجر، وجبات خفيفة، وأجواء مجتمعية مميزة –
              </h1>
            ))}
          </div>
        </div>

      </div>

      {/* CONTENT */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 flex flex-col items-center text-center pt-8 pb-24 md:pt-10 md:pb-32">
        
        <div className="mt-6 md:mt-10">
          <Image
            ref={burgerRef as any}
            src="/burger3.avif"
            alt="برجر فيستريا"
            width={600}
            height={600}
            priority
            className="w-[65vw] max-w-[360px] md:max-w-[520px] h-auto"
          />
        </div>
        <ButtonPrimary href="/menu" className="mt-16">
  استكشف القائمة
</ButtonPrimary>
        
      </div>
    </section>
  );
}