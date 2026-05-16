#!/usr/bin/env bun
/**
 * Imports sentence practice questions into Convex.
 * Generates canonicalAnswerTokens using Kagome + grammar-cli.
 *
 * Usage: bun run scripts/upsert-sentence-practice.ts [path-or-set-filter] [--no-import]
 *
 * Prerequisites:
 * - Kagome CLI: go install github.com/ikawaha/kagome/v2@latest
 * - grammar-cli binary at bin/grammar-cli
 * - Convex functions deployed with `bunx convex dev` after function changes
 */

import { spawn, type ChildProcess } from "child_process"
import {
  existsSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  rmSync,
  statSync,
  writeFileSync,
} from "fs"
import { basename, dirname, join, relative } from "path"
import { createHash } from "crypto"
import { ConvexHttpClient } from "convex/browser"
import { makeFunctionReference } from "convex/server"
import type { Doc } from "../convex/_generated/dataModel"
import type { Question } from "./data/sentence-practice/types"
import { prepareQuestion } from "../src/features/sentence-practice/core/questionProcessor"
import { SEGMENT_SEPARATOR } from "../src/features/sentence-practice/core/textProcessor"

const DATA_DIR = join(import.meta.dirname, "data/sentence-practice")
const CACHE_DIR = join(import.meta.dirname, ".sentence-practice-cache")
const MANIFEST_FILE = join(CACHE_DIR, "manifest.json")
const KAGOME_PORT = 6060
const GRAMMAR_CLI = join(process.cwd(), "bin/grammar-cli")
const CACHE_VERSION = 8
const MAX_CONVEX_BATCH_BYTES = 500_000
const SENTENCE_BATCH_SEPARATOR = SEGMENT_SEPARATOR

const deleteSentencePracticeQuestionsMutation = makeFunctionReference<"mutation">(
  "api/sentencePractice:deleteQuestionsBySetId",
)
const insertSentencePracticeQuestionsMutation = makeFunctionReference<"mutation">(
  "api/sentencePractice:insertQuestionsForSet",
)

type ProcessedQuestion = Omit<
  Doc<"sentencePracticeQuestions">,
  "_id" | "_creationTime"
>

interface KagomeToken {
  surface: string
  start: number
  end: number
  pos: string[]
}

interface SentencePracticeCacheEntry {
  sourceHash: string
  setId: string
  questions: ProcessedQuestion[]
}

interface ManifestEntry {
  setId: string
  cachePath: string
}

type Manifest = Record<string, ManifestEntry>

interface SentencePracticeDataFile {
  file: string
  relativePath: string
  setId: string
  cachePath: string
  sourceHash: string
}

interface Options {
  filters: string[]
  noImport: boolean
}

interface GrammarAnalysisResult {
  tokens: KagomeToken[]
}

function computeFileHash(filePath: string): string {
  const content = readFileSync(filePath, "utf-8")
  return createHash("md5").update(`${CACHE_VERSION}\n${content}`).digest("hex")
}

function loadManifest(): Manifest {
  if (!existsSync(MANIFEST_FILE)) return {}
  return JSON.parse(readFileSync(MANIFEST_FILE, "utf-8"))
}

function saveManifest(manifest: Manifest): void {
  mkdirSync(CACHE_DIR, { recursive: true })
  writeFileSync(MANIFEST_FILE, JSON.stringify(manifest, null, 2), "utf-8")
}

function loadCacheEntry(source: SentencePracticeDataFile): SentencePracticeCacheEntry | null {
  if (!existsSync(source.cachePath)) return null
  return JSON.parse(readFileSync(source.cachePath, "utf-8"))
}

