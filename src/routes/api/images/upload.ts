import { createFileRoute } from "@tanstack/solid-router"
import { env } from "cloudflare:workers"
import { api } from "../../../../convex/_generated/api"
import { fetchAuthenticatedConvexMutation, fetchBetterAuthSession } from "@/lib/auth-server"
import {
  IMAGE_QUALITY,
  IMAGE_VARIANT_FORMATS,
  MAX_PRIVATE_IMAGE_UPLOAD_BYTES,
} from "@/features/images/image-constants"
import { IMAGE_ID_PREFIX, uploadImageHeadersSchema } from "@/features/images/validation"
import { imageVariantWidths } from "@/features/images/variants"

export const Route = createFileRoute("/api/images/upload")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const { session } = await fetchBetterAuthSession(request)
        if (!session) {
          return new Response("Unauthenticated", { status: 401 })
        }

        const contentLength = Number(request.headers.get("content-length"))
        if (!request.body || !Number.isFinite(contentLength) || contentLength <= 0) {
          return new Response("Missing image body", { status: 400 })
        }
        if (contentLength > MAX_PRIVATE_IMAGE_UPLOAD_BYTES) {
          return new Response("Image exceeds 25MB limit", { status: 413 })
        }

        const parsedHeaders = uploadImageHeadersSchema.safeParse({
          contentType: request.headers.get("content-type") ?? "",
          sourceWidth: Number(request.headers.get("x-image-width")),
        })
        if (!parsedHeaders.success) {
          return new Response(parsedHeaders.error.issues[0]?.message ?? "Invalid upload", {
            status: 400,
          })
        }

        const imageId = `${IMAGE_ID_PREFIX}${crypto.randomUUID()}`
        const bytes = await request.arrayBuffer()
        const info = await env.IMAGES.info(bytes)
        const sourceWidth = Math.round(info.width || parsedHeaders.data.sourceWidth)
        const baseKey = `private/users/${session.user.id}/images/${imageId}`

        if (parsedHeaders.data.contentType === "image/gif") {
          const storageKey = `${baseKey}/original.gif`
          const object = await env.IMAGE_UPLOADS_BUCKET.put(storageKey, bytes, {
            httpMetadata: { contentType: "image/gif" },
          })
          if (!object) return new Response("Upload failed", { status: 500 })

          await fetchAuthenticatedConvexMutation(api.api.images.createImageAsset, {
            imageId,
            sourceWidth,
            kind: {
              mediaType: "gif",
              storageKey,
              objectEtag: object.httpEtag,
            },
          })

          return Response.json({ imageId }, { status: 201 })
        }

        const widths = imageVariantWidths(sourceWidth)
        for (const width of widths) {
          for (const format of IMAGE_VARIANT_FORMATS) {
            const result = await env.IMAGES
              .input(bytes)
              .transform({ width, fit: "scale-down" })
              .output({
                format: `image/${format}` as "image/avif" | "image/webp",
                quality: IMAGE_QUALITY[format],
              })
            const response = result.response()
            if (!response.body) return new Response("Upload failed", { status: 500 })
            await env.IMAGE_UPLOADS_BUCKET.put(
              `${baseKey}/variants/${width}.${format}`,
              response.body,
              { httpMetadata: { contentType: `image/${format}` } },
            )
          }
        }

        await fetchAuthenticatedConvexMutation(api.api.images.createImageAsset, {
          imageId,
          sourceWidth,
          kind: { mediaType: "image" },
        })

        return Response.json({ imageId }, { status: 201 })
      },
    },
  },
})
