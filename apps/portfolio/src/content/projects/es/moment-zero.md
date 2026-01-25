---
title: "Moment Zero"
description: "Aplicación web para capturar, preservar y compartir cápsulas de texto con ambientación sonora."
tags: ["Next.js 15", "Cloudflare D1", "OpenNext", "Tailwind CSS v4"]
img: "/assets/projects/momentzero/moment-zero.jpeg"
publishDate: 2026-01-24
link: "#"
---

## Visión General

**Moment Zero** es una aplicación web diseñada para capturar pensamientos y reflexiones en forma de cápsulas temporales de texto. El proyecto combina una interfaz minimalista y ambientación sonora para ofrecer un espacio de calma, permitiendo a los usuarios guardar estos momentos para sí mismos o compartirlos fácilmente mediante un enlace único.

## El Problema

A menudo queremos guardar un pensamiento, una idea o un mensaje para ser leído en un momento específico del futuro, pero las notas tradicionales carecen de emoción y contexto temporal. Hacía falta una herramienta simple que permitiera "enviar un mensaje al futuro" de manera intencional.

## Solución

Moment Zero permite crear **"Moments"**: notas personales con una fecha de apertura programada. La experiencia se enriquece con contadores regresivos y audio ambiental para conectar emocionalmente con el recuerdo. Estos momentos pueden guardarse localmente o compartirse con cualquier persona a través de un enlace directo.

### Características Clave

- **Cápsulas de Texto**: Creación de notas y reflexiones con fechas de apertura programadas.
- **Compartir vía Enlace**: Generación de links únicos para que otros puedan acceder al "momento" (si tú decides compartirlo).
- **Experiencia Atmosférica**: Diseño visual cuidado y audio ambiental usando Web Audio API.
- **Privacidad Local**: Los datos persisten en tu dispositivo (IndexedDB) por defecto, con sincronización opcional.

### Arquitectura Técnica

El sistema utiliza un diseño híbrido y moderno desplegado en el Edge:

- **Core**: Next.js 15 (App Router) y React 19 para rendimiento y server components.
- **Infraestructura**: OpenNext en Cloudflare Workers para serverless computing global.
- **Base de Datos**: Cloudflare D1 (SQLite en el Edge) gestionado con Drizzle ORM.
- **UI/UX**: Tailwind CSS v4 para estilos,  Framer Motion para animaciones fluidas y Sonner para notificaciones.
- **Estado y Validación**: Zustand para gestión de estado local y Zod para validación estricta de tipos.
