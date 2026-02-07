import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube } from "./icons";
import BancolombiaImg from "../assets/mediosdepago/bancolombia.png";
import DaviviendaImg from "../assets/mediosdepago/davivienda.png";
import BancoBogotaImg from "../assets/mediosdepago/bancodebogota.png";
import NequiImg from "../assets/mediosdepago/nequi.png";

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/glampingmagicaluna", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/magicalunaoficial?igsh=MTZhbzc3dnRkOXQ5Ng==", label: "Instagram" },
  { icon: Youtube, href: "https://www.youtube.com/@GlampingM%C3%A1gicaLuna", label: "YouTube" },
];

const footerLinks = {
  explore: [
    { label: "Planes", href: "/alojamientos" },
    { label: "Eventos", href: "/eventos" },
    { label: "Experiencias", href: "/experiencias" },
    { label: "Galería", href: "/galeria" },
  ],
  info: [
    { label: "Sobre Nosotros", href: "/nosotros" },
    { label: "Contacto", href: "/contacto" },
    { label: "Política de Cancelación", href: "/politicas-cancelacion" },
    { label: "Términos y Condiciones", href: "/terminos" },
    { label: "Política de Privacidad", href: "/privacidad" },
  ],
};

const paymentMethods = [
  { img: BancolombiaImg, label: "Bancolombia" },
  { img: DaviviendaImg, label: "Davivienda" },
  { img: BancoBogotaImg, label: "Banco de Bogotá" },
  { img: NequiImg, label: "Nequi" },
];

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-serif text-3xl text-accent tracking-widest mb-4">
              Hotel Glamping Mágica Luna
            </h3>
            <p className="text-primary-foreground/70 font-light leading-relaxed mb-6">
              Lujo en armonía con la naturaleza. Una experiencia única de glamping
              frente a la magia de los termales en Manizales.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  className="w-10 h-10 border border-primary-foreground/30 rounded-full flex items-center justify-center text-accent hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Explore Links */}
          <div>
            <h4 className="font-serif text-xl text-accent mb-6">Explorar</h4>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors font-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info Links */}
          <div>
            <h4 className="font-serif text-xl text-accent mb-6">Información</h4>
            <ul className="space-y-3">
              {footerLinks.info.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors font-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Contact */}
          <div>
            <h4 className="font-serif text-xl text-accent mb-6">Contacto Rápido</h4>
            <div className="space-y-3">
              <p className="text-primary-foreground/70 font-light">
                Vereda Gallinazo, a 5 min de Manizales.<br />
                Cel: 314 664 6180 - 311 333 2886
              </p>
              <Link
                to="/contacto"
                className="inline-block text-accent hover:text-accent/80 transition-colors font-light"
              >
                Reserva tu experiencia →
              </Link>
            </div>
          </div>

        </div>

        {/* Payment Methods Section */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="font-serif text-lg text-accent mb-3 text-center md:text-left">
                Medios de Pago
              </h4>
              <p className="text-primary-foreground/60 text-sm font-light text-center md:text-left">
                Aceptamos múltiples formas de pago para tu comodidad
              </p>
            </div>
            <div className="grid grid-cols-2 lg:flex items-center justify-center lg:justify-end gap-4 lg:gap-5 w-full lg:w-fit mx-auto lg:mx-0 max-w-[320px] lg:max-w-none">
              {paymentMethods.map((method) => (
                <motion.div
                  key={method.label}
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex flex-col items-center gap-1.5 group cursor-pointer"
                >
                  <div className="bg-white/5 backdrop-blur-md p-3 rounded-2xl transition-all group-hover:bg-white/10 flex items-center justify-center w-full lg:w-32 h-20 lg:h-20 overflow-hidden border border-white/10 group-hover:border-accent/40 shadow-xl">
                    <img
                      src={method.img}
                      alt={method.label}
                      className="w-[85%] h-[85%] object-contain filter brightness-110 contrast-125 transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <span className="text-[10px] text-accent font-serif tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300 font-light translate-y-1 group-hover:translate-y-0 text-center">
                    {method.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm font-light">
            © 2025 Hotel Glamping Mágica Luna. Todos los derechos reservados.
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;

