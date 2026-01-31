import { useEffect } from 'react';
import { motion } from 'framer-motion';
import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import WhyChooseUs from "@/components/WhyChooseUs";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Star } from "@/components/icons";
import aboutImage from "@/assets/about-image.jpg";
import historyImage from "@/assets/gallery-imported-13.jpg";
import eventsImage from "@/assets/Salonluzdeluna.jpg";
import { Link } from 'react-router-dom';


const Nosotros = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="overflow-hidden bg-background">
            <SEO
                title="Sobre Nosotros - Nuestra Historia"
                description="Conoce la historia de Glamping Mágica Luna. Un refugio de lujo en armonía con la naturaleza en Manizales, Caldas, ideal para hospedaje y eventos inolvidables."
                keywords="sobre nosotros glamping, historia glamping, glamping Manizales, eventos Manizales, lujo naturaleza"
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
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.4 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${aboutImage})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/50 to-primary" />

                <div className="relative z-10 text-center px-6 pt-20 max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-accent text-sm tracking-[0.4em] font-light mb-6 block uppercase">
                            Nuestra Esencia
                        </span>
                        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-primary-foreground tracking-wider font-extralight mb-8">
                            Nuestra <span className="text-accent italic">Historia</span>
                        </h1>
                        <p className="text-primary-foreground/90 text-lg md:text-2xl max-w-3xl mx-auto font-light leading-relaxed">
                            Mágica Luna nace del sueño de crear un refugio donde el lujo y la naturaleza convergen en perfecta armonía.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Story Section - Asymmetric Layout */}
            <section id="main-content" className="py-24 md:py-40 bg-secondary/20">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-12 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="lg:col-span-12 mb-12"
                        >
                            <span className="text-accent font-serif italic text-2xl mb-4 block">Desde el primer destello...</span>
                            <h2 className="font-serif text-5xl md:text-7xl text-primary-dark leading-[1.1]">
                                Forjando un Destino <br />
                                <span className="text-accent font-extralight border-b border-accent/30">Extraordinario</span>
                            </h2>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="lg:col-span-5 space-y-8"
                        >
                            <div className="relative group">
                                <div className="absolute -inset-4 bg-accent/5 rounded-3xl -rotate-2 group-hover:rotate-0 transition-transform duration-500" />
                                <div className="relative bg-card p-8 md:p-12 rounded-2xl shadow-xl border border-border">
                                    <p className="text-foreground/80 font-light text-xl leading-relaxed italic">
                                        "Nuestra historia no se escribe con palabras, se siente en la brisa de la mañana y se ve en el reflejo de nuestros jacuzzis."
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-6 text-foreground/70 font-light text-lg leading-relaxed pl-4 border-l-2 border-accent/20">
                                <p>
                                    Ubicados en la mística <strong>Vereda Gallinazo</strong>, nacimos con una obsesión: elevar el concepto de descanso. No queríamos ser solo un hotel, sino el escenario de tus mejores recuerdos.
                                </p>
                                <p>
                                    Entendimos que la verdadera magia ocurre cuando el silencio de la montaña se encuentra con el confort del lujo moderno. Cada espacio en Mágica Luna ha sido curado para honrar esa dualidad.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="lg:col-span-7 relative"
                        >
                            <div className="relative aspect-[4/5] md:aspect-video rounded-3xl overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)]">
                                <img
                                    src={historyImage}
                                    alt="Historia de Glamping Mágica Luna"
                                    className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-1000 scale-110 hover:scale-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary-dark/40 to-transparent" />
                            </div>

                            {/* Experience Badge */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                                className="absolute -bottom-10 -left-6 md:-left-12 bg-primary-dark text-white p-10 rounded-2xl shadow-2xl border border-white/10"
                            >
                                <div className="flex items-center gap-4 mb-2">
                                    <Star size={32} className="text-accent fill-accent" />
                                    <span className="text-5xl font-serif">4.9</span>
                                </div>
                                <p className="text-xs tracking-[0.3em] text-white/50 uppercase">Excelencia <br />Certificada</p>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>


            {/* Events Integration Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="order-2 lg:order-1"
                        >
                            <span className="text-accent font-serif italic text-xl mb-4 block">Celebraciones de Élite</span>
                            <h2 className="font-serif text-4xl md:text-5xl text-primary-dark mb-8 leading-tight">
                                El Escenario de tus <br />
                                <span className="text-accent underline decoration-accent/20 underline-offset-8">Grandes Momentos</span>
                            </h2>
                            <div className="space-y-6 text-foreground/80 font-light text-lg leading-relaxed">
                                <p>
                                    Nuestra evolución nos llevó a preguntarnos: ¿Por qué limitar la magia a solo dos personas? Así nació nuestra faceta como <strong>centro de eventos de alto nivel</strong>.
                                </p>
                                <p>
                                    Con el imponente <strong>Salón Luz de Luna</strong> y el sofisticado <strong>Salón Cristal</strong>, hemos creado espacios con capacidad para hasta 400 personas, donde la elegancia arquitectónica se funde con el paisaje de Manizales.
                                </p>
                                <p>
                                    Desde bodas de ensueño hasta convenciones corporativas, en Mágica Luna transformamos cada evento en un hito histórico. No solo ofrecemos un lugar; ofrecemos una atmósfera donde cada detalle técnico y estético está garantizado.
                                </p>
                            </div>
                            <div className="mt-10">
                                <Link
                                    to="/eventos"
                                    className="inline-block px-10 py-4 bg-primary-dark text-white rounded-full hover:bg-accent hover:text-primary-dark transition-all duration-300 tracking-widest text-xs uppercase"
                                >
                                    Explorar Eventos
                                </Link>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="relative order-1 lg:order-2"
                        >
                            <div className="aspect-square relative flex items-center justify-center">
                                {/* Decorational circle */}
                                <div className="absolute inset-0 border border-accent/20 rounded-full animate-spin-slow" />
                                <div className="w-[90%] h-[90%] rounded-full overflow-hidden shadow-2xl z-10">
                                    <img
                                        src={eventsImage}
                                        alt="Eventos en Mágica Luna"
                                        className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-1000"
                                    />
                                </div>

                                {/* Floating stat */}
                                <motion.div
                                    animate={{ y: [0, -15, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute top-0 right-0 bg-accent p-6 rounded-full shadow-xl z-20"
                                >
                                    <div className="text-center">
                                        <div className="text-accent-foreground font-serif text-2xl font-bold">400+</div>
                                        <div className="text-accent-foreground/70 text-[10px] uppercase tracking-tighter">Invitados</div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>


            <WhyChooseUs />
            <CallToAction />
            <Footer />
            <WhatsAppButton />
        </main>
    );
};

export default Nosotros;
