import { useEffect } from 'react';
import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Privacidad = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="overflow-hidden">
            <SEO
                title="Política de Privacidad"
                description="Conoce nuestra política de privacidad. En Glamping Mágica Luna protegemos tu información personal y respetamos tu privacidad."
                url="https://glampingmagicaluna.com/privacidad"
            />

            <Navbar />

            <section id="main-content" className="pt-32 pb-16 bg-background">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h1 className="font-serif text-4xl md:text-5xl text-primary mb-8">Política de Privacidad</h1>

                    <div className="prose prose-lg text-muted-foreground">
                        <p className="mb-6">
                            En Glamping Mágica Luna, valoramos y respetamos su privacidad. Esta política describe cómo recopilamos, usamos y protegemos su información personal.
                        </p>

                        <h3 className="text-xl text-primary font-medium mt-8 mb-4">1. Información que Recopilamos</h3>
                        <p>
                            Podemos recopilar información personal como su nombre, dirección de correo electrónico, número de teléfono y detalles de pago cuando realiza una reserva o se pone en contacto con nosotros.
                        </p>

                        <h3 className="text-xl text-primary font-medium mt-8 mb-4">2. Uso de la Información</h3>
                        <p>
                            Utilizamos su información para:
                        </p>
                        <ul className="list-disc pl-6 mb-4 space-y-2">
                            <li>Procesar y confirmar sus reservas.</li>
                            <li>Enviarle información relevante sobre su estadía.</li>
                            <li>Responder a sus consultas y comentarios.</li>
                            <li>Mejorar nuestros servicios y sitio web.</li>
                        </ul>

                        <h3 className="text-xl text-primary font-medium mt-8 mb-4">3. Protección de Datos</h3>
                        <p>
                            Implementamos medidas de seguridad para proteger su información personal contra acceso no autorizado, alteración o divulgación. No vendemos ni compartimos sus datos con terceros con fines comerciales.
                        </p>

                        <h3 className="text-xl text-primary font-medium mt-8 mb-4">4. Cookies</h3>
                        <p>
                            Nuestro sitio web puede utilizar cookies para mejorar su experiencia de navegación. Puede configurar su navegador para rechazar las cookies si así lo prefiere.
                        </p>

                        <h3 className="text-xl text-primary font-medium mt-8 mb-4">5. Derechos del Usuario</h3>
                        <p>
                            Tiene derecho a solicitar el acceso, rectificación o eliminación de su información personal en cualquier momento. Para ello, puede contactarnos a través de nuestro correo electrónico o número de WhatsApp.
                        </p>

                        <h3 className="text-xl text-primary font-medium mt-8 mb-4">6. Contacto</h3>
                        <p>
                            Si tiene preguntas sobre nuestra política de privacidad, contáctenos en:<br />
                            Email: glampingmagicaluna1@gmail.com<br />
                            Teléfono: +57 311 333 2886
                        </p>

                        <p className="mt-12 text-sm italic">
                            Última actualización: Enero 2026
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
            <WhatsAppButton />
        </main>
    );
};

export default Privacidad;
