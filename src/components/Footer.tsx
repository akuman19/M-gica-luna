import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter, Youtube, Heart } from "lucide-react";

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

const footerLinks = {
  explore: [
    { label: "Alojamientos", href: "#alojamientos" },
    { label: "Experiencias", href: "#experiencias" },
    { label: "Galería", href: "#galeria" },
    { label: "Blog", href: "#" },
  ],
  info: [
    { label: "Sobre Nosotros", href: "#nosotros" },
    { label: "Preguntas Frecuentes", href: "#faq" },
    { label: "Políticas de Cancelación", href: "#" },
    { label: "Términos y Condiciones", href: "#" },
  ],
};

const Footer = () => {
  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <footer className="bg-primary-dark text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-serif text-3xl text-accent tracking-widest mb-4">
              LUNA ANDINA
            </h3>
            <p className="text-primary-foreground/70 font-light leading-relaxed mb-6">
              Lujo en armonía con la naturaleza. Una experiencia única de glamping
              en el corazón del valle del cauca.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
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
                  <a
                    href={link.href}
                    onClick={(e) => {
                      if (link.href.startsWith("#")) {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }
                    }}
                    className="text-primary-foreground/70 hover:text-accent transition-colors font-light"
                  >
                    {link.label}
                  </a>
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
                  <a
                    href={link.href}
                    onClick={(e) => {
                      if (link.href.startsWith("#")) {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }
                    }}
                    className="text-primary-foreground/70 hover:text-accent transition-colors font-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-serif text-xl text-accent mb-6">Newsletter</h4>
            <p className="text-primary-foreground/70 font-light mb-4">
              Suscríbete para recibir ofertas exclusivas y novedades.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-1 px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 rounded-md text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-accent transition-colors text-sm"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-accent text-accent-foreground text-sm font-medium hover:bg-accent-light transition-colors"
              >
                OK
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm font-light">
            © 2025 Luna Andina Glamping. Todos los derechos reservados.
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
