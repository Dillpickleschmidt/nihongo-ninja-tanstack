// features/vocab-practice/components/pages/start-page/utils/hierarchical-order.ts
import type { VocabHierarchy } from "@/data/wanikani/hierarchy-builder"

/**
 * Generates the ordered list of card keys for practice based on vocabulary hierarchy
 * and their dependencies (kanji → radicals)
 */
export function getHierarchicalOrder(
  hierarchy: VocabHierarchy,
  enablePrerequisites: boolean,
): string[] {
  const orderedKeys: string[] = []
  const seenKeys = new Set<string>()

  // Add vocabulary items
  hierarchy.vocabulary.forEach((vocabEntry) => {
    orderedKeys.push(`vocabulary:${vocabEntry.word}`)

    if (enablePrerequisites) {
      // Add kanji dependencies
      vocabEntry.kanjiComponents.forEach((kanjiChar) => {
        const kanjiKey = `kanji:${kanjiChar}`
        if (!seenKeys.has(kanjiKey)) {
          seenKeys.add(kanjiKey)
          orderedKeys.push(kanjiKey)
        }

        // Add radical dependencies
        const kanjiEntry = hierarchy.kanji.find((k) => k.kanji === kanjiChar)
        if (kanjiEntry) {
          kanjiEntry.radicalComponents.forEach((radicalChar) => {
            const radicalKey = `radical:${radicalChar}`
            if (!seenKeys.has(radicalKey)) {
              seenKeys.add(radicalKey)
              orderedKeys.push(radicalKey)
            }
          })
        }
      })
    }
  })

  return orderedKeys
}
