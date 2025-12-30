import { useEffect } from 'react';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experiences from "@/components/Experiences";
import Accommodations from "@/components/Accommodations";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  useEffect(() => {
    document.title = "Glamping Mágica Luna - Lujo en Armonía con la Naturaleza";
  }, []);

  return (
    <main className="overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Experiences />
      <Accommodations />
      <Gallery />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
