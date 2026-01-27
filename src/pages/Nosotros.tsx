import { useEffect } from 'react';
import { motion } from 'framer-motion';
import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Leaf, Award, Heart, Target, Mountain, Star } from "@/components/icons";
import aboutImage from "@/assets/about-image.jpg";
import historyImage from "@/assets/gallery-imported-13.jpg";

const values = [
    {
        icon: Leaf,
        title: "Sostenibilidad",
        description: "Comprometidos con la preservación de la Vereda Gallinazo y el turismo responsable."
    },
    {
        icon: Heart,
        title: "Pasión por el Servicio",
        description: "Cada detalle es pensado para superar las expectativas de nuestros huéspedes."
    },
    {
        icon: Award,
        title: "Excelencia",
        description: "Buscamos la perfección en cada experiencia, desde el alojamiento hasta los eventos."
    }
];

const Nosotros = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="overflow-hidden bg-background">
            <SEO
                title="Sobre Nosotros - Nuestra Historia"
                description="Conoce la historia de Glamping Mágica Luna: nuestra misión, visión y valores. Un refugio de lujo en armonía con la naturaleza en Manizales, Caldas."
                keywords="sobre nosotros glamping, historia glamping, misión visión valores, equipo glamping, Manizales Colombia"
                url="https://glampingmagicaluna.com/nosotros"
            />

            {/* Skip to content link for accessibility */}
            <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-accent focus:text-accent-foreground focus:rounded">
                Saltar al contenido principal
            </a>

            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-primary">
                <motion.div
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
                    className="absolute inset-0 bg-cover bg-center opacity-40"
                    style={{
                        backgroundImage: `url(${aboutImage})`
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/50 to-primary" />

                <div className="relative z-10 text-center px-6 pt-20">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-accent text-sm tracking-[0.4em] font-light mb-6 block uppercase"
                    >
                        Nuestra Esencia
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="font-serif text-5xl md:text-7xl lg:text-8xl text-primary-foreground tracking-wider font-extralight mb-8"
                    >
                        Nuestra <span className="text-accent italic">Historia</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-primary-foreground/90 text-lg md:text-2xl max-w-3xl mx-auto font-light leading-relaxed"
                    >
                        Mágica Luna nace del sueño de crear un refugio donde el lujo y la naturaleza convergen en perfecta armonía.
                    </motion.p>
                </div>
            </section>

            {/* Story Section */}
            <section id="main-content" className="py-24 md:py-32">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="font-serif text-4xl md:text-5xl text-primary mb-8 leading-tight">
                                Forjando un Destino <br />
                                <span className="text-accent">Inolvidable</span>
                            </h2>
                            <div className="space-y-6 text-foreground/80 font-light text-lg leading-relaxed">
                                <p>
                                    Ubicados estratégicamente en la <strong>Vereda Gallinazo</strong>, a solo pasos de Manizales, comenzamos este viaje con una visión clara: redefinir la experiencia del glamping en el Eje Cafetero.
                                </p>
                                <p>
                                    Lo que empezó como un pequeño proyecto familiar se ha transformado en un referente de lujo y confort. Entendimos que el verdadero descanso no solo reside en una cama cómoda, sino en la conexión profunda con el entorno. Por eso, integramos jacuzzis privados y mallas catamarán que permiten a nuestros huéspedes flotar sobre las montañas.
                                </p>
                                <p>
                                    Nuestra ubicación privilegiada frente a los termales nos otorga una atmósfera mística única, donde el vapor y la luna crean noches verdaderamente mágicas.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="rounded-2xl overflow-hidden shadow-2xl">
                                <img src={historyImage} alt="Historia de Glamping Mágica Luna - Vista panorámica de nuestras instalaciones" className="w-full h-full object-cover" />
                            </div>
                            <div className="absolute -bottom-8 -right-8 bg-accent p-10 rounded-2xl shadow-glow hidden md:block">
                                <Star size={48} className="text-accent-foreground mb-4" />
                                <div className="text-accent-foreground font-serif text-4xl">4.9/5</div>
                                <div className="text-accent-foreground/80 text-sm tracking-widest uppercase">Satisfacción</div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white/5 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-white/10"
                        >
                            <Target size={48} className="text-accent mb-6" />
                            <h3 className="font-serif text-3xl mb-4 text-accent">Nuestra Misión</h3>
                            <p className="text-lg font-light leading-relaxed text-white/90">
                                Proporcionar experiencias de hospedaje y eventos de alto nivel, fusionando el lujo moderno con la serenidad de la naturaleza, garantizando el bienestar de nuestros huéspedes y el respeto por el medio ambiente.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-white/5 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-white/10"
                        >
                            <Mountain size={48} className="text-accent mb-6" />
                            <h3 className="font-serif text-3xl mb-4 text-accent">Nuestra Visión</h3>
                            <p className="text-lg font-light leading-relaxed text-white/90">
                                Ser reconocidos para el 2030 como el destino de glamping y eventos más exclusivo y sostenible de Caldas, destacándonos por nuestra innovación constante y la excelencia en el servicio personalizado.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-24 md:py-32">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="font-serif text-4xl text-primary mb-4">Nuestros Valores</h2>
                        <div className="w-24 h-1 bg-accent mx-auto" />
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center p-10 bg-secondary/30 rounded-2xl hover:bg-secondary/50 transition-colors"
                            >
                                <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <value.icon size={32} className="text-accent" />
                                </div>
                                <h4 className="font-serif text-2xl text-primary mb-4 uppercase tracking-wider">{value.title}</h4>
                                <p className="text-muted-foreground font-light leading-relaxed">
                                    {value.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <WhyChooseUs />
            <Testimonials />
            <CallToAction />
            <Footer />
            <WhatsAppButton />
        </main>
    );
};

export default Nosotros;
