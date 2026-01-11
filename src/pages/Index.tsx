import { useEffect } from 'react';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import EventosMagicaLuna from "@/components/EventosMagicaLuna";
import EspaciosEventos from "@/components/EspaciosEventos";
import VideosEventos from "@/components/VideosEventos";
import Experiences from "@/components/Experiences";
import Accommodations from "@/components/Accommodations";
import WhyChooseUs from "@/components/WhyChooseUs";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  useEffect(() => {
    document.title = "Glamping Mágica Luna - Lujo, Eventos y Experiencias en la Naturaleza";
  }, []);

  return (
    <main className="overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <EventosMagicaLuna />
      <EspaciosEventos />
      <VideosEventos />
      <Experiences />
      <Accommodations />
      <WhyChooseUs />
      <Gallery />
      <Testimonials />
      <CallToAction />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Index;

