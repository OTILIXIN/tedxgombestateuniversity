import Container from "../ui/Container";
import Section from "../ui/Section";

export default function GetInvolvedHero() {
  return (
    <Section className="py-0 relative flex min-h-[85vh] items-center justify-center overflow-hidden px-6 pb-24 pt-28 text-white sm:px-8 sm:pb-32 lg:px-10 lg:pt-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(235,0,40,0.25),_transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/10 blur-[220px]" />
      </div>

      <Container>
        <div className="relative z-10 mx-auto max-w-4xl rounded-[2rem] border border-white/15 bg-black/35 p-8 text-center shadow-2xl shadow-black/50 backdrop-blur-md sm:p-12 lg:p-16">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-red-500">
            Join the Movement
          </p>

          <h1 className="mt-8 text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Get <span className="text-red-600">Involved</span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-gray-200 sm:text-lg">
            TEDxGombeStateUniversity thrives because of passionate volunteers,
            visionary speakers, supportive partners and generous sponsors.
            Discover how you can contribute to creating ideas worth spreading.
          </p>
        </div>
      </Container>
    </Section>
  );
}