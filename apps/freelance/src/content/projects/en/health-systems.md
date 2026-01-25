---
title: "Health Systems"
description: "Comprehensive hospital management system for modern private clinics."
tags: ["React", ".NET Core", "SQL Server", "Azure", "Docker"]
img: "/assets/projects/health-systems/dashboard.png"
publishDate: 2023-11-10
link: "#"
---

## Overview

**Health Systems** is a robust ERP solution designed for mid-sized clinics looking to digitize operations without the complexity of legacy software. The goal was to centralize patient management, billing, and medical records into a single secure and fast interface.

## The Technical Challenge

Migrating paper-based processes to digital without disrupting critical clinic operations. Data availability and consistency were non-negotiable.

### Implemented Architecture
- **Modular Monolith**: Opted for a modular monolith architecture in .NET Core to ease deployment and maintenance, allowing for future microservices separation if needed.
- **Reactive Frontend**: React dashboard optimized for high-information-density screens, allowing doctors to view complete histories without infinite scrolling.
- **Regulatory Compliance**: Full log auditing and granular security roles to comply with health privacy regulations.

## Operational Impact

- **Wait Time Reduction**: Patient admission time was reduced by 40% thanks to the new digital check-in flow.
- **Zero Billing Errors**: Automatic integration between procedures performed and billing eliminated financial discrepancies.

### Tech Stack
- **Frontend**: React, Redux Toolkit, Material UI
- **Backend**: .NET Core 8 Web API
- **Database**: SQL Server 2022
- **DevOps**: Docker, Azure App Service
