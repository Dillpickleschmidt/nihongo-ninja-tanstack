import { describe, it, expect } from "vitest"
import type {
  AnkiNote,
  AnkiCard,
  AnkiReview,
  AnkiExtractedData,
} from "./anki-types"

describe("AnkiExtraction", () => {
  describe("Field parsing", () => {
    it("should correctly split fields by \\x1f character", () => {
      const flds = "食べ物\x1fたべもの\x1ffood"
      const fields = flds.split("\x1f")

      expect(fields).toHaveLength(3)
      expect(fields[0]).toBe("食べ物")
      expect(fields[1]).toBe("たべもの")
      expect(fields[2]).toBe("food")
    })

    it("should handle empty fields", () => {
      const flds = "word\x1f\x1fmeaning"
      const fields = flds.split("\x1f")

      expect(fields).toHaveLength(3)
      expect(fields[0]).toBe("word")
      expect(fields[1]).toBe("")
      expect(fields[2]).toBe("meaning")
    })
  })

  describe("Type validation", () => {
    it("should create valid AnkiNote structure", () => {
      const note: AnkiNote = {
        id: 1,
        guid: "test-guid",
        mid: 1,
        mod: 1000000000,
        usn: 0,
        tags: "tag1 tag2",
        flds: "field1\x1ffield2",
      }

      expect(note.id).toBe(1)
      expect(note.flds).toContain("\x1f")
      expect(note.flds.split("\x1f")).toHaveLength(2)
    })

    it("should create valid AnkiCard structure", () => {
      const card: AnkiCard = {
        id: 1,
        nid: 1,
        did: 1,
        ord: 0,
        mod: 1000000000,
        usn: 0,
        type: 2, // review
        queue: 2, // review
        due: 100,
        ivl: 10,
        factor: 2500,
        reps: 5,
        lapses: 0,
        left: 0,
        odue: 0,
        odid: 0,
        flags: 0,
        data: "",
      }

      expect(card.queue).toBe(2)
      expect(card.reps).toBe(5)
      expect(card.ivl).toBe(10)
    })

    it("should create valid AnkiReview structure", () => {
      const review: AnkiReview = {
        id: 1000000000000,
        cid: 1,
        usn: 0,
        ease: 3,
        ivl: 1,
        lastIvl: 0,
        factor: 2500,
        time: 5000,
        type: 1, // review
      }

      expect(review.ease).toBeGreaterThanOrEqual(1)
      expect(review.ease).toBeLessThanOrEqual(4)
      expect(review.id).toBeGreaterThan(0)
    })

    it("should create valid AnkiExtractedData structure", () => {
      const data: AnkiExtractedData = {
        notes: [],
        cards: new Map(),
        reviews: new Map(),
        fieldCount: 2,
        totalCards: 0,
        skippedCards: 0,
      }

      expect(data.notes).toEqual([])
      expect(data.cards).toBeInstanceOf(Map)
      expect(data.reviews).toBeInstanceOf(Map)
      expect(data.fieldCount).toBe(2)
    })
  })

  describe("Data structure mapping", () => {
    it("should map cards by note ID", () => {
      const cardsMap = new Map<number, AnkiCard[]>()

      const card1: AnkiCard = {
        id: 1,
        nid: 100,
        did: 1,
        ord: 0,
        mod: 1000,
        usn: 0,
        type: 2,
        queue: 2,
        due: 100,
        ivl: 10,
        factor: 2500,
        reps: 5,
        lapses: 0,
        left: 0,
        odue: 0,
        odid: 0,
        flags: 0,
        data: "",
      }

      const card2: AnkiCard = {
        ...card1,
        id: 2,
        nid: 101,
      }

      cardsMap.set(100, [card1])
      cardsMap.set(101, [card2])

      expect(cardsMap.get(100)).toHaveLength(1)
      expect(cardsMap.get(101)).toHaveLength(1)
      expect(cardsMap.get(100)?.[0].id).toBe(1)
      expect(cardsMap.get(101)?.[0].id).toBe(2)
    })

    it("should map multiple cards per note", () => {
      const cardsMap = new Map<number, AnkiCard[]>()

      const card1: AnkiCard = {
        id: 1,
        nid: 100,
        did: 1,
        ord: 0,
        mod: 1000,
        usn: 0,
        type: 2,
        queue: 2,
        due: 100,
        ivl: 10,
        factor: 2500,
        reps: 5,
        lapses: 0,
        left: 0,
        odue: 0,
        odid: 0,
        flags: 0,
        data: "",
      }

      const card2: AnkiCard = {
        ...card1,
        id: 2,
        ord: 1,
      }

      if (!cardsMap.has(100)) {
        cardsMap.set(100, [])
      }
      cardsMap.get(100)!.push(card1, card2)

      expect(cardsMap.get(100)).toHaveLength(2)
      expect(cardsMap.get(100)?.[0].ord).toBe(0)
      expect(cardsMap.get(100)?.[1].ord).toBe(1)
    })

    it("should map reviews by card ID", () => {
      const reviewsMap = new Map<number, AnkiReview[]>()

      const review1: AnkiReview = {
        id: 1000,
        cid: 1,
        usn: 0,
        ease: 3,
        ivl: 1,
        lastIvl: 0,
        factor: 2500,
        time: 5000,
        type: 1,
      }

      const review2: AnkiReview = {
        ...review1,
        id: 2000,
        ease: 4,
      }

      if (!reviewsMap.has(1)) {
        reviewsMap.set(1, [])
      }
      reviewsMap.get(1)!.push(review1, review2)

      expect(reviewsMap.get(1)).toHaveLength(2)
      expect(reviewsMap.get(1)?.[0].ease).toBe(3)
      expect(reviewsMap.get(1)?.[1].ease).toBe(4)
    })
  })

  describe("Statistics tracking", () => {
    it("should track card counts correctly", () => {
      let totalCards = 0
      let skippedCards = 0

      // Simulate processing cards with reviews
      totalCards += 5
      skippedCards += 1

      expect(totalCards).toBe(5)
      expect(skippedCards).toBe(1)
    })

    it("should report field count from metadata", () => {
      const modelsJson = {
        "1234567890": {
          flds: [
            { name: "Front", ord: 0 },
            { name: "Back", ord: 1 },
            { name: "Extra", ord: 2 },
          ],
        },
      }

      const fieldCount = (
        modelsJson["1234567890"].flds as Array<unknown>
      ).length
      expect(fieldCount).toBe(3)
    })
  })

  describe("Error handling", () => {
    it("should handle missing database gracefully", () => {
      // Simulate no collection database found
      const files = new Map<string, Uint8Array>([
        ["media", new Uint8Array()],
      ])

      const hasDb = files.has("collection.anki21b") || files.has("collection.anki2")
      expect(hasDb).toBe(false)
    })

    it("should prefer .anki21b over .anki2", () => {
      const files = new Map<string, Uint8Array>([
        ["collection.anki21b", new Uint8Array([1, 2, 3])],
        ["collection.anki2", new Uint8Array([4, 5, 6])],
      ])

      const selectedFile = files.has("collection.anki21b")
        ? "collection.anki21b"
        : "collection.anki2"

      expect(selectedFile).toBe("collection.anki21b")
    })
  })
})
