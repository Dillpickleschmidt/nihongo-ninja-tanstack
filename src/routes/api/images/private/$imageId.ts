import { createFileRoute } from "@tanstack/solid-router"
import { env } from "cloudflare:workers"
import { api } from "../../../../../convex/_generated/api"
import { fetchAuthenticatedConvexQuery } from "@/lib/auth-server"
import { chooseOutputFormat } from "@/features/images/format"
import {
  imageWidthQuerySchema,
  privateImageRouteParamsSchema,
} from "@/features/images/validation"

export const Route = createFileRoute("/api/images/private/$imageId")({
  server: {
    handlers: {
      GET: async ({ request, params }) => {
        const routeParams = privateImageRouteParamsSchema.safeParse(params)
        if (!routeParams.success) {
          return new Response("Invalid image id", { status: 400 })
        }

        // 404 (not 401) on missing/unowned to avoid leaking image existence.
        const asset = await fetchAuthenticatedConvexQuery(
          api.api.images.getOwnedImageAsset,
          { imageId: routeParams.data.imageId },
        )
        if (!asset) return new Response("Not found", { status: 404 })

        const url = new URL(request.url)
        const { w } = imageWidthQuerySchema.parse({
          w: url.searchParams.get("w") ?? undefined,
        })
        const format = chooseOutputFormat(
          request.headers.get("accept"),
          asset.contentType,
        )

        const object = await env.IMAGE_UPLOADS_BUCKET.get(asset.storageKey)
        if (!object?.body) {
          return new Response("Not found", { status: 404 })
        }

        const result = await env.IMAGES
          .input(object.body)
          .transform({ width: w, fit: "scale-down" })
          .output({ format, quality: 80 })

        return new Response(result.response().body, {
          headers: {
            "Content-Type": result.contentType(),
            ETag: asset.objectEtag,
            "Cache-Control": "private, max-age=31536000, immutable",
            Vary: "Accept",
          },
        })
      },
    },
  },
})
