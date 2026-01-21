import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Flame,
  UtensilsCrossed,
  TreePine,
  Wine,
  Bird,
  Coffee,
  Heart,
  Footprints
} from "./icons";

const experiences = [
  {
    icon: Heart,
    title: "Decoración Romántica",
    description:
      "Ambientes decorados con detalles románticos y temáticos para celebrar momentos especiales con tu pareja.",
  },
  {
    icon: Wine,
    title: "Picnic & Vino",
    description:
      "Disfruta de un picnic gourmet con selección de vinos locales en medio de paisajes naturales únicos.",
  },
  {
    icon: Flame,
    title: "Fogatas Privadas",
    description:
      "Cada alojamiento cuenta con su propia área de fogata con leña incluida para noches mágicas bajo las estrellas.",
  },
  {
    icon: Footprints,
    title: "Caminatas Ecológicas",
    description:
      "Rutas guiadas por senderos naturales que atraviesan bosques, cascadas y miradores panorámicos.",
  },
  {
    icon: Bird,
    title: "Avistamiento de Aves",
    description:
      "Observa especies nativas y migratorias en su hábitat natural con guías especializados.",
  },
  {
    icon: TreePine,
    title: "Conexión con la Naturaleza",
    description:
      "Espacios diseñados para desconectarte del ruido y reconectarte con la paz del entorno natural.",
  },
];

const Experiences = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experiencias" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl text-primary mb-8 leading-[1.1]">
            Experiencias <br />
            <span className="text-accent">Adicionales</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Complementa tu estadía o evento con experiencias diseñadas para conectar, celebrar y recordar.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-card p-8 rounded-lg shadow-soft hover:shadow-elevated transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Top Border Animation */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gold-gradient scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <exp.icon className="w-8 h-8 text-accent" />
              </div>

              <h3 className="font-serif text-2xl text-primary mb-4">
                {exp.title}
              </h3>

              <p className="text-muted-foreground font-light leading-relaxed">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
