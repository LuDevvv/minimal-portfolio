import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
    output: 'static',
    adapter: cloudflare(),
    site: 'https://portfolio.ludevgarcia.com',
    trailingSlash: 'never',
    build: {
        format: 'directory',
    },
    integrations: [
        sitemap(),
    ],
    vite: {
        resolve: {
            preserveSymlinks: true,
        },
        plugins: [tailwindcss()],
    },
});
