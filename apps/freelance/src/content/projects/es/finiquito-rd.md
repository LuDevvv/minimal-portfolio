---
title: "FiniquitoRD"
description: "Plataforma para el cálculo y gestión de prestaciones laborales en República Dominicana."
tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Stripe"]
img: "/assets/projects/finiquito-rd/dashboard.png"
publishDate: 2024-01-15
link: "https://finiquitord.com"
---

## Visión General

**FiniquitoRD** simplifica la compleja legislación laboral dominicana en una herramienta intuitiva y precisa. Diseñé esta plataforma SaaS para empoderar tanto a empleadores como a empleados, ofreciendo cálculos instantáneos de prestaciones visados por el Ministerio de Trabajo, pero con una UX moderna y amigable.

## El Desafío Técnico

Traducir el Código de Trabajo de la República Dominicana a algoritmos precisos. Un solo centavo de error en un cálculo legal puede significar demandas.

### Soluciones Clave
- **Motor de Cálculo Preciso**: Implementé una librería de utilidades dedicada (`legal-math`) con test unitarios exhaustivos para cubrir cada escenario de despido, desahucio y dimisión.
- **Generación de PDFs Legales**: Sistema automatizado que genera documentos listos para firmar y presentar en el ministerio.
- **Seguridad de Datos**: Encriptación de nivel bancario para datos sensibles de nómina usando RLS (Row Level Security) de Supabase.

## Impacto en el Mercado

- **Adopción Rápida**: +500 usuarios activos en el primer mes de lanzamiento beta.
- **Monetización**: Integración exitosa de Stripe para pagos recurrentes (SaaS B2B) y pagos únicos (B2C).
- **Autoridad**: Posicionado como la herramienta de referencia no gubernamental para consultas laborales.

### Stack Tecnológico
- **Frontend**: Next.js 14, React Hook Form, Zod
- **Backend/DB**: Supabase (PostgreSQL, Auth, Edge Functions)
- **Pagos**: Stripe API
- **Infraestructura**: Vercel
