import { Navbar } from "@/components/Navbar";
import Hero from "../components/Hero";
import About from "@/components/Features";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Footer />
    </>
  );
}
