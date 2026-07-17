import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import GetInvolvedBackground from "../../components/get-involved/GetInvolvedBackground";
import GetInvolvedHero from "../../components/get-involved/GetInvolvedHero";
import Opportunities from "../../components/get-involved/Opportunities";

export default function GetInvolvedPage() {
  return (
    <main className="relative w-full overflow-x-hidden">

      {/* Fixed Video Background */}
      <GetInvolvedBackground />

      {/* Global Dark Overlay */}
      <div className="fixed inset-0 -z-10 bg-black/55" />

      <div className="relative z-10 text-white">
        <Navbar />
        <GetInvolvedHero />
        <Opportunities />
        <Footer />
      </div>

    </main>
  );
}