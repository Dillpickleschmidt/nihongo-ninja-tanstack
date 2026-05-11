#!/usr/bin/env bun
/**
 * Imports sentence practice questions into Convex
 * Generates modelAnswerPOS using Kagome + grammar-cli
 *
 * Usage: bun run scripts/upsert-sentence-practice.ts
 *
 * Prerequisites:
 * - Kagome CLI: go install github.com/ikawaha/kagome/v2@latest
 * - grammar-cli binary at bin/grammar-cli
 */

import { spawn, execSync, type ChildProcess } from "child_process"
import {
  writeFileSync,
  readFileSync,
  unlinkSync,
  readdirSync,
  statSync,
  existsSync,
} from "fs"
import { join } from "path"
import { createHash } from "crypto"
import type { Question } from "./data/sentence-practice/types"
import {
  getPrimaryModelAnswerText,
  prepareQuestion,
} from "../src/features/sentence-practice/core/questionProcessor"

const DATA_DIR = join(import.meta.dirname, "data/sentence-practice")
const TEMP_FILE = join(import.meta.dirname, ".tmp-sentence-questions.jsonl")
const CACHE_FILE = join(import.meta.dirname, ".sentence-practice-cache.json")
const KAGOME_PORT = 6060
const GRAMMAR_CLI = join(process.cwd(), "bin/grammar-cli")
const CACHE_VERSION = 2

// --- Cache ---

interface CacheEntry {
  hash: string
  questions: any[]
}

interface Cache {
  [setId: string]: CacheEntry
}

function computeFileHash(filePath: string): string {
  const content = readFileSync(filePath, "utf-8")
  return createHash("md5").update(`${CACHE_VERSION}\n${content}`).digest("hex")
}

function loadCache(): Cache {
  if (existsSync(CACHE_FILE)) {
    return JSON.parse(readFileSync(CACHE_FILE, "utf-8"))
  }
  return {}
}

function saveCache(cache: Cache): void {
  writeFileSync(CACHE_FILE, JSON.stringify(cache), "utf-8")
}

// Unit Separator for batching multiple sentences in one Kagome request
const SEPARATOR = "\x1F"

// --- Kagome Server ---

class KagomeServer {
  private process: ChildProcess | null = null
  private baseUrl = `http://localhost:${KAGOME_PORT}`

  async start(): Promise<void> {
    console.log("Starting Kagome server...")
    this.process = spawn("kagome", ["server", "-http", `:${KAGOME_PORT}`], {
      stdio: "ignore",
    })

    for (let i = 0; i < 30; i++) {
      try {
        const res = await fetch(this.baseUrl)
        if (res.ok) {
          console.log("✓ Kagome started\n")
          return
        }
      } catch {
        // Server not ready yet
      }
      await new Promise((r) => setTimeout(r, 1000))
    }
    throw new Error("Kagome failed to start within 30 seconds")
  }

  async tokenize(text: string): Promise<any[]> {
    const res = await fetch(`${this.baseUrl}/tokenize`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sentence: text, mode: "normal" }),
    })
    const data = await res.json()
    return data.tokens
  }

  shutdown() {
    if (this.process) {
      console.log("\nShutting down Kagome server...")
      this.process.kill()
      this.process = null
    }
  }
}

// --- Grammar Analysis ---

function analyzeGrammar(tokens: any[]): { tokens: { pos: string[] }[] } {
  try {
    const output = execSync(GRAMMAR_CLI, {
      input: JSON.stringify(tokens),
      encoding: "utf-8",
      maxBuffer: 10 * 1024 * 1024,
    })
    return JSON.parse(output)
  } catch {
    return { tokens: [] }
  }
}

// --- Question Text Preparation ---

/**
 * Batch process all questions in a file with a single Kagome request.
 * Returns modelAnswerPOS for each question.
 */
