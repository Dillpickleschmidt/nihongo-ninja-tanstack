// src/data/utils/core.ts
import { textbooks } from "@/data/textbooks"
import { external_resources } from "@/data/external_resources"
import { static_modules } from "@/data/static_modules"
import { dynamic_modules } from "@/data/dynamic_modules"
import { isServer } from "solid-js/web"
import type {
  TextbookIDEnum,
  ExternalResource,
  StaticModule,
  DynamicModule,
  ChapterDeck,
} from "@/data/types"
import type { Textbook, Chapter, DeckPart } from "@/features/vocab-page/types"

// Cookie helper functions
function getCookie(name: string, cookieString?: string): string | null {
  if (!isServer) {
    // Client-side
    const value = `; ${document.cookie}`
    const parts = value.split(`; ${name}=`)
    if (parts.length === 2) return parts.pop()?.split(";").shift() || null
    return null
  } else if (cookieString) {
    // Server-side with cookie string passed in
    const cookies = new Map(
      cookieString.split("; ").map((c) => {
        const [key, ...v] = c.split("=")
        return [key, v.join("=")]
      }),
    )
    return cookies.get(name) || null
  }
  return null
}

function setCookie(name: string, value: string, days: number = 365) {
  if (!isServer) {
    const expires = new Date()
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000)
    // Ensure the value is encoded to handle JSON string safely
    const encodedValue = encodeURIComponent(value)
    document.cookie = `${name}=${encodedValue};expires=${expires.toUTCString()};path=/;SameSite=Lax`
  }
}

const ACTIVE_DECK_COOKIE_KEY = "active_deck"

type ActiveDeckCookie = {
  sourceType: "textbook" | "user" | "service"
  sourceId: string
  deckSlug: string
}

/**
 * Sets the user's last active deck in a cookie.
 */
export function setActiveDeck(
  sourceType: "textbook" | "user" | "service",
  sourceId: string,
  deckSlug: string,
) {
  const cookieValue: ActiveDeckCookie = { sourceType, sourceId, deckSlug }
  setCookie(ACTIVE_DECK_COOKIE_KEY, JSON.stringify(cookieValue))
}

/**
 * Gets the user's last active deck info from a cookie.
 */
export function getActiveDeckInfo(
  cookieHeader?: string,
): ActiveDeckCookie | null {
  const cookieStr = getCookie(ACTIVE_DECK_COOKIE_KEY, cookieHeader)

  if (!cookieStr) {
    return null
  }

  try {
    const decoded = decodeURIComponent(cookieStr)
    const parsed = JSON.parse(decoded) as ActiveDeckCookie

    if (
      parsed.sourceType &&
      parsed.sourceId &&
      parsed.deckSlug &&
      (parsed.sourceType === "textbook" || parsed.sourceType === "user")
    ) {
      return parsed
    }
    return null
  } catch (e) {
    console.error("Failed to parse active deck cookie:", e)
    return null
  }
}
/**
 * Retrieves a specific deck (chapter) from a textbook by its slug.
 */
export function getDeckBySlug(
  textbookId: TextbookIDEnum,
  deckSlug: string,
): ChapterDeck | undefined {
  const textbook = textbooks[textbookId]
  if (!textbook) {
    return undefined
  }
  return textbook.chapters.find((chapter) => chapter.slug === deckSlug)
}

/**
 * Retrieves all chapters for a given textbook.
 */
export function getChaptersForTextbook(
  textbookId: TextbookIDEnum,
): ChapterDeck[] {
  return textbooks[textbookId]?.chapters || []
}

/**
 * Retrieves the external resources for a given chapter deck.
 */
export function getExternalResources(deck: ChapterDeck): { resource: ExternalResource; key: string }[] {
  if (!deck.external_resource_ids) return []

  // Map the external resource IDs to actual external resource objects with their keys
  return deck.external_resource_ids
    .map((id) => {
      const resource = external_resources[id]
      if (resource) {
        return { resource, key: id }
      }
      return null
    })
    .filter((result): result is { resource: ExternalResource; key: string } => !!result)
}

/**
 * Retrieves the lessons for a given chapter deck.
 */
export function getLessons(
  deck: ChapterDeck,
): { lesson: StaticModule | DynamicModule; key: string }[] {
  if (!deck.learning_path_items) return []

  // Map learning path items to actual module objects with their keys
  return deck.learning_path_items
    .map((item) => {
      let lesson: StaticModule | DynamicModule | null = null
      
      if (item.type === "static_module") {
        lesson = static_modules[item.id]
      } else if (item.type === "dynamic_module") {
        lesson = dynamic_modules[item.id]
      }
      
      if (lesson) {
        return { lesson, key: item.id }
      }
      
      return null
    })
    .filter((result): result is { lesson: StaticModule | DynamicModule; key: string } => !!result)
}

/**
 * Extracts vocab-practice dynamic modules from the textbooks structure
 * and formats them for the vocab page Built-in Decks interface.
 */
export function getVocabPracticeModulesFromTextbooks(): Textbook[] {
  return Object.entries(textbooks).map(([, textbook]) => {
    const chapters: Chapter[] = textbook.chapters.map((chapter) => {
      // Extract vocab-practice modules from this chapter
      const vocabPracticeModules = chapter.learning_path_items
        .filter(item => item.type === "dynamic_module")
        .map(item => {
          const module = dynamic_modules[item.id]
          return module && module.session_type === "vocab-practice" 
            ? { module, key: item.id }
            : null
        })
        .filter((result): result is { module: DynamicModule; key: string } => !!result)

      // Convert to DeckPart interface
      const parts: DeckPart[] = vocabPracticeModules.map((item, index) => ({
        id: item.key,
        name: item.module.title,
        partNumber: index + 1,
        totalParts: vocabPracticeModules.length,
        description: item.module.description || "",
        isImported: false, // Default to false, will be managed by vocab page state
      }))

      return {
        id: chapter.id,
        number: chapter.chapter_number,
        title: chapter.title,
        parts,
      }
    })
    .filter(chapter => chapter.parts.length > 0) // Only include chapters with vocab-practice modules

    return {
      id: textbook.id,
      name: textbook.name,
      shortName: textbook.short_name || textbook.name,
      chapters,
    }
  })
  .filter(textbook => textbook.chapters.length > 0) // Only include textbooks with vocab-practice modules
}
