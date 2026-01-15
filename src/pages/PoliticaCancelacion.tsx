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
                            Entendemos que los planes pueden cambiar. A continuación detallamos nuestra política de cancelación para reservas en Glamping Mágica Luna.
                        </p>

                        <h3 className="text-xl text-primary font-medium mt-8 mb-4">1. Cancelaciones y Cambios de Fecha</h3>
                        <p>
                            Las solicitudes de cancelación o cambio de fecha deben realizarse por escrito a través de nuestro WhatsApp o correo electrónico.
                        </p>
                        <ul className="list-disc pl-6 mb-4 space-y-2">
                            <li>
                                <strong>Más de 15 días antes de la llegada:</strong> Se permite el cambio de fecha sin penalidad (sujeto a disponibilidad y tarifas vigentes) o la devolución del 90% del depósito (10% por gastos administrativos).
                            </li>
                            <li>
                                <strong>Entre 8 y 14 días antes de la llegada:</strong> Se permite el cambio de fecha sujeto a una penalidad del 20% del valor de la reserva. No hay reembolso del depósito en efectivo, el saldo queda como bono para futura estadía (validez 3 meses).
                            </li>
                            <li>
                                <strong>Menos de 7 días antes de la llegada:</strong> No se realizan reembolsos ni cambios de fecha. Se cobrará el 100% del valor del depósito como penalidad por cancelación tardía.
                            </li>
                        </ul>

                        <h3 className="text-xl text-primary font-medium mt-8 mb-4">2. No Show (No presentación)</h3>
                        <p>
                            En caso de no presentarse el día del check-in sin previo aviso ("No Show"), se perderá el 100% del depósito realizado y la reserva será cancelada automáticamente.
                        </p>

                        <h3 className="text-xl text-primary font-medium mt-8 mb-4">3. Salidas Anticipadas</h3>
                        <p>
                            Si decides retirarte antes de la fecha programada de salida, no se realizarán reembolsos por las noches no utilizadas.
                        </p>

                        <h3 className="text-xl text-primary font-medium mt-8 mb-4">4. Casos de Fuerza Mayor</h3>
                        <p>
                            En casos de fuerza mayor comprobable (enfermedad grave, calamidad doméstica, cierre de vías certificadas), se evaluará cada caso individualmente para ofrecer alternativas de reprogramación.
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

export default PoliticaCancelacion;
