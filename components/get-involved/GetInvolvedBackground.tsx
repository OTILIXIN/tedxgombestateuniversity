"use client";

export default function GetInvolvedBackground() {
  return (
    <div className="fixed inset-0 -z-20 overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="h-full w-full object-cover object-center opacity-90"
      >
        <source src="/videos/get-involved.mp4" type="video/mp4" />
      </video>
    </div>
  );
}