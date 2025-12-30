import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-glamping.jpg";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="inicio"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-hero-gradient" />

      {/* Shimmer Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,hsl(43_65%_53%_/_0.15)_0%,transparent_50%)] animate-shimmer" />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="font-serif text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-primary-foreground tracking-wider font-light mb-4"
        >
          Glamping Mágica Luna
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-accent text-lg md:text-xl lg:text-2xl tracking-[0.3em] font-light mb-10"
        >
          FRENTE A LA MAGIA DE LOS TERMALES
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={() => scrollToSection("#contacto")}
            className="group relative px-10 py-4 bg-accent text-accent-foreground font-medium tracking-widest text-sm overflow-hidden transition-all duration-500 hover:shadow-glow"
          >
            <span className="relative z-10">RESERVA AHORA</span>
            <div className="absolute inset-0 bg-primary-foreground scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            <span className="absolute inset-0 flex items-center justify-center text-primary font-medium tracking-widest text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
              RESERVA AHORA
            </span>
          </button>

          <button
            onClick={() => scrollToSection("#alojamientos")}
            className="px-10 py-4 border border-primary-foreground/40 text-primary-foreground font-light tracking-widest text-sm hover:bg-primary-foreground/10 hover:border-accent transition-all duration-300"
          >
            VER ALOJAMIENTOS
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.button
          onClick={() => scrollToSection("#nosotros")}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-primary-foreground/60 hover:text-accent transition-colors"
          aria-label="Scroll down"
        >
          <ChevronDown size={32} />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
