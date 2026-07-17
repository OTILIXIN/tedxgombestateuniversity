"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  { src: "/speaker/1.jpg", mobileFocus: "object-center" },
  { src: "/speaker/2.jpg", mobileFocus: "object-center" },
  { src: "/speaker/3.jpg", mobileFocus: "object-center" },
  { src: "/speaker/4.jpg", mobileFocus: "object-center" },
  { src: "/speaker/5.jpg", mobileFocus: "object-center" },
  { src: "/speaker/6.jpg", mobileFocus: "object-center" },
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
          key={image.src}
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
            src={image.src}
            alt=""
            fill
            priority={index === 0}
            loading={index === 0 ? undefined : "eager"}
            sizes="100vw"
            quality={70}
            className={`object-cover sm:object-center ${image.mobileFocus}`}
          />
        </div>

      ))}

    </div>
  );
}