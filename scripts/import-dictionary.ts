#!/usr/bin/env bun
/**
 * Imports Jitendex dictionary and BCCWJ frequency data into Convex
 * Mirrors Yomitan's IndexedDB structure for consistency with browser extension
 *
 * Usage: bun run scripts/import-dictionary.ts
 *
 * Data sources:
 * - Jitendex: ~/Downloads/jitendex-yomitan/
 * - BCCWJ: ~/Downloads/BCCWJ_SUW_LUW_combined/
 *
 * Requires:
 * - `bunx convex login` (one-time auth)
 */

import { execSync } from "child_process"
import { existsSync, readFileSync, writeFileSync, unlinkSync } from "fs"

const JITENDEX_PATH = `${process.env.HOME}/Downloads/jitendex-yomitan`
const BCCWJ_PATH = `${process.env.HOME}/Downloads/BCCWJ_SUW_LUW_combined`

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

// Convex output types
interface DictionaryRow {
  title: string
  revision: string
  format: number
  sequenced: boolean
  author?: string
  url?: string
  description?: string
  attribution?: string
  sourceLanguage?: string
  targetLanguage?: string
}

interface TermRow {
  dictionary: string
  expression: string
  reading: string
  definitionTags?: string
  rules?: string
  score: number
  glossary: string // Stringified JSON to avoid Convex 16-level nesting limit
  sequence: number
  termTags?: string
}

interface TermMetaRow {
  dictionary: string
  expression: string
  mode: string
  data: unknown
}

interface TagMetaRow {
  dictionary: string
  name: string
  category?: string
  sortOrder: number
  description?: string
  score: number
}

/**
 * Transforms dictionary index to Convex row format
 */
function transformDictionary(index: DictionaryIndex): DictionaryRow {
  return {
    title: index.title,
    revision: index.revision,
    format: index.format ?? 3,
    sequenced: index.sequenced ?? false,
    author: index.author,
    url: index.url,
    description: index.description,
    attribution: index.attribution,
    sourceLanguage: index.sourceLanguage ?? "ja",
    targetLanguage: index.targetLanguage ?? "en",
  }
}

/**
 * Transforms Yomitan tag bank entries to Convex row format
 * Input format: [[name, category, sortOrder, description, score], ...]
 */
function transformTags(
  dictionary: string,
  tags: [string, string, number, string, number][],
): TagMetaRow[] {
  return tags.map((t) => ({
    dictionary,
    name: t[0],
    category: t[1] || undefined,
    sortOrder: t[2],
    description: t[3] || undefined,
    score: t[4],
  }))
}

/**
 * Transforms Yomitan term bank entries to Convex row format
 * Input format: [[expression, reading, defTags, rules, score, glossary, sequence, termTags], ...]
 * Note: glossary is stringified to avoid Convex 16-level nesting limit
 */
function transformTerms(
  dictionary: string,
  terms: [string, string, string, string, number, unknown, number, string][],
): TermRow[] {
  return terms.map((t) => ({
    dictionary,
    expression: t[0],
    reading: t[1],
    definitionTags: t[2] || undefined,
    rules: t[3] || undefined,
    score: t[4],
    glossary: JSON.stringify(t[5]),
    sequence: t[6],
    termTags: t[7] || undefined,
  }))
}

/**
 * Transforms Yomitan term meta bank entries to Convex row format
 * Input format: [[expression, mode, data], ...]
 */
function transformTermMeta(
  dictionary: string,
  entries: [string, string, unknown][],
): TermMetaRow[] {
  return entries.map((e) => ({
    dictionary,
    expression: e[0],
    mode: e[1],
    data: e[2],
  }))
}

/**
 * Counts term_bank files in a directory
 */
function countTermBankFiles(basePath: string): number {
  let count = 0
  for (let i = 1; ; i++) {
    if (!existsSync(`${basePath}/term_bank_${i}.json`)) break
    count = i
  }
  return count
}

/**
 * Reads and parses a JSON file
 */
function readJson<T>(filePath: string): T {
  return JSON.parse(readFileSync(filePath, "utf-8"))
}

/**
 * Writes rows to JSONL file
 */
function writeJsonl(filePath: string, rows: unknown[]): void {
  writeFileSync(filePath, rows.map((r) => JSON.stringify(r)).join("\n"))
}

/**
 * Imports a JSONL file into Convex table
 */
function importToConvex(tableName: string, filePath: string): void {
  execSync(`bunx convex import --table ${tableName} ${filePath} --replace`, {
    stdio: "inherit",
  })
}

