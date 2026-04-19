### Local setup

1. Copy `.env.example` to `.env.local`.
2. Install dependencies: `bun install`
3. In one terminal:
   - `bunx convex dev`
4. In another terminal:
   - `bun run dev`

If needed, set Convex auth env vars:

- `bunx convex env set SITE_URL http://localhost:3000/`
- `bunx convex env set BETTER_AUTH_SECRET=$(openssl rand -base64 32)`

### Background images (R2 flow)

- Built-in backgrounds: files in `public/`, transformed by `/api/images/public/*` using the Worker `IMAGES` binding.
- Uploaded backgrounds: posted to `/api/images/upload`, stored as private R2 objects, and served via `/api/images/private/:imageId`.

Setup:

1. (Optional) Change `bucket_name` in `wrangler.jsonc` to your preferred R2 bucket name. Default: `nihongo-ninja-image-uploads`.
2. Create the bucket in your Cloudflare account: `bunx wrangler r2 bucket create <bucket_name>`.
3. Enable **Image Transformations** on the Cloudflare zone (dashboard only). Required for the `IMAGES` binding; local dev proxies to it via `remote: true` in `wrangler.jsonc`.
4. Run the app with `bunx convex dev` and `bun run dev`.
