---
title: "FiniquitoRD"
description: "Plataforma de Inteligencia y Documentación Laboral para República Dominicana."
tags: ["Next.js", "Cloudflare D1", "Tailwind CSS", "TypeScript"]
img: "/assets/projects/finiquitord/finiquitord.jpeg"
publishDate: 2024-01-15
link: "https://finiquitord.com"
---

## Visión General

**FiniquitoRD** es una plataforma SaaS (Software as a Service) especializada en la automatización, cálculo y generación de documentación legal para la terminación de contratos laborales en la República Dominicana.

La plataforma soluciona un problema crítico para contadores, abogados y departamentos de RR.HH.: la complejidad y el riesgo legal asociado al cálculo manual de prestaciones laborales bajo la Ley 16-92. FiniquitoRD digitaliza este proceso garantizando precisión matemática, cumplimiento legal y trazabilidad auditoria.

## El Desafío Técnico

El reto principal fue transformar un proceso manual propenso a errores en un estándar de industria fiable y verificable. No se trataba solo de "hacer el cálculo", sino de proveer una **infraestructura de confianza** que valide dicho cálculo ante terceros (empleados, ministerios, abogados), asegurando la inmutabilidad de los registros y el cumplimiento de los divisores oficiales (23.83/mes).

## Mi Solución

Desarrollé una arquitectura **"Edge-First"** optimizada para la integridad de datos y auditoría, asegurando que el sistema no sea una "caja negra".

### Soluciones Clave
- **Motor de Cálculo Estandarizado**: Implementación algorítmica de los artículos 80-82, 76 y 177+ del Código de Trabajo con justificación legal desglosada.
- **Validación Pública vía QR**: Cada documento generado incluye un QR que actúa como endpoint de verificación pública, mostrando estatus, fecha y hash de integridad para evitar falsificaciones.
- **Gestión Multi-Tenant Real**: Aislamiento total de datos entre empresas, permitiendo a contadores gestionar múltiples clientes sin riesgos de seguridad.
- **Fuente de Verdad Inmutable**: Los resultados se "congelan" en la base de datos (Cloudflare D1) asegurando que los cálculos históricos permanezcan intactos aunque la ley cambie.

### Stack Tecnológico
- **Frontend**: Next.js 15 (App Router), Tailwind CSS v4, React Hook Form, Zod
- **Backend/DB**: Cloudflare D1 (SQLite), Drizzle ORM, OpenNext
- **Infraestructura**: Cloudflare Pages (Edge Networks)
- **Generación de Documentos**: @react-pdf/renderer para PDFs legales estandarizados
