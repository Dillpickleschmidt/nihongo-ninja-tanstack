import type { PracticeMode, VocabularyItem } from "convex/validators"
import {
  findNotes,
  notesInfo,
  findCards,
  getCardsInfo,
  addNotes,
  answerCards,
  type AnkiNote,
  type AnkiCardInfo,
} from "./anki-connect-client"
import { ANKI_MODELS } from "./anki-models"
import { addKanaAndRuby } from "@/data/utils/vocabulary/transforms"

export { type AnkiCardInfo } from "./anki-connect-client"

/**
 * Build Anki notes from display data (vocabulary items, kanji entries, etc.)
 */
export function buildModuleNotesFromData(
  vocabulary: VocabularyItem[],
  kanji: { kanji: string; meanings: string[] }[],
  radicals: { radical: string; meanings: string[] }[],
  mode: PracticeMode,
  deckName: string,
): AnkiNote[] {
  const notes: AnkiNote[] = []
  const dupOptions = {
    allowDuplicate: false,
    duplicateScope: "deck" as const,
    duplicateScopeOptions: { deckName },
  }

  if (mode === "meanings") {
    for (const vocab of vocabulary) {
      notes.push({
        deckName,
        modelName: ANKI_MODELS.vocabMeanings.modelName,
        fields: {
          NnKey: `vocabulary:${vocab.word}`,
          Word: vocab.word,
          Meaning: vocab.english.join(", "),
        },
        options: dupOptions,
      })
    }

    for (const k of kanji) {
      notes.push({
        deckName,
        modelName: ANKI_MODELS.symbolMeanings.modelName,
        fields: {
          NnKey: `kanji:${k.kanji}`,
          Symbol: k.kanji,
          Meaning: k.meanings.join(", "),
        },
        options: dupOptions,
      })
    }

    for (const r of radicals) {
      notes.push({
        deckName,
        modelName: ANKI_MODELS.symbolMeanings.modelName,
        fields: {
          NnKey: `radical:${r.radical}`,
          Symbol: r.radical,
          Meaning: r.meanings.join(", "),
        },
        options: dupOptions,
      })
    }
  } else {
    // Spellings mode - vocab only, derive hiragana from furigana
    const richVocab = addKanaAndRuby(vocabulary)
    for (const vocab of richVocab) {
      notes.push({
        deckName,
        modelName: ANKI_MODELS.spellings.modelName,
        fields: {
          NnKey: `vocabulary:${vocab.word}`,
          Meaning: vocab.english.join(", "),
          Spelling: vocab.hiragana[0] || "",
        },
        options: dupOptions,
      })
    }
  }

  return notes
}

export async function checkModuleSync(
  notes: AnkiNote[],
  deckName: string,
): Promise<{ toAdd: AnkiNote[]; alreadyExist: number }> {
  const toAdd: AnkiNote[] = []
  let alreadyExist = 0

  for (const note of notes) {
    const nnKey = note.fields.NnKey
    const found = await findNotes(`deck:"${deckName}" NnKey:"${nnKey}"`)
    if (found.length > 0) {
      alreadyExist++
    } else {
      toAdd.push(note)
    }
  }

  return { toAdd, alreadyExist }
}

export async function pushNotesToAnki(
  notes: AnkiNote[],
): Promise<(number | null)[]> {
  if (notes.length === 0) return []
  return await addNotes(notes)
}

export async function fetchModuleCardData(
  nnKeys: string[],
  deckName: string,
): Promise<AnkiCardInfo[]> {
  if (nnKeys.length === 0) return []

  const allNoteIds: number[] = []
  for (const key of nnKeys) {
    const noteIds = await findNotes(`deck:"${deckName}" NnKey:"${key}"`)
    allNoteIds.push(...noteIds)
  }

  if (allNoteIds.length === 0) return []

  const noteInfos = await notesInfo(allNoteIds)
  const allCardIds = noteInfos.flatMap((n) => n.cards)

  if (allCardIds.length === 0) return []
  return await getCardsInfo(allCardIds)
}

export async function fetchDueReviewCards(
  deckName: string,
  excludeNnKeys: Set<string>,
): Promise<AnkiCardInfo[]> {
  const dueCardIds = await findCards(`is:due deck:"${deckName}"`)
  if (dueCardIds.length === 0) return []

  const cards = await getCardsInfo(dueCardIds)
  return cards.filter((card) => {
    const nnKeyField = card.fields.NnKey
    if (!nnKeyField) return true
    return !excludeNnKeys.has(nnKeyField.value)
  })
}

export async function gradeAnkiCard(
  cardId: number,
  ease: number,
): Promise<boolean> {
  const results = await answerCards([{ cardId, ease }])
  return results[0] === true
}
