import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Users, Bed, Bath, Eye, X, MessageCircle, Check } from "./icons";
import tentImage from "@/assets/accommodation-tent.jpg";
import domeImage from "@/assets/accommodation-dome.jpg";
import cabinImage from "@/assets/accommodation-cabin.jpg";

const WHATSAPP_NUMBER = "573113333286";

const accommodations = [
  {
    id: 1,
    name: "Chalet (Plan 1 y 2)",
    image: cabinImage,
    price: 350000,
    description:
      "Chalet exclusivo para pareja con jacuzzi privado. El refugio romántico perfecto.",
    fullDescription:
      "Nuestros Chalets (Plan 1 y 2) están diseñados pensando en el romance y la privacidad. Cada chalet cuenta con un jacuzzi privado para disfrutar en pareja, cama king size y una atmósfera acogedora rodeada de naturaleza. Es la opción ideal para celebrar aniversarios o simplemente escapar de la rutina con tu persona favorita.",
    capacity: 2,
    beds: 1,
    baths: 1,
    features: ["Jacuzzi Privado", "Para Parejas", "Privacidad Total", "Agua Caliente"],
    amenities: ["Wifi gratis", "Desayuno incluido", "Minibar", "Parqueadero", "TV Cable"],
  },
  {
    id: 2,
    name: "Glamping (Plan 3)",
    image: domeImage,
    price: 320000,
    description:
      "Glamping para pareja con jacuzzi privado y espectacular malla catamarán.",
    fullDescription:
      "El Plan 3 ofrece una experiencia de Glamping inolvidable. Disfruta de una noche mágica con tu pareja en una estructura única que cuenta con jacuzzi privado para relajarte y una malla catamarán donde podrás acostarte a observar el cielo y sentirte suspendido en la naturaleza.",
    capacity: 2,
    beds: 1,
    baths: 1,
    features: ["Jacuzzi", "Malla Catamarán", "Vista Panorámica", "Diseño Único"],
    amenities: ["Wifi gratis", "Desayuno incluido", "Malla de descanso", "Baño privado"],
  },
  {
    id: 3,
    name: "Cabaña (Plan 4)",
    image: tentImage,
    price: 160000,
    description:
      "Cabaña acogedora y confortable, la opción ideal para disfrutar la naturaleza.",
    fullDescription:
      "Nuestra Cabaña (Plan 4) ofrece todo lo necesario para una estadía placentera a un precio excelente. Es un espacio íntimo y acogedor, perfecto para descansar y conectar con el entorno natural de Mágica Luna sin complicaciones.",
    capacity: 2,
    beds: 1,
    baths: 1,
    features: ["Económica", "Acogedora", "Entorno Natural", "Tranquilidad"],
    amenities: ["Wifi gratis", "Desayuno incluido", "Baño con ducha", "Zona verde"],
  },
];

interface Accommodation {
  id: number;
  name: string;
  image: string;
  price: number;
  description: string;
  fullDescription: string;
  capacity: number;
  beds: number;
  baths: number;
  features: string[];
  amenities: string[];
}

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
              Nuestros Alojamientos
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
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={acc.image}
                    alt={acc.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* View Button */}
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={hoveredId === acc.id ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.3 }}
                    onClick={() => openModal(acc)}
                    className="absolute bottom-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-accent text-accent-foreground text-sm tracking-wider flex items-center gap-2 hover:bg-accent/90 transition-colors cursor-pointer"
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
              {/* Modal Header Image */}
              <div className="relative h-64 md:h-80">
                <img
                  src={selectedAccommodation.image}
                  alt={selectedAccommodation.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 to-transparent" />
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
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

