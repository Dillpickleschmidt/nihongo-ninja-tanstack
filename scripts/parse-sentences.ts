/**
 * Parse Sentences Script
 *
 * Pre-parses sentence practice questions with Kagome morphological analyzer,
 * analyzes grammar patterns to detect conjugations, combines conjugation tokens,
 * and stores POS (part of speech) tags for real-time comparison during practice.
 *
 * Prerequisites:
 * - Kagome CLI must be installed (https://github.com/ikawaha/kagome)
 *   Installation: go install github.com/ikawaha/kagome/v2@latest
 * - Grammar CLI binary must be present at bin/grammar-cli
 *   (Built from ~/Programming-Projects/japanese-subtitle-search/grammar-lib)
 *
 * Usage:
 *   bun run parse-sentences
 */

import { spawn, ChildProcess, execSync } from "child_process"
import { readFileSync, writeFileSync, existsSync } from "fs"
import { join, relative } from "path"
import { createHash } from "crypto"
import { glob } from "glob"
import { ConjugationEngine } from "../src/features/sentence-practice/core/conjugation/ConjugationEngine"
import type {
  ConjugatableSegment,
  ConjugatedWord,
  BlankableWord,
} from "../src/features/sentence-practice/core/conjugation/types"
import { combineConjugationTokens } from "../src/features/sentence-practice/kagome/utils/combineConjugationTokens"

// --- Types ---

interface PracticeQuestion {
  english: string
  hint?: string
  answers: Answer[]
  modelAnswerPOS?: string[][] // Added by this script
}

interface Answer {
  segments: ConjugatableSegment[]
  notes?: string
  isVariation?: boolean
  isKanaVariation?: boolean
  originalPoliteForm?: boolean
  sourceAnswerIndex?: number
  pronounType?: string
  honorificType?: string
}

interface KagomeToken {
  id: number
  start: number
  end: number
  surface: string
  class: string
  pos: string[]
  base_form: string
  reading: string
  pronunciation: string
  features: string[]
}

interface TokenizeRequest {
  sentence: string
  mode: string
}

interface TokenizeResponse {
  tokens: KagomeToken[]
}

interface GrammarMatch {
  pattern_name: string
  confidence: number
  start_char: number
  end_char: number
  category: "Construction" | "Conjugation"
  conjugation_pattern: string
}

interface FileCache {
  [filePath: string]: string // filePath -> hash
}

// --- Configuration ---

const KAGOME_PORT = 6060
const DATA_DIR = join(process.cwd(), "src/features/sentence-practice/data")
const CACHE_FILE = join(process.cwd(), ".sentence-parse-cache.json")
const GRAMMAR_CLI = join(process.cwd(), "bin/grammar-cli")

// --- Kagome Server Manager ---

class KagomeServer {
  private process: ChildProcess | null = null
  private baseUrl: string

  constructor(port: number) {
    this.baseUrl = `http://localhost:${port}`
  }

  async start(): Promise<void> {
    console.log(`Starting Kagome server on port ${KAGOME_PORT}...`)

    this.process = spawn("kagome", ["server", "-http", `:${KAGOME_PORT}`], {
      stdio: "ignore", // Suppress kagome output
    })

    // Wait for server to be ready
    let attempts = 0
    while (attempts < 30) {
      try {
        const response = await fetch(`${this.baseUrl}/`)
        if (response.ok) {
          console.log("✓ Kagome server started successfully\n")
          return
        }
      } catch {
        // Server not ready yet
      }
      await new Promise((resolve) => setTimeout(resolve, 1000))
      attempts++
    }

    throw new Error("Kagome server failed to start within 30 seconds")
  }

  async tokenize(text: string): Promise<KagomeToken[]> {
    const request: TokenizeRequest = {
      sentence: text,
      mode: "normal",
    }

    const response = await fetch(`${this.baseUrl}/tokenize`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(request),
    })

    if (!response.ok) {
      throw new Error(`Kagome server returned error: ${response.status}`)
    }

    const data: TokenizeResponse = await response.json()
    return data.tokens
  }

  shutdown(): void {
    if (this.process) {
      console.log("\nShutting down Kagome server...")
      this.process.kill()
      this.process = null
    }
  }
}

// --- Helper Functions ---

/**
 * Analyze grammar patterns using the CLI binary
 */
function analyzeGrammar(tokens: KagomeToken[]): GrammarMatch[] {
  try {
    const input = JSON.stringify(tokens)
    const output = execSync(GRAMMAR_CLI, {
      input,
      encoding: "utf-8",
      maxBuffer: 10 * 1024 * 1024, // 10MB buffer
    })
    return JSON.parse(output)
  } catch (error) {
    console.error("  ✗ Grammar analysis failed:", error)
    return []
  }
}

/**
 * Compute MD5 hash of file contents for change detection
 */
function computeFileHash(filePath: string): string {
  const content = readFileSync(filePath, "utf-8")
  return createHash("md5").update(content).digest("hex")
}

/**
 * Load cache from disk
 */
function loadCache(): FileCache {
  if (existsSync(CACHE_FILE)) {
    const cacheContent = readFileSync(CACHE_FILE, "utf-8")
    return JSON.parse(cacheContent)
  }
  return {}
}

