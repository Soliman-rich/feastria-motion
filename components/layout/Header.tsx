"use client";

import { useState } from "react";
import ButtonPrimary from "@/components/ui/ButtonPrimary";
export default function Header() {

  const [isOpen, setIsOpen] = useState(false);

  return (

    <header className="w-full relative">

      {/* ================= Top Bar ================= */}
      <div dir="rtl" className="bg-brand-yellow text-brand-red-light text-center text-[15px] font-medium py-[7px]">
        أصبح يوم الجمعة ألذ! استمتع بخصم 30% على كل لقمة في مطعم فيستريا!
      </div>

      {/* ================= Main Navbar ================= */}
      <div className="bg-brand-red text-white">

        <div className="max-w-[1280px] mx-auto px-4 md:px-6 py-5 flex items-center justify-between">

          {/* Logo */}
          <div className="text-[29px] font-medium tracking-wide">
            فيستريا
          </div>

          {/* ================= Desktop Navigation ================= */}
          <div className="hidden md:flex items-center gap-8 text-[16px] font-medium">

            {[
              "قائمة طعام",
              "عن",
              "التقييمات",
              "مدونة",
            ].map((item, index) => (

              <a
                key={index}
                href="#"
                className="group relative overflow-hidden h-[22px] block"
              >

                <span className="block text-white transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
                  {item}
                </span>

                <span className="absolute left-0 top-full block text-brand-yellow transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
                  {item}
                </span>

              </a>
            ))}

            {/* ================= Contact Button ================= */}
            <ButtonPrimary href="#">
                     اتصال
            </ButtonPrimary>


          </div>

          {/* ================= Mobile Hamburger ================= */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1"
          >
            <span className="w-6 h-[2px] bg-white"></span>
            <span className="w-6 h-[2px] bg-white"></span>
            <span className="w-6 h-[2px] bg-white"></span>
          </button>

        </div>
      </div>

      {/* ================= Mobile Drawer ================= */}
      {isOpen && (

        <div className="md:hidden absolute top-full left-0 w-full bg-brand-red text-white px-6 py-6 space-y-5 z-50 shadow-xl">

          {[
            "قائمة طعام",
            "عن",
            "التقييمات",
            "مدونة",
          ].map((item, index) => (

            <a
              key={index}
              href="#"
              className="block text-lg font-medium hover:text-brand-yellow transition"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>

          ))}

          <a
            href="#"
            className="block bg-brand-yellow text-brand-red-dark text-center py-3 rounded-full font-semibold"
            onClick={() => setIsOpen(false)}
          >
            اتصال
          </a>

        </div>

      )}

    </header>
  );
}