// SEO Meta utilities

export interface SEOProps {
    title: string;
    description: string;
    image?: string;
    canonicalURL?: string;
    type?: 'website' | 'article' | 'profile';
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    tags?: string[];
    noindex?: boolean;
    nofollow?: boolean;
}

export interface OpenGraphProps {
    title: string;
    description: string;
    url: string;
    image?: string;
    type?: 'website' | 'article' | 'profile';
    siteName?: string;
    locale?: string;
}

export interface TwitterCardProps {
    title: string;
    description: string;
    image?: string;
    card?: 'summary' | 'summary_large_image' | 'app' | 'player';
    site?: string;
    creator?: string;
}

export function generateMetaTags(props: SEOProps): Record<string, string> {
    const meta: Record<string, string> = {
        title: props.title,
        description: props.description,
    };

    if (props.noindex) {
        meta.robots = props.nofollow ? 'noindex,nofollow' : 'noindex';
    } else if (props.nofollow) {
        meta.robots = 'nofollow';
    }

    return meta;
}

export function generateOpenGraphTags(props: OpenGraphProps): Record<string, string> {
    const og: Record<string, string> = {
        'og:title': props.title,
        'og:description': props.description,
        'og:url': props.url,
        'og:type': props.type || 'website',
    };

    if (props.image) og['og:image'] = props.image;
    if (props.siteName) og['og:site_name'] = props.siteName;
    if (props.locale) og['og:locale'] = props.locale;

    return og;
}

export function generateTwitterTags(props: TwitterCardProps): Record<string, string> {
    const twitter: Record<string, string> = {
        'twitter:card': props.card || 'summary_large_image',
        'twitter:title': props.title,
        'twitter:description': props.description,
    };

    if (props.image) twitter['twitter:image'] = props.image;
    if (props.site) twitter['twitter:site'] = props.site;
    if (props.creator) twitter['twitter:creator'] = props.creator;

    return twitter;
}

// Dummy export for Astro component compatibility
export const SEO = null;
