import Container from "../ui/Container";
import Section from "../ui/Section";

export default function Newsletter() {
  return (
    <Section className="relative overflow-hidden bg-black text-white">
      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/10 blur-[180px]" />
      </div>

      <Container>
        <div className="relative z-10 mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-12 backdrop-blur">

          <p className="text-center text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
            Stay Connected
          </p>

          <h2 className="mt-4 text-center text-4xl font-bold">
            Never Miss an Update
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-center text-gray-400">
            Subscribe to receive speaker announcements, ticket releases,
            event updates and exclusive TEDxGombeStateUniversity news.
          </p>

          <div className="mt-10 flex flex-col gap-4 md:flex-row">

            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 rounded-xl border border-white/10 bg-black/40 px-6 py-4 outline-none transition focus:border-red-600"
            />

            <button className="rounded-xl bg-red-600 px-8 py-4 font-semibold transition hover:bg-red-700">
              Subscribe
            </button>

          </div>

        </div>
      </Container>
    </Section>
  );
}