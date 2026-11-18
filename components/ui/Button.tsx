import React from "react";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  href?: string;
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
  onClick,
  href,
  className = "",
}: ButtonProps) {
  const baseStyle =
    "block w-full px-8 py-4 text-center rounded-xl font-semibold transition duration-300 sm:w-auto";

  const variants = {
    primary:
      "bg-red-600 hover:bg-red-700 text-white",
    secondary:
      "border border-white text-white hover:bg-white hover:text-black",
  };

  if (href) {
    return (
      <Link
        href={href}
        onClick={onClick}
        className={`${baseStyle} ${variants[variant]} ${className}`}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}