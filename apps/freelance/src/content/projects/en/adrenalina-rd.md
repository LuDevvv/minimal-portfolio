---
title: "AdrenalinaRD"
description: "High-demand online raffle platform handling 10k+ concurrent users with zero downtime."
tags: ["React", "Node.js", "Express", "MySQL", "AWS S3", "Stripe"]
img: "/assets/projects/adrenalinard/adrenalina_6.jpeg"
publishDate: 2024-09-01
link: "#"
---

## Overview

I transformed digital raffle management in the Dominican Republic. **AdrenalinaRD** is not just a raffle site; it's a robust infrastructure designed to withstand massive traffic spikes during live events, ensuring transparency and stability when it matters most.

## The Technical Challenge

The client needed a solution capable of instant scaling. During live draws, traffic surged from 0 to 10,000 users in seconds.

### Critical Points Solved
- **Extreme Concurrency**: Preventing server crashes during massive ticket sales.
- **Data Integrity**: Ensuring no duplicate tickets were sold within milliseconds.
- **Transparency**: Auditable and visible winner selection system.

## My Solution

I designed and developed a performance-optimized *full-stack* architecture:

- **Node.js & Express Backend**: Implemented processing queues to handle transactions without blocking the main server.
- **Optimized MySQL Database**: Strategic indexing and ACID transactions to ensure financial integrity of every ticket sold.
- **AWS S3**: Efficient storage for promotional assets.
- **Omnichannel Support**: Responsive admin dashboard allowing real-time event management from mobile.

## Business Impact

The platform allowed the client to automate 100% of their workflow:
- **Automated Management**: From raffle creation to winner selection and payment collection.
- **User Experience**: Ticket purchase in < 3 clicks and real-time tracking.
- **Zero Downtime**: Successfully supported multiple high-profile events without interruptions.

### Tech Stack
- **Frontend**: React (Fluid and fast UX)
- **Backend**: Node.js + Express (High-performance RESTful API)
- **Database**: MySQL (Data consistency)
- **Infrastructure**: AWS S3 + Payment Integration
