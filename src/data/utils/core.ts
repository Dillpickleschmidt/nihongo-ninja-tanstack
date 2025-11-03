// src/data/utils/core.ts
// TODO: use server functions for fetching or make functions lazy in other files
import { textbooks } from "@/data/textbooks"
import { chapters } from "@/data/chapters"
import { static_modules } from "@/data/static_modules"
import { dynamic_modules } from "@/data/dynamic_modules"
import { external_resources } from "@/data/external_resources"
import type {
  TextbookIDEnum,
  StaticModule,
  DynamicModule,
  BuiltInDeck,
  Textbook,
  Deck,
  ExternalResource,
} from "@/data/types"
import type { Chapter, VocabTextbook } from "@/features/vocab-page/types"

const modules = { ...static_modules, ...dynamic_modules, ...external_resources }

/**
 * Retrieves a specific deck (chapter) from a textbook or learning path by its slug.
 * Supports both textbook IDs and learning path IDs (as long as they're in the chapters structure).
 */
export function getDeckBySlug(
  learningPathId: string,
  deckSlug: string,
): BuiltInDeck | undefined {
  return chapters[learningPathId as TextbookIDEnum]?.[deckSlug]
}

/**
 * Gets a flattened learning path for an entire textbook or learning path across all chapters.
 * Works with both textbook IDs and generated learning path IDs.
 * @returns Array of module IDs in order across all chapters
 */
export function getLearningPathModules(learningPathId: string): string[] {
  const pathChaptersMap = chapters[learningPathId as TextbookIDEnum]
  if (!pathChaptersMap) return []
  return Object.values(pathChaptersMap).flatMap(
    (chapter) => chapter.learning_path_items,
  )
}

/* Constructs a minified version of the textbook type
 * Returns chapters as Decks (without learning_path_items)
 * @returns {MinimalTextbook[]} - Array of textbooks with chapters as Decks
 */
type MinimalTextbook = Omit<Textbook, "chapterSlugs"> & {
  chapters: Deck[]
}
export function getMinifiedTextbookEntries(): [
  TextbookIDEnum,
  MinimalTextbook,
][] {
  return Object.entries(textbooks).map(([textbookId, textbook]) => [
    textbookId as TextbookIDEnum,
    {
      ...textbook,
      chapters: textbook.chapterSlugs
        .map((slug) => {
          const chapter = chapters[textbookId as TextbookIDEnum]?.[slug]
          if (!chapter) return null
          const { learning_path_items, disabled_modules, ...deckInfo } = chapter
          return deckInfo as Deck
        })
        .filter((ch): ch is Deck => ch !== null),
    },
  ])
}

/**
 * Retrieves the modules for a given chapter deck.
 */
export function getModules(deck: BuiltInDeck): {
  key: string
  module: StaticModule | DynamicModule | ExternalResource
  disabled?: boolean
}[] {
  if (!deck.learning_path_items) return []

  return deck.learning_path_items
    .map((moduleId) => {
      const module = modules[moduleId]
      const disabled = deck.disabled_modules?.includes(moduleId)
      return module
        ? { module, key: moduleId, ...(disabled && { disabled: true }) }
        : null
    })
    .filter(
      (
        result,
      ): result is {
        module: StaticModule | DynamicModule | ExternalResource
        key: string
        disabled?: boolean
      } => result !== null,
    )
}

/**
 * Gets all dynamic modules by their session type for a specific textbook.
 * @param textbookId The textbook to filter modules from
 * @param sessionType The session type to filter by (e.g., "sentence-practice", "vocab-practice")
 * @returns Array of modules with matching session type, with their IDs included
 */
export function getModulesBySessionType(
  textbookId: TextbookIDEnum,
  sessionType: DynamicModule["session_type"],
): Array<{ id: string } & DynamicModule> {
  const filteredModules: Array<{ id: string } & DynamicModule> = []

  const textbookChapters = chapters[textbookId]
  if (!textbookChapters) return []

  // Get modules from each chapter using getModules
  for (const chapter of Object.values(textbookChapters)) {
    const chapterModules = getModules(chapter)

    // Filter for modules with matching session_type
    chapterModules.forEach(({ module, key }) => {
      if ("session_type" in module && module.session_type === sessionType) {
        filteredModules.push({
          id: key,
          ...(module as DynamicModule),
        })
      }
    })
  }

  return filteredModules
}

/**
 * Helper function to create a vocab chapter from a textbook chapter
 */
function createVocabChapter(
  chapter: BuiltInDeck,
  textbookId: TextbookIDEnum,
  chapterSlug: string,
): Chapter {
  const chapterNumber = parseInt(chapter.slug.split("-").pop()!)

  const vocabModules = chapter.learning_path_items
    .map((moduleId) => ({ moduleId, module: modules[moduleId] }))
    .filter(
      (item): item is { moduleId: string; module: DynamicModule } =>
        item.module !== undefined &&
        "session_type" in item.module &&
        item.module.session_type === "vocab-practice",
    )

  const decks = vocabModules.map(({ moduleId, module }) => ({
    id: moduleId,
    slug: moduleId,
    title: module.title,
    description: module.instructions || module.description,
    chapter_number: chapterNumber,
    learning_path_items: [moduleId],
    isImported: false,
  }))

  return {
    id: `${textbookId}_${chapterSlug}`,
    number: chapterNumber,
    title: chapter.title,
    decks,
  }
}

/**
 * Gets chapters for a learning path (textbook or generated).
 * Works with both static textbook IDs and generated learning path IDs.
 */
export function getChapters(learningPathId: string): BuiltInDeck[] {
  const textbook = textbooks[learningPathId as TextbookIDEnum]

  if (textbook) {
    const textbookChaptersMap = chapters[learningPathId as TextbookIDEnum]
    if (!textbookChaptersMap) return []
    return textbook.chapterSlugs.map((slug) => textbookChaptersMap[slug])
  }

  // TODO: Implement for generated learning paths when DB tables are ready
  return []
}

/**
 * Extracts vocab-practice dynamic modules from textbooks and returns them as individual BuiltInDecks.
 */
export function getVocabPracticeModulesFromTextbooks(): [
  TextbookIDEnum,
  VocabTextbook,
][] {
  return Object.entries(textbooks)
    .map(([textbookId, textbook]) => {
      const tbId = textbookId as TextbookIDEnum
      const chapterList = getChapters(tbId)
      const chapterVocabs = chapterList
        .map((chapter, index) => {
          const slug = textbook.chapterSlugs[index]
          return createVocabChapter(chapter, tbId, slug)
        })
        .filter((chapter) => chapter.decks.length > 0)

      return [
        tbId,
        {
          id: textbook.id,
          name: textbook.name,
          short_name: textbook.short_name || textbook.name,
          chapters: chapterVocabs,
        },
      ] as [TextbookIDEnum, VocabTextbook]
    })
    .filter(([, textbook]) => textbook.chapters && textbook.chapters.length > 0)
}
