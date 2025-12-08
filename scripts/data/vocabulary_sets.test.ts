import { describe, it, expect } from "vitest"
import { vocabularySets } from "./vocabulary_sets"

describe("vocabulary_sets", () => {
  it("should not have duplicate values within any vocabulary set", () => {
    const duplicates: Array<{
      setId: string
      value: string
      firstIndex: number
      duplicateIndices: number[]
    }> = []

    for (const [setId, vocabSet] of Object.entries(vocabularySets)) {
      const seen = new Map<string, number>()
      const setDuplicates = new Map<string, number[]>()

      vocabSet.keys.forEach((key, index) => {
        if (seen.has(key)) {
          // Track first occurrence index
          const firstIndex = seen.get(key)!
          if (!setDuplicates.has(key)) {
            setDuplicates.set(key, [firstIndex])
          }
          // Add this duplicate occurrence
          setDuplicates.get(key)!.push(index)
        } else {
          seen.set(key, index)
        }
      })

      // Convert to duplicates array
      for (const [value, indices] of setDuplicates.entries()) {
        const firstIndex = indices[0]
        const duplicateIndices = indices.slice(1)
        duplicates.push({
          setId,
          value,
          firstIndex,
          duplicateIndices,
        })
      }
    }

    if (duplicates.length > 0) {
      const message = duplicates
        .map(
          (dup) =>
            `Set "${dup.setId}": value "${dup.value}" first appears at index ${dup.firstIndex}, then duplicated at indices: ${dup.duplicateIndices.join(", ")}`,
        )
        .join("\n  ")

      expect.fail(`Found ${duplicates.length} duplicate value(s) in vocabulary sets:\n  ${message}`)
    }
  })
})
