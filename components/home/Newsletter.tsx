import Container from "../ui/Container";
import Section from "../ui/Section";

export default function Newsletter() {
  return (
    <Section className="relative overflow-hidden text-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/10 blur-[140px] sm:h-[450px] sm:w-[450px] sm:blur-[180px] lg:h-[600px] lg:w-[600px] lg:blur-[220px]" />
      </div>

      <Container>
        <div className="relative z-10 mx-auto max-w-4xl rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-[0_25px_80px_rgba(0,0,0,0.35)] backdrop-blur-md sm:p-8 lg:p-12">
          <p className="mt-4 text-center text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
            Stay Connected
          </p>

          <h2 className="mt-4 text-center text-4xl font-bold">
            Never Miss an Update
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-8 text-gray-300 sm:text-lg">
            Subscribe to receive speaker announcements, ticket releases,
            event updates and exclusive TEDxGombeStateUniversity news.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:mt-12 md:flex-row">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 rounded-full border border-white/10 bg-black/40 px-5 py-4 text-white placeholder:text-gray-500 outline-none transition-all duration-300 focus:border-red-600 focus:ring-2 focus:ring-red-600/20"
            />

            <button className="w-full rounded-full bg-red-600 px-8 py-4 font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-700 md:w-auto">
              Subscribe
            </button>
          </div>

          <p className="mt-6 text-center text-sm text-gray-300">
            We respect your privacy. No spam, only important TEDxGombeStateUniversity updates.
          </p>
        </div>
      </Container>
    </Section>
  );
}