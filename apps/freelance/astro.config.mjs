import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  // Static site generation (default) - perfect for Cloudflare Pages
  output: 'static',
  adapter: cloudflare(),

  // Your production domain
  site: 'https://withlouis.com',

  // Clean URLs - /about instead of /about.html
  trailingSlash: 'never',
  build: {
    format: 'directory',
  },

  // Internationalization
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  // Integrations
  integrations: [
    mdx(),
    sitemap({
      i18n: {
        defaultLocale: 'es',
        locales: {
          es: 'es',
          en: 'en',
        },
      },
    }),
  ],

  // Vite config for monorepo compatibility
  vite: {
    resolve: {
      preserveSymlinks: true,
    },

    plugins: [tailwindcss()],
  },
});