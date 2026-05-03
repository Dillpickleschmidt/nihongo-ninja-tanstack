import { z } from "zod"

export const IMAGE_ID_PREFIX = "img_"

const ALLOWED_PRIVATE_IMAGE_CONTENT_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/avif",
  "image/gif",
] as const

const contentTypeSchema = z
  .string()
  .refine(
    (value) =>
      (ALLOWED_PRIVATE_IMAGE_CONTENT_TYPES as readonly string[]).includes(value),
    { message: "Unsupported image type." },
  )

const imageIdSchema = z
  .string()
  .startsWith(IMAGE_ID_PREFIX, "Invalid image id.")

export const MAX_PRIVATE_IMAGE_UPLOAD_BYTES = 10 * 1024 * 1024

export const uploadImageHeadersSchema = z.object({
  contentType: contentTypeSchema,
  sourceWidth: z
    .number()
    .refine((v) => Number.isFinite(v) && v > 0, { message: "Invalid image width." })
    .transform((v) => Math.round(v)),
})

export const privateImageRouteParamsSchema = z.object({
  imageId: imageIdSchema,
})

export const imageWidthQuerySchema = z.object({
  w: z.coerce
    .number()
    .finite()
    .positive()
    .transform((value) => Math.max(1, Math.round(value))),
})
