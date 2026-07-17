"use client";

import { useEffect, useState } from "react";

const images = [
  "/hero/1.jpg",
  "/hero/2.jpg",
  "/hero/3.jpg",
  "/hero/4.jpg",
  "/hero/5.jpg",
  "/hero/6.jpg",
];

export default function HeroBackground() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 8000);

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
              "opacity 2.5s ease-in-out, transform 8s ease-out",
          }}
        />

      ))}

    </div>
  );
}
