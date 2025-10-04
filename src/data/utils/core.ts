// src/data/utils/core.ts
// TODO: use server functions for fetching or make functions lazy in other files
import { textbooks } from "@/data/textbooks"
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
 * Retrieves a specific deck (chapter) from a textbook by its slug.
 */
export function getDeckBySlug(
  textbookId: TextbookIDEnum,
  deckSlug: string,
): BuiltInDeck | undefined {
  const textbook = textbooks[textbookId]
  if (!textbook) {
    return undefined
  }
  return textbook.chapters.find((chapter) => chapter.slug === deckSlug)
}

/* Constructs a minified version of the textbook type
 * Removes learning_path_items from chapter property
 * @returns {MinimalTextbook[]} - Array of textbooks with chapters as Decks
 */
type MinimalTextbook = Omit<Textbook, "chapters"> & {
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
      chapters: textbook.chapters.map(
        ({ learning_path_items, disabled_modules, ...chapter }) =>
          chapter as Deck,
      ),
    },
  ])
}

/**
 * Retrieves the modules for a given chapter deck.
 */
export function getModules(deck: BuiltInDeck): {
  key: string
  lesson: StaticModule | DynamicModule | ExternalResource
  disabled?: boolean
}[] {
  if (!deck.learning_path_items) return []

  return deck.learning_path_items
    .map((moduleId) => {
      const lesson = modules[moduleId]
      const disabled = deck.disabled_modules?.includes(moduleId)
      return lesson
        ? { lesson, key: moduleId, ...(disabled && { disabled: true }) }
        : null
    })
    .filter(
      (
        result,
      ): result is {
        lesson: StaticModule | DynamicModule | ExternalResource
        key: string
        disabled?: boolean
      } => result !== null,
    )
}

// Backward compatibility alias
export const getLessons = getModules

/**
 * Helper function to create a vocab chapter from a textbook chapter
 */
function createVocabChapter(chapter: BuiltInDeck): Chapter {
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
    id: chapter.id,
    number: chapterNumber,
    title: chapter.title,
    decks,
  }
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
      const chapters = textbook.chapters
        .map((chapter) => createVocabChapter(chapter))
        .filter((chapter) => chapter.decks.length > 0)

      return [
        textbookId as TextbookIDEnum,
        {
          id: textbook.id,
          name: textbook.name,
          short_name: textbook.short_name || textbook.name,
          chapters,
        },
      ] as [TextbookIDEnum, VocabTextbook]
    })
    .filter(([, textbook]) => textbook.chapters.length > 0)
}
