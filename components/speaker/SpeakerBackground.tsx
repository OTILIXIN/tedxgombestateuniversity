"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  "/speaker-background/speaker-1.webp",
  "/speaker-background/speaker-2.webp",
  "/speaker-background/speaker-3.webp",
  "/speaker-background/speaker-4.webp",
  "/speaker-background/speaker-5.webp",
  "/speaker-background/speaker-6.webp",
];

export default function SpeakerBackground() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 12000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-black">
      {images.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-[2500ms] ${
            current === index ? "opacity-100" : "opacity-0"
          }`}
          style={{
            transform: current === index ? "scale(1.08)" : "scale(1)",
            transition:
              "opacity 2.5s ease-in-out, transform 12s ease-out",
          }}
        >
          <Image
            src={src}
            alt=""
            fill
            priority={index === 0}
            loading={index === 0 ? undefined : "eager"}
            sizes="100vw"
            unoptimized
            className="object-cover object-center"
          />
        </div>
      ))}
    </div>
  );
}