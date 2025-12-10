### Guide

Rename .env.example to .env.local

Run

- `bun install`
- `bunx convex dev`
- `bunx convex env set SITE_URL http://localhost:3000/`
- `bunx convex env set BETTER_AUTH_SECRET=$(openssl rand -base64 32)`
- `bunx convex dev` - takes up one terminal

In a separate terminal run

- `bun run dev`
