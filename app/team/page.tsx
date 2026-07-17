import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TeamBackground from "@/components/team/TeamBackground";
import TeamHero from "@/components/team/TeamHero";
import LeadershipSection from "@/components/team/LeadershipSection";
import JoinTeam from "@/components/team/JoinTeam";

export default function TeamPage() {
  return (
    <main className="relative w-full overflow-x-hidden">

      {/* Fixed Image Background */}
      <TeamBackground />

      {/* Global Dark Overlay */}
      <div className="fixed inset-0 -z-10 bg-black/55" />

      <div className="relative z-10 text-white">
        <Navbar />
        <TeamHero />
        <LeadershipSection />
        <JoinTeam />
        <Footer />
      </div>

    </main>
  );
}