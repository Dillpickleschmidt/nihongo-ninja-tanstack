export const IMAGE_VARIANT_FORMATS = ["avif", "webp"] as const
export type ImageVariantFormat = (typeof IMAGE_VARIANT_FORMATS)[number]

export const GENERATED_IMAGE_EXTENSIONS = [
  ".jpg",
  ".jpeg",
  ".png",
  ".webp",
  ".avif",
] as const

export const UPLOAD_IMAGE_CONTENT_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/avif",
  "image/gif",
] as const

export const IMAGE_VARIANT_WIDTHS = [96, 192, 320, 640, 1200, 1920, 2560] as const

export const IMAGE_QUALITY = {
  avif: 55,
  webp: 80,
} as const

export const MAX_PRIVATE_IMAGE_UPLOAD_BYTES = 25 * 1024 * 1024
