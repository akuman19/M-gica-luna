import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Users, Bed, Bath, Eye, X, MessageCircle, Check, ChevronLeft, ChevronRight } from "./icons";
import domeImage from "@/assets/hero-glamping.jpg";

// Plan 1 Images
import chalet1_1 from "@/assets/chalet1/chalet1 (1).jpeg";
import chalet1_2 from "@/assets/chalet1/chalet1 (2).jpeg";
import chalet1_3 from "@/assets/chalet1/chalet1 (3).jpeg";

// Plan 2 Images
import chalet2_1 from "@/assets/chalet1/chalet1 (4).jpeg";
import chalet2_2 from "@/assets/chalet1/chalet1 (5).jpeg";
import chalet2_3 from "@/assets/chalet1/chalet1 (6).jpeg";
import chalet2_4 from "@/assets/chalet1/chalet1 (7).jpeg";
import chalet2_5 from "@/assets/chalet1/chalet1 (8).jpeg";
import chalet2_6 from "@/assets/chalet1/chalet1 (9).jpeg";
import chalet2_7 from "@/assets/chalet1/chalet1(1).jpeg";
import chalet2_8 from "@/assets/chalet1/chalet1(2).jpeg";
import chalet2_9 from "@/assets/chalet1/chalet1 (1).jpeg";

const WHATSAPP_NUMBER = "573113332886";

const accommodations = [
  {
    id: 1,
    name: "Chalet con terraza (Plan 1)",
    images: [chalet2_1, chalet2_2, chalet2_3, chalet2_4, chalet2_5, chalet2_6, chalet2_7, chalet2_8, chalet2_9],
    price: 350000,
    description:
      "Acogedor chalet con terraza privada, jacuzzi espumoso y capacidad para 8 personas.",
    fullDescription:
      "Nuestro Plan 1 ofrece la calidez de un chalet con terraza privada y jacuzzi burbujeante con espuma y agua caliente. Un espacio íntimo y rodeado de naturaleza, ideal para grupos de hasta 8 personas que buscan desconexión total.",
    capacity: 8,
    beds: 2,
    baths: 1,
    features: ["Una Terraza", "Jacuzzi Privado", "Capacidad 8 personas", "Total Privacidad"],
    amenities: ["Toallas", "Champú y Jabón", "Minibar", "Parqueadero Gratis", "TV Cable"],
  },
  {
    id: 2,
    name: "Chalet con dos terrazas (Plan 2)",
    images: [chalet1_1, chalet1_2, chalet1_3],
    price: 350000,
    description:
      "Amplio chalet con dos terrazas, jacuzzi privado y espectacular vista a las montañas.",
    fullDescription:
      "El Plan 2 destaca por su exclusividad y amplitud con dos terrazas privadas. Disfruta de la mejor vista de la vereda Gallinazo desde tu jacuzzi con agua caliente y espuma. Capacidad para grupos de hasta 8 personas con total comodidad.",
    capacity: 8,
    beds: 2,
    baths: 1,
    features: ["Dos Terrazas", "Jacuzzi Privado", "Vista Panorámica", "Máximo Confort"],
    amenities: ["Toallas", "Champú y Jabón", "Minibar", "Parqueadero Gratis", "TV Cable"],
  },
  {
    id: 3,
    name: "Glamping (Plan 3)",
    images: [domeImage],
    price: 320000,
    description:
      "Glamping para pareja con jacuzzi burbujeante y espectacular malla catamarán.",
    fullDescription:
      "El Plan 3 es la combinación perfecta de lujo y naturaleza para parejas. Incluye jacuzzi burbujeante con espuma y agua caliente, además de una malla catamarán exclusiva para relajarte bajo las estrellas. Cuenta con un camarote pequeño para un niño en caso de ser necesario (sin costo adicional).",
    capacity: 2,
    beds: 1,
    baths: 1,
    features: ["Jacuzzi con Espuma", "Malla Catamarán", "Opción Niño Gratis", "Diseño Único"],
    amenities: ["Toallas", "Champú y Jabón", "Malla de descanso", "Parqueadero Gratis"],
  },
];

interface Accommodation {
  id: number;
  name: string;
  images: string[];
  price: number;
  description: string;
  fullDescription: string;
  capacity: number;
  beds: number;
  baths: number;
  features: string[];
  amenities: string[];
}

