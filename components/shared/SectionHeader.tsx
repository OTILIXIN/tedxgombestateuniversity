type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div className="max-w-3xl mb-16">
      <p className="text-red-600 uppercase tracking-[0.3em] font-semibold">
        {eyebrow}
      </p>

      <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
        {title}
      </h2>

      {description && (
        <p className="mt-6 text-lg leading-8 text-gray-300">
          {description}
        </p>
      )}
    </div>
  );
}