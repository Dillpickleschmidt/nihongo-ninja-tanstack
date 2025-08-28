// src/data/utils/core.ts
// TODO: use server functions for fetching or make functions lazy in other files
import { textbooks } from "@/data/textbooks"
import { external_resources } from "@/data/external_resources"
import { static_modules } from "@/data/static_modules"
import { dynamic_modules } from "@/data/dynamic_modules"
import type {
  TextbookIDEnum,
  StaticModule,
  DynamicModule,
  BuiltInDeck,
  ExternalResourceCollection,
  Textbook,
  Deck,
} from "@/data/types"
import type { Chapter, VocabTextbook } from "@/features/vocab-page/types"

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
 * Removes learning_path_items and external_resource_ids from chapter property
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
        ({
          learning_path_items,
          external_resource_ids,
          isImported,
          ...chapter
        }) => chapter as Deck,
      ),
    },
  ])
}

/**
 * Retrieves the external resources for a given chapter deck.
 */
export function getExternalResources(
  deck: BuiltInDeck,
): ExternalResourceCollection {
  if (!deck.external_resource_ids) return {}

  return deck.external_resource_ids.reduce(
    (acc: ExternalResourceCollection, id: string) => {
      const resource = external_resources[id]
      if (resource) {
        acc[id] = resource
      }
      return acc
    },
    {},
  )
}

/**
 * Retrieves the lessons for a given chapter deck.
 */
export function getLessons(
  deck: BuiltInDeck,
): { key: string; lesson: StaticModule | DynamicModule; disabled?: boolean }[] {
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
        return { lesson, key: item.id, disabled: item.disabled }
      }

      return null
    })
    .filter(
      (
        result,
      ): result is { lesson: StaticModule | DynamicModule; key: string; disabled?: boolean } =>
        !!result,
    )
}

/**
 * Helper function to create a vocab chapter from a textbook chapter
 */
function createVocabChapter(chapter: BuiltInDeck): Chapter {
  const chapterNumber = parseInt(chapter.slug.split('-').pop()!)
  
  const vocabModules = chapter.learning_path_items
    .filter(item => item.type === "dynamic_module")
    .map(item => ({ item, module: dynamic_modules[item.id] }))
    .filter(({ module }) => module?.session_type === "vocab-practice")

  const decks = vocabModules.map(({ item, module }) => ({
    id: item.id,
    slug: item.id,
    title: module.title,
    description: module.instructions || module.description,
    chapter_number: chapterNumber,
    learning_path_items: [{ type: "dynamic_module" as const, id: item.id }],
    external_resource_ids: [],
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
export function getVocabPracticeModulesFromTextbooks(): [TextbookIDEnum, VocabTextbook][] {
  return Object.entries(textbooks)
    .map(([textbookId, textbook]) => {
      const chapters = textbook.chapters
        .map(chapter => createVocabChapter(chapter))
        .filter(chapter => chapter.decks.length > 0)

      return [
        textbookId as TextbookIDEnum,
        {
          id: textbook.id,
          name: textbook.name,
          short_name: textbook.short_name || textbook.name,
          chapters,
        }
      ] as [TextbookIDEnum, VocabTextbook]
    })
    .filter(([, textbook]) => textbook.chapters.length > 0)
}
