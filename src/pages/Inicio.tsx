import { useEffect } from 'react';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Inicio = () => {
    useEffect(() => {
        document.title = "Glamping Mágica Luna - Lujo, Eventos y Experiencias en la Naturaleza";
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="overflow-hidden">
            <Navbar />
            <Hero />
            <About />
            <WhyChooseUs />
            <Testimonials />
            <CallToAction />
            <Footer />
            <WhatsAppButton />
        </main>
    );
};

export default Inicio;
