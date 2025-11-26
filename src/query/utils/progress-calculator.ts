import { getCoreVocabularySets } from "@/features/supabase/db/core-vocab"
import { getFSRSCards, type FSRSCardData } from "@/features/supabase/db/fsrs"
import { dynamic_modules } from "@/data/dynamic_modules"
import type { VocabModuleProgress } from "@/query/query-options"

/**
 * Fetch all vocabulary sets for a list of module IDs
 */
export async function fetchVocabSetsForModules(
  moduleIds: string[],
): Promise<Map<string, string[]>> {
  // Collect all vocab set IDs needed across all modules
  const allVocabSetIds = new Set<string>()
  moduleIds.forEach((moduleId) => {
    const module = dynamic_modules[moduleId]
    if (module?.vocab_set_ids) {
      module.vocab_set_ids.forEach((setId) => allVocabSetIds.add(setId))
    }
  })

  if (allVocabSetIds.size === 0) return new Map()

  // Fetch all vocabulary sets in a single query
  const vocabSets = await getCoreVocabularySets(Array.from(allVocabSetIds))
  return new Map(Object.entries(vocabSets))
}

/**
 * Build a searchable index of FSRS cards by "key:mode" for O(1) lookups
 */
export function buildFSRSCardIndex(
  cards: FSRSCardData[],
): Map<string, FSRSCardData> {
  const index = new Map<string, FSRSCardData>()
  cards.forEach((card) => {
    if (card.type === "vocabulary") {
      index.set(`${card.practice_item_key}:${card.mode}`, card)
    }
  })
  return index
}

/**
 * Calculate progress for a single module's vocabulary
 */
export function calculateModuleProgress(
  vocabKeys: string[],
  allowedModes: string[],
  fsrsCardIndex: Map<string, FSRSCardData>,
): VocabModuleProgress {
  const meaningsAllowed = allowedModes.includes("meanings")
  const spellingsAllowed = allowedModes.includes("spellings")

  let total = 0
  let completed = 0
  let meaningsTotal = 0
  let meaningsCompleted = 0
  let spellingsTotal = 0
  let spellingsCompleted = 0

  for (const key of vocabKeys) {
    // Check meanings if allowed
    if (meaningsAllowed) {
      meaningsTotal++
      const meaningCard = fsrsCardIndex.get(`${key}:meanings`)
      if (meaningCard) {
        meaningsCompleted++
        completed++
      }
      total++
    }

    // Check spellings if allowed
    if (spellingsAllowed) {
      spellingsTotal++
      const spellingCard = fsrsCardIndex.get(`${key}:spellings`)
      if (spellingCard) {
        spellingsCompleted++
        completed++
      }
      total++
    }
  }

  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0
  const meaningsPercentage =
    meaningsTotal > 0
      ? Math.round((meaningsCompleted / meaningsTotal) * 100)
      : 0
  const spellingsPercentage =
    spellingsTotal > 0
      ? Math.round((spellingsCompleted / spellingsTotal) * 100)
      : 100

  return {
    completed,
    total,
    percentage,
    meanings: {
      completed: meaningsCompleted,
      total: meaningsTotal,
      percentage: meaningsPercentage,
    },
    spellings: {
      completed: spellingsCompleted,
      total: spellingsTotal,
      percentage: spellingsPercentage,
    },
  }
}

/**
 * Build module progress map for all upcoming modules
 */
export async function buildModuleProgressMap(
  userId: string,
  vocabPracticeModuleIds: string[],
): Promise<Record<string, VocabModuleProgress>> {
  if (!userId || vocabPracticeModuleIds.length === 0) return {}

  // Fetch all vocab sets
  const vocabSets = await fetchVocabSetsForModules(vocabPracticeModuleIds)

  // Build map of moduleId -> vocab keys
  const moduleVocabMap = new Map<string, string[]>()
  const allVocabKeys = new Set<string>()

  for (const moduleId of vocabPracticeModuleIds) {
    const module = dynamic_modules[moduleId]
    if (!module || !module.vocab_set_ids) continue

    const vocabKeys: string[] = []
    for (const setId of module.vocab_set_ids) {
      const keys = vocabSets.get(setId)
      if (keys) {
        vocabKeys.push(...keys)
        keys.forEach((key) => allVocabKeys.add(key))
      }
    }

    moduleVocabMap.set(moduleId, vocabKeys)
  }

  // Fetch all FSRS cards
  const fsrsCards = await getFSRSCards(userId, Array.from(allVocabKeys))
  const fsrsCardIndex = buildFSRSCardIndex(fsrsCards)

  // Calculate progress for each module
  const progressMap: Record<string, VocabModuleProgress> = {}

  for (const [moduleId, vocabKeys] of moduleVocabMap.entries()) {
    const module = dynamic_modules[moduleId]
    const allowedModes = module?.allowed_practice_modes || [
      "meanings",
      "spellings",
    ]

    progressMap[moduleId] = calculateModuleProgress(
      vocabKeys,
      allowedModes,
      fsrsCardIndex,
    )
  }

  return progressMap
}
