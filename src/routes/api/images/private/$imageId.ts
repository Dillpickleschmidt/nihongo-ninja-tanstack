import { createFileRoute } from "@tanstack/solid-router"
import { env } from "cloudflare:workers"
import { api } from "../../../../../convex/_generated/api"
import { fetchAuthenticatedConvexQuery } from "@/lib/auth-server"
import {
  imageWidthQuerySchema,
  privateImageRouteParamsSchema,
} from "@/features/images/validation"
import { imageVariantWidths, nearestImageVariantWidth } from "@/features/images/variants"

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

        if (asset.kind.mediaType === "gif") {
          const object = await env.IMAGE_UPLOADS_BUCKET.get(asset.kind.storageKey)
          if (!object?.body) return new Response("Not found", { status: 404 })
          return new Response(object.body, {
            headers: {
              "Content-Type": "image/gif",
              ETag: asset.kind.objectEtag,
              "Cache-Control": "private, max-age=31536000, immutable",
            },
          })
        }

        const url = new URL(request.url)
        const { w } = imageWidthQuerySchema.parse({
          w: url.searchParams.get("w") ?? undefined,
        })
        const width = nearestImageVariantWidth(imageVariantWidths(asset.sourceWidth), w)
        if (!width) return new Response("Not found", { status: 404 })

        const format = request.headers.get("accept")?.includes("image/avif")
          ? "avif"
          : "webp"
        const storageKey = `private/users/${asset.ownerUserId}/images/${asset.imageId}/variants/${width}.${format}`
        const object = await env.IMAGE_UPLOADS_BUCKET.get(storageKey)
        if (!object?.body) return new Response("Not found", { status: 404 })

        return new Response(object.body, {
          headers: {
            "Content-Type": `image/${format}`,
            ETag: object.httpEtag,
            "Cache-Control": "private, max-age=31536000, immutable",
            Vary: "Accept",
          },
        })
      },
    },
  },
})
