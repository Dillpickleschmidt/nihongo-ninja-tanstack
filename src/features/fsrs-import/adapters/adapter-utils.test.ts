import { describe, it, expect } from "vitest"
import { normalizeTimestamp } from "./adapter-utils"

describe("Adapter Utilities", () => {
  describe("normalizeTimestamp", () => {
    // Date input
    it("returns Date object as-is", () => {
      const date = new Date("2024-01-01T12:00:00Z")
      const result = normalizeTimestamp(date)

      expect(result).toBeInstanceOf(Date)
      expect(result).toEqual(date)
    })

    // String input - ISO format
    it("converts ISO strings to Date", () => {
      const isoString = "2024-01-01T12:00:00Z"
      const result = normalizeTimestamp(isoString)

      expect(result).toBeInstanceOf(Date)
      expect(result.toISOString()).toBe("2024-01-01T12:00:00.000Z")

      const isoWithoutTz = "2024-01-01T12:00:00"
      const result2 = normalizeTimestamp(isoWithoutTz)
      expect(result2.getUTCFullYear()).toBe(2024)
    })

    // Number input - Unix timestamp (seconds)
    it("converts Unix timestamps to Date", () => {
      const unixSeconds = 1704110400 // 2024-01-01T12:00:00Z
      const result = normalizeTimestamp(unixSeconds)

      expect(result).toBeInstanceOf(Date)
      expect(result.toISOString()).toBe("2024-01-01T12:00:00.000Z")

      // Epoch
      const epoch = normalizeTimestamp(0)
      expect(epoch.toISOString()).toBe("1970-01-01T00:00:00.000Z")
    })

    // Edge cases - Invalid inputs
    it("throws error for invalid input types", () => {
      expect(() => normalizeTimestamp(null)).toThrow()
      expect(() => normalizeTimestamp(undefined)).toThrow()
      expect(() => normalizeTimestamp(true as any)).toThrow()
      expect(() => normalizeTimestamp({ time: "now" } as any)).toThrow()
      expect(() => normalizeTimestamp([2024, 1, 1] as any)).toThrow()
    })

    // Edge cases - Floating point numbers (should fail Zod int() validation)
    it("throws error for floating point number", () => {
      expect(() => normalizeTimestamp(1704110400.5)).toThrow()
    })
  })
})
