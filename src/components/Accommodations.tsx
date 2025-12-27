import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Users, Bed, Bath, Eye } from "lucide-react";
import tentImage from "@/assets/accommodation-tent.jpg";
import domeImage from "@/assets/accommodation-dome.jpg";
import cabinImage from "@/assets/accommodation-cabin.jpg";

const accommodations = [
  {
    id: 1,
    name: "Tienda Safari",
    image: tentImage,
    price: 180,
    description:
      "Espaciosa tienda de campaña estilo safari con cama king size, baño privado, ducha de agua caliente, terraza con hamaca y vista al bosque.",
    capacity: 2,
    beds: 1,
    baths: 1,
    features: ["Vista al bosque", "Terraza privada", "Hamaca", "Fogata"],
  },
  {
    id: 2,
    name: "Domo Geodésico",
    image: domeImage,
    price: 250,
    description:
      "Domo transparente con vista 360° al cielo nocturno, cama matrimonial, climatización, baño ecológico y deck privado con jacuzzi.",
    capacity: 2,
    beds: 1,
    baths: 1,
    features: ["Vista 360°", "Jacuzzi", "Climatización", "Observación estelar"],
  },
  {
    id: 3,
    name: "Cabaña Luna",
    image: cabinImage,
    price: 320,
    description:
      "Cabaña elevada de madera con dos habitaciones, cocina equipada, sala de estar, terraza panorámica y fogón privado. Ideal para familias.",
    capacity: 4,
    beds: 2,
    baths: 2,
    features: ["2 Habitaciones", "Cocina equipada", "Terraza panorámica", "Fogón"],
  },
];

const Accommodations = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
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
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-accent text-accent-foreground text-sm tracking-wider flex items-center gap-2"
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
                    <span className="font-serif text-2xl text-accent font-medium">
                      ${acc.price}
                    </span>
                    <span className="text-sm text-muted-foreground"> / noche</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accommodations;
