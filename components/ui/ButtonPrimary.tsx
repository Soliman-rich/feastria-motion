"use client";

import Link from "next/link";

export default function ButtonPrimary({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`
        relative
        inline-block
        overflow-hidden
        rounded-full
        px-8
        py-3
        font-semibold
        bg-[hsl(var(--brand-yellow))]
        text-[hsl(var(--brand-red))]
        border-2
        border-transparent
        group
        transition-all
        duration-300
        hover:border-[hsl(var(--brand-yellow))]
        ${className}
      `}
    >
      <span
        className="
          absolute
          inset-0
          bg-[hsl(var(--brand-red))]
          translate-y-full
          group-hover:translate-y-0
          transition-transform
          duration-500
          ease-[cubic-bezier(0.22,1,0.36,1)]
          rounded-full
        "
      />

      <span
        className="
          relative
          z-10
          transition-colors
          duration-300
          group-hover:text-white
        "
      >
        {children}
      </span>
    </Link>
  );
}