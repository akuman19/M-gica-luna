import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Qué incluyen los planes?",
    answer:
      "Nuestros planes incluyen un burbujeante jacuzzi privado con espuma y agua caliente para tu disfrute. Los espacios son totalmente privados en contacto directo con la naturaleza, la luna y las estrellas. Se entregan con toallas, champú y jabón.",
  },
  {
    question: "¿El desayuno está incluido?",
    answer:
      "La tarifa no incluye desayuno. Sin embargo, justo a la entrada contamos con un restaurante externo aliado donde puedes disfrutar de un delicioso desayuno campesino por solo $14.000. También hay otras opciones gastronómicas en el sector.",
  },
  {
    question: "¿Reciben mascotas?",
    answer:
      "¡Sí! Somos Pet Friendly. En Mágica Luna tus mascotas son bienvenidas para que disfruten contigo de la naturaleza.",
  },
  {
    question: "¿Puedo llevar mi propia comida y bebidas?",
    answer:
      "¡Claro que sí! Puedes traer lo que desees, desde comestibles hasta licor, para acompañar tu momento de relajación en nuestras instalaciones.",
  },
  {
    question: "¿Cuál es la política de cancelación?",
    answer:
      "De acuerdo a nuestra política de reserva, no se realizan devoluciones de anticipos en caso de cancelación.",
  },
  {
    question: "¿Tienen costo el parqueadero y el acceso a termales?",
    answer:
      "El parqueadero es totalmente gratuito para nuestros huéspedes. Para los termales, tenemos un convenio especial con los termales ubicados justo al frente Nuestros clientes pagan solo $55.000 (precio normal $70.000).",
  },
  {
    question: "¿Cuáles son los horarios de Check-in y Check-out?",
    answer:
      "El Check-in (Entrada) es a partir de las 3:00 PM y la salida (Check-out) debe realizarse a las 12:00 del medio día del día siguiente.",
  },
  {
    question: "¿Todos los alojamientos tienen jacuzzi?",
    answer:
      "Sí, todos nuestros planes cuentan con su propio jacuzzi privado para garantizarte una experiencia de máximo relax. Ten en cuenta que la malla catamarán es un atractivo exclusivo de nuestro Glamping (Plan 3).",
  },
];

const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Todo lo que necesitas saber antes de tu visita
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-lg px-6 border-none shadow-soft"
              >
                <AccordionTrigger className="font-serif text-lg text-primary hover:text-accent hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-light leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
