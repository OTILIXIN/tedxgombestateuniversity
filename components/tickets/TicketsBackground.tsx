"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  "/tickets background/TOUCHBYJB-346.JPG",
  "/tickets background/TOUCHBYJB-347.JPG",
  "/tickets background/TOUCHBYJB-347 (1).JPG",
  "/tickets background/TOUCHBYJB-348.JPG",
  "/tickets background/TOUCHBYJB-349.JPG",
  "/tickets background/TOUCHBYJB-352.JPG",
];

export default function TicketsBackground() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrent((previous) => (previous + 1) % images.length);
    }, 8000);

    return () => window.clearInterval(interval);
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
            transform: current === index ? "scale(1.06)" : "scale(1)",
            transition:
              "opacity 2.5s ease-in-out, transform 8s ease-out",
          }}
        >
          <Image
            src={src}
            alt=""
            fill
            priority={index === 0}
            sizes="100vw"
            quality={75}
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}
