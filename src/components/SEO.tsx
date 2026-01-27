import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
    url?: string;
    type?: string;
}

const defaultSEO = {
    title: "Glamping Mágica Luna - Lujo en Armonía con la Naturaleza | Colombia",
    description: "Descubre Glamping Mágica Luna, una experiencia de lujo en la naturaleza de Manizales, Caldas. Domos geodésicos, tiendas safari y cabañas frente a los Termales.",
    keywords: "glamping, Colombia, lujo, naturaleza, ecoturismo, Manizales, Caldas, Eje Cafetero, hospedaje, Villamaria, termales, jacuzzi, chalet, domos, tienda safari, escapada romántica, turismo de naturaleza, montaña, descanso, malla catamarán",
    image: "https://glampingmagicaluna.com/og-image.jpg",
    url: "https://glampingmagicaluna.com",
    type: "website",
};

// Schema.org JSON-LD para datos estructurados
const getStructuredData = (url: string) => {
    // Schema principal del negocio (LodgingBusiness)
    const businessSchema = {
        "@context": "https://schema.org",
        "@type": "LodgingBusiness",
        "@id": "https://glampingmagicaluna.com/#organization",
        "name": "Glamping Mágica Luna",
        "alternateName": "Hotel Glamping Mágica Luna",
        "description": "Experiencia de glamping de lujo en la naturaleza de Manizales, Caldas. Chalets con jacuzzi, domos geodésicos y cabañas frente a los Termales.",
        "url": "https://glampingmagicaluna.com",
        "logo": "https://glampingmagicaluna.com/og-image.jpg",
        "image": "https://glampingmagicaluna.com/og-image.jpg",
        "telephone": ["+573146646180", "+573113332886"],
        "email": "glampingmagicaluna1@gmail.com",
        "priceRange": "$$$",
        "currenciesAccepted": "COP",
        "paymentAccepted": "Efectivo, Transferencia Bancaria, Tarjeta de Crédito",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Vereda Gallinazo, km 5 vía a Termales el Otoño",
            "addressLocality": "Manizales",
            "addressRegion": "Caldas",
            "postalCode": "170001",
            "addressCountry": "CO"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 5.0689,
            "longitude": -75.5174
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "08:00",
            "closes": "20:00"
        },
        "amenityFeature": [
            { "@type": "LocationFeatureSpecification", "name": "Jacuzzi Privado", "value": true },
            { "@type": "LocationFeatureSpecification", "name": "Parqueadero Gratis", "value": true },
            { "@type": "LocationFeatureSpecification", "name": "WiFi", "value": true },
            { "@type": "LocationFeatureSpecification", "name": "Vista a Montaña", "value": true },
            { "@type": "LocationFeatureSpecification", "name": "Pet Friendly", "value": true }
        ],
        "starRating": {
            "@type": "Rating",
            "ratingValue": "4.9"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "127",
            "bestRating": "5",
            "worstRating": "1"
        },
        "sameAs": [
            "https://www.facebook.com/glampingmagicaluna",
            "https://www.instagram.com/magicalunaoficial",
            "https://www.youtube.com/@GlampingMágicaLuna"
        ]
    };

    // Schema del sitio web
    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Glamping Mágica Luna",
        "url": "https://glampingmagicaluna.com",
        "potentialAction": {
            "@type": "SearchAction",
            "target": "https://glampingmagicaluna.com/?s={search_term_string}",
            "query-input": "required name=search_term_string"
        }
    };

    // Schema de breadcrumbs dinámico
    const getBreadcrumbSchema = () => {
        const path = url.replace("https://glampingmagicaluna.com", "");
        const breadcrumbs = [
            { name: "Inicio", url: "https://glampingmagicaluna.com/" }
        ];

        const pathMap: Record<string, string> = {
            "/alojamientos": "Planes",
            "/eventos": "Eventos",
            "/experiencias": "Experiencias",
            "/galeria": "Galería",
            "/nosotros": "Nosotros",
            "/contacto": "Contacto",
            "/terminos": "Términos y Condiciones",
            "/privacidad": "Política de Privacidad",
            "/politicas-cancelacion": "Política de Cancelación"
        };

        if (path && path !== "/" && pathMap[path]) {
            breadcrumbs.push({
                name: pathMap[path],
                url: `https://glampingmagicaluna.com${path}`
            });
        }

        return {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": breadcrumbs.map((item, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "name": item.name,
                "item": item.url
            }))
        };
    };

    return [businessSchema, websiteSchema, getBreadcrumbSchema()];
};

const SEO = ({
    title,
    description,
    keywords,
    image,
    url,
    type,
}: SEOProps) => {
    const seo = {
        title: title ? `${title} | Glamping Mágica Luna` : defaultSEO.title,
        description: description || defaultSEO.description,
        keywords: keywords || defaultSEO.keywords,
        image: image || defaultSEO.image,
        url: url || defaultSEO.url,
        type: type || defaultSEO.type,
    };

    const structuredData = getStructuredData(seo.url);

    return (
        <Helmet>
            {/* Título y meta básicos */}
            <title>{seo.title}</title>
            <meta name="description" content={seo.description} />
            <meta name="keywords" content={seo.keywords} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={seo.type} />
            <meta property="og:title" content={seo.title} />
            <meta property="og:description" content={seo.description} />
            <meta property="og:image" content={seo.image} />
            <meta property="og:url" content={seo.url} />
            <meta property="og:site_name" content="Glamping Mágica Luna" />
            <meta property="og:locale" content="es_CO" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={seo.title} />
            <meta name="twitter:description" content={seo.description} />
            <meta name="twitter:image" content={seo.image} />

            {/* Canonical */}
            <link rel="canonical" href={seo.url} />

            {/* Schema.org JSON-LD - Datos estructurados */}
            {structuredData.map((schema, index) => (
                <script key={index} type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            ))}
        </Helmet>
    );
};

export default SEO;
