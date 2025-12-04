#!/usr/bin/env bun
/**
 * Imports Jitendex dictionary and BCCWJ frequency data into Supabase
 * Mirrors Yomitan's IndexedDB structure for consistency with browser extension
 *
 * Usage: VITE_SUPABASE_URL=... SUPABASE_SERVICE_ROLE_KEY=... bun run scripts/import-dictionary.ts
 *
 * Data sources:
 * - Jitendex: ~/Downloads/jitendex-yomitan/
 * - BCCWJ: ~/Downloads/BCCWJ_SUW_LUW_combined/
 */

import { createClient } from "@supabase/supabase-js"
import type { Database, Json } from "../src/features/supabase/db/database.types"

const JITENDEX_PATH = `${process.env.HOME}/Downloads/jitendex-yomitan`
const BCCWJ_PATH = `${process.env.HOME}/Downloads/BCCWJ_SUW_LUW_combined`

// Batch sizes tuned for Supabase free tier
const TERM_BATCH_SIZE = 500 // Terms are ~2KB each with JSONB
const META_BATCH_SIZE = 5000 // Frequency entries are ~100 bytes each

// Database types
type DictionaryInsert = Database["public"]["Tables"]["dictionaries"]["Insert"]
type TermInsert = Database["public"]["Tables"]["terms"]["Insert"]
type TermMetaInsert = Database["public"]["Tables"]["term_meta"]["Insert"]
type TagMetaInsert = Database["public"]["Tables"]["tag_meta"]["Insert"]

// Yomitan index.json structure
interface DictionaryIndex {
  title: string
  revision: string
  format?: number
  sequenced?: boolean
  author?: string
  url?: string
  description?: string
  attribution?: string
  sourceLanguage?: string
  targetLanguage?: string
}

// Get Supabase credentials from environment
const supabaseUrl = process.env.VITE_SUPABASE_URL
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseServiceKey) {
  console.error("Missing Supabase credentials")
  console.error("Required environment variables:")
  console.error("  - VITE_SUPABASE_URL")
  console.error("  - SUPABASE_SERVICE_ROLE_KEY")
  process.exit(1)
}

// Create Supabase client with service role key (bypasses RLS)
const supabase = createClient<Database>(supabaseUrl, supabaseServiceKey)

/**
 * Upserts dictionary metadata to the dictionaries table
 */
async function upsertDictionary(index: DictionaryIndex): Promise<void> {
  const row: DictionaryInsert = {
    title: index.title,
    revision: index.revision,
    format: index.format ?? 3,
    sequenced: index.sequenced ?? false,
    author: index.author ?? null,
    url: index.url ?? null,
    description: index.description ?? null,
    attribution: index.attribution ?? null,
    source_language: index.sourceLanguage ?? "ja",
    target_language: index.targetLanguage ?? "en",
  }

  const { error } = await supabase
    .from("dictionaries")
    .upsert(row, { onConflict: "title" })

  if (error) {
    throw new Error(`Failed to upsert dictionary: ${error.message}`)
  }
}

/**
 * Imports tag definitions from tag_bank JSON
 * Format: [[name, category, sortOrder, description, score], ...]
 */
async function importTags(
  dictionary: string,
  tags: [string, string, number, string, number][],
): Promise<void> {
  const rows: TagMetaInsert[] = tags.map((t) => ({
    dictionary,
    name: t[0],
    category: t[1] || null,
    sort_order: t[2],
    description: t[3] || null,
    score: t[4],
  }))

  const { error } = await supabase.from("tag_meta").insert(rows)

  if (error) {
    throw new Error(`Failed to insert tags: ${error.message}`)
  }
}

/**
 * Imports terms from a term_bank JSON file
 * Format: [[expression, reading, defTags, rules, score, glossary, sequence, termTags], ...]
 */
async function importTerms(
  dictionary: string,
  terms: [string, string, string, string, number, unknown, number, string][],
): Promise<void> {
  const rows: TermInsert[] = terms.map((t) => ({
    dictionary,
    expression: t[0],
    reading: t[1],
    definition_tags: t[2] || null,
    rules: t[3] || null,
    score: t[4],
    glossary: t[5] as Json,
    sequence: t[6],
    term_tags: t[7] || null,
  }))

  // Batch insert
  for (let i = 0; i < rows.length; i += TERM_BATCH_SIZE) {
    const batch = rows.slice(i, i + TERM_BATCH_SIZE)
    const { error } = await supabase.from("terms").insert(batch)
    if (error) throw new Error(`Failed to insert terms batch at ${i}: ${error.message}`)
  }
}

/**
 * Imports frequency/pitch/IPA metadata from term_meta_bank JSON
 * Format: [[expression, mode, data], ...]
 */
