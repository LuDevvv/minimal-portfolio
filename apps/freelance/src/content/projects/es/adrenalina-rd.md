---
title: "AdrenalinaRD"
description: "Plataforma de alta demanda para gestión de rifas online con más de 10k usuarios concurrentes."
tags: ["React", "Node.js", "Express", "MySQL", "AWS S3", "Stripe"]
img: "/assets/projects/adrenalinard/adrenalina_6.jpeg"
publishDate: 2024-09-01
link: "#"
---

## Visión General

Transformé la manera de organizar sorteos digitales en República Dominicana. **AdrenalinaRD** no es solo una página de rifas; es una infraestructura robusta diseñada para soportar picos de tráfico masivos durante eventos en vivo, garantizando transparencia y estabilidad cuando más importa.

## El Desafío Técnico

El cliente necesitaba una solución capaz de escalar instantáneamente. Durante los sorteos en vivo, el tráfico pasaba de 0 a 10,000 usuarios en segundos.

### Puntos Críticos Resueltos
- **Concurrencia Extrema**: Evitar caídas del servidor durante la venta masiva de boletos.
- **Integridad de Datos**: Asegurar que no se vendieran boletos duplicados en milisegundos.
- **Transparencia**: Sistema de selección de ganadores auditable y visible.

## Mi Solución

Diseñé y desarrollé una arquitectura *full-stack* optimizada para el rendimiento:

- **Backend en Node.js & Express**: Implementé colas de procesamiento para manejar transacciones sin bloquear el servidor principal.
- **Base de Datos MySQL Optimizada**: Índices estratégicos y transacciones ACID para garantizar la integridad financiera de cada boleto vendido.
- **AWS S3**: Almacenamiento eficiente de assets y multimedia promocional.
- **Soporte Multicanal**: Panel administrativo responsivo que permite gestionar el evento desde el móvil en tiempo real.

## Impacto en el Negocio

La plataforma permitió al cliente automatizar el 100% de su flujo de trabajo:
- **Gestión Automatizada**: Desde la creación de la rifa hasta la selección del ganador y el cobro.
- **Experiencia de Usuario**: Compra de boletos en < 3 clics y seguimiento en tiempo real.
- **Cero Downtime**: Soportó exitosamente múltiples eventos de alto perfil sin interrupciones.

### Stack Tecnológico
- **Frontend**: React (UX fluida y rápida)
- **Backend**: Node.js + Express (API RESTful de alto rendimiento)
- **Base de Datos**: MySQL (Consistencia de datos)
- **Infraestructura**: AWS S3 + Integración de Pagos
