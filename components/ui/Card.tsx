type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Card({
  children,
  className = "",
}: CardProps) {
  return (
    <div
      className={`
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-8
        backdrop-blur-md
        transition-all
        duration-300
        hover:border-red-600/40
        hover:bg-white/10
        ${className}
      `}
    >
      {children}
    </div>
  );
}