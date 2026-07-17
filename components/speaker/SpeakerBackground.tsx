"use client";

import { useEffect, useState } from "react";

const images = [
  "/speaker/1.jpg",
  "/speaker/2.jpg",
  "/speaker/3.jpg",
  "/speaker/4.jpg",
  "/speaker/5.jpg",
  "/speaker/6.jpg",
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
    <div className="fixed inset-0 -z-20 overflow-hidden">

      {images.map((image, index) => (

        <div
          key={image}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[2500ms] ${
            current === index ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${image})`,
            transform: current === index ? "scale(1.08)" : "scale(1)",
            transition:
              "opacity 2.5s ease-in-out, transform 12s ease-out",
          }}
        />

      ))}

    </div>
  );
}