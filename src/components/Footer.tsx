import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Heart } from "./icons";

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/glampingmagicaluna", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/magicalunaoficial?igsh=MTZhbzc3dnRkOXQ5Ng==", label: "Instagram" },
];

const footerLinks = {
  explore: [
    { label: "Alojamientos", href: "/alojamientos" },
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
                Manizales, Caldas, Colombia
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
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm font-light">
            © 2025 Hotel Glamping Mágica Luna. Todos los derechos reservados.
          </p>
          <p className="text-primary-foreground/60 text-sm font-light flex items-center gap-1">
            Hecho con <Heart size={14} className="text-accent fill-accent" /> en Colombia
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
