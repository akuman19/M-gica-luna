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
    question: "¿Qué incluye la tarifa de alojamiento?",
    answer:
      "Todas nuestras tarifas incluyen desayuno gourmet, acceso a senderos privados, área de fogata con leña, Wi-Fi en zonas comunes, estacionamiento privado, y amenidades de baño premium. Las actividades como yoga, masajes y cenas especiales tienen un costo adicional.",
  },
  {
    question: "¿Es necesario traer equipo de camping?",
    answer:
      "No es necesario. Glamping Mágica Luna es un glamping de lujo, por lo que todos los alojamientos están completamente equipados con camas premium, ropa de cama de alta calidad, toallas, y todo lo necesario para una estadía confortable.",
  },
  {
    question: "¿Cuál es la política de cancelación?",
    answer:
      "Ofrecemos reembolso completo para cancelaciones realizadas con más de 7 días de anticipación. Cancelaciones entre 3-7 días reciben un crédito para futuras reservas. Cancelaciones con menos de 3 días no son reembolsables.",
  },
  {
    question: "¿Aceptan mascotas?",
    answer:
      "Sí, somos pet-friendly en algunos de nuestros alojamientos. Por favor, consulta al momento de reservar cuáles opciones permiten mascotas. Hay un cargo adicional de limpieza de $50.000 por noche.",
  },
  {
    question: "¿Hay electricidad en los alojamientos?",
    answer:
      "Sí, todos nuestros alojamientos cuentan con electricidad 24/7, enchufes para cargar dispositivos, iluminación ambiental, y climatización en el caso de los domos y cabañas.",
  },
  {
    question: "¿Cuál es la edad mínima para hospedarse?",
    answer:
      "Aceptamos huéspedes de todas las edades. Sin embargo, los menores de 18 años deben estar acompañados por un adulto responsable. Tenemos políticas especiales para parejas que desean una experiencia romántica sin niños.",
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
