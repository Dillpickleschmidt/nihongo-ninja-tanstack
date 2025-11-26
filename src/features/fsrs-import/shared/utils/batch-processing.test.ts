import { describe, it, expect, vi } from "vitest"
import { processBatches } from "./batch-processing"

describe("Batch Processing Utilities", () => {
  describe("processBatches", () => {
    // Basic functionality
    it("processes empty array", async () => {
      const processor = vi.fn().mockResolvedValue("result")

      const result = await processBatches([], 10, processor)

      expect(result).toEqual([])
      expect(processor).not.toHaveBeenCalled()
    })

    it("processes single batch", async () => {
      const items = [1, 2, 3]
      const processor = vi.fn().mockResolvedValue("processed")

      const result = await processBatches(items, 10, processor)

      expect(result).toEqual(["processed"])
      expect(processor).toHaveBeenCalledTimes(1)
      expect(processor).toHaveBeenCalledWith([1, 2, 3])
    })

    it("processes multiple batches", async () => {
      const items = [1, 2, 3, 4, 5]
      const processor = vi.fn()
        .mockResolvedValueOnce("batch1")
        .mockResolvedValueOnce("batch2")
        .mockResolvedValueOnce("batch3")

      const result = await processBatches(items, 2, processor)

      expect(result).toEqual(["batch1", "batch2", "batch3"])
      expect(processor).toHaveBeenCalledTimes(3)
      expect(processor).toHaveBeenNthCalledWith(1, [1, 2])
      expect(processor).toHaveBeenNthCalledWith(2, [3, 4])
      expect(processor).toHaveBeenNthCalledWith(3, [5])
    })

    it("processes exact multiple of chunk size", async () => {
      const items = [1, 2, 3, 4, 5, 6]
      const processor = vi.fn()
        .mockResolvedValueOnce("batch1")
        .mockResolvedValueOnce("batch2")

      const result = await processBatches(items, 3, processor)

      expect(result).toEqual(["batch1", "batch2"])
      expect(processor).toHaveBeenCalledTimes(2)
      expect(processor).toHaveBeenNthCalledWith(1, [1, 2, 3])
      expect(processor).toHaveBeenNthCalledWith(2, [4, 5, 6])
    })

    // Chunk size edge cases
    it("processes with chunk size of 1", async () => {
      const items = [1, 2, 3]
      const processor = vi.fn()
        .mockResolvedValueOnce("r1")
        .mockResolvedValueOnce("r2")
        .mockResolvedValueOnce("r3")

      const result = await processBatches(items, 1, processor)

      expect(result).toEqual(["r1", "r2", "r3"])
      expect(processor).toHaveBeenCalledTimes(3)
    })

    it("processes with chunk size larger than array", async () => {
      const items = [1, 2, 3]
      const processor = vi.fn().mockResolvedValue("result")

      const result = await processBatches(items, 100, processor)

      expect(result).toEqual(["result"])
      expect(processor).toHaveBeenCalledTimes(1)
      expect(processor).toHaveBeenCalledWith([1, 2, 3])
    })

    it("throws error for chunk size of 0", async () => {
      const items = [1, 2, 3]
      const processor = vi.fn()

      await expect(processBatches(items, 0, processor)).rejects.toThrow()
    })

    it("throws error for negative chunk size", async () => {
      const items = [1, 2, 3]
      const processor = vi.fn()

      await expect(processBatches(items, -5, processor)).rejects.toThrow()
    })

    // Processor behavior
    it("preserves order of results", async () => {
      const items = [1, 2, 3, 4, 5, 6]
      const processor = vi.fn((batch: number[]) =>
        Promise.resolve(batch.reduce((a, b) => a + b, 0))
      )

      const result = await processBatches(items, 2, processor)

      // [1,2]=3, [3,4]=7, [5,6]=11
      expect(result).toEqual([3, 7, 11])
    })


    // Error handling
    it("fails fast on processor error", async () => {
      const items = [1, 2, 3, 4]
      const processor = vi.fn()
        .mockRejectedValueOnce(new Error("Processing failed"))
        .mockResolvedValueOnce("result2")

      await expect(processBatches(items, 2, processor)).rejects.toThrow(
        "Processing failed"
      )
    })

    it("propagates processor errors", async () => {
      const items = [1, 2, 3]
      const processor = vi.fn().mockRejectedValue(new Error("Batch error"))

      await expect(processBatches(items, 1, processor)).rejects.toThrow(
        "Batch error"
      )
    })


    // Batch content verification
    it("creates correct batch chunks", async () => {
      const items = [10, 20, 30, 40, 50, 60, 70, 80]
      const processor = vi.fn().mockResolvedValue("result")

      await processBatches(items, 3, processor)

      expect(processor).toHaveBeenNthCalledWith(1, [10, 20, 30])
      expect(processor).toHaveBeenNthCalledWith(2, [40, 50, 60])
      expect(processor).toHaveBeenNthCalledWith(3, [70, 80])
    })

    // Real-world scenario
    it("processes cards in batches like real usage", async () => {
      interface Card {
        searchTerm: string
        reviews: any[]
      }

      const cards: Card[] = [
        { searchTerm: "食べる", reviews: [] },
        { searchTerm: "飲む", reviews: [] },
        { searchTerm: "走る", reviews: [] },
        { searchTerm: "歩く", reviews: [] },
        { searchTerm: "見る", reviews: [] }
      ]

      const processor = async (batch: Card[]) => {
        // Simulate async processing
        await new Promise(resolve => setTimeout(resolve, 1))
        return { processed: batch.length }
      }

      const result = await processBatches(cards, 2, processor)

      expect(result).toEqual([
        { processed: 2 },
        { processed: 2 },
        { processed: 1 }
      ])
    })

  })
})
