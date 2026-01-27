import { useEffect } from 'react';
import { motion } from 'framer-motion';
import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Accommodations from "@/components/Accommodations";
import Experiences from "@/components/Experiences";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Alojamientos = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="overflow-hidden">
            <SEO
                title="Planes de Hospedaje"
                description="Descubre nuestros exclusivos planes de glamping: chalets con jacuzzi, domos geodésicos y cabañas románticas. Hospedaje de lujo en Manizales con vistas a los termales."
                keywords="planes glamping, hospedaje lujo Manizales, chalet jacuzzi, domos geodésicos, cabaña romántica, alojamiento termales"
                url="https://glampingmagicaluna.com/alojamientos"
            />

            {/* Skip to content link for accessibility */}
            <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-accent focus:text-accent-foreground focus:rounded">
                Saltar al contenido principal
            </a>

            <Navbar />

            {/* Hero de Alojamientos */}
            <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-primary">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-40"
                    style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?w=1920&q=80')`
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
                        LUJO EN LA NATURALEZA
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="font-serif text-5xl md:text-6xl lg:text-7xl text-primary-foreground tracking-wider font-light mb-6"
                    >
                        Nuestros Planes
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto font-light"
                    >
                        Descubre nuestros exclusivos planes de hospedaje diseñados para una experiencia inmersiva en la naturaleza
                    </motion.p>
                </div>
            </section>

            <div id="main-content">
                <Accommodations />
                <Experiences />
                <CallToAction />
            </div>
            <Footer />
            <WhatsAppButton />
        </main>
    );
};

export default Alojamientos;
