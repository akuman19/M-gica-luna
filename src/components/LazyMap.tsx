import { useState, useEffect, useRef } from 'react';

interface LazyMapProps {
    src: string;
    title: string;
    className?: string;
    height?: string;
}

/**
 * Componente de mapa con lazy loading usando Intersection Observer
 * Solo carga el iframe de Google Maps cuando está visible
 */
const LazyMap = ({
    src,
    title,
    className = "",
    height = "h-64"
}: LazyMapProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            {
                rootMargin: '100px',
                threshold: 0.1
            }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={containerRef}
            className={`${height} rounded-lg overflow-hidden shadow-soft border border-primary-foreground/20 ${className}`}
        >
            {!isLoaded && (
                <div className="w-full h-full bg-primary/20 flex items-center justify-center">
                    <div className="text-center">
                        <div className="w-10 h-10 border-4 border-accent border-t-transparent rounded-full animate-spin mx-auto mb-2" />
                        <span className="text-primary-foreground/60 text-sm">Cargando mapa...</span>
                    </div>
                </div>
            )}

            {isVisible && (
                <iframe
                    src={src}
                    width="100%"
                    height="100%"
                    style={{ border: 0, display: isLoaded ? 'block' : 'none' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="grayscale hover:grayscale-0 transition-all duration-500"
                    title={title}
                    onLoad={() => setIsLoaded(true)}
                />
            )}
        </div>
    );
};

export default LazyMap;
