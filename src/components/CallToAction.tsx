import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MessageCircle, Sparkles, ArrowRight } from "./icons";

const CallToAction = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const handleReservaClick = () => {
        const message = encodeURIComponent("¡Hola! Me gustaría reservar una experiencia en Mágica Luna. ¿Tienen disponibilidad?");
        window.open(`https://wa.me/573113333286?text=${message}`, "_blank");
    };

    const handleCotizarClick = () => {
        const message = encodeURIComponent("¡Hola! Me gustaría cotizar un evento en Mágica Luna. ¿Podrían darme más información sobre precios y disponibilidad?");
        window.open(`https://wa.me/573113333286?text=${message}`, "_blank");
    };

    return (
        <section className="py-24 md:py-32 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-primary" />

            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-20">
                <motion.div
                    animate={{
                        backgroundPosition: ["0% 0%", "100% 100%"],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                    className="w-full h-full"
                    style={{
                        backgroundImage: `radial-gradient(circle at center, hsl(var(--accent)) 1px, transparent 1px)`,
                        backgroundSize: "60px 60px",
                    }}
                />
            </div>

            {/* Floating Orbs */}
            <motion.div
                animate={{
                    y: [0, -40, 0],
                    x: [0, 30, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 right-[20%] w-72 h-72 bg-accent/20 rounded-full blur-3xl"
            />
            <motion.div
                animate={{
                    y: [0, 30, 0],
                    x: [0, -20, 0],
                    scale: [1, 1.3, 1],
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10 left-[20%] w-64 h-64 bg-accent/15 rounded-full blur-3xl"
            />
            <motion.div
                animate={{
                    y: [0, -20, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-dark/50 rounded-full blur-3xl"
            />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm text-accent px-5 py-2.5 rounded-full mb-8"
                    >
                        <Sparkles className="w-5 h-5" />
                        <span className="font-medium tracking-wider">TU MOMENTO ESPECIAL</span>
                    </motion.div>

                    {/* Main Title */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-6 leading-tight"
                    >
                        Vive tu evento o experiencia en un{" "}
                        <span className="text-accent">lugar mágico</span>
                    </motion.h2>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl text-primary-foreground/80 mb-12 font-light max-w-2xl mx-auto"
                    >
                        Cuéntanos tu idea y nosotros la convertimos en una experiencia inolvidable.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        {/* Reservar Experiencia Button */}
                        <motion.button
                            onClick={handleReservaClick}
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className="group relative inline-flex items-center gap-3 bg-accent text-accent-foreground px-8 py-4 rounded-full font-semibold shadow-lg shadow-accent/30 hover:shadow-xl hover:shadow-accent/40 transition-all duration-300 overflow-hidden"
                        >
                            {/* Shine Effect */}
                            <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700" />

                            <Calendar className="w-5 h-5 relative z-10" />
                            <span className="relative z-10">Reservar Experiencia</span>
                            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                        </motion.button>

                        {/* Cotizar Evento Button */}
                        <motion.button
                            onClick={handleCotizarClick}
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className="group relative inline-flex items-center gap-3 bg-transparent border-2 border-accent text-accent px-8 py-4 rounded-full font-semibold hover:bg-accent/10 transition-all duration-300"
                        >
                            <MessageCircle className="w-5 h-5" />
                            <span>Cotizar Evento</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </motion.button>
                    </motion.div>

                    {/* Trust Indicators */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        className="mt-12 flex flex-wrap justify-center gap-8 text-primary-foreground/60 text-sm"
                    >
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-accent" />
                            <span>Respuesta en menos de 1 hora</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-accent" />
                            <span>Asesoría personalizada</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-accent" />
                            <span>Sin compromiso</span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default CallToAction;
