import { useEffect } from 'react';
import SEO from "@/components/SEO";
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
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="overflow-hidden">
      <SEO
        title="Glamping Mágica Luna - Lujo, Eventos y Experiencias en la Naturaleza"
        description="Descubre Glamping Mágica Luna, una experiencia de lujo en la naturaleza de Manizales, Caldas. Chalets con jacuzzi, eventos especiales y experiencias únicas frente a los Termales."
        url="https://glampingmagicaluna.com/"
      />
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

