// Vocabulary database queries
import { dynamic_modules } from "@/data/dynamic_modules"
import { getVocabularyBySets } from "@/features/supabase/db/core-vocab"
import type { VocabularyItem } from "@/data/types"

export async function getVocabularyForModule(
  moduleId: string,
): Promise<VocabularyItem[]> {
  const module = dynamic_modules[moduleId] || null
  if (!module || !module.vocab_set_ids) {
    return []
  }

  return getVocabularyBySets(module.vocab_set_ids)
}
