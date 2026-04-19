import { describe, expect, it } from "vitest"
import {
  clearAssignedBackgroundId,
  getAssignedBackgroundId,
  removeOverridesForPath,
  setAssignedBackgroundId,
  type BackgroundOverrides,
} from "./overrides"
import { resolveBackground } from "./resolveBackground"

const emptyOverrides = (): BackgroundOverrides => ({
  paths: {},
  chapters: {},
})

describe("background overrides helpers", () => {
  it("sets and clears scoped assignments", () => {
    const withPath = setAssignedBackgroundId(
      emptyOverrides(),
      { type: "path", pathId: "genki_1" },
      "tranquil-village-by-k-jackson-katss-djqxpcz",
    )
    expect(
      getAssignedBackgroundId(withPath, { type: "path", pathId: "genki_1" }),
    ).toBe("tranquil-village-by-k-jackson-katss-djqxpcz")

    const withChapter = setAssignedBackgroundId(
      withPath,
      { type: "chapter", pathId: "genki_1", chapterSlug: "chapter-1" },
      "rainy-day-stroll",
    )
    expect(
      getAssignedBackgroundId(withChapter, {
        type: "chapter",
        pathId: "genki_1",
        chapterSlug: "chapter-1",
      }),
    ).toBe("rainy-day-stroll")

    const cleared = clearAssignedBackgroundId(withChapter, {
      type: "chapter",
      pathId: "genki_1",
      chapterSlug: "chapter-1",
    })
    expect(
      getAssignedBackgroundId(cleared, {
        type: "chapter",
        pathId: "genki_1",
        chapterSlug: "chapter-1",
      }),
    ).toBeUndefined()
  })

  it("removes path and chapter overrides for a deleted custom path", () => {
    const overrides: BackgroundOverrides = {
      paths: {
        customA: "tranquil-village-by-k-jackson-katss-djqxpcz",
        customB: "morning-village-by-k-jackson-katss-djrsova",
      },
      chapters: {
        "customA:chapter-1": "rainy-day-stroll",
        "customA:chapter-2":
          "japanese-subway-train-system-display-screen-passenger-information",
        "customB:chapter-1":
          "full-shot-people-eating-japanese-street-food-restaurant",
      },
    }

    expect(removeOverridesForPath(overrides, "customA")).toEqual({
      paths: { customB: "morning-village-by-k-jackson-katss-djrsova" },
      chapters: {
        "customB:chapter-1":
          "full-shot-people-eating-japanese-street-food-restaurant",
      },
    })
  })
})

describe("resolveBackground", () => {
  it("prefers chapter override over broader scopes", () => {
    const overrides: BackgroundOverrides = {
      paths: { genki_1: "tranquil-village-by-k-jackson-katss-djqxpcz" },
      chapters: { "genki_1:chapter-1": "rainy-day-stroll" },
    }

    const resolved = resolveBackground("genki_1", "chapter-1", overrides)
    expect(resolved.sourceScope).toBe("chapter")
  })

  it("prefers path override over curated defaults", () => {
    const overrides: BackgroundOverrides = {
      paths: {
        genki_1:
          "japanese-subway-train-system-display-screen-passenger-information",
      },
      chapters: {},
    }

    const resolved = resolveBackground("genki_1", "chapter-1", overrides)
    expect(resolved.sourceScope).toBe("path")
  })

  it("uses curated defaults when no overrides exist", () => {
    const resolved = resolveBackground("genki_1", "chapter-1", emptyOverrides())
    expect(resolved.sourceScope).toBe("curated")
  })

  it("falls back for custom paths without overrides", () => {
    const resolved = resolveBackground(
      "custom-path-id",
      "chapter-1",
      emptyOverrides(),
    )
    expect(resolved.sourceScope).toBe("fallback")
    expect(resolved.background.id).toBe("red-temple")
  })
})
