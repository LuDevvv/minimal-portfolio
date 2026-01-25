---
title: "Health Systems"
description: "Sistema integral de gestión hospitalaria para clínicas privadas modernas."
tags: ["React", ".NET Core", "SQL Server", "Azure", "Docker"]
img: "/assets/projects/health-systems/dashboard.png"
publishDate: 2023-11-10
link: "#"
---

## Visión General

**Health Systems** es una solución ERP robusta diseñada para clínicas de tamaño medio que buscan digitalizar sus operaciones sin la complejidad de los softwares legacy. El objetivo era centralizar la gestión de pacientes, facturación y registros médicos en una sola interfaz segura y rápida.

## El Desafío Técnico

Migrar procesos basados en papel a digital sin interrumpir la operación crítica de la clínica. La disponibilidad y la consistencia de los datos eran no-negociables.

### Arquitectura Implementada
- **Monolito Modular**: Opté por una arquitectura de monolito modular en .NET Core para facilitar el despliegue y mantenimiento, permitiendo futura separación en microservicios si fuese necesario.
- **Frontend Reactivo**: Dashboard en React optimizado para pantallas de alta densidad de información, permitiendo a los doctores ver historiales completos sin scroll infinito.
- **Cumplimiento Normativo**: Auditoría completa de logs y roles de seguridad granulares para cumplir con normativas de privacidad de salud.

## Impacto Operativo

- **Reducción de Espera**: El tiempo de admisión de pacientes se redujo en un 40% gracias al nuevo flujo de check-in digital.
- **Cero Errores de Facturación**: La integración automática entre procedimientos realizados y facturación eliminó las discrepancias financieras.

### Stack Tecnológico
- **Frontend**: React, Redux Toolkit, Material UI
- **Backend**: .NET Core 8 Web API
- **Base de Datos**: SQL Server 2022
- **DevOps**: Docker, Azure App Service
