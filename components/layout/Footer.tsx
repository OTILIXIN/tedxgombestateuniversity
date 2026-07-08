import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-black text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-4">

          <div>
            <Link href="/">
  <Image
    src="/logo.png"
    alt="TEDxGombeStateUniversity"
    width={280}
    height={60}
    className="mb-4"
  />
</Link>

            <p className="mt-4 leading-7">
              An independently organized TED event bringing together ideas,
              innovators and leaders to inspire meaningful change.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white">Explore</h4>

            <ul className="mt-4 space-y-2">
              <li>About</li>
              <li>Speakers</li>
              <li>Partners</li>
              <li>Gallery</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white">Get Involved</h4>

            <ul className="mt-4 space-y-2">
              <li>Attend</li>
              <li>Volunteer</li>
              <li>Partner</li>
              <li>Speak</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white">Contact</h4>

            <p className="mt-4">
              tedxgombestateuniversity0@gmail.com
            </p>

            <p className="mt-2">
              Gombe State University
            </p>

          </div>

        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm">
          © 2027 TEDxGombeStateUniversity. Independently organized under license from TED.
        </div>

      </div>
    </footer>
  );
}