// Common validation utilities and constants
import { z } from "zod"

// Validation constants
export const VALIDATION_RULES = {
  NAME_MIN_LENGTH: 1,
  NAME_MAX_LENGTH: 80,
  DECK_NAME_MAX_LENGTH: 100,
  DESCRIPTION_MAX_LENGTH: 500,
} as const

// Common validation result types
export interface ValidationResult {
  isValid: boolean
  error?: string
}

export interface ValidationError {
  field: string
  message: string
  itemId?: number
}

// Base Zod schemas for reuse
export const RequiredStringSchema = z.string().min(1, "This field is required")

export const OptionalStringSchema = z.string().optional()

export const NonEmptyStringArraySchema = z
  .array(z.string())
  .min(1, "At least one item is required")
  .refine(
    (arr) => arr.some((item) => item.trim().length > 0),
    "At least one item must not be empty",
  )

// Name validation (used by both decks and folders)
export function validateName(name: string): ValidationResult {
  if (!name || name.trim().length === 0) {
    return { isValid: false, error: "Name cannot be empty" }
  }

  if (name.trim().length > VALIDATION_RULES.NAME_MAX_LENGTH) {
    return {
      isValid: false,
      error: `Name cannot exceed ${VALIDATION_RULES.NAME_MAX_LENGTH} characters`,
    }
  }

  return { isValid: true }
}

// Generic uniqueness validation
export function validateUniqueness<T>(
  items: T[],
  getName: (item: T) => string,
  getLocation: (item: T) => number | null,
  targetName: string,
  targetLocation: number | null,
  excludeItem?: (item: T) => boolean,
): ValidationResult {
  const duplicate = items.find((item) => {
    if (excludeItem && excludeItem(item)) return false

    return (
      getName(item).trim().toLowerCase() === targetName.trim().toLowerCase() &&
      getLocation(item) === targetLocation
    )
  })

  if (duplicate) {
    return {
      isValid: false,
      error: "An item with this name already exists in this location",
    }
  }

  return { isValid: true }
}
