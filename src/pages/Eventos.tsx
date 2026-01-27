import { useEffect } from 'react';
import { motion } from 'framer-motion';
import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import EventosMagicaLuna from "@/components/EventosMagicaLuna";
import EspaciosEventos from "@/components/EspaciosEventos";
import VideosEventos from "@/components/VideosEventos";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import eventHeroImage from "@/assets/gallery-imported-1.jpg";

const Eventos = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="overflow-hidden">
            <SEO
                title="Eventos - Bodas, Quinceañeras y Celebraciones"
                description="Celebra tus momentos especiales en Glamping Mágica Luna. Espacios únicos para bodas, quinceañeras, eventos corporativos y reuniones familiares en Manizales."
                keywords="eventos Manizales, bodas campestres, quinceañeras, eventos corporativos, salón eventos, celebraciones naturaleza, fincas para eventos"
                url="https://glampingmagicaluna.com/eventos"
            />

            {/* Skip to content link for accessibility */}
            <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-accent focus:text-accent-foreground focus:rounded">
                Saltar al contenido principal
            </a>

            <Navbar />

            {/* Hero de Eventos */}
            <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-primary">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-40"
                    style={{
                        backgroundImage: `url(${eventHeroImage})`
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-primary" />

                <div className="relative z-10 text-center px-6 pt-20">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-accent text-sm tracking-[0.3em] font-light mb-4 block"
                    >
                        CELEBRA TUS MOMENTOS ESPECIALES
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="font-serif text-5xl md:text-6xl lg:text-7xl text-primary-foreground tracking-wider font-light mb-6"
                    >
                        Eventos Mágica Luna
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto font-light"
                    >
                        Transforma tus sueños en realidad con celebraciones únicas en un entorno natural incomparable
                    </motion.p>
                </div>
            </section>

            <div id="main-content">
                <EventosMagicaLuna />
                <EspaciosEventos />
                <VideosEventos />
                <CallToAction />
            </div>
            <Footer />
            <WhatsAppButton />
        </main>
    );
};

export default Eventos;
