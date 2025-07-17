// src/features/fsrs-import/__tests__/batchProcessing.test.ts

import { describe, it, expect, vi } from "vitest"
import { chunkArray, processBatches } from "../batchProcessing"

describe("batchProcessing", () => {
  describe("chunkArray", () => {
    it("splits array into specified chunk size", () => {
      const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      const result = chunkArray(array, 3)

      expect(result).toHaveLength(4)
      expect(result[0]).toEqual([1, 2, 3])
      expect(result[1]).toEqual([4, 5, 6])
      expect(result[2]).toEqual([7, 8, 9])
      expect(result[3]).toEqual([10])
    })

    it("handles array smaller than chunk size", () => {
      const array = [1, 2]
      const result = chunkArray(array, 5)

      expect(result).toHaveLength(1)
      expect(result[0]).toEqual([1, 2])
    })

    it("handles empty array", () => {
      const array: number[] = []
      const result = chunkArray(array, 3)

      expect(result).toEqual([])
    })

    it("preserves element order within chunks", () => {
      const array = ["a", "b", "c", "d", "e"]
      const result = chunkArray(array, 2)

      expect(result).toEqual([["a", "b"], ["c", "d"], ["e"]])
    })

    it("handles chunk size of 1", () => {
      const array = [1, 2, 3]
      const result = chunkArray(array, 1)

      expect(result).toHaveLength(3)
      expect(result[0]).toEqual([1])
      expect(result[1]).toEqual([2])
      expect(result[2]).toEqual([3])
    })

    it("handles very large arrays", () => {
      const array = Array.from({ length: 1000 }, (_, i) => i)
      const result = chunkArray(array, 100)

      expect(result).toHaveLength(10)
      expect(result[0]).toHaveLength(100)
      expect(result[9]).toHaveLength(100)
      expect(result[0][0]).toBe(0)
      expect(result[9][99]).toBe(999)
    })
  })

  describe("processBatches", () => {
    it("processes all batches in parallel", async () => {
      const items = ["item1", "item2", "item3", "item4"]
      const chunkSize = 2

      const mockProcessor = vi
        .fn()
        .mockImplementation((batch: string[]) =>
          Promise.resolve(`processed-${batch.join("-")}`),
        )

      const results = await processBatches(items, chunkSize, mockProcessor)

      expect(mockProcessor).toHaveBeenCalledTimes(2)
      expect(mockProcessor).toHaveBeenCalledWith(["item1", "item2"])
      expect(mockProcessor).toHaveBeenCalledWith(["item3", "item4"])
      expect(results).toEqual([
        "processed-item1-item2",
        "processed-item3-item4",
      ])
    })

    it("handles empty items array", async () => {
      const items: string[] = []
      const chunkSize = 2

      const mockProcessor = vi.fn()

      const results = await processBatches(items, chunkSize, mockProcessor)

      expect(mockProcessor).not.toHaveBeenCalled()
      expect(results).toEqual([])
    })

    it("processes single batch", async () => {
      const items = ["item1", "item2"]
      const chunkSize = 5

      const mockProcessor = vi.fn().mockResolvedValue("single-result")

      const results = await processBatches(items, chunkSize, mockProcessor)

      expect(mockProcessor).toHaveBeenCalledTimes(1)
      expect(mockProcessor).toHaveBeenCalledWith(["item1", "item2"])
      expect(results).toEqual(["single-result"])
    })

    it("fails fast on processor error", async () => {
      const items = ["item1", "item2", "item3", "item4"]
      const chunkSize = 2

      const mockProcessor = vi.fn().mockImplementation((batch: string[]) => {
        if (batch.includes("item3")) {
          return Promise.reject(new Error("Processing failed"))
        }
        return Promise.resolve(`processed-${batch.join("-")}`)
      })

      await expect(
        processBatches(items, chunkSize, mockProcessor),
      ).rejects.toThrow("Processing failed")
      expect(mockProcessor).toHaveBeenCalledTimes(2)
    })

    it("maintains result order despite parallel processing", async () => {
      const items = [1, 2, 3, 4, 5, 6]
      const chunkSize = 2

      // Add delays to test that results maintain order even if batches complete out of order
      const mockProcessor = vi.fn().mockImplementation((batch: number[]) => {
        const delay = batch[0] === 1 ? 100 : batch[0] === 3 ? 50 : 10 // First batch takes longest
        return new Promise((resolve) =>
          setTimeout(() => resolve(`batch-${batch.join("-")}`), delay),
        )
      })

      const results = await processBatches(items, chunkSize, mockProcessor)

      expect(results).toEqual([
        "batch-1-2", // Should be first despite taking longest
        "batch-3-4",
        "batch-5-6",
      ])
    })

    it("processes batches in parallel for performance", async () => {
      const items = ["a", "b", "c", "d"]
      const chunkSize = 2

      const startTimes: number[] = []
      const mockProcessor = vi.fn().mockImplementation((batch: string[]) => {
        startTimes.push(Date.now())
        return new Promise((resolve) =>
          setTimeout(() => resolve(`processed-${batch.join("-")}`), 50),
        )
      })

      const start = Date.now()
      await processBatches(items, chunkSize, mockProcessor)
      const end = Date.now()

      // If processed in parallel, total time should be ~50ms, not ~100ms
      expect(end - start).toBeLessThan(80)

      // Both batches should start around the same time (within a few ms)
      expect(Math.abs(startTimes[0] - startTimes[1])).toBeLessThan(10)
    })

    it("handles different return types", async () => {
      const items = ["a", "b", "c"]
      const chunkSize = 1

      const mockProcessor = vi
        .fn()
        .mockImplementation((batch: string[]) =>
          Promise.resolve({ value: batch[0], count: batch.length }),
        )

      const results = await processBatches(items, chunkSize, mockProcessor)

      expect(results).toEqual([
        { value: "a", count: 1 },
        { value: "b", count: 1 },
        { value: "c", count: 1 },
      ])
    })
  })
})
