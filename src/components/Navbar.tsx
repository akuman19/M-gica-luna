import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#experiencias", label: "Experiencias" },
  { href: "#alojamientos", label: "Alojamientos" },
  { href: "#galeria", label: "Galería" },
  { href: "#contacto", label: "Contacto" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    // Cerrar el menú móvil primero
    setIsMobileMenuOpen(false);

    // Esperar a que la animación del menú termine antes de hacer scroll
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 300);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled
        ? "bg-primary/95 backdrop-blur-md shadow-elevated py-4"
        : "bg-gradient-to-b from-primary-dark/80 to-transparent py-6"
        }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.a
          href="#inicio"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("#inicio");
          }}
          className="font-serif text-2xl md:text-3xl text-accent tracking-widest font-medium"
          whileHover={{ scale: 1.02 }}
        >
          Glamping Mágica Luna
        </motion.a>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex gap-8 xl:gap-12">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="text-primary-foreground/90 hover:text-accent text-sm tracking-wider font-light relative group transition-colors duration-300"
              >
                {link.label}
                <span className="absolute -bottom-1 left-1/2 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full group-hover:left-0" />
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-primary-foreground p-2"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-primary/98 backdrop-blur-md"
          >
            <ul className="container mx-auto px-6 py-6 space-y-4">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="block text-primary-foreground/90 hover:text-accent text-lg tracking-wider font-light py-2 transition-colors"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
