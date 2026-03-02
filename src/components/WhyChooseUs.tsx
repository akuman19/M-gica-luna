import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useCallback, useEffect } from "react";
import {
    Moon,
    TreePine,
    Brain,
    Target,
    Sparkles,
    Car
} from "./icons";

const reasons = [
    {
        icon: Moon,
        title: "Elegancia, encanto y celebración",
        description: "Un ambiente mágico donde cada momento se convierte en un recuerdo especial.",
    },
    {
        icon: TreePine,
        title: "Espacios rodeados de naturaleza",
        description: "Disfruta de la tranquilidad y belleza del entorno natural que nos rodea.",
    },
    {
        icon: Brain,
        title: "Equipo experto en planeación",
        description: "Profesionales dedicados a hacer realidad cada detalle de tu visión.",
    },
    {
        icon: Target,
        title: "Servicios personalizados",
        description: "Cada evento es único, y así lo tratamos. Adaptamos todo a tus necesidades.",
    },
    {
        icon: Sparkles,
        title: "Experiencias únicas",
        description: "Creamos momentos memorables que superan todas las expectativas.",
    },
    {
        icon: Car,
        title: "Amplios parqueaderos y fácil acceso",
        description: "Comodidad para ti y tus invitados desde el primer momento.",
    },
];

const WhyChooseUs = () => {
    const ref = useRef(null);
    const scrollRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [activeIndex, setActiveIndex] = useState(0);

    const handleScroll = useCallback(() => {
        if (!scrollRef.current) return;
        const container = scrollRef.current;
        const children = container.children;
        if (!children.length) return;

        const containerRect = container.getBoundingClientRect();
        const containerCenter = containerRect.left + containerRect.width / 2;

        let closestIndex = 0;
        let closestDistance = Infinity;

        for (let i = 0; i < children.length; i++) {
            const child = children[i] as HTMLElement;
            const childRect = child.getBoundingClientRect();
            const childCenter = childRect.left + childRect.width / 2;
            const distance = Math.abs(containerCenter - childCenter);
            if (distance < closestDistance) {
                closestDistance = distance;
                closestIndex = i;
            }
        }

        setActiveIndex(closestIndex);
    }, []);

    useEffect(() => {
        const container = scrollRef.current;
        if (!container) return;
        container.addEventListener("scroll", handleScroll, { passive: true });
        return () => container.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    const scrollTo = (index: number) => {
        if (!scrollRef.current) return;
        const container = scrollRef.current;
        const child = container.children[index] as HTMLElement;
        if (!child) return;
        const containerRect = container.getBoundingClientRect();
        const childRect = child.getBoundingClientRect();
        const scrollLeft = container.scrollLeft + (childRect.left - containerRect.left) - (containerRect.width - childRect.width) / 2;
        container.scrollTo({
            left: scrollLeft,
            behavior: "smooth",
        });
    };

    const progress = ((activeIndex + 1) / reasons.length) * 100;

    return (
        <section className="py-24 md:py-32 bg-gradient-to-b from-background to-secondary relative overflow-hidden">
            {/* Decorative Elements - Static for performance */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none opacity-20">
                <div className="w-full h-full relative">
                    <div className="absolute inset-0 border border-accent/10 rounded-full" />
                    <div className="absolute inset-8 border border-accent/20 rounded-full" />
                    <div className="absolute inset-16 border border-primary/10 rounded-full" />
                </div>
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
                    <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl text-primary mb-8 leading-[1.1]">
                        ¿Por qué elegir <br />
                        <span className="text-accent">Mágica Luna</span>?
                    </h2>

                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
                        Más que un lugar, somos creadores de momentos inolvidables
                    </p>
                </motion.div>

                {/* ===== MOBILE: Swipeable Carousel ===== */}
                <div className="md:hidden">
                    <div
                        ref={scrollRef}
                        className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-hide px-[8%]"
                        style={{
                            scrollbarWidth: "none",
                            msOverflowStyle: "none",
                            WebkitOverflowScrolling: "touch",
                        }}
                    >
                        {reasons.map((reason, index) => (
                            <motion.div
                                key={reason.title}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                                className="snap-center flex-shrink-0"
                                style={{
                                    width: "84%",
                                    minWidth: "84%",
                                    transition: "transform 0.35s ease, opacity 0.35s ease",
                                    transform: activeIndex === index ? "scale(1)" : "scale(0.93)",
                                    opacity: activeIndex === index ? 1 : 0.5,
                                }}
                            >
                                <div className="bg-card rounded-2xl p-7 shadow-soft h-full border border-accent/10 relative overflow-hidden">
                                    {/* Top accent line */}
                                    <div
                                        className="absolute top-0 left-0 h-1 bg-gradient-to-r from-accent to-accent-light transition-all duration-500"
                                        style={{ width: activeIndex === index ? "100%" : "0%" }}
                                    />

                                    {/* Icon */}
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center mb-5">
                                        <reason.icon className="w-6 h-6 text-accent" />
                                    </div>

                                    <h3 className="font-serif text-lg text-primary mb-2 leading-snug">
                                        {reason.title}
                                    </h3>

                                    <p className="text-muted-foreground font-light text-sm leading-relaxed">
                                        {reason.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Progress bar + counter */}
                    <div className="mt-6 flex items-center gap-4 px-2">
                        <div className="flex-1 h-1 bg-accent/10 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-gradient-to-r from-accent to-accent-light rounded-full"
                                initial={{ width: 0 }}
                                animate={{ width: `${progress}%` }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                            />
                        </div>
                        <span className="text-xs font-medium text-muted-foreground tabular-nums whitespace-nowrap">
                            {activeIndex + 1} / {reasons.length}
                        </span>
                    </div>

                    {/* Swipe hint on first view */}
                    <motion.p
                        initial={{ opacity: 1 }}
                        animate={{ opacity: activeIndex > 0 ? 0 : 0.6 }}
                        transition={{ duration: 0.5 }}
                        className="text-center text-xs text-muted-foreground mt-3 pointer-events-none"
                    >
                        ← Desliza para ver más →
                    </motion.p>
                </div>

                {/* ===== DESKTOP: Grid Layout (md and up) ===== */}
                <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={reason.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="group relative"
                        >
                            <div className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-all duration-500 h-full border border-transparent hover:border-accent/20">
                                {/* Floating Icon */}
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center mb-6 group-hover:from-accent/30 group-hover:to-accent/20 transition-all duration-300"
                                >
                                    <reason.icon className="w-7 h-7 text-accent" />
                                </motion.div>

                                <h3 className="font-serif text-xl text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                                    {reason.title}
                                </h3>

                                <p className="text-muted-foreground font-light text-sm leading-relaxed">
                                    {reason.description}
                                </p>

                                {/* Decorative Corner */}
                                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div className="absolute top-0 right-0 w-6 h-6 bg-accent/20 rotate-45 translate-x-3 -translate-y-3" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Accent */}
                <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
                    transition={{ duration: 1, delay: 1 }}
                    className="mt-16 h-1 bg-gradient-to-r from-transparent via-accent/50 to-transparent max-w-xl mx-auto"
                />
            </div>
        </section>
    );
};

export default WhyChooseUs;


