// Structured Data (JSON-LD) utilities

export interface PersonSchema {
    name: string;
    jobTitle?: string;
    url?: string;
    image?: string;
    sameAs?: string[];
    email?: string;
    description?: string;
}

export interface WebSiteSchema {
    name: string;
    url: string;
    description?: string;
    author?: PersonSchema;
}

export interface ArticleSchema {
    headline: string;
    description: string;
    image?: string;
    datePublished: string;
    dateModified?: string;
    author: PersonSchema;
}

export function generatePersonSchema(person: PersonSchema): object {
    return {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: person.name,
        ...(person.jobTitle && { jobTitle: person.jobTitle }),
        ...(person.url && { url: person.url }),
        ...(person.image && { image: person.image }),
        ...(person.sameAs && { sameAs: person.sameAs }),
        ...(person.email && { email: person.email }),
        ...(person.description && { description: person.description }),
    };
}

export function generateWebSiteSchema(website: WebSiteSchema): object {
    return {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: website.name,
        url: website.url,
        ...(website.description && { description: website.description }),
        ...(website.author && {
            author: generatePersonSchema(website.author),
        }),
    };
}

export function generateArticleSchema(article: ArticleSchema): object {
    return {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: article.headline,
        description: article.description,
        ...(article.image && { image: article.image }),
        datePublished: article.datePublished,
        ...(article.dateModified && { dateModified: article.dateModified }),
        author: generatePersonSchema(article.author),
    };
}

export function toJsonLd(schema: object): string {
    return JSON.stringify(schema);
}
