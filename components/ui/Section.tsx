import type { HTMLAttributes } from "react";

type SectionProps = HTMLAttributes<HTMLElement>;

export default function Section({
  children,
  className = "",
  ...props
}: SectionProps) {
  return (
    <section
      className={`py-16 sm:py-20 lg:py-24 ${className}`}
      {...props}
    >
      {children}
    </section>
  );
}