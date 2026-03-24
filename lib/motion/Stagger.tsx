"use client";

/**
 * Stagger (REAL)
 * مسؤول عن:
 * - توزيع delay على الأطفال
 */

import React from "react";

export default function Stagger({ children }: { children: React.ReactNode }) {
  return (
    <>
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return child;

        return React.cloneElement(child, {
          delay: index * 0.2,
        });
      })}
    </>
  );
}