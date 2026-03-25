"use client";

import React from "react";

export default function Stagger({ children }: { children: React.ReactNode }) {
  return (
    <>
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return child;

        const element = child as React.ReactElement<any>;

        return React.cloneElement(element, {
          style: {
            ...(element.props?.style || {}),
            animationDelay: `${index * 0.2}s`,
          },
        });
      })}
    </>
  );
}