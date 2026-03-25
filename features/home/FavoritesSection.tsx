"use client";

import ButtonPrimary from "@/components/ui/ButtonPrimary";
import { Cairo } from "next/font/google";

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "500", "700", "800", "900"],
});
export default function FavoritesSection() {
  return (
    <section
  dir="rtl"
  className={`${cairo.className} py-20 md:py-24 bg-[hsl(var(--hero-bg))]`}
>
      <div className="max-w-[1100px] mx-auto px-6">

        <div className="max-w-[460px] mx-auto text-center">

          {/* Title */}
          <h2
  className="
    text-[34px] md:text-[53px]
    font-extrabold
    leading-[1.2]
    text-[hsl(var(--brand-red))]
    mb-5
  "
>
  مفضلات العملاء
</h2>

          {/* Description */}
          <p
  className="
    text-[16px] md:text-[18px]
    text-black
    font-medium
    leading-[1.9]
    mb-10
  "
>
  متعة شهية، غنية بالعصارة، ومكدسة فوق بعضها. في فيستريا، تشتعل
  الرغبة في تناول الطعام، وكل لقمة لا تُنسى.
</p>

          {/* Button */}
          <div className="flex justify-center">
            <ButtonPrimary href="/menu">
              استكشف القائمة
            </ButtonPrimary>
          </div>

        </div>

      </div>
    </section>
  );
}