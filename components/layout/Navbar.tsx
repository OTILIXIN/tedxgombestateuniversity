"use client";

import Image from "next/image";
import Link from "next/link";

import { navigation } from "@/data/navigation";

export default function Navbar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-black/5 backdrop-blur-md">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-8 lg:px-14">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="TEDxGombeStateUniversity"
            width={180}
            height={55}
            priority
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
          className="rounded-full border border-red-600 bg-red-600 px-6 py-2.5 text-sm font-semibold transition-all duration-300 hover:bg-red-700 hover:shadow-lg hover:shadow-red-600/30"
        >
          Register
        </Link>

      </div>
    </nav>
  );
}