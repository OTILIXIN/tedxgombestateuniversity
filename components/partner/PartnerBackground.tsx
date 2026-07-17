"use client";

export default function PartnerBackground() {
  return (
    <div className="fixed inset-0 -z-20 overflow-hidden">

      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage: "url('/partner/hero.jpg')",
        }}
      />

    </div>
  );
}