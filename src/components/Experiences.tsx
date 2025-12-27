import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Flame, UtensilsCrossed, TreePine, Waves, Camera, Activity } from "lucide-react";

const experiences = [
  {
    icon: Flame,
    title: "Fogatas Privadas",
    description:
      "Cada alojamiento cuenta con su propia área de fogata con leña incluida y asientos cómodos para disfrutar noches mágicas bajo las estrellas.",
  },
  {
    icon: UtensilsCrossed,
    title: "Gastronomía Local",
    description:
      "Desayunos gourmet incluidos y cenas opcionales preparadas con ingredientes orgánicos de productores locales.",
  },
  {
    icon: Activity,
    title: "Yoga & Meditación",
    description:
      "Clases diarias de yoga al amanecer en nuestro deck panorámico, con instructores certificados y vistas a las montañas.",
  },
  {
    icon: TreePine,
    title: "Rutas de Senderismo",
    description:
      "Acceso a más de 15 km de senderos privados que atraviesan bosques, cascadas y miradores naturales.",
  },
  {
    icon: Waves,
    title: "Spa Natural",
    description:
      "Masajes y tratamientos de bienestar en nuestro spa al aire libre, rodeado de naturaleza y tranquilidad.",
  },
  {
    icon: Camera,
    title: "Tours Fotográficos",
    description:
      "Sesiones guiadas para capturar la belleza del paisaje durante las horas doradas del amanecer y atardecer.",
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
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary mb-4">
            Servicios & Experiencias
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Descubre todo lo que Terra Luna tiene para ofrecerte
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
