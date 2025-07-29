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
import type { Chapter } from "@/features/vocab-page/types"

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
export function getMinifiedTextbookEntries(): [TextbookIDEnum, MinimalTextbook][] {
  return Object.entries(textbooks).map(([textbookId, textbook]) => [
    textbookId as TextbookIDEnum,
    {
      ...textbook,
      chapters: textbook.chapters.map(({ 
        learning_path_items, 
        external_resource_ids, 
        chapter_number, 
        isImported, 
        ...chapter 
      }) => chapter as Deck)
    }
  ])
}

/**
 * Retrieves the external resources for a given chapter deck.
 */
export function getExternalResources(deck: BuiltInDeck): ExternalResourceCollection {
  if (!deck.external_resource_ids) return {}

  return deck.external_resource_ids.reduce((acc: ExternalResourceCollection, id: string) => {
    const resource = external_resources[id]
    if (resource) {
      acc[id] = resource
    }
    return acc
  }, {})
}

/**
 * Retrieves the lessons for a given chapter deck.
 */
export function getLessons(
  deck: BuiltInDeck,
): { key: string; lesson: StaticModule | DynamicModule  }[] {
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

      // Convert to BuiltInDeck interface
      const parts: BuiltInDeck[] = vocabPracticeModules.map((item) => ({
        id: item.key,
        slug: item.key,
        title: `${textbook.short_name || textbook.name} Ch.${chapter.chapter_number} ${item.module.title}`,
        description: item.module.description,
        chapter_number: chapter.chapter_number,
        learning_path_items: [{ type: "dynamic_module", id: item.key }],
        external_resource_ids: [],
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
      short_name: textbook.short_name || textbook.name,
      chapters,
    }
  })
  .filter(textbook => textbook.chapters.length > 0) // Only include textbooks with vocab-practice modules
}
