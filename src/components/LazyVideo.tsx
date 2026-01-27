import { useState, useEffect, useRef } from 'react';

interface LazyVideoProps {
    src: string;
    className?: string;
    autoPlay?: boolean;
    muted?: boolean;
    loop?: boolean;
    playsInline?: boolean;
    poster?: string;
}

/**
 * Componente de video con lazy loading usando Intersection Observer
 * Solo carga el video cuando está visible en el viewport
 */
const LazyVideo = ({
    src,
    className = "",
    autoPlay = true,
    muted = true,
    loop = true,
    playsInline = true,
    poster,
}: LazyVideoProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Cuando el video entra en el viewport (con margen de 200px)
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            {
                rootMargin: '200px', // Precarga 200px antes de que sea visible
                threshold: 0.1
            }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // Manejar autoplay cuando el video se carga
    useEffect(() => {
        if (isLoaded && autoPlay && videoRef.current) {
            videoRef.current.play().catch(() => {
                // Silenciar error si autoplay es bloqueado por el navegador
            });
        }
    }, [isLoaded, autoPlay]);

    return (
        <div ref={containerRef} className={`relative ${className}`}>
            {!isLoaded && (
                <div className="absolute inset-0 bg-primary/20 animate-pulse flex items-center justify-center">
                    <div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin" />
                </div>
            )}

            {isVisible && (
                <video
                    ref={videoRef}
                    src={src}
                    className={`w-full h-full object-cover transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                    autoPlay={autoPlay}
                    muted={muted}
                    loop={loop}
                    playsInline={playsInline}
                    poster={poster}
                    preload="metadata"
                    onLoadedData={() => setIsLoaded(true)}
                />
            )}
        </div>
    );
};

export default LazyVideo;
