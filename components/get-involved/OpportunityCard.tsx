import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { AvailabilityStatus } from "@/data/siteAvailability";

type OpportunityCardProps = {
  title: string;
  description: string;
  status: AvailabilityStatus;
  href: string;
  icon: React.ReactNode;
};

export default function OpportunityCard({
  title,
  description,
  status,
  href,
  icon,
}: OpportunityCardProps) {
  const statusStyles = {
    Open:
      "bg-green-500/10 text-green-400 border border-green-500/30",

    Closed:
      "bg-red-500/10 text-red-400 border border-red-500/30",

    "Coming Soon":
      "bg-yellow-500/10 text-yellow-400 border border-yellow-500/30",
  };

  const isOpen = status === "Open";
  const card = (
    <article
      className={`relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur ${
        isOpen
          ? "transition-all duration-500 hover:-translate-y-3 hover:border-red-600 hover:bg-white/10 hover:shadow-2xl hover:shadow-red-600/20"
          : ""
      }`}
    >
      <div
        className={`absolute -right-16 -top-16 h-40 w-40 rounded-full bg-red-600/10 blur-3xl ${
          isOpen
            ? "transition-all duration-500 group-hover:bg-red-600/20"
            : ""
        }`}
      />

      <div
        className={`relative z-10 mb-6 inline-flex rounded-2xl bg-red-600/10 p-4 text-red-500 ${
          isOpen ? "transition group-hover:scale-110" : ""
        }`}
      >
        {icon}
      </div>

      <div className="relative z-10 mb-5">
        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[status]}`}
        >
          {status}
        </span>
      </div>

      <h3 className="relative z-10 text-2xl font-bold text-white">{title}</h3>

      <p className="relative z-10 mt-4 leading-7 text-gray-300">
        {description}
      </p>

      {isOpen && (
        <div className="relative z-10 mt-8 inline-flex items-center gap-2 font-semibold text-red-500 transition-all duration-300 group-hover:gap-4">
          Explore Portal
          <ArrowRight size={18} />
        </div>
      )}
    </article>
  );

  return isOpen ? (
    <Link href={href} className="group block">
      {card}
    </Link>
  ) : (
    card
  );
}