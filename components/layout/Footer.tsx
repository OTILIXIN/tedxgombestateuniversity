import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa6";

import Container from "../ui/Container";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/75 text-white">

      <Container>

        <div className="grid gap-12 py-16 sm:py-20 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="md:col-span-2">

            <Link href="/">
              <Image
                src="/logo.png"
                alt="TEDxGombeStateUniversity"
                width={260}
                height={80}
                className="w-48 sm:w-56 lg:w-64 h-auto"
              />
            </Link>

            <p className="mt-6 max-w-md text-gray-300 leading-7">
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

            <ul className="space-y-3 text-gray-300">

              <li>
  <Link
    href="/"
    className="transition-colors duration-300 hover:text-red-500"
  >
    Home
  </Link>
</li>
              <li>
  <Link
    href="/about"
    className="transition-colors duration-300 hover:text-red-500"
  >
    About
  </Link>
</li>
              <li>
  <Link
    href="/speakers"
    className="transition-colors duration-300 hover:text-red-500"
  >
    Speakers
  </Link>
</li>
              <li>
  <Link
    href="/get-involved/partner"
    className="transition-colors duration-300 hover:text-red-500"
  >
    Partners
  </Link>
</li>
              <li>
  <a
    href="mailto:tedxgombestateuniversity0@gmail.com"
    className="transition-colors duration-300 hover:text-red-500"
  >
    Contact
  </a>
</li>

            </ul>

          </div>

          {/* Contact */}
          <div>

            <h3 className="mb-5 font-semibold text-white">
              Contact
            </h3>

            <ul className="space-y-4 leading-7 text-gray-300">

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
  href="https://www.instagram.com/tedxgombestateuniversity/"
  target="_blank"
  rel="noopener noreferrer"
  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 transition-all duration-300 hover:border-red-600 hover:bg-red-600 hover:text-white"
  aria-label="Instagram"
>
  <FaInstagram size={18} />
</a>

<a
  href="https://web.facebook.com/profile.php?id=61580382606597"
  target="_blank"
  rel="noopener noreferrer"
  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 transition-all duration-300 hover:border-red-600 hover:bg-red-600 hover:text-white"
  aria-label="Facebook"
>
  <FaFacebookF size={18} />
</a>

            </div>

          </div>

        </div>

       {/* Bottom Footer */}
<div className="border-t border-white/10 py-8">

  <div className="grid gap-6 text-center lg:grid-cols-3 lg:items-center lg:text-left">

    {/* Left */}
    <p className="text-sm text-gray-300">
  This independent TEDx event is operated under license from TED.
    </p>

    {/* Centre */}
    <a
  href="https://lixinnetwork.com"
  target="_blank"
  rel="noopener noreferrer"
  className="flex flex-col items-center gap-4 rounded-3xl border border-white/10 bg-white/5 px-6 py-5 transition-all duration-300 hover:border-red-600 hover:bg-white/10 sm:flex-row sm:gap-3"
>
  <span className="text-sm text-gray-300">
    Powered by
  </span>

  <Image
    src="/lixin-logo2.png"
    alt="LIXIN NETWORK LTD"
    width={45}
    height={45}
    className="shrink-0"
  />

  <span className="text-center font-semibold leading-tight text-white">
    LIXIN NETWORK LTD.
  </span>

  <span className="text-center text-xs uppercase tracking-[0.3em] text-gray-300">
    Digital Experience Partner
  </span>
</a>
    {/* Right */}
    <p className="text-sm text-gray-300 lg:text-right">
      © 2026 TEDxGombeStateUniversity.
      <br className="lg:hidden" />
      All rights reserved.
    </p>

  </div>

</div>

      </Container>

    </footer>
  );
}