import { getDeckBySlug } from "@/data/utils/core"
import { static_modules } from "@/data/static_modules"
import type { TextbookIDEnum } from "@/data/types"

interface ModuleTile {
  title: string
  description?: string
  href: string
}

export interface ChapterContent {
  heading: string | undefined
  description: string | undefined
  features: string[] | undefined
  tiles: ModuleTile[]
}

export const getChapterContent = (
  textbookId: TextbookIDEnum,
  chapterSlug: string,
): ChapterContent => {
  const chapter = getDeckBySlug(textbookId, chapterSlug)
  if (!chapter) {
    throw new Error(`Chapter not found: ${textbookId}/${chapterSlug}`)
  }

  // Build tiles from learning_path_items using static_modules data
  const tiles = chapter.learning_path_items
    .map((itemId) => {
      const module = static_modules[itemId as keyof typeof static_modules]
      if (!module) return null

      return {
        title: module.title,
        description: module.description,
        href: module.link,
      }
    })
    .filter(Boolean) as ModuleTile[]

  return {
    heading: chapter.heading,
    description: chapter.description,
    features: chapter.features,
    tiles,
  }
}
