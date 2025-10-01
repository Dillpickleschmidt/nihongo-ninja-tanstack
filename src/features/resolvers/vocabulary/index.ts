// src/features/resolvers/vocabulary/index.ts
import { createServerFn } from "@tanstack/solid-start"
import type { VocabularyItem } from "@/data/types"
import type { OverrideSettings } from "@/features/resolvers/types"
import { resolveVocabularyEntries } from "./stacking"
import { DEFAULT_VOCABULARY_STACKS } from "@/features/main-cookies/schemas/user-settings"

/**
 * Core vocabulary resolver - handles vocabulary with override stacking
 * This is the single source of truth for vocabulary key-to-item resolution
 */
export const getVocabulary = createServerFn({ method: "GET" })
  .inputValidator(
    (data: {
      keys: string[]
      userOverrides?: OverrideSettings
      deck_id?: number
    }) => data,
  )
  .handler(
    async ({
      data: { keys, userOverrides, deck_id },
    }): Promise<VocabularyItem[]> => {
      // Use stacking system with user overrides or default stacks
      const effectiveStacks =
        userOverrides?.vocabularyOverrides ?? DEFAULT_VOCABULARY_STACKS

      // Batch resolve all vocabulary items at once
      const resolvedItems = await resolveVocabularyEntries(
        keys,
        effectiveStacks,
        undefined,
        deck_id,
      )

      // Convert Map to array, preserving order of requested keys
      const resultArray: VocabularyItem[] = []
      for (const key of keys) {
        const item = resolvedItems.get(key)
        if (item) {
          resultArray.push(item)
        }
      }

      return resultArray
    },
  )
