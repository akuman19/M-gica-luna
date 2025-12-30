import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import domeImage from "@/assets/accommodation-dome.jpg";

const images = [
  { src: gallery1, alt: "Fogata nocturna" },
  { src: gallery2, alt: "Yoga al amanecer" },
  { src: gallery3, alt: "Desayuno gourmet" },
  { src: gallery4, alt: "Senderismo en cascada" },
  { src: domeImage, alt: "Domo bajo las estrellas" },
];

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goToPrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex === 0 ? images.length - 1 : lightboxIndex - 1);
    }
  };

  const goToNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex === images.length - 1 ? 0 : lightboxIndex + 1);
    }
  };

  return (
    <section id="galeria" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary mb-4">
            Galería
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explora los momentos mágicos que te esperan en Glamping Mágica Luna
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => openLightbox(index)}
              className={`relative overflow-hidden rounded-lg group cursor-pointer ${index === 0 ? "md:col-span-2 md:row-span-2" : ""
                }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${index === 0 ? "h-64 md:h-full" : "h-48 md:h-64"
                  }`}
              />
              <div className="absolute inset-0 bg-primary-dark/0 group-hover:bg-primary-dark/40 transition-colors duration-300 flex items-center justify-center">
                <span className="text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-light tracking-wider">
                  Ver imagen
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-primary-dark/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-primary-foreground hover:text-accent transition-colors"
            aria-label="Close lightbox"
          >
            <X size={32} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrev();
            }}
            className="absolute left-4 md:left-8 text-primary-foreground hover:text-accent transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft size={40} />
          </button>

          <motion.img
            key={lightboxIndex}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            src={images[lightboxIndex].src}
            alt={images[lightboxIndex].alt}
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-4 md:right-8 text-primary-foreground hover:text-accent transition-colors"
            aria-label="Next image"
          >
            <ChevronRight size={40} />
          </button>

          {/* Dots */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-colors ${index === lightboxIndex ? "bg-accent" : "bg-primary-foreground/40"
                  }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default Gallery;
