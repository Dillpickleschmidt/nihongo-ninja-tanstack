import { createFileRoute } from "@tanstack/solid-router"
import { env } from "cloudflare:workers"
import { api } from "../../../../convex/_generated/api"
import { fetchAuthenticatedConvexMutation, fetchBetterAuthSession } from "@/lib/auth-server"
import {
  IMAGE_ID_PREFIX,
  MAX_PRIVATE_IMAGE_UPLOAD_BYTES,
  uploadImageHeadersSchema,
} from "@/features/images/validation"

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
          return new Response("Image exceeds 10MB limit", { status: 413 })
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
        const storageKey = `private/users/${session.user.id}/images/${imageId}/original`

        const object = await env.IMAGE_UPLOADS_BUCKET.put(storageKey, request.body, {
          httpMetadata: { contentType: parsedHeaders.data.contentType },
        })
        if (!object) {
          return new Response("Upload failed", { status: 500 })
        }

        await fetchAuthenticatedConvexMutation(api.api.images.createImageAsset, {
          imageId,
          storageKey,
          contentType: parsedHeaders.data.contentType,
          sourceWidth: parsedHeaders.data.sourceWidth,
          objectEtag: object.httpEtag,
        })

        return Response.json({ imageId }, { status: 201 })
      },
    },
  },
})
