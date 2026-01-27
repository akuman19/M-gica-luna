import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: Usuario intentó acceder a ruta inexistente:", location.pathname);
  }, [location.pathname]);

  return (
    <main className="overflow-hidden">
      <SEO
        title="Página no encontrada"
        description="La página que buscas no existe. Vuelve al inicio de Glamping Mágica Luna."
        url={`https://glampingmagicaluna.com${location.pathname}`}
      />
      <Navbar />

      <section className="min-h-screen flex items-center justify-center bg-primary pt-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Número 404 decorativo */}
            <h1 className="font-serif text-[150px] md:text-[200px] leading-none text-accent/20 font-bold select-none">
              404
            </h1>

            <div className="-mt-16 md:-mt-20">
              <h2 className="font-serif text-3xl md:text-5xl text-primary-foreground mb-4">
                ¡Ups! Página no encontrada
              </h2>

              <p className="text-primary-foreground/70 text-lg md:text-xl max-w-lg mx-auto mb-8 font-light">
                Parece que te has perdido entre las montañas. La página que buscas no existe o ha sido movida.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/"
                  className="px-8 py-4 bg-accent text-accent-foreground font-medium tracking-widest text-sm hover:bg-accent-light transition-colors"
                >
                  VOLVER AL INICIO
                </Link>

                <Link
                  to="/contacto"
                  className="px-8 py-4 border border-primary-foreground/40 text-primary-foreground font-light tracking-widest text-sm hover:bg-primary-foreground/10 transition-colors"
                >
                  CONTÁCTANOS
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default NotFound;
