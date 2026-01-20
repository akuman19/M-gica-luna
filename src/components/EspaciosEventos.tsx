import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
    Home,
    TreePine,
    Speaker,
    Palette,
    Car,
    Sparkles,
    Check
} from "./icons";

const features = [
    {
        icon: Home,
        text: "Salones modernos y elegantes",
    },
    {
        icon: TreePine,
        text: "Ambiente rodeado de naturaleza",
    },
    {
        icon: Speaker,
        text: "Sonido e iluminación profesional",
    },
    {
        icon: Palette,
        text: "Decoración, tarimas y efectos especiales",
    },
    {
        icon: Car,
        text: "Amplios parqueaderos",
    },
    {
        icon: Sparkles,
        text: "Servicios personalizados",
    },
];

const EspaciosEventos = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <section className="py-20 md:py-32 bg-primary relative overflow-hidden">
            {/* Background Texture - Simplified */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                <div className="absolute inset-0"
                    style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--accent)) 1px, transparent 0)`,
                        backgroundSize: '32px 32px'
                    }}
                />
            </div>

            {/* Static Decorative Orbs - Replaced animated ones with static for performance */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Content */}
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                    >


                        <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl text-primary-foreground mb-8 leading-[1.1]">
                            Nuestros <br />
                            <span className="text-accent">Espacios</span>
                        </h2>

                        <p className="text-lg md:text-xl text-primary-foreground/70 leading-relaxed mb-10 font-light max-w-xl">
                            Salones y zonas al aire libre diseñados para adaptarse a todo tipo de celebraciones con la elegancia que nos caracteriza.
                        </p>

                        {/* Features List */}
                        <div className="grid sm:grid-cols-2 gap-6 mb-10 lg:mb-0">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={feature.text}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                                    className="flex items-center gap-4 group"
                                >
                                    <div className="shrink-0 w-11 h-11 rounded-xl bg-accent/10 border border-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                                        <feature.icon size={20} />
                                    </div>
                                    <span className="text-primary-foreground/90 font-medium text-sm group-hover:text-accent transition-colors">
                                        {feature.text}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Visual Card - Optimized */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="bg-primary-dark/40 border border-accent/20 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden group">
                            {/* Static Shine Effect */}
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accent/5 to-transparent pointer-events-none" />

                            <div className="relative z-10">
                                <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center mb-8 shadow-glow-accent">
                                    <Sparkles size={32} className="text-accent-foreground" />
                                </div>

                                <h3 className="font-serif text-3xl md:text-4xl text-primary-foreground mb-6">
                                    Versatilidad Mágica
                                </h3>

                                <p className="text-primary-foreground/60 mb-8 font-light text-lg">
                                    Personalizamos nuestros espacios para que cada detalle refleje la esencia de tu celebración.
                                </p>

                                <div className="space-y-4">
                                    {[
                                        "Salón Luz de Luna (400 personas)",
                                        "Salón Cristal (350 personas)",
                                        "Áreas exteriores y senderos",
                                        "Parqueadero privado"
                                    ].map((item, i) => (
                                        <div
                                            key={item}
                                            className="flex items-center gap-4"
                                        >
                                            <div className="shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                                                <Check size={14} className="text-accent" />
                                            </div>
                                            <span className="text-primary-foreground/80 font-light">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Decorative Background Orbs for Card - Static */}
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/20 rounded-full blur-2xl pointer-events-none" />
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default EspaciosEventos;
