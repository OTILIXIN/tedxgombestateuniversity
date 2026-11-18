import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
  onClick,
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