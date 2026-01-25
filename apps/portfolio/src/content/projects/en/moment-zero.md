---
title: "Moment Zero"
description: "Web application to capture, preserve, and share text-based time capsules with ambient sound."
tags: ["Next.js 15", "Cloudflare D1", "OpenNext", "Tailwind CSS v4"]
img: "/assets/projects/momentzero/moment-zero.jpeg"
publishDate: 2026-01-24
link: "#"
---

## Overview

**Moment Zero** is a web application designed to capture thoughts and reflections as text-based time capsules. The project combines a minimalist interface with ambient sound to offer a space of calm, allowing users to save these moments for themselves or easily share them via a unique link.

## The Problem

We often want to save a thought, an idea, or a message to be read at a specific time in the future, but traditional notes lack emotion and temporal context. There was a need for a simple tool that allows "sending a message to the future" intentionally.

## Solution

Moment Zero allows you to create **"Moments"**: personal notes with a scheduled opening date. The experience is enriched with countdown timers and ambient audio to emotionally connect with the memory. These moments can be stored locally or shared with anyone via a direct link.

### Key Features

- **Text Capsules**: Creation of notes and reflections with scheduled opening dates.
- **Share via Link**: Generate unique links so others can access the "moment" (if you choose to share it).
- **Atmospheric Experience**: Polished visual design and ambient audio using Web Audio API.
- **Local Privacy**: Data persists on your device (IndexedDB) by default, with optional synchronization.

### Technical Architecture

The system uses a modern hybrid design deployed on the Edge:

- **Core**: Next.js 15 (App Router) and React 19 for performance and server components.
- **Infrastructure**: OpenNext on Cloudflare Workers for global serverless computing.
- **Database**: Cloudflare D1 (Edge SQLite) managed with Drizzle ORM.
- **UI/UX**: Tailwind CSS v4 for styling, Framer Motion for fluid animations, and Sonner for notifications.
- **State & Validation**: Zustand for local state management and Zod for strict type validation.
