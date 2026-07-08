import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-black/90 backdrop-blur border-b border-gray-800">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/">
  <Image
    src="/logo.png"
    alt="TEDxGombeStateUniversity"
    width={200}
    height={70}
    priority
  />
</Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="hover:text-red-600 transition">Home</a>
          <a href="#" className="hover:text-red-600 transition">About</a>
          <a href="#" className="hover:text-red-600 transition">Speakers</a>
          <a href="#" className="hover:text-red-600 transition">Team</a>
          <a href="#" className="hover:text-red-600 transition">Partners</a>
          <a href="#" className="hover:text-red-600 transition">Contact</a>
        </div>

        {/* Register Button */}
        <button className="rounded-md bg-red-600 px-5 py-2 font-semibold hover:bg-red-700 transition">
          Register
        </button>
      </div>
    </nav>
  );
}