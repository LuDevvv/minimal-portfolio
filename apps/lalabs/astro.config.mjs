import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';
import react from '@astrojs/react';

export default defineConfig({
    output: 'static',
    adapter: cloudflare(),
    site: 'https://lalabs.ludevgarcia.com', // Subdomain requested
    trailingSlash: 'never',
    build: {
        format: 'directory',
    },
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'es'],
        routing: {
            prefixDefaultLocale: false,
        },
    },
    integrations: [react()],
    vite: {
        resolve: {
            preserveSymlinks: true,
        },
        plugins: [tailwindcss()],
    },
});
