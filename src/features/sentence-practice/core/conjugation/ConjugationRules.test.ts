import { describe, expect, it } from "vitest"
import { ConjugationRules } from "./ConjugationRules"

describe("ConjugationRules", () => {
  const rules = new ConjugationRules()

  it("returns special standalone word forms", () => {
    expect(rules.getSpecialWordForm("です", true)).toBe("です")
    expect(rules.getSpecialWordForm("です", false)).toBe("だ")
    expect(rules.getSpecialWordForm("か", false)).toBe("？")
  })

  it("returns undefined for non-special words", () => {
    expect(rules.getSpecialWordForm("ください", true)).toBeUndefined()
  })

  it("detects adverbial forms only for supported combinations", () => {
    expect(rules.isAdverbialForm("adverb", "I-adjective")).toBe(true)
    expect(rules.isAdverbialForm("adverb", "Na-adjective")).toBe(true)
    expect(rules.isAdverbialForm("adverb", "Ichidan verb")).toBe(false)
    expect(rules.isAdverbialForm("tai-adv-form", "Ichidan verb")).toBe(true)
    expect(rules.isAdverbialForm("potential-adv-form", "Ichidan verb")).toBe(
      true,
    )
  })

  it("normalizes internal form names used by the conjugation helper", () => {
    expect(rules.normalizeForm("tai-adv-form")).toBe("tai-form")
    expect(rules.normalizeForm("potential-adv-form")).toBe("potential")
    expect(rules.normalizeForm("adverb")).toBe("normal")
    expect(rules.normalizeForm("te-form")).toBe("te-form")
  })
})
