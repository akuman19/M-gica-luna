import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Users, Bed, Bath, Eye, X, MessageCircle, Check, ChevronLeft, ChevronRight, Play } from "./icons";
import domeImage from "@/assets/hero-glamping.jpg";

// Plan 1 (Chalet 1)
import chalet1_img1 from "@/assets/chalet1/PHOTO-2026-01-15-18-09-21.jpg";
import chalet1_img1_2 from "@/assets/chalet1/PHOTO-2026-01-15-18-09-21 2.jpg";
import chalet1_img2 from "@/assets/chalet1/PHOTO-2026-01-15-18-09-22.jpg";
import chalet1_img2_2 from "@/assets/chalet1/PHOTO-2026-01-15-18-09-22 2.jpg";
import chalet1_img3 from "@/assets/chalet1/PHOTO-2026-01-15-18-09-23.jpg";
import chalet1_img3_2 from "@/assets/chalet1/PHOTO-2026-01-15-18-09-23 2.jpg";
import chalet1_img4 from "@/assets/chalet1/PHOTO-2026-01-15-18-09-24.jpg";
import chalet1_img4_2 from "@/assets/chalet1/PHOTO-2026-01-15-18-09-24 2.jpg";
import chalet1_vid1 from "@/assets/chalet1/VIDEO-2026-01-15-18-09-20.mp4";
import chalet1_vid2 from "@/assets/chalet1/VIDEO-2026-01-15-18-09-21.mp4";
import chalet1_vid2_2 from "@/assets/chalet1/VIDEO-2026-01-15-18-09-21 2.mp4";

// Plan 2 (Chalet 2)
import chalet2_img1 from "@/assets/chalet2/PHOTO-2026-01-15-18-08-58.jpg";
import chalet2_img2 from "@/assets/chalet2/PHOTO-2026-01-15-18-09-00.jpg";
import chalet2_img3 from "@/assets/chalet2/PHOTO-2026-01-15-18-09-17.jpg";
import chalet2_img3_2 from "@/assets/chalet2/PHOTO-2026-01-15-18-09-17 2.jpg";
import chalet2_img4 from "@/assets/chalet2/PHOTO-2026-01-15-18-09-18.jpg";
import chalet2_img4_3 from "@/assets/chalet2/PHOTO-2026-01-15-18-09-18 3.jpg";
import chalet2_img5 from "@/assets/chalet2/PHOTO-2026-01-15-18-09-19.jpg";
import chalet2_img5_2 from "@/assets/chalet2/PHOTO-2026-01-15-18-09-19 2.jpg";
import chalet2_img6 from "@/assets/chalet2/PHOTO-2026-01-15-18-09-20.jpg";
import chalet2_vid1 from "@/assets/chalet2/VIDEO-2026-01-15-18-08-59.mp4";
import chalet2_vid2 from "@/assets/chalet2/VIDEO-2026-01-15-18-09-16.mp4";