/**
 * Save cache to disk
 */
function saveCache(cache: FileCache): void {
  writeFileSync(CACHE_FILE, JSON.stringify(cache, null, 2), "utf-8")
}

/**
 * Type guards
 */
function isBlankableWord(
  segment: ConjugatableSegment,
): segment is BlankableWord {
  return (
    typeof segment === "object" &&
    "blank" in segment &&
    segment.blank !== undefined
  )
}

function isConjugatedWord(
  segment: string | ConjugatedWord,
): segment is ConjugatedWord {
  return typeof segment === "object" && "pos" in segment
}

// Remove furigana brackets and spaces
const CLEANUP_REGEX = /\[([^\]]+)\]|\s+/g

/**
 * Extract Japanese text from segments for parsing
 * Uses conjugation engine for conjugatable words, defaults to polite form (first variant)
 */
function segmentsToText(
  segments: ConjugatableSegment[],
  conjugationEngine: ConjugationEngine,
): string {
  const USE_POLITE_FORM = true

  // Handle blank words first
  const transformedSegments = segments.map((segment) =>
    isBlankableWord(segment) ? segment.word : segment,
  )

  // Conjugate all segments together so engine can see following words for context
  const conjugated = conjugationEngine.conjugateSegments(
    transformedSegments,
    USE_POLITE_FORM,
  )

  // Use first variation (polite form), clean up furigana brackets and spaces
  return conjugated
    .map((variations) => (variations[0] || "").replace(CLEANUP_REGEX, ""))
    .join("")
}

/**
 * Parse all questions in a file and add modelAnswerPOS field
 */
async function parseQuestionsFile(
  filePath: string,
  kagome: KagomeServer,
  conjugationEngine: ConjugationEngine,
): Promise<void> {
  const content = readFileSync(filePath, "utf-8")
  const questions: PracticeQuestion[] = JSON.parse(content)

  let parsedCount = 0

  for (const question of questions) {
    if (question.answers.length === 0) continue

    // Parse first answer only (model answer)
    const firstAnswer = question.answers[0]
    const text = segmentsToText(firstAnswer.segments, conjugationEngine)

    try {
      const tokens = await kagome.tokenize(text)

      // Analyze grammar patterns to detect conjugations
      const grammarMatches = analyzeGrammar(tokens)

      // Combine conjugation tokens (e.g., 飲み + ます → 飲みます)
      const combinedTokens = combineConjugationTokens(
        text,
        tokens,
        grammarMatches,
      )

      // Store only POS arrays from combined tokens
      question.modelAnswerPOS = combinedTokens.map((token) => token.pos)
      parsedCount++
    } catch (error) {
      console.error(`  ✗ Error parsing "${text}": ${error}`)
    }
  }

  // Write back to file with pretty formatting
  writeFileSync(filePath, JSON.stringify(questions, null, 2) + "\n", "utf-8")

  return
}

/**
 * Main execution
 */
async function main() {
  console.log("Sentence Practice Parser")
  console.log("========================\n")

  // Find all question files
  const pattern = join(DATA_DIR, "**/*.json")
  const files = await glob(pattern, { absolute: true })

  if (files.length === 0) {
    console.log("No question files found!")
    return
  }

  console.log(`Found ${files.length} question files\n`)

  // Load cache
  const cache = loadCache()
  let changedFiles: string[] = []
  let unchangedFiles: string[] = []

  // Check which files need re-parsing
  for (const file of files) {
    const currentHash = computeFileHash(file)
    const cachedHash = cache[file]

    if (currentHash === cachedHash) {
      unchangedFiles.push(file)
    } else {
      changedFiles.push(file)
      cache[file] = currentHash // Update cache
    }
  }

  // Report status
  if (unchangedFiles.length > 0) {
    console.log(`Skipping ${unchangedFiles.length} unchanged files:`)
    for (const file of unchangedFiles) {
      const relativePath = relative(DATA_DIR, file)
      console.log(`  ✓ ${relativePath} (cached)`)
    }
    console.log()
  }

  if (changedFiles.length === 0) {
    console.log("✓ All files up to date! No parsing needed.")
    return
  }

  console.log(`Parsing ${changedFiles.length} changed files:\n`)

  // Initialize conjugation engine
  const conjugationEngine = new ConjugationEngine()

  // Start Kagome server
  const kagome = new KagomeServer(KAGOME_PORT)
  try {
    await kagome.start()

    // Parse each changed file
    for (const file of changedFiles) {
      const relativePath = relative(DATA_DIR, file)
      process.stdout.write(`  Parsing ${relativePath}... `)

      try {
        await parseQuestionsFile(file, kagome, conjugationEngine)
        // Update cache hash after successful parse
        cache[file] = computeFileHash(file)
        console.log("✓")
      } catch (error) {
        console.log(`✗ Error: ${error}`)
      }
    }

    // Save updated cache
    saveCache(cache)

    console.log(`\n✓ Done! Parsed ${changedFiles.length} files.`)
  } finally {
    kagome.shutdown()
  }
}

// Run with proper error handling
main().catch((error) => {
  console.error("\n✗ Fatal error:", error)
  process.exit(1)
})
