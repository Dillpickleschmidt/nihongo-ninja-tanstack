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
export function getExternalResources(deck: ChapterDeck): ExternalResource[] {
  if (!deck.external_resource_ids) return []

  // Map the external resource IDs to actual external resource objects
  return deck.external_resource_ids
    .map((id) => external_resources[id])
    .filter((resource): resource is ExternalResource => !!resource)
}

/**
 * Retrieves the lessons for a given chapter deck.
 */
export function getLessons(
  deck: ChapterDeck,
): (StaticModule | DynamicModule)[] {
  if (!deck.learning_path_items) return []

  // Map learning path items to actual module objects
  return deck.learning_path_items
    .map((item) => {
      if (item.type === "static_module") {
        return static_modules[item.id]
      } else if (item.type === "dynamic_module") {
        return dynamic_modules[item.id]
      }
      return null
    })
    .filter((module): module is StaticModule | DynamicModule => !!module)
}