function saveCacheEntry(
  source: SentencePracticeDataFile,
  entry: SentencePracticeCacheEntry,
): void {
  mkdirSync(dirname(source.cachePath), { recursive: true })
  writeFileSync(source.cachePath, JSON.stringify(entry), "utf-8")
}

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
        // Server not ready yet.
      }
      await new Promise((r) => setTimeout(r, 1000))
    }
    throw new Error("Kagome failed to start within 30 seconds")
  }

  async tokenize(text: string): Promise<KagomeToken[]> {
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

async function analyzeGrammarBatch(
  tokenGroups: KagomeToken[][],
): Promise<GrammarAnalysisResult[]> {
  if (tokenGroups.length === 0) return []

  return new Promise((resolve) => {
    const child = spawn(GRAMMAR_CLI, ["--batch"], {
      stdio: ["pipe", "pipe", "ignore"],
    })
    let stdout = ""

    child.stdout.setEncoding("utf-8")
    child.stdout.on("data", (chunk) => {
      stdout += chunk
    })
    child.on("close", (code) => {
      if (code !== 0) {
        resolve(tokenGroups.map(() => ({ tokens: [] })))
        return
      }

      try {
        resolve(JSON.parse(stdout))
      } catch {
        resolve(tokenGroups.map(() => ({ tokens: [] })))
      }
    })
    child.stdin.end(JSON.stringify(tokenGroups))
  })
}

async function generateCanonicalAnswerTokens(
  questions: Question[],
  kagome: KagomeServer,
): Promise<ProcessedQuestion["canonicalAnswerTokens"][]> {
  const preparedQuestions = questions.map((q) =>
    prepareQuestion({
      ...q,
      canonicalAnswerTokens: [],
    }),
  )
  const answerJobs: {
    questionIndex: number
    canonicalAnswerIndex: number
    text: string
  }[] = []

  for (
    let questionIndex = 0;
    questionIndex < preparedQuestions.length;
    questionIndex++
  ) {
    const prepared = preparedQuestions[questionIndex]
    for (
      let canonicalAnswerIndex = 0;
      canonicalAnswerIndex < prepared.canonicalAnswers.length;
      canonicalAnswerIndex++
    ) {
      const text = prepared.canonicalAnswers[canonicalAnswerIndex].plain
        .split(SENTENCE_BATCH_SEPARATOR)
        .join("")
        .replace(/\s+/g, "")
      if (text) answerJobs.push({ questionIndex, canonicalAnswerIndex, text })
    }
  }

  if (answerJobs.length === 0) {
    return questions.map(() => [])
  }

  const batchedText = answerJobs
    .map((job) => job.text)
    .join(SENTENCE_BATCH_SEPARATOR)
  const allTokens = await kagome.tokenize(batchedText)

  const tokenGroups: KagomeToken[][] = []
  let currentGroup: KagomeToken[] = []

  for (const token of allTokens) {
    if (token.surface === SENTENCE_BATCH_SEPARATOR) {
      tokenGroups.push(normalizeTokenPositions(currentGroup))
      currentGroup = []
    } else {
      currentGroup.push(token)
    }
  }
  tokenGroups.push(normalizeTokenPositions(currentGroup))

  const results: ProcessedQuestion["canonicalAnswerTokens"][] =
    preparedQuestions.map((question) => question.canonicalAnswers.map(() => []))
  const analysisResults = await analyzeGrammarBatch(
    tokenGroups.slice(0, answerJobs.length),
  )

  for (let i = 0; i < answerJobs.length; i++) {
    const { questionIndex, canonicalAnswerIndex } = answerJobs[i]
    const analysisResult = analysisResults[i]
    results[questionIndex][canonicalAnswerIndex] = analysisResult.tokens.map(
      (token) => ({
        t: token.surface,
        p: token.pos[0] ?? "",
      }),
    )
  }

  return results
}

function normalizeTokenPositions(tokens: KagomeToken[]): KagomeToken[] {
  const offset = tokens[0]?.start ?? 0
  return tokens.map((token) => ({
    ...token,
    start: token.start - offset,
    end: token.end - offset,
  }))
}

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
  return basename(filePath, ".ts")
}

function getCachePath(relativePath: string): string {
  return join(CACHE_DIR, `${relativePath}.json`)
}

function parseArgs(args: string[]): Options {
  return {
    filters: args.filter((arg) => !arg.startsWith("--")),
    noImport: args.includes("--no-import"),
  }
}

function matchesFilters(source: SentencePracticeDataFile, filters: string[]): boolean {
  if (filters.length === 0) return true
  return filters.some((filter) => {
    const normalized = filter.replace(/\.ts$/, "")
    return (
      source.relativePath.includes(normalized) ||
      source.setId.includes(normalized)
    )
  })
}

function discoverDataFiles(filters: string[]): SentencePracticeDataFile[] {
  return findDataFiles(DATA_DIR)
    .map((file) => {
      const relativePath = relative(DATA_DIR, file)
      return {
        file,
        relativePath,
        setId: getSetId(file),
        cachePath: getCachePath(relativePath),
        sourceHash: computeFileHash(file),
      }
    })
    .filter((source) => matchesFilters(source, filters))
}

function getConvexUrl(): string {
  const url = process.env.VITE_CONVEX_URL ?? process.env.CONVEX_URL
  if (!url) {
    throw new Error("VITE_CONVEX_URL is not set. Check .env.local.")
  }
  return url
}

function chunkQuestionsBySize<T>(
  questions: T[],
  maxBytes = MAX_CONVEX_BATCH_BYTES,
): T[][] {
  const chunks: T[][] = []
  let current: T[] = []
  let currentBytes = 2

  for (const question of questions) {
    const questionBytes = Buffer.byteLength(JSON.stringify(question)) + 1
    if (current.length > 0 && currentBytes + questionBytes > maxBytes) {
      chunks.push(current)
      current = []
      currentBytes = 2
    }
    current.push(question)
    currentBytes += questionBytes
  }

  if (current.length > 0) chunks.push(current)
  return chunks
}

async function syncSentencePracticeToConvex(
  changedEntries: SentencePracticeCacheEntry[],
  removedSetIds: string[],
): Promise<void> {
  if (changedEntries.length === 0 && removedSetIds.length === 0) {
    console.log("No changed sets to import.")
    return
  }

  const client = new ConvexHttpClient(getConvexUrl())

  if (changedEntries.length > 0) {
    console.log(`Importing ${changedEntries.length} changed sets to Convex...`)
    for (const entry of changedEntries) {
      await client.mutation(deleteSentencePracticeQuestionsMutation, {
        setId: entry.setId,
      })
      for (const chunk of chunkQuestionsBySize(entry.questions)) {
        await client.mutation(insertSentencePracticeQuestionsMutation, {
          setId: entry.setId,
          questions: chunk,
        })
      }
    }
  }

  if (removedSetIds.length > 0) {
    console.log(`Deleting ${removedSetIds.length} removed sets from Convex...`)
    for (const setId of removedSetIds) {
      await client.mutation(deleteSentencePracticeQuestionsMutation, { setId })
    }
  }
}

