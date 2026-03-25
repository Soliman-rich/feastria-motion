/**
 * Home Page
 * مسؤول عن:
 * - عرض السكشنات
 */

import Hero from "@/features/home/Hero";
import AboutSection from "@/features/home/AboutSection";
import FavoritesSection from "@/features/home/FavoritesSection";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <FavoritesSection/>
    </>
  );
}