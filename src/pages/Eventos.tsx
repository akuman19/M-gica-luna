import { useEffect } from 'react';
import { motion } from 'framer-motion';
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
        document.title = "Eventos Mágica Luna - Bodas, Quinceañeras y Celebraciones";
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="overflow-hidden">
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

            <EventosMagicaLuna />
            <EspaciosEventos />
            <VideosEventos />
            <CallToAction />
            <Footer />
            <WhatsAppButton />
        </main>
    );
};

export default Eventos;
