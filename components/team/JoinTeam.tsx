import Container from "../ui/Container";
import Section from "../ui/Section";

export default function JoinTeam() {
  return (
    <Section className="relative overflow-hidden text-white">

      {/* Red Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/10 blur-[180px]" />
      </div>

      <Container>

        <div className="relative z-10 mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-12 text-center backdrop-blur">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-600">
            Join Our Team
          </p>

          <h2 className="mt-5 text-4xl font-bold md:text-5xl">
            Help Bring Ideas Worth Spreading to Life
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-300">
            TEDxGombeStateUniversity is powered by passionate volunteers,
            creatives and professionals committed to creating an exceptional
            experience. Applications open during the planning phase of each
            edition.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4">

            <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-2 text-sm font-medium text-yellow-400">
              Applications Currently Closed
            </span>

          </div>

        </div>

      </Container>

    </Section>
  );
}