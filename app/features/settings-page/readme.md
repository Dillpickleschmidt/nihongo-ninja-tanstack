# Settings Component Architecture

## Overview

Settings page includes service integrations (Anki, WaniKani, jpdb) with flexible import options.

## Service Modes

Each service has 3 modes:

- disabled: Service not in use
- live: Real-time API access to external service (continue using their SRS, do reviews from Nihongo Ninja)
- imported: One-time data import to switch to our SRS system

## State Management

- servicesState: Actual server state (connected/disconnected, has_api_key, etc.)
- selectedModes: User's UI selections (may differ from server state)
- Mode changes update UI immediately, then sync with server

## Service-Specific Notes

- Anki: Uses username/password which eventually returns an API key. File upload coming soon.
- WaniKani: Standard API key integration. File upload coming soon.
- jpdb: Has file upload as alternative import method (API or file upload). Live mode limited to deck previews only (no external reviews) due to jpdb api kanji review restrictions.

## Adding New Services

1. Add service type to serviceTypes.ts
2. Create new service card component
3. Add to ServiceIntegrationsSection.tsx
