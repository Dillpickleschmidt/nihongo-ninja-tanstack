// features/service-api-functions/anki/anki-connect-client.ts
import { createClientOnlyFn } from "@tanstack/start"

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
  async <T = any>(
    action: string,
    params?: Record<string, any>,
  ): Promise<T> => {
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
export const validateAnkiConnect = createClientOnlyFn(async (): Promise<{
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
      error: error instanceof Error ? error.message : "Unknown error occurred",
    }
  }
})

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
