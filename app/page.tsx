import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import CurrentEdition from "../components/home/CurrentEdition";
import About from "../components/home/About";
import Theme from "../components/home/Theme";
import Footer from "../components/layout/Footer";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <CurrentEdition />
      <About />
      <Theme />
      <Footer />
    </>
  );
}