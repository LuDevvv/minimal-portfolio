---
title: "FiniquitoRD"
description: "Leading platform for calculating and managing labor benefits in the Dominican Republic."
tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Stripe"]
img: "/assets/projects/finiquito-rd/dashboard.png"
publishDate: 2024-01-15
link: "https://finiquitord.com"
---

## Overview

**FiniquitoRD** simplifies complex Dominican labor laws into an intuitive and precise tool. I designed this SaaS platform to empower both employers and employees, offering instant benefit calculations compliant with the Ministry of Labor, wrapped in a modern, user-friendly UX.

## The Technical Challenge

Translating the Dominican Labor Code into precise algorithms. A single cent of error in a legal calculation can lead to lawsuits.

### Key Solutions
- **Precision Calculation Engine**: Implemented a dedicated utility library (`legal-math`) with exhaustive unit tests to cover every termination, dismissal, and resignation scenario.
- **Legal PDF Generation**: Automated system generating documents ready to sign and file with the ministry.
- **Data Security**: Bank-level encryption for sensitive payroll data using Supabase RLS (Row Level Security).

## Market Impact

- **Rapid Adoption**: +500 active users in the first month of beta launch.
- **Monetization**: Successful Stripe integration for recurring payments (B2B SaaS) and one-time payments (B2C).
- **Authority**: Positioned as the go-to non-governmental tool for labor inquiries.

### Tech Stack
- **Frontend**: Next.js 14, React Hook Form, Zod
- **Backend/DB**: Supabase (PostgreSQL, Auth, Edge Functions)
- **Payments**: Stripe API
- **Infrastructure**: Vercel
