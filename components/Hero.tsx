"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

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

    const percentX =
      (e.clientX - rect.left) / rect.width - 0.5;

    const percentY =
      (e.clientY - rect.top) / rect.height - 0.5;

    burger.style.transform = `translate3d(${
      percentX * maxX
    }px, ${percentY * maxY}px, 0)`;
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
  bg-[var(--hero-bg)]
  overflow-hidden
  min-h-screen
  flex
  items-center
"
    >
      {/* MARQUEE BACKGROUND */}
      <div className="absolute inset-0 flex flex-col justify-center mt-28  pointer-events-none select-none">
        <div className="marquee-wrapper">
          <div className="marquee-track">
            <h1 className="marquee-text-filled">
              فيستريا – برجر، وجبات خفيفة، وأجواء مجتمعية مميزة –
            </h1>
            <h1 className="marquee-text-filled">
              فيستريا – برجر، وجبات خفيفة، وأجواء مجتمعية مميزة –
            </h1>
            <h1 className="marquee-text-filled">
              فيستريا – برجر، وجبات خفيفة، وأجواء مجتمعية مميزة –
            </h1>
          </div>
        </div>

        <div className="marquee-wrapper mt-2 md:mt-0">
          <div className="marquee-track reverse">
            <h1 className="marquee-text-outline">
              فيستريا – برجر، وجبات خفيفة، وأجواء مجتمعية مميزة –
            </h1>
            <h1 className="marquee-text-outline">
              فيستريا – برجر، وجبات خفيفة، وأجواء مجتمعية مميزة –
            </h1>
            <h1 className="marquee-text-outline">
              فيستريا – برجر، وجبات خفيفة، وأجواء مجتمعية مميزة –
            </h1>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 flex flex-col items-center text-center">

       <div className="mt-20 md:mt-24">
  <Image
    ref={burgerRef as any}
    src="/burger3.avif"
    alt="برجر فيستريا"
    width={600}
    height={600}
    priority
    className="
      w-[65vw]
      max-w-[280px]
      md:w-auto
      md:max-w-[400px]
      h-auto
      block
      relative
      will-change-transform
    "
  />
</div>

       

      <Link
  href="/menu"
  className="
  relative
  mt-12
  md:mt-10
  inline-block
  overflow-hidden
  rounded-full
  bg-yellow-400
  border
  border-yellow-300
  px-8
  py-3
  font-medium
  text-[#d83b2d]
  group
"
>
  <span
    className="
    absolute
    inset-0
    bg-[#d83b2d]
    translate-y-full
    group-hover:translate-y-0
    transition-transform
    duration-300
  "
  />

  <span
    className="
    relative
    z-10
    group-hover:text-white
    transition-colors
  "
  >
    استكشف القائمة
  </span>
</Link>

      </div>
    </section>
  );
}