const ImageSlider = ({ images, name, height = "h-64" }: { images: string[], name: string, height?: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0
    })
  };

  const paginate = (newDirection: number) => {
    if (images.length <= 1) return;
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = images.length - 1;
      if (nextIndex >= images.length) nextIndex = 0;
      return nextIndex;
    });
  };

  if (images.length === 0) return <div className={`${height} bg-muted flex items-center justify-center`}>No image</div>;

  return (
    <div className={`relative ${height} overflow-hidden group/slider`}>
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`${name} - ${currentIndex + 1}`}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      {images.length > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); paginate(-1); }}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/30 text-white flex items-center justify-center opacity-0 group-hover/slider:opacity-100 transition-opacity hover:bg-black/50 z-10"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); paginate(1); }}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/30 text-white flex items-center justify-center opacity-0 group-hover/slider:opacity-100 transition-opacity hover:bg-black/50 z-10"
          >
            <ChevronRight size={20} />
          </button>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {images.map((_, idx) => (
              <div
                key={idx}
                className={`w-1.5 h-1.5 rounded-full transition-all ${idx === currentIndex ? "bg-accent scale-125" : "bg-white/50"}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const Accommodations = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [selectedAccommodation, setSelectedAccommodation] = useState<Accommodation | null>(null);

  const openModal = (acc: Accommodation) => {
    setSelectedAccommodation(acc);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedAccommodation(null);
    document.body.style.overflow = "auto";
  };

  const handleWhatsAppReservation = (accName: string) => {
    const message = `Hola! Me interesa reservar ${accName} en Hotel Glamping Magica Luna. ¿Podrían darme más información sobre disponibilidad y precios?`;
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      <section id="alojamientos" className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary mb-4">
              Nuestros Planes
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Elige tu refugio perfecto entre nuestras opciones únicas
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {accommodations.map((acc, index) => (
              <motion.div
                key={acc.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                onMouseEnter={() => setHoveredId(acc.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group bg-card rounded-lg overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-500"
              >
                {/* Image Slider */}
                <div className="relative">
                  <ImageSlider images={acc.images} name={acc.name} />

                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-primary-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  {/* View Button */}
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={hoveredId === acc.id ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.3 }}
                    onClick={() => openModal(acc)}
                    className="absolute bottom-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-accent text-accent-foreground text-sm tracking-wider flex items-center gap-2 hover:bg-accent/90 transition-colors cursor-pointer z-20"
                  >
                    <Eye size={16} />
                    Ver Detalles
                  </motion.button>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-serif text-2xl text-primary mb-3">
                    {acc.name}
                  </h3>

                  <p className="text-muted-foreground font-light text-sm leading-relaxed mb-4">
                    {acc.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {acc.features.map((feature) => (
                      <span
                        key={feature}
                        className="text-xs bg-secondary text-secondary-foreground px-3 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Stats & Price */}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex gap-4 text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Users size={16} />
                        <span className="text-sm">{acc.capacity}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Bed size={16} />
                        <span className="text-sm">{acc.beds}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Bath size={16} />
                        <span className="text-sm">{acc.baths}</span>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="font-serif text-xl text-accent font-medium">
                        ${acc.price.toLocaleString("es-CO")}
                      </span>
                      <span className="text-xs text-muted-foreground"> / noche</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedAccommodation && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            >
              {/* Modal Slider */}
              <div className="relative">
                <ImageSlider images={selectedAccommodation.images} name={selectedAccommodation.name} height="h-64 md:h-96" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 to-transparent pointer-events-none" />
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors z-20"
                >
                  <X size={24} />
                </button>
                <div className="absolute bottom-4 left-6 right-6">
                  <h3 className="font-serif text-3xl md:text-4xl text-white mb-2">
                    {selectedAccommodation.name}
                  </h3>
                  <div className="flex items-center gap-4 text-white/80">
                    <div className="flex items-center gap-1">
                      <Users size={18} />
                      <span>{selectedAccommodation.capacity} personas</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Bed size={18} />
                      <span>{selectedAccommodation.beds} cama(s)</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Bath size={18} />
                      <span>{selectedAccommodation.baths} baño(s)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                <p className="text-foreground/80 leading-relaxed mb-6">
                  {selectedAccommodation.fullDescription}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-serif text-xl text-primary mb-3">Características</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedAccommodation.features.map((feature) => (
                      <span
                        key={feature}
                        className="text-sm bg-accent/20 text-accent px-4 py-2 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Amenities */}
                <div className="mb-6">
                  <h4 className="font-serif text-xl text-primary mb-3">Amenidades incluidas</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {selectedAccommodation.amenities.map((amenity) => (
                      <div key={amenity} className="flex items-center gap-2 text-foreground/70">
                        <Check size={16} className="text-accent" />
                        <span className="text-sm">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price & CTA */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-border">
                  <div>
                    <span className="text-muted-foreground text-sm">Desde</span>
                    <div>
                      <span className="font-serif text-3xl text-accent font-medium">
                        ${selectedAccommodation.price.toLocaleString("es-CO")}
                      </span>
                      <span className="text-muted-foreground"> / noche</span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleWhatsAppReservation(selectedAccommodation.name)}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary-dark transition-colors"
                  >
                    <MessageCircle size={20} />
                    Reservar por WhatsApp
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Accommodations;


