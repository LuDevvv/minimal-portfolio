import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
    output: 'static',
    adapter: cloudflare(),
    site: 'https://blog.ludevgarcia.com',
    trailingSlash: 'never',
    build: {
        format: 'directory',
    },
    integrations: [
        mdx(),
        sitemap(),
    ],
    vite: {
        resolve: {
            preserveSymlinks: true,
        },
        plugins: [tailwindcss()],
    },
});
