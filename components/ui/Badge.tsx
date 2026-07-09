type BadgeProps = {
  children: React.ReactNode;
  variant?: "default" | "success" | "warning" | "danger";
};

export default function Badge({
  children,
  variant = "default",
}: BadgeProps) {
  const variants = {
    default: "bg-white/10 text-white border-white/10",
    success: "bg-green-500/10 text-green-400 border-green-500/20",
    warning: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    danger: "bg-red-500/10 text-red-400 border-red-500/20",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide ${variants[variant]}`}
    >
      {children}
    </span>
  );
}