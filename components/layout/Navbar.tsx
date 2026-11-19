"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { navigation } from "@/data/navigation";
import { ticketSalesStatus } from "@/data/siteAvailability";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const ticketStatusLabel =
    ticketSalesStatus === "Closed" ? "Tickets Closed" : "Tickets Coming Soon";

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
            className={`relative transition ${
              pathname === "/" ? "text-red-600" : "hover:text-red-600"
            } after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-red-600 after:transition-all ${
              pathname === "/" ? "after:w-full" : "after:w-0 hover:after:w-full"
            }`}
          >
            Home
          </Link>

          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative transition ${
                pathname === item.href ? "text-red-600" : "hover:text-red-600"
              } after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-red-600 after:transition-all ${
                pathname === item.href ? "after:w-full" : "after:w-0 hover:after:w-full"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-4">

  {ticketSalesStatus === "Open" ? (
    <Link
      href="/tickets"
      className="hidden md:inline-flex rounded-full border border-red-600 bg-red-600 px-6 py-2.5 text-sm font-semibold transition-all duration-300 hover:bg-red-700"
    >
      Register
    </Link>
  ) : (
    <span
      aria-disabled="true"
      className="hidden cursor-not-allowed rounded-full border border-white/10 bg-white/5 px-6 py-2.5 text-sm font-semibold text-gray-400 md:inline-flex"
    >
      {ticketStatusLabel}
    </span>
  )}

  {/* Mobile Menu Button */}
  <button
    onClick={() => setIsOpen(!isOpen)}
    className="rounded-lg p-2 text-white md:hidden"
    aria-label="Toggle navigation"
  >
    {isOpen ? <X size={28} /> : <Menu size={28} />}
  </button>

</div>

      </div>

{isOpen && (
  <div className="md:hidden border-t border-white/10 bg-black/95 backdrop-blur-xl">

    <div className="flex flex-col px-6 py-8">

      <Link
        href="/"
        onClick={() => setIsOpen(false)}
        className={`py-4 text-lg transition ${
          pathname === "/" ? "text-red-600 font-semibold" : "hover:text-red-600"
        }`}
      >
        Home
      </Link>

      {navigation.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={() => setIsOpen(false)}
          className={`py-4 text-lg transition ${
            pathname === item.href ? "text-red-600 font-semibold" : "hover:text-red-600"
          }`}
        >
          {item.label}
        </Link>
      ))}

      {ticketSalesStatus === "Open" ? (
        <Link
          href="/tickets"
          onClick={() => setIsOpen(false)}
          className="mt-6 rounded-xl bg-red-600 px-6 py-4 text-center font-semibold"
        >
          Register
        </Link>
      ) : (
        <span
          aria-disabled="true"
          className="mt-6 cursor-not-allowed rounded-xl border border-white/10 bg-white/5 px-6 py-4 text-center font-semibold text-gray-400"
        >
          {ticketStatusLabel}
        </span>
      )}

    </div>

  </div>
)}

    </nav>
  );
}