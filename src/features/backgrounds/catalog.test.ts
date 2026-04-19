import { describe, expect, it } from "vitest"
import {
  BUILT_IN_BACKGROUNDS,
  BUILT_IN_BACKGROUND_LIST,
  CURATED_CHAPTER_BACKGROUNDS,
  FALLBACK_BACKGROUND_ID,
} from "./catalog"

describe("background catalog", () => {
  it("derives unique ids for curated backgrounds", () => {
    const ids = BUILT_IN_BACKGROUND_LIST.map((background) => background.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it("only references curated chapter ids that exist in the catalog", () => {
    const referencedIds = Object.values(CURATED_CHAPTER_BACKGROUNDS).flatMap(
      (chapters) => Object.values(chapters),
    )

    expect(
      referencedIds.every((backgroundId) => backgroundId in BUILT_IN_BACKGROUNDS),
    ).toBe(true)
  })

  it("keeps the fallback background in the catalog", () => {
    expect(FALLBACK_BACKGROUND_ID in BUILT_IN_BACKGROUNDS).toBe(true)
  })
})
