---
title: "Azteli"
description: "Plataforma integral de menús digitales diseñada para potenciar la experiencia del cliente y optimizar operaciones."
tags: ["React 19", "Next.js", "NestJS", "PostgreSQL", "Docker", "Astro", "TypeScript"]
img: "/assets/projects/menudigital/menu_digital.jpeg"
publishDate: 2023-08-01
link: "#"
---

## Visión General

**Azteli** es un ecosistema completo para la gestión de menús digitales que transforma la operación de restaurantes y cafeterías. La plataforma permite a los establecimientos crear, administrar y distribuir menús profesionales e interactivos, superando las limitaciones de las soluciones tradicionales en papel y estáticas.

## El Desafío

La industria gastronómica enfrenta ineficiencias con menús físicos: altos costos de impresión, dificultad para actualizar precios o inventario y falta de datos sobre las preferencias de los clientes. Azteli busca resolver estos problemas centralizando la gestión y mejorando la experiencia del comensal.

### Objetivos Clave
- **Gestión Centralizada**: Control total de múltiples sucursales desde un único dashboard.
- **Experiencia de Usuario**: Interfaces fluidas y atractivas para clientes y administradores.
- **Arquitectura Escalable**: Sistema modular capaz de crecer con el negocio.

## Mi Solución

Diseñé una plataforma basada en una arquitectura de monorepo moderna, separando las responsabilidades en aplicaciones especializadas:

- **Ecosistema de Aplicaciones**: 
    - **Customer App (Next.js)**: Menú digital optimizado para móviles con navegación fluida.
    - **Admin Dashboard (Vite + React)**: Panel de control integral para gestión de productos, analíticas y configuración de sucursales.
    - **Landing Page (Astro)**: Sitio de marketing optimizado para SEO y conversión.
- **Backend Robusto**: API en **NestJS** con **PostgreSQL** y **TypeORM** para manejar la lógica de negocio, autenticación segura y persistencia de datos.
- **Librerías Compartidas**: Paquetes internos y SDKs en TypeScript para mantener consistencia y agilizar el desarrollo.

## Impacto

- **Operaciones Optimizadas**: Actualizaciones en tiempo real eliminan errores y costos de reimpresión.
- **Toma de Decisiones**: Analíticas integradas permiten entender tendencias de consumo.
- **Flexibilidad**: Soporte para múltiples sucursales y personalización por ubicación.

### Stack Tecnológico
- **Frontend**: React 19, Next.js, Vite, Astro, TailwindCSS
- **Backend**: NestJS, TypeORM, PostgreSQL
- **Infraestructura**: Docker (Contenedorización)
- **Herramientas**: Nx (Monorepo), Zod, Zustand
