import { z } from "zod"
import { UPLOAD_IMAGE_CONTENT_TYPES } from "./image-constants"

export const IMAGE_ID_PREFIX = "img_"

const contentTypeSchema = z
  .string()
  .refine(
    (value) =>
      (UPLOAD_IMAGE_CONTENT_TYPES as readonly string[]).includes(value),
    { message: "Unsupported image type." },
  )

const imageIdSchema = z
  .string()
  .startsWith(IMAGE_ID_PREFIX, "Invalid image id.")

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
