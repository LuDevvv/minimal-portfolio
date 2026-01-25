---
title: "Digital Menu - Azteli"
description: "SaaS platform for the dynamic digitization and management of gastronomic menus."
tags: ["NestJS", "Next.js", "Railway", "Cloudinary"]
img: "/assets/projects/menudigital/menu_digital.jpeg"
publishDate: 2023-08-01
link: "#"
---

## Overview

**Azteli** is a SaaS solution democratizing technology for local restaurants. I developed this platform to allow any food business, regardless of size, to create, customize, and manage a professional digital menu in minutes, eliminating reliance on graphic designers for minor price or stock changes.

## The Technical Challenge

Creating a system flexible enough for different menu types (fast food, fine dining, cafes) but extremely simple for non-technical users to utilize.

### Key Requirements
- **Real-Time Management**: Price and availability changes reflected instantly on customer QRs.
- **Scalability**: Supporting multiple tenants with heavy image catalogs.
- **Speed**: Menus must load instantly on mobile 4G networks.

## My Solution

Microservices and cloud-based architecture to ensure availability and speed:

- **Next.js & CSS Modules**: Ultra-lightweight Mobile-First frontend, as 99% of users access via smartphone QR codes.
- **NestJS Backend**: Robust typed API to handle business logic, authentication, and inventory management.
- **Cloudinary**: Automatic optimization of food images to reduce size without losing visual appeal.
- **Railway**: Continuous deployment and managed database for high availability.

## Business Impact

- **Total Autonomy**: Restaurant owners reduced their recurring menu redesign costs to zero.
- **Operational Efficiency**: Instant updates of "out of stock" items reduced customer complaints in the dining room.
- **Adoption**: The intuitive interface allowed for rapid onboarding with minimal learning curve for staff.

### Tech Stack
- **Frontend**: Next.js (SSR for SEO), modular CSS
- **Backend**: NestJS (TypeScript), PostgreSQL
- **Infrastructure**: Railway, Cloudinary
