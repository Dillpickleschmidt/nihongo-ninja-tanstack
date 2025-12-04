import { z } from "zod"

/**
 * Shared utility functions for import adapters
 */

export const TimestampSchema = z.union([z.date(), z.string(), z.number().int()])

export function normalizeTimestamp(timestamp: unknown): Date {
  const parsed = TimestampSchema.parse(timestamp)

  if (parsed instanceof Date) {
    return parsed
  } else if (typeof parsed === "string") {
    return new Date(parsed)
  } else if (typeof parsed === "number") {
    return new Date(parsed * 1000)
  }

  throw new Error(`Invalid timestamp format: ${timestamp}`)
}
