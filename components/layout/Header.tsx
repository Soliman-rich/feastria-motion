"use client";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full relative">

      {/* ================= Top Bar ================= */}
      <div className="bg-brand-yellow text-brand-red text-center text-[10px] font-medium py-[5px]">
        أصبح يوم الجمعة ألذ! استمتع بخصم 30% على كل لقمة في مطعم فيستريا!
      </div>

      {/* ================= Main Navbar ================= */}
      <div className="bg-brand-red text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-[14px] flex items-center justify-between">

          {/* Logo */}
          <div className="text-[18px] font-medium tracking-wide">
            فيستريا
          </div>

          {/* ================= Desktop Navigation ================= */}
          <div className="hidden md:flex items-center gap-7 text-[15px] font-medium">

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

            <a
              href="#"
              className="bg-brand-yellow text-brand-red px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-brand-red hover:text-white border border-brand-yellow"
            >
              اتصال
            </a>

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
            className="block bg-brand-yellow text-brand-red text-center py-3 rounded-full font-semibold"
            onClick={() => setIsOpen(false)}
          >
            اتصال
          </a>

        </div>
      )}

    </header>
  );
}