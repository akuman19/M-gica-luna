import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CallToAction from "@/components/CallToAction";
import {
    Flame,
    UtensilsCrossed,
    TreePine,
    Wine,
    Bird,
    Coffee,
    Heart,
    Footprints
} from "@/components/icons";

// Import images from assets - using the imported images as placeholders/actuals where appropriate
import romanticImage from "@/assets/gallery-imported-9.jpg";
import picnicImage from "@/assets/gallery-imported-1.jpg";
import campfireImage from "@/assets/gallery-1.jpg";
import foodImage from "@/assets/gallery-3.jpg";
import natureImage from "@/assets/gallery-imported-3.jpg";
import birdsImage from "@/assets/gallery-imported-11.jpg";
import coffeeImage from "@/assets/gallery-imported-5.jpg";
import relaxImage from "@/assets/gallery-imported-13.jpg";

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
        icon: UtensilsCrossed,
        title: "Gastronomía Local",
        description: "Deléitate con los sabores de la región. Desayunos típicos y cenas especiales preparadas con ingredientes frescos y orgánicos.",
        image: foodImage,
        longDescription: "Nuestra propuesta gastronómica resalta los sabores de Caldas. Comienza el día con un desayuno tradicional con arepa, huevos al gusto y calentado, o elige opciones más ligeras con frutas. Para la cena, ofrecemos platos a la carta que fusionan la cocina local con toques gourmet, todo preparado al momento para garantizar la frescura.",
        includes: ["Desayuno incluido en tarifa", "Servicio a la habitación", "Opciones vegetarianas", "Café de origen ilimitado"]
    },
    {
        icon: Footprints,
        title: "Caminatas Ecológicas",
        description: "Explora los senderos que rodean nuestro glamping. Rutas seguras para conectar con la flora y fauna del bosque andino.",
        image: relaxImage,
        longDescription: "Mágica Luna está inmerso en un entorno privilegiado. Contamos con senderos señalizados de diferentes dificultades que te llevarán a través del bosque nativo, miradores con vistas al valle y pequeñas quebradas. Puedes realizar las caminatas por tu cuenta o solicitar un guía para aprender más sobre la biodiversidad local.",
        includes: ["Mapas de senderos", "Recomendaciones de ruta", "Guía (con reserva previa)", "Avistamiento de flora"]
    },
    {
        icon: Bird,
        title: "Avistamiento de Aves",
        description: "Un paraíso para los amantes de las aves. Observa colibríes, tangaras y otras especies coloridas en su hábitat natural.",
        image: birdsImage,
        longDescription: "La región es hogar de una gran diversidad de aves. Desde la terraza de tu alojamiento o en nuestros comederos especiales, podrás observar y fotografiar diversas especies de colibríes, barranqueros y tangaras. Es una actividad relajante y fascinante que te conecta con la vida silvestre sin salir de la comodidad del hotel.",
        includes: ["Guía de aves locales", "Préstamo de binoculares", "Áreas de avistamiento", "Comederos de colibríes"]
    },
    {
        icon: Coffee,
        title: "Cultura Cafetera",
        description: "Vive la experiencia del café más suave del mundo. Visita fincas cercanas y aprende sobre el proceso del grano a la taza.",
        image: coffeeImage,
        longDescription: "Estando en el corazón del Eje Cafetero, te ofrecemos la oportunidad de conocer de cerca la cultura del café. Organizamos tours a fincas tradicionales cercanas donde podrás recolectar granos, ver el proceso de beneficiadero, secado y tostión, finalizando con una cata profesional para aprender a distinguir los mejores aromas.",
        includes: ["Transporte a finca cafetera", "Tour guiado interactivo", "Degustación de café", "Souvenir de café"]
    },
    {
        icon: TreePine,
        title: "Conexión Natural",
        description: "Espacios de meditación y yoga. Encuentra tu centro respirando el aire puro de la montaña.",
        image: natureImage,
        longDescription: "Disponemos de plataformas de madera integradas en el bosque ideales para la práctica de yoga, meditación o simplemente lectura tranquila. El sonido del agua y el canto de los pájaros crean la banda sonora perfecta para renovar tu energía. Si lo deseas, podemos coordinar sesiones privadas con instructores certificados.",
        includes: ["Esterillas de yoga", "Zonas de silencio", "Sesiones guiadas (reserva)", "Té de hierbas relajante"]
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
