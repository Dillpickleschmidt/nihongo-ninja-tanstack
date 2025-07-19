import { createServerFn } from "@tanstack/solid-start"
import { vocabulary } from "@/data/vocabulary"
import type { VocabularyItem } from "@/data/types"

export const getVocabularyByKeys = createServerFn({ method: "GET" })
  .validator((keys: string[]) => keys)
  .handler(async ({ data: keys }): Promise<VocabularyItem[]> => {
    return keys
      .map((key) => vocabulary[key])
      .filter(Boolean) as VocabularyItem[]
  })
