#!/usr/bin/env bun
/**
 * Imports vocabulary items and sets into Convex using the official CLI
 * Usage: bun run upsert-vocab
 *
 * Requires: `bunx convex login` (one-time auth)
 */

import { execSync } from "child_process"
import { writeFileSync, unlinkSync } from "fs"
import { vocabulary } from "./data/vocabulary"
import { vocabularySets } from "./data/vocabulary_sets"

// Transform vocabulary data - use object keys as the unique 'key' field
const items = Object.entries(vocabulary).map(([key, item]) => ({
  key,
  word: item.word,
  furigana: item.furigana,
  english: item.english,
  partOfSpeech: item.partOfSpeech,
  info: item.info,
  mnemonics: item.mnemonics,
  exampleSentences: item.exampleSentences,
  videos: item.videos,
  particles: item.particles,
  overwriteWord: item.overwriteWord,
}))

// Generate JLPT sets dynamically from vocabulary items
const jlptLevels = ["n5", "n4", "n3", "n2", "n1"] as const
const jlptSets = jlptLevels
  .map((level) => ({
    setId: level,
    vocabularyKeys: Object.entries(vocabulary)
      .filter(([_, item]) => item.jlptLevel === level)
      .map(([key]) => key),
  }))
  .filter((set) => set.vocabularyKeys.length > 0)

// Transform vocabulary sets and merge with JLPT sets
const sets = [
  ...jlptSets,
  ...Object.entries(vocabularySets).map(([setId, vocabSet]) => ({
    setId,
    vocabularyKeys: vocabSet.keys,
  })),
]

// Write JSONLines files (one JSON object per line)
const itemsFile = "scripts/.tmp-vocab-items.jsonl"
const setsFile = "scripts/.tmp-vocab-sets.jsonl"

writeFileSync(itemsFile, items.map((i) => JSON.stringify(i)).join("\n"))
writeFileSync(setsFile, sets.map((s) => JSON.stringify(s)).join("\n"))

try {
  console.log(`Importing ${items.length} vocabulary items...`)
  execSync(`bunx convex import --table coreVocabularyItems ${itemsFile} --replace`, {
    stdio: "inherit",
  })

  console.log(`Importing ${sets.length} vocabulary sets...`)
  execSync(`bunx convex import --table coreVocabularySets ${setsFile} --replace`, {
    stdio: "inherit",
  })

  console.log("Done!")
} finally {
  unlinkSync(itemsFile)
  unlinkSync(setsFile)
}
