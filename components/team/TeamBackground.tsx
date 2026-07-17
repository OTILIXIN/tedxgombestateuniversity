import Image from "next/image";

export default function TeamBackground() {
  return (
    <div className="fixed inset-0 -z-20 overflow-hidden">
      <Image
        src="/team/team-hero.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        quality={70}
        className="object-cover object-center sm:object-center"
      />
    </div>
  );
}