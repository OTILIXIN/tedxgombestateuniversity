"use client";

import { useEffect, useState } from "react";

const images = [
  "/sponsor/1.jpg",
  "/sponsor/2.jpg",
  "/sponsor/3.jpg",
  "/sponsor/4.jpg",
  "/sponsor/5.jpg",
  "/sponsor/6.jpg",
];

export default function SponsorBackground() {
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