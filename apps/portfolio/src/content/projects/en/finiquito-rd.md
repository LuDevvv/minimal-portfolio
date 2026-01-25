---
title: "FiniquitoRD"
description: "Labor Intelligence and Documentation Platform for the Dominican Republic."
tags: ["Next.js", "Cloudflare D1", "Tailwind CSS", "TypeScript"]
img: "/assets/projects/finiquitord/finiquitord.jpeg"
publishDate: 2024-01-15
link: "https://finiquitord.com"
---

## Overview

**FiniquitoRD** is a SaaS (Software as a Service) platform specialized in automating, calculating, and generating legal documentation for employment contract terminations in the Dominican Republic.

The platform solves a critical problem for accountants, lawyers, and HR departments: the complexity and legal risk associated with manually calculating labor benefits under Law 16-92. FiniquitoRD digitalizes this process, guaranteeing mathematical precision, legal compliance, and audit traceability.

## The Technical Challenge

The main challenge was transforming an error-prone manual process into a reliable and verifiable industry standard. It wasn't just about "doing the math," but providing a **trusted infrastructure** that validates said calculation before third parties (employees, ministries, lawyers), ensuring record immutability and compliance with official divisors (23.83/month).

## My Solution

I developed an **"Edge-First"** architecture optimized for data integrity and auditing, ensuring the system isn't a "black box."

### Key Solutions
- **Standardized Calculation Engine**: Algorithmic implementation of Labor Code articles 80-82, 76, and 177+ with detailed legal justification.
- **Public Validation via QR**: Each generated document includes a QR code acting as a public verification endpoint, showing status, timestamp, and integrity hash to prevent forgery.
- **Real Multi-Tenant Management**: Total data isolation between companies, allowing accountants to manage multiple clients without security risks.
- **Immutable Source of Truth**: Results are "frozen" in the database (Cloudflare D1), ensuring historical calculations remain intact even if laws change.

### Tech Stack
- **Frontend**: Next.js 15 (App Router), Tailwind CSS v4, React Hook Form, Zod
- **Backend/DB**: Cloudflare D1 (SQLite), Drizzle ORM, OpenNext
- **Infrastructure**: Cloudflare Pages (Edge Networks)
- **Document Generation**: @react-pdf/renderer for standardized legal PDFs
