// features/vocab-page/utils/learningPathToDeckAdapter.ts
import type { DynamicModule, LearningPathChapter } from "@/data/types"
import { dynamic_modules } from "@/data/dynamic_modules"

/**
 * Transforms a learning path chapter and its vocab-practice modules
 * into a structure compatible with the deck UI
 *
 * Extends UserDeck to ensure type compatibility without assertions
 */
export interface LearningPathDeckLike extends Omit<UserDeck, "module"> {
  // Non-DB fields for UI
  module?: DynamicModule
}

/**
 * Result type for filtering modules - can be either a static vocab-practice module
 * or a user-created learning path module (deck with source === "learning_path")
 */
export type ModuleOrDeck =
  | { moduleId: string; module: DynamicModule }
  | { moduleId: string; deck: UserDeck }

/**
 * Filters a chapter's modules to include both static vocab-practice modules
 * and user-created learning path modules
 */
export function filterVocabPracticeModules(
  chapter: LearningPathChapter,
  userDecks?: UserDeck[],
): ModuleOrDeck[] {
  const results: ModuleOrDeck[] = []

  // Add static vocab-practice modules
  for (const moduleId of chapter.learning_path_item_ids) {
    const module = dynamic_modules[moduleId]
    if (module && module.source_type === "vocab-practice") {
      results.push({ moduleId, module })
    }
  }

  // Add user deck modules with source === "learning_path"
  if (userDecks) {
    for (const deck of userDecks) {
      if (
        deck.source === "learning_path" &&
        chapter.learning_path_item_ids.includes(deck.deck_id)
      ) {
        results.push({ moduleId: deck.deck_id, deck })
      }
    }
  }

  return results
}

export function transformModuleToDeckLike(
  moduleId: string,
  module: DynamicModule,
): LearningPathDeckLike {
  return {
    deck_id: moduleId,
    deck_name: module.title,
    deck_description: module.description || null,
    source: "learning_path",
    folder_id: null,
    original_deck_id: moduleId, // Preserve module ID for routing to static route
    user_id: "", // Empty string for static modules (UserDeck requires non-null)
    created_at: new Date().toISOString(),
    allowed_practice_modes: module.allowed_practice_modes || [
      "meanings",
      "spellings",
    ],
    module,
  }
}
