import Container from "../ui/Container";
import Section from "../ui/Section";

export default function TeamHero() {
  return (
    <Section className="py-0 relative flex min-h-[85vh] items-center overflow-hidden text-white">

      {/* Red Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/10 blur-[200px]" />
      </div>

      <Container>

        <div className="relative z-10 mx-auto max-w-4xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-red-500">
            TEDxGombeStateUniversity
          </p>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight sm:text-6xl lg:text-7xl">
            Meet
            <span className="text-red-600"> Our Team</span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-200">
            Behind every TEDx event is a passionate team of volunteers,
            creatives, innovators and leaders working together to create
            an unforgettable experience and amplify ideas worth spreading.
          </p>

        </div>

      </Container>

    </Section>
  );
}