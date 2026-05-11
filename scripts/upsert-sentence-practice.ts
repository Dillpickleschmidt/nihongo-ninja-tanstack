#!/usr/bin/env bun
/**
 * Imports sentence practice questions into Convex
 * Generates canonicalAnswerTokens using Kagome + grammar-cli
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
import { prepareQuestion } from "../src/features/sentence-practice/core/questionProcessor"
import { SEGMENT_SEPARATOR } from "../src/features/sentence-practice/core/textProcessor"

const DATA_DIR = join(import.meta.dirname, "data/sentence-practice")
const TEMP_FILE = join(import.meta.dirname, ".tmp-sentence-questions.jsonl")
const CACHE_FILE = join(import.meta.dirname, ".sentence-practice-cache.json")
const KAGOME_PORT = 6060
const GRAMMAR_CLI = join(process.cwd(), "bin/grammar-cli")
const CACHE_VERSION = 6
const GRAMMAR_CONCURRENCY = Math.max(
  1,
  Number(process.env.GRAMMAR_CONCURRENCY ?? 8),
)

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
const SEPARATOR = SEGMENT_SEPARATOR

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

async function analyzeGrammar(
  tokens: any[],
): Promise<{ tokens: { surface: string; pos: string[] }[] }> {
  return new Promise((resolve) => {
    const child = spawn(GRAMMAR_CLI, [], { stdio: ["pipe", "pipe", "ignore"] })
    let stdout = ""

    child.stdout.setEncoding("utf-8")
    child.stdout.on("data", (chunk) => {
      stdout += chunk
    })
    child.on("close", (code) => {
      if (code !== 0) {
        resolve({ tokens: [] })
        return
      }

      try {
        resolve(JSON.parse(stdout))
      } catch {
        resolve({ tokens: [] })
      }
    })
    child.stdin.end(JSON.stringify(tokens))
  })
}

async function mapWithConcurrency<T, R>(
  items: T[],
  concurrency: number,
  fn: (item: T, index: number) => Promise<R>,
): Promise<R[]> {
  const results = new Array<R>(items.length)
  let nextIndex = 0

  async function worker() {
    while (nextIndex < items.length) {
      const index = nextIndex++
      results[index] = await fn(items[index], index)
    }
  }

  await Promise.all(
    Array.from({ length: Math.min(concurrency, items.length) }, worker),
  )
  return results
}

// --- Question Text Preparation ---

/**
 * Batch process all questions in a file with a single Kagome request.
 * Returns canonicalAnswerTokens for each question.
 */
async function processFileQuestions(
  questions: Question[],
  kagome: KagomeServer,
): Promise<{ t: string; p: string }[][][]> {
  const preparedQuestions = questions.map((q) => prepareQuestion({
    ...q,
    canonicalAnswerTokens: [],
  }))
  const entries: {
    questionIndex: number
    canonicalAnswerIndex: number
    text: string
  }[] = []

  for (let questionIndex = 0; questionIndex < preparedQuestions.length; questionIndex++) {
    const prepared = preparedQuestions[questionIndex]
    for (
      let canonicalAnswerIndex = 0;
      canonicalAnswerIndex < prepared.canonicalAnswers.length;
      canonicalAnswerIndex++
    ) {
      const text = prepared.canonicalAnswers[canonicalAnswerIndex].plain
        .split(SEPARATOR)
        .join("")
        .replace(/\s+/g, "")
      if (text) entries.push({ questionIndex, canonicalAnswerIndex, text })
    }
  }

  if (entries.length === 0) {
    return questions.map(() => [])
  }

  // 2. Batch tokenize with separator
  const batchedText = entries.map((entry) => entry.text).join(SEPARATOR)
  const allTokens = await kagome.tokenize(batchedText)

  // 3. Split tokens by separator
  const tokenGroups: any[][] = []
  let currentGroup: any[] = []

  for (const token of allTokens) {
    if (token.surface === SEPARATOR) {
      tokenGroups.push(normalizeTokenPositions(currentGroup))
      currentGroup = []
    } else {
      currentGroup.push(token)
    }
  }
  tokenGroups.push(normalizeTokenPositions(currentGroup))

  // 4. Run grammar-cli on each group and build results
  const results: { t: string; p: string }[][][] = preparedQuestions.map(
    (question) => question.canonicalAnswers.map(() => []),
  )

  const analysisResults = await mapWithConcurrency(
    tokenGroups.slice(0, entries.length),
    GRAMMAR_CONCURRENCY,
    analyzeGrammar,
  )

  for (let i = 0; i < entries.length; i++) {
    const { questionIndex, canonicalAnswerIndex } = entries[i]
    const analysisResult = analysisResults[i]
    results[questionIndex][canonicalAnswerIndex] = analysisResult.tokens.map((token) => ({
      t: token.surface,
      p: token.pos[0] ?? "",
    }))
  }

  return results
}

function normalizeTokenPositions(tokens: any[]): any[] {
  const offset = tokens[0]?.start ?? 0
  return tokens.map((token) => ({
    ...token,
    start: token.start - offset,
    end: token.end - offset,
  }))
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
        const canonicalAnswerTokens = await processFileQuestions(questions, kagome)

        const processedQuestions = questions.map((q, i) => ({
          setId,
          order: i,
          english: q.english,
          hint: q.hint,
          answers: q.answers,
          canonicalAnswerTokens: canonicalAnswerTokens[i],
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
