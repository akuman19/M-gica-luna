import { useEffect } from 'react';
import { motion } from 'framer-motion';
import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import contactHeroImage from "@/assets/conta.jpeg";

const Contacto = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="overflow-hidden">
            <SEO
                title="Contacto y Reservas"
                description="Contáctanos para reservar tu experiencia en Glamping Mágica Luna. WhatsApp, teléfono y formulario de contacto. Ubicados en Manizales, Caldas, Colombia."
                keywords="contacto glamping, reservas glamping Manizales, teléfono hospedaje, ubicación glamping, cómo llegar"
                url="https://glampingmagicaluna.com/contacto"
            />

            {/* Skip to content link for accessibility */}
            <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-accent focus:text-accent-foreground focus:rounded">
                Saltar al contenido principal
            </a>

            <Navbar />

            {/* Hero de Contacto */}
            <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden bg-primary">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-40"
                    style={{
                        backgroundImage: `url(${contactHeroImage})`
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
                        ESTAMOS PARA AYUDARTE
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="font-serif text-5xl md:text-6xl lg:text-7xl text-primary-foreground tracking-wider font-light mb-6"
                    >
                        Contáctanos
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto font-light"
                    >
                        Reserva tu experiencia o resuelve todas tus dudas con nuestro equipo
                    </motion.p>
                </div>
            </section>

            <div id="main-content">
                <Contact />
                <FAQ />
            </div>
            <Footer />
            <WhatsAppButton />
        </main>
    );
};

export default Contacto;
