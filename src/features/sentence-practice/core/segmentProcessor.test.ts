// core/segmentProcessor.test.ts
import { describe, it, expect } from "vitest"
import { processSegments, conjugateSegment } from "./segmentProcessor"
import type { SentenceSegment } from "convex/validators"

describe("conjugateSegment", () => {
  it("returns plain text for segment without conjugation", () => {
    const segment: SentenceSegment = { text: "給料[きゅうりょう]を" }
    const result = conjugateSegment(segment, true)
    expect(result).toBe("給料[きゅうりょう]を")
  })

  it("conjugates verb to volitional form (polite)", () => {
    const segment: SentenceSegment = {
      text: "行[い]く",
      conjugation: {
        pos: "Godan verb - Iku/Yuku special class",
        form: "volitional",
        polarity: "positive",
        tense: "non-past",
      },
    }
    const result = conjugateSegment(segment, true)
    expect(result).toBe("行[い]きましょう")
  })

  it("conjugates verb to volitional form (casual)", () => {
    const segment: SentenceSegment = {
      text: "行[い]く",
      conjugation: {
        pos: "Godan verb - Iku/Yuku special class",
        form: "volitional",
        polarity: "positive",
        tense: "non-past",
      },
    }
    const result = conjugateSegment(segment, false)
    expect(result).toBe("行[い]こう")
  })

  it("conjugates i-adjective to ku-form for adverb", () => {
    const segment: SentenceSegment = {
      text: "楽[たの]しい",
      conjugation: {
        pos: "I-adjective",
        form: "adverb",
        polarity: "positive",
        tense: "non-past",
      },
    }
    const result = conjugateSegment(segment, true)
    expect(result).toBe("楽[たの]しく")
  })

  it("conjugates verb to te-form", () => {
    const segment: SentenceSegment = {
      text: "教[おし]える",
      conjugation: {
        pos: "Ichidan verb",
        form: "te-form",
        polarity: "positive",
        tense: "non-past",
      },
    }
    const result = conjugateSegment(segment, true)
    expect(result).toBe("教[おし]えて")
  })

  it("conjugates suru verb to te-form", () => {
    const segment: SentenceSegment = {
      text: "結婚[けっこん]する",
      conjugation: {
        pos: "Suru verb - compound word",
        form: "te-form",
        polarity: "positive",
        tense: "non-past",
      },
    }
    const result = conjugateSegment(segment, true)
    expect(result).toBe("結婚[けっこん]して")
  })
})

describe("processSegments", () => {
  it("marks blank segments correctly", () => {
    const segments: SentenceSegment[] = [
      { text: "準備[じゅんび]が" },
      { text: "終[お]わったら", blank: true },
      { text: "、ください" },
    ]
    const result = processSegments(segments, true)

    expect(result).toHaveLength(3)
    expect(result[0].isBlank).toBe(false)
    expect(result[1].isBlank).toBe(true)
    expect(result[2].isBlank).toBe(false)
  })

  it("conjugates all segments with conjugation metadata", () => {
    const segments: SentenceSegment[] = [
      { text: "人[ひと]が" },
      {
        text: "結婚[けっこん]する",
        conjugation: {
          pos: "Suru verb - compound word",
          form: "te-form",
          polarity: "positive",
          tense: "non-past",
        },
      },
      { text: "いるのを" },
    ]
    const result = processSegments(segments, true)

    expect(result[0].original).toBe("人[ひと]が")
    expect(result[1].original).toBe("結婚[けっこん]して")
    expect(result[2].original).toBe("いるのを")
  })

  it("pre-computes all text representations", () => {
    const segments: SentenceSegment[] = [
      { text: "給料[きゅうりょう]を" },
      {
        text: "行[い]く",
        conjugation: {
          pos: "Godan verb - Iku/Yuku special class",
          form: "volitional",
          polarity: "positive",
          tense: "non-past",
        },
      },
    ]
    const result = processSegments(segments, true)

    // First segment (no conjugation)
    expect(result[0].original).toBe("給料[きゅうりょう]を")
    expect(result[0].plain).toBe("給料を")
    expect(result[0].kana).toBe("きゅうりょうを")
    expect(result[0].ruby).toContain("<ruby>")

    // Second segment (conjugated)
    expect(result[1].original).toBe("行[い]きましょう")
    expect(result[1].plain).toBe("行きましょう")
    expect(result[1].kana).toBe("いきましょう")
  })

  it("handles mixed blank and non-blank segments", () => {
    const segments: SentenceSegment[] = [
      { text: "準備[じゅんび]が" },
      { text: "終[お]わったら", blank: true },
      { text: "、" },
      {
        text: "教[おし]える",
        conjugation: {
          pos: "Ichidan verb",
          form: "te-form",
          polarity: "positive",
          tense: "non-past",
        },
      },
      { text: "ください" },
    ]
    const result = processSegments(segments, true)

    expect(result).toHaveLength(5)
    expect(result[0].original).toBe("準備[じゅんび]が")
    expect(result[0].isBlank).toBe(false)

    expect(result[1].original).toBe("終[お]わったら")
    expect(result[1].isBlank).toBe(true)

    expect(result[2].original).toBe("、")
    expect(result[2].isBlank).toBe(false)

    expect(result[3].original).toBe("教[おし]えて")
    expect(result[3].isBlank).toBe(false)

    expect(result[4].original).toBe("ください")
    expect(result[4].isBlank).toBe(false)
  })

  it("produces different output for polite vs casual", () => {
    const segments: SentenceSegment[] = [
      {
        text: "行[い]く",
        conjugation: {
          pos: "Godan verb - Iku/Yuku special class",
          form: "volitional",
          polarity: "positive",
          tense: "non-past",
        },
      },
    ]

    const politeResult = processSegments(segments, true)
    const casualResult = processSegments(segments, false)

    expect(politeResult[0].original).toBe("行[い]きましょう")
    expect(casualResult[0].original).toBe("行[い]こう")
  })
})
