import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Play, X, Film } from "lucide-react";

// Video data - Replace these with actual YouTube video IDs or URLs
const videos = [
    {
        id: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
        title: "Bodas en Mágica Luna",
        description: "Momentos mágicos de bodas celebradas en nuestras instalaciones",
        thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
        category: "Bodas",
    },
    {
        id: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
        title: "Eventos Empresariales",
        description: "Congresos, reuniones y celebraciones corporativas",
        thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
        category: "Empresarial",
    },
    {
        id: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
        title: "Quince Años Inolvidables",
        description: "Celebraciones de XV años llenas de magia y elegancia",
        thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
        category: "XV Años",
    },
    {
        id: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
        title: "Nuestras Instalaciones",
        description: "Recorrido por los espacios de Mágica Luna",
        thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
        category: "Instalaciones",
    },
];

interface VideoModalProps {
    videoId: string;
    title: string;
    isOpen: boolean;
    onClose: () => void;
}

const VideoModal = ({ videoId, title, isOpen, onClose }: VideoModalProps) => {
    if (!isOpen) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute -top-12 right-0 text-white/80 hover:text-white transition-colors z-10"
                >
                    <X className="w-8 h-8" />
                </button>

                {/* Video Title */}
                <div className="absolute -top-12 left-0 text-white font-serif text-xl">
                    {title}
                </div>

                {/* YouTube Embed */}
                <iframe
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                    title={title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                />
            </motion.div>
        </motion.div>
    );
};

const VideosEventos = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [selectedVideo, setSelectedVideo] = useState<{
        id: string;
        title: string;
    } | null>(null);

    return (
        <>
            <section className="py-24 md:py-32 bg-gradient-to-b from-secondary to-background relative overflow-hidden">
                {/* Decorative Elements */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
                    className="absolute top-20 right-10 w-64 h-64 border border-accent/10 rounded-full"
                />
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-20 left-10 w-48 h-48 border border-primary/10 rounded-full"
                />

                <div className="container mx-auto px-6 relative z-10">
                    {/* Header */}
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-6"
                        >
                            <Film className="w-4 h-4" />
                            <span className="text-sm font-medium tracking-wider">GALERÍA DE VIDEOS</span>
                        </motion.div>

                        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary mb-6 leading-tight">
                            Nuestros{" "}
                            <span className="text-gradient-gold">Eventos en Acción</span>
                        </h2>

                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
                            Descubre la magia de los eventos que hemos creado y déjate inspirar para tu próxima celebración.
                        </p>
                    </motion.div>

                    {/* Videos Grid */}
                    <div className="grid md:grid-cols-2 gap-8">
                        {videos.map((video, index) => (
                            <motion.div
                                key={`${video.id}-${index}`}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                                className="group relative cursor-pointer"
                                onClick={() => setSelectedVideo({ id: video.id, title: video.title })}
                            >
                                {/* Video Thumbnail */}
                                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-elevated">
                                    {/* Thumbnail Image */}
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                        style={{ backgroundImage: `url(${video.thumbnail})` }}
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                                    {/* Play Button */}
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="absolute inset-0 flex items-center justify-center"
                                    >
                                        <div className="w-20 h-20 rounded-full bg-accent/90 backdrop-blur-sm flex items-center justify-center shadow-lg shadow-accent/30 group-hover:shadow-xl group-hover:shadow-accent/50 transition-all duration-300">
                                            <Play className="w-8 h-8 text-accent-foreground ml-1" fill="currentColor" />
                                        </div>
                                    </motion.div>

                                    {/* Category Badge */}
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-accent/90 backdrop-blur-sm text-accent-foreground text-xs font-medium px-3 py-1.5 rounded-full">
                                            {video.category}
                                        </span>
                                    </div>

                                    {/* Video Info */}
                                    <div className="absolute bottom-0 left-0 right-0 p-6">
                                        <h3 className="font-serif text-2xl text-white mb-2 group-hover:text-accent transition-colors">
                                            {video.title}
                                        </h3>
                                        <p className="text-white/80 text-sm font-light">
                                            {video.description}
                                        </p>
                                    </div>

                                    {/* Shine Effect */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                                        <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 ease-out" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Video Modal */}
            <VideoModal
                videoId={selectedVideo?.id || ""}
                title={selectedVideo?.title || ""}
                isOpen={!!selectedVideo}
                onClose={() => setSelectedVideo(null)}
            />
        </>
    );
};

export default VideosEventos;
