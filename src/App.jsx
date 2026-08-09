import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollTopButton from "./components/ScrollTopButton";
import GuideModal from "./components/GuideModal";

export default function App() {
  const [activeGuide, setActiveGuide] = useState(null);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects onOpenGuide={setActiveGuide} />
      <Certificates />
      <Contact />
      <Footer />
      <ScrollTopButton />
      <GuideModal activeKey={activeGuide} onClose={() => setActiveGuide(null)} />
    </>
  );
}
