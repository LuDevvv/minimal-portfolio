# ludevgarcia

A monorepo containing multiple Astro sites deployed to Cloudflare Pages.

## Structure

```
ludevgarcia/
├── apps/
│   ├── freelance/     → Main site (ludevgarcia.com)
│   ├── portfolio/     → Personal portfolio
│   └── blog/          → Technical blog
├── packages/
│   ├── ui/            → Shared UI components
│   └── seo/           → SEO utilities
├── pnpm-workspace.yaml
└── README.md
```

## Quick Start

### Prerequisites

- Node.js >= 18.17.1
- pnpm >= 9.0.0

### Installation

```bash
# Install pnpm if not already installed
npm install -g pnpm

# Install all dependencies
pnpm install
```

### Development

```bash
# Run all apps simultaneously
pnpm dev

# Run specific app
pnpm dev:freelance    # Port 4321
pnpm dev:portfolio    # Port 4322
pnpm dev:blog         # Port 4323
```

### Build

```bash
# Build all apps
pnpm build

# Build specific app
pnpm build:freelance
pnpm build:portfolio
pnpm build:blog
```

## Cloudflare Pages Deployment

### Option 1: GitHub Integration (Recommended)

1. Push your repository to GitHub
2. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/) → Pages
3. Click "Create a project" → "Connect to Git"
4. Select your repository
5. Configure build settings:

#### For `freelance` (ludevgarcia.com):

| Setting | Value |
|---------|-------|
| Framework preset | Astro |
| Build command | `pnpm --filter @ludev/freelance build` |
| Build output directory | `apps/freelance/dist` |
| Root directory | `/` |

#### For `portfolio` (portfolio.ludevgarcia.com):

| Setting | Value |
|---------|-------|
| Framework preset | Astro |
| Build command | `pnpm --filter @ludev/portfolio build` |
| Build output directory | `apps/portfolio/dist` |
| Root directory | `/` |

#### For `blog` (blog.ludevgarcia.com):

| Setting | Value |
|---------|-------|
| Framework preset | Astro |
| Build command | `pnpm --filter @ludev/blog build` |
| Build output directory | `apps/blog/dist` |
| Root directory | `/` |

#### For `linkme` (links.ludevgarcia.com):

| Setting | Value |
|---------|-------|
| Framework preset | Astro |
| Build command | `pnpm --filter @ludev/linkme build` |
| Build output directory | `apps/linkme/dist` |
| Root directory | `/` |

6. Add environment variable:
   - `NODE_VERSION` = `20`

7. Click "Save and Deploy"

### Option 2: Direct Upload

```bash
# Build the specific app
pnpm build:freelance

# Install wrangler globally
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Deploy (first time - creates project)
wrangler pages deploy apps/freelance/dist --project-name ludevgarcia

# Subsequent deployments
wrangler pages deploy apps/freelance/dist --project-name ludevgarcia
```

### Custom Domain Setup

1. In Cloudflare Pages project settings, go to "Custom domains"
2. Add your domain (e.g., `ludevgarcia.com`)
3. If domain is already on Cloudflare, it will auto-configure DNS
4. If not, add the provided CNAME record to your DNS

## Tech Stack

- **Framework**: [Astro](https://astro.build) v5.x
- **Output**: Static (SSG) - no server required
- **Hosting**: [Cloudflare Pages](https://pages.cloudflare.com)
- **Package Manager**: pnpm with workspaces

## Features

- ✅ Clean URLs (no `.html` extensions)
- ✅ SEO meta tags (Open Graph, Twitter Cards)
- ✅ Auto-generated sitemap.xml
- ✅ robots.txt included
- ✅ Dark mode support
- ✅ Responsive design
- ✅ 100% static output (no SSR)
- ✅ Cloudflare Pages compatible

## Apps Overview

### Freelance (`apps/freelance`)

Main professional site at `ludevgarcia.com`. Features:
- Hero section with stats
- Services overview
- Project showcase
- Contact information

### Portfolio (`apps/portfolio`)

Personal portfolio at `portfolio.ludevgarcia.com`. Features:
- Coming soon

### Blog (`apps/blog`)

Technical blog at `blog.ludevgarcia.com`. Features:
- MDX support
- Coming soon

## Shared Packages

### UI (`packages/ui`)

Shared UI components and design tokens:
- Button styles
- Color tokens
- Typography scale
- Spacing system

### SEO (`packages/seo`)

SEO utilities:
- Meta tag generation
- Open Graph helpers
- Twitter Card helpers
- JSON-LD schema generation
- Sitemap utilities

## License

MIT
