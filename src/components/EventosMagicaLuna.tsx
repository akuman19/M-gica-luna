import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Crown, Building2, PartyPopper, Sparkles, MessageCircle } from "./icons";

const eventos = [
    {
        icon: Heart,
        title: "Bodas",
        description: "Decoración elegante, banquete exquisito, sonido e iluminación profesional para el día más importante de tu vida.",
        gradient: "from-rose-500/20 to-pink-500/20",
        iconColor: "text-rose-500",
    },
    {
        icon: Crown,
        title: "Quince Años",
        description: "Temáticas personalizadas y experiencias inolvidables para celebrar esta etapa tan especial.",
        gradient: "from-violet-500/20 to-purple-500/20",
        iconColor: "text-violet-500",
    },
    {
        icon: Building2,
        title: "Eventos Empresariales",
        description: "Reuniones, cenas, congresos y celebraciones corporativas en un entorno único y profesional.",
        gradient: "from-blue-500/20 to-cyan-500/20",
        iconColor: "text-blue-500",
    },
    {
        icon: PartyPopper,
        title: "Celebraciones Familiares",
        description: "Aniversarios, comuniones, bautizos y todas esas fechas especiales que merecen un lugar mágico.",
        gradient: "from-amber-500/20 to-orange-500/20",
        iconColor: "text-amber-500",
    },
];

const EventosMagicaLuna = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const handleWhatsAppClick = () => {
        const message = encodeURIComponent("¡Hola! Me gustaría cotizar un evento en Mágica Luna. ¿Podrían darme más información?");
        window.open(`https://wa.me/573113332886?text=${message}`, "_blank");
    };

    return (
        <section id="eventos" className="py-24 md:py-32 bg-gradient-to-b from-primary/5 via-background to-background relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                <motion.div
                    animate={{
                        rotate: 360,
                        scale: [1, 1.1, 1]
                    }}
                    transition={{
                        rotate: { duration: 60, repeat: Infinity, ease: "linear" },
                        scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
                    }}
                    className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-accent/10 to-transparent rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        rotate: -360,
                        scale: [1, 1.2, 1]
                    }}
                    transition={{
                        rotate: { duration: 50, repeat: Infinity, ease: "linear" },
                        scale: { duration: 10, repeat: Infinity, ease: "easeInOut" }
                    }}
                    className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-3xl"
                />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-6"
                    >
                        <Sparkles className="w-4 h-4" />
                        <span className="text-sm font-medium tracking-wider">CELEBRA CON NOSOTROS</span>
                    </motion.div>

                    <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary mb-6 leading-tight">
                        Eventos{" "}
                        <span className="text-gradient-gold">Mágica Luna</span>
                    </h2>

                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
                        Donde tus momentos más importantes se convierten en recuerdos inolvidables.
                    </p>
                </motion.div>

                {/* Main Text */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="max-w-4xl mx-auto text-center mb-16"
                >
                    <p className="text-lg text-foreground/80 leading-relaxed">
                        En <strong className="text-primary">Mágica Luna</strong> somos especialistas en la realización de{" "}
                        <span className="text-accent font-medium">bodas, quince años, eventos empresariales y celebraciones sociales</span>.{" "}
                        Contamos con espacios elegantes rodeados de naturaleza, salones versátiles y un equipo experto
                        que te acompaña en cada detalle para crear experiencias únicas.
                    </p>
                </motion.div>

                {/* Event Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {eventos.map((evento, index) => (
                        <motion.div
                            key={evento.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                            whileHover={{ y: -8, scale: 1.02 }}
                            className="group relative bg-card rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-all duration-500 overflow-hidden"
                        >
                            {/* Background Gradient */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${evento.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                            {/* Shine Effect */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                <div className="absolute inset-0 translate-x-full group-hover:translate-x-[-100%] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 ease-out" />
                            </div>

                            <div className="relative z-10">
                                {/* Icon Container */}
                                <motion.div
                                    whileHover={{ rotate: [0, -10, 10, 0] }}
                                    transition={{ duration: 0.5 }}
                                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${evento.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                                >
                                    <evento.icon className={`w-8 h-8 ${evento.iconColor}`} />
                                </motion.div>

                                <h3 className="font-serif text-2xl text-primary mb-3 group-hover:text-gradient-gold transition-all duration-300">
                                    {evento.title}
                                </h3>

                                <p className="text-muted-foreground font-light leading-relaxed text-sm">
                                    {evento.description}
                                </p>
                            </div>

                            {/* Bottom Accent Line */}
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-accent-light scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                        </motion.div>
                    ))}
                </div>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-center"
                >
                    <motion.button
                        onClick={handleWhatsAppClick}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-purple-800 text-white px-8 py-4 rounded-full font-medium shadow-lg hover:shadow-xl hover:from-purple-700 hover:to-purple-900 transition-all duration-300"
                    >
                        <MessageCircle className="w-5 h-5" />
                        <span>Cotiza tu evento por WhatsApp</span>
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default EventosMagicaLuna;