// Plan 3 (Glamping)
import plan3_img1 from "@/assets/plan3glamping/WhatsApp Image 2026-01-29 at 9.12.24 AM (1).jpeg";
import plan3_img2 from "@/assets/plan3glamping/WhatsApp Image 2026-01-29 at 9.12.24 AM (2).jpeg";
import plan3_img3 from "@/assets/plan3glamping/WhatsApp Image 2026-01-29 at 9.12.24 AM.jpeg";
import plan3_img4 from "@/assets/plan3glamping/WhatsApp Image 2026-01-29 at 9.12.25 AM (1).jpeg";
import plan3_img5 from "@/assets/plan3glamping/WhatsApp Image 2026-01-29 at 9.12.25 AM (2).jpeg";
import plan3_img6 from "@/assets/plan3glamping/WhatsApp Image 2026-01-29 at 9.12.25 AM (3).jpeg";
import plan3_img7 from "@/assets/plan3glamping/WhatsApp Image 2026-01-29 at 9.12.25 AM (4).jpeg";
import plan3_img8 from "@/assets/plan3glamping/WhatsApp Image 2026-01-29 at 9.12.25 AM.jpeg";
import plan3_img9 from "@/assets/plan3glamping/WhatsApp Image 2026-01-29 at 9.12.26 AM (1).jpeg";
import plan3_img10 from "@/assets/plan3glamping/WhatsApp Image 2026-01-29 at 9.12.26 AM (2).jpeg";
import plan3_img11 from "@/assets/plan3glamping/WhatsApp Image 2026-01-29 at 9.12.26 AM.jpeg";
import plan3_vid1 from "@/assets/plan3glamping/WhatsApp Video 2026-01-19 at 8.33.10 PM.mp4";
import plan3_vid2 from "@/assets/plan3glamping/WhatsApp Video 2026-01-29 at 9.12.26 AM (1).mp4";
import plan3_vid3 from "@/assets/plan3glamping/WhatsApp Video 2026-01-29 at 9.12.26 AM.mp4";

// Plan 4 (Parejas)
import plan4_img1 from "@/assets/plan4parejas/WhatsApp Image 2026-01-29 at 9.11.37 AM (2).jpeg";
import plan4_img2 from "@/assets/plan4parejas/WhatsApp Image 2026-01-29 at 9.11.37 AM (3).jpeg";
import plan4_img3 from "@/assets/plan4parejas/WhatsApp Image 2026-01-29 at 9.11.37 AM (4).jpeg";
import plan4_img4 from "@/assets/plan4parejas/WhatsApp Image 2026-01-29 at 9.11.37 AM (5).jpeg";
import plan4_vid2 from "@/assets/plan4parejas/WhatsApp Video 2026-01-19 at 8.37.28 PM.mp4";

const WHATSAPP_NUMBER = "573113332886";

interface MediaItem {
  type: 'image' | 'video';
  url: string;
}

interface Accommodation {
  id: number;
  name: string;
  media: MediaItem[];
  price: number;
  description: string;
  fullDescription: string;
  capacity: number;
  beds: number;
  baths: number;
  features: string[];
  amenities: string[];
}

