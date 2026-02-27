# Subdomain Configuration Guide (ludevgarcia.com)

This guide explains how to map the apps in this monorepo to their respective subdomains using Cloudflare Pages.

## Subdomain Mapping

| App | Subdomain | Deployment Project Name |
|-----|-----------|-------------------------|
| `apps/freelance` | `ludevgarcia.com` | `ludevgarcia` |
| `apps/portfolio` | `portfolio.ludevgarcia.com` | `ludevgarcia-portfolio` |
| `apps/blog` | `blog.ludevgarcia.com` | `ludevgarcia-blog` |
| `apps/linkme` | `links.ludevgarcia.com` | `ludevgarcia-links` |

## Setup Instructions (Cloudflare Dashboard)

Para que cada proyecto responda en su subdominio correspondiente, sigue estos pasos para cada uno:

### Paso 1: Accede al proyecto
1. Ve al panel de **Cloudflare**.
2. Haz clic en **Workers & Pages**.
3. Selecciona el proyecto correspondiente (ej: `ludevgarcia-blog`).

### Paso 2: Configura el Dominio Personalizado
1. Haz clic en la pestaña **Custom Domains**.
2. Presiona el botón **Set up a custom domain**.
3. Escribe el subdominio exacto (ej: `blog.ludevgarcia.com`).
4. Haz clic en **Continue**.
5. Cloudflare detectará que el dominio está en tu cuenta y te ofrecerá crear el registro DNS automáticamente. Haz clic en **Activate domain**.

### Paso 3: Repite para todos los proyectos

| Proyecto en Cloudflare | Dominio / Subdominio a configurar |
|------------------------|-----------------------------------|
| `ludevgarcia`          | `ludevgarcia.com`                 |
| `ludevgarcia-portfolio`| `portfolio.ludevgarcia.com`       |
| `ludevgarcia-blog`     | `blog.ludevgarcia.com`            |
| `ludevgarcia-links`    | `links.ludevgarcia.com`           |

## Common Build Settings
- **Node.js Version**: `20` (Set via Environment Variable `NODE_VERSION`)
- **Root Directory**: `/`
- **Framework Preset**: `Astro`