console.log("Starting dictionary import...")
console.log("")
;(() => {
  const startTime = Date.now()

  try {
    // Check that data directories exist
    if (!existsSync(`${JITENDEX_PATH}/index.json`)) {
      throw new Error(`Jitendex not found at ${JITENDEX_PATH}`)
    }
    if (!existsSync(`${BCCWJ_PATH}/index.json`)) {
      throw new Error(`BCCWJ not found at ${BCCWJ_PATH}`)
    }

    // Temp file paths
    const DICTIONARIES_FILE = "scripts/.tmp-dictionaries.jsonl"
    const TERMS_FILE = "scripts/.tmp-terms.jsonl"
    const TERM_META_FILE = "scripts/.tmp-term-meta.jsonl"
    const TAG_META_FILE = "scripts/.tmp-tag-meta.jsonl"

    // Collect all data
    const dictionaries: DictionaryRow[] = []
    const terms: TermRow[] = []
    const tagMeta: TagMetaRow[] = []

    // === JITENDEX ===
    console.log("=== Processing Jitendex ===")
    console.log("")

    // 1. Read dictionary metadata
    console.log("Reading index.json...")
    const jitendexIndex = readJson<DictionaryIndex>(
      `${JITENDEX_PATH}/index.json`,
    )
    console.log(`Dictionary: ${jitendexIndex.title}`)
    console.log(`Revision: ${jitendexIndex.revision}`)
    console.log("")

    dictionaries.push(transformDictionary(jitendexIndex))

    // 2. Read tags
    console.log("Reading tags...")
    const tagFilePath = `${JITENDEX_PATH}/tag_bank_1.json`
    if (existsSync(tagFilePath)) {
      const tags =
        readJson<[string, string, number, string, number][]>(tagFilePath)
      tagMeta.push(...transformTags(jitendexIndex.title, tags))
      console.log(`Found ${tags.length} tags`)
    }
    console.log("")

    // 3. Read terms (sequential processing)
    const termFileCount = countTermBankFiles(JITENDEX_PATH)
    console.log(`Reading terms from ${termFileCount} files...`)

    for (let num = 1; num <= termFileCount; num++) {
      const fileTerms = readJson<
        [string, string, string, string, number, unknown, number, string][]
      >(`${JITENDEX_PATH}/term_bank_${num}.json`)
      terms.push(...transformTerms(jitendexIndex.title, fileTerms))
      console.log(`   File ${num}/${termFileCount}: ${fileTerms.length} terms`)
    }

    console.log(`Total: ${terms.length.toLocaleString()} terms`)
    console.log("")

    // === BCCWJ ===
    console.log("=== Processing BCCWJ Frequency Data ===")
    console.log("")

    // 1. Read dictionary metadata
    console.log("Reading index.json...")
    const bccwjIndex = readJson<DictionaryIndex>(`${BCCWJ_PATH}/index.json`)
    console.log(`Dictionary: ${bccwjIndex.title}`)
    console.log(`Revision: ${bccwjIndex.revision}`)
    console.log("")

    dictionaries.push(transformDictionary(bccwjIndex))

    // 2. Read frequency data
    console.log("Reading frequency data...")
    const freqData = readJson<[string, string, unknown][]>(
      `${BCCWJ_PATH}/term_meta_bank_1.json`,
    )
    // Note: Don't use spread operator here - array is too large (causes stack overflow)
    const bccwjTermMeta = transformTermMeta(bccwjIndex.title, freqData)
    console.log(`Found ${freqData.length.toLocaleString()} frequency entries`)
    console.log("")

    // === WRITE JSONL FILES ===
    console.log("=== Writing JSONL files ===")
    console.log("")

    writeJsonl(DICTIONARIES_FILE, dictionaries)
    console.log(`Wrote ${dictionaries.length} dictionaries`)

    writeJsonl(TAG_META_FILE, tagMeta)
    console.log(`Wrote ${tagMeta.length} tags`)

    writeJsonl(TERMS_FILE, terms)
    console.log(`Wrote ${terms.length.toLocaleString()} terms`)

    writeJsonl(TERM_META_FILE, bccwjTermMeta)
    console.log(`Wrote ${bccwjTermMeta.length.toLocaleString()} term meta entries`)
    console.log("")

    // === IMPORT TO CONVEX ===
    console.log("=== Importing to Convex ===")
    console.log("")

    try {
      console.log("Importing dictionaries...")
      importToConvex("dictionaries", DICTIONARIES_FILE)
      console.log("")

      console.log("Importing tagMeta...")
      importToConvex("tagMeta", TAG_META_FILE)
      console.log("")

      console.log("Importing terms...")
      importToConvex("terms", TERMS_FILE)
      console.log("")

      console.log("Importing termMeta...")
      importToConvex("termMeta", TERM_META_FILE)
      console.log("")
    } finally {
      // Clean up temp files
      try {
        unlinkSync(DICTIONARIES_FILE)
        unlinkSync(TAG_META_FILE)
        unlinkSync(TERMS_FILE)
        unlinkSync(TERM_META_FILE)
      } catch {
        // Ignore cleanup errors
      }
    }

    // === SUMMARY ===
    const elapsed = ((Date.now() - startTime) / 1000).toFixed(1)
    console.log("=".repeat(50))
    console.log("Import complete!")
    console.log(`   Dictionaries: ${dictionaries.length}`)
    console.log(`   Tags: ${tagMeta.length}`)
    console.log(`   Terms: ${terms.length.toLocaleString()}`)
    console.log(`   Frequency entries: ${bccwjTermMeta.length.toLocaleString()}`)
    console.log(`   Time: ${elapsed}s`)
  } catch (error) {
    console.error("Fatal error:", error)
    process.exit(1)
  }
})()
