import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CallToAction from "@/components/CallToAction";
import {
    Flame,
    Bath,
    Wine,
    Building2,
    Heart,
    Footprints
} from "@/components/icons";

// Import images from assets - using the imported images as placeholders/actuals where appropriate
import romanticImage from "@/assets/experiencia/Pareja en maya catamarán .jpg";
import picnicImage from "@/assets/experiencia/PHOTO-2026-01-08-10-06-11.jpg";
import campfireImage from "@/assets/experiencia/PHOTO-2026-01-08-10-06-12 6.jpg";
import salonImage from "@/assets/Salonluzdeluna.jpg";
import hikingImage from "@/assets/experiencia/PHOTO-2026-01-08-10-06-13.jpg";
import natureImage from "@/assets/experiencia/Jacuzzi.jpg";

const experiences = [
    {
        icon: Heart,
        title: "Decoración Romántica",
        description: "Ambientes decorados con detalles románticos, pétalos de rosa, velas y chocolates para celebrar aniversarios, pedidas de mano o simplemente el amor.",
        image: romanticImage,
        longDescription: "Sorprende a tu pareja con una atmósfera mágica diseñada exclusivamente para el romance. Nuestro servicio de decoración incluye arreglo con pétalos de rosas, velas led para crear un ambiente cálido y seguro, bouquet de flores, y chocolates artesanales. Podemos personalizar la decoración según la ocasión, ya sea un cumpleaños, aniversario o una propuesta de matrimonio inolvidable.",
        includes: ["Decoración con pétalos", "Velas LED ambientales", "Chocolates artesanales", "Botella de vino (opcional)"]
    },
    {
        icon: Wine,
        title: "Picnic & Vino",
        description: "Disfruta de un picnic gourmet con selección de vinos locales en medio de paisajes naturales únicos, perfecto para compartir en pareja o amigos.",
        image: picnicImage,
        longDescription: "Relájate en nuestros jardines con un montaje de picnic estilo boho-chic. Te preparamos una canasta con una selección de quesos, carnes frías, frutas frescas de temporada y pan artesanal, acompañado de una botella de vino de tu elección. Es la actividad perfecta para disfrutar del atardecer y conectar con la naturaleza de una manera deliciosa.",
        includes: ["Montaje tipo picnic", "Tabla de quesos y carnes", "Frutas y pan artesanal", "Vino tinto o blanco"]
    },
    {
        icon: Flame,
        title: "Fogatas Privadas",
        description: "Cada noche se enciende la magia. Disfruta de tu propia fogata privada, ideal para asar masmelos y contar historias bajo las estrellas.",
        image: campfireImage,
        longDescription: "La experiencia de glamping no está completa sin una fogata. Proporcionamos todo lo necesario: leña seca, iniciadores y, por supuesto, masmelos para asar. Es el momento ideal para desconectar de la tecnología, mirar el fuego y disfrutar del sonido del bosque nocturno en la privacidad de tu alojamiento.",
        includes: ["Leña suficiente para 2-3 horas", "Kit de encendido", "Masmelos y pinchos", "Mantas térmicas"]
    },
    {
        icon: Building2,
        title: "Salón Luz de Luna",
        description: "Nuestro salón principal con capacidad para 400 personas, ideal para grandes banquetes, bodas y eventos corporativos con vistas espectaculares.",
        image: salonImage,
        longDescription: "El Salón Luz de Luna es la joya de nuestras instalaciones para eventos en Mágica Luna. Con una arquitectura moderna que combina ladrillo y grandes ventanales, este espacio ofrece una capacidad de hasta 400 invitados. Diseñado para ofrecer elegancia y confort, permite disfrutar de la majestuosidad de la naturaleza circundante mientras celebras tus momentos más importantes con tecnología de punta en audio y video.",
        includes: ["Capacidad 400 personas", "Sonido de alta fidelidad", "Iluminación profesional adaptable", "Vista panorámica al entorno natural"]
    },
    {
        icon: Footprints,
        title: "Senderos y Naturaleza",
        description: "Recorre nuestros senderos privados rodeados de flores y disfruta de las vistas más espectaculares de la montaña.",
        image: hikingImage,
        longDescription: "Explora la belleza de nuestro entorno caminando por senderos diseñados para conectar con la paz de la montaña. Un recorrido por jardines exuberantes donde podrás apreciar la flora local y capturar momentos inolvidables en nuestros miradores estratégicos con el valle de fondo.",
        includes: ["Caminata por senderos privados", "Vistas panorámicas al valle", "Acceso a miradores", "Puntos fotográficos"]
    },
    {
        icon: Bath,
        title: "Jacuzzi Espumoso & Relajación",
        description: "Disfruta de un baño relajante con burbujas y agua climatizada en la privacidad de tu terraza, con las mejores vistas de las montañas.",
        image: natureImage,
        longDescription: "Sumérgete en una experiencia de relajación total en nuestros jacuzzis privados. Diseñados para ofrecerte el máximo confort bajo el cielo abierto, cada sesión incluye abundante espuma, agua a la temperatura perfecta y una vista inigualable del valle. Es el complemento ideal para una tarde romántica o un momento de paz profunda después de explorar los alrededores.",
        includes: ["Jacuzzi con agua caliente", "Sales y espuma relajante", "Dos copas de vino", "Vistas panorámicas"]
    }
];

