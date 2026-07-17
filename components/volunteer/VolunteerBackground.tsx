import Image from "next/image";

export default function VolunteerBackground() {
  return (
    <div className="fixed inset-0 -z-20 overflow-hidden">
      <Image
        src="/volunteer/hero.jpg"
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