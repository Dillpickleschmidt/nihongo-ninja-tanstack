import { describe, expect, it } from "vitest"
import { ConjugationRules } from "./ConjugationRules"

describe("ConjugationRules", () => {
  const rules = new ConjugationRules()

  it("returns context-free special standalone word forms", () => {
    expect(rules.getSpecialWordForm("です", true)).toBe("です")
    expect(rules.getSpecialWordForm("です", false)).toBe("だ")
  })

  it("returns register-paired forms for んですが / でしょう / でしょうか", () => {
    expect(rules.getSpecialWordForm("んですが", true)).toBe("んですが")
    expect(rules.getSpecialWordForm("んですが", false)).toBe("んだけど")
    expect(rules.getSpecialWordForm("でしょう", true)).toBe("でしょう")
    expect(rules.getSpecialWordForm("でしょう", false)).toBe("だろう")
    expect(rules.getSpecialWordForm("でしょうか", true)).toBe("でしょうか")
    expect(rules.getSpecialWordForm("でしょうか", false)).toBe("だろうか")
  })

  it("does NOT hardcode んです/のです — split as ん/の + です instead", () => {
    expect(rules.getSpecialWordForm("んです", true)).toBeUndefined()
    expect(rules.getSpecialWordForm("のです", true)).toBeUndefined()
  })

  it("drops ください in casual mode (empty string)", () => {
    expect(rules.getSpecialWordForm("ください", true)).toBe("ください")
    expect(rules.getSpecialWordForm("ください", false)).toBe("")
  })

  it("returns undefined for non-special words", () => {
    expect(rules.getSpecialWordForm("食べる", true)).toBeUndefined()
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
