"use client";

import Image from "next/image";
import Link from "next/link";

import { navigation } from "@/data/navigation";

export default function Navbar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-black/5 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-24 lg:px-8">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
          src="/logo.png"
          alt="TEDxGombeStateUniversity"
          width={180}
          height={55}
          priority
          className="h-auto w-36 sm:w-44 lg:w-[180px]"
        />
        </Link>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-10 text-sm font-medium tracking-wide">

          <Link
            href="/"
            className="relative transition hover:text-red-600 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-red-600 after:transition-all hover:after:w-full"
          >
            Home
          </Link>

          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative transition hover:text-red-600 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-red-600 after:transition-all hover:after:w-full"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <Link
          href="#"
          className="rounded-full border border-red-600 bg-red-600 px-4 py-2 text-xs sm:px-6 sm:py-2.5 sm:text-sm font-semibold transition-all duration-300 hover:bg-red-700 hover:shadow-lg hover:shadow-red-600/30"
        >
          Register
        </Link>

      </div>
    </nav>
  );
}