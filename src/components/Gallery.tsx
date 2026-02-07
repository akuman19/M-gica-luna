import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "./icons";
import gallery1 from "@/assets/gallery-imported-1.jpg";
import gallery2 from "@/assets/gallery-imported-2.jpg";
import gallery3 from "@/assets/gallery-imported-3.jpg";
import gallery4 from "@/assets/gallery-imported-4.jpg";
import gallery5 from "@/assets/gallery-imported-5.jpg";
import gallery6 from "@/assets/gallery-imported-6.jpg";
import gallery7 from "@/assets/gallery-imported-7.jpg";
import gallery8 from "@/assets/gallery-imported-10.jpg";
import gallery9 from "@/assets/gallery-imported-13.jpg";
import gallery10 from "@/assets/plan4parejas/WhatsApp Image 2026-01-29 at 9.11.37 AM (4).jpeg";
import gallery11 from "@/assets/plan3glamping/WhatsApp Image 2026-01-29 at 9.12.25 AM (1).jpeg";
import gallery12 from "@/assets/plan3glamping/WhatsApp Image 2026-01-29 at 9.12.25 AM (4).jpeg";
import gallery13 from "@/assets/experiencia/Amigos disfrutando jacuzzi .jpg";
import gallery14 from "@/assets/Salonluzdeluna.jpg";
import gallery15 from "@/assets/experiencia/Familia disfrutando chalet .jpg";
import gallery16 from "@/assets/plan4parejas/WhatsApp Image 2026-01-29 at 9.11.37 AM (2).jpeg";

const images = [
  { src: gallery1, alt: "Eventos Inolvidables" },
  { src: gallery2, alt: "Caminatas en Familia" },
  { src: gallery3, alt: "Momentos de Relajación" },
  { src: gallery4, alt: "Conexión con la Naturaleza" },
  { src: gallery5, alt: "Paseos Románticos" },
  { src: gallery6, alt: "Amigos y Jacuzzi" },
  { src: gallery7, alt: "Vistas Espectaculares" },
  { src: gallery8, alt: "Confort y Estilo" },
  { src: gallery9, alt: "Atardeceres Mágicos" },
  { src: gallery10, alt: "Decoración Romántica" },
  { src: gallery11, alt: "Noches Bajo las Estrellas" },
  { src: gallery12, alt: "Espacios de Lujo" },
  { src: gallery13, alt: "Experiencias Compartidas" },
  { src: gallery14, alt: "Salón de Eventos" },
  { src: gallery15, alt: "Calidez Familiar" },
  { src: gallery16, alt: "Jacuzzi Decorado" },
];

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
    }),
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = images.length - 1;
      if (nextIndex >= images.length) nextIndex = 0;
      return nextIndex;
    });
  };

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 8000);
    return () => clearInterval(timer);
  }, [images.length]); // Added images.length as dependency for safety

  return (
    <section id="galeria" className="py-24 md:py-32 bg-secondary overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl text-primary mb-8 leading-[1.1]">
            Nuestra <br />
            <span className="text-accent">Galería</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explora los momentos mágicos que te esperan en Glamping Mágica Luna
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto h-[400px] md:h-[600px]">
          {/* Main Carousel Area */}
          <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.4 },
                  scale: { duration: 0.4 }
                }}
                className="absolute inset-0 w-full h-full"
              >
                <img
                  src={images[currentIndex].src}
                  alt={images[currentIndex].alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                {/* Image Label */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="absolute bottom-10 left-10 text-white"
                >
                  <p className="text-sm tracking-[0.3em] font-light uppercase border-l-2 border-accent pl-4">
                    {images[currentIndex].alt}
                  </p>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows - Optimized */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 px-4 md:px-8 flex justify-between items-center z-10 pointer-events-none">
              <button
                onClick={() => paginate(-1)}
                className="w-12 h-12 rounded-full bg-black/30 border border-white/10 flex items-center justify-center text-white hover:bg-accent hover:text-accent-foreground transition-all pointer-events-auto group"
                aria-label="Previous"
              >
                <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => paginate(1)}
                className="w-12 h-12 rounded-full bg-black/30 border border-white/10 flex items-center justify-center text-white hover:bg-accent hover:text-accent-foreground transition-all pointer-events-auto group"
                aria-label="Next"
              >
                <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Thumbnail/Dots Area - Simplified for performance */}
          <div className="flex justify-center gap-2 md:gap-4 mt-8 flex-wrap">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`relative h-1.5 w-8 md:w-12 rounded-full overflow-hidden transition-all duration-300 ${index === currentIndex ? "bg-accent" : "bg-primary/20"}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
