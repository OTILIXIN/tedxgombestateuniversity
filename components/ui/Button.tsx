import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({
  href,
  children,
  variant = "primary",
}: ButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-red-600 hover:bg-red-700 text-white"
      : "border border-white hover:bg-white hover:text-black text-white";

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-xl px-8 py-4 font-semibold transition ${styles}`}
    >
      {children}
    </Link>
  );
}