# Settings Component Architecture

## Overview

Settings page includes service integrations (Anki, WaniKani, jpdb) with a clear 2-section structure.

## Two-Section Structure

### Section 1: Nihongo Ninja (Built-in FSRS)
Use Nihongo Ninja's built-in spaced repetition system with optional one-time imports from external services:
- **Import from Anki**: One-time import of review history
- **Import from WaniKani**: One-time import of review history
- **Import from JPDB**: One-time import of review history (requires file upload)

These imports bring your existing review data into Nihongo Ninja's SRS without affecting your data on the external service.

### Section 2: Live External Service Connection
Connect to an external SRS service for real-time syncing. Only one service can be active at a time:
- **Anki (Live)**: Uses AnkiConnect plugin for local desktop integration. Requires Anki desktop app running. No credentials stored (client-side only).
- **WaniKani (Live)**: Standard API key integration for real-time access.
- **JPDB (Live)**: API key integration for deck previews and limited features.

## State Management

- User preferences stored in database with cookie fallback
- Service switching validated before activation (API key check, connection test)
- Import status tracked separately from live connection status

## Service-Specific Notes

- **Anki**: Uses AnkiConnect plugin. Supports both PC (AnkiConnect) and Android (AnkiConnect Android). Requires CORS configuration.
- **WaniKani**: API key stored in HttpOnly cookie. Not yet fully implemented for live mode.
- **JPDB**: API key required for both import and live mode. Import uses file upload with validation dialog.

## Adding New Services

1. Add service type to user-settings schema
2. Add import card to Section 1 in ServiceIntegrationsSection.tsx
3. Add live connection UI to Section 2 in LiveServiceSelector.tsx
4. Implement service adapter in srs-services/adapters/
