import { toTsFsrsCard } from "convex/model/fsrs"
import type { PracticeSessionItemData } from "convex/model/practice"
import type { PracticeMode, VocabHierarchy } from "convex/validators"
import {
  initializePracticeSession,
  type FSRSCardInput,
  type PracticeItemData,
} from "./data-initialization"

const EMPTY_HIERARCHY: VocabHierarchy = {
  vocabulary: [],
  kanji: [],
  radicals: [],
}

const EMPTY_ITEM_DATA: PracticeItemData = {
  vocabulary: [],
  kanji: [],
  radicals: [],
  fsrsCards: [],
}

type DeckScope = {
  hierarchy: VocabHierarchy
  moduleData: PracticeSessionItemData
  includeReviews: boolean
}

export function buildFsrsSessionState(
  reviewData: PracticeSessionItemData,
  mode: PracticeMode,
  deck?: DeckScope,
) {
  return initializePracticeSession(
    deck?.hierarchy ?? EMPTY_HIERARCHY,
    deck ? normalizeItemData(deck.moduleData) : EMPTY_ITEM_DATA,
    normalizeItemData(reviewData),
    mode,
    false,
    true,
    deck?.includeReviews ?? true,
  )
}

function normalizeItemData(data: PracticeSessionItemData): PracticeItemData {
  return {
    vocabulary: data.vocabulary,
    kanji: data.kanji,
    radicals: data.radicals,
    fsrsCards: data.fsrsCards.map(toFsrsCardInput),
  }
}

function toFsrsCardInput(card: PracticeSessionItemData["fsrsCards"][number]): FSRSCardInput {
  return {
    practiceItemKey: card.practiceItemKey,
    card: toTsFsrsCard(card),
    mode: card.mode,
    type: card.type,
  }
}