const accommodations: Accommodation[] = [
  {
    id: 1,
    name: "Chalet con terraza (Plan 1)",
    media: [
      { type: 'video', url: chalet1_vid1 },
      { type: 'image', url: chalet1_img1 },
      { type: 'image', url: chalet1_img1_2 },
      { type: 'image', url: chalet1_img2 },
      { type: 'image', url: chalet1_img2_2 },
      { type: 'video', url: chalet1_vid2 },
      { type: 'image', url: chalet1_img3 },
      { type: 'image', url: chalet1_img3_2 },
      { type: 'image', url: chalet1_img4 },
      { type: 'image', url: chalet1_img4_2 },
      { type: 'video', url: chalet1_vid2_2 },
    ],
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
    media: [
      { type: 'video', url: chalet2_vid1 },
      { type: 'image', url: chalet2_img1 },
      { type: 'image', url: chalet2_img2 },
      { type: 'video', url: chalet2_vid2 },
      { type: 'image', url: chalet2_img3 },
      { type: 'image', url: chalet2_img3_2 },
      { type: 'image', url: chalet2_img4 },
      { type: 'image', url: chalet2_img4_3 },
      { type: 'image', url: chalet2_img5 },
      { type: 'image', url: chalet2_img5_2 },
      { type: 'image', url: chalet2_img6 },
    ],
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
    media: [
      { type: 'video', url: plan3_vid2 },
      { type: 'image', url: plan3_img1 },
      { type: 'image', url: plan3_img2 },
      { type: 'video', url: plan3_vid3 },
      { type: 'image', url: plan3_img3 },
      { type: 'image', url: plan3_img4 },
      { type: 'image', url: plan3_img5 },
      { type: 'video', url: plan3_vid1 },
      { type: 'image', url: plan3_img6 },
      { type: 'image', url: plan3_img7 },
      { type: 'image', url: plan3_img8 },
      { type: 'image', url: plan3_img9 },
      { type: 'image', url: plan3_img10 },
      { type: 'image', url: plan3_img11 },
    ],
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
  {
    id: 4,
    name: "Cabañas Parejas (Plan 4)",
    media: [
      { type: 'image', url: plan4_img1 },
      { type: 'image', url: plan4_img2 },
      { type: 'video', url: plan4_vid2 },
      { type: 'image', url: plan4_img3 },
      { type: 'image', url: plan4_img4 },
    ],
    price: 160000,
    description:
      "Acogedoras cabañas para parejas con jacuzzi privado en medio de la naturaleza.",
    fullDescription:
      "Nuestras Cabañas Parejas (Plan 4) ofrecen una experiencia íntima, rústica y confortable en medio del bosque. Incluyen jacuzzi privado burbujeante para un descanso reparador, perfectas para parejas que buscan simplicidad y conexión directa con el entorno natural de Mágica Luna.",
    capacity: 2,
    beds: 1,
    baths: 1,
    features: ["Jacuzzi Privado", "Ambiente Rústico", "Privacidad", "Conexión Natural"],
    amenities: ["Toallas", "Champú y Jabón", "Minibar", "Parqueadero Gratis"],
  },
];

const MediaSlider = ({ media, name, height = "h-64", enableKeyboard = false }: { media: MediaItem[], name: string, height?: string, enableKeyboard?: boolean }) => {
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
    if (media.length <= 1) return;
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = media.length - 1;
      if (nextIndex >= media.length) nextIndex = 0;
      return nextIndex;
    });
  };

  useEffect(() => {
    if (!enableKeyboard || media.length <= 1) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") paginate(-1);
      if (e.key === "ArrowRight") paginate(1);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [enableKeyboard, media.length]);

  if (media.length === 0) return <div className={`${height} bg-muted flex items-center justify-center`}>No media</div>;

  const currentMedia = media[currentIndex];

  return (
    <div className={`relative ${height} overflow-hidden group/slider`}>
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
            opacity: { duration: 0.2 }
          }}
          className="absolute inset-0 w-full h-full"
        >
          {currentMedia.type === 'image' ? (
            <img
              src={currentMedia.url}
              alt={`${name} - ${currentIndex + 1}`}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="relative w-full h-full bg-black">
              <video
                src={currentMedia.url}
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              />
              <div className="absolute top-4 right-4 bg-black/50 p-2 rounded-full text-white">
                <Play size={16} fill="white" />
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {media.length > 1 && (
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
            {media.map((_, idx) => (
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
            <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl text-primary mb-8 leading-[1.1]">
              Nuestros <br />
              <span className="text-accent">Planes</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Elige tu refugio perfecto entre nuestras opciones únicas
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
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
                {/* Media Slider */}
                <div className="relative">
                  <MediaSlider media={acc.media} name={acc.name} height="h-72 md:h-80" />

                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-primary-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  <button
                    onClick={() => openModal(acc)}
                    className={`absolute bottom-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-accent text-accent-foreground text-sm tracking-wider flex items-center gap-2 hover:bg-accent/90 transition-all duration-300 cursor-pointer z-20 ${hoveredId === acc.id ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                      }`}
                  >
                    <Eye size={16} />
                    Ver Detalles
                  </button>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-serif text-3xl text-primary">
                      {acc.name}
                    </h3>
                    <div className="text-right">
                      <span className="font-serif text-2xl text-accent font-medium">
                        ${acc.price.toLocaleString("es-CO")}
                      </span>
                      <p className="text-xs text-muted-foreground">por noche</p>
                    </div>
                  </div>

                  <p className="text-muted-foreground font-light text-base leading-relaxed mb-6">
                    {acc.description}
                  </p>

                  <div className="flex items-center gap-6 text-muted-foreground mb-6">
                    <div className="flex items-center gap-2">
                      <Users size={18} className="text-accent" />
                      <span className="text-sm">{acc.capacity} pers.</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bed size={18} className="text-accent" />
                      <span className="text-sm">{acc.beds} hab.</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bath size={18} className="text-accent" />
                      <span className="text-sm">{acc.baths} baño</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {acc.features.map((feature) => (
                      <span
                        key={feature}
                        className="text-[10px] uppercase tracking-wider bg-secondary text-secondary-foreground px-3 py-1 rounded-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => openModal(acc)}
                    className="w-full py-4 border border-accent/30 text-accent hover:bg-accent hover:text-white transition-all duration-300 font-medium tracking-wide rounded-sm"
                  >
                    MÁS INFORMACIÓN
                  </button>
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
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 md:p-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card rounded-sm max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            >
              <div className="flex flex-col lg:flex-row">
                {/* Modal Media */}
                <div className="lg:w-3/5 relative min-h-[400px]">
                  <div className="lg:absolute lg:inset-0 lg:h-full">
                    <MediaSlider media={selectedAccommodation.media} name={selectedAccommodation.name} height="h-80 lg:h-full" enableKeyboard={true} />
                  </div>
                  <button
                    onClick={closeModal}
                    className="absolute top-4 left-4 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors z-20 md:hidden"
                  >
                    <X size={24} />
                  </button>
                </div>

                {/* Modal Content */}
                <div className="lg:w-2/5 p-8 md:p-12 relative">
                  <button
                    onClick={closeModal}
                    className="absolute top-8 right-8 p-1 text-muted-foreground hover:text-primary transition-colors hidden md:block"
                  >
                    <X size={32} />
                  </button>

                  <h3 className="font-serif text-4xl text-primary mb-6">
                    {selectedAccommodation.name}
                  </h3>

                  <div className="flex items-center gap-6 text-muted-foreground mb-8">
                    <div className="flex items-center gap-1">
                      <Users size={20} className="text-accent" />
                      <span>{selectedAccommodation.capacity}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Bed size={20} className="text-accent" />
                      <span>{selectedAccommodation.beds}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Bath size={20} className="text-accent" />
                      <span>{selectedAccommodation.baths}</span>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <h4 className="font-serif text-xl text-primary mb-4 border-b border-accent/20 pb-2">Descripción</h4>
                      <p className="text-foreground/80 leading-relaxed font-light">
                        {selectedAccommodation.fullDescription}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-serif text-xl text-primary mb-4 border-b border-accent/20 pb-2">Características</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedAccommodation.features.map((feature) => (
                          <span
                            key={feature}
                            className="text-xs bg-accent/5 text-accent px-4 py-1 border border-accent/10 rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-serif text-xl text-primary mb-4 border-b border-accent/20 pb-2">Amenidades</h4>
                      <div className="grid grid-cols-2 gap-y-3">
                        {selectedAccommodation.amenities.map((amenity) => (
                          <div key={amenity} className="flex items-center gap-2 text-foreground/70">
                            <Check size={14} className="text-accent" />
                            <span className="text-sm font-light">{amenity}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-8 border-t border-border mt-12">
                      <div className="flex items-end justify-between mb-8">
                        <div>
                          <span className="text-muted-foreground text-sm block mb-1">Inversión por noche</span>
                          <span className="font-serif text-4xl text-accent font-medium">
                            ${selectedAccommodation.price.toLocaleString("es-CO")}
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => handleWhatsAppReservation(selectedAccommodation.name)}
                        className="w-full flex items-center justify-center gap-3 px-8 py-5 bg-primary text-primary-foreground font-medium rounded-sm hover:bg-primary-dark transition-all duration-300 shadow-lg"
                      >
                        <MessageCircle size={24} />
                        RESERVAR AHORA
                      </button>
                    </div>
                  </div>
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


