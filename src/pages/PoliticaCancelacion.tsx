import { useEffect } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const PoliticaCancelacion = () => {
    useEffect(() => {
        document.title = "Política de Cancelación - Glamping Mágica Luna";
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="overflow-hidden">
            <Navbar />

            <section className="pt-32 pb-16 bg-background">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h1 className="font-serif text-4xl md:text-5xl text-primary mb-8">Política de Cancelación y Reembolso</h1>

                    <div className="prose prose-lg text-muted-foreground">
                        <p className="mb-6">
                            En Glamping Mágica Luna, trabajamos para garantizar la mejor experiencia para nuestros huéspedes. Debido a nuestra naturaleza de exclusividad y alta demanda, manejamos la siguiente política de cancelación:
                        </p>

                        <h3 className="text-xl text-primary font-medium mt-8 mb-4">1. Depósitos y Anticipos</h3>
                        <p>
                            De acuerdo a nuestras políticas de reserva vigentes, <strong>no se realizan devoluciones de anticipos o depósitos</strong> bajo ninguna circunstancia.
                        </p>

                        <h3 className="text-xl text-primary font-medium mt-8 mb-4">2. Cambios de Fecha</h3>
                        <p>
                            Las solicitudes para cambios de fecha deben consultarse directamente con nuestra coordinación de reservas vía WhatsApp para evaluar disponibilidad y condiciones aplicables, entendiendo que el anticipo no es reembolsable.
                        </p>

                        <h3 className="text-xl text-primary font-medium mt-8 mb-4">3. No Show (No presentación)</h3>
                        <p>
                            En caso de no presentarse el día del check-in ("No Show"), se perderá la totalidad del anticipo realizado y la reserva quedará anulada.
                        </p>

                        <h3 className="text-xl text-primary font-medium mt-8 mb-4">4. Salidas Anticipadas</h3>
                        <p>
                            En caso de retiro anticipado de las instalaciones, no se realizarán reembolsos por el tiempo no utilizado.
                        </p>

                        <p className="mt-12 text-sm italic">
                            Esta política nos permite mantener la calidad y exclusividad de nuestros espacios para todos nuestros visitantes.
                            <br />
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

export default PoliticaCancelacion;