async function main() {
  console.log("Sentence Practice Seeder")
  console.log("========================\n")

  const options = parseArgs(process.argv.slice(2))
  const dataFiles = discoverDataFiles(options.filters)
  const manifest = loadManifest()
  const currentRelativePaths = new Set(
    dataFiles.map((source) => source.relativePath),
  )
  const currentSetIds = new Set(dataFiles.map((source) => source.setId))
  const staleMovedEntries = options.filters.length
    ? []
    : Object.entries(manifest).filter(
        ([relativePath, entry]) =>
          !currentRelativePaths.has(relativePath) &&
          currentSetIds.has(entry.setId),
      )
  const removedEntries = options.filters.length
    ? []
    : Object.entries(manifest).filter(
        ([relativePath, entry]) =>
          !currentRelativePaths.has(relativePath) &&
          !currentSetIds.has(entry.setId),
      )
  let totalQuestionCount = 0
  const entriesToSync: {
    source: SentencePracticeDataFile
    entry: SentencePracticeCacheEntry
  }[] = []

  console.log(
    `Found ${dataFiles.length} data files${options.filters.length ? " matching filters" : ""}\n`,
  )

  const changedDataFiles: SentencePracticeDataFile[] = []
  const cachedDataFiles: SentencePracticeDataFile[] = []

  for (const source of dataFiles) {
    const cached = loadCacheEntry(source)
    if (cached?.sourceHash === source.sourceHash) {
      cachedDataFiles.push(source)
      totalQuestionCount += cached.questions.length
      if (!existsSync(source.cachePath) || !manifest[source.relativePath]) {
        saveCacheEntry(source, cached)
        manifest[source.relativePath] = {
          setId: source.setId,
          cachePath: relative(CACHE_DIR, source.cachePath),
        }
      }
    } else {
      changedDataFiles.push(source)
    }
  }

  if (cachedDataFiles.length > 0) {
    console.log(`Skipping ${cachedDataFiles.length} unchanged files:`)
    for (const source of cachedDataFiles) {
      console.log(`  ✓ ${source.setId} (cached)`)
    }
    console.log()
  }

  if (changedDataFiles.length > 0) {
    console.log(`Processing ${changedDataFiles.length} changed files:\n`)

    const kagome = new KagomeServer()
    await kagome.start()

    try {
      for (const source of changedDataFiles) {
        process.stdout.write(`  ${source.setId}... `)

        const module = await import(source.file)
        const questions: Question[] = module.questions
        const canonicalAnswerTokens = await generateCanonicalAnswerTokens(
          questions,
          kagome,
        )
        const processedQuestions: ProcessedQuestion[] = questions.map((q, i) => ({
          setId: source.setId,
          order: i,
          english: q.english,
          hint: q.hint,
          answers: q.answers,
          canonicalAnswerTokens: canonicalAnswerTokens[i],
        }))
        const entry: SentencePracticeCacheEntry = {
          sourceHash: source.sourceHash,
          setId: source.setId,
          questions: processedQuestions,
        }

        manifest[source.relativePath] = {
          setId: source.setId,
          cachePath: relative(CACHE_DIR, source.cachePath),
        }
        entriesToSync.push({ source, entry })
        totalQuestionCount += processedQuestions.length

        console.log(`✓ (${questions.length} questions)`)
      }
    } finally {
      kagome.shutdown()
    }
  }

  if (totalQuestionCount === 0 && removedEntries.length === 0) {
    console.log("No matching questions found.")
    return
  }

  if (options.noImport) {
    for (const { source, entry } of entriesToSync) {
      saveCacheEntry(source, entry)
    }
    saveManifest(manifest)
    console.log("Skipping Convex import (--no-import).")
  } else {
    await syncSentencePracticeToConvex(
      entriesToSync.map(({ entry }) => entry),
      removedEntries.map(([, entry]) => entry.setId),
    )

    for (const { source, entry } of entriesToSync) {
      saveCacheEntry(source, entry)
    }
    for (const [relativePath, entry] of [
      ...removedEntries,
      ...staleMovedEntries,
    ]) {
      const cachePath = join(CACHE_DIR, entry.cachePath)
      if (existsSync(cachePath)) rmSync(cachePath)
      delete manifest[relativePath]
    }
    saveManifest(manifest)
  }

  const importSummary = options.noImport
    ? "Convex import skipped"
    : `updated ${entriesToSync.length} sets`
  console.log(`\n✓ Done! Found ${totalQuestionCount} questions, ${importSummary}`)
}

main().catch((error) => {
  console.error("\n✗ Fatal error:", error)
  process.exit(1)
})
