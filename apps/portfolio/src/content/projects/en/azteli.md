---
title: "Azteli"
description: "Comprehensive digital menu platform designed to enhance customer experience and streamline operations."
tags: ["React 19", "Next.js", "NestJS", "PostgreSQL", "Docker", "Astro", "TypeScript"]
img: "/assets/projects/menudigital/menu_digital.jpeg"
publishDate: 2023-08-01
link: "#"
---

## Overview

**Azteli** is a complete ecosystem for digital menu management that transforms the operation of restaurants and cafes. The platform empowers establishments to create, manage, and distribute professional and interactive menus, overcoming the limitations of traditional paper and static solutions.

## The Challenge

The food industry faces inefficiencies with physical menus: high printing costs, difficulty updating prices or inventory, and a lack of data on customer preferences. Azteli aims to solve these problems by centralized management and improving the diner's experience.

### Key Objectives
- **Centralized Management**: Total control of multiple branches from a single dashboard.
- **User Experience**: Fluid and attractive interfaces for customers and administrators.
- **Scalable Architecture**: Modular system capable of growing with the business.

## My Solution

I designed a platform based on a modern monorepo architecture, separating responsibilities into specialized applications:

- **App Ecosystem**:
    - **Customer App (Next.js)**: Mobile-optimized digital menu with smooth navigation.
    - **Admin Dashboard (Vite + React)**: Comprehensive control panel for product management, analytics, and branch configuration.
    - **Landing Page (Astro)**: Marketing site optimized for SEO and conversion.
- **Robust Backend**: **NestJS** API with **PostgreSQL** and **TypeORM** to handle business logic, secure authentication, and data persistence.
- **Shared Libraries**: Internal packages and TypeScript SDKs to maintain consistency and speed up development.

## Impact

- **Optimized Operations**: Real-time updates eliminate errors and reprinting costs.
- **Decision Making**: Integrated analytics allow understanding consumption trends.
- **Flexibility**: Support for multiple branches and location-based customization.

### Tech Stack
- **Frontend**: React 19, Next.js, Vite, Astro, TailwindCSS
- **Backend**: NestJS, TypeORM, PostgreSQL
- **Infrastructure**: Docker (Containerization)
- **Tools**: Nx (Monorepo), Zod, Zustand
