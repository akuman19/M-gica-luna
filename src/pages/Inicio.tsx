import { useEffect } from 'react';
import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Inicio = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="overflow-hidden">
            <SEO
                title="Glamping Mágica Luna - Lujo en Armonía con la Naturaleza"
                description="Descubre Glamping Mágica Luna, una experiencia de lujo en la naturaleza de Manizales, Caldas. Domos geodésicos, chalets con jacuzzi y cabañas frente a los Termales."
                url="https://glampingmagicaluna.com/"
            />

            {/* Skip to content link for accessibility */}
            <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-accent focus:text-accent-foreground focus:rounded">
                Saltar al contenido principal
            </a>

            <Navbar />
            <div id="main-content">
                <Hero />
                <About />
                <WhyChooseUs />
                <Testimonials />
                <CallToAction />
            </div>
            <Footer />
            <WhatsAppButton />
        </main>
    );
};

export default Inicio;
