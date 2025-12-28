import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "573217377357"; // Número de WhatsApp sin + ni espacios
const WHATSAPP_MESSAGE = "Hola! Me interesa conocer más sobre Luna Andina Glamping y hacer una reserva.";

const WhatsAppButton = () => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow group"
      aria-label="Contáctanos por WhatsApp"
    >
      {/* Pulse Ring */}
      <span className="absolute w-full h-full rounded-full bg-[#25D366] animate-ping opacity-25" />

      {/* Icon */}
      <MessageCircle className="w-8 h-8 text-white fill-white" />

      {/* Tooltip */}
      <motion.div
        initial={{ opacity: 0, x: 10 }}
        whileHover={{ opacity: 1, x: 0 }}
        className="absolute right-full mr-4 px-4 py-2 bg-foreground text-background text-sm font-medium rounded-lg whitespace-nowrap hidden md:group-hover:block"
      >
        ¡Escríbenos por WhatsApp!
        <div className="absolute top-1/2 -right-2 -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-l-8 border-transparent border-l-foreground" />
      </motion.div>
    </motion.a>
  );
};

export default WhatsAppButton;
