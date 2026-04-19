// core/segmentProcessor.test.ts
import { describe, it, expect } from "vitest"
import { processSegments, conjugateSegment } from "./segmentProcessor"
import type { SentenceSegment } from "convex/validators"

describe("conjugateSegment", () => {
  it("returns plain text for segment without conjugation", () => {
    const segment: SentenceSegment = { text: "給料[きゅうりょう]を" }
    expect(conjugateSegment(segment, true)).toEqual(["給料[きゅうりょう]を"])
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
    expect(conjugateSegment(segment, true)).toEqual(["行[い]きましょう"])
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
    expect(conjugateSegment(segment, false)).toEqual(["行[い]こう"])
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
    expect(conjugateSegment(segment, true)).toEqual(["楽[たの]しく"])
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
    expect(conjugateSegment(segment, true)).toEqual(["教[おし]えて"])
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
    expect(conjugateSegment(segment, true)).toEqual(["結婚[けっこん]して"])
  })

  it("returns every form when engine produces multiple (na-adj negative casual)", () => {
    const segment: SentenceSegment = {
      text: "好[す]き",
      conjugation: {
        pos: "Na-adjective",
        form: "normal",
        polarity: "negative",
        tense: "non-past",
      },
    }
    const forms = conjugateSegment(segment, false)
    expect(forms).toContain("好[す]きではない")
    expect(forms).toContain("好[す]きじゃない")
  })

  it("returns every form when engine produces multiple (na-adj negative polite)", () => {
    const segment: SentenceSegment = {
      text: "好[す]き",
      conjugation: {
        pos: "Na-adjective",
        form: "normal",
        polarity: "negative",
        tense: "non-past",
      },
    }
    const forms = conjugateSegment(segment, true)
    expect(forms).toContain("好[す]きではありません")
    expect(forms).toContain("好[す]きじゃありません")
    expect(forms).toContain("好[す]きではないです")
    expect(forms).toContain("好[す]きじゃないです")
  })
})

describe("processSegments", () => {
  it("marks blank segments correctly", () => {
    const segments: SentenceSegment[] = [
      { text: "準備[じゅんび]が" },
      { text: "終[お]わったら", blank: true },
      { text: "、ください" },
    ]
    const sequences = processSegments(segments, true)

    expect(sequences).toHaveLength(1)
    const [seg0, seg1, seg2] = sequences[0]
    expect(seg0.isBlank).toBe(false)
    expect(seg1.isBlank).toBe(true)
    expect(seg2.isBlank).toBe(false)
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
    const sequences = processSegments(segments, true)

    expect(sequences).toHaveLength(1)
    const [seg0, seg1, seg2] = sequences[0]
    expect(seg0.original).toBe("人[ひと]が")
    expect(seg1.original).toBe("結婚[けっこん]して")
    expect(seg2.original).toBe("いるのを")
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
    const sequences = processSegments(segments, true)

    expect(sequences).toHaveLength(1)
    const [seg0, seg1] = sequences[0]
    expect(seg0.original).toBe("給料[きゅうりょう]を")
    expect(seg0.plain).toBe("給料を")
    expect(seg0.kana).toBe("きゅうりょうを")
    expect(seg0.ruby).toContain("<ruby>")

    expect(seg1.original).toBe("行[い]きましょう")
    expect(seg1.plain).toBe("行きましょう")
    expect(seg1.kana).toBe("いきましょう")
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
    const sequences = processSegments(segments, true)

    expect(sequences).toHaveLength(1)
    const [seq] = sequences
    expect(seq).toHaveLength(5)
    expect(seq[0].original).toBe("準備[じゅんび]が")
    expect(seq[0].isBlank).toBe(false)

    expect(seq[1].original).toBe("終[お]わったら")
    expect(seq[1].isBlank).toBe(true)

    expect(seq[2].original).toBe("、")
    expect(seq[2].isBlank).toBe(false)

    expect(seq[3].original).toBe("教[おし]えて")
    expect(seq[3].isBlank).toBe(false)

    expect(seq[4].original).toBe("ください")
    expect(seq[4].isBlank).toBe(false)
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

    const polite = processSegments(segments, true)
    const casual = processSegments(segments, false)

    expect(polite[0][0].original).toBe("行[い]きましょう")
    expect(casual[0][0].original).toBe("行[い]こう")
  })

  it("fans out multi-form segments into multiple sequences", () => {
    const segments: SentenceSegment[] = [
      { text: "これは" },
      {
        text: "好[す]き",
        conjugation: {
          pos: "Na-adjective",
          form: "normal",
          polarity: "negative",
          tense: "non-past",
        },
      },
    ]
    const sequences = processSegments(segments, false)

    const lastOriginals = sequences.map((seq) => seq[seq.length - 1].original)
    expect(lastOriginals).toContain("好[す]きではない")
    expect(lastOriginals).toContain("好[す]きじゃない")
  })
})
