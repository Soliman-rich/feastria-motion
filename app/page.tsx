/**
 * Home Page
 * مسؤول عن:
 * - عرض السكشنات
 */

import Hero from "@/sections/Hero";
import AboutSection from "@/sections/AboutSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSection />
    </main>
  );
}