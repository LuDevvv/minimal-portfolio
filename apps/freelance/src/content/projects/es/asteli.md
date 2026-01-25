---
title: "Menu Digital - Azteli"
description: "Plataforma SaaS para la digitalización y gestión dinámica de menús gastronómicos."
tags: ["NestJS", "Next.js", "Railway", "Cloudinary"]
img: "/assets/projects/menudigital/menu_digital.jpeg"
publishDate: 2023-08-01
link: "#"
---

## Visión General

**Azteli** es una solución SaaS que democratiza la tecnología para restaurantes locales. Desarrollé esta plataforma para permitir a cualquier negocio gastronómico, sin importar su tamaño, crear, personalizar y gestionar un menú digital profesional en minutos, eliminando la dependencia de diseñadores gráficos para cambios menores de precios o stock.

## El Desafío Técnico

Crear un sistema que fuera lo suficientemente flexible para distintos tipos de menús (comida rápida, alta cocina, cafetería) pero extremadamente simple de usar para usuarios no técnicos.

### Requerimientos Clave
- **Gestión en Tiempo Real**: Cambios de precio y disponibilidad reflejados instantáneamente en los QR de los clientes.
- **Escalabilidad**: Soportar múltiples inquilinos (tenants) con catálogos de imágenes pesados.
- **Velocidad**: El menú debe cargar instantáneamente en redes móviles 4G.

## Mi Solución

Arquitectura basada en microservicios y nube para garantizar disponibilidad y rapidez:

- **Next.js & CSS Modules**: Frontend ultra-ligero enfocado en Mobile-First, ya que el 99% de los usuarios acceden desde smartphones vía QR.
- **NestJS Backend**: API robusta y tipada para manejar la lógica de negocio, autenticación y gestión de inventario.
- **Cloudinary**: Optimización automática de imágenes de platos para reducir el peso sin perder apetito visual.
- **Railway**: Despliegue continuo y base de datos gestionada para alta disponibilidad.

## Impacto en el Negocio

- **Autonomía Total**: Los dueños de restaurantes redujeron a 0 sus costos recurrentes de rediseño de menú.
- **Eficiencia Operativa**: La actualización instantánea de "platos agotados" redujo las quejas de clientes en sala.
- **Adopción**: La interfaz intuitiva permitió un onboarding rápido con una curva de aprendizaje mínima para el personal.

### Stack Tecnológico
- **Frontend**: Next.js (SSR para SEO), CSS modular
- **Backend**: NestJS (TypeScript), PostgreSQL
- **Infraestructura**: Railway, Cloudinary
