import Image from "next/image";

type SpeakerCardProps = {
  name: string;
  title: string;
  image: string;
};

export default function SpeakerCard({
  name,
  title,
  image,
}: SpeakerCardProps) {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-red-600/50 hover:shadow-2xl hover:shadow-red-600/10">

      {/* Image */}
      <div className="relative h-60 overflow-hidden sm:h-64">

        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">

        <h3 className="text-lg font-bold transition-colors duration-300 group-hover:text-red-500">
          {name}
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-400">
          {title}
        </p>

      </div>

    </div>
  );
}