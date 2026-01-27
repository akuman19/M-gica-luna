import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "./icons";
import { useToast } from "@/hooks/use-toast";

// Email ofuscado en base64 para evitar scrapers
// El email real es: glampingmagicaluna1@gmail.com
const getEmailEndpoint = () => {
  const encoded = "Z2xhbXBpbmdtYWdpY2FsdW5hMUBnbWFpbC5jb20=";
  return `https://formsubmit.co/ajax/${atob(encoded)}`;
};

// Decodifica el email para mostrar al usuario
const getDisplayEmail = () => {
  const encoded = "Z2xhbXBpbmdtYWdpY2FsdW5hMUBnbWFpbC5jb20=";
  return atob(encoded);
};

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();

  // Tiempo de carga del formulario para detectar bots
  const [formLoadTime] = useState(Date.now());
  const [displayEmail, setDisplayEmail] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    // Campo honeypot - si se llena, es un bot
    _honey: "",
    // Campo de verificación temporal
    _gotcha: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Decodifica el email del lado del cliente para evitar que esté en el HTML inicial
  useEffect(() => {
    setDisplayEmail(getDisplayEmail());
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Anti-spam: Verificar si el campo honeypot está lleno (solo los bots lo llenan)
    if (formData._honey || formData._gotcha) {
      // Simular éxito para no alertar al bot
      toast({
        title: "¡Mensaje enviado!",
        description: "Gracias por contactarnos.",
      });
      return;
    }

    // Anti-spam: Verificar tiempo mínimo (menos de 3 segundos es sospechoso)
    const timeElapsed = Date.now() - formLoadTime;
    if (timeElapsed < 3000) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Por favor, tómate un momento para completar el formulario.",
      });
      return;
    }

    // Validación adicional del email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        variant: "destructive",
        title: "Email inválido",
        description: "Por favor, ingresa un correo electrónico válido.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(getEmailEndpoint(), {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone || "No proporcionado",
          message: formData.message,
          _subject: `Nueva Reserva/Consulta de ${formData.name}`,
          _template: "table",
          _captcha: "true", // Habilitar CAPTCHA de FormSubmit
          _honey: formData._honey // FormSubmit también procesa honeypot
        })
      });

      if (response.ok) {
        toast({
          title: "¡Mensaje enviado!",
          description: "Gracias por contactarnos. Te responderemos pronto a tu correo.",
        });
        setFormData({ name: "", email: "", phone: "", message: "", _honey: "", _gotcha: "" });
      } else {
        throw new Error("Error al enviar");
      }
    } catch (error) {
      // No logueamos el error en producción para evitar exposición de información
      toast({
        variant: "destructive",
        title: "Error",
        description: "Hubo un problema al enviar el mensaje. Intenta contactarnos por WhatsApp.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-24 md:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-accent mb-4">
            Reserva Tu Experiencia
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            Contáctanos para más información o para hacer tu reserva
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-serif text-2xl text-accent mb-6">
                Información de Contacto
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-medium mb-1">Ubicación</div>
                    <div className="text-primary-foreground/70 font-light">
                      Vereda Gallinazo, a 5 minutos de Manizales.<br />
                      Manizales, Colombia
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-medium mb-1">Teléfono</div>
                    <div className="flex flex-col gap-1">
                      <a
                        href="tel:+573146646180"
                        className="text-primary-foreground/70 hover:text-accent transition-colors font-light"
                      >
                        314 664 6180
                      </a>
                      <a
                        href="tel:+573113332886"
                        className="text-primary-foreground/70 hover:text-accent transition-colors font-light"
                      >
                        311 333 2886
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-medium mb-1">Email</div>
                    {/* Email renderizado del lado del cliente para evitar scrapers */}
                    <a
                      href={displayEmail ? `mailto:${displayEmail}` : "#"}
                      className="text-primary-foreground/70 hover:text-accent transition-colors font-light"
                      onClick={(e) => {
                        if (!displayEmail) {
                          e.preventDefault();
                          setDisplayEmail(getDisplayEmail());
                        }
                      }}
                    >
                      {displayEmail || "Cargando..."}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-medium mb-1">Horario de Atención</div>
                    <div className="text-primary-foreground/70 font-light">
                      Lunes a Domingo<br />
                      8:00 AM - 8:00 PM
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="h-64 rounded-lg overflow-hidden shadow-soft border border-primary-foreground/20">
              <iframe
                src="https://maps.google.com/maps?q=Vereda,%20Gallinazo%20km%205%20via%20a%20Termales%20el%20Oto%C3%B1o.,%20Manizales,%20Colombia&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-500"
                title="Ubicación Glamping Mágica Luna"
              ></iframe>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Campos honeypot ocultos - los bots los llenan, humanos no los ven */}
              <div className="absolute -left-[9999px] top-0" aria-hidden="true">
                <label htmlFor="contact-honey">No llenar este campo</label>
                <input
                  type="text"
                  id="contact-honey"
                  name="_honey"
                  value={formData._honey}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>
              <div style={{ position: 'absolute', left: '-9999px' }} aria-hidden="true">
                <label htmlFor="contact-gotcha">Dejar vacío</label>
                <input
                  type="text"
                  id="contact-gotcha"
                  name="_gotcha"
                  value={formData._gotcha}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div>
                <label htmlFor="contact-name" className="sr-only">Nombre completo</label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Nombre completo"
                  required
                  minLength={2}
                  maxLength={100}
                  autoComplete="name"
                  className="w-full px-5 py-4 bg-primary-foreground/10 border border-primary-foreground/20 rounded-md text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-accent transition-colors"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="sr-only">Correo electrónico</label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Correo electrónico"
                  required
                  maxLength={254}
                  autoComplete="email"
                  className="w-full px-5 py-4 bg-primary-foreground/10 border border-primary-foreground/20 rounded-md text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-accent transition-colors"
                />
              </div>

              <div>
                <label htmlFor="contact-phone" className="sr-only">Teléfono</label>
                <input
                  type="tel"
                  id="contact-phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Teléfono (opcional)"
                  maxLength={20}
                  autoComplete="tel"
                  className="w-full px-5 py-4 bg-primary-foreground/10 border border-primary-foreground/20 rounded-md text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-accent transition-colors"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="sr-only">Mensaje</label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Mensaje (fechas deseadas, número de personas, preferencias)"
                  rows={5}
                  required
                  minLength={10}
                  maxLength={2000}
                  className="w-full px-5 py-4 bg-primary-foreground/10 border border-primary-foreground/20 rounded-md text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-accent transition-colors resize-none"
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 bg-accent text-accent-foreground font-medium tracking-widest text-sm hover:bg-accent-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  "ENVIANDO..."
                ) : (
                  <>
                    <Send size={18} />
                    ENVIAR CONSULTA
                  </>
                )}
              </motion.button>

              <p className="text-xs text-primary-foreground/50 text-center">
                Al enviar este formulario, aceptas nuestra{" "}
                <a href="/privacidad" className="underline hover:text-accent">
                  política de privacidad
                </a>
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
