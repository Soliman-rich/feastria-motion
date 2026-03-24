"use client";

/**
 * About Section
 * - Layout
 * - Reveal animation
 * - Marquee احترافي بدون فراغات
 */

import Image from "next/image";
import Link from "next/link";
import { Reveal, Stagger } from "@/lib/motion";
import ButtonPrimary from "@/components/ui/ButtonPrimary";
export default function AboutSection() {
  return (
    <section>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2">

        {/* IMAGE */}
        <div className="relative h-[420px] md:h-[650px] order-2 md:order-1">
          <Image
            src="/images/diner-interior.avif"
            alt="مطعم فيستريا"
            fill
            className="object-cover"
          />
        </div>

        {/* CONTENT */}
        <div className="bg-[#c7332e] text-white flex items-center order-1 md:order-2">
          <div className="px-8 md:px-16 lg:px-24 py-16 md:py-20">

            <Stagger>

              {/* Title */}
              <Reveal>
                <h2 className="
                  font-bold 
                  text-[34px] 
                  md:text-[56px] 
                  lg:text-[60px]
                  leading-[1.15] 
                  mb-6
                  max-w-[620px]
                ">
                  المكان المفضل في المدينة لتناول أشهى المأكولات.
                </h2>
              </Reveal>

              {/* Description */}
              <Reveal>
                <p className="
                  text-white/90 
                  text-base 
                  md:text-lg 
                  leading-[1.9] 
                  mb-10
                  max-w-[520px]
                ">
                  في فيستريا، تشتعل رغباتك، وتتحول أيامك المفتوحة إلى أساطير.
                  وكل لقمة هي انفجار نكهات لا يُنسى. في فيستريا، حيث تجتمع
                  النكهة والمتعة في كل لقمة.
                </p>
              </Reveal>

              {/* Button */}
              <Reveal>
                <ButtonPrimary href="/about">
                   معلومات عنا
                </ButtonPrimary>
              </Reveal>

            </Stagger>

          </div>
        </div>

      </div>

      {/* MARQUEE */}
      <div className="marquee-wrapper bg-[var(--hero-bg)] py-4">

        <div className="marquee-track">

          {/* LOOP 1 */}
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={`a-${i}`} className="marquee-item">
              <span className="marquee-text">حان وقت الاحتفال</span>
              <span className="marquee-dot" />
            </div>
          ))}

          {/* LOOP 2 */}
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={`b-${i}`} className="marquee-item">
              <span className="marquee-text">حان وقت الاحتفال</span>
              <span className="marquee-dot" />
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}