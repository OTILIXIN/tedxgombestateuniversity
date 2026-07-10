import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";

import Container from "../ui/Container";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black text-white">

      <Container>

        <div className="grid gap-12 py-20 md:grid-cols-4">

          {/* Brand */}
          <div className="md:col-span-2">

            <Link href="/">
              <Image
                src="/logo.png"
                alt="TEDxGombeStateUniversity"
                width={220}
                height={70}
              />
            </Link>

            <p className="mt-6 max-w-md text-gray-400 leading-7">
              TEDxGombeStateUniversity is an independently organized TED event
              dedicated to bringing together ideas, innovation and inspiring
              conversations that shape the future.
            </p>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="mb-5 font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/speakers">Speakers</Link></li>
              <li><Link href="/partners">Partners</Link></li>
              <li><Link href="/contact">Contact</Link></li>

            </ul>

          </div>

          {/* Contact */}
          <div>

            <h3 className="mb-5 font-semibold text-white">
              Contact
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>tedxgombestateuniversity0@gmail.com</li>

              <li>+234 913 519 8971</li>

              <li>
                Gombe State University
                <br />
                Gombe, Nigeria
              </li>

            </ul>

            <div className="mt-6 flex gap-4">

  <a
  href="https://www.instagram.com/yourusername"
  target="_blank"
  rel="noopener noreferrer"
  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 transition-all duration-300 hover:border-red-600 hover:bg-red-600 hover:text-white"
  aria-label="Instagram"
>
  <FaInstagram size={20} />
</a>

  <a
  href="https://www.linkedin.com/in/yourusername"
  target="_blank"
  rel="noopener noreferrer"
  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 transition-all duration-300 hover:border-red-600 hover:bg-red-600 hover:text-white"
  aria-label="LinkedIn"
>
  <FaLinkedinIn size={20} />
</a>

  <a
  href="https://www.youtube.com/@yourusername"
  target="_blank"
  rel="noopener noreferrer"
  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 transition-all duration-300 hover:border-red-600 hover:bg-red-600 hover:text-white"
  aria-label="YouTube"
>
  <FaYoutube size={20} />
</a>

  <a
  href="https://www.facebook.com/yourusername"
  target="_blank"
  rel="noopener noreferrer"
  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 transition-all duration-300 hover:border-red-600 hover:bg-red-600 hover:text-white"
  aria-label="Facebook"
>
  <FaFacebookF size={20} />
</a>

</div>

          </div>

        </div>

       {/* Bottom Footer */}
<div className="border-t border-white/10 py-8">

  <div className="flex flex-col items-center gap-6 lg:flex-row lg:justify-between">

    {/* Left */}
    <p className="text-sm text-gray-500 lg:w-1/3">
      This independent TEDx event is operated under license from TED.
    </p>

    {/* Centre */}
    <a
      href="https://lixinnetwork.com"
      target="_blank"
      rel="noopener noreferrer"
      className="mt-4 flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 transition-all duration-300 hover:border-red-600 hover:bg-white/10"
    >
      <span className="text-sm text-gray-400">
        Powered by
      </span>

      <Image
        src="/lixin-logo2.png"
        alt="LIXIN NETWORK LTD"
        width={32}
        height={32}
      />

      <span className="font-semibold tracking-wide text-white">
        LIXINNETWORK LTD.
      </span>
    </a>

    {/* Right */}
    <p className="text-sm text-gray-500 lg:w-1/3 lg:text-right">
      © 2026 TEDxGombeStateUniversity. All rights reserved.
    </p>

  </div>

</div>

      </Container>

    </footer>
  );
}
