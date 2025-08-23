// src/features/resolvers/vocabulary/index.ts
import { createServerFn } from "@tanstack/solid-start"
import { vocabulary } from "@/data/vocabulary"
import type { VocabularyItem } from "@/data/types"

/**
 * Core vocabulary resolver - handles vocabulary with override stacking
 * This is the single source of truth for vocabulary key-to-item resolution
 */
export const getVocabulary = createServerFn({ method: "GET" })
  .validator((keys: string[]) => keys)
  .handler(async ({ data: keys }): Promise<VocabularyItem[]> => {
    // For now, just return from existing vocabulary collection
    // TODO: Add override stacking logic here
    return keys
      .map((key) => vocabulary[key])
      .filter(Boolean) as VocabularyItem[]
  })
