import { useEffect } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Terminos = () => {
    useEffect(() => {
        document.title = "Términos y Condiciones - Glamping Mágica Luna";
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="overflow-hidden">
            <Navbar />

            <section className="pt-32 pb-16 bg-background">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h1 className="font-serif text-4xl md:text-5xl text-primary mb-8">Términos y Condiciones</h1>

                    <div className="prose prose-lg text-muted-foreground">
                        <p className="mb-6">
                            Bienvenido a Glamping Mágica Luna. Al utilizar nuestros servicios y sitio web, aceptas cumplir con los siguientes términos y condiciones. Por favor, léelos cuidadosamente.
                        </p>

                        <h3 className="text-xl text-primary font-medium mt-8 mb-4">1. Reservas y Pagos</h3>
                        <p>
                            Todas las reservas están sujetas a disponibilidad. Para confirmar una reserva, se requiere un depósito del 50% del valor total. El saldo restante debe ser cancelado al momento del check-in. Aceptamos pagos mediante transferencia bancaria, tarjetas de crédito/débito y efectivo.
                        </p>

                        <h3 className="text-xl text-primary font-medium mt-8 mb-4">2. Check-in y Check-out</h3>
                        <p>
                            <strong>Check-in:</strong> A partir de las 3:00 PM.<br />
                            <strong>Check-out:</strong> Hasta las 12:00 PM (mediodía).<br />
                            Late check-out está sujeto a disponibilidad y puede incurrir en cargos adicionales.
                        </p>

                        <h3 className="text-xl text-primary font-medium mt-8 mb-4">3. Normas de Convivencia</h3>
                        <p>
                            Para garantizar la tranquilidad de todos nuestros huéspedes:
                        </p>
                        <ul className="list-disc pl-6 mb-4 space-y-2">
                            <li>Se debe respetar el silencio a partir de las 10:00 PM.</li>
                            <li>No se permite el uso de altavoces o música a volumen alto en las zonas comunes o alojamientos.</li>
                            <li>Está prohibido fumar dentro de los alojamientos (domos, tiendas, cabañas).</li>
                        </ul>

                        <h3 className="text-xl text-primary font-medium mt-8 mb-4">4. Mascotas</h3>
                        <p>
                            Somos Pet Friendly. Sin embargo, las mascotas deben estar siempre bajo supervisión de sus dueños, no deben subirse a las camas o muebles, y los dueños son responsables de recoger sus desechos y de cualquier daño causado.
                        </p>

                        <h3 className="text-xl text-primary font-medium mt-8 mb-4">5. Responsabilidad</h3>
                        <p>
                            Glamping Mágica Luna no se hace responsable por la pérdida de objetos de valor no depositados en custodia. El uso de las instalaciones, incluyendo jacuzzis y senderos, es bajo la responsabilidad del huésped.
                        </p>

                        <h3 className="text-xl text-primary font-medium mt-8 mb-4">6. Modificaciones</h3>
                        <p>
                            Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios entrarán en vigor inmediatamente después de su publicación en el sitio web.
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

export default Terminos;
