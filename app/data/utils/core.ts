// app/data/utils/core.ts
import { textbooks } from "@/data/textbooks"
import { external_resources } from "@/data/external_resources"
import { static_modules } from "@/data/static_modules"
import { dynamic_modules } from "@/data/dynamic_modules"
import { parseCookieHeader } from "@supabase/ssr"
import { isServer } from "solid-js/web"
import type {
  TextbookIDEnum,
  ExternalResource,
  StaticModule,
  DynamicModule,
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
    const cookies = parseCookieHeader(cookieString)
    const cookie = cookies.find((c) => c.name === name)
    return cookie?.value || null
  }
  return null
}

function setCookie(name: string, value: string, days: number = 365) {
  if (!isServer) {
    const expires = new Date()
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000)
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax`
  }
}

export function getTextbookChapter(
  textbookID: TextbookIDEnum,
  cookieString?: string,
): string {
  const stored = getCookie(textbookID, cookieString)

  if (stored) {
    // Check if the stored chapter exists in the textbook
    const textbookData = textbooks[textbookID]
    const chapterExists = textbookData?.chapters.some((ch) => ch.id === stored)
    if (chapterExists) {
      return stored
    }
  }

  // No valid chapter stored for this textbook, use first chapter
  const firstChapterID = getFirstChapter(textbookID)!
  setCookie(textbookID, firstChapterID)
  return firstChapterID
}

export function setTextbookChapter(textbook: TextbookIDEnum, chapter: string) {
  setCookie(textbook, chapter)
}

export function getActiveTextbook(cookieString?: string): TextbookIDEnum {
  const stored = getCookie("active_textbook", cookieString)

  if (stored && stored in textbooks) {
    return stored as TextbookIDEnum
  }

  // Default to genki_1 and save it
  setCookie("active_textbook", "genki_1")
  return "genki_1"
}

export function setActiveTextbook(textbook: TextbookIDEnum) {
  setCookie("active_textbook", textbook)
}

export function getChaptersForTextbook(textbook: TextbookIDEnum) {
  const textbookData = textbooks[textbook]
  if (!textbookData) return {}
  const chapters = textbookData.chapters
  return chapters.reduce(
    (acc, ch) => {
      acc[ch.id] = {
        title: ch.title,
        chapter_number: ch.chapter_number,
      }
      return acc
    },
    {} as Record<string, { title: string; chapter_number: number }>,
  )
}

export function getExternalResources(
  textbook: TextbookIDEnum,
  chapter: string,
): ExternalResource[] {
  const textbookData = textbooks[textbook]
  if (!textbookData) return []
  const chapterData = textbookData.chapters.find((ch) => ch.id === chapter)
  if (!chapterData || !chapterData.external_resource_ids) return []
  // Map the external resource IDs to actual external resource objects
  return chapterData.external_resource_ids
    .map((id) => external_resources[id])
    .filter(Boolean)
}

export function getLessons(
  textbook: TextbookIDEnum,
  chapter: string,
): (StaticModule | DynamicModule)[] {
  const textbookData = textbooks[textbook]
  if (!textbookData) return []
  const chapterData = textbookData.chapters.find((ch) => ch.id === chapter)
  if (!chapterData?.learning_path_items) return []
  // Map learning path items to actual module objects
  return chapterData.learning_path_items
    .map((item) => {
      if (item.type === "static_module") {
        return static_modules[item.id]
      } else if (item.type === "dynamic_module") {
        return dynamic_modules[item.id]
      }
      return null
    })
    .filter(Boolean) as (StaticModule | DynamicModule)[]
}

function getFirstChapter(textbook: TextbookIDEnum): string | null {
  const textbookData = textbooks[textbook]
  return textbookData?.chapters[0]?.id || null
}