async function importTermMeta(
  dictionary: string,
  entries: [string, string, object][],
): Promise<void> {
  const rows: TermMetaInsert[] = entries.map((e) => ({
    dictionary,
    expression: e[0],
    mode: e[1],
    data: e[2] as Json,
  }))

  // Batch insert with progress logging
  for (let i = 0; i < rows.length; i += META_BATCH_SIZE) {
    const batch = rows.slice(i, i + META_BATCH_SIZE)
    const { error } = await supabase.from("term_meta").insert(batch)
    if (error) throw new Error(`Failed to insert term_meta batch at ${i}: ${error.message}`)

    if (i % 100000 === 0 && i > 0) {
      console.log(`   ${i.toLocaleString()}/${rows.length.toLocaleString()} frequency entries`)
    }
  }
}

/**
 * Counts term_bank files in a directory
 */
async function countTermBankFiles(basePath: string): Promise<number> {
  let count = 0
  for (let i = 1; ; i++) {
    const file = Bun.file(`${basePath}/term_bank_${i}.json`)
    if (!(await file.exists())) break
    count = i
  }
  return count
}

console.log("Starting dictionary import...")
console.log("")

  ; (async () => {
    const startTime = Date.now()

    try {
      // Check that data directories exist
      const jitendexExists = await Bun.file(`${JITENDEX_PATH}/index.json`).exists()
      const bccwjExists = await Bun.file(`${BCCWJ_PATH}/index.json`).exists()

      if (!jitendexExists) {
        throw new Error(`Jitendex not found at ${JITENDEX_PATH}`)
      }
      if (!bccwjExists) {
        throw new Error(`BCCWJ not found at ${BCCWJ_PATH}`)
      }

      // === JITENDEX ===
      console.log("=== Importing Jitendex ===")
      console.log("")

      // 1. Import dictionary metadata
      console.log("Reading index.json...")
      const jitendexIndex: DictionaryIndex = await Bun.file(
        `${JITENDEX_PATH}/index.json`,
      ).json()
      console.log(`Dictionary: ${jitendexIndex.title}`)
      console.log(`Revision: ${jitendexIndex.revision}`)

      await upsertDictionary(jitendexIndex)
      console.log("Dictionary metadata saved")
      console.log("")

      // 2. Import tags
      console.log("Importing tags...")
      const tagFile = Bun.file(`${JITENDEX_PATH}/tag_bank_1.json`)
      if (await tagFile.exists()) {
        const tags = await tagFile.json()
        await importTags(jitendexIndex.title, tags)
        console.log(`Imported ${tags.length} tags`)
      }
      console.log("")

      // 3. Import terms (sequential processing)
      const termFileCount = await countTermBankFiles(JITENDEX_PATH)
      console.log(`Importing terms from ${termFileCount} files...`)

      let totalTerms = 0

      for (let num = 1; num <= termFileCount; num++) {
        const terms = await Bun.file(`${JITENDEX_PATH}/term_bank_${num}.json`).json()
        await importTerms(jitendexIndex.title, terms)
        totalTerms += terms.length
        console.log(`   File ${num} of ${termFileCount}`)
      }

      console.log(`Imported ${totalTerms.toLocaleString()} terms`)
      console.log("")

      // === BCCWJ ===
      console.log("=== Importing BCCWJ Frequency Data ===")
      console.log("")

      // 1. Import dictionary metadata
      console.log("Reading index.json...")
      const bccwjIndex: DictionaryIndex = await Bun.file(
        `${BCCWJ_PATH}/index.json`,
      ).json()
      console.log(`Dictionary: ${bccwjIndex.title}`)
      console.log(`Revision: ${bccwjIndex.revision}`)

      await upsertDictionary(bccwjIndex)
      console.log("Dictionary metadata saved")
      console.log("")

      // 2. Import frequency data
      console.log("Importing frequency data (this may take a moment)...")
      const freqData = await Bun.file(
        `${BCCWJ_PATH}/term_meta_bank_1.json`,
      ).json()
      console.log(`Found ${freqData.length.toLocaleString()} frequency entries`)

      await importTermMeta(bccwjIndex.title, freqData)
      console.log(`Imported ${freqData.length.toLocaleString()} frequency entries`)
      console.log("")

      // === SUMMARY ===
      const elapsed = ((Date.now() - startTime) / 1000).toFixed(1)
      console.log("=".repeat(50))
      console.log("Import complete!")
      console.log(`   Terms: ${totalTerms.toLocaleString()}`)
      console.log(`   Frequency entries: ${freqData.length.toLocaleString()}`)
      console.log(`   Time: ${elapsed}s`)
    } catch (error) {
      console.error("Fatal error:", error)
      process.exit(1)
    }
  })()
