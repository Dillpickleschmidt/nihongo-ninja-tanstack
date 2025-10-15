// features/service-api-functions/anki/anki-connect-client.ts
import { createClientOnlyFn } from "@tanstack/solid-start"

const ANKI_CONNECT_URL = "http://localhost:8765"
const ANKI_CONNECT_VERSION = 6

interface AnkiConnectRequest {
  action: string
  version: number
  params?: Record<string, any>
}

interface AnkiConnectResponse<T = any> {
  result: T
  error: string | null
}

/**
 * Make a request to AnkiConnect API
 */
const ankiConnectRequest = createClientOnlyFn(
  async <T = any>(action: string, params?: Record<string, any>): Promise<T> => {
    const request: AnkiConnectRequest = {
      action,
      version: ANKI_CONNECT_VERSION,
      params,
    }

    try {
      const response = await fetch(ANKI_CONNECT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
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
  },
)

/**
 * Validate AnkiConnect connection by checking version
 */
export const validateAnkiConnect = createClientOnlyFn(
  async (): Promise<{
    success: boolean
    error?: string
  }> => {
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

/**
 * Get list of all deck names
 */
export const getDeckNames = createClientOnlyFn(async (): Promise<string[]> => {
  return await ankiConnectRequest<string[]>("deckNames")
})

/**
 * Find cards matching a query
 */
export const findCards = createClientOnlyFn(
  async (query: string): Promise<number[]> => {
    return await ankiConnectRequest<number[]>("findCards", { query })
  },
)

/**
 * Get detailed information about cards
 */
export const getCardsInfo = createClientOnlyFn(
  async (cardIds: number[]): Promise<any[]> => {
    return await ankiConnectRequest<any[]>("cardsInfo", { cards: cardIds })
  },
)

/**
 * Get all due cards with their details
 */
export const getDueCards = createClientOnlyFn(async (): Promise<any[]> => {
  const dueCardIds = await ankiConnectRequest<number[]>("findCards", {
    query: "is:due",
  })

  if (dueCardIds.length === 0) {
    return []
  }

  const cardsInfo = await ankiConnectRequest<any[]>("cardsInfo", {
    cards: dueCardIds,
  })

  return cardsInfo
})

/**
 * Get all seen/reviewed cards (not new) with their details
 */
export const getAllSeenCards = createClientOnlyFn(async (): Promise<any[]> => {
  const seenCardIds = await ankiConnectRequest<number[]>("findCards", {
    query: "-is:new",
  })

  if (seenCardIds.length === 0) {
    return []
  }

  const cardsInfo = await ankiConnectRequest<any[]>("cardsInfo", {
    cards: seenCardIds,
  })

  return cardsInfo
})

/**
 * Get cards that were introduced (first seen) in the last 7 days
 */
export const getWeekSeenCards = createClientOnlyFn(async (): Promise<any[]> => {
  const weekCardIds = await ankiConnectRequest<number[]>("findCards", {
    query: "introduced:7",
  })

  if (weekCardIds.length === 0) {
    return []
  }

  const cardsInfo = await ankiConnectRequest<any[]>("cardsInfo", {
    cards: weekCardIds,
  })

  return cardsInfo
})

/**
 * Extract Japanese text from an Anki card by trying common field names
 * and falling back to searching all fields for Japanese characters
 */
export function extractJapaneseTextFromCard(card: any): string {
  if (!card.fields || typeof card.fields !== "object") {
    return ""
  }

  // Common field names used in Japanese decks (in priority order)
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

  // Try common field names first
  for (const fieldName of commonFieldNames) {
    const field = card.fields[fieldName]
    if (field?.value) {
      const text = extractJapaneseChars(field.value)
      if (text) return text
    }
  }

  // Fall back to searching all fields
  for (const fieldName in card.fields) {
    const field = card.fields[fieldName]
    if (field?.value) {
      const text = extractJapaneseChars(field.value)
      if (text) return text
    }
  }

  return ""
}

/**
 * Extract Japanese characters from text (hiragana, katakana, kanji)
 * Strips HTML tags and returns only Japanese characters
 */
function extractJapaneseChars(text: string): string {
  // Remove HTML tags
  const stripped = text.replace(/<[^>]*>/g, "")

  // Match Japanese characters: hiragana, katakana, kanji
  const japaneseRegex = /[\u3040-\u309f\u30a0-\u30ff\u4e00-\u9faf]+/g
  const matches = stripped.match(japaneseRegex)

  return matches ? matches.join("") : ""
}
