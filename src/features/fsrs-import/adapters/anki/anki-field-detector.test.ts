import { describe, it, expect } from "vitest"
import {
  detectWordField,
  detectEnglishField,
  autoDetectFieldMapping,
  isValidFieldMapping,
} from "./anki-field-detector"
import type { AnkiNote } from "./anki-types"

describe("AnkiFieldDetector", () => {
  describe("detectWordField", () => {
    it("should find first field with Japanese characters", () => {
      const fields = ["前置き", "English", "More English"]
      expect(detectWordField(fields)).toBe(0)
    })

    it("should find Japanese field when not at index 0", () => {
      const fields = ["English", "日本語", "More English"]
      expect(detectWordField(fields)).toBe(1)
    })

    it("should handle kanji, hiragana, and katakana", () => {
      const fieldsKanji = ["漢字", "english"]
      expect(detectWordField(fieldsKanji)).toBe(0)

      const fieldsHiragana = ["ひらがな", "english"]
      expect(detectWordField(fieldsHiragana)).toBe(0)

      const fieldsKatakana = ["カタカナ", "english"]
      expect(detectWordField(fieldsKatakana)).toBe(0)
    })

    it("should return 0 if no Japanese found", () => {
      const fields = ["English", "More English", "Even More"]
      expect(detectWordField(fields)).toBe(0)
    })

    it("should skip empty fields", () => {
      const fields = ["", "", "日本語"]
      expect(detectWordField(fields)).toBe(2)
    })
  })

  describe("detectEnglishField", () => {
    it("should find shortest non-Japanese field", () => {
      const fields = ["日本語", "the cat", "This is a longer English sentence"]
      expect(detectEnglishField(fields)).toBe(1)
    })

    it("should prefer shorter English over longer", () => {
      const fields = ["日本語", "Very long English description here", "cat"]
      expect(detectEnglishField(fields)).toBe(2)
    })

    it("should skip empty fields and Japanese fields", () => {
      const fields = ["", "日本語", "English meaning"]
      expect(detectEnglishField(fields)).toBe(2)
    })

    it("should return default (1) if no suitable field found", () => {
      const fields = ["日本語のみ", "日本語もここ"]
      expect(detectEnglishField(fields)).toBe(1)
    })

    it("should handle mixed content with whitespace", () => {
      const fields = ["   ", "短い", "this is the english"]
      // "短い" is Japanese so skipped, "this is the english" is English and selected
      expect(detectEnglishField(fields)).toBe(2)
    })

    it("should skip fields with mixed Japanese and English", () => {
      const fields = ["日本語", "猫 (cat) long description", "cat"]
      // Should pick "cat" because it doesn't contain Japanese
      expect(detectEnglishField(fields)).toBe(2)
    })
  })

  describe("autoDetectFieldMapping", () => {
    it("should detect mapping from sample note", () => {
      const note: AnkiNote = {
        id: 1,
        guid: "test-guid",
        mid: 1,
        mod: 0,
        usn: 0,
        tags: "",
        flds: "食べ物\x1ffood",
      }

      const mapping = autoDetectFieldMapping(note)
      expect(mapping.wordFieldIndex).toBe(0)
      expect(mapping.englishFieldIndex).toBe(1)
    })

    it("should handle notes with multiple fields", () => {
      const note: AnkiNote = {
        id: 1,
        guid: "test-guid",
        mid: 1,
        mod: 0,
        usn: 0,
        tags: "",
        flds: "Extra\x1f日本語\x1fEnglish\x1fMore info",
      }

      const mapping = autoDetectFieldMapping(note)
      expect(mapping.wordFieldIndex).toBe(1) // First field with Japanese
      expect(mapping.englishFieldIndex).toBe(0) // "Extra" is shortest non-Japanese field
    })

    it("should handle all-English note gracefully", () => {
      const note: AnkiNote = {
        id: 1,
        guid: "test-guid",
        mid: 1,
        mod: 0,
        usn: 0,
        tags: "",
        flds: "Front\x1fBack",
      }

      const mapping = autoDetectFieldMapping(note)
      // Should default to front/back indices
      expect(mapping.wordFieldIndex).toBe(0)
      expect(mapping.englishFieldIndex).toBe(1)
    })
  })

  describe("isValidFieldMapping", () => {
    it("should validate correct field mapping", () => {
      const mapping = { wordFieldIndex: 0, englishFieldIndex: 1 }
      expect(isValidFieldMapping(mapping, 2)).toBe(true)
      expect(isValidFieldMapping(mapping, 3)).toBe(true)
    })

    it("should reject indices out of bounds", () => {
      const mapping = { wordFieldIndex: 0, englishFieldIndex: 5 }
      expect(isValidFieldMapping(mapping, 2)).toBe(false)
    })

    it("should reject negative indices", () => {
      const mapping = { wordFieldIndex: -1, englishFieldIndex: 1 }
      expect(isValidFieldMapping(mapping, 2)).toBe(false)
    })

    it("should accept same indices if user mapped them to same field", () => {
      const mapping = { wordFieldIndex: 0, englishFieldIndex: 0 }
      expect(isValidFieldMapping(mapping, 1)).toBe(true)
    })
  })
})
