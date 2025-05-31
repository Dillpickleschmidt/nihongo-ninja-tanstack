// app/data/utils/core.ts
import { textbooks } from "@/data/textbooks"
import { external_resources } from "@/data/external_resources"
import { static_modules } from "@/data/static_modules"
import { dynamic_modules } from "@/data/dynamic_modules"
import type {
  TextbookIDEnum,
  ExternalResource,
  StaticModule,
  DynamicModule,
} from "@/data/types"

export function getTextbookChapter(textbookID: TextbookIDEnum): string {
  const stored = localStorage.getItem(textbookID)

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
  localStorage.setItem(textbookID, firstChapterID)
  return firstChapterID
}

export function setTextbookChapter(textbook: TextbookIDEnum, chapter: string) {
  localStorage.setItem(textbook, chapter)
}

export function getActiveTextbook(): TextbookIDEnum {
  const stored = localStorage.getItem("active_textbook")
  if (stored && stored in textbooks) {
    return stored as TextbookIDEnum
  }
  // Default to genki_1 and save it
  localStorage.setItem("active_textbook", "genki_1")
  return "genki_1"
}

export function setActiveTextbook(textbook: TextbookIDEnum) {
  localStorage.setItem("active_textbook", textbook)
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
