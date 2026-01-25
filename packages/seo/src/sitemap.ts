export interface SitemapEntry {
    url: string;
    lastmod?: string;
    changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
    priority?: number;
}

export function generateSitemapXML(entries: SitemapEntry[], baseUrl: string): string {
    const urls = entries
        .map((entry) => {
            const url = new URL(entry.url, baseUrl).href;
            const lastmod = entry.lastmod ? `<lastmod>${entry.lastmod}</lastmod>` : '';
            const changefreq = entry.changefreq ? `<changefreq>${entry.changefreq}</changefreq>` : '';
            const priority = entry.priority !== undefined ? `<priority>${entry.priority}</priority>` : '';

            return `
    <url>
      <loc>${url}</loc>
      ${lastmod}
      ${changefreq}
      ${priority}
    </url>`.trim();
        })
        .join('\n');

    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}

export function generateSitemapIndex(sitemaps: string[], baseUrl: string): string {
    const entries = sitemaps
        .map((sitemap) => {
            const loc = new URL(sitemap, baseUrl).href;
            const lastmod = new Date().toISOString();
            return `
    <sitemap>
      <loc>${loc}</loc>
      <lastmod>${lastmod}</lastmod>
    </sitemap>`.trim();
        })
        .join('\n');

    return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</sitemapindex>`;
}