async function processFileQuestions(
  questions: Question[],
  kagome: KagomeServer,
): Promise<string[][][]> {
  // 1. Extract the prepared primary model answer for each question.
  const texts = questions.map((q) =>
    getPrimaryModelAnswerText(prepareQuestion(q)),
  )

  // Find which questions have text to process
  const nonEmptyIndices: number[] = []
  const nonEmptyTexts: string[] = []
  for (let i = 0; i < texts.length; i++) {
    if (texts[i]) {
      nonEmptyIndices.push(i)
      nonEmptyTexts.push(texts[i])
    }
  }

  if (nonEmptyTexts.length === 0) {
    return questions.map(() => [])
  }

  // 2. Batch tokenize with separator
  const batchedText = nonEmptyTexts.join(SEPARATOR)
  const allTokens = await kagome.tokenize(batchedText)

  // 3. Split tokens by separator
  const tokenGroups: any[][] = []
  let currentGroup: any[] = []

  for (const token of allTokens) {
    if (token.surface === SEPARATOR) {
      tokenGroups.push(currentGroup)
      currentGroup = []
    } else {
      currentGroup.push(token)
    }
  }
  tokenGroups.push(currentGroup)

  // 4. Run grammar-cli on each group and build results
  const results: string[][][] = questions.map(() => [])

  for (let i = 0; i < nonEmptyIndices.length; i++) {
    const questionIndex = nonEmptyIndices[i]
    const tokens = tokenGroups[i] || []
    const analysisResult = analyzeGrammar(tokens)
    results[questionIndex] = analysisResult.tokens.map((t) => t.pos)
  }

  return results
}

// --- File Discovery ---

function findDataFiles(dir: string): string[] {
  const results: string[] = []
  for (const entry of readdirSync(dir)) {
    const fullPath = join(dir, entry)
    if (statSync(fullPath).isDirectory()) {
      results.push(...findDataFiles(fullPath))
    } else if (entry.endsWith(".ts") && entry !== "types.ts") {
      results.push(fullPath)
    }
  }
  return results
}

function getSetId(filePath: string): string {
  return filePath.split("/").pop()!.replace(/\.ts$/, "")
}

// --- Main ---

async function main() {
  console.log("Sentence Practice Seeder")
  console.log("========================\n")

  const files = findDataFiles(DATA_DIR)
  const cache = loadCache()
  const allQuestions: any[] = []

  console.log(`Found ${files.length} data files\n`)

  // Check which files need processing
  const changedFiles: { file: string; setId: string; hash: string }[] = []
  const cachedFiles: { file: string; setId: string }[] = []

  for (const file of files) {
    const setId = getSetId(file)
    const hash = computeFileHash(file)

    if (cache[setId]?.hash === hash) {
      cachedFiles.push({ file, setId })
    } else {
      changedFiles.push({ file, setId, hash })
    }
  }

  // Report cached files
  if (cachedFiles.length > 0) {
    console.log(`Skipping ${cachedFiles.length} unchanged files:`)
    for (const { setId } of cachedFiles) {
      console.log(`  ✓ ${setId} (cached)`)
      allQuestions.push(...cache[setId].questions)
    }
    console.log()
  }

  // Process changed files with Kagome
  if (changedFiles.length > 0) {
    console.log(`Processing ${changedFiles.length} changed files:\n`)

    const kagome = new KagomeServer()
    await kagome.start()

    try {
      for (const { file, setId, hash } of changedFiles) {
        process.stdout.write(`  ${setId}... `)

        const module = await import(file)
        const questions: Question[] = module.questions
        const allPOS = await processFileQuestions(questions, kagome)

        const processedQuestions = questions.map((q, i) => ({
          setId,
          order: i,
          english: q.english,
          hint: q.hint,
          answers: q.answers,
          modelAnswerPOS: allPOS[i],
        }))

        cache[setId] = { hash, questions: processedQuestions }
        allQuestions.push(...processedQuestions)

        console.log(`✓ (${questions.length} questions)`)
      }
    } finally {
      kagome.shutdown()
    }

  }

  if (allQuestions.length === 0) {
    console.log("No questions to import.")
    return
  }

  console.log(`\nWriting ${allQuestions.length} questions to temp file...`)
  writeFileSync(
    TEMP_FILE,
    allQuestions.map((q) => JSON.stringify(q)).join("\n"),
  )

  console.log("Importing to Convex...")
  execSync(
    `bunx convex import --table sentencePracticeQuestions ${TEMP_FILE} --replace`,
    { stdio: "inherit" },
  )

  saveCache(cache)
  unlinkSync(TEMP_FILE)
  console.log(`\n✓ Done! Imported ${allQuestions.length} questions`)
}

main().catch((error) => {
  console.error("\n✗ Fatal error:", error)
  process.exit(1)
})
