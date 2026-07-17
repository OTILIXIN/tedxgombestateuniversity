import Image from "next/image";

type TeamCardProps = {
  image: string;
  name: string;
  role: string;
};

export default function TeamCard({
  image,
  name,
  role,
}: TeamCardProps) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-red-600/50 hover:shadow-xl hover:shadow-red-600/10">

      <div className="relative h-80 overflow-hidden">

        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

      </div>

      <div className="p-6 text-center">

        <h3 className="text-xl font-bold text-white">
          {name}
        </h3>

        <p className="mt-2 text-red-500">
          {role}
        </p>

      </div>

    </div>
  );
}