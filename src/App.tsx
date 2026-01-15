import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Eventos from "./pages/Eventos";
import Alojamientos from "./pages/Alojamientos";
import Nosotros from "./pages/Nosotros";
import Galeria from "./pages/Galeria";
import Experiencias from "./pages/Experiencias";
import Contacto from "./pages/Contacto";
import Terminos from "./pages/Terminos";
import Privacidad from "./pages/Privacidad";
import PoliticaCancelacion from "./pages/PoliticaCancelacion";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/alojamientos" element={<Alojamientos />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/experiencias" element={<Experiencias />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/terminos" element={<Terminos />} />
          <Route path="/privacidad" element={<Privacidad />} />
          <Route path="/politicas-cancelacion" element={<PoliticaCancelacion />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
