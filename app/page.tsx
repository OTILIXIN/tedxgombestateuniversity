import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Theme from "../components/home/Theme";
import Footer from "../components/layout/Footer";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Theme />
      <Footer />
    </>
  );
}