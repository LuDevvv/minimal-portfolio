import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
    output: 'static',
    adapter: cloudflare(),
    site: 'https://links.ludevgarcia.com',
    trailingSlash: 'never',
    build: {
        format: 'directory',
    },
    vite: {
        resolve: {
            preserveSymlinks: true,
        },
        plugins: [tailwindcss()],
    },
});
