import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Leaf, Mountain, Star } from "lucide-react";
import aboutImage from "@/assets/about-image.jpg";

const stats = [
  { icon: Leaf, value: "100%", label: "Ecológico" },
  { icon: Mountain, value: "15km", label: "De Senderos" },
  { icon: Star, value: "4.9", label: "Calificación" },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about-section" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary mb-8 leading-tight">
              Una Experiencia <br />
              <span className="text-gradient-gold">Única</span>
            </h2>

            <div className="space-y-6 text-foreground/80 font-light leading-relaxed">
              <p className="text-lg">
                Glamping Mágica Luna se encuentra frente a la Magia de los
                termales. Experimenta el confort de nuestro Glamping y chalet en
                medio de la montaña.
              </p>
              <p>
                Nuestras instalaciones cuentan con jacuzzi privado y malla
                catamarán, espacios diseñados perfectamente para tu descanso y
                relajación mientras disfrutas del paisaje.
              </p>
              <p>
                Estamos rodeados de naturaleza exuberante y muy cerca a la Ciudad,
                ofreciéndote la escapada perfecta con lo mejor de ambos mundos.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="text-center"
                >
                  <stat.icon className="w-8 h-8 text-accent mx-auto mb-2" />
                  <div className="font-serif text-2xl md:text-3xl text-primary font-medium">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-[500px] md:h-[600px] rounded-t-[200px] overflow-hidden shadow-elevated">
              <img
                src={aboutImage}
                alt="Glamping Mágica Luna"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-6 rounded-lg shadow-glow"
            >
              <div className="font-serif text-3xl font-medium">10+</div>
              <div className="text-sm tracking-wider">Años de Experiencia</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
