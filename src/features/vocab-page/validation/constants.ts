import { z } from "zod"

export const NAME_MIN_LENGTH = 1
export const NAME_MAX_LENGTH = 80
export const DECK_NAME_MAX_LENGTH = 100
export const DESCRIPTION_MAX_LENGTH = 500

// Base Zod schemas for reuse
export const RequiredStringSchema = z.string().min(1, "This field is required")

export const NonEmptyStringArraySchema = z
  .array(z.string())
  .min(1, "At least one item is required")
  .refine(
    (arr) => arr.some((item) => item.trim().length > 0),
    "At least one item must not be empty",
  )
