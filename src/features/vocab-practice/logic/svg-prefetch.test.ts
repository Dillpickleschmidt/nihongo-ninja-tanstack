import { describe, expect, it, vi } from "vitest"
import { createEmptyCard } from "ts-fsrs"
import type { PracticeCard, PracticeSessionState } from "../types"
import {
  getPracticeSessionSvgCharacters,
  prefetchKanjiSvgCharacters,
} from "./svg-prefetch"

vi.mock("@/query/query-options", () => ({
  kanjiSvgPrefetchQueryOptions: (character: string) => ({
    queryKey: ["kanji-svg", character] as const,
  }),
}))

function createCard(
  key: string,
  overrides: Partial<PracticeCard> = {},
): PracticeCard {
  const character = key.split(":").slice(1).join(":")

  return {
    key,
    vocab: {
      key: character,
      word: character,
      furigana: character,
      english: [character],
      hiragana: [character],
      rubyText: [character],
    },
    fsrs: { card: createEmptyCard(new Date()), logs: [] },
    practiceMode: "meanings",
    practiceItemType: key.startsWith("radical:") ? "radical" : "kanji",
    sessionStyle: "introduction",
    prompt: character,
    validAnswers: [character],
    sessionScope: "module",
    isDisabled: false,
    ...overrides,
  }
}

function createState(cards: PracticeCard[]): PracticeSessionState {
  return {
    cardMap: new Map(cards.map((card) => [card.key, card])),
    moduleQueue: [],
    reviewQueue: [],
    activeQueue: [],
    isFinished: false,
    unlocksMap: new Map(),
    dependencyMap: new Map(),
    lockedKeys: new Set(),
  }
}

describe("getPracticeSessionSvgCharacters", () => {
  it("preserves queue priority and dedupes characters", () => {
    const state = createState([
      createCard("kanji:食"),
      createCard("radical:人"),
      createCard("kanji:飲"),
      createCard("radical:口"),
      createCard("kanji:見"),
      createCard("kanji:食-copy", {
        vocab: { ...createCard("kanji:食").vocab, word: "食" },
      }),
      createCard("radical:水"),
    ])
    state.activeQueue = ["kanji:食", "radical:人"]
    state.moduleQueue = ["kanji:飲", "kanji:食-copy"]
    state.reviewQueue = ["radical:口"]
    state.lockedKeys = new Set(["kanji:見"])

    expect(getPracticeSessionSvgCharacters(state)).toEqual([
      "食",
      "人",
      "飲",
      "口",
      "見",
      "水",
    ])
  })

  it("includes normal kanji/radical cards regardless of session style", () => {
    const state = createState([
      createCard("kanji:食", { sessionStyle: "multiple-choice" }),
      createCard("radical:人", { sessionStyle: "flashcard" }),
      createCard("kanji:飲", { sessionStyle: "done" }),
    ])

    expect(getPracticeSessionSvgCharacters(state)).toEqual(["食", "人", "飲"])
  })

  it("only includes Anki-rendered introduction cards", () => {
    const ankiRenderedHtml = { question: "", answer: "", css: "" }
    const state = createState([
      createCard("kanji:食", {
        sessionStyle: "flashcard",
        ankiRenderedHtml,
      }),
      createCard("kanji:飲", {
        sessionStyle: "introduction",
        ankiRenderedHtml,
      }),
      createCard("radical:人", {
        sessionStyle: "multiple-choice",
        ankiRenderedHtml,
      }),
    ])

    expect(getPracticeSessionSvgCharacters(state)).toEqual(["飲"])
  })
})

describe("prefetchKanjiSvgCharacters", () => {
  it("prefetches each unique character with kanji SVG query keys", async () => {
    const prefetchQuery = vi.fn().mockResolvedValue(undefined)

    await prefetchKanjiSvgCharacters({ prefetchQuery } as any, [
      "食",
      "飲",
      "食",
    ])

    expect(prefetchQuery).toHaveBeenCalledTimes(2)
    expect(
      prefetchQuery.mock.calls.map(([options]) => options.queryKey),
    ).toEqual([
      ["kanji-svg", "食"],
      ["kanji-svg", "飲"],
    ])
  })
})
