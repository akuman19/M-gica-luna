import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";


// Lazy loading of pages for better performance
const Inicio = lazy(() => import("./pages/Inicio"));
const Eventos = lazy(() => import("./pages/Eventos"));
const Alojamientos = lazy(() => import("./pages/Alojamientos"));
const Nosotros = lazy(() => import("./pages/Nosotros"));
const Galeria = lazy(() => import("./pages/Galeria"));
const Experiencias = lazy(() => import("./pages/Experiencias"));
const Contacto = lazy(() => import("./pages/Contacto"));
const Terminos = lazy(() => import("./pages/Terminos"));
const Privacidad = lazy(() => import("./pages/Privacidad"));
const PoliticaCancelacion = lazy(() => import("./pages/PoliticaCancelacion"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

// Loading component for Suspense
const PageLoader = () => (
  <div className="h-screen w-full flex items-center justify-center bg-primary">
    <div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Inicio />} />
              <Route path="/eventos" element={<Eventos />} />
              <Route path="/alojamientos" element={<Alojamientos />} />
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
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
