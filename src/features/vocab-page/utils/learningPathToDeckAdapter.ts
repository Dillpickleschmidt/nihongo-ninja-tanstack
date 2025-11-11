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
 * Result type for filtering modules - can be either a built-in vocab-practice module
 * or a user-created learning path module (deck with source === "learning_path")
 */
export type ModuleOrDeck =
  | { moduleId: string; module: DynamicModule }
  | { moduleId: string; deck: UserDeck }

/**
 * Filters a chapter's modules to include both built-in vocab-practice modules
 * and user-created learning path modules
 */
export function filterVocabPracticeModules(
  chapter: LearningPathChapter,
  userDecks?: UserDeck[],
): ModuleOrDeck[] {
  const results: ModuleOrDeck[] = []
  const decksArray = userDecks || []

  for (const moduleId of chapter.learning_path_item_ids) {
    const resolved = resolveModuleToUserDeck(moduleId, decksArray)

    if (resolved) {
      // Check if this is a built-in module (has the module property) or user deck
      const isBuiltInModule =
        (resolved as LearningPathDeckLike).module !== undefined

      if (isBuiltInModule) {
        results.push({
          moduleId,
          module: (resolved as LearningPathDeckLike).module!,
        })
      } else if (resolved.source === "learning_path") {
        // User deck modules with source === "learning_path"
        results.push({ moduleId, deck: resolved })
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
    user_id: "", // Empty string for built-in modules (UserDeck requires non-null)
    created_at: new Date().toISOString(),
    allowed_practice_modes: module.allowed_practice_modes || [
      "meanings",
      "spellings",
    ],
    module,
  }
}

/** Resolves a module path to UserDeck (checks user decks, then dynamic_modules) */
export function resolveModuleToUserDeck(
  modulePath: string,
  userDecks: UserDeck[],
): UserDeck | null {
  // First check if it's a user-created deck
  const userDeck = userDecks.find((d) => d.deck_id === modulePath)
  if (userDeck) {
    return userDeck
  }

  // Then check if it's a built-in vocab-practice module
  const builtInModule = dynamic_modules[modulePath]
  if (builtInModule && builtInModule.source_type === "vocab-practice") {
    return transformModuleToDeckLike(modulePath, builtInModule)
  }

  return null
}
