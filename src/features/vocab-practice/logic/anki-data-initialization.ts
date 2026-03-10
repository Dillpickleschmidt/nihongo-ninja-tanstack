import { createEmptyCard } from "ts-fsrs"
import type { VocabHierarchy, PracticeMode } from "convex/validators"
import type {
  PracticeCard,
  PracticeSessionState,
  SessionCardStyle,
} from "../types"
import type { AnkiCardInfo } from "@/features/import/anki/anki-sync"
import { ANKI_MODEL_BY_NAME } from "@/features/import/anki/anki-models"
import { buildSessionQueues } from "./data-initialization"
import { addKanaAndRuby } from "@/data/utils/vocabulary/transforms"

function ankiCardToSessionStyle(
  ankiType: number,
  practiceItemType: PracticeCard["practiceItemType"],
): SessionCardStyle {
  const isKanjiOrRadical =
    practiceItemType === "kanji" || practiceItemType === "radical"

  switch (ankiType) {
    case 0: // new
      return isKanjiOrRadical ? "introduction" : "multiple-choice"
    case 1: // learning
      return "multiple-choice"
    case 2: // review
      return isKanjiOrRadical ? "flashcard" : "multiple-choice"
    default:
      return "multiple-choice"
  }
}

function parsePracticeItemType(
  nnKey: string,
): PracticeCard["practiceItemType"] {
  if (nnKey.startsWith("vocabulary:")) return "vocabulary"
  if (nnKey.startsWith("kanji:")) return "kanji"
  if (nnKey.startsWith("radical:")) return "radical"
  return "vocabulary"
}

function buildPracticeCardFromAnki(
  card: AnkiCardInfo,
  sessionScope: "module" | "review",
  mode: PracticeMode,
): PracticeCard | null {
  const modelDef = ANKI_MODEL_BY_NAME.get(card.modelName)
  if (!modelDef) return null

  const nnKeyField = card.fields.NnKey
  if (!nnKeyField) return null

  const key = nnKeyField.value
  const practiceItemType = parsePracticeItemType(key)

  const promptFieldValue = card.fields[modelDef.promptField]?.value || ""
  const answerFieldValue = card.fields[modelDef.answerField]?.value || ""
  const validAnswers = modelDef.validAnswers(answerFieldValue)

  // Build a minimal vocab item for display
  const word = promptFieldValue
  const english = validAnswers
  const vocabItem = {
    key: key.split(":").slice(1).join(":"),
    word,
    furigana: word,
    english,
  }
  const richVocab = addKanaAndRuby([vocabItem])[0]

  return {
    key,
    vocab: richVocab,
    fsrs: { card: createEmptyCard(new Date()), logs: [] },
    practiceMode: mode,
    practiceItemType,
    sessionStyle: ankiCardToSessionStyle(card.type, practiceItemType),
    prompt: promptFieldValue,
    validAnswers,
    sessionScope,
    isDisabled: false,
    ankiCardId: card.cardId,
    ankiCardType: card.type,
    ankiRenderedHtml: {
      question: card.question,
      answer: card.answer,
      css: card.css,
    },
  }
}

export function initializeAnkiPracticeSession(
  hierarchy: VocabHierarchy,
  moduleAnkiCards: AnkiCardInfo[],
  reviewAnkiCards: AnkiCardInfo[],
  mode: PracticeMode,
): PracticeSessionState {
  const cardMap = new Map<string, PracticeCard>()

  // Build module cards
  for (const ankiCard of moduleAnkiCards) {
    const practiceCard = buildPracticeCardFromAnki(ankiCard, "module", mode)
    if (practiceCard) {
      cardMap.set(practiceCard.key, practiceCard)
    }
  }

  // Build review cards
  for (const ankiCard of reviewAnkiCards) {
    const practiceCard = buildPracticeCardFromAnki(ankiCard, "review", mode)
    if (practiceCard && !cardMap.has(practiceCard.key)) {
      practiceCard.sessionStyle = "flashcard"
      cardMap.set(practiceCard.key, practiceCard)
    }
  }

  const queues = buildSessionQueues(cardMap, hierarchy, {
    enablePrerequisites: mode === "meanings",
    shuffle: false,
    isDue: (card) => card.ankiCardType !== 2,
  })

  return {
    cardMap,
    ...queues,
    activeQueue: [],
    isFinished: false,
  }
}
