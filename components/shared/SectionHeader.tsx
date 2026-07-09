interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeaderProps) {
  const alignment =
    align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-3xl mb-16 ${alignment}`}>
      {eyebrow && (
        <p className="text-red-600 uppercase tracking-[0.3em] font-semibold text-sm">
          {eyebrow}
        </p>
      )}

      <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white leading-tight">
        {title}
      </h2>

      {description && (
        <p className="mt-6 text-lg text-gray-300 leading-8">
          {description}
        </p>
      )}
    </div>
  );
}