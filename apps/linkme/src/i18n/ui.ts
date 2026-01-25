export const languages = {
    es: 'Español',
    en: 'English',
};

export const defaultLang = 'es';

export const ui = {
    es: {
        'meta.title': 'Luis Garcia | Enlaces',
        'meta.description': 'Conecta con Luis Garcia - Desarrollador Full Stack',
        'profile.role': 'Desarrollador Full Stack | Creando Experiencias Digitales',
        'profile.verified': 'Profesional Verificado',

        'link.portfolio.title': 'Portafolio',
        'link.portfolio.desc': 'Mi sitio web principal y proyectos',

        'link.freelance.title': 'Servicios Freelance',
        'link.freelance.desc': 'Contrátame para tu próximo proyecto',

        'link.blog.title': 'Blog Técnico',
        'link.blog.desc': 'Artículos, tutoriales y pensamientos',

        'social.linkedin': 'LinkedIn',
        'social.github': 'GitHub',
        'social.instagram': 'Instagram',
        'social.email': 'Envíame un correo',

        'footer': 'Luis Garcia. Todos los derechos reservados.',
    },
    en: {
        'meta.title': 'Luis Garcia | Links',
        'meta.description': 'Connect with Luis Garcia - Full Stack Developer',
        'profile.role': 'Full Stack Developer | Building Digital Experiences',
        'profile.verified': 'Verified Professional',

        'link.portfolio.title': 'Portfolio',
        'link.portfolio.desc': 'My main website & projects',

        'link.freelance.title': 'Freelance Services',
        'link.freelance.desc': 'Hire me for your next project',

        'link.blog.title': 'Tech Blog',
        'link.blog.desc': 'Articles, tutorials & thoughts',

        'social.linkedin': 'LinkedIn',
        'social.github': 'GitHub',
        'social.instagram': 'Instagram',
        'social.email': 'Email Me',

        'footer': 'Luis Garcia. All rights reserved.',
    },
};

export function useTranslations(lang: keyof typeof ui) {
    return function t(key: keyof typeof ui[typeof defaultLang]) {
        return ui[lang][key] || ui[defaultLang][key];
    };
}
