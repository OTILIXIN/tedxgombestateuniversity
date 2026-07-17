"use client";

export default function AboutBackground() {
  return (
    <div className="fixed inset-0 -z-20 overflow-hidden">

      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/about/ted-intro.mp4" type="video/mp4" />
      </video>

    </div>
  );
}