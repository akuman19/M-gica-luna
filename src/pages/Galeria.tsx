import { useEffect } from 'react';
import { motion } from 'framer-motion';
import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import galleryHeroImage from "@/assets/gallery-imported-9.jpg";

const Galeria = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="overflow-hidden">
            <SEO
                title="Galería de Fotos"
                description="Explora nuestra galería de imágenes: instalaciones de glamping, chalets con jacuzzi, eventos, bodas y experiencias inolvidables en Manizales, Colombia."
                keywords="galería glamping, fotos glamping, imágenes hospedaje, eventos Manizales, bodas campestres fotos"
                url="https://glampingmagicaluna.com/galeria"
            />

            {/* Skip to content link for accessibility */}
            <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-accent focus:text-accent-foreground focus:rounded">
                Saltar al contenido principal
            </a>

            <Navbar />

            {/* Hero de Galería */}
            <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden bg-primary">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-40"
                    style={{
                        backgroundImage: `url(${galleryHeroImage})`
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
                        MOMENTOS CAPTURADOS
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="font-serif text-5xl md:text-6xl lg:text-7xl text-primary-foreground tracking-wider font-light mb-6"
                    >
                        Nuestra Galería
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto font-light"
                    >
                        Explora las imágenes de nuestras instalaciones, eventos y experiencias inolvidables
                    </motion.p>
                </div>
            </section>

            <div id="main-content">
                <Gallery />
            </div>
            <Footer />
            <WhatsAppButton />
        </main>
    );
};

export default Galeria;
