import Link from "next/link";
import { Ticket } from "lucide-react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";

export default function TicketsPage() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden text-white">
      <Navbar />

      <section className="flex min-h-[70vh] items-center pt-24 sm:pt-28">
        <Container>
          <div className="mx-auto max-w-2xl rounded-3xl border border-white/10 bg-black/50 px-6 py-12 text-center shadow-2xl backdrop-blur-xl sm:px-10 sm:py-16">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-red-500/30 bg-red-600/10">
              <Ticket className="h-8 w-8 text-red-500" />
            </div>

            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.3em] text-red-500">
              Ticket Sales
            </p>

            <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Tickets are not currently available
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-gray-300 sm:text-lg">
              Ticket sales are currently closed. Please check back for updates on the 2027 TEDxGombeStateUniversity edition.
            </p>

            <Link
              href="/"
              className="mt-8 inline-flex rounded-full bg-red-600 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-red-700"
            >
              Return to Home
            </Link>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
