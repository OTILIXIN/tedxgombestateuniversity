
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  "/speakers/1.jpg",
  "/speakers/2.jpg",
  "/speakers/3.jpg",
  "/speakers/4.jpg",
  "/speakers/5.jpg",
  "/speakers/6.jpg",
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
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Background slideshow */}
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
            sizes="100vw"
            quality={70}
            className="object-cover object-center"
          />
        </div>
      ))}

      {/* Continuous dark overlay */}
      <div className="absolute inset-0 z-10 bg-black/60" />
    </div>
  );
}
