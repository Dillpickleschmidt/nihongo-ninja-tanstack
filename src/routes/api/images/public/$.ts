import { createFileRoute } from "@tanstack/solid-router"
import { env } from "cloudflare:workers"
import { chooseOutputFormat } from "@/features/images/format"
import { imageWidthQuerySchema } from "@/features/images/validation"

export const Route = createFileRoute("/api/images/public/$")({
  server: {
    handlers: {
      GET: async ({ request, params }) => {
        const src = params._splat
        if (!src) return new Response("Invalid path", { status: 400 })

        const url = new URL(request.url)
        const { w: width } = imageWidthQuerySchema.parse({
          w: url.searchParams.get("w") ?? undefined,
        })

        // Fetch the raw asset from the same origin (Vite static in dev,
        // static asset server in prod). `new URL(...)` handles path encoding.
        const assetUrl = new URL(`/${src}`, url.origin)
        // Refuse paths that would re-enter our own Worker (`/api/*`), which
        // would otherwise add a round-trip per nesting level.
        if (assetUrl.pathname.startsWith("/api/")) {
          return new Response("Invalid path", { status: 400 })
        }
        const source = await fetch(assetUrl)
        if (!source.ok || !source.body) {
          return new Response("Not found", { status: 404 })
        }

        const format = chooseOutputFormat(
          request.headers.get("accept"),
          source.headers.get("content-type") ?? "image/jpeg",
        )

        const result = await env.IMAGES
          .input(source.body)
          .transform({ width, fit: "scale-down" })
          .output({ format, quality: 80 })

        return new Response(result.response().body, {
          headers: {
            "Content-Type": result.contentType(),
            "Cache-Control": "public, max-age=31536000, immutable",
            Vary: "Accept",
          },
        })
      },
    },
  },
})
