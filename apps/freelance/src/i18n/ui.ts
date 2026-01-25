export const languages = {
    es: 'Español',
    en: 'English',
};

export const defaultLang = 'es';

export const ui = {
    es: {
        /* NAV */
        'nav.services': 'Servicios',
        'nav.projects': 'Proyectos',
        'nav.about': 'Sobre mí',
        'nav.blog': 'Blog',
        'nav.process': 'Proceso',
        'nav.pricing': 'Precios',
        'nav.contact': 'Contacto',

        /* HERO */
        'hero.badge': 'Disponible para nuevos proyectos',
        'hero.title': 'Construyo software que convierte ideas en productos reales.',
        'hero.title.highlight': 'productos reales',
        'hero.description':
            'Ayudo a startups, emprendedores y empresas a lanzar y escalar aplicaciones web y plataformas SaaS enfocadas en resultados, rendimiento y crecimiento sostenible.',
        'hero.cta.packages': 'Ver Paquetes',
        'hero.cta.talk': 'Agendar llamada estratégica',
        'hero.stats.exp': 'Años de experiencia',
        'hero.stats.projects': 'Proyectos entregados',
        'hero.stats.satisfaction': 'Clientes satisfechos',
        'social.trusted': 'Con la confianza de equipos innovadores',

        /* SERVICES */
        'services.badge': 'Servicios',
        'services.title': 'Qué puedo construir para ti',
        'services.description':
            'Diseño y desarrollo soluciones digitales que no solo se ven bien, sino que funcionan, escalan y aportan valor real al negocio.',

        /* PROJECTS */
        'projects.badge': 'Proyectos',
        'projects.title': 'Trabajo seleccionado',
        'projects.description':
            'He trabajado en productos digitales reales, desde plataformas SaaS hasta sistemas internos para empresas.',
        'projects.cta': 'Ver todos los proyectos',

        /* PROCESS */
        'process.badge': 'Proceso',
        'process.title': 'Cómo trabajo',
        'process.description':
            'Un proceso claro, transparente y orientado a resultados para llevar tu idea a producción sin fricciones.',

        'process.step1.title': 'Descubrimiento',
        'process.step1.desc':
            'Definimos objetivos, usuarios y necesidades técnicas. Me involucro en el negocio para asegurar que la solución sea viable, útil y rentable desde el inicio.',

        'process.step2.title': 'Estrategia & UI/UX',
        'process.step2.desc':
            'Diseño la arquitectura del sistema y una experiencia de usuario clara, enfocada en conversión y usabilidad. Nada se deja al azar.',

        'process.step3.title': 'Desarrollo Ágil',
        'process.step3.desc':
            'Construcción por sprints con visibilidad total. Recibes avances constantes y acceso a entornos de prueba en tiempo real.',

        'process.step4.title': 'Lanzamiento Optimizado',
        'process.step4.desc':
            'Despliegue en la nube, optimización de velocidad (Core Web Vitals) y configuración de seguridad para un lanzamiento estable.',

        'process.step5.title': 'Escalabilidad',
        'process.step5.desc':
            'Mantenimiento y evolución basada en datos reales de uso. Acompaño el crecimiento técnico de tu producto.',

        /* PRICING */
        'pricing.badge': 'Precios',
        'pricing.title': 'Servicios y paquetes',
        'pricing.description':
            'Paquetes claros y flexibles, diseñados para proyectos de distintos tamaños y clientes de cualquier parte del mundo.',

        'pricing.pkg1.title': 'High-Conversion Landing',
        'pricing.pkg1.price': 'Desde $1,200',
        'pricing.pkg1.desc':
            'Ideal para validar ideas, lanzar productos o captar leads rápidamente.',
        'pricing.pkg1.feat1': 'Diseño UI/UX premium',
        'pricing.pkg1.feat2': 'Desarrollo ultra rápido',
        'pricing.pkg1.feat3': 'SEO técnico y meta tags',
        'pricing.pkg1.feat4': 'Optimización Web Vitals',

        'pricing.pkg2.title': 'MVP Evolution',
        'pricing.pkg2.price': 'Desde $4,000',
        'pricing.pkg2.desc':
            'Un MVP sólido y escalable listo para validar, crecer y monetizar desde el primer día.',
        'pricing.pkg2.feat1': 'Frontend + Backend escalable',
        'pricing.pkg2.feat2': 'Autenticación y base de datos',
        'pricing.pkg2.feat3': 'Integración de pagos',
        'pricing.pkg2.feat4': '1 mes de soporte técnico',

        'pricing.pkg3.title': 'Fractional CTO',
        'pricing.pkg3.price': 'Desde $1,500',
        'pricing.pkg3.desc':
            'Acompañamiento técnico continuo para escalar tu producto con seguridad.',
        'pricing.pkg3.feat1': 'Consultoría de arquitectura',
        'pricing.pkg3.feat2': 'Desarrollo de nuevas features',
        'pricing.pkg3.feat3': 'Auditorías de código',
        'pricing.pkg3.feat4': 'Prioridad y soporte continuo',

        'pricing.audit.title': 'Auditoría Técnica y Revisión de Producto',
        'pricing.audit.sub': 'Obtén claridad y un plan de acción antes de invertir en desarrollo.',
        'pricing.audit.desc': 'Una revisión rápida y enfocada de tu producto o idea. Analizo rendimiento, calidad de código, UX y riesgos técnicos — y te entrego un plan de acción claro.',
        'pricing.audit.feat1': 'Revisión de rendimiento y Core Web Vitals',
        'pricing.audit.feat2': 'Análisis de código y arquitectura',
        'pricing.audit.feat3': 'Feedback de UX y conversión',
        'pricing.audit.feat4': 'SEO y problemas técnicos',
        'pricing.audit.delivery': 'Recomendaciones accionables (PDF) + Entrega en 48h',
        'pricing.audit.price': 'Desde $200',
        'pricing.audit.cta': 'Solicitar Auditoría Técnica',

        'pricing.cta': 'Agendar consulta gratuita',
        'pricing.popular': 'Más popular',

        /* FIT */
        'fit.badge': 'Fit Cultural',
        'fit.title': '¿Es para ti?',
        'fit.good.title': 'Es un buen fit si:',
        'fit.good.1': 'Eres un founder, startup o empresa con objetivos reales',
        'fit.good.2': 'Quieres lanzar rápido y escalar correctamente',
        'fit.good.3': 'Valoras el código limpio, el rendimiento y la comunicación',
        'fit.good.4': 'Buscas un socio técnico a largo plazo',

        'fit.bad.title': 'No es un fit si:',
        'fit.bad.1': 'Buscas la opción más barata posible',
        'fit.bad.2': 'No tienes objetivos ni plazos claros',
        'fit.bad.3': 'Quieres "solo una web" sin estrategia',
        'fit.bad.4': 'No estás listo para invertir en calidad',

        /* CONTACT */
        'contact.badge': 'Contacto',
        'contact.title': 'Hablemos',
        'contact.description':
            'Si tienes una idea, un producto en marcha o necesitas orientación técnica, conversemos. Me gusta trabajar con personas que quieren construir algo real.',
    },

    en: {
        /* NAV */
        'nav.services': 'Services',
        'nav.projects': 'Projects',
        'nav.about': 'About',
        'nav.blog': 'Blog',
        'nav.process': 'Process',
        'nav.pricing': 'Pricing',
        'nav.contact': 'Contact',

        /* HERO */
        'hero.badge': 'Available for new projects',
        'hero.title': 'I turn ideas into real, scalable digital products.',
        'hero.title.highlight': 'digital products',
        'hero.description':
            'I help startups, founders, and businesses build and scale web applications and SaaS platforms focused on performance, clarity, and long-term growth.',
        'hero.cta.packages': 'View Packages',
        'hero.cta.talk': 'Book a free strategy call',
        'hero.stats.exp': 'Years of experience',
        'hero.stats.projects': 'Projects delivered',
        'hero.stats.satisfaction': 'Client satisfaction',
        'social.trusted': 'Trusted by innovative teams',

        /* SERVICES */
        'services.badge': 'Services',
        'services.title': 'What I can build for you',
        'services.description':
            'I design and develop digital solutions that don’t just look good — they work, scale, and deliver real business value.',

        /* PROJECTS */
        'projects.badge': 'Projects',
        'projects.title': 'Selected work',
        'projects.description':
            'I’ve worked on real-world digital products, from SaaS platforms to internal business systems.',
        'projects.cta': 'View all projects',

        /* PROCESS */
        'process.badge': 'Process',
        'process.title': 'How I work',
        'process.description':
            'A clear, transparent, and results-driven process to bring your idea to production without friction.',

        'process.step1.title': 'Discovery',
        'process.step1.desc':
            'We define goals, users, and technical needs. I get involved in the business to ensure the solution is viable, useful, and profitable from day one.',

        'process.step2.title': 'Strategy & UI/UX',
        'process.step2.desc':
            'I design the system architecture and a clear user experience focused on conversion and usability.',

        'process.step3.title': 'Agile Development',
        'process.step3.desc':
            'Built in sprints with full visibility. You receive constant updates and access to live testing environments.',

        'process.step4.title': 'Optimized Launch',
        'process.step4.desc':
            'Cloud deployment, performance optimization (Core Web Vitals), and security setup for a stable launch.',

        'process.step5.title': 'Scalability',
        'process.step5.desc':
            'Ongoing maintenance and evolution based on real usage data. I support your product’s long-term growth.',

        /* PRICING */
        'pricing.badge': 'Pricing',
        'pricing.title': 'Services & packages',
        'pricing.description':
            'Clear and flexible packages designed for projects of different sizes and clients worldwide.',

        'pricing.pkg1.title': 'High-Conversion Landing',
        'pricing.pkg1.price': 'From $1,200',
        'pricing.pkg1.desc':
            'Perfect for validating ideas, launching products, or capturing leads fast.',
        'pricing.pkg1.feat1': 'Premium UI/UX design',
        'pricing.pkg1.feat2': 'Ultra-fast development',
        'pricing.pkg1.feat3': 'Technical SEO & meta tags',
        'pricing.pkg1.feat4': 'Web Vitals optimization',

        'pricing.pkg2.title': 'MVP Evolution',
        'pricing.pkg2.price': 'From $4,000',
        'pricing.pkg2.desc':
            'A solid, scalable MVP ready to validate, grow, and monetize from day one.',
        'pricing.pkg2.feat1': 'Scalable frontend & backend',
        'pricing.pkg2.feat2': 'Authentication & database',
        'pricing.pkg2.feat3': 'Payment integration',
        'pricing.pkg2.feat4': '1 month dev support',

        'pricing.pkg3.title': 'Fractional CTO',
        'pricing.pkg3.price': 'From $1,500',
        'pricing.pkg3.desc':
            'Ongoing technical leadership to scale your product with confidence.',
        'pricing.pkg3.feat1': 'Architecture consulting',
        'pricing.pkg3.feat2': 'New feature development',
        'pricing.pkg3.feat3': 'Code audits',
        'pricing.pkg3.feat4': 'Priority support',

        'pricing.audit.title': 'Technical Audit & Product Review',
        'pricing.audit.sub': 'Get clear, actionable insights before investing in development.',
        'pricing.audit.desc': 'A fast, focused review of your product or idea. I analyze performance, code quality, UX, and technical risks — and give you a clear action plan.',
        'pricing.audit.feat1': 'Performance & Core Web Vitals review',
        'pricing.audit.feat2': 'Code & architecture analysis',
        'pricing.audit.feat3': 'UX / conversion feedback',
        'pricing.audit.feat4': 'SEO & technical issues',
        'pricing.audit.delivery': 'Actionable recommendations (PDF) + 48h delivery',
        'pricing.audit.price': 'Starting at $200',
        'pricing.audit.cta': 'Book a Technical Audit',

        'pricing.cta': 'Book free consultation',
        'pricing.popular': 'Most popular',

        /* FIT */
        'fit.badge': 'Fit Check',
        'fit.title': 'Is this a good fit?',
        'fit.good.title': 'Good fit if you:',
        'fit.good.1': 'You’re a founder, startup, or business with a real goal',
        'fit.good.2': 'You want to launch fast and scale properly',
        'fit.good.3': 'You value clean code, performance, and communication',
        'fit.good.4': 'You’re looking for a long-term technical partner',

        'fit.bad.title': 'Not a fit if you:',
        'fit.bad.1': 'You’re looking for the cheapest option',
        'fit.bad.2': 'You don’t have clear objectives or timelines',
        'fit.bad.3': 'You want "just a website" without strategy',
        'fit.bad.4': 'You’re not ready to invest in quality',

        /* CONTACT */
        'contact.badge': 'Contact',
        'contact.title': 'Let’s talk',
        'contact.description':
            'Whether you have an idea, an existing product, or just need technical guidance, let’s talk. I enjoy working with people who want to build something real.',
    },
};

export function getLangFromUrl(url: URL) {
    const [, lang] = url.pathname.split('/');
    if (lang in ui) return lang as keyof typeof ui;
    return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
    return function t(key: keyof typeof ui[typeof defaultLang]) {
        return ui[lang][key] || ui[defaultLang][key];
    };
}
