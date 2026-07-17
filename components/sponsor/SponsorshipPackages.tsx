import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionHeader from "../ui/SectionHeader";

const packages = [
  {
    name: "Bronze",
    icon: "🥉",
    color: "border-amber-600 bg-amber-700/20",
    price: "₦250,000",
    featured: false,
    benefits: [
      "Logo on website",
      "Social media recognition",
      "Event program acknowledgement",
      "Certificate of appreciation",
    ],
  },
  {
    name: "Silver",
    icon: "🥈",
    color: "border-gray-400 bg-gray-300/10",
    price: "₦500,000",
    featured: false,
    benefits: [
      "Everything in Bronze",
      "Medium logo placement",
      "Roll-up banner display",
      "2 complimentary tickets",
    ],
  },
  {
    name: "Gold",
    icon: "🥇",
    color: "border-yellow-400 bg-yellow-500/10",
    price: "₦1,000,000",
    featured: true,
    benefits: [
      "Everything in Silver",
      "Premium stage recognition",
      "Exhibition booth",
      "Speaking opportunity",
      "5 complimentary tickets",
    ],
  },
  {
    name: "Titanium",
    icon: "💎",
    color: "border-cyan-400 bg-cyan-400/10",
    price: "Custom",
    featured: false,
    benefits: [
      "Title partnership",
      "Exclusive branding",
      "VIP engagement",
      "Custom activation",
      "Maximum media exposure",
    ],
  },
];

export default function SponsorshipPackages() {
  return (
    <Section id="packages" className="bg-transparent">
      <Container>

        <SectionHeader
          eyebrow="Packages"
          title="Choose Your Sponsorship Level"
          description="Select the partnership package that best aligns with your organization's objectives and desired level of engagement."
        />

        <div className="mt-20 grid gap-8 lg:grid-cols-4">

          {packages.map((pkg) => (

            <div
              key={pkg.name}
              className={`group rounded-3xl border p-8 backdrop-blur-md transition-all duration-500 hover:-translate-y-3 ${
                pkg.featured
                  ? "border-red-600 bg-red-600/10 shadow-2xl shadow-red-600/20"
                  : "border-white/10 bg-black/25 hover:border-red-600"
              }`}
            >

              {pkg.featured && (
                <span className="mb-6 inline-flex rounded-full bg-red-600 px-4 py-1 text-xs font-semibold">
                  MOST POPULAR
                </span>
              )}

              {/* Package Icon */}

              <div className="mb-8 flex justify-center">

                <div
                  className={`flex h-20 w-20 items-center justify-center rounded-full border text-5xl ${pkg.color}`}
                >
                  {pkg.icon}
                </div>

              </div>

              <h3 className="text-center text-3xl font-bold">
                {pkg.name}
              </h3>

              <p className="mt-5 text-center text-4xl font-black text-red-500">
                {pkg.price}
              </p>

              <ul className="mt-10 space-y-4">

                {pkg.benefits.map((benefit) => (

                  <li
                    key={benefit}
                    className="flex items-center gap-3 text-gray-300"
                  >
                    <span className="text-red-500">✓</span>
                    {benefit}
                  </li>

                ))}

              </ul>

              <button
                className={`mt-10 w-full rounded-full py-3 font-semibold transition ${
                  pkg.featured
                    ? "bg-red-600 hover:bg-red-700"
                    : "border border-red-600 hover:bg-red-600"
                }`}
              >
                Choose Package
              </button>

            </div>

          ))}

        </div>

      </Container>
    </Section>
  );
}