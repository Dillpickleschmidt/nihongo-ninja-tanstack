import { createClientOnlyFn } from "@tanstack/solid-start"

const ANKI_CONNECT_URL = "http://localhost:8765"
const ANKI_CONNECT_VERSION = 6

interface AnkiConnectRequest {
  action: string
  version: number
  params?: Record<string, unknown>
}

interface AnkiConnectResponse<T = unknown> {
  result: T
  error: string | null
}

export interface AnkiCardField {
  value: string
  order: number
}

export interface AnkiCardInfo {
  answer: string
  question: string
  deckName: string
  modelName: string
  fieldOrder: number
  fields: Record<string, AnkiCardField>
  css: string
  cardId: number
  interval: number
  note: number
  ord: number
  type: number
  queue: number
  due: number
  reps: number
  lapses: number
  left: number
  mod?: number
}

async function ankiConnectRequest<T = unknown>(
  action: string,
  params?: Record<string, unknown>,
): Promise<T> {
  const request: AnkiConnectRequest = {
    action,
    version: ANKI_CONNECT_VERSION,
    params,
  }

  try {
    const response = await fetch(ANKI_CONNECT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(request),
    })

    if (!response.ok) {
      throw new Error(
        `AnkiConnect request failed: ${response.status} ${response.statusText}`,
      )
    }

    const data: AnkiConnectResponse<T> = await response.json()

    if (data.error) {
      throw new Error(`AnkiConnect error: ${data.error}`)
    }

    return data.result
  } catch (error) {
    if (error instanceof TypeError && error.message.includes("fetch")) {
      throw new Error(
        "Cannot connect to Anki. Make sure Anki is running with the AnkiConnect plugin installed.",
      )
    }
    throw error
  }
}

export const validateAnkiConnect = createClientOnlyFn(
  async (): Promise<{ success: boolean; error?: string }> => {
    try {
      const version = await ankiConnectRequest<number>("version")

      if (version !== ANKI_CONNECT_VERSION) {
        return {
          success: false,
          error: `AnkiConnect version mismatch. Expected ${ANKI_CONNECT_VERSION}, got ${version}`,
        }
      }

      return { success: true }
    } catch (error) {
      return {
        success: false,
        error:
          error instanceof Error ? error.message : "Unknown error occurred",
      }
    }
  },
)

export const getDeckNames = createClientOnlyFn(
  async (): Promise<string[]> => {
    return await ankiConnectRequest<string[]>("deckNames")
  },
)

export const findCards = createClientOnlyFn(
  async (query: string): Promise<number[]> => {
    return await ankiConnectRequest<number[]>("findCards", { query })
  },
)

export const getCardsInfo = createClientOnlyFn(
  async (cardIds: number[]): Promise<AnkiCardInfo[]> => {
    return await ankiConnectRequest<AnkiCardInfo[]>("cardsInfo", {
      cards: cardIds,
    })
  },
)

export const getDueCards = createClientOnlyFn(
  async (): Promise<AnkiCardInfo[]> => {
    const dueCardIds = await ankiConnectRequest<number[]>("findCards", {
      query: "is:due",
    })

    if (dueCardIds.length === 0) return []

    return await ankiConnectRequest<AnkiCardInfo[]>("cardsInfo", {
      cards: dueCardIds,
    })
  },
)

export const getAllSeenCards = createClientOnlyFn(
  async (): Promise<AnkiCardInfo[]> => {
    const seenCardIds = await ankiConnectRequest<number[]>("findCards", {
      query: "-is:new",
    })

    if (seenCardIds.length === 0) return []

    return await ankiConnectRequest<AnkiCardInfo[]>("cardsInfo", {
      cards: seenCardIds,
    })
  },
)

export const getWeekSeenCards = createClientOnlyFn(
  async (): Promise<AnkiCardInfo[]> => {
    const weekCardIds = await ankiConnectRequest<number[]>("findCards", {
      query: "introduced:7",
    })

    if (weekCardIds.length === 0) return []

    return await ankiConnectRequest<AnkiCardInfo[]>("cardsInfo", {
      cards: weekCardIds,
    })
  },
)

/**
 * Extract Japanese text from an Anki card by trying common field names
 * and falling back to searching all fields for Japanese characters
 */
export function extractJapaneseTextFromCard(card: AnkiCardInfo): string {
  if (!card.fields || typeof card.fields !== "object") return ""

  const commonFieldNames = [
    "Front",
    "Expression",
    "Word",
    "Kanji",
    "Sentence",
    "Question",
    "Vocabulary",
    "VocabKanji",
  ]

  for (const fieldName of commonFieldNames) {
    const field = card.fields[fieldName]
    if (field?.value) {
      const text = extractJapaneseChars(field.value)
      if (text) return text
    }
  }

  for (const fieldName in card.fields) {
    const field = card.fields[fieldName]
    if (field?.value) {
      const text = extractJapaneseChars(field.value)
      if (text) return text
    }
  }

  return ""
}

function extractJapaneseChars(text: string): string {
  const stripped = text.replace(/<[^>]*>/g, "")
  const japaneseRegex = /[\u3040-\u309f\u30a0-\u30ff\u4e00-\u9faf]+/g
  const matches = stripped.match(japaneseRegex)
  return matches ? matches.join("") : ""
}
