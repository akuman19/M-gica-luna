import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MessageCircle, ArrowRight } from "./icons";

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
        <section className="py-20 md:py-32 relative overflow-hidden bg-primary">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark/95 to-primary" />

            {/* Background Texture - Unified with Image 0 Aesthetic */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
                <div className="w-full h-full"
                    style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--accent)) 1px, transparent 0)`,
                        backgroundSize: "32px 32px",
                    }}
                />
            </div>

            {/* Static Decorative Orbs - High performance Premium feel */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto text-center"
                >


                    {/* Main Title - Matches Image 0 Aesthetic */}
                    <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl text-primary-foreground mb-8 leading-[1.1]">
                        Vive tu evento o experiencia en un <br />
                        <span className="text-accent">lugar mágico</span>
                    </h2>

                    {/* Subtitle */}
                    <p className="text-lg md:text-xl text-primary-foreground/70 mb-12 font-light max-w-2xl mx-auto leading-relaxed">
                        Cuéntanos tu idea y nosotros la convertimos en una experiencia inolvidable.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        {/* Reservar Experiencia Button */}
                        <button
                            onClick={handleReservaClick}
                            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-accent text-accent-foreground px-10 py-4 rounded-full font-bold shadow-glow-accent hover:scale-105 active:scale-95 transition-all duration-300"
                        >
                            <Calendar size={20} />
                            <span>Reservar Experiencia</span>
                            <ArrowRight size={20} />
                        </button>

                        {/* Cotizar Evento Button */}
                        <button
                            onClick={handleCotizarClick}
                            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-transparent border-2 border-accent text-accent px-10 py-4 rounded-full font-bold hover:bg-accent/10 hover:scale-105 active:scale-95 transition-all duration-300"
                        >
                            <MessageCircle size={20} />
                            <span>Cotizar Evento</span>
                            <ArrowRight size={20} />
                        </button>
                    </div>

                    {/* Trust Indicators */}
                    <div className="mt-16 flex flex-wrap justify-center gap-x-10 gap-y-4 text-primary-foreground/50 text-xs font-medium uppercase tracking-widest">
                        <div className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_hsl(var(--accent))]" />
                            <span>Respuesta rápida</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_hsl(var(--accent))]" />
                            <span>Asesoría personalizada</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_hsl(var(--accent))]" />
                            <span>Sin compromiso</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CallToAction;
