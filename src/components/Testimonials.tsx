import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "./icons";

const testimonials = [
  {
    id: 1,
    name: "Camila García",
    location: "Bogotá, Colombia",
    rating: 5,
    text: "La experiencia en el glamping del Plan 3 fue mágica. Dormir rodeados de naturaleza y disfrutar del jacuzzi con espuma y la malla catamarán bajo las estrellas es algo que todos deberían vivir.",
    avatar: "CG",
  },
  {
    id: 2,
    name: "Andrés Felipe",
    location: "Medellín, Colombia",
    rating: 5,
    text: "El Chalet con dos terrazas fue perfecto para nuestro grupo familiar. La vista a las montañas desde el jacuzzi climatizado es espectacular y el espacio ofrece total privacidad.",
    avatar: "AF",
  },
  {
    id: 3,
    name: "Valeria Rojas",
    location: "Manizales, Colombia",
    rating: 5,
    text: "Celebramos los XV años de mi hija en el Salón Luz de Luna y fue un sueño. La combinación de elegancia y naturaleza hizo que las fotos y el momento fueran inolvidables.",
    avatar: "VR",
  },
  {
    id: 4,
    name: "Ricardo Mendoza",
    location: "Pereira, Colombia",
    rating: 5,
    text: "Excelente lugar para desconectarse del ruido de la ciudad. El Plan 1 tiene todo lo necesario para un descanso real. El servicio es impecable y la atención al detalle sobresaliente.",
    avatar: "RM",
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrev = () => {
    setCurrentIndex(
      currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex(
      currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1
    );
  };

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl text-primary mb-8 leading-[1.1]">
            Lo Que Dicen <br />
            <span className="text-accent">Nuestros Huéspedes</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Historias reales de experiencias inolvidables
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-card p-8 md:p-12 rounded-2xl shadow-elevated relative"
          >
            {/* Quote Icon */}
            <Quote className="absolute top-6 left-6 w-12 h-12 text-accent/20" />

            {/* Rating */}
            <div className="flex gap-1 justify-center mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-accent text-accent" />
              ))}
            </div>

            {/* Text */}
            <p className="text-lg md:text-xl text-foreground/80 font-light leading-relaxed text-center mb-8 italic">
              "{testimonials[currentIndex].text}"
            </p>

            {/* Author */}
            <div className="flex items-center justify-center gap-4">
              <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-medium">
                {testimonials[currentIndex].avatar}
              </div>
              <div className="text-left">
                <div className="font-serif text-lg text-primary">
                  {testimonials[currentIndex].name}
                </div>
                <div className="text-sm text-muted-foreground">
                  {testimonials[currentIndex].location}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={goToPrev}
              className="w-12 h-12 border border-border rounded-full flex items-center justify-center text-foreground hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${index === currentIndex
                    ? "bg-accent w-8"
                    : "bg-border hover:bg-muted-foreground"
                    }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="w-12 h-12 border border-border rounded-full flex items-center justify-center text-foreground hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
