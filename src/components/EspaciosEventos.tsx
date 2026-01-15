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
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="py-24 md:py-32 bg-primary relative overflow-hidden">
            {/* Decorative Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full"
                    style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--accent)) 1px, transparent 0)`,
                        backgroundSize: '40px 40px'
                    }}
                />
            </div>

            {/* Floating Orbs */}
            <motion.div
                animate={{
                    y: [0, -30, 0],
                    x: [0, 20, 0],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-20 right-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl"
            />
            <motion.div
                animate={{
                    y: [0, 20, 0],
                    x: [0, -30, 0],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-20 left-20 w-48 h-48 bg-accent/15 rounded-full blur-3xl"
            />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Content */}
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full mb-6"
                        >
                            <Home className="w-4 h-4" />
                            <span className="text-sm font-medium tracking-wider">INSTALACIONES</span>
                        </motion.div>

                        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-6 leading-tight">
                            Nuestros{" "}
                            <span className="text-accent">Espacios</span>
                        </h2>

                        <p className="text-xl text-primary-foreground/80 leading-relaxed mb-10 font-light">
                            Nuestros salones y zonas al aire libre están diseñados para adaptarse a todo tipo de celebraciones,
                            desde recepciones íntimas hasta grandes eventos sociales.
                        </p>

                        {/* Features Grid */}
                        <div className="grid sm:grid-cols-2 gap-4">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={feature.text}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                                    className="flex items-center gap-3 group"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors duration-300">
                                        <feature.icon className="w-5 h-5 text-accent" />
                                    </div>
                                    <span className="text-primary-foreground/90 font-light group-hover:text-accent transition-colors duration-300">
                                        {feature.text}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Visual Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative"
                    >
                        {/* Main Card */}
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="bg-gradient-to-br from-card/10 to-card/5 backdrop-blur-sm border border-accent/20 rounded-3xl p-8 relative overflow-hidden"
                        >
                            {/* Shine Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/5 to-transparent -translate-x-full animate-[shimmer_3s_infinite]" />

                            <div className="relative z-10">
                                <div className="w-20 h-20 rounded-2xl bg-accent/20 flex items-center justify-center mb-6">
                                    <Sparkles className="w-10 h-10 text-accent" />
                                </div>

                                <h3 className="font-serif text-3xl text-primary-foreground mb-4">
                                    Espacios Versátiles
                                </h3>

                                <p className="text-primary-foreground/70 mb-6 font-light">
                                    Cada espacio en Mágica Luna ha sido cuidadosamente diseñado para ofrecer
                                    flexibilidad y elegancia en cualquier tipo de celebración.
                                </p>

                                <div className="space-y-3">
                                    {["Capacidad hasta 500 personas", "Áreas interiores y exteriores", "Personalización total"].map((item, i) => (
                                        <motion.div
                                            key={item}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                                            transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                                            className="flex items-center gap-3"
                                        >
                                            <div className="w-6 h-6 rounded-full bg-accent/30 flex items-center justify-center">
                                                <Check className="w-4 h-4 text-accent" />
                                            </div>
                                            <span className="text-primary-foreground/90 text-sm">{item}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Floating Decorative Elements */}
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className="absolute -top-8 -right-8 w-24 h-24 bg-accent/20 rounded-full blur-2xl"
                        />
                        <motion.div
                            animate={{ y: [0, 15, 0] }}
                            transition={{ duration: 5, repeat: Infinity }}
                            className="absolute -bottom-8 -left-8 w-32 h-32 bg-accent/15 rounded-full blur-2xl"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default EspaciosEventos;
