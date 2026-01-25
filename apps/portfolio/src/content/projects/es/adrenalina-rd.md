---
title: "AdrenalinaRD"
description: "Plataforma de gestión de rifas en línea enfocada en la seguridad, transparencia y experiencia de usuario."
tags: ["React 18", "Node.js", "Express", "Prisma", "MySQL", "Docker", "UepaPay"]
img: "/assets/projects/adrenalinard/adrenalina_6.jpeg"
publishDate: 2024-09-01
link: "#"
---

## Visión General

**AdrenalinaRD** es una plataforma digital diseñada para modernizar la organización de rifas, proporcionando un entorno seguro y transparente tanto para organizadores como para participantes. El sistema digitaliza el proceso completo, desde la venta de tickets hasta la gestión de pagos y la selección de ganadores, resolviendo la opacidad y complejidad de las rifas manuales tradicionales.

## El Desafío

El mercado tradicional de rifas enfrenta problemas de confianza debido a la falta de transparencia en los sorteos y la dificultad para verificar la autenticidad de los boletos. Además, la gestión manual limita el alcance geográfico y complica el control financiero y la escalabilidad de los eventos.

### Objetivos Clave
- **Transparencia**: Implementar un sistema auditable para la selección de ganadores.
- **Seguridad**: Garantizar la integridad de los pagos y evitar fraudes o duplicidad de boletos.
- **Gestión Integral**: Centralizar el control de ventas, usuarios y sorteos en una sola herramienta.

## Mi Solución

Desarrollé una solución completa con arquitectura cliente-servidor moderna:

- **Plataforma Robusta**: Frontend SPA con **React 18** y Vite para una experiencia de usuario fluida, y un Backend **Node.js/Express** para la lógica de negocio.
- **Gestión de Datos**: Implementación de **Prisma ORM** con **MySQL** para asegurar la integridad relacional de usuarios, tickets y transacciones.
- **Pagos Locales**: Integración segura con **UepaPay** para procesar tarjetas y transferencias en el mercado local.
- **Panel Administrativo**: Dashboard completo para la creación de rifas, monitoreo de ventas en tiempo real y gestión de usuarios y roles.

## Impacto

La plataforma permite a organizaciones y empresas realizar sorteos profesionales con eficiencia:
- **Automatización**: Selección de ganadores y generación de tickets automática.
- **Confianza**: Verificación de tickets y pagos transparente para el usuario final.
- **Accesibilidad**: Diseño responsivo optimizado para móviles y escritorio.

### Stack Tecnológico
- **Frontend**: React 18, Vite, Tailwind CSS, Context API
- **Backend**: Node.js, Express, Prisma ORM, JWT
- **Base de Datos**: MySQL
- **Infraestructura**: Docker (Contenedorización)
- **Pagos**: Integración UepaPay
