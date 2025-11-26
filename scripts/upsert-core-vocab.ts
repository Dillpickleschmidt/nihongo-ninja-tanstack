#!/usr/bin/env bun
/**
 * Upserts vocabulary items and sets from local data files into core_vocabulary_items and core_vocabulary_sets tables
 * Usage: bun run upsert-vocab
 */

import { createClient } from "@supabase/supabase-js"
import { vocabulary } from "./data/vocabulary"
import { vocabularySets } from "./data/vocabulary_sets"
import type { Database } from "../src/features/supabase/db/database.types"

type CoreVocabularyItemInsert =
  Database["public"]["Tables"]["core_vocabulary_items"]["Insert"]
type CoreVocabularySetInsert =
  Database["public"]["Tables"]["core_vocabulary_sets"]["Insert"]

// Get Supabase credentials from environment
const supabaseUrl = process.env.VITE_SUPABASE_URL
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseServiceKey) {
  console.error("❌ Error: Missing Supabase credentials")
  console.error("Required environment variables:")
  console.error("  - VITE_SUPABASE_URL")
  console.error("  - SUPABASE_SERVICE_ROLE_KEY")
  process.exit(1)
}

// Create Supabase client with service role key (bypasses RLS)
const supabase = createClient(supabaseUrl, supabaseServiceKey)

console.log("🚀 Starting vocabulary upsert...")

// Transform vocabulary data to match database schema
// Use object keys as the unique 'key' field (e.g., "私1", "私2")
const vocabularyItems: CoreVocabularyItemInsert[] = Object.entries(
  vocabulary,
).map(([key, item]) => ({
  key: key,
  word: item.word,
  furigana: item.furigana,
  english: item.english,
  part_of_speech: item.part_of_speech,
  info: item.info,
  mnemonics: item.mnemonics as any,
  example_sentences: item.example_sentences as any,
  videos: item.videos as any,
  particles: item.particles as any,
  overwrite_word: item.overwrite_word,
}))

console.log(`📊 Total vocabulary items to upsert: ${vocabularyItems.length}`)

// Transform vocabulary sets data to match database schema
const vocabularySetItems: CoreVocabularySetInsert[] = Object.entries(
  vocabularySets,
).map(([setId, vocabSet]) => ({
  set_id: setId,
  vocabulary_keys: vocabSet.keys,
}))

console.log(`📊 Total vocabulary sets to upsert: ${vocabularySetItems.length}`)

// Batch upsert in chunks to avoid potential payload size limits
const BATCH_SIZE = 1000
const vocabChunks: CoreVocabularyItemInsert[][] = []
for (let i = 0; i < vocabularyItems.length; i += BATCH_SIZE) {
  vocabChunks.push(vocabularyItems.slice(i, i + BATCH_SIZE))
}

const setChunks: CoreVocabularySetInsert[][] = []
for (let i = 0; i < vocabularySetItems.length; i += BATCH_SIZE) {
  setChunks.push(vocabularySetItems.slice(i, i + BATCH_SIZE))
}

console.log(`📦 Processing ${vocabChunks.length} vocabulary batches and ${setChunks.length} set batches...`)

let totalVocabUpserted = 0
let totalSetUpserted = 0
let errors = 0

// Upsert vocabulary items
for (let i = 0; i < vocabChunks.length; i++) {
  const chunk = vocabChunks[i]
  console.log(`   Vocab Batch ${i + 1}/${vocabChunks.length}: Upserting ${chunk.length} items...`)

  const { error } = await supabase
    .from("core_vocabulary_items")
    .upsert(chunk, {
      onConflict: "key",
    })

  if (error) {
    console.error(`   ❌ Error in batch ${i + 1}:`, error.message)
    errors++
  } else {
    totalVocabUpserted += chunk.length
    console.log(`   ✅ Vocab Batch ${i + 1} complete`)
  }
}

// Upsert vocabulary sets
for (let i = 0; i < setChunks.length; i++) {
  const chunk = setChunks[i]
  console.log(`   Set Batch ${i + 1}/${setChunks.length}: Upserting ${chunk.length} sets...`)

  const { error } = await supabase
    .from("core_vocabulary_sets")
    .upsert(chunk, {
      onConflict: "set_id",
    })

  if (error) {
    console.error(`   ❌ Error in batch ${i + 1}:`, error.message)
    errors++
  } else {
    totalSetUpserted += chunk.length
    console.log(`   ✅ Set Batch ${i + 1} complete`)
  }
}

console.log("\n" + "=".repeat(50))
if (errors === 0) {
  console.log(`✅ Success!`)
  console.log(`   Upserted ${totalVocabUpserted} vocabulary items`)
  console.log(`   Upserted ${totalSetUpserted} vocabulary sets`)
} else {
  console.log(`⚠️  Completed with ${errors} error(s)`)
  console.log(`   Successfully upserted: ${totalVocabUpserted} items, ${totalSetUpserted} sets`)
  process.exit(1)
}
