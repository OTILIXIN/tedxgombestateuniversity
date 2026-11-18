type TeamCardProps = {
  name: string;
  role: string;
};

export default function TeamCard({
  name,
  role,
}: TeamCardProps) {
  return (
    <div className="group min-h-44 rounded-3xl border border-white/10 bg-white/5 px-6 py-8 text-center backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-red-600/50 hover:shadow-xl hover:shadow-red-600/10">
      <div className="flex h-full flex-col items-center justify-center">
        <h3 className="text-xl font-bold text-white">
          {name}
        </h3>

        <p className="mt-3 text-sm leading-6 text-red-500 sm:text-base">
          {role}
        </p>
      </div>
    </div>
  );
}