const Experiencias = () => {
    useEffect(() => {
        document.title = "Experiencias - Glamping Mágica Luna";
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="overflow-hidden bg-background">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-primary">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-40"
                    style={{
                        backgroundImage: `url(${romanticImage})`
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-primary" />

                <div className="relative z-10 text-center px-6 pt-20">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-accent text-sm tracking-[0.3em] font-light mb-4 block"
                    >
                        MÁS QUE ALOJAMIENTO
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="font-serif text-5xl md:text-6xl lg:text-7xl text-primary-foreground tracking-wider font-light mb-6"
                    >
                        Experiencias Inolvidables
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto font-light"
                    >
                        Diseñamos cada momento para conectar tus sentidos con la naturaleza y el bienestar.
                    </motion.p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="grid gap-24">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={exp.title}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8 }}
                                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
                            >
                                {/* Image Info */}
                                <div className="w-full lg:w-1/2">
                                    <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl group">
                                        <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay" />
                                        <img
                                            src={exp.image}
                                            alt={exp.title}
                                            loading="lazy"
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    </div>
                                </div>

                                {/* Text Info */}
                                <div className="w-full lg:w-1/2 space-y-6">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="p-3 bg-accent/10 rounded-full text-accent">
                                            <exp.icon size={24} />
                                        </div>
                                        <h2 className="font-serif text-3xl md:text-4xl text-primary">{exp.title}</h2>
                                    </div>

                                    <p className="text-lg text-muted-foreground leading-relaxed">
                                        {exp.longDescription}
                                    </p>

                                    <div className="bg-secondary/50 p-6 rounded-xl border border-border">
                                        <h4 className="font-serif text-lg text-primary mb-3">Incluye:</h4>
                                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                            {exp.includes.map(item => (
                                                <li key={item} className="flex items-center gap-2 text-sm text-foreground/80">
                                                    <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <button
                                        className="px-8 py-3 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 rounded-lg text-sm tracking-wider uppercase"
                                        onClick={() => {
                                            const message = encodeURIComponent(`Hola, me gustaría reservar la experiencia de *${exp.title}*. ¿Tienen disponibilidad?`);
                                            window.open(`https://wa.me/573113333286?text=${message}`, '_blank');
                                        }}
                                    >
                                        Reservar Experiencia
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <CallToAction />
            <Footer />
            <WhatsAppButton />
        </main>
    );
};

export default Experiencias